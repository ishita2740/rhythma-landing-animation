# Rhythma Landing Animation

Build a clean, elegant, minimal landing page for a women's health app called "Rhythma", matching the attached reference image as closely as possible in layout, colors, typography, spacing, and overall aesthetic. The attached image is the primary visual reference — do not significantly change the composition; the final resting state should look extremely close to it. The main difference: everything animates into place instead of appearing immediately.

Page load animation (critical), in this exact order:
1. Start with a blank soft-white/lavender background — do not show the woman instantly.
2. Draw the woman progressively using thin flowing lines, as if sketched in real time. Final illustration should match the reference: Indian woman, eyes closed, peaceful expression, long flowing hair, wearing a saree, hands in Namaste position. Use a thin-line SVG illustration with stroke-dashoffset/stroke-draw animations.
3. Once the woman is fully drawn, smoothly animate the language bubbles appearing around her, then gently orbit/float in a calm circular flowing motion, shifting position every 2–3 seconds. Languages: Hindi (नमस्ते), English (Hello), Marathi (Namaskar), Bengali (নমস্কার), Punjabi (ਮੈਂ ਸੀ ਭਵਾਲ — as in reference), Gujarati (નમસ્તે), Tamil (வணக்கம்), Kannada (ನಮಸ್ಕಾರ), Malayalam (നമസ്കാരം), Telugu (తెలుగు నమస్కారం style as in reference), Odia (ଓଡ଼ିଆ ନମସ୍କାର). Bubbles have soft pastel fills matching the reference colors. Keep animation elegant and slow, never distracting.
4. Then smoothly reveal the text underneath in sequence: "Rhythma" (large gradient wordmark), tagline "Her Rhythm. Her Health. Her Power.", subtitle "An AI-powered multilingual women's health companion."
5. Finally show a simple circular down-arrow button with the label "Explore Rhythma" underneath.
6. The bottom of the hero has the same soft flowing lavender/pink wave shapes as the reference image.

Navbar: minimal, like the reference — lotus-style Rhythma logo on the left, nav links Explore, Features, Wellness, About, Community, Contact in the center, and "Log In" text link plus a purple gradient "Download App" pill button on the right.

Design style: soft pastel lavender, pink and white; feminine, peaceful, premium, Indian-inspired; lots of whitespace; subtle gradients; thin line illustrations; soft glowing effects; smooth transitions. The whole hero should feel like a calm meditation/wellness experience, not a static website. Use smooth, lightweight animations (CSS/SVG, GPU-friendly) and ensure the page is fully responsive on desktop and mobile.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/227ddfcd-30d2-48eb-888c-fae8e868685d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
