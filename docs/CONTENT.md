# Content Plan

**Placeholder policy:** build every page now with clearly marked placeholders —
`[LOCATION]`, `TODO:` — so real copy drops in later without layout work.
Placeholders must *look* like placeholders. Never invent real-sounding schedules,
prices, addresses, or certifications.

**Where content lives:** repeated/structured content in `src/data/*.json`
(`site.json` for email/Instagram/location strings, plus `classes.json`,
`schedule.json`, `pricing.json`). One-off page copy may live in the page files.
The owner should be able to edit a class time without touching markup.

## Sitemap

```
Home (/) · About (/about/) · Contact (/contact/) · 404
```

~~Pricing lives on the Classes page for v1~~ dropped 2026-08-10: schedule, pricing
and class levels/durations are off the site until the owner confirms real details.

---

## Home

1. **Hero** — logo lockup; script headline "Every day is a chance to begin again.";
   subline "Small-group yoga in [LOCATION], for every body and every level.";
   primary button "Get in touch" → /contact/ (was "See classes"; classes page
   removed 2026-08-10).
2. **Value strip** — the five brand icons with tracked labels (NEW BEGINNING · A NEW
   PATH · GROWTH · SELF LOVE · BREATHE), icons as on the brand board.
3. **Intro** — short welcome from Ardita (2–3 sentences, first person), portrait
   placeholder in a watercolor-blob frame, link to About.
4. **Classes preview** — three class cards from `classes.json`, no link (the
   classes page was removed 2026-08-10 — this section is where classes live now).
5. **Quote band** — sage-deep background, script pull-quote "Pause. Breathe. Reset."
6. **Practical strip** — where ([LOCATION]), contact CTA (map-link TODO and the
   "when" schedule teaser dropped 2026-08-10).

## About

- Her story: why "begin again" — what returning to the mat means to her.
  `TODO: Ardita's own words, ~150 words.`
- Philosophy: 3 short blocks keyed to brand icons (e.g. Growth / Self Love / Pause).
- Trainings & background: `TODO: certifications (e.g. 200hr YTT), teachers, style.`
- Photos (in 2026-08-10): studio backbend beside her story, YTT-certificate shot
  beside Trainings; closing CTA to Contact.

## Classes

Page removed 2026-08-10 — the class cards (from `classes.json`: Vinyasa Flow,
Pranayama, Meditation, with Ardita's descriptions) now live only in the homepage
preview section. Schedule, pricing and "Your first time?" had already been dropped
the same day; re-add a classes page if/when a real schedule and prices arrive.

## Contact

- Email button (`mailto:` from `site.json` — `TODO: address`), Instagram link
  (`TODO: handle`), location + map link (`TODO`).
- One warm sentence about response time and beginners being welcome to just ask
  questions. No form in v1 (static host); Formspree is the Phase 6 option.

## 404

Winding-path icon, script headline "This path doesn't exist.",
line "Take a breath and begin again at home." → button to /.

---

## Open questions for Ardita  *(answers unblock Phase 6)*

- [x] How her name should appear on the site (Ardita? full name?) + short bio + 2–3 photos
  — answered 2026-08-09: full name, **Ardita Biru Langit**; her story is on /about/
  verbatim. Photos still to come.
- [ ] Location: studio address / online / in-home visits?
- [ ] Class types with names, levels, durations, descriptions — partial 2026-08-09:
  names + descriptions in `classes.json` (Vinyasa Flow, Pranayama, Meditation);
  levels and durations dropped from the site 2026-08-10, re-add when confirmed
- [ ] Weekly schedule — section removed from the site 2026-08-10; re-add once real
  times exist
- [ ] Prices: drop-in, pass, private — and how people pay (pricing section removed
  from the site 2026-08-10; re-add once real prices exist)
- [ ] Contact email for the site + Instagram handle
- [x] Certifications / insurance line for the footer? — answered 2026-08-09:
  "Yoga Alliance Certified 200hr YTT Vinyasa flow UK & US" (in footer + About;
  insurance line still unanswered)
- [ ] Booking preference: keep "message me" or embed a tool (Calendly/Momence) later?
- [ ] Custom domain (e.g. beginagainyoga.com)? Buy it early if yes — see TECH.md
