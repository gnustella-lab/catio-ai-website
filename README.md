# Catio AI presentation site

English coming-soon presentation, using original Catio assets and development screenshots. Static HTML/CSS/JavaScript, with no API calls, paid inference or visitor data collection.

The presentation files were copied from `gnustella-lab/catio-ai`, directory `website/`. This repository contains only the public site; the Android app, backend and private repository history are not included.

Site copy and metadata use no em or en dashes. Use natural sentence punctuation and preserve hyphens in compound words. Sections use their main headings directly, without small uppercase introductory labels or numbered mini titles.

## Local preview

From this repository's root, run `python -m http.server 8080` and open http://localhost:8080.

The header and hero fit one small viewport height (`100svh`), with viewport-relative typography, mascot sizing and compact spacing. Keep `--header-height` aligned with the header at each breakpoint. The label, mascot and speech notes remain in normal document flow; narrow screens place the mascot beside stacked notes, and short landscape screens use a two-column hero. Content can grow naturally for unusually small windows or enlarged text rather than being clipped or hidden. When changing the first fold, check 1360×659, desktop and mobile portrait/landscape, and both sides of the 900px width and 500px/620px height breakpoints.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, branch **main**, folder **/ (root)**, then save. The site files are at the repository root and require no build step.

Public release claims must stay aligned with the app; launch pricing and dates are deliberately not promised.