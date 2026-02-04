## Overview

Personal site for Noah Olsen, built with Next.js (App Router) and Tailwind CSS v4. This repo powers the main homepage at `https://noaholsen.co` and links to a couple of sibling subdomains.

## Subdomains (public surface)
- `noaholsen.co` — this site; minimal hero with links out.
- `dog.noaholsen.co` — standalone dog page with treat counter and photo log.

## Private/Gated Area
- `lab.noaholsen.co` — private access portal for gated apps (projects not listed here).

> Note: There is a private auth gateway (`lab.noaholsen.co`) used only to issue the shared session cookie for protected apps. Details of the protected projects are not listed here.

## Local Development (this repo)
```bash
pnpm install
pnpm dev
```
Visit http://localhost:3000. Main page code lives in `app/page.tsx`; global styles in `app/globals.css`.

## Deployment
- **Platform:** Vercel (recommended for this repo and `dog.noaholsen.co` / `lab.noaholsen.co` since they’re Next.js).
- Ensure subdomain records in DNS point at the correct deployments.

## Env Vars (high level)
- This repo: none required.
- `dog.noaholsen.co`: `REDIS_URL` (+ optional email keys) for the treat counter API.
- Auth-dependent subdomains share a `LAB_SESSION_SECRET` issued by the gateway; keep it consistent across those apps.

## Scripts
```bash
pnpm dev     # local dev
pnpm build   # production build
pnpm start   # serve built app
pnpm lint    # ESLint
```

## Favicons (OpenAI + Theme Guide)
We generate favicon masters with OpenAI and then export the standard sizes. This keeps a consistent look across subdomains.

### Theme rules (all variants)
- Base: circular badge, background `#0B0F19`
- Accent ring: single ring in the variant accent color
- Mark: white `#FFFFFF` symbol (monogram or icon)
- Style: minimal geometric, flat colors, crisp edges
- Avoid: gradients, shadows, bevels, glow, textures, text

### Variant accents
- Main: `#38BDF8` (cyan)
- Dog: `#FBBF24` (amber)
- Lab: `#34D399` (emerald)

### Required output files
Place these in `public/favicons/<variant>/` for each repo:
- `icon-32.png`
- `apple-icon-180.png`
- `icon-512.png`
- `favicon.ico` (must include 16/32/48)

### Generation workflow (high level)
1. Use the OpenAI image generator to create a 1024×1024 PNG master that follows the theme rules above.
2. Downscale to the required sizes and generate `favicon.ico`.
3. Wire metadata to the correct variant files:
```ts
icons: {
  icon: "/favicons/<variant>/icon-32.png",
  apple: "/favicons/<variant>/apple-icon-180.png",
  shortcut: "/favicons/<variant>/favicon.ico",
}
```
