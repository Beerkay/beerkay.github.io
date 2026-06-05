# Self-hosted academic site — Z. Berkay Celik

**Date:** 2026-06-05
**Goal:** Replace the Hugo/Academic-theme site at beerkay.github.io with a self-owned static site (plain HTML/CSS/JS) that is easy to edit and extend.

## Decisions
- **Stack:** Plain HTML/CSS/JS, no build step.
- **Hosting:** GitHub Pages (`beerkay.github.io`), `main` branch, `.nojekyll`.
- **Layout:** Direction B — centered hero, single-column full-width sections, sticky top nav.
- **Design:** Refresh keeping familiar academic feel; gold/amber accent (#b08d2b), white bg, slate text. Responsive + dark-mode toggle.
- **Publications:** BibBase, reading a `.bib` the user provides. Static "selected publications" fallback for offline/unreachable.

## File structure
```
index.html            single page
css/style.css         design system + layout
js/main.js            nav highlight, smooth scroll, mobile menu, theme toggle
data/celik.bib        BibTeX source (placeholder until real file provided)
assets/img/, assets/pdf/
.nojekyll
README.md             edit + deploy instructions
```

## Sections (top → bottom)
Hero (photo, name, title, affiliation, contact icons) · Biography · Service & Editorial · Awards · Students (current + past) · News · Teaching · Publications (BibBase) · Footer.

## Content
Extracted verbatim from the live site (bio, service roles, awards w/ years, all current/past students + links, news items, course details, contact URLs). Asset binaries (profile photo, CV, syllabi PDFs) referenced by path; user drops real files into `assets/`.

## BibBase wiring
`<script src="https://bibbase.org/show?bib=https://beerkay.github.io/data/celik.bib&jsonp=1&theme=default&group0=year">`. Renders server-side after deploy; local preview shows the static fallback list. README documents swapping the `.bib`.

## Out of scope (improve later)
Per-publication pages, blog, analytics, search across pages, custom domain.
