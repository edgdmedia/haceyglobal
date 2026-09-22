# HACEY Global website QA report

**Review date:** 19 September 2026  
**Release reviewed:** Private-preview candidate  
**Production domain status:** Unchanged

## Outcome

The website passed build, route, responsive-layout, browser-console, form-structure, and baseline accessibility checks. No blocking defects were found for a private stakeholder preview.

## Checks completed

### Build and routing

- Production build completed successfully.
- Homepage, all section landing pages, representative detail pages, all five insight articles, contact, policy pages, sitemap, robots file, and the not-found route were checked.
- Expected pages returned HTTP 200; the intentional unknown route returned HTTP 404.
- Dynamic routes were generated for capabilities, solutions, industries, products, and insights.

### Responsive and visual review

- Reviewed at 1440 × 900 desktop, 768 × 1024 tablet, and 390 × 844 mobile viewports.
- Confirmed responsive navigation, readable hero and card layouts, visible calls to action, and no horizontal content overflow.
- Confirmed the mobile/tablet menu opens, exposes all primary destinations, and closes correctly.
- Confirmed the social preview artwork and all 12 brochure pages render without visible defects.

### Accessibility baseline

- Document language is declared as English.
- A working skip-to-content link and matching main-content target are present.
- Semantic header, navigation, main, and footer landmarks are present.
- Form controls have matching labels; required controls are declared.
- Images checked in the browser include alternative text.
- Strong visible contrast and focus treatments are built into the design system.

### Contact and operational checks

- The contact page contains eight labelled controls, seven required controls, consent, and an anti-spam honeypot.
- The server endpoint validates required fields and can securely forward submissions when `CONTACT_FORM_ENDPOINT` is configured.
- The preview intentionally falls back to direct email until a production form endpoint is supplied.
- No browser console errors were observed during the final desktop/tablet/mobile review.

## Items required before public launch

1. Configure and test `CONTACT_FORM_ENDPOINT` in the production environment.
2. Replace evidence-gated proof placeholders only after HACEY approves attributable outcomes, client permissions, and supporting records.
3. Obtain legal review of privacy, cookies, terms, accessibility, security, and responsible-AI copy.
4. Confirm the final analytics platform and consent configuration before enabling analytics.
5. Complete a final content-owner review of personnel, certifications, partner relationships, and technology claims.
6. Run a final automated accessibility audit and assistive-technology spot check on the intended public hosting configuration.

## Release recommendation

Approved for owner-only stakeholder preview. Do not make the preview public or connect the production domain until the pre-launch items above are closed.
