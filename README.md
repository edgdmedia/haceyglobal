# HACEY Global

The HACEY Global corporate website: Next.js 16 (App Router, React Server
Components) and Tailwind CSS 4, deployed to Cloudflare Workers through
`@opennextjs/cloudflare`.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Next dev server on port 3000 |
| `npm run build` | Production build and type check |
| `npm run lint` | ESLint over the project source |
| `npm run preview` | Build through OpenNext and serve on the local Workers runtime |
| `npm run deploy` | Build and deploy to the Cloudflare Worker `haceyglobal` |

Use `npm run preview` before deploying. The dev server runs on Node, production
runs on a Cloudflare Worker, and `/api/contact` plus the `next/font` assets only
exercise the Worker path under `preview`.

## Routes

17 static routes and 5 dynamic templates that expand to 32 detail pages, for 49
URLs in total plus `/sitemap.xml` and `/robots.txt`.

- **Marketing** — `/`, `/about`, `/approach`, `/technology`, `/work`, `/contact`
- **Collections** — `/capabilities`, `/solutions`, `/industries`, `/products`, `/insights`
- **Detail pages** — `/capabilities/[slug]`, `/solutions/[slug]`, `/industries/[slug]`,
  `/products/[slug]`, `/insights/[slug]`
- **Governance** — `/privacy`, `/cookies`, `/terms`, `/accessibility`,
  `/responsible-ai`, `/security`

Retired URLs from the previous site redirect permanently: `/services` and
`/practice-areas` to `/capabilities`, `/impact` to `/work`, and `/privacy-policy`
to `/privacy`.

## Editing content

Structured content lives in `src/lib/content.ts` — the `capabilities`, `solutions`,
`industries`, `products`, `technologies`, `articles` and `approachStages` exports.
The collection pages, detail pages, metadata and sitemap all derive from it, so
adding an entry publishes a page.

To add an insight article, append a record to `articles` with a unique lowercase
hyphenated slug. Where a claim is factual or standards-based, add a source link in
`src/app/insights/[slug]/page.tsx`. Run a build and review the new route before
publishing.

Page-specific copy is edited in the route file itself under `src/app/`.

## Contact form

`/api/contact` forwards submissions to the URL in `CONTACT_FORM_ENDPOINT`. **This is
not yet configured** — until it is set, the route returns HTTP 503 and the form
reports a failure. Everything else on the site works.

Locally, copy `.dev.vars.example` to `.dev.vars` and fill it in. For production:

```bash
npx wrangler secret put CONTACT_FORM_ENDPOINT
```

## Project layout

```
src/app/         routes, layout, globals.css, sitemap.ts, robots.ts, api/contact
src/components/  site components (header, footer, hero, card grid, forms)
src/lib/         content.ts
public/          favicon.svg, og.png
```

The design is deliberately image-free — no `<img>` or `next/image` — so type,
spacing and colour carry the layout. Custom classes (`.shell`, `.article-shell`,
`.lede`, `.eyebrow`, `.button-accent`) are defined in `src/app/globals.css`
alongside the Tailwind theme tokens.

## History

The previous HACEY LLC site is archived at `docs/archive/legacy-site/` and tagged
`v1-legacy-site` (branch `legacy/v1-site`). The rebrand handover this site was built
from is kept at `docs/HACEY-Global-Rebrand/`. See
`docs/superpowers/specs/2026-09-21-rebrand-port-design.md` for the port's design.
