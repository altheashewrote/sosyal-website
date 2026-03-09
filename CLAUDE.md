# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js with Turbopack)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** project for **SOSYAL STAGES**, an event promotion company. Pages use the pattern `src/app/<route>/<PageName>.tsx` as the page component, re-exported (or intended to be) from a `page.tsx`. The current `src/app/page.tsx` is still a Create Next App placeholder.

**Route structure:**
- `/` — Home (placeholder)
- `/about` — Manifesto/About
- `/about/made_by_humans` — Credits page
- `/artists` — Artist roster
- `/events` — Event listings
- `/events/[slug]` — Individual event detail
- `/merch` — Merch store
- `/merch/[slug]` — Individual merch item
- `/merch/cart` — Shopping cart
- `/merch/checkout` — Checkout flow
- `/merch/checkout/end` — Order confirmation

Most page components are currently stubs (`placeholder lol`). The `src/app/api/`, `src/hooks/`, `src/lib/`, and feature component folders (`src/components/artists/`, `src/components/events/`, `src/components/merch/`) are all empty — this project is early in development.

**Layout:** `src/app/layout.tsx` wraps all pages with `NavBar` (absolute-positioned, top of page) and `Footer` (absolute-positioned, bottom of page). Both are `'use client'` components.

**UI components** (`src/components/ui/`) use `class-variance-authority` (CVA) for variant-based styling:
- `Button` — `intent: primary | secondary`, `size: sm | md | lg`
- `Badge` — `intent: upcoming | lowTix | soldOut`

**Types** (`src/types/`): Plain TypeScript interfaces with no ORM or runtime validation — `Artist`, `Event`, `Merch` with their respective status union types.

## Styling

Tailwind CSS v4 with a custom brand color palette defined in `src/app/globals.css` under `@theme inline`:
- `sosyal-red` (#f30000), `stage-red`, `chrispynoy-red`
- `bass-blue` (#001dee)
- `rave-black` (#0d0d0d), `niteharts-grey` (#2c2c2c)
- `ara-white` (#fffbf1)
- `afters-yellow` (#ffde59)

Use these semantic color names (e.g. `text-ara-white`, `bg-sosyal-red`) rather than raw hex values throughout the codebase. Fonts referenced: `font-horizon`, `font-helvetica` (custom fonts expected to be loaded separately).
