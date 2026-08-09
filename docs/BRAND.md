# Begin Again Yoga — Brand Guide

Source of truth: the brand board image (`docs/brand-board.jpg` once added) — logo
lockup, four-swatch palette, five-icon strip. The feel is soft, organic, hand-made:
watercolor shapes, thin line work, generous whitespace. When in doubt, remove
elements rather than add them.

## 1. Logo

No vector source files exist yet — the build agent recreates the logo as SVG from
this spec (and the board image, if present). Park any original exports the owner
later provides in `src/assets/brand/`.

**Primary lockup, top to bottom:**

- A thin-stroke open circle in deep sage, broken at the upper-left where a **leafy
  branch** arcs across it — one curved stem, 7–9 almond-shaped leaves of slightly
  varied size, some solid, some outlined.
- Inside the circle: a **terracotta sun** (solid disc) with ~16 thin radiating rays,
  rising behind **rolling hills** in sage green, warm sand, and soft taupe — soft
  watercolor-style overlapping shapes, no outlines.
- A **cream winding path** S-curves from the bottom foreground up to the sun.
- Three small **line-drawn birds** in the upper right, inside the circle.
- Wordmark: `Begin Again` in flowing script, deep sage.
- Below it: `— YOGA —` in letterspaced terracotta serif caps (em-dash each side).
- A small three-petal **lotus/leaf glyph** in deep sage closes the lockup.

**Variants:** one-color (all deep sage) for stamp/emboss contexts; reversed (cream
strokes on sage background); icon-only (the circle mark, no wordmark) for
favicon and social avatars.

## 2. Color

Values are sampled approximations from the brand board — fine-tune by eye against
it, then re-verify the contrast table below if anything moves.

| Token | Hex | Name | Use |
|---|---|---|---|
| `--cream` | `#F7F2E7` | Cream | Page background |
| `--sand` | `#DED7C2` | Warm Sand | Alternate section backgrounds, cards |
| `--sage` | `#8FA07E` | Sage Green | Brand color: solid bands, decorative shapes |
| `--sage-deep` | `#66744E` | Deep Sage | Headings, logo linework, icons, footer bg |
| `--terracotta` | `#C67F5B` | Terracotta Clay | Decorative accent: sun, large display numerals |
| `--terracotta-ink` | `#9A5A3C` | Terracotta (text) | Links, buttons, `— YOGA —`-style labels |
| `--taupe` | `#A2A491` | Soft Taupe | Hairline borders, subtle decorative details |
| `--ink` | `#414A33` | Ink | Body text |

**Contrast rules (checked against WCAG AA — don't freestyle new combos):**

| Combination | Ratio | Allowed for |
|---|---|---|
| `--ink` on `--cream` / `--sand` | ~8.3 / ~6.4 | Body text ✅ |
| `--sage-deep` on `--cream` | ~4.5 | Headings and body ✅ |
| `--cream` on `--sage-deep` | ~4.5 | Inverted sections, footer ✅ |
| `--terracotta-ink` on `--cream` | ~4.8 | Links, small labels ✅ |
| `--cream` on `--terracotta-ink` | ~4.8 | Primary buttons ✅ |
| `--ink` on `--sage` | ~3.3 | Large/display text only (≥24px) |
| `--terracotta` on `--cream` | ~2.9 | Decorative only — never for reading or conveying info |
| `--taupe` / `--sand` as text | — | Never |

Practical defaults: primary button = `--terracotta-ink` bg + `--cream` text;
text-heavy dark bands use `--sage-deep` bg + `--cream` text; `--sage` bands carry
only large display text or decoration.

## 3. Typography

Google Fonts, self-hosted via `@fontsource` (no external requests). Latin subset,
`font-display: swap`. To keep the swap invisible, above-the-fold faces are
preloaded in `Base.astro` and each family has a metric-matched local fallback
(`size-adjust` overrides in `global.css`) so text doesn't move when the
webfont lands.

| Role | Font | Usage |
|---|---|---|
| Script accent | **Allura** 400 (alt: Sacramento) | "Begin Again"-style moments: hero headline, pull quotes, section eyebrows. Never body copy, never below 24px, never all-caps. |
| Headings + tracked labels | **Cormorant Garamond** 500/600 | H1–H3. Small labels uppercase with `letter-spacing: 0.28em` (the `— YOGA —` / `NEW BEGINNING` treatment). |
| Body & UI | **Karla** 400/500/700 | Paragraphs, nav, buttons, tables, forms. |

Scale (fluid, `clamp()`): h1 ≈ 2.4–3.75rem, h2 ≈ 1.8–2.5rem, h3 ≈ 1.3–1.6rem,
body 1.0625rem with line-height 1.7. Script accents sit ~1.5× their neighboring
heading size (script fonts render small).

## 4. Iconography & motifs

Five brand icons, matching the board's footer strip — thin strokes (~1.5px at 24px
viewbox), `--sage-deep`, rounded caps, no fills:

| Icon | Meaning |
|---|---|
| Rising sun over a horizon line | New Beginning |
| Winding S-curve path | A New Path |
| Sprout with two leaves | Growth |
| Open line heart | Self Love |
| Hand-drawn open circle (ensō) | Pause. Breathe. Reset. |

Use as section markers, footer strip (icon + tracked label, like the board), and
list bullets. Supporting motifs: em-dashes flanking labels, the lotus glyph as a
section divider, and layered rolling-hill SVG dividers (sand/sage at 30–50%
opacity) between major sections.

## 5. Art direction

- Whitespace is the primary design element. Section vertical padding 96–128px
  desktop, 64–80px mobile.
- Soft edges: 12–16px card radius; organic watercolor blobs behind images, never
  hard rectangles.
- Photography (Phase 6): natural light, linen/earth tones, matte grade, real
  practice moments. Until then: SVG illustration in the palette. **No stock photos.**
- Motion: fade/rise-in on scroll only, 200–300ms ease-out, disabled under
  `prefers-reduced-motion`.

## 6. Voice & tone

Warm, unhurried, encouraging. Second person ("you"), plain words, no fitness-hustle
or spiritual jargon. Themes: starting over without judgment, small steps, breath,
self-compassion. Every page should read like an invitation, not a pitch.

Taglines in rotation: **"Pause. Breathe. Reset."** · **"Every day is a chance to
begin again."**
