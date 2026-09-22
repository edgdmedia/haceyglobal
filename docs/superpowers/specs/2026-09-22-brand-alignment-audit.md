# HACEY Global — Brand Identity Alignment Audit

**Audited:** 2026-09-22 · site at commit `e3d9bd3` (live on haceyglobal.com)
**Against:** `docs/Bridge-Identity-System/HACEY-Bridge-Brand-Guide.md` v1.0, 21 Sep 2026
**Method:** computed styles and painted-background area measured in a real browser at 1440×900 across six pages, plus source inspection. Homepage figures were taken independently against production and against a local build of the same commit and matched exactly.

## Verdict

The site is **strongly aligned on typography, colour values, voice and message architecture**, and **materially misaligned on the logo, the light/dark balance, and Signal Lime usage**.

The brand guide was dated 21 September 2026 — the same day the site was ported. The site was built from the client's handover, not from this guide, so the gaps are unsurprising: they are places the two were never reconciled.

---

## 1. Aligned — no action needed

### Colour values are exact
Every core token in `src/app/globals.css` matches the guide to the hex:

| Guide | HEX | Token | Match |
|---|---|---|---|
| HACEY Ink | `#111C24` | `--ink` | ✅ |
| Bridge Teal | `#174F54` | `--teal` | ✅ |
| Signal Lime | `#B9F462` | `--accent` | ✅ |
| Warm Ivory | `#FBFAF6` | `--paper-light` | ✅ |
| Warm Paper | `#F4F1E9` | `--paper` | ✅ |
| Structural Line | `#D8D8CF` | `--line` | ✅ |

Body Slate `#495963` is correctly applied to body and lead copy (measured `rgb(73, 89, 99)`), though it is hardcoded rather than tokenised.

### Typography is close to exact
Measured against the guide's digital hierarchy:

| Style | Guide | Rendered | Verdict |
|---|---|---|---|
| H1 | 64–90px, lh 0.98, −0.05em, w600 | 90px, lh 0.98, −0.060em, w590 | ✅ |
| H2 | 44–60px, lh 1.03, −0.04em, w600 | 60px, lh 1.03, −0.045em, w580 | ✅ |
| Lead | 20px, lh 1.55, w400 | 20px, lh 1.55, w400 | ✅ |
| Body | 16–18px, lh 1.62, w400 | 17px, lh 1.62, w400 | ✅ |
| Eyebrow | 11–12px, +0.12em, Mono 500 | 12px, +0.12em, IBM Plex Mono 500 | ✅ exact |

Geist and IBM Plex Mono are both correctly loaded and self-hosted.

### Accessibility rules observed
- No white text on Signal Lime anywhere on the site (the guide's explicit prohibition).
- Ink on Warm Ivory for body copy, as specified.

### Message architecture is verbatim
- Master message → the H1: *"Make complex transformation work in practice."*
- Supporting message → an H2: *"One accountable path from decision to durable change."*
- Call to action → present: *"Bring us the challenge, not a predetermined solution."*
- Headings use sentence case; all-caps reserved for mono eyebrow labels, as specified.

---

## 2. Gap 1 — The logo is not used at all (most serious)

The header renders the wordmark as **live type**:

```html
<span class="wordmark-mark">H</span><span>HACEY <b>GLOBAL</b></span>
```

There is **no reference to any Bridge logo asset** anywhere in `src/` or `public/`. All five approved lockups sit unused in `docs/Bridge-Identity-System/Logo-Variations/`.

This breaches three separate instructions:

- §6: *"The logo wordmark is artwork. Never recreate, typeset, stretch or approximate it with a font. Always use an approved logo asset."*
- §9 Incorrect use: *"Recreate the wordmark with live type."*
- §10 Website: *"Use the primary horizontal lockup in the header on Warm Ivory."*

The cost is not merely procedural. The Bridge mark — two pillars, a Signal Lime connector, an H in negative space — **is** the brand story in §1 and §2. Substituting a plain letter "H" discards the strategy-to-execution metaphor the identity was built to carry.

The favicon (`public/favicon.svg`) is likewise a hand-drawn lime "H" letterform on an Ink square, not the Bridge emblem that §10 specifies.

### Production constraint
§11 and §12 state the PNGs are *"concept-stage raster assets"* and require *"a precise vector reconstruction in SVG, EPS and PDF"* before production use, with *"trademark clearance required before registration or high-volume use."* A live public website is high-volume use. Dropping the PNG into the header is a short-term improvement over live type, but the correct fix is an SVG reconstruction — it is also what a crisp, responsive header needs.

---

## 3. Gap 2 — The light/dark balance is inverted

§5 specifies: **65–75% light · 20–30% Ink and Teal · 5–10% Signal Lime.**

Measured share of painted background area:

| Page | Light | Dark (Ink + Teal) | Lime |
|---|---:|---:|---:|
| / | 26.1% | 73.4% | 0.6% |
| /capabilities | 19.2% | 79.6% | 1.2% |
| /about | 54.7% | 45.0% | 0.3% |
| /insights | 25.8% | 37.7% | 0.2% |
| /contact | 50.8% | 48.5% | 0.8% |
| /privacy | 18.8% | 77.8% | 1.1% |
| **Target** | **65–75%** | **20–30%** | **5–10%** |

Every page inverts the intended ratio. Not one reaches the light floor; four of six exceed double the dark ceiling.

**Methodology caveat:** this counts the painted background area of every element across the full scroll height, so nested and overlapping surfaces are counted more than once and tall full-width dark bands dominate the figure. Treat it as directional, not as exact ink coverage. The direction is nonetheless consistent and large across every page measured.

`/about` and `/contact` are closest to the intent and are the useful internal reference for what "right" looks like.

---

## 4. Gap 3 — Signal Lime is under-used

Lime occupies **0.2–1.2%** against a target of **5–10%** — roughly an order of magnitude below intent.

§5 frames Lime as *"a decision point, not a decorative fill,"* for *"one primary action, the connector in the mark, active states and selected data highlights."* The restraint on the site is directionally right, but at under 1% the connector idea that gives the identity its meaning is barely present. The largest single contributor would normally be the logo's connector square — which is missing entirely (Gap 1). Fixing the logo will move this figure on its own.

---

## 5. Gap 4 — H3 does not follow the hierarchy

| | Guide | Rendered |
|---|---|---|
| Size | 24–30px | **21px** |
| Weight | 600 | **400** |
| Line height | 1.15 | **1.50** |

Affects every card title across the site ("Strategy & transformation", "AI, data & cloud", …). These read as body copy rather than as headings, flattening the hierarchy the guide specifies. This is the only typography rule the site misses, and it is a handful of CSS declarations.

---

## 6. Minor observations

- **Card grids.** §7 says to avoid *"default card grids"* in favour of *"asymmetrical editorial layouts."* The site uses `components/site/card-grid.tsx` on several pages. It is restrained and line-based rather than boxy, so this is a tension rather than a breach — worth a design decision, not an automatic fix.
- **Token naming.** CSS tokens use generic names (`--accent`, `--paper`) rather than brand names (`--signal-lime`, `--warm-paper`). Renaming would make drift easier to spot in review.
- **Untokenised Body Slate.** `#495963` is applied literally rather than through a variable.
- **`--ink-soft: #253640`** exists in the palette but is not in the brand guide. Either add it to the guide as an approved tint or remove it.

---

## 7. Recommended order of work

1. **Replace the header wordmark with the real lockup.** Commission the SVG reconstruction §11 requires; use `HACEY-Bridge-Primary-Horizontal.png` at 2× only as an interim. Highest brand impact of anything here.
2. **Replace the favicon** with the Bridge emblem.
3. **Fix H3** to 24–30px / w600 / lh 1.15. Smallest effort, immediate hierarchy gain.
4. **Rebalance light and dark.** Convert some Ink sections to Warm Ivory or Warm Paper so light leads. This is a design judgement, not a find-and-replace — `/about` is the internal model.
5. **Let Lime carry the connector idea** in section transitions and active states, once the logo restores its primary instance.
6. Tokenise Body Slate, rename tokens to brand names, and resolve `--ink-soft` with the brand owner.

Items 1–3 are unambiguous corrections. Items 4–5 change the site's visual character and should be agreed with the brand owner before implementation.

## 8. Not assessed

Print hierarchy, proposals, presentations, social profiles and co-branding (§10) are outside the website's scope. Clear-space and minimum-size compliance (§4) cannot be assessed until a logo asset is actually placed.
