# HACEY Global Website

Production-oriented, responsive corporate website built with Vinext/React, TypeScript and Tailwind CSS for deployment through OpenAI Sites/Cloudflare Workers.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address printed by the development server.

## Production build

```bash
npm run build
```

## Content editing

- Structured services, solutions, industries, products, articles and methodology: `lib/content.ts`
- Homepage: `app/page.tsx`
- About, Technology, Work and Contact: their route files under `app/`
- Governance pages: `app/privacy`, `app/cookies`, `app/terms`, `app/accessibility`, `app/responsible-ai`, `app/security`

## Add an insight article

1. Add a complete record to the `articles` array in `lib/content.ts`.
2. Use a unique lowercase hyphenated slug.
3. Add an authoritative source link in `app/insights/[slug]/page.tsx` when factual or standards-based claims require it.
4. The landing page, detail page, metadata and sitemap update automatically.
5. Run the build and review the new route before publishing.

## Environment variables

Copy `.env.example` to `.env.local` for local configuration.

- `CONTACT_FORM_ENDPOINT`: approved HTTPS form or workflow endpoint receiving JSON.
- `NEXT_PUBLIC_ANALYTICS_ID`: reserved for the approved analytics implementation.

Never commit secrets. Hosted values should be configured in the hosting environment.

## Form payload

The form sends: `firstName`, `lastName`, `email`, `organisation`, `category`, `message`, `consent`, and `source`. The hidden `website` field is a honeypot. The receiving service should add rate limiting, spam detection, retention controls and notification routing.

## Deployment

The Sites workflow packages and publishes the validated build. The production domain `haceyglobal.com` must not be connected until the preview is approved and DNS change is explicitly authorised.

See `../12-Technical-Documentation/Final-Handoff-and-Operations-Guide.md` for complete operational guidance.
