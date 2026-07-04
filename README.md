# jshoots — On-location photography, Perth WA

React + Vite + Framer Motion single-page site. Black & white editorial design
(Viaoda Libre / Pinyon Script / DM Sans).

## Run locally
```bash
npm install
npm run dev      # dev server at localhost:5173
npm run build    # production build → dist/index.html (single file)
```

## Structure
- `src/components/Hero.jsx`     — Nav + hero (inset card, serif/script headline, scroll parallax, rotating badge)
- `src/components/Sections.jsx` — Statement (inline-photo paragraph), Experience stats, Portfolio grid, Services
- `src/components/Contact.jsx`  — Enquiry form (opens pre-filled email to hello@jshoots.com.au) + footer
- `src/styles.css`              — Design tokens + all styling

## Swapping in real photos
Replace the Unsplash URLs in `Hero.jsx` and `Sections.jsx` (WORK array) with
your own image paths — everything is graded B&W via CSS `filter: grayscale(1)`,
so mixed source images will still look consistent.
