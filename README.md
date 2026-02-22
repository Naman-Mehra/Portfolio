# Portfolio

This repository now includes a `my-app` prototype for a **mobile-first Dietary Scanner** experience using Next.js App Router conventions.

## Technical architecture

```text
my-app/
├─ app/
│  ├─ page.tsx
│  ├─ scanner/page.tsx
│  ├─ search/page.tsx
│  ├─ profile/page.tsx
│  └─ api/openfoodfacts/[barcode]/route.ts
├─ components/
│  ├─ ScannerUI.tsx
│  ├─ SearchBar.tsx
│  ├─ DietaryToggles.tsx
│  ├─ ResultCard.tsx
│  └─ ui/{button,input,switch}.tsx
├─ styles/globals.css
├─ public/
├─ tailwind.config.js
└─ package.json
```

## Accessibility decisions

- Primary actions and controls use at least 44px minimum hit targets.
- Safety feedback is never color-only: it combines icon shape + text labels.
- Inputs and buttons include visible focus styles and explicit labels.

## API and integrations

- `GET /api/openfoodfacts/:barcode` proxies OpenFoodFacts product data.
- `search/page.tsx` includes a clear integration point for Google Maps JS API or Mapbox for Tesco/Sainsbury's nearby store rendering.

## Suggested usability validation

- Tree testing:
  - Home → Scan, Search, Profile
  - Success task: users find dietary profile settings in ≤3 steps.
- First-click testing:
  - Prompt: update profile settings (No Egg / No Rennet)
  - Target: first click on Profile icon/button ≥80% of participants.
- Measure completion rate, time on task, errors, and SUS score target ≥80.
