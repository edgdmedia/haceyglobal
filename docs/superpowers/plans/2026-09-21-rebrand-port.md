# HACEY Global Rebrand Port — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Archive the current HACEY LLC website in this repo, then rebuild the client's rebranded handover on the repo's existing Next.js 16 + `@opennextjs/cloudflare` toolchain.

**Architecture:** The handover at `docs/HACEY-Global-Rebrand/03-Website` is a `vinext` (Vite/RSC) project, but its source imports only `next`, `next/link`, `next/navigation` and `next/font/google` — no vinext-specific APIs. So the port is a file copy into `src/` plus a dependency and config swap, not a rewrite. Both projects alias `@/*` (this repo to `./src/*`, the handover to `./*`), so every `@/…` import resolves unchanged once files land under `src/`.

**Tech Stack:** Next.js 16.2.11 (App Router, RSC), React 19, Tailwind CSS 4, shadcn/`@base-ui/react`, TypeScript 5, `@opennextjs/cloudflare` + Wrangler (Cloudflare Workers).

**Spec:** `docs/superpowers/specs/2026-09-21-rebrand-port-design.md`

## Global Constraints

- **No test framework exists in this repo.** There is no jest, vitest, or Playwright in `package.json`. Do not invent one. Every task is verified by `npm run build`, `npm run lint`, `npm run dev`/`npm run preview` route checks, and HTTP status assertions via `curl`. Substituting a real check for a TDD cycle is correct here; inventing a test harness is out of scope.
- **Source of truth for all ported code:** `docs/HACEY-Global-Rebrand/03-Website/`. Referred to below as `$SRC`. Copy files verbatim. Do not reformat, rename, restyle, or "improve" ported code — visual fidelity to <https://hacey-global-reimagined.jogojogo.chatgpt.site/> is the acceptance bar.
- **Do not modify `wrangler.jsonc`.** Worker name `haceyglobal`, `.open-next` assets, `WORKER_SELF_REFERENCE` and `IMAGES` bindings all stay as-is.
- **Do not port the old `public/` imagery.** The new design is image-free: zero `<img>`, zero `next/image`. Only `favicon.svg` and `og.png` carry forward.
- **`CONTACT_FORM_ENDPOINT` stays unset.** `/api/contact` returning HTTP 503 is the expected, correct behaviour for this plan.
- **Next.js version:** 16.2.11. Per `AGENTS.md`, consult `node_modules/next/dist/docs/` before writing new Next-specific code rather than relying on memory.
- **Exact dependency versions to add:** `@base-ui/react@1.7.0`, `class-variance-authority@0.7.1`, `clsx@2.1.1`, `tailwind-merge@3.6.0`, `lucide-react@1.31.0`, `tw-animate-css@1.4.0`, `shadcn@4.18.0`.
- **Commit after every task.** End commit messages with `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

## Content inventory (drives route-count assertions)

| Collection | Items | Route |
|---|---|---|
| capabilities | 6 | `/capabilities/[slug]` |
| solutions | 11 | `/solutions/[slug]` |
| industries | 6 | `/industries/[slug]` |
| products | 4 | `/products/[slug]` |
| articles | 5 | `/insights/[slug]` |

17 static routes + 32 generated dynamic URLs = **49 pages**, plus `/api/contact`, `/sitemap.xml`, `/robots.txt`.

## File structure

```
docs/archive/legacy-site/     # Task 1 — the old site, preserved
src/lib/{utils,content}.ts    # Task 3
src/hooks/use-mobile.ts       # Task 3
src/components/ui/            # Task 3 — 12 components
src/app/globals.css           # Task 4
src/app/layout.tsx            # Task 4
src/components/site/          # Task 4 — 7 components
src/app/page.tsx              # Task 4 — homepage
src/app/<16 static routes>/   # Task 5
src/app/*/[slug]/page.tsx     # Task 6 — 5 templates
src/app/api/contact/route.ts  # Task 6
src/app/{sitemap,robots}.ts   # Task 6
next.config.ts                # Task 7 — redirects
```

---

### Task 1: Archive the current site

**Files:**
- Create: `docs/archive/legacy-site/README.md`
- Move: `src/` → `docs/archive/legacy-site/src/`
- Move: `content/` → `docs/archive/legacy-site/content/`
- Move: `public/` → `docs/archive/legacy-site/public/`
- Copy: `package.json`, `next.config.ts`, `wrangler.jsonc`, `tsconfig.json` → `docs/archive/legacy-site/config/`

**Interfaces:**
- Consumes: nothing.
- Produces: an empty `src/`, `content/` and `public/` slot for Tasks 3–6; git tag `v1-legacy-site` and branch `legacy/v1-site` as restore points.

- [ ] **Step 1: Commit the current working tree**

The tree has ~100 pending `docs/` deletions from an earlier reshuffle plus untracked handover folders. Fold them into one commit so the tag captures a coherent state.

```bash
cd /Users/olalekan/Projects/hacey/haceyglobal
git add -A
git commit -m "Snapshot current site and rebrand handover before archive

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

- [ ] **Step 2: Create the restore points**

```bash
git tag -a v1-legacy-site -m "HACEY LLC site as deployed before the 2026 rebrand"
git branch legacy/v1-site
git push origin legacy/v1-site v1-legacy-site
```

Expected: branch and tag both appear on the remote. If there is no remote configured, skip the push and note it — the local tag and branch still satisfy the spec.

- [ ] **Step 3: Move the old site into the archive**

```bash
mkdir -p docs/archive/legacy-site/config
git mv src docs/archive/legacy-site/src
git mv content docs/archive/legacy-site/content
git mv public docs/archive/legacy-site/public
cp package.json next.config.ts wrangler.jsonc tsconfig.json docs/archive/legacy-site/config/
```

- [ ] **Step 4: Write the archive README**

Create `docs/archive/legacy-site/README.md`:

```markdown
# Legacy HACEY LLC Website (archived 2026-09-21)

The website this repository served before the HACEY Global rebrand.

## What is here

- `src/` — Next.js App Router source: 5 routes, 16 components
- `content/` — markdown page content, parsed with `gray-matter` + `marked`
- `public/` — 72 image and brand assets (10 MB)
- `config/` — the `package.json`, `next.config.ts`, `wrangler.jsonc` and
  `tsconfig.json` this site was built and deployed with

## Restoring

This directory is a browsable copy, not a runnable project. To get a
working tree of the old site:

    git checkout v1-legacy-site

or work from the `legacy/v1-site` branch.

## How it was deployed

Next.js 16.2.11 built through `@opennextjs/cloudflare` and deployed to the
Cloudflare Worker `haceyglobal` via `npm run deploy`.

## Why it was replaced

Superseded by the HACEY Global rebrand. See
`docs/superpowers/specs/2026-09-21-rebrand-port-design.md`.
```

- [ ] **Step 5: Verify the archive is complete**

```bash
test -f docs/archive/legacy-site/src/app/layout.tsx && echo "src OK"
test -f docs/archive/legacy-site/content/home.md && echo "content OK"
test -f docs/archive/legacy-site/config/wrangler.jsonc && echo "config OK"
ls docs/archive/legacy-site/public | wc -l   # expect 15+ top-level entries
test ! -d src && echo "src slot cleared"
git show v1-legacy-site --stat | head -3
```

Expected: four `OK`/cleared lines and the tag resolving. The pre-existing `docs/archive/*.md` files from the earlier archive must still be present — confirm with `ls docs/archive/`.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Archive legacy HACEY LLC site to docs/archive/legacy-site

Preserved at tag v1-legacy-site and branch legacy/v1-site.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 2: Dependencies and configuration

**Files:**
- Modify: `package.json`
- Create: `components.json`
- Create: `.dev.vars.example`

**Interfaces:**
- Consumes: the cleared tree from Task 1.
- Produces: `cn()`'s dependencies (`clsx`, `tailwind-merge`), `@base-ui/react` primitives and the `shadcn/tailwind.css` stylesheet that Tasks 3–4 import.

- [ ] **Step 1: Add the new dependencies**

```bash
npm install @base-ui/react@1.7.0 class-variance-authority@0.7.1 clsx@2.1.1 \
  tailwind-merge@3.6.0 lucide-react@1.31.0 tw-animate-css@1.4.0 shadcn@4.18.0
```

`shadcn` is a **runtime** dependency here, not just a CLI: `globals.css` does `@import 'shadcn/tailwind.css'`. Do not move it to `devDependencies`.

- [ ] **Step 2: Remove the retired markdown pipeline**

```bash
npm uninstall gray-matter marked
```

These served `content/*.md`, which moved to the archive in Task 1.

- [ ] **Step 3: Verify the dependency set**

```bash
node -e "
const d=require('./package.json').dependencies;
const want=['@base-ui/react','class-variance-authority','clsx','tailwind-merge','lucide-react','tw-animate-css','shadcn','next','react','react-dom'];
const gone=['gray-matter','marked','recharts','embla-carousel-react','react-day-picker','cmdk','input-otp','react-resizable-panels','date-fns','@shadcn/react'];
want.forEach(p=>console.log((d[p]?'OK   ':'MISS ')+p));
gone.forEach(p=>console.log((d[p]?'BAD  ':'clear')+' '+p));
"
```

Expected: every `want` line `OK`, every `gone` line `clear`.

- [ ] **Step 4: Add components.json with the path repointed to src/**

Copy `$SRC/components.json` to the repo root, changing only `tailwind.css`:

```bash
sed 's|"css": "app/globals.css"|"css": "src/app/globals.css"|' \
  docs/HACEY-Global-Rebrand/03-Website/components.json > components.json
grep '"css"' components.json   # expect src/app/globals.css
```

This keeps the shadcn CLI usable for re-adding any of the 48 pruned components later.

- [ ] **Step 5: Document the contact endpoint variable**

Create `.dev.vars.example`:

```
# Endpoint that /api/contact forwards submissions to.
# Unset: the route returns HTTP 503 and the contact form reports a failure.
# Production: set as a Worker secret with `wrangler secret put CONTACT_FORM_ENDPOINT`.
CONTACT_FORM_ENDPOINT=
```

Do **not** add it to `.dev.vars` — leaving it unset is intended. `.gitignore` already ignores `.env*`; confirm `.dev.vars.example` is not ignored with `git check-ignore -v .dev.vars.example` (expect no output).

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json components.json .dev.vars.example
git commit -m "Swap dependencies for the rebrand port

Add @base-ui/react, cva, clsx, tailwind-merge, lucide-react, tw-animate-css
and shadcn. Drop gray-matter and marked with the retired markdown pipeline.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 3: Foundation — utils, hooks, UI components

**Files:**
- Create: `src/lib/utils.ts`, `src/lib/content.ts`
- Create: `src/hooks/use-mobile.ts`
- Create: `src/components/ui/` — 12 files

**Interfaces:**
- Consumes: dependencies from Task 2.
- Produces:
  - `cn(...inputs: ClassValue[]): string` from `@/lib/utils`
  - From `@/lib/content`: type `DetailItem { slug, title, eyebrow?, summary, challenge?, outcomes?, services?, sections? }`, type `Article`, and consts `capabilities`, `solutions`, `industries`, `products`, `technologies`, `articles`, `approachStages`
  - From `@/components/ui/*`: `Button`, `Dialog`, `DropdownMenu`, `Input`, `InputGroup`, `Label`, `Separator`, `Sheet`, `Skeleton`, `Textarea`, `Toggle`, `Tooltip`

- [ ] **Step 1: Copy lib and hooks**

```bash
cd /Users/olalekan/Projects/hacey/haceyglobal
SRC=docs/HACEY-Global-Rebrand/03-Website
mkdir -p src/lib src/hooks src/components/ui
cp $SRC/lib/utils.ts $SRC/lib/content.ts src/lib/
cp $SRC/hooks/use-mobile.ts src/hooks/
```

- [ ] **Step 2: Copy exactly the 12 used UI components**

```bash
SRC=docs/HACEY-Global-Rebrand/03-Website
for c in button dialog dropdown-menu input input-group label \
         separator sheet skeleton textarea toggle tooltip; do
  cp "$SRC/components/ui/$c.tsx" src/components/ui/
done
ls src/components/ui | wc -l   # expect 12
```

- [ ] **Step 3: Verify no import escapes the copied set**

The prune is only safe if these 12 reference nothing outside themselves. Confirm:

```bash
grep -rhoE "@/components/ui/[a-z-]+" src/components/ui | sort -u
```

Expected exactly three lines — `@/components/ui/button`, `@/components/ui/input`, `@/components/ui/textarea` — all of which are in the copied set. Any other path means a 13th component is needed: copy it from `$SRC/components/ui/` and re-run.

- [ ] **Step 4: Verify the content module parses and exports what later tasks expect**

```bash
npx tsc --noEmit --skipLibCheck --jsx preserve --module esnext \
  --moduleResolution bundler src/lib/content.ts && echo "content.ts typechecks"
```

Expected: `content.ts typechecks`. This module is pure data with no imports, so it must pass standalone.

- [ ] **Step 5: Commit**

```bash
git add src/lib src/hooks src/components/ui
git commit -m "Port content module, utils, hooks and 12 shadcn components

Pruned from the handover's 60 UI components to the 12 actually imported.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 4: Styles, layout, site components and homepage

This is the first task that produces a buildable application, so it carries the first real build gate.

**Files:**
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/not-found.tsx`
- Create: `src/components/site/` — 7 files
- Create: `public/favicon.svg`, `public/og.png`

**Interfaces:**
- Consumes: `cn()`, `@/lib/content`, and the 12 UI components from Task 3.
- Produces: from `@/components/site/*` — `Header`, `Footer`, `PageHero`, `CardGrid`, `DetailPage`, `PolicyPage`, `ContactForm`. `DetailPage` takes `{ item: DetailItem; type: string }` and is consumed by all four non-insight dynamic routes in Task 6.

- [ ] **Step 1: Copy styles, root layout, homepage and site components**

```bash
cd /Users/olalekan/Projects/hacey/haceyglobal
SRC=docs/HACEY-Global-Rebrand/03-Website
mkdir -p src/components/site public
cp $SRC/app/globals.css $SRC/app/layout.tsx $SRC/app/page.tsx $SRC/app/not-found.tsx src/app/
cp $SRC/components/site/*.tsx src/components/site/
cp $SRC/public/favicon.svg $SRC/public/og.png public/
```

- [ ] **Step 2: Confirm globals.css arrived whole**

Every page depends on custom classes defined here (`.shell`, `.article-shell`, `.lede`, `.eyebrow`, `.button-accent`). A truncated copy silently unstyles the site.

```bash
wc -l src/app/globals.css                      # expect 351
head -3 src/app/globals.css                    # expect the 3 @import lines
for c in shell article-shell lede eyebrow button-accent; do
  grep -q "\.$c" src/app/globals.css && echo "OK   .$c" || echo "MISS .$c"
done
```

Expected: 351 lines, three `@import` lines (`tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`), and five `OK` lines.

- [ ] **Step 3: Build**

```bash
npm run build
```

Expected: a successful build whose route table lists `/` and `/_not-found`. `/sitemap.xml` and `/robots.txt` are **not** expected yet — Task 6 adds them. This step is where `next/font/google` is exercised for the first time — it downloads Geist and IBM Plex Mono at build time and needs network access. If it fails with a font fetch error, that is risk #1 from the spec: report it rather than switching to a CSS `@import`, since that would change rendering.

- [ ] **Step 4: Check the homepage renders with styling**

```bash
npm run dev &
sleep 8
curl -s localhost:3000 | grep -c "shell"        # expect > 0
curl -s -o /dev/null -w "%{http_code}\n" localhost:3000   # expect 200
kill %1
```

Expected: HTTP 200 and at least one `shell` class in the markup. Then open <http://localhost:3000> and compare against the live reference — the header, hero and footer should match.

- [ ] **Step 5: Commit**

```bash
git add src/app src/components/site public
git commit -m "Port global styles, root layout, homepage and site components

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 5: The 16 remaining static routes

**Files:**
- Create: `src/app/{about,approach,capabilities,solutions,industries,products,technology,work,insights,contact,privacy,cookies,terms,accessibility,responsible-ai,security}/page.tsx`

**Interfaces:**
- Consumes: `Header`/`Footer` via the Task 4 layout, plus `PageHero`, `CardGrid`, `PolicyPage`, `ContactForm` and the content collections.
- Produces: the index routes that Task 6's `[slug]` templates nest beneath.

- [ ] **Step 1: Copy all 16 route directories**

```bash
cd /Users/olalekan/Projects/hacey/haceyglobal
SRC=docs/HACEY-Global-Rebrand/03-Website
for r in about approach capabilities solutions industries products \
         technology work insights contact privacy cookies terms \
         accessibility responsible-ai security; do
  mkdir -p "src/app/$r"
  cp "$SRC/app/$r/page.tsx" "src/app/$r/page.tsx"
done
find src/app -name page.tsx -not -path "*\[slug\]*" | wc -l   # expect 17
```

17 = the 16 copied here plus the homepage from Task 4.

- [ ] **Step 2: Build**

```bash
npm run build
```

Expected: success, with all 17 static routes listed in the route table.

- [ ] **Step 3: Verify every static route serves 200**

```bash
npm run dev &
sleep 8
for p in "" about approach capabilities solutions industries products \
         technology work insights contact privacy cookies terms \
         accessibility responsible-ai security; do
  printf "%-16s %s\n" "/$p" "$(curl -s -o /dev/null -w '%{http_code}' localhost:3000/$p)"
done
kill %1
```

Expected: 17 lines, every one `200`.

- [ ] **Step 4: Commit**

```bash
git add src/app
git commit -m "Port the 16 static routes

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 6: Dynamic routes, contact API, sitemap and robots

**Files:**
- Create: `src/app/{capabilities,solutions,industries,products,insights}/[slug]/page.tsx`
- Create: `src/app/api/contact/route.ts`
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`

**Interfaces:**
- Consumes: `DetailPage` from Task 4; the content collections from Task 3.
- Produces: 32 generated URLs, `/api/contact` (POST), `/sitemap.xml`, `/robots.txt`.
- Each `[slug]` template exports `generateStaticParams()`, `generateMetadata({ params }: { params: Promise<{ slug: string }> })` and a default `async` page taking the same `Promise`-wrapped params. This is already the Next 15/16 convention — copy verbatim, do not "fix" the `await`.

- [ ] **Step 1: Copy the dynamic templates, API route and metadata files**

```bash
cd /Users/olalekan/Projects/hacey/haceyglobal
SRC=docs/HACEY-Global-Rebrand/03-Website
for r in capabilities solutions industries products insights; do
  mkdir -p "src/app/$r/[slug]"
  cp "$SRC/app/$r/[slug]/page.tsx" "src/app/$r/[slug]/page.tsx"
done
mkdir -p src/app/api/contact
cp $SRC/app/api/contact/route.ts src/app/api/contact/route.ts
cp $SRC/app/sitemap.ts $SRC/app/robots.ts src/app/
```

- [ ] **Step 2: Build and confirm all 32 dynamic URLs generate**

```bash
npm run build
```

Expected: the route table shows `/capabilities/[slug]` and friends as prerendered with their counts — 6 capabilities, 11 solutions, 6 industries, 4 products, 5 insights. A count mismatch means `generateStaticParams` is not seeing the content module.

- [ ] **Step 3: Verify a slug from each collection, plus sitemap and robots**

```bash
npm run dev &
sleep 8
for u in capabilities/strategy-transformation \
         insights/enterprise-ai-readiness \
         sitemap.xml robots.txt; do
  printf "%-42s %s\n" "/$u" "$(curl -s -o /dev/null -w '%{http_code}' localhost:3000/$u)"
done
echo "sitemap URL count:"; curl -s localhost:3000/sitemap.xml | grep -c "<loc>"
echo "404 check:"; curl -s -o /dev/null -w '%{http_code}\n' localhost:3000/capabilities/does-not-exist
kill %1
```

Expected: four `200` lines, a sitemap `<loc>` count of **49**, and `404` for the nonexistent slug (proving `notFound()` works).

- [ ] **Step 4: Verify the contact API's unset-endpoint behaviour**

```bash
npm run dev &
sleep 8
echo "valid payload, endpoint unset -> expect 503:"
curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:3000/api/contact \
  -H 'content-type: application/json' \
  -d '{"firstName":"A","lastName":"B","email":"a@b.com","organisation":"C","category":"D","message":"E","consent":"yes"}'
echo "invalid payload -> expect 400:"
curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:3000/api/contact \
  -H 'content-type: application/json' -d '{"firstName":"A"}'
kill %1
```

Expected: `503` then `400`. The 503 is correct — `CONTACT_FORM_ENDPOINT` is deliberately unset per the Global Constraints.

- [ ] **Step 5: Commit**

```bash
git add src/app
git commit -m "Port dynamic routes, contact API, sitemap and robots

32 generated detail pages across capabilities, solutions, industries,
products and insights.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 7: Redirects for retired URLs

**Files:**
- Modify: `next.config.ts`

**Interfaces:**
- Consumes: the routes created in Tasks 5–6 (redirect targets must already exist).
- Produces: permanent redirects from the four retired legacy paths.

- [ ] **Step 1: Add the redirects block**

Replace the body of `next.config.ts`, preserving the existing OpenNext dev hook exactly as it is:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/practice-areas", destination: "/capabilities", permanent: true },
      { source: "/impact", destination: "/work", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;

if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}
```

- [ ] **Step 2: Verify each redirect resolves to a live page**

```bash
npm run build && npm run dev &
sleep 10
for p in services practice-areas impact privacy-policy; do
  printf "%-16s %s -> %s\n" "/$p" \
    "$(curl -s -o /dev/null -w '%{http_code}' localhost:3000/$p)" \
    "$(curl -s -o /dev/null -w '%{redirect_url}' localhost:3000/$p)"
done
kill %1
```

Expected: each line shows `308` and a destination URL. Then confirm the destinations themselves return 200 — a redirect into a 404 is worse than no redirect.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "Redirect retired legacy URLs to their rebrand equivalents

/services and /practice-areas to /capabilities, /impact to /work,
/privacy-policy to /privacy.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 8: Full verification against the spec

**Files:**
- Modify: `README.md`
- Modify: source files only as needed to clear lint errors

**Interfaces:**
- Consumes: everything from Tasks 1–7.
- Produces: a verified, deployable site.

- [ ] **Step 1: Lint and fix**

```bash
npm run lint
```

Fix any errors in ported code properly — most likely `react/no-unescaped-entities` given the copy uses typographic apostrophes. Do **not** blanket-disable rules or add a broad `eslint-disable`. If a rule genuinely conflicts with the ported code's style, narrow the disable to the specific line and say why.

- [ ] **Step 2: Verify the Worker runtime, not just the dev server**

The dev server is Node; production is a Cloudflare Worker. `/api/contact` and `next/font` assets must be checked there.

```bash
npm run preview &
sleep 20
for u in "" about capabilities/strategy-transformation insights/enterprise-ai-readiness sitemap.xml robots.txt; do
  printf "%-42s %s\n" "/$u" "$(curl -s -o /dev/null -w '%{http_code}' localhost:8787/$u)"
done
echo "contact API:"; curl -s -o /dev/null -w '%{http_code}\n' -X POST localhost:8787/api/contact \
  -H 'content-type: application/json' \
  -d '{"firstName":"A","lastName":"B","email":"a@b.com","organisation":"C","category":"D","message":"E","consent":"yes"}'
kill %1
```

Expected: six `200` lines and `503` for the contact POST. Note the preview port may differ — read it from the wrangler output rather than assuming 8787.

- [ ] **Step 3: Confirm the fonts self-hosted correctly**

```bash
ls .open-next/assets/_next/static/media/ 2>/dev/null | head
```

Expected: woff2 files for Geist and IBM Plex Mono. If this directory is empty, `next/font` did not emit assets and the site will fall back to system fonts in production — a visible regression worth reporting.

- [ ] **Step 4: Visual comparison against the live reference**

Using the `agent-browser` or `webapp-testing` skill, capture the local site and <https://hacey-global-reimagined.jogojogo.chatgpt.site/> at 1440px and 390px widths for: `/`, `/capabilities`, `/capabilities/strategy-transformation`, `/insights`, `/insights/enterprise-ai-readiness`, `/privacy`, `/contact`.

Compare each pair. Differences in font rendering between the vinext and OpenNext builds are acceptable; differences in layout, spacing, colour or content are not — investigate and fix those.

- [ ] **Step 5: Update the README**

Rewrite `README.md` to describe the HACEY Global site: the route map, that content is edited in `src/lib/content.ts` (mirroring the guidance in `$SRC/README.md`), the `npm run dev` / `build` / `preview` / `deploy` scripts, and that `CONTACT_FORM_ENDPOINT` must be set as a Worker secret before the contact form will deliver.

- [ ] **Step 6: Final spec check**

Walk §7 of `docs/superpowers/specs/2026-09-21-rebrand-port-design.md` and confirm all eight acceptance criteria pass. Report any that do not rather than marking the task complete.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "Verify rebrand port and update README

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

## Deliberately out of scope

Wiring `CONTACT_FORM_ENDPOINT`, deploying to production, DNS or domain changes, markdown/CMS content migration, re-adding any of the 48 pruned UI components, and porting the old `public/` imagery.
