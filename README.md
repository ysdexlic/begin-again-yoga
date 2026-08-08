# Begin Again Yoga 🌿

Marketing website for [NAME]'s yoga practice — soft, earthy, one breath at a time.
Static site, hosted for free on GitHub Pages.

**Status: planning complete — build not started.**

## Documentation map

| File | What it holds |
|---|---|
| [PLAN.md](PLAN.md) | The build plan: phases, tasks, acceptance criteria. Start here. |
| [docs/BRAND.md](docs/BRAND.md) | Colors, typography, logo spec, iconography, voice |
| [docs/CONTENT.md](docs/CONTENT.md) | Sitemap, per-page content outlines, open questions for the owner |
| [docs/TECH.md](docs/TECH.md) | Stack decision, project structure, GitHub Pages deployment |
| [CLAUDE.md](CLAUDE.md) | Standing instructions for AI agents working in this repo |

The brand board (logo + palette reference image) should live at `docs/brand-board.jpg` — see Phase 0 in the plan.

## Publishing this repo (one-time)

GitHub Pages on a free account requires a **public** repo. The repo name matters —
it becomes the URL path (see [docs/TECH.md](docs/TECH.md) about `base`).

```bash
gh repo create begin-again-yoga --public --source=. --remote=origin --push
```

Or manually: create an empty repo named `begin-again-yoga` on github.com, then
`git remote add origin git@github.com:ysdexlic/begin-again-yoga.git && git push -u origin main`.

After the site scaffold exists and the deploy workflow is added (Phase 5):
repo **Settings → Pages → Source: "GitHub Actions"**. The site will publish to
`https://ysdexlic.github.io/begin-again-yoga/` on every push to `main`.

## Working on it

Hand the plan to an agent:

> Read CLAUDE.md and PLAN.md, then complete Phase 1.

Once scaffolded (Phase 1 done): `npm install`, `npm run dev` to preview,
`npm run build` to produce the static site in `dist/`.
