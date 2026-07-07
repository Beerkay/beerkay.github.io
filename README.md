# beerkay.github.io

Personal academic site for **Z. Berkay Celik** — plain HTML/CSS/JS, no build step, hosted on GitHub Pages. Replaces the previous Hugo/Academic-theme setup.

## Structure

```
index.html                    Home (bio, teaching, service & awards, news)
publications.html             Publications page
students.html                 Research group + past students
css/style.css                 Design system (Crimson Pro + Inter, gold accent, adaptive layout)
js/main.js                    Mobile menu + section entrance animation + footer dates
js/site-meta.js               Generated footer metadata from the latest git commit
js/publications.js            BibTeX renderer for Publications
paper-bib/myPublications.bib   BibTeX source for Publications
paper-pdfs/                   Paper PDFs used throughout the site
assets/img/                   profile.jpg, favicon.png, berkay-purdue.png
assets/pdf/                   BerkayCV.pdf, CS426.pdf, CS592IoTCPS.pdf, CS529.pdf
.nojekyll                     Serve files as-is (no Jekyll processing)
```

Three pages share the same top nav and left identity rail. Because there's no build
step, that shared markup (the `<nav>` block and the `<aside class="identity">` block)
is **duplicated in each `.html` file** — if you change your photo, title, or a nav
link, update it in `index.html`, `publications.html`, and `students.html`.

## Editing content

All text lives directly in the `.html` files, grouped by clearly-commented sections.
Edit the HTML and push — no build needed.

- **Add a student:** edit `students.html` (copy a line in the relevant `.group-line`
  or add an `<li>` under "Past Ph.D. students").
- **Add a news item:** add an `<li>` at the top of the `.news` list in `index.html`.
- **Mark the active nav tab:** each page sets `class="active"` on its own nav link.
- **Change colors/spacing/fonts:** edit the variables in `:root` at the top of `css/style.css`.
- **Refresh the footer date:** run `python3 scripts/update-site-meta.py` after a commit to regenerate `js/site-meta.js` from the latest git commit date.

## Publications

The Publications page renders `paper-bib/myPublications.bib` automatically with the local
JavaScript renderer in `js/publications.js`. To update the list:

1. Edit `paper-bib/myPublications.bib` (add/edit BibTeX entries; each `url = {...}` becomes a PDF or web link).
2. Refresh `publications.html` while serving the site over HTTP.

The page groups entries by year and highlights `Z. Berkay Celik` automatically. It works on
GitHub Pages and during local preview, as long as you open the site through a web server
instead of `file://`.

## Assets

All carried over from the old site and committed in this repo:

| File | Used for |
|------|----------|
| `assets/img/profile.jpg` | Hero photo (460×460 headshot) |
| `assets/img/berkay-purdue.png` | Alternate photo (not currently shown) |
| `assets/img/favicon.png` | Browser tab icon |
| `assets/pdf/BerkayCV.pdf` | CV link |
| `assets/pdf/CS426.pdf`, `CS592IoTCPS.pdf`, `CS529.pdf` | Course syllabi |
| `paper-bib/myPublications.bib` | Full publication list in BibTeX form |
| `js/publications.js` | Client-side renderer for the publication list |
| `assets/img/people/<slug>.jpg` | Optional member photos — drop one in and it replaces the initials placeholder automatically (filenames referenced in `index.html` / `students.html`) |

Replace any of these with newer files using the same name — no code change needed.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

This repo is the user site `beerkay.github.io`, so the `main` branch is served at
`https://beerkay.github.io/` directly.

```bash
git add -A
git commit -m "Update site"
git push origin main
```

No GitHub Actions or build step required — `.nojekyll` tells Pages to serve the
files unchanged. A custom domain can be added later via repo Settings → Pages.
