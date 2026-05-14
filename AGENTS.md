# AGENTS.md

## Overview

CLI that rewrites case conventions across an entire `schema.prisma` (with optional per-`model` / `field` overrides), so that an introspected schema matches the casing your Prisma client should expose. Designed to be idempotent — usable as a one-off migration or as a commit-hook / CI linter. Community-maintained fork of `iiian/prisma-case-format`.

## Tech Stack

- **Language:** TypeScript (CommonJS, `"type": "commonjs"`)
- **Runtime:** Node.js (CLI)
- **Package Manager:** pnpm
- **Runtime Dependencies:** `@prisma/internals`, `commander`, `change-case`, `pluralize`, `chalk`, `js-yaml`
- **Build:** `tsc`
- **Testing:** Vitest, @vitest/coverage-v8
- **Lint/Format:** oxlint (+ `oxlint-tsgolint`), oxfmt
- **Type Checking:** TypeScript
- **Tooling:** ts-node, lefthook (git hooks), commitlint (conventional commits), bin entry `prisma-schema-remap`

## Documentation

- Commander: https://context7.com/tj/commander.js/llms.txt
- OXC (oxlint, oxfmt): https://oxc.rs/llms.txt
- Prisma: https://www.prisma.io/docs/llms.txt
- TypeScript: https://www.typescriptlang.org/llms.txt
- Vitest: https://vitest.dev/llms.txt

## Commands

- **Install:** `pnpm install`
- **Build:** `pnpm build` (`tsc`)
- **Run CLI locally:** `pnpm cli` (executes `bin/cli.js`)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`

## Project Structure

- `src/cli.ts` — CLI entry point
- `src/schema.ts` — Prisma schema parsing/serialization
- `src/convention-store.ts`, `src/convention-transformer.ts` — naming convention logic
- `src/caseConventions.ts` — case-style helpers
- `bin/cli.js` — runtime CLI shim
- `test/` — Vitest suite (`*.test.ts`, `__fixtures__/`, `__snapshots__/`)
- `dist/` — build output (gitignored)

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** CommonJS (project-wide)
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Tests live in `test/` as `*.test.ts`, with `__fixtures__/` and `__snapshots__/`
- Run a single file: `pnpm test test/convention-transformer.test.ts`
- Update snapshots: `pnpm test -u`
