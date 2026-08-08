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
Home (/) · About (/about/) · Classes & Schedule (/classes/) · Contact (/contact/) · 404
```

Pricing lives on the Classes page for v1; split into its own page only if it grows.

---

## Home

1. **Hero** — logo lockup; script headline "Every day is a chance to begin again.";
   subline "Small-group yoga in [LOCATION], for every body and every level.";
   primary button "See classes" → /classes/; text link "Get in touch" → /contact/.
2. **Value strip** — the five brand icons with tracked labels (NEW BEGINNING · A NEW
   PATH · GROWTH · SELF LOVE · PAUSE. BREATHE. RESET.), as on the brand board.
3. **Intro** — short welcome from Ardita (2–3 sentences, first person), portrait
   placeholder in a watercolor-blob frame, link to About.
4. **Classes preview** — three class cards from `classes.json`, link to full page.
5. **Quote band** — sage-deep background, script pull-quote "Pause. Breathe. Reset."
6. **Practical strip** — where ([LOCATION] + map link TODO), when (schedule teaser),
   contact CTA.

## About

- Her story: why "begin again" — what returning to the mat means to her.
  `TODO: Ardita's own words, ~150 words.`
- Philosophy: 3 short blocks keyed to brand icons (e.g. Growth / Self Love / Pause).
- Trainings & background: `TODO: certifications (e.g. 200hr YTT), teachers, style.`
- 1–2 photo placeholders; closing CTA to Classes.

## Classes & Schedule

- **Class types** — cards from `classes.json`: name, level, duration, 2-sentence
  description, brand icon. Seed with three honest placeholders:
  "Slow Flow `TODO: confirm`", "Restorative `TODO: confirm`",
  "Beginners' Course `TODO: confirm`".
- **Weekly schedule** — table from `schedule.json` (day, time, class, location).
  Seed rows rendered as `TODO — schedule coming soon` until Phase 6; the table
  states plainly that the timetable is being finalized.
- **Pricing** — cards from `pricing.json`: Drop-in / Class pass / Private 1-to-1,
  all prices `TODO`.
- **Your first time?** — short plain list (arrive 10 min early, mats provided TODO:
  confirm, wear anything comfortable, nothing to prove).
- Booking note: "Message to reserve a spot" → contact page (no booking system in v1).

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

- [ ] How her name should appear on the site (Ardita? full name?) + short bio + 2–3 photos
- [ ] Location: studio address / online / in-home visits?
- [ ] Class types with names, levels, durations, descriptions
- [ ] Weekly schedule
- [ ] Prices: drop-in, pass, private — and how people pay
- [ ] Contact email for the site + Instagram handle
- [ ] Certifications / insurance line for the footer?
- [ ] Booking preference: keep "message me" or embed a tool (Calendly/Momence) later?
- [ ] Custom domain (e.g. beginagainyoga.com)? Buy it early if yes — see TECH.md
