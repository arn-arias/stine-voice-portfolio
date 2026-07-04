# Stine Voice Portfolio

A premium, fast, accessible portfolio/showcase site for **Stine Schwennesen**, a Danish speaker and voice artist known as a DR1 channel voice, with public DR source-backed copy around her work in broadcast speak, audio description and P8 Jazz.

Live target: <https://stine.arnbot.com>

## Stack

- React 19 + TypeScript
- Vite
- Vitest + Testing Library
- Oxlint + Prettier
- Multi-stage Docker build serving static assets with nginx (with a `/health` probe)

The app is fully static — no backend, database, auth, analytics, or third-party paid APIs.

## Source grounding

Current public biographical claims are based on:

- DR: “Kom på arbejde med DR’s speaker Stine Schwennesen” — states that Stine Schwennesen is kanalstemme på DR1, started at DR in 2010 as oplæser på P1, later worked as live speaker on DR2, has a programme on P8 Jazz, and is educated as a jazz singer.
- DR: “Stine forklarer blinde og svagsynede…” — states that she works as a DR1 speaker and synstolker/audio describer, and explains the role of audio description for blind and visually impaired viewers.

Avoid adding unsourced numeric claims unless Stine provides them.

## Sections

Hero → Voice reel & samples → Services → Tone & style range → Studio / remote workflow → Testimonials & client fit → About → Contact / booking CTA → Footer. A sticky header, skip link, and semantic landmarks make it keyboard- and screen-reader-friendly.

## Development

```bash
pnpm install
pnpm dev
```

## Quality gate

```bash
pnpm validate
```

Runs, in order: `oxlint`, `prettier --check`, `vitest run`, and a production `vite build`.

## Customizing the content

Almost all copy lives in one file — [`src/data/site.ts`](src/data/site.ts). Update it to change the name, tagline, services, tones, languages, workflow, testimonials, stats, and socials without touching the components.

Items flagged `// placeholder` in that file should be replaced before/at launch:

- **`site.email`** — the booking inbox (currently `booking@stineschwennesen.dk`).
- **`socials`** — preferred real public profiles, or remove.
- **`samples`** — the reel players are illustrative. Playback is simulated over each clip's stated duration so the UI is complete without shipping large media. To wire real audio, add an `<audio>` element in `src/components/AudioSample.tsx` and drive `progress` from its `timeupdate` event instead of the interval.
- **Testimonials** — swap the generic roles for named, permissioned client quotes.
- **About portrait** — the monogram tile in `src/components/About.tsx` is a placeholder for a real photo of Stine.

## Deployment

The included `Dockerfile` builds the Vite app and serves the static `dist/` with nginx on port 80. `GET /health` returns `ok` for hosting/uptime probes (see `nginx.conf`). This is compatible with the Dokploy deployment at the live target above.

```bash
docker build -t stine-voice-portfolio .
docker run -p 8080:80 stine-voice-portfolio
# → http://localhost:8080  and  http://localhost:8080/health
```
