# Orivan Content

All journey content lives here. Adding a person is a **single-file** operation —
the registry auto-discovers everything via `import.meta.glob`, validates it with
Zod, and exposes it to the rest of the app.

## Layout

```
src/content/
  schemas/         Zod schemas (Person, Video, ...) + DB-row mappers
  people/          One .ts file per person (default export)
  videos/          One .ts file per person (default export = Video[])
  registry.ts      Auto-discovery + memoized lookups
  validation.ts    Dev-only integrity checks
```

Files starting with `_` (e.g. `_template.ts`) are ignored by the registry.

## Add a person

1. **Copy the template**
   ```bash
   cp src/content/people/_template.ts src/content/people/<slug>.ts
   ```
2. **Rename the slug** in the new file and fill in every field. Zod flags
   missing / invalid fields the moment the dev server hot-reloads.
3. **(Optional) Add videos**
   ```bash
   touch src/content/videos/<slug>.ts
   ```
   Export a `VideoInput[]` as default. Reference any `id` from this file in
   the person's `videoIds` array.
4. **Drop a WebP portrait** at `src/assets/journey-<slug>.webp` and import it at the
   top of the person file.
5. **Save.** That's it — no registry edit, no route edit, no search edit.

The new person automatically:

- Appears in `/search` and the recommendation widgets.
- Renders at `/journey/<slug>`.
- Becomes available to any future Compare or Journey DNA feature via
  `compareBySlugs()` / `getDnaInputs()`.

## Submission metadata

Every person carries metadata that the UI does not consume yet, but the
schema and registry already understand. Defaults are safe — official curated
journeys never need to set these by hand.

| Field        | Type                                 | Default       |
| ------------ | ------------------------------------ | ------------- |
| `sourceType` | `"official" \| "community"`          | `"official"`  |
| `status`     | `"published" \| "draft" \| "review"` | `"published"` |
| `authorName` | `string`                             | undefined     |
| `authorSlug` | `string`                             | undefined     |
| `createdAt`  | ISO datetime string                  | undefined     |
| `updatedAt`  | ISO datetime string                  | undefined     |

`getAllPeople()` and `getPersonBySlug()` only return `status === "published"`
records. Drafts and review-state records are loaded but hidden from search,
recommendations, and journey pages until promoted. `getAllPeopleRaw()` is
reserved for future admin/review tooling.

If `sourceType` is `"community"`, `authorName` is required.

## Future Supabase migration

Each schema ships a `toRow()` helper that returns a snake_case, DB-shaped
object (`person_to_row`, `video_to_row`, `timeline_entry_to_row`, ...). When
we wire Supabase later, seeding becomes mechanical:

```ts
for (const p of getAllPeopleRaw()) {
  await supabase.from("people").insert(personToRow(p));
}
```

No content rewrite, no schema rewrite.

## Importing from app code

```ts
import { getAllPeople, getPersonBySlug, getVideosByIds } from "@/content/registry";

import type { Person, Video } from "@/content/schemas";
```

The legacy `@/data/people` and `@/data/videos` modules still resolve — they
re-export the registry — but new code should import from `@/content/*`.
