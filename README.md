# Catio AI presentation site

English coming-soon presentation, using original Catio assets and development screenshots. Static HTML/CSS/JavaScript, with no API calls, paid inference or visitor data collection.

The presentation files were copied from `gnustella-lab/catio-ai`, directory `website/`. This repository contains only the public site; the Android app, backend and private repository history are not included.

## Local preview

From this repository's root, run `python -m http.server 8080` and open http://localhost:8080.

The hero keeps its label, mascot and speech notes in normal document flow to avoid overlap. Speech notes wrap on narrower desktop layouts and stack on mobile. When changing their spacing, check desktop and mobile widths, including both sides of the 600px and 900px breakpoints.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/ (root)**, then save. The site files are at the repository root and require no build step.

Public release claims must stay aligned with the app; launch pricing and dates are deliberately not promised.