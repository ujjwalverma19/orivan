import { z } from "zod";

/**
 * Optional auto-membership rules. The current MVP only honors `personSlugs`,
 * but every collection module may declare these so a future indexer can
 * expand membership without changing the schema.
 */
export const CollectionAutoSchema = z
  .object({
    tags: z.array(z.string()).optional(),
    roles: z.array(z.string()).optional(),
    industry: z.string().optional(),
  })
  .optional();

export const CollectionSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  /** When true, eligible to render in the homepage "Explore by Collection" rail. */
  featured: z.boolean().default(false),
  /** Lower numbers render first. Unset values sort last. */
  featuredOrder: z.number().optional(),
  /** Optional cover image URL or `/src/assets/...` path. */
  coverImage: z.string().optional(),
  /** Curated, ordered list of person slugs. */
  personSlugs: z.array(z.string()).default([]),
  /** Reserved for future automatic membership; not yet evaluated. */
  auto: CollectionAutoSchema,
});

export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionInput = z.input<typeof CollectionSchema>;

export const collectionToRow = (c: Collection) => ({
  slug: c.slug,
  title: c.title,
  description: c.description,
  featured: c.featured,
  featured_order: c.featuredOrder ?? null,
  cover_image: c.coverImage ?? null,
  person_slugs: c.personSlugs,
  auto: c.auto ?? null,
});
