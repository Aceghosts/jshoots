# jshoots

Booking-focused website for jshoots, a Perth photography studio. React +
Vite + React Router, deployed on Vercel.

## Pages

`/` home · `/work` portfolio · `/family`, `/milestones`, `/events` service
pages with ad-ready anchors (e.g. `/family#newborn`) · `/pricing` ·
`/studio` · `/contact` (reads `?type=` to pre-select the booking dropdown).

## Develop

```
npm install
npm run dev
```

## Deploy

Auto-deploy is disabled in `vercel.json`. Push to GitHub, then trigger the
deploy manually from the Vercel dashboard.
