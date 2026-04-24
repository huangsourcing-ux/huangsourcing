# HFsourcing

Modern sourcing platform built on Next.js 16 App Router, Payload CMS 3, and Tailwind CSS v4.

## Tech Stack

| Layer            | Choice                                               |
| ---------------- | ---------------------------------------------------- |
| Framework        | Next.js 16.2 (App Router, React 19, Turbopack)       |
| CMS / Backend    | Payload CMS 3.84 (native Next.js integration)        |
| Database         | PostgreSQL 18.x via `@payloadcms/db-postgres`        |
| UI Library       | shadcn/ui (Radix UI primitives, `default` style)     |
| Styling          | Tailwind CSS v4 (CSS-first, `@theme` directive)      |
| Language         | TypeScript 5.9 (strict)                              |
| Forms            | react-hook-form + zod                                |

## Directory Layout

```
src/
├── app/
│   ├── (frontend)/          Public-facing pages (own <html>)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (payload)/           Payload admin + REST/GraphQL (own <html>)
│   │   ├── admin/[[...segments]]/
│   │   ├── api/[...slug]/
│   │   ├── api/graphql/
│   │   ├── api/graphql-playground/
│   │   ├── custom.scss
│   │   └── layout.tsx
│   └── globals.css          Tailwind v4 + @theme design tokens
├── components/
│   └── ui/                  shadcn/ui primitives (Button seeded)
├── hooks/
├── lib/
│   └── utils.ts             cn() helper (clsx + tailwind-merge)
├── payload/
│   └── collections/         Users, Media
└── payload.config.ts
```

## Prerequisites

- Node.js >= 22 (or 20.9+)
- pnpm 10+
- PostgreSQL 18 (local or Neon / Supabase / Vercel Postgres)

## Quick Start

```bash
pnpm install
cp .env.example .env        # then fill in DATABASE_URI + PAYLOAD_SECRET

pnpm dev                    # http://localhost:3000
```

First visit to `/admin` triggers Payload to run migrations and prompts you to create the initial admin user.

## Common Commands

```bash
pnpm dev                    # Next.js dev server (Turbopack)
pnpm build                  # Production build
pnpm start                  # Production server
pnpm lint                   # ESLint

pnpm generate:types         # Regenerate src/payload/payload-types.ts
pnpm generate:importmap     # Rebuild Payload admin importMap
```

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add input card dialog form
```

Components land in `src/components/ui/`.

## Environment Variables

| Variable                   | Purpose                                     |
| -------------------------- | ------------------------------------------- |
| `PAYLOAD_SECRET`           | JWT / cookie signing secret (required)      |
| `DATABASE_URI`             | Postgres connection string (required)       |
| `PAYLOAD_PUBLIC_CORS_URLS` | Comma-separated allowed origins             |
| `NEXT_PUBLIC_SERVER_URL`   | Canonical public URL of the app             |

## Conventions

- **Server Components by default.** Only mark `"use client"` at the leaf when interaction, browser APIs, or hooks require it.
- **No HTTP calls to Payload from the server.** Always use the Local API: `const payload = await getPayload({ config })`.
- **Always pass `depth`** on Payload queries (usually 1–2) to prevent cascading joins.
- **Tailwind v4 only.** Never create a `tailwind.config.js`. Put theme tokens in `src/app/globals.css` via `@theme`.
- **Style merging.** Every dynamic className must flow through `cn()`.
- **Strict TypeScript.** No `any`; narrow with `unknown` + type guards. Use generated Payload types.
