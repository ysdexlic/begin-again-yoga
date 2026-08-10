# Build Plan — Begin Again Yoga

**How to use this file:** work the phases in order. A phase is done when its
acceptance criteria hold, `npm run build` passes, its checkboxes are ticked, and the
work is committed as `phase(N): <summary>`. All specs live in `docs/` — this file is
the sequence, not the spec.

Phases 1–5 are buildable today with placeholder content. Phase 0 answers unblock
Phase 6 only.

---

## Phase 0 — Owner inputs (no code)

Gathered by the owner, not the agent. Nothing here blocks Phases 1–5.

- [x] Add the brand board image (the logo/palette reference) as `docs/brand-board.jpg`
- [x] Confirm GitHub repo name (plan assumes `begin-again-yoga` — see TECH.md if different) — confirmed: repo exists as `ysdexlic/begin-again-yoga`, matching `base`
- [ ] Custom domain yes/no (affects `base` config — TECH.md §Deployment)
- [ ] Answer the "Open questions" list at the bottom of docs/CONTENT.md

## Phase 1 — Scaffold & design system

- [x] Scaffold Astro 5 minimal template into the repo root (commands in TECH.md §Scaffolding), TypeScript strict, keep existing files
- [x] `astro.config.mjs` with `site`/`base` per TECH.md, `@astrojs/sitemap` integration
- [x] Install fonts via @fontsource: Allura, Cormorant Garamond, Karla (BRAND §3)
- [x] `src/styles/global.css`: modern reset, all design tokens from BRAND §2–3, fluid type scale, visible focus styles, `prefers-reduced-motion` guard
- [x] `src/layouts/Base.astro`: head with per-page title/description props, fonts, skip-link, header/footer
- [x] `Header` (logo + nav) and `Footer` (icon strip, contact, credit) components; mobile nav without a framework (CSS-only or ≤10 lines of inline script)
- **Acceptance:** empty pages render with correct fonts and colors; nav is usable at 360px wide and by keyboard.

## Phase 2 — Brand assets (SVG)

- [x] Recreate the primary logo lockup as inline SVG per BRAND §1 (circle mark, sun, hills, path, branch, birds, wordmark) — superseded: the owner's real logo PNG is in use (original parked in `src/assets/brand/logo.png`, background-removed version in `logo-transparent.png`); the interim SVG lockup was removed
- [x] Icon-only variant (circle mark) and one-color deep-sage variant
- [x] The five brand icons (BRAND §4) as a single `Icon.astro` component: `sunrise`, `path`, `sprout`, `heart`, `circle`
- [x] Layered-hills section divider SVG (sand/sage, low opacity)
- [x] `favicon.svg` (+ 180px apple-touch PNG), `og-image` 1200×630 (sage bg, one-color logo)
- **Acceptance:** logo is legible at 32px and crisp at 480px; icons share stroke weight and optical size on a 24px grid.

## Phase 3 — Pages

- [x] Data files per TECH.md: `site.json`, `classes.json`, `schedule.json`, `pricing.json` — placeholder content exactly as marked in CONTENT.md
- [x] Home — hero, icon value strip, intro, class-card preview, sage quote band, practical section (CONTENT §Home)
- [x] About — story, philosophy, trainings placeholder, photo placeholders (CONTENT §About)
- [x] Classes & Schedule — class cards, weekly schedule table, pricing cards, first-timer FAQ (CONTENT §Classes)
- [x] Contact — email CTA, Instagram, location; no form in v1 (CONTENT §Contact)
- [x] 404 — on-brand (CONTENT §404)
- **Acceptance:** every section listed in CONTENT.md exists; no dead links; internal links respect the base path; placeholders clearly marked, none invented.

## Phase 4 — Polish

- [x] Responsive pass 360→1440px (test iPhone width first — traffic will come from Instagram)
- [x] Accessibility: landmarks, alt text, heading order, contrast per BRAND §2 rules only, keyboard walk-through, reduced-motion respected
- [x] SEO: unique title + meta description per page, OG/Twitter tags, sitemap, `robots.txt`
- [x] Lighthouse ≥ 95 in all four categories against `npm run preview`; record scores in the phase commit message
- **Acceptance:** the numbers above, verified, not assumed.

## Phase 5 — Deploy

- [x] `.github/workflows/deploy.yml` — copy verbatim from TECH.md §Deployment
- [x] Owner: push, then repo Settings → Pages → Source: **GitHub Actions**
- [x] Verify live URL: fonts load, images load, nav works (base-path mistakes show up here), 404 page serves — verified 2026-08-08 against `https://beginagainyoga.co.uk` (custom domain superseded the github.io URL; all pages, fonts, logo webp, robots/sitemap 200; branded 404 serves; HTTPS enforced with auto-renewing Let's Encrypt cert)
- **Acceptance:** site live at `https://ysdexlic.github.io/begin-again-yoga/`. ✅ Live at `https://beginagainyoga.co.uk` (see Phase 6 note).

## Phase 6 — Real content (needs Phase 0 answers)

- [ ] Replace `[LOCATION]`/TODO placeholders from Ardita's answers — partial
  2026-08-09: her story (About, verbatim), name as **Ardita Biru Langit**, real
  classes (Vinyasa Flow / Pranayama / Meditation) and the Yoga Alliance 200hr YTT
  cert (About + footer) are in. Also in (later 2026-08-09): location **London**,
  email **hello@beginagainyoga.co.uk**, Instagram **@arditabiru**, and the owner's
  real script font (Brittany Signature TTF, replacing Allura — BRAND §3 updated).
  ~~Still TODO: weekly schedule, pricing, class levels/durations, map link,
  mats-provided confirm~~ 2026-08-10: these placeholder sections were removed
  from the site at the owner's request — re-add if real details arrive
- [ ] Real photos via `astro:assets` (natural light, earth tones — BRAND §5) —
  partial 2026-08-09: homepage portrait in (`src/assets/brand/dita.jpg`, studio
  shot, rendered through the blob frame). About-page photos still TODO
- [ ] Optional: contact form via Formspree; booking embed
- [x] Custom domain (TECH.md §Custom domain): `beginagainyoga.co.uk` — Cloudflare DNS (grey-cloud A/CNAME records), Pages cname set via API, HTTPS enforced

## Out of scope for v1

Blog, CMS, newsletter, online payments, booking backend, class-pack e-commerce.
Say no by default; add later if the practice grows into them.
