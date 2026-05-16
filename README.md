# SafeBite AI MVP

SafeBite AI is a mobile-first Next.js prototype for helping international shoppers quickly decide whether packaged food matches their dietary restrictions.

## Features included
- Splash + onboarding flow with diet profile presets.
- Scanner-first home with mock AI processing state.
- Simulated dietary compatibility engine with confidence messaging.
- Ingredient-level explainability panel (why + source + confidence).
- History, preferences, and accessibility pages.
- Empathetic tone and low-cognitive-load interaction patterns.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Run locally
```bash
cd my-app
npm install
npm run dev
```

## Architecture highlights
- `app/` route-based screen composition.
- `components/ScannerUI.tsx` central scan flow + mock AI decision logic.
- Extensible model for plugging in OCR + OpenAI ingredient analysis later.

## Mock AI behavior
Current MVP intentionally uses static ingredient analysis and simulated delays so UX and HCI interactions can be tested before backend integration.
