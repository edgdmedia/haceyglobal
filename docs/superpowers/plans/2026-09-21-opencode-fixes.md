# Fix-up prompt for Opencode — rebrand port review findings

Context: you implemented `docs/superpowers/plans/2026-09-21-rebrand-port.md` on
branch `rebrand-port`. Tasks 1–7 are committed; Task 8 never ran. A review found
the port itself is excellent — 49 of 50 ported files are byte-identical to the
handover, all 22 routes return 200 on both the Next dev server and the Cloudflare
Worker runtime, the sitemap has exactly 49 entries, `notFound()` works, the contact
API correctly returns 503/400, `next/font` self-hosts 15 woff2 files, and 6 of 7
pages are 0.00% pixel-different from the reference site at 1440px and 390px.

The items below are what is left. Work on branch `rebrand-port`. Commit after each
numbered item

---

## 1. BLOCKER — `npm run build` fails

`tsconfig.json` has `"exclude": ["node_modules"]`, so TypeScript type-checks
everything under `docs/`, including the legacy site you archived in Task 1 and the
vinext handover. The archived code's `@/components/Nav` no longer resolves because
`@/*` maps to `./src/*`.

First error:

    ./docs/archive/legacy-site/src/app/about/page.tsx:3:21
    Type error: Cannot find module '@/components/Nav'

Fix: add `"docs"` to `exclude`:

    "exclude": ["node_modules", "docs"]

Also add a matching ignore to `eslint.config.mjs` — `npm run lint` currently reports
**8959 problems**, of which **8958 come from `docs/`**. Scoped to `src/`, there is
exactly one real error (see item 3). Use the flat-config `ignores` key:

    { ignores: ["docs/**", ".next/**", ".open-next/**"] }

Verify: `npm run build` succeeds and `npm run lint` reports only `src/` findings.

## 2. BLOCKER — `next.config.ts` lost the OpenNext dev hook and has no redirects

Commit `2fa6550` is titled "Redirect retired legacy URLs to their rebrand
equivalents" but does the opposite: it replaced the repo's `next.config.ts` with the
handover's empty one, **deleting** the `initOpenNextCloudflareForDev()` hook and
adding **zero** redirects. All four legacy URLs currently return 404, verified on
both dev and the Worker.

Restore both. The complete intended file:

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

Verify: each of `/services`, `/practice-areas`, `/impact`, `/privacy-policy`
returns 308 with a `location` header, and each destination returns 200.

## 3. `sitemap.ts` does not type-check under Next 16

`src/app/sitemap.ts` uses `changeFrequency: 'quarterly'`. Next 16's
`MetadataRoute.Sitemap` only permits `always | hourly | daily | weekly | monthly |
yearly | never` — and `quarterly` is not in the sitemaps.org spec either. vinext
never type-checked this, so the bug shipped in the handover.

Build error:

    Type '"quarterly"' is not assignable to type '"monthly" | "always" | ... | undefined'

Fix: change `'quarterly'` to `'monthly'`. This is the one place where deviating
from the handover is correct — flag it in the commit message so the deviation is
traceable.

## 4. The 12 shadcn UI components and `use-mobile.ts` are dead code

This one is my error in the spec, not yours — you implemented what was written.

The spec said "12 of 60 UI components are used". That count came from a grep whose
search path included `components/ui/` itself, so it counted the UI components
importing **each other**. In reality **nothing** in `src/app/` or
`src/components/site/` imports any UI component — the site is hand-written JSX plus
lucide icons and the custom classes in `globals.css`. Confirmed true of the original
handover too: `contact-form.tsx` imports only `react` and `lucide-react`.

Dead today: all 12 of `src/components/ui/*`, `src/hooks/use-mobile.ts`, and
`src/lib/utils.ts` (its `cn()` is referenced only by those UI components).

Please confirm this independently before deleting:

    grep -rhoE "@/components/ui/[a-z-]+" src/app src/components/site   # expect no output
    grep -rn "use-mobile|useIsMobile" src | grep -v "^src/hooks/"       # expect no output
    grep -rn "@/lib/utils" src | grep -v "^src/components/ui/"          # expect no output

If all three are empty, delete `src/components/ui/`, `src/hooks/use-mobile.ts` and
`src/lib/utils.ts`, then drop the now-unreachable dependencies:

    npm uninstall @base-ui/react class-variance-authority clsx tailwind-merge

**Keep `shadcn`, `tw-animate-css` and `lucide-react`.** The first two are imported by
`src/app/globals.css` (`@import 'shadcn/tailwind.css'`, `@import 'tw-animate-css'`)
and the third is used throughout the site components. Removing them breaks styling.

Keep `components.json` so the shadcn CLI still works if a component is needed later.

Verify after deleting: `npm run build` succeeds and the homepage is still pixel-identical.

## 5. Task 1 is missing its archive README

`docs/archive/legacy-site/` has `src/`, `content/`, `public/` and `config/`, but not
the `README.md` that Task 1 Step 4 specified. Add it using the exact content in the
plan — it records the restore tag, the branch, and the deploy config.

Separately: you moved the pre-existing archive contents into
`docs/archive/old-legacy/`. That was not in the plan, but it is a reasonable call and
the files are intact, so leave it. Just mention it in the README so the two archives
are distinguishable.

## 6. Task 2 is missing `.dev.vars.example`

Task 2 Step 5 specified this file and it was not created. Add it:

    # Endpoint that /api/contact forwards submissions to.
    # Unset: the route returns HTTP 503 and the contact form reports a failure.
    # Production: set as a Worker secret with `wrangler secret put CONTACT_FORM_ENDPOINT`.
    CONTACT_FORM_ENDPOINT=

Confirm it is not gitignored: `git check-ignore -v .dev.vars.example` should print nothing.

## 7. Fix the `use-mobile` lint error — only if item 4 does not delete it

If item 4's checks come back clean, this file is deleted and this item is moot. If you
keep it, `src/hooks/use-mobile.ts:16` trips `react-hooks/set-state-in-effect` — the
only real lint error in `src/`. Do not silence it with a disable comment.

## 8. Commit messages contain literal `\n`

Every commit from `5e08a24` to `2fa6550` has literal backslash-n instead of newlines,
so the whole message is one line:

    Redirect retired legacy URLs to their rebrand equivalents\n\n/services and ...

Caused by passing `\n` inside a non-interpreting quoted string. Use a heredoc or
`git commit -F -`. Do **not** rewrite the published history on `legacy/v1-site` or
the `v1-legacy-site` tag; from here on just format new messages correctly.

## 9. Task 8 — run the verification that never ran

After items 1–8, complete Task 8 of the plan: `npm run lint` clean for `src/`,
`npm run preview` route checks against the Worker, confirm `.open-next/assets`
contains the woff2 font files, and rewrite `README.md` for the HACEY Global site
(route map, content edited in `src/lib/content.ts`, the npm scripts, and the note
that `CONTACT_FORM_ENDPOINT` must be set as a Worker secret).

---

## Not a defect — do not "fix" this

The homepage is 11.24% pixel-different from
<https://hacey-global-reimagined.jogojogo.chatgpt.site/> at 1440px (14.97% at 390px).
**This is not a porting error.** The two differ in homepage section order:

- Handover source and your port: `.proof-band` ("Since 2007 / Austin, Texas / Built
  to transfer") is **section 2**, at y=857, immediately after the hero — `page.tsx:44`.
- Deployed preview: the same band is **section 10**, at y=7342, just above the footer.

Both pages have 11 sections, identical total height (8192px), identical content and
identical component heights. Everything between the two positions is shifted by
exactly 105px, which accounts for the entire pixel difference. The top 768px and the
bottom 512px are pixel-identical.

Your `src/app/page.tsx` is byte-identical to
`docs/HACEY-Global-Rebrand/03-Website/app/page.tsx`, so the port is correct and the
deployed preview is simply a different revision. **Leave it as is** — this is a
question for the client, not a code change.
