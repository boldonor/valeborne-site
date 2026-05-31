# ValeBorne — Website

Single-page marketing site for ValeBorne Inc. — Genomic M&A Intelligence.

## Deploy to Cloudflare Pages via GitHub

1. Create a new GitHub repository and upload these files (`index.html`, `README.md`, `_redirects`, `robots.txt`).
2. In Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo. Use these settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/`
4. Click **Save and Deploy**.

That's it — it's a static site, no build step needed.

## Forms

Two forms use Netlify Forms syntax (`data-netlify="true"`). If you deploy to Cloudflare Pages instead of Netlify, swap them for Cloudflare Pages Forms / a Formspree endpoint / your own handler. Form names: `lead-magnet`, `demo-request`.

## Calendly

The "Schedule directly on Calendly" button points at `https://calendly.com/valeborne/demo` — replace with the real link in `index.html`.

## Editing

Everything (HTML + CSS + JS) is in `index.html`. Colors live in the `:root` block at the top of the `<style>` tag.
