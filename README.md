# Crystal Glass 3D UI

Premium glassmorphism landing page with responsive layout, interactive 3D cards, accessibility improvements, and GitHub Pages deployment.

## Security hardening
- Strict same-origin Content Security Policy.
- No inline JavaScript.
- No external font/CDN dependency.
- nosniff, strict referrer policy, frame restrictions and HTTPS upgrades.
- No secrets, API keys, credentials, or payment data in the repository.
- Reduced-motion support and keyboard-focus states.

## Deployment
This repository is configured for GitHub Pages through GitHub Actions. Pushes to main deploy automatically.

GitHub Pages URL:
https://fanirajput29.github.io/crystal-glass-3d-ui/

For a custom domain, configure the domain in repository Pages settings and keep HTTPS enforcement enabled.

## Important
This is a static frontend. Any secure backend, authentication, database, or payment processor must be implemented server-side. Never expose secret keys in browser JavaScript.