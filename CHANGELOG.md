# Changelog

All notable changes to Orivan are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-06-25

Initial public release.

### Added
- 52 curated editorial journeys spanning founders, designers, scientists,
  writers, athletes, and creators
- Interactive **Question Explorer** for navigating any journey by the
  questions it answers
- **Collections** — 12 themed groupings of related journeys
- **Community Stories** — 20 first-person editorial stories with seeded
  homepage rotation
- **Curated Videos** — per-person YouTube library with a focused viewer
- **Search** across people, collections, stories, videos, lessons, and
  failures, with debounced input and pre-indexed haystacks
- **Continue Exploring** related-content surface on every leaf page
- Homepage **Featured Journeys** with weighted random rotation across the
  full published pool
- Responsive, accessible UI with semantic HTML, keyboard navigation, and
  WebP image pipeline
- SEO-ready per-route head metadata, canonical URLs, and JSON-LD where
  applicable

### Performance
- Converted all bundled images to WebP
- Lazy-loaded below-the-fold homepage sections via IntersectionObserver
- Code-split route components via TanStack Start's automatic splitting
- Preloaded the LCP hero image

### Security
- No secrets, API keys, or credentials committed to the repository
- All external links use `target="_blank"` with `rel="noopener noreferrer"`
