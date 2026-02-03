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
