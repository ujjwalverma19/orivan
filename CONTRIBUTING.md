# Contributing to Orivan

Thank you for your interest in Orivan. This document describes how the
project is maintained and what to expect when proposing a change.

> Orivan is currently maintained as a curated, single-author project.
> External pull requests are reviewed but may not always be merged —
> editorial decisions stay with the maintainer.

---

## Philosophy

Three principles guide every change to the project:

1. **Editorial first.** Content is the product. UI exists to serve the
   reading experience, not the other way around.
2. **Quiet defaults.** Prefer restraint over decoration. No motivational
   language, no generic stock imagery, no AI-sounding copy.
3. **Boring tech, sharp execution.** The stack is intentionally small.
   New dependencies need justification.

---

## Branch Naming

Use short, descriptive branch names prefixed by intent:

```
feat/question-explorer-keyboard-nav
fix/video-modal-cleanup
chore/upgrade-tanstack-router
docs/readme-screenshots
content/add-story-night-shift-nurse
```

---

## Commit Conventions

Commits follow a lightweight [Conventional Commits](https://www.conventionalcommits.org/)
style:

```
feat: add rotation to community stories
fix: prevent layout shift on journey hero
chore: bump shadcn primitives
docs: rewrite README
content: add 4 new editorial stories
refactor: extract related-journey scoring
perf: lazy-load below-the-fold sections
```

Keep the subject line under 72 characters. Use the body for context when
the change is non-obvious.

---

## Pull Requests

A good PR:

- Describes the user-visible change in one or two sentences.
- Explains the reasoning, not just the diff.
- Stays focused on one concern. Split large work into multiple PRs.
- Updates relevant docs (`README`, `CHANGELOG`, code comments).
- Includes screenshots for any UI change.

The maintainer aims to respond within a few days. Reviews are direct and
focused on the work, not the contributor.

---

## Code Style

- **Language:** TypeScript strict mode. No `any` without a comment
  explaining why.
- **Components:** Functional, hook-based. Co-locate small helpers; lift
  shared logic into `src/lib/`.
- **Styling:** Tailwind v4 with semantic tokens from `src/styles.css`.
  Never hardcode colors (`text-white`, `bg-[#...]`) — use design tokens.
- **Files:** Kebab-case for filenames, PascalCase for component exports.
- **Formatting:** `bun run format` (Prettier) before pushing.
- **Linting:** `bun run lint` must pass with zero errors.

---

## Testing

Orivan does not yet have an automated test suite. Until one lands,
contributions are expected to:

- Run `bun run build` cleanly with no TypeScript or build errors.
- Pass `bun run lint`.
- Be manually verified across mobile, tablet, and desktop viewports.

A Playwright-based smoke test suite is on the roadmap.

---

## Content Contributions

New journeys, stories, or collections must:

- Be written in Orivan's editorial voice (specific, restrained, lesson-led).
- Cite sources for biographical facts where reasonable.
- Pass the Zod schema validation in `src/content/schemas/`.
- Include a `featured: true` flag only for cornerstone entries.

Speculative, motivational, or AI-generated content will be declined.

---

## License

By contributing, you agree that your contributions are licensed under the
[MIT License](./LICENSE).
