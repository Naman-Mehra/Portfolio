# SafeBite AI Web App Preview

This repository includes a standalone **`index.html`** preview for SafeBite AI.

## Preview locally (no npm required)
```bash
cd /workspace/Portfolio
python3 -m http.server 8080
```
Then open:
- http://localhost:8080/index.html

## What is included in the HTML preview
- Mobile-first UI shell
- Sensitivity selector (strict/moderate/flexible)
- Simulated AI scan processing
- Safety result (Unsafe / Possibly Unsafe)
- Ingredient list with color-coded risk
- Tap ingredient for explanation + source + confidence

## Note
The preview is a static frontend demo intended for HCI flow validation.
