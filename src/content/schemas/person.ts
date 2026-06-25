import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Sub-schemas                                                         */
/* ------------------------------------------------------------------ */

export const TimelineEntrySchema = z.object({
  year: z.string(),
  title: z.string(),
  story: z.string(),
  challenge: z.string(),
  lesson: z.string(),
});

export const SkillSchema = z.object({
  name: z.string(),
  description: z.string(),
  developed: z.string(),
});

export const FailureSchema = z.object({
  title: z.string(),
  context: z.string(),
  recovery: z.string(),
  lesson: z.string(),
});

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  note: z.string(),
});

export const InfluenceSchema = z.object({
  name: z.string(),
  note: z.string(),
});

export const DecisionSchema = z.object({
  title: z.string(),
  why: z.string(),
  risk: z.enum(["Low", "Medium", "High", "Extreme"]),
  outcome: z.string(),
  impact: z.string(),
});

export const InsightSchema = z.object({
  audience: z.string(),
  lesson: z.string(),
  takeaway: z.string(),
});

/** First-class schema for future `quotes` table — not yet rendered in UI. */
export const QuoteSchema = z.object({
  text: z.string(),
  context: z.string().optional(),
  year: z.string().optional(),
});

/* ------------------------------------------------------------------ */
/* Person                                                              */
/* ------------------------------------------------------------------ */

export const PersonSchema = z
  .object({
    slug: z.string().min(1),
    name: z.string().min(1),
    title: z.string(),
    summary: z.string(),
    portrait: z.string(),
    birthYear: z.string(),
    industry: z.string(),
    country: z.string(),
    era: z.string(),
    companies: z.array(z.string()).default([]),
    roles: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    keyAchievement: z.string(),
    timeline: z.array(TimelineEntrySchema).default([]),
    skills: z.array(SkillSchema).default([]),
    failures: z.array(FailureSchema).default([]),
    books: z.array(BookSchema).default([]),
    influences: z.array(InfluenceSchema).default([]),
    videoIds: z.array(z.string()).default([]),
    decisions: z.array(DecisionSchema).default([]),
    insights: z.array(InsightSchema).default([]),
    quotes: z.array(QuoteSchema).default([]),
    sampleQuestions: z.array(z.string()).default([]),

    // ----- Story submission readiness (future-only; no UI consumers) -----
    /** Curated by Orivan or submitted by the community. */
    sourceType: z.enum(["official", "community"]).default("official"),
    /** Visibility state. Only `published` is surfaced by getAllPeople(). */
    status: z.enum(["published", "draft", "review"]).default("published"),
    /** Display name of the community author (required when sourceType="community"). */
    authorName: z.string().optional(),
    /** Profile slug of the author (future user accounts). */
    authorSlug: z.string().optional(),
    createdAt: z.string().datetime().optional(),
    updatedAt: z.string().datetime().optional(),

    // ----- Homepage curation -----
    /** When true, eligible to render in the homepage Featured Journeys section. */
    featured: z.boolean().default(false),
    /** Lower numbers render first. Unset values sort last. */
    featuredOrder: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.sourceType === "community" && !data.authorName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["authorName"],
        message: "authorName is required when sourceType is 'community'",
      });
    }
  });

/* ------------------------------------------------------------------ */
/* Inferred types — single source of truth                             */
/* ------------------------------------------------------------------ */

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Failure = z.infer<typeof FailureSchema>;
export type Book = z.infer<typeof BookSchema>;
export type Influence = z.infer<typeof InfluenceSchema>;
export type Decision = z.infer<typeof DecisionSchema>;
export type Insight = z.infer<typeof InsightSchema>;
export type Quote = z.infer<typeof QuoteSchema>;
export type Person = z.infer<typeof PersonSchema>;
/** Shape accepted by the schema before defaults are applied. */
export type PersonInput = z.input<typeof PersonSchema>;

/* ------------------------------------------------------------------ */
/* DB-ready row mappers (snake_case) — for future Supabase migration   */
/* ------------------------------------------------------------------ */

export const personToRow = (p: Person) => ({
  slug: p.slug,
  name: p.name,
  title: p.title,
  summary: p.summary,
  portrait: p.portrait,
  birth_year: p.birthYear,
  industry: p.industry,
  country: p.country,
  era: p.era,
  companies: p.companies,
  roles: p.roles,
  tags: p.tags,
  key_achievement: p.keyAchievement,
  sample_questions: p.sampleQuestions,
  source_type: p.sourceType,
  status: p.status,
  author_name: p.authorName ?? null,
  author_slug: p.authorSlug ?? null,
  created_at: p.createdAt ?? null,
  updated_at: p.updatedAt ?? null,
  featured: p.featured,
  featured_order: p.featuredOrder ?? null,
});

export const timelineEntryToRow = (personSlug: string, t: TimelineEntry) => ({
  person_slug: personSlug,
  year: t.year,
  title: t.title,
  story: t.story,
  challenge: t.challenge,
  lesson: t.lesson,
});

export const skillToRow = (personSlug: string, s: Skill) => ({
  person_slug: personSlug,
  name: s.name,
  description: s.description,
  developed: s.developed,
});

export const failureToRow = (personSlug: string, f: Failure) => ({
  person_slug: personSlug,
  title: f.title,
  context: f.context,
  recovery: f.recovery,
  lesson: f.lesson,
});

export const decisionToRow = (personSlug: string, d: Decision) => ({
  person_slug: personSlug,
  title: d.title,
  why: d.why,
  risk: d.risk,
  outcome: d.outcome,
  impact: d.impact,
});

export const quoteToRow = (personSlug: string, q: Quote) => ({
  person_slug: personSlug,
  text: q.text,
  context: q.context ?? null,
  year: q.year ?? null,
});

export const insightToRow = (personSlug: string, i: Insight) => ({
  person_slug: personSlug,
  audience: i.audience,
  lesson: i.lesson,
  takeaway: i.takeaway,
});
