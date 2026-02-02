# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server at localhost:3000
pnpm build    # Build for production
pnpm lint     # Run ESLint
```

## Architecture

This is a Next.js 16 personal portfolio site using the App Router with React 19 and TypeScript.

**Key Pages:**
- `/` (app/page.tsx) - Home page with hero section, project cards (Dog, Lab), and social icon links
- `/dog` (app/dog/page.tsx) - Interactive dog page with treat counter and photo gallery

**External Links:**
- Lab (lab.noaholsen.co) - Private authentication hub for secret projects
- Dog (dog.noaholsen.co) - Subdomain for the dog page

**API Routes:**
- `/api/treats` (app/api/treats/route.ts) - GET/POST endpoint for treat counter using Redis, sends email notifications via Resend

**Component Architecture:**
- `TreatDispenser` - Interactive button with Redis counter, email notifications, and falling emoji animations
- `DogLog` - Masonry photo gallery with Intersection Observer scroll animations
- Components use "use client" directive for client-side interactivity

## Styling

- Tailwind CSS v4 with dark theme base (#0B0F19, #151B2B)
- Accent colors: sky blue (#38BDF8), amber (#FBBF24)
- Custom utilities in globals.css: `.glass`, `.card-hover`, `.text-glow`
- Custom animations: `fade-in`, `page-in`, `falling-emoji`, `float`

## Environment Variables

Required in `.env.local`:
- `REDIS_URL` - Redis connection string
- `RESEND_API_KEY` - Email service API key
- `ADMIN_EMAIL` - Recipient for treat notifications
- `FROM_EMAIL` - Sender email address

The API gracefully degrades if Redis is unavailable (returns dummy data).
