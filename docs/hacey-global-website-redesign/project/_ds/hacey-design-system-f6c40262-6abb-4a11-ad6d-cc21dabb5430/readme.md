# Hacey Design System

Brand design system for **HACEY LLC** (haceyglobal.com) — a social impact consultancy based in Austin, Texas with 17+ years of experience "transforming complex challenges into impactful solutions." HACEY LLC partners with organizations on systems strengthening, digital solutions, fund management, project design, research, and talent — the commercial/consultancy arm of the wider HACEY family (the sister NGO **HACEY Health Initiative**, hacey.org, delivers the on-the-ground development programs the consultancy's impact stories reference).

## Sources
- **Primary:** https://haceyglobal.com/ (fetched homepage — hero, About, Services, Practice Areas, Impact Stories, Work with Us, footer). Built on WordPress/Elementor.
- Logo: uploaded `hacey-new-logo-…png` → `assets/hacey-logo.png` (full lockup); site tile icon → `assets/hacey-mark.png` (swirl mark).
- Brand colors sampled from the logo mark and confirmed against the site.
- Service/practice icons are flat **icons8** PNGs hosted on the site — referenced by URL (see ICONOGRAPHY); could not be copied locally (cross-origin).

## Logo
- `assets/hacey-logo.png` — full lockup: three-color swirl + navy "HACEY" wordmark. Default on light backgrounds.
- `assets/hacey-mark.png` — standalone swirl mark. On navy, place the full logo on a white plate (the navy wordmark can't sit on navy); the footer does this. Never redraw either asset.

## CONTENT FUNDAMENTALS
- Voice: **first-person plural "we"**, confident and outcome-oriented, aimed at partner organizations and funders. "We are a social impact consultancy…", "We manage grants and funding programs, ensuring efficient resource allocation and measurable outcomes."
- Impact is **always quantified**: "17+ Years of Impact", "over 40 social impact programs", "200+ verified experts", "100,000 doses of IPTp-SP".
- Headlines: aspirational Title Case fragments — "Solutions for a Sustainable Future", "Transforming Complex Challenges into Impactful Solutions", "Work with Us".
- Section eyebrows are short; supporting subheads are one plain sentence.
- CTAs are direct: "Get in Touch", "Learn More", "Get Started with Us", "Work with Us", "See More Success Stories".
- **No emoji** in site/UI copy (the sister NGO's social posts use them; the consultancy does not). No exclamation-heavy campaign tone — measured and professional.
- Vocabulary: sustainable, impact, systems, communities, evidence-based, partnerships, expertise, measurable outcomes.

## VISUAL FOUNDATIONS
- **Color**: Navy `#2E3192` anchors (headings, primary buttons, hero/footer bands). Teal `#4BA699` supports (accents, secondary blocks, links). Lime `#A6CE39` is the energetic accent (stat figures, primary hero CTA, checkmarks). White pages alternate with light-gray (`--surface-alt`) and full-bleed navy sections. Max one accent per element.
- **Type**: **Lato** (display/headings — bold & black weights) + **Inter** (body/UI). These are the real fonts used on haceyglobal.com.
- **Spacing**: generous marketing rhythm — 96px section padding, 1200px container, 4px base scale.
- **Layout**: centered max-width container; alternating white / light-gray / navy section bands; icon-feature grids (3-up services, 4-up practice areas); two-column hero and "work with us".
- **Imagery**: minimal photography on the homepage; the brand leans on flat single-color icons + bold type + solid color bands rather than documentary photos (unlike the NGO site). No gradients, no textures.
- **Icons**: flat, single-subject **icons8** line/solid PNGs, ~100px, shown in a navy-tinted chip (rounded square for services, circle for practice-area tiles).
- **Corners & shadows**: soft — 10px card radius, 16px on large panels; subtle navy-tinted `--shadow-card`, `--shadow-raised` on hover.
- **Buttons**: pill-shaped solid fills, semibold. Primary = navy; accent = lime with navy text (hero CTA); outline for secondary; outline-inverse on navy. Hover: darker fill / fill-in; press: darker, no shrink.
- **Animation**: minimal — fades, gentle 3px rise on card hover, 180–220ms ease. Impact figures animate as count-ups on the live site (represented statically here). No bounces.
- **Borders**: hairline on inputs; cards use shadow over border. **Transparency/blur**: white translucent panels (6% white) inside navy impact bands; no blur.

## ICONOGRAPHY
- The site uses **icons8** flat PNG icons (e.g. `icons8-users-100`, `icons8-touchpad-100`, `icons8-heart-with-pulse`, `icons8-recycling-100`) at ~100px, one per service/practice area, tinted to sit in a navy-tint chip.
- These are **referenced from the site's hosted URLs** in the UI kit and `IconFeature` card — they could not be copied locally (cross-origin fetch blocked). For production, download the icons8 set or subscribe; `IconFeature` takes any `icon` URL so swapping to local `/assets/icons/*.png` is one prop change.
- No icon font, no inline SVG icon system, no emoji, no unicode-glyph icons in UI. The only glyph used is a "✓" check in the "Work with Us" bullets.

## Index
- `styles.css` — global entry (imports `tokens/*.css`)
- `tokens/` — colors, typography (incl. webfont import), spacing/radius/shadows
- `assets/hacey-logo.png` (full lockup), `assets/hacey-mark.png` (mark)
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand) for the Design System tab
- `components/` — Button, Input (forms); Badge, Card, StatCard, IconFeature, SectionHeading (display); NavBar, Footer (navigation)
- `ui_kits/website/` — HACEY LLC homepage recreation (`index.html`)
- `SKILL.md` — agent skill entry point

### Intentional additions
No component library or Figma source existed, so the set is authored from the site's visible patterns. Each maps to something on haceyglobal.com: Button (CTAs), IconFeature (Services & Practice Areas), StatCard (Impact figures), Card (generic content card), Badge (tags), SectionHeading (section openers), NavBar/Footer (site chrome), Input (generic form field — the live contact is a mailto, so Input is a general-purpose addition).

## Caveats
1. icons8 service/practice icons are referenced by URL, not stored locally (cross-origin).
2. Homepage photography is sparse on the real site; no photo assets were copied.