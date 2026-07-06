# ValeBorne Inc. — Brand Website

A five-page, production-ready static site for ValeBorne Inc. Built with plain
HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

---

## 1. File structure

```
valeborne-site/
├── index.html        # Home
├── about.html        # About Us
├── services.html     # Solutions / Services
├── insights.html     # Insights (incl. one fully-written article template)
├── contact.html      # Contact
├── css/
│   └── style.css     # ALL styles for every page (shared)
└── js/
    └── main.js       # Mobile nav, scroll animations, demo form handling (shared)
```

Every page shares the same `<header>` (with current-page highlighting), the same
`<footer>`, and links to the same `style.css` and `main.js`. Edit those two shared
files once and the change applies everywhere.

---

## 2. How to customize

### Colors
All brand colors live at the top of `css/style.css` in the `:root` block as CSS
variables. Change a value there and it updates across all five pages. For example:

```css
--accent:   #3B82F6;   /* primary slate-blue — buttons, links, highlights */
--accent-2: #06B6D4;   /* cyan — secondary accent */
--bg:       #0A0E1A;   /* page background */
```

### Fonts
The site uses **Inter** (Google Fonts), loaded in each page's `<head>`. To change
the typeface, swap the `<link>` tag in every HTML file and update `--font` in
`:root`.

### Text content
Copy is written directly in each HTML file — just open the file and edit. Sections
are clearly labelled with HTML comments like `<!-- ===== HERO ===== -->`.

### Images
Placeholder images use two free services (no account needed):
- **picsum.photos** — abstract photography (`about.html`, article cards in `insights.html`)
- **ui-avatars.com** — generated initials avatars (team photos in `about.html`)

Replace the `src="..."` URLs with your own hosted images when ready. Recommended:
put real files in an `/images/` folder and reference them relatively, e.g.
`src="images/team-mursal.jpg"`.

### Placeholder content to replace before launch
Search the files for these and swap in real values:
- `[Client Name]`, `[VC Firm]`, `[Pharma Company]` — testimonials in `index.html`
- `[Placeholder]` — founder bios in `about.html`
- LinkedIn URL — `href="#"` in every footer (labelled with a comment)
- Privacy Policy link — `href="#"` in every footer
- **Book a Consultation** button in `contact.html` — point `href="#"` at your Calendly link
- Downloadable-resource links in `insights.html` — point at real PDFs or a lead-capture form
- Article "Read More" links currently jump to the on-page template; give each article
  its own page (see note in `insights.html`) and update the links.

---

## 3. Making the forms live

The contact form and newsletter signup are marked `data-demo-form` — on submit they
run HTML5 validation and show a confirmation message, but **do not send anywhere**.
To connect them to a real backend, the simplest options:

- **Formspree**: add `action="https://formspree.io/f/YOUR_ID" method="POST"` to the
  `<form>` tag and remove the `data-demo-form` attribute.
- **Netlify Forms**: add `netlify` and a `name="contact"` attribute to the `<form>`,
  and remove `data-demo-form`. Netlify handles the rest automatically on deploy.

---

## 4. How to deploy

This is a static site, so hosting is free and simple.

**Netlify (drag & drop)**
1. Go to app.netlify.com → "Add new site" → "Deploy manually".
2. Drag the entire `valeborne-site` folder onto the page. Done.

**Vercel**
1. Push the folder to a GitHub repo.
2. Import the repo at vercel.com — no build settings needed (framework preset: "Other").

**Any traditional host / Cloudflare Pages**
Upload the folder contents to your web root. `index.html` is the entry point.
(ValeBorne already uses Cloudflare Pages — connect the GitHub repo and set the build
output directory to the site folder; no build command required.)

**Custom domain**
Point `valeborne.com` at your host per their DNS instructions. All internal links are
relative, so the site works from any domain or subpath without changes.

---

## 5. Notes on quality

- Fully responsive (desktop / tablet / mobile) with a collapsing mobile nav.
- Scroll-triggered reveal animations via `IntersectionObserver`; respects
  `prefers-reduced-motion`.
- Keyboard-accessible with visible focus states and ARIA labels on nav and forms.
- No external JS libraries — fast loads. Only external requests are Google Fonts and
  the placeholder image services, both of which you'll replace or can self-host.
