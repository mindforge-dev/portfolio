<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio

Next.js 16.2.9 + React 19.2.4 App Router project. The README is the stock `create-next-app` boilerplate and is misleading — trust this file instead.

## Toolchain

- **Package manager is pnpm** (`pnpm-lock.yaml`). README lists npm/yarn/bun — ignore that. Run all commands through `pnpm`.
- **Not a monorepo** despite `pnpm-workspace.yaml`. That file only sets `ignoredBuiltDependencies`; there is no `packages:` field.

## Commands

- `pnpm dev` – dev server
- `pnpm build` – production build; **also type-checks** (this is the de facto typecheck)
- `pnpm start` – serve the production build
- `pnpm lint` – runs `eslint` flat config. **`next lint` does not exist** in this version.

There is **no test setup** and **no standalone `typecheck` script**. Don't invent `pnpm test` / `pnpm typecheck`.

## Conventions that differ from defaults

- **Tailwind v4** via `@tailwindcss/postcss`. There is **no `tailwind.config.js`** — theme/theme tokens are defined with `@theme` in `app/globals.css` (CSS-first config). v4 has breaking changes vs v3; don't add `@tailwind base/components/utilities` directives or a JS config.
- **ESLint flat config** in `eslint.config.mjs` (`eslint-config-next/core-web-vitals` + `...typescript`). No `.eslintrc`.
- **App Router only** (`app/`). Single route `/` via `app/layout.tsx` + `app/page.tsx`.
- **Path alias `@/*` → repo root** (`./*`), not `src/*`.
