# Puda Tech website

Responsive Traditional Chinese website for 埔大齒輪有限公司. Plain HTML, CSS, and JavaScript; no build tools, third-party scripts, trackers, or runtime dependencies.

## Preview

Run `python3 -m http.server 8080` from this directory and open `http://localhost:8080`.

## Content and maintenance

- `index.html`: services and company introduction.
- `contact.html`: phone, email, address, and inquiry guidance.
- `assets/site.css`: responsive layout and CSS engineering illustration.
- `assets/site.js`: accessible mobile navigation and copyright year.
- `docs/original-homepage.html`: reference snapshot retrieved from http://pudatech.com on 2026-10-06. Retains the original W3layouts attribution/license notice. Do not publish this reference directory.

The published homepage supplied the company services, address, phone numbers, email, and hours. Confirm these details before deploying to production. The original image/CSS downloads returned empty responses, so this implementation does not depend on them. The contact page uses direct phone/email links; no contact form backend is implied.

## Release / deployment

Copy only `index.html`, `contact.html`, and `assets/` to the existing web server document root after backing up the current site. Verify both pages, mobile navigation, phone/email links, and assets before switching production traffic. No production server or DNS changes are performed by committing this repository.

Alternatively, enable GitHub Pages for this repository using **GitHub Actions**, then run the included Pages deployment workflow. It deploys only the public site files. A custom domain requires separate DNS configuration and verification. Do not change pudatech.com DNS until the target host is configured and verified.

## Validation

`python3 scripts/check_site.py` checks local references, section anchors, unique IDs, page language, and placeholder email addresses. `node --check assets/site.js` checks JavaScript syntax.
