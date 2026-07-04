# Stine Voice Portfolio

React + TypeScript + Vite portfolio/showcase site for Stine's voice acting and recording work.

## Stack

- React 19 + TypeScript
- Vite
- Vitest + Testing Library
- Oxlint + Prettier
- Multi-stage Docker build serving static assets with nginx

## Development

```bash
pnpm install
pnpm dev
```

## Quality gate

```bash
pnpm validate
```

This runs linting, formatting checks, tests, and a production build.

## Deployment

The included `Dockerfile` builds the Vite app and serves it with nginx on port 80. `/health` returns `ok` for hosting probes.
