# Final Handoff and Operations Guide

## Current release

- Private preview: <https://hacey-global-reimagined.jogojogo.chatgpt.site>
- Access: owner-only
- Production domain: unchanged
- QA status: approved for private stakeholder preview; see `QA-Report.md`

## Project structure

- `01-Strategy`: research, audit, positioning and site architecture
- `02-Brand`: brand guide and editable identity assets
- `03-Website`: deployable source code
- `04-Content`: profiles, sales, RFP and procurement copy
- `05-Insights`: editorial plan and source framework
- `06-Products`: detailed concept specifications
- `07-Case-Studies`: proof register and template
- `08-Brochure`: editable source and final PDF
- `09-SEO`: search and metadata strategy
- `10-Visual-Assets`: approved working visuals
- `11-Legal`: governance review checklist
- `12-Technical-Documentation`: this guide and QA report

## Technology stack and rationale

### Vinext, React and TypeScript

The Sites starter provides a modern Next-compatible route model and Cloudflare Worker-compatible build. React supports reusable templates; TypeScript keeps the structured content model explicit and easier to maintain.

### Tailwind CSS with project-specific CSS

Tailwind supplies the build foundation, while the visual system is expressed through shared tokens and semantic component classes. This keeps the theme deliberate without adding a heavy design-system dependency.

### Static structured content

Services, solutions, industries, products and articles are stored in `lib/content.ts`. This is secure, fast and easy to version for the current publishing volume. It also creates a clear content adapter point for a future CMS.

### OpenAI Sites / Cloudflare Workers

The project builds to a Worker-compatible deployment with static assets and server routes. No database is required for the current informational site.

## Run locally

1. Install Node.js 22.13 or newer.
2. Open `03-Website` in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by the server.

## Build

Run `npm run build` from `03-Website`. Resolve build errors before creating a release.

## Edit content

### Reusable detail content

Edit `03-Website/lib/content.ts`. Each record has a slug, title, summary and page-specific fields. A unique slug creates the URL.

### Standalone pages

Edit the corresponding `page.tsx` under `03-Website/app`.

### Navigation and footer

Edit `components/site/header.tsx` and `components/site/footer.tsx`.

### Visual design

Edit tokens and shared classes in `app/globals.css`. Preserve accessibility contrast and responsive rules.

## Publish a new Insight article

1. Add the article record to the `articles` array in `lib/content.ts`.
2. Use a unique slug and one approved category.
3. Add complete article sections and practical guidance.
4. Add primary or authoritative source links to `sourceLinks` in `app/insights/[slug]/page.tsx` where needed.
5. Confirm title, description, author, date and reading time.
6. Run the build and open the article URL.
7. Check headings, links, source attribution and mobile reading width.
8. Publish the new site version.

## Change images

- Social preview: replace `public/og.png` with a 1200×630 optimised PNG using the same filename.
- Favicon: replace `public/favicon.svg` after the final logo is approved.
- Add content images under `public/images/` with descriptive filenames and meaningful alternative text.
- Do not add third-party images without usage rights.

## Change contact details

Search the project for `isaiah@haceyglobal.com` and `Austin, Texas`. Update the footer, contact page, governance pages, structured data and documentation together. Do not add a street address or telephone number unless approved.

## Configure forms

The browser posts JSON to `/api/contact`. That route validates required fields, blocks the honeypot and forwards the payload to `CONTACT_FORM_ENDPOINT`.

The receiving endpoint should provide:

- TLS and authentication appropriate to the provider
- Rate limiting and spam controls
- Input validation and payload limits
- Notification routing and case ownership
- Defined retention and deletion
- Restricted administrator access
- Monitoring and failure alerts
- A data-processing agreement where required

Configure the secret in the hosting environment, not source code.

## Configure analytics

1. Select a privacy-appropriate analytics platform.
2. Document data collected, storage, retention and transfers.
3. Determine whether consent is required in target markets.
4. Add the script through the root layout only after approval.
5. Keep the identifier in the hosted environment.
6. Update the Privacy and Cookie Policies and cookie register.
7. Exclude internal traffic and form-field content.

## DNS and domain

The existing production domain must remain unchanged until final approval.

When authorised:

1. Record existing DNS and hosting settings.
2. Lower TTL in advance if appropriate.
3. Add the approved custom-domain records supplied by the host.
4. Verify TLS, apex and `www` behaviour.
5. Confirm redirects for important legacy paths.
6. Test forms, sitemap, robots, metadata and analytics on the production host.
7. Keep the prior hosting configuration available for rollback during the agreed period.

## CMS recommendation

The current content volume does not require a database CMS. Structured source content is appropriate for the first release because it is versioned, fast and secure.

Introduce a headless CMS when non-developers need frequent publishing or approval workflows. Keep the current content types:

- Capability
- Solution
- Industry
- Product
- Insight
- Author
- Case study
- Metadata

Use the CMS as a content source, not a page builder. Preserve the route templates and validation rules. Recommended publishing states: Draft → Subject-Matter Review → Brand/Source Review → Legal Review if required → Scheduled/Published → Review Due.

## Environment variables

- `CONTACT_FORM_ENDPOINT`: required for live form forwarding
- `NEXT_PUBLIC_ANALYTICS_ID`: optional and reserved

Keep `.env.example` current. Never commit `.env`, tokens or provider credentials.

## Dependencies

Dependencies and pinned versions are in `package.json` and `package-lock.json`. Review security advisories, test updates in a branch and avoid forced major upgrades without regression testing.

## Security considerations

- Use least-privilege hosting and repository access.
- Require MFA for administrators.
- Rotate form and deployment credentials.
- Protect environment variables.
- Apply dependency updates on a defined cadence.
- Set security headers at the hosting layer.
- Monitor form failures and unexpected traffic.
- Do not log enquiry content unnecessarily.
- Maintain an incident contact and escalation process.

## Maintenance recommendations

### Monthly

- Check forms, links and key conversion paths.
- Review dependency and hosting alerts.
- Review enquiries and search queries for content gaps.

### Quarterly

- Update articles and reviewed dates where evidence changes.
- Review metadata duplication, index coverage and Core Web Vitals.
- Test keyboard, mobile and screen-reader fundamentals.
- Audit product and partnership labels.

### Annually

- Review positioning, services and industry focus.
- Re-verify proof and credentials.
- Review privacy, cookies, terms, accessibility and security content.
- Test restore and rollback procedures.

## Backup and recovery

- The Git repository is the primary source backup.
- Keep protected remote copies and tagged production releases.
- Export CMS content regularly if a CMS is added.
- Document hosted environment variables and owners in a secure password or secrets manager.
- Retain the previous deployable release for rollback.
- Test recovery at least annually.
