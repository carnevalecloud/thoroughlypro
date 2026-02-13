# Thoroughly Pro

Static marketing site built with [Astro](https://astro.build).

## Setup

```bash
pnpm install
```

## Dev

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

Output goes to `dist/`. Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Project structure

```
src/
  components/     # Navbar, Footer
  data/           # siteInfo, services, areas
  layouts/        # Layout, PageLayout
  pages/          # File-based routing
  styles/         # Global CSS + Tailwind
public/           # Static assets (images, robots.txt)
```

## Images

Place images in `public/images/`:

- `hero.png` – home hero background
- `nh-landscape.png` – areas page hero
- `services/{service-id}.png` – one per service (industrial-cleaning, facility-cleanouts, carpet-cleaning, floor-care)
