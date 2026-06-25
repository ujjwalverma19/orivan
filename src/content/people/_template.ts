import type { PersonInput } from "@/content/schemas";
// import portrait from "@/assets/journey-<slug>.webp";

/**
 * Template for a new Orivan journey.
 *
 * To add a person:
 *   1. Copy this file to `src/content/people/<slug>.ts`.
 *   2. Rename the slug and fill the content below.
 *   3. (Optional) Add `src/content/videos/<slug>.ts` with a Video[] default export.
 *   4. Drop a WebP portrait at `src/assets/journey-<slug>.webp` and import it above.
 *   5. Save — the registry auto-discovers the file via import.meta.glob.
 *
 * Files starting with `_` (this one) are ignored by the registry.
 */
const person: PersonInput = {
  slug: "example-slug",
  name: "Example Name",
  title: "What they're best known for",
  summary: "One-paragraph editorial summary.",
  portrait: "", // portrait,
  birthYear: "YYYY",
  industry: "Industry & sub-industry",
  country: "Country",
  era: "Era / period (YYYY–YYYY)",
  companies: [],
  roles: [],
  tags: [],
  keyAchievement: "One-line headline achievement.",
  timeline: [],
  skills: [],
  failures: [],
  books: [],
  influences: [],
  videoIds: [],
  decisions: [],
  insights: [],
  quotes: [],
  sampleQuestions: [],

  // Submission metadata (optional — defaults: official / published).
  // sourceType: "community",
  // status: "draft",
  // authorName: "Jane Doe",
  // authorSlug: "jane-doe",
  // createdAt: new Date().toISOString(),

  // Homepage curation (optional). Only `featured: true` appears on the
  // homepage Featured Journeys grid; `featuredOrder` controls ordering
  // (lower first; unset sorts last). Top 8 are rendered.
  // featured: true,
  // featuredOrder: 5,
};

export default person;
