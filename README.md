# Orivan

> **Discover the real decisions, setbacks, and turning points behind exceptional people.**

## 🌐 Live Demo

**https://orivan.online**

---

## Overview

Orivan is an editorial discovery platform built around carefully curated journeys of founders, scientists, designers, athletes, writers, artists, and creators.

Instead of celebrating success, Orivan explores the path behind it—early decisions, failures, experiments, and the lessons that shaped remarkable people.

This isn't a quotes website or a collection of motivational snippets. It is a calm, editorial reading experience designed for people who want to understand **how exceptional work actually gets built.**

---

# Product Vision

Most biographies celebrate success.

**Orivan studies the journey.**

Instead of collecting achievements, Orivan maps the decisions, failures, experiments, and turning points that shaped extraordinary people.

The goal is to help readers recognize patterns they can apply to their own careers and lives.

## Design Trade-offs

For the MVP, I intentionally kept all content static instead of introducing a backend.

This reduced complexity, improved loading performance, and allowed me to focus on validating the reading experience before building content management features.

--

# Why Orivan

Most learning platforms optimize for completion.

**Orivan optimizes for attention.**

The product is built around three simple principles.

### Journeys, not biographies

Every profile is a structured timeline of milestones, failures, decisions, and lessons.

### Discovery over search

Collections, related journeys, videos, and the Question Explorer help readers discover ideas they didn't know to search for.

### Editorial quality

No motivational fluff.

No generic summaries.

Every page is written in a calm editorial voice focused on clarity and depth.

---

# Highlights

* Curated editorial journeys
* Interactive Question Explorer
* Editorial Collections
* Community Stories
* Curated YouTube learning library
* Full-text search
* Continue Exploring recommendations
* Responsive design
* Accessibility-first
* SEO optimized
* Server-side rendering (SSR)

---

# Features

* Curated journeys across founders, scientists, designers, writers, athletes, artists, and creators
* Interactive Question Explorer
* Editorial Collections organized by themes
* Growing collection of Community Stories
* Curated YouTube videos for every journey
* Full-text search across people, stories, collections, and videos
* Continue Exploring recommendations
* Responsive UI
* Keyboard accessibility
* Structured metadata and rich SEO

---

# Screenshots

> Add screenshots before publishing.

```
docs/
└── screenshots/
    ├── home.png
    ├── journey.png
    ├── collection.png
    └── search.png
```

Example:

## Home

<img width="1871" height="838" alt="image" src="https://github.com/user-attachments/assets/98f04272-1ddc-47fc-86f0-0fcff1fdc546" />

## Journey

<img width="1877" height="822" alt="image" src="https://github.com/user-attachments/assets/2291e4dc-5c62-4dcd-9dfd-4e30be8edb07" />

## Collections

<img width="1882" height="851" alt="image" src="https://github.com/user-attachments/assets/39cba820-a0f4-441a-88cb-37cd94906efd" />

## Search

<img width="1860" height="813" alt="image" src="https://github.com/user-attachments/assets/759b58a1-f22c-42e8-9b22-28cd68916e8c" />



---

# Tech Stack

| Category        | Technology                      |
| --------------- | ------------------------------- |
| Framework       | TanStack Start (React 19 + SSR) |
| Language        | TypeScript                      |
| Bundler         | Vite 7                          |
| Routing         | TanStack Router                 |
| Styling         | Tailwind CSS v4                 |
| UI              | shadcn/ui + Radix UI            |
| Forms           | React Hook Form                 |
| Validation      | Zod                             |
| Icons           | Lucide React                    |
| Data Fetching   | TanStack Query                  |
| Runtime         | Cloudflare Workers              |
| Package Manager | Bun                             |

---

# Performance

Orivan is optimized for speed and readability.

* Optimized WebP images
* Lazy-loaded below-the-fold sections
* Responsive image loading
* Route-level code splitting
* Server-side rendering
* Edge deployment
* Optimized metadata
* Fast initial render
* Minimal layout shift

---

# Search Experience

Users can search across:

* People
* Stories
* Collections
* Videos

Instead of simply returning names, Orivan encourages discovery through related journeys and connected ideas.

---

# SEO

Built with modern SEO best practices.

* Server-side rendering
* Open Graph metadata
* Twitter Cards
* Canonical URLs
* robots.txt
* sitemap.xml
* JSON-LD structured data
* Social sharing images

---

# Design Philosophy

Orivan follows a quiet editorial design language inspired by premium reading experiences.

Core principles:

* Typography before decoration
* Calm interactions
* Fast loading
* Minimal distractions
* Human-centered storytelling
* Accessibility by default

---

# Project Architecture

Orivan is a static-first, content-driven application.

Editorial content lives as strongly typed TypeScript modules validated using Zod before becoming part of the application.

```
src/
│
├── assets/
│
├── components/
│
├── content/
│   ├── people/
│   ├── collections/
│   ├── stories/
│   ├── videos/
│   ├── schemas/
│   └── registry.ts
│
├── data/
│
├── hooks/
│
├── lib/
│
├── routes/
│
└── styles.css

public/
```

---

# Engineering Principles

* Type-safe content
* Component-driven architecture
* Reusable UI primitives
* Static-first rendering
* Editorial content validation
* Accessibility-first development

---

# Local Development

## Prerequisites

* Bun 1.1+
* Node-compatible runtime

### Install

```bash
bun install
```

### Run

```bash
bun run dev
```

The application starts at:

```
http://localhost:8080
```

---

# Environment Variables

Copy:

```bash
cp .env.example .env.local
```

Optional:

```
VITE_SITE_URL=https://orivan.online
```

Used for canonical URLs and Open Graph metadata.

---

# Production Build

```bash
bun run build
```

Preview:

```bash
bun run preview
```

Production output:

```
.output/
```

---

# Deployment

Orivan targets Cloudflare Workers by default.

Deployment steps:

1. Build the project

```bash
bun run build
```

2. Deploy the generated `.output/` directory.

3. Configure:

```
VITE_SITE_URL=https://orivan.online
```

---

# Contributing

See **CONTRIBUTING.md** for:

* Branch naming
* Commit conventions
* Pull request expectations
* Editorial guidelines
* Project philosophy

---

# Roadmap

* Reader-submitted Community Stories
* Saved reading lists
* AI-assisted journey recommendations
* Collection essays
* Internationalization
* Print-friendly journeys
* Accessibility improvements
* Performance optimizations

---

# Acknowledgements

Built with:

* React
* TanStack Start
* Vite
* Tailwind CSS
* shadcn/ui
* Radix UI
* Cloudflare Workers
* Bun

---

# License

Released under the **MIT License**.

See **LICENSE** for details.

---

# Author

**Ujjwal Verma**

* 🌐 Website: https://orivan.online
* GitHub: https://github.com/ujjwalverma19
* LinkedIn: https://www.linkedin.com/in/ujjwalv19
* X: https://x.com/UJJWALV75382953

---

If you enjoyed Orivan or found it useful, consider giving the repository a ⭐.


- GitHub — [@ujjwalverma19](https://github.com/ujjwalverma19)
- LinkedIn — [ujjwalv19](https://www.linkedin.com/in/ujjwalv19/)
- X — [@UJJWALV75382953](https://x.com/UJJWALV75382953)
- Instagram — [@ujjwal_verma19](https://instagram.com/ujjwal_verma19)
