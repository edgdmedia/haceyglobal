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

## Note about the two archives

The contents of `docs/archive/old-legacy/` were moved here by the porting
process. They are the same files, but the old archive was created by a different
process and contains the same files as this one.