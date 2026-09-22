# Website Content Inventory

The production website is the canonical source for all page copy. This avoids maintaining a second manual copy that can drift from the implementation.

## Canonical files

- Homepage: `03-Website/app/page.tsx`
- Shared content for capabilities, solutions, industries, products, articles and the HACEY Path: `03-Website/lib/content.ts`
- About: `03-Website/app/about/page.tsx`
- Technology ecosystems: `03-Website/app/technology/page.tsx`
- Work and proof: `03-Website/app/work/page.tsx`
- Contact: `03-Website/app/contact/page.tsx`
- Privacy, Cookies, Terms, Accessibility, Responsible AI and Security: corresponding routes under `03-Website/app/`

## Page templates implemented

- Capability landing and six detail pages
- Solution landing and eleven detail pages
- Industry landing and six detail pages
- Product landing and four detail pages
- Insight landing and five long-form articles
- Technology ecosystem page
- Approach page
- Work and illustrative engagement page
- About page
- Contact and enquiry form
- Governance pages
- 404, sitemap and robots

## Content status labels

- Production copy: may publish after normal organisational review.
- Proposed positioning: approved by the project brief but still a strategic decision for HACEY Global.
- Representative concept: must keep the visible label until product status changes.
- Illustrative engagement: must not be presented as completed client work.
- Existing-site claim requiring evidence: must be verified before conversion into a formal case study.
- Legal review: must not be treated as legal advice or final policy.

## Editing rule

Update structured content in `lib/content.ts` rather than duplicating it directly inside route components. This keeps landing pages, detail pages, sitemap entries and metadata consistent.
