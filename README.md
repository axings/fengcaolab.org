# Feng Cao Lab

The public lab website at **https://fengcaolab.org**, hosted with GitHub Pages.

## Edit the site

- `index.html`: research, biography, publications, teaching, and contact content.
- `assets/site.css`: responsive layout, colors, typography, and mobile styling.
- `assets/site.js`: mobile navigation, section indicator, and copyright year.
- `assets/neural-circuits.svg`: original conceptual neural-circuit illustration.
- `assets/feng-cao.jpg`: Feng Cao's official Western Washington University portrait.
- `CNAME`: custom domain configuration. Keep this file set to `fengcaolab.org`.

This is a static website with no framework, build step, external fonts, analytics, or server dependency. Open `index.html` locally to preview, or run `python3 -m http.server 8000` in this directory. Changes committed to `main` deploy through GitHub Pages.

## Content and credits

The research themes and biography were adapted from the supplied `cao_lab_website_v4.html`. Selected publications include work completed during Dr. Cao's previous training.

Official sources:
- Faculty profile and portrait: https://bns.wwu.edu/caof2
- Behavioral Neuroscience Program: https://bns.wwu.edu/
- Student research opportunities: https://bns.wwu.edu/research-opportunities
- 2025 publication: https://doi.org/10.1038/s41467-025-63464-5
- 2020 publication: https://doi.org/10.1038/s41467-020-17560-3
- ORCID: https://orcid.org/0000-0003-1220-5671

Design references supplied by the site owner: Bruchas Lab, Z Lab, Tao Lab, and Tye Lab. The layout, styling, icons, and circuit illustrations are original; no images or written content were copied from those labs.

## Domain

The domain is registered with Cloudflare and points to GitHub Pages. GitHub Pages serves this repository from the root of `main`. HTTPS is enabled in the repository's Pages settings. No Cloudflare changes are required when editing the website.
