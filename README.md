# Vishal Bhardwaj — Portfolio

A personal portfolio site built with **Next.js** (App Router). Dark violet theme,
with the full career journey, the Anveshan support overhaul, and design case
studies linking out to Behance.

## Run it locally

You need **Node.js 18+** installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where everything lives

| What you want to change | File |
|---|---|
| All page content (hero, journey, projects, contact…) | `app/page.js` |
| Colours, fonts, spacing, layout | `app/globals.css` |
| Your photo & project cover images | `public/` |
| Your downloadable CV (PDF) | `public/Vishal-Bhardwaj-CV.pdf` |
| Page title / SEO description | `app/layout.js` |

### Your contact links
Your **email** (`bhardwaj.vishal0614@gmail.com`) and **LinkedIn**
(`linkedin.com/in/vishal-bhardwaj-778b4426a`) are used in three places inside
`app/page.js` — the hero buttons, the "Contact" call-to-action, and the footer.
Search the file for `mailto:` and `linkedin.com` to update them.

## Build a static site

```bash
npm run build
```

This creates an `out/` folder containing the whole site as plain HTML/CSS/JS.

## Deploy

### Option 1 — Vercel (easiest, recommended)
1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and **Import** the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. Done.

### Option 2 — GitHub Pages
1. In `next.config.mjs`, **uncomment** the `basePath` and `assetPrefix` lines and
   set them to `/<your-repo-name>` (only needed for a project site like
   `https://<user>.github.io/<repo>/`).
2. Run `npm run build` to generate the `out/` folder.
3. Push the contents of `out/` to a `gh-pages` branch, or add the official
   GitHub Pages Actions workflow for Next.js. Enable Pages in repo Settings.

### Option 3 — Netlify
- Build command: `next build`
- Publish directory: `out`

## Credit
Built by Vishal Bhardwaj.
