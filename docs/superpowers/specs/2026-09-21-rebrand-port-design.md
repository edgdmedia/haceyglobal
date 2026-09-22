# HACEY Global Rebrand — Port Client Build onto Next 16 + OpenNext

**Date:** 2026-09-21
**Status:** Approved design, pending implementation plan
**Repo:** `/Users/olalekan/Projects/hacey/haceyglobal` (branch `development`)

## Goal

Archive the current HACEY LLC website in place, then rebuild the client's
rebranded site — handed over at `docs/HACEY-Global-Rebrand/03-Website`, live
reference at <https://hacey-global-reimagined.jogojogo.chatgpt.site/> — onto
this repo's existing Next.js 16 + `@opennextjs/cloudflare` toolchain.

Same repo. Archive, then rebuild. Not an overwrite.

## Context

The handover is a `vinext` 1.0.0-beta.5 project (OpenAI site-creator's
Vite/RSC runner) deployed via `@cloudflare/vite-plugin`. Decisive finding:
its source imports **only** `next`, `next/link`, `next/navigation`,
`next/font/google` — zero vinext-specific APIs. It is a plain App Router
application that vinext merely runs, so the port is near-mechanical rather
than a rewrite.

| | Current site | Client build | Target |
|---|---|---|---|
| Framework | Next.js 16.2.11 | vinext 1.0.0-beta.5 | Next.js 16.2.11 |
| Deploy | `@opennextjs/cloudflare` | `@cloudflare/vite-plugin` | `@opennextjs/cloudflare` |
| Routes | 5 | 22 + 1 API | 22 + 1 API |
| Content | markdown in `/content` | typed `lib/content.ts` | typed `lib/content.ts` |
| UI | 16 hand-rolled | 60 shadcn (12 used) | 12 shadcn |
| `public/` | 10 MB, 72 files | 720 KB, 2 files | 720 KB, 2 files |

### Decisions taken

1. **Toolchain:** port onto existing Next 16 + OpenNext. Keeps the working
   Cloudflare deploy, avoids pinning to a beta framework, and matches the
   repo's `AGENTS.md` guidance.
2. **Archive:** git tag + branch, *and* the old source moved to
   `docs/archive/legacy-site/`.
3. **Content:** keep `lib/content.ts` verbatim. The markdown pipeline retires.
4. **UI components:** prune to the 12 actually imported.
5. **Contact endpoint:** ship with `CONTACT_FORM_ENDPOINT` unset; wire later.

## 1. Archive

Preserve the current site two ways — restorable *and* browsable.

1. Commit the working tree on `development` (this folds in the 100 pending
   `docs/` deletions and the untracked `docs/HACEY-Global-Rebrand/` and
   `docs/archive/`).
2. Tag `v1-legacy-site`; push branch `legacy/v1-site`.
3. `git mv` into `docs/archive/legacy-site/`:
   - `src/` — 27 files, 16 components, 5 routes
   - `content/` — 6 markdown files
   - `public/` — 72 files, 10 MB
   - snapshots of `package.json`, `next.config.ts`, `wrangler.jsonc`, `tsconfig.json`
4. Write `docs/archive/legacy-site/README.md`: what this is, archived date,
   the tag and branch to restore from, and the deploy config it ran under.

The pre-existing `docs/archive/` contents (archive one) stay untouched.

## 2. Target structure

The client's `app/ components/ lib/ hooks/` land under `src/`. Because this
repo maps `@/*` → `./src/*` and the client maps `@/*` → `./*`, every `@/…`
import resolves unchanged with no rewriting.

```
src/
  app/
    layout.tsx  page.tsx  globals.css  not-found.tsx  robots.ts  sitemap.ts
    about/  approach/  capabilities/  solutions/  industries/  products/
    technology/  work/  insights/  contact/  privacy/  cookies/  terms/
    accessibility/  responsible-ai/  security/
    capabilities/[slug]/  solutions/[slug]/  industries/[slug]/
    products/[slug]/  insights/[slug]/
    api/contact/route.ts
  components/
    site/   header  footer  page-hero  card-grid  detail-page  policy-page  contact-form
    ui/     button  dialog  dropdown-menu  input  input-group  label
            separator  sheet  skeleton  textarea  toggle  tooltip
  hooks/use-mobile.ts
  lib/utils.ts  lib/content.ts
public/
  favicon.svg  og.png
```

Dropped as vinext-only: `vite.config.ts`, `.openai/`, `.vinext/`,
`.wrangler/`, `.oxlintrc.json`, `.oxfmtrc.json`, the client's
`package.json`/`tsconfig.json`/`next.config.ts`.

`components.json` is copied with its `tailwind.css` path repointed to
`src/app/globals.css`, so the shadcn CLI keeps working for future additions.

## 3. Dependencies

**Add** — all required by the 12 retained components, `lib/utils.ts`, or
`globals.css`:

| Package | Version | Needed by |
|---|---|---|
| `@base-ui/react` | 1.7.0 | button, dialog, dropdown-menu, input, separator, toggle, tooltip |
| `class-variance-authority` | 0.7.1 | button, toggle variants |
| `clsx` | 2.1.1 | `lib/utils.ts` |
| `tailwind-merge` | 3.6.0 | `lib/utils.ts` |
| `lucide-react` | 1.31.0 | icons across site + ui components |
| `tw-animate-css` | 1.4.0 | `@import` in `globals.css` |
| `shadcn` | 4.18.0 | `@import 'shadcn/tailwind.css'` — a runtime CSS dep, not just a CLI |

**Remove:** `gray-matter`, `marked` — the markdown pipeline retires with `/content`.

**Not added** (tied only to the 48 pruned components): `@shadcn/react`,
`recharts`, `embla-carousel-react`, `react-day-picker`, `cmdk`, `input-otp`,
`react-resizable-panels`, `date-fns`.

**Unchanged:** `next` 16.2.11, `react`/`react-dom` 19, `tailwindcss` 4,
`@opennextjs/cloudflare`, `wrangler`, `eslint`, `typescript`.

Verified: the 12 retained components import nothing outside this list and
pull in none of the other 48.

## 4. Configuration

- **`wrangler.jsonc`** — unchanged. Worker name `haceyglobal`, `.open-next`
  assets, `WORKER_SELF_REFERENCE` and `IMAGES` bindings all stay.
- **`next.config.ts`** — keep the `initOpenNextCloudflareForDev()` hook; add
  the `redirects()` block from §5.
- **Env** — `CONTACT_FORM_ENDPOINT` documented in `.dev.vars.example`, left
  unset. `/api/contact` returns 503 until it is set as a Worker secret.
- **`eslint.config.mjs`** — unchanged; the client's oxlint config is dropped.

## 5. Redirects

The information architecture changed, so live URLs must not 404:

| Old | New |
|---|---|
| `/services` | `/capabilities` |
| `/practice-areas` | `/capabilities` |
| `/impact` | `/work` |
| `/privacy-policy` | `/privacy` |

`/about` and `/` exist in both. All permanent (308).

## 6. Risks

1. **`next/font/google`** — the client self-hosts Geist and IBM Plex Mono via
   `next/font`; this repo currently uses a Google Fonts CSS `@import`. Build
   and Worker preview must both be checked, since `next/font` needs network
   at build time and emits static assets OpenNext has to serve.
2. **`globals.css`** — 351 lines carrying Tailwind 4 theme tokens *and* the
   custom classes every page depends on (`.shell`, `.article-shell`, `.lede`,
   `.eyebrow`, `.button-accent`). Port whole; a partial copy silently
   unstyles pages. The old brand tokens (`--color-hacey-navy`/`-teal`/`-lime`)
   do not carry forward.
3. **`/api/contact`** — a Worker-runtime route, not static. Must be exercised
   in `npm run preview`, not just `npm run dev`.
4. **`sitemap.ts` / `robots.ts`** — must emit correctly under OpenNext;
   `sitemap.ts` hardcodes origin `https://haceyglobal.com`.
5. **Dynamic routes** — already use the Next 15/16 `params: Promise<{slug}>`
   convention with `await`, plus `generateStaticParams`. Expected to port
   clean; confirm against `node_modules/next/dist/docs/` per `AGENTS.md`.

## 7. Verification

Work is done when all of these pass:

1. `npm run build` completes with no errors or new warnings.
2. `npm run dev` — all 22 routes render (17 static, 5 dynamic templates expanded by `generateStaticParams`); every nav and footer link resolves.
3. `npm run preview` — Worker runtime serves all routes; `/api/contact`
   returns 503 (expected, endpoint unset) rather than crashing.
4. Playwright screenshot comparison against
   <https://hacey-global-reimagined.jogojogo.chatgpt.site/> at desktop and
   mobile widths for the homepage and one page of each template type
   (detail, policy, insights index, article, contact).
5. `/sitemap.xml` lists all static and dynamic paths; `/robots.txt` serves.
6. The four redirects in §5 resolve.
7. `npm run lint` clean.
8. `docs/archive/legacy-site/` contains the old site; `git show v1-legacy-site`
   resolves.

## 8. Build order

1. Archive: commit, tag, branch, `git mv`, archive README.
2. Dependencies and configuration.
3. `lib/`, `hooks/`, the 12 `ui/` components.
4. `globals.css`, `layout.tsx`, the 7 `site/` components.
5. The 17 static routes, `not-found.tsx`.
6. The 5 dynamic routes, `api/contact`, `sitemap.ts`, `robots.ts`.
7. Redirects.
8. Verification per §7.

## Out of scope

Markdown or CMS-backed content (a later project), wiring the contact
endpoint, DNS or domain changes, and porting the old `public/` imagery — the
new design is entirely image-free, using zero `<img>` or `next/image`.
