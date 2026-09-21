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

`/api/contact` validates the submission and emails it via **Cloudflare Email
Sending** (the `EMAIL` binding in `wrangler.jsonc`) — no API keys involved. The
submitter's address is set as `Reply-To`, so replying from the inbox goes straight
back to them. A hidden `website` honeypot field is accepted silently to starve bots
of a signal.

Recipient and sender are `vars` in `wrangler.jsonc`:

| Var | Default |
|---|---|
| `CONTACT_TO_EMAIL` | `isaiah@haceyglobal.com` |
| `CONTACT_FROM_EMAIL` | `website@haceyglobal.com` |

**Before the form can deliver in production**, the sender domain must be onboarded
onto Email Sending once, by someone with the Email permission on the Cloudflare
account:

```bash
npx wrangler email sending enable haceyglobal.com
npx wrangler email sending list        # confirm it appears
```

That adds the SPF/DKIM/DMARC records the domain needs. Until it is done, sends fail
and the route returns HTTP 502.

Local `wrangler dev` does **not** send real mail — Miniflare writes each message to
`.wrangler/tmp/email/` as `.txt` and `.html`, which is the easiest way to check
formatting. To send for real from local dev, add `"remote": true` to the
`send_email` binding.

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
