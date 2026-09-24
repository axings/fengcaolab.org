# Feng Cao Lab

A small Hello World website for fengcaolab.org. No installation or build step is needed. Open `index.html` to preview it; edit that file to change the page.

## Publish on GitHub

1. Create a public repository named `fengcaolab.org`.
2. Upload these files to its main folder, not inside another folder.
3. In the repository's Settings → Pages, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Set **Custom domain** to `fengcaolab.org` and save before changing Cloudflare's website address records.

GitHub also offers domain ownership verification under your account's Settings → Pages. It supplies a code to add to Cloudflare, then lets you confirm ownership.

## Connect Cloudflare

Open fengcaolab.org → DNS → Records. Add these records with **Proxy status: DNS only** and **TTL: Auto**:

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | axings.github.io |

Review any existing website records for conflicts first; keep unrelated email and verification records.

Once GitHub's domain check succeeds, enable **Enforce HTTPS** in Pages settings. DNS and certificate setup can take up to 24 hours. Then visit https://fengcaolab.org.

## Files

- `index.html`: the entire page, including its styling.
- `CNAME`: the website's custom domain.
- `.nojekyll`: tells GitHub to publish these files as supplied.

Official setup reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
