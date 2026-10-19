# Siege at Sundown — game website

Standalone static website for the game by Black And White. The deployable artifact is `dist/` only. No game source, credentials or campaign reports belong in this repository.

## Preview

Serve `dist/` with a local static HTTP server. No build step or package install is required. JavaScript adds a day/night switch and a click-to-load official YouTube trailer; the Steam links and content work without JavaScript.

## Publication

The owner approved this exact site and public source repository on 19 October 2026. GitHub Pages publishes `dist/` through the manually dispatched `pages.yml` workflow. The custom domain is `siegeatsundown.com`; its apex and `www` DNS records point to GitHub Pages. A successful workflow is separate from DNS propagation and HTTPS certificate readiness, which must be checked after deployment.

## Assets

Gameplay screenshots: official Steam app 4218950, retrieved 19 October 2026. Hero portraits: supplied Siege at Sundown game assets. Site icon: existing campaign branding. All game artwork and trademarks remain the property of their respective owners. No open-source license is granted for game assets.
