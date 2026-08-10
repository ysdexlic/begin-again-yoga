# Tech & Deployment

## Stack — decided

**Astro 5 + plain CSS**, static output. Zero client-side JS by default, which is
exactly right for a brochure site on GitHub Pages: fast, cheap to maintain, and the
build is just `dist/` full of HTML.

- **No React/Vue islands** — nothing here needs them. If a future feature does
  (e.g. a booking widget), add a single Astro island then.
- **No Tailwind / UI kits** — the brand needs a small amount of hand-rolled CSS with
  design tokens, not a utility system.
- Mobile nav: CSS-only (`<details>` or checkbox pattern) or ≤10 lines of inline
  script — not a framework.
- Node 22+, npm. TypeScript strict (Astro default).

## Scaffolding (Phase 1)

Run in the repo root — the directory already contains the plan docs; that's fine:

```bash
npm create astro@latest . -- --template minimal --install --no-git
npm install @astrojs/sitemap @fontsource/allura @fontsource/cormorant-garamond @fontsource/karla
```

If `create-astro` balks at the non-empty directory, let it proceed/merge — it must
not delete the existing docs. Alternatively hand-write `package.json` +
`astro.config.mjs` + `src/` (the minimal template is ~5 files).

## Project structure

```
.
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ public/                  # copied verbatim: robots.txt, favicons, CNAME (later)
├─ src/
│  ├─ styles/global.css     # reset + ALL design tokens + type scale (BRAND.md)
│  ├─ layouts/Base.astro    # head/SEO props, fonts, skip-link, Header/Footer
│  ├─ components/           # Header, Footer, Icon, Button, SectionLabel, ClassCard,
│  │                        # QuoteBand, HillDivider, ValueStrip, PhotoPlaceholder
│  ├─ data/                 # site.json · classes.json
│  ├─ assets/               # brand logo + photos (astro:assets)
│  └─ pages/                # index · about · contact · 404 (.astro)
└─ .github/workflows/deploy.yml
```

Conventions: tokens only from `global.css` custom properties; structured content
only from `src/data/`; components stay small and server-rendered; images go through
`astro:assets` (`<Image>`), not `public/`.

## astro.config.mjs

Current config — custom domain live since 2026-08-08, so no `base`:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beginagainyoga.co.uk',
  integrations: [sitemap()],
});
```

⚠️ Only if the site ever moves back to project-pages serving
(`ysdexlic.github.io/begin-again-yoga/`): set `base` to the repo name. Every
internal link already goes through the tiny `href()` helper (which is why it
exists — keep using it). Unprefixed links are the classic GitHub Pages bug:
everything works in dev, 404s in production.

## GitHub Pages deployment

`.github/workflows/deploy.yml` — the canonical Astro workflow, copy verbatim:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

One-time, by the owner after first push: repo **Settings → Pages → Source:
"GitHub Actions"**. Requires a public repo on the free plan.

## Custom domain (optional, Phase 6)

✅ Done 2026-08-08: **beginagainyoga.co.uk** — Cloudflare DNS (grey-cloud records),
`public/CNAME`, HTTPS enforced, `base` removed. Steps kept for reference:

1. Buy domain; DNS `CNAME` record: `www` → `ysdexlic.github.io` (apex via ALIAS/ANAME
   or GitHub's A records).
2. `public/CNAME` containing the domain, one line.
3. Settings → Pages → Custom domain; enforce HTTPS.
4. Config: `site: 'https://www.beginagainyoga.com'`, **remove `base`**.

## Contact without a backend

GitHub Pages is static — no form handling. v1 ships a `mailto:` button + Instagram
link. If a real form is wanted later: Formspree free tier (POST action, no JS
required) — do not build a custom backend for this.

## Quality bar (Phase 4 gate)

- Lighthouse ≥ 95 in Performance / Accessibility / Best Practices / SEO, measured
  against `npm run preview` (static Astro should sit at ~100)
- WCAG AA via the pre-checked combinations in BRAND.md §2 only
- Keyboard: skip-link, visible focus, logical heading order, landmarks
- Responsive 360→1440px; design mobile-first — visitors arrive from Instagram
- Meta per page: unique title + description, OG/Twitter card, favicon set,
  sitemap + robots.txt referencing it
