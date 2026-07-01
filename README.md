# kognit

Monorepo for the kognit product: study tracker mobile-first PWA + shared UI, design tokens and types.

## Structure

```
kognit/
├── apps/
│   └── web/          # Vite + React 18 PWA (main app)
├── packages/
│   ├── ui/           # Shared shadcn/Radix component library
│   ├── tokens/       # Design tokens (Style Dictionary)
│   ├── types/        # Shared TypeScript types (incl. Supabase generated)
│   └── config/       # Shared eslint / tsconfig / tailwind presets
└── supabase/         # Supabase project (migrations, edge functions, config)
```

## Requirements

- Node.js `>= 22`
- pnpm `>= 11`

## Getting started

```bash
pnpm install
pnpm dev        # runs turbo dev across workspaces
pnpm build      # builds everything
pnpm typecheck
pnpm lint
pnpm test
```

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui + Radix
- TanStack Query, React Hook Form + Zod
- Supabase (auth, database, edge functions)
- Turborepo + pnpm workspaces
