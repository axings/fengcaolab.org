# Feng Cao Lab

A simple Hello World website for https://fengcaolab.org, hosted on GitHub Pages.

## Update the website

Edit `index.html` and commit the change to `main`. GitHub Pages automatically publishes updates. No installation, framework, or build command is needed. You can open `index.html` in a browser to preview it locally.

## Hosting settings

In this repository's Settings → Pages:

- Source: Deploy from a branch
- Branch: `main`, folder: `/(root)`
- Custom domain: `fengcaolab.org`
- Enable Enforce HTTPS after GitHub issues the certificate.

## Cloudflare domain settings

These records connect the domain to GitHub Pages. Use **DNS only** (gray cloud) and **TTL: Auto**.

| Type | Name | Content |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | axings.github.io |

GitHub's domain check passed on September 24, 2026. The `www` address redirects to `fengcaolab.org` once deployment and HTTPS provisioning finish.

## Files

- `index.html`: the page and its styling.
- `CNAME`: the custom domain.
- `.nojekyll`: publishes the files directly without Jekyll processing.

[GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
