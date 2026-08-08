# CLAUDE.md — Begin Again Yoga

Static marketing site for a small yoga practice. Deploys to GitHub Pages. The brand
is soft, organic, and hand-made — restraint is the design language.

Before any work, read in order:

1. **PLAN.md** — the current phase and its tasks. Keep its checkboxes updated as you go.
2. **docs/BRAND.md** — palette, typography, logo spec, contrast rules. Tokens are law.
3. **docs/CONTENT.md** — sitemap, page outlines, placeholder copy.
4. **docs/TECH.md** — stack (Astro 5 + plain CSS), structure, deployment.

## Hard rules

- No UI frameworks, no Tailwind, no client-side JS unless a task explicitly requires it.
  Astro static output only.
- Colors and fonts come exclusively from the CSS custom properties in
  `src/styles/global.css`. Never hardcode a hex in a component.
- Placeholders (`[NAME]`, `[LOCATION]`, `TODO:`) stay visibly placeholder until the
  owner supplies real content. **Never invent real-sounding schedules, prices,
  addresses, phone numbers, or certifications.**
- Respect the contrast rules in BRAND.md §2 — they were checked; don't freestyle
  new color-on-color combinations.
- `npm run build` must pass before a phase is considered done. Finish each phase with
  one commit: `phase(N): <summary>`.
