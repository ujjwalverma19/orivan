# Orivan

> Learn how the world's most interesting people actually got there.

Orivan is an editorial discovery platform built around curated journeys —
52 in-depth profiles of founders, scientists, designers, athletes, writers,
and artists. Each journey traces the real path: the early decisions, the
failures, the lessons, and the work that followed.

This is not a quotes site. It is a quiet, well-paced reading experience
designed for people who want to understand how things actually get made.

---

## Why Orivan

Most learning platforms optimize for completion. Orivan optimizes for
attention. The product is built around three ideas:

- **Journeys, not bios.** Each profile is a structured timeline of
  milestones, failures, and the lessons that came out of them.
- **Discovery over search.** Collections, curated videos, and a
  Question Explorer surface adjacent paths the reader did not know to ask for.
- **Editorial tone.** No motivational fluff, no AI-generated summaries.
  Every page reads like it was written by a person.

---

## Features

- 52 curated journeys across founders, designers, scientists, writers,
  athletes, and creators
- Interactive Question Explorer for navigating a journey by the questions
  it answers
- Editorial Collections that group journeys by theme
- 20 first-person Community Stories with a rotating homepage selection
- Curated YouTube video library per person, with a focused viewer
- Full-text Search across people, collections, stories, and videos
- "Continue Exploring" related-content suggestions on every leaf page
- Responsive, accessible UI with semantic HTML and keyboard support

---

## Screenshots

> _Add screenshots to `docs/screenshots/` and reference them here before
> publishing the repository._

```
docs/screenshots/
  home.png
  journey.png
  collection.png
  search.png
```

---

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- **Bundler:** Vite 7
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4 + shadcn/ui primitives (Radix UI)
- **Forms & validation:** React Hook Form + Zod
- **Icons:** lucide-react
- **Data fetching:** TanStack Query
- **Runtime target:** Cloudflare Workers (edge)
- **Package manager:** Bun

---

## Project Architecture

Orivan is a static-first, content-driven app. All editorial content lives
as typed TypeScript modules under `src/content/`, validated at load time
with Zod schemas. Routes are file-based; pages are rendered on the server
and hydrated on the client.

```
src/
  components/        Reusable UI: cards, sections, journey pieces, shadcn primitives
  routes/            File-based routes (pages and route handlers)
  content/           Editorial source-of-truth (people, videos, collections, stories)
    people/
    videos/
    collections/
    stories/
    schemas/         Zod schemas for every content type
    registry.ts      Loads and validates content at startup
  lib/               Domain logic: search, discovery, related content, rotation
  hooks/             Reusable React hooks
  data/              Derived data layer over the content registry
  assets/            Bundled images (WebP)
  styles.css         Tailwind v4 theme tokens and global styles
public/              Static assets served as-is
```

---

## Local Development

### Prerequisites

- [Bun](https://bun.sh) 1.1 or newer
- Node-compatible runtime (Bun handles this)

### Install

```bash
bun install
```

### Run

```bash
bun run dev
```

The app starts on `http://localhost:8080`.

### Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

```bash
cp .env.example .env.local
```

Orivan has no required secrets — the project ships with all content
inlined. The only optional variable is `VITE_SITE_URL`, used for canonical
links and Open Graph metadata in production.

---

## Production Build

```bash
bun run build
bun run preview
```

`bun run build` produces an edge-ready bundle under `.output/`.
`bun run preview` serves the production build locally for verification.

---

## Deployment

Orivan targets Cloudflare Workers by default and can be deployed to any
platform that supports the TanStack Start edge runtime.

1. Run `bun run build`.
2. Deploy `.output/` using your platform's standard flow
   (Cloudflare Pages, Wrangler, or any compatible host).
3. Set `VITE_SITE_URL` in the platform's environment configuration if you
   want absolute canonical URLs in metadata.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the project philosophy,
branch and commit conventions, and pull request expectations.

---

## Roadmap

- Reader-submitted Community Stories with editorial review
- Saved journeys and personal reading lists
- Per-collection long-form essays
- Internationalization (English first, more to follow)
- Print-friendly journey exports

---

## License

Released under the [MIT License](./LICENSE).

---

## Author

Built by **Ujjwal Verma**.

- GitHub — [@ujjwalverma19](https://github.com/ujjwalverma19)
- LinkedIn — [ujjwalv19](https://www.linkedin.com/in/ujjwalv19/)
- X — [@UJJWALV75382953](https://x.com/UJJWALV75382953)
- Instagram — [@ujjwal_verma19](https://instagram.com/ujjwal_verma19)
