import { z } from "zod";

/**
 * Community Story schema.
 *
 * Stories are submitted by users (no auth, MVP). They mirror the editorial
 * shape of `Person` but at a smaller scale: a few milestones, a few failures.
 *
 * Persistence today is localStorage; the same schema will back the future
 * Supabase table without changes — `slug`, `createdAt`, `status` all map
 * cleanly to columns.
 */

export const StoryMilestoneSchema = z.object({
  year: z.string().max(20).optional(),
  title: z.string().min(1).max(160),
  story: z.string().min(1).max(2000),
  lesson: z.string().max(500).optional(),
});

export const StoryFailureSchema = z.object({
  title: z.string().min(1).max(160),
  lesson: z.string().min(1).max(500),
});

export const StorySchema = z.object({
  slug: z.string().min(1).max(120),
  title: z.string().min(1).max(160),
  authorName: z.string().min(1).max(80),
  role: z.string().min(1).max(120),
  summary: z.string().min(1).max(600),
  country: z.string().max(80).optional(),
  tags: z.array(z.string().min(1).max(40)).default([]),
  milestones: z.array(StoryMilestoneSchema).default([]),
  failures: z.array(StoryFailureSchema).default([]),
  status: z.enum(["draft", "published"]).default("published"),
  featured: z.boolean().optional(),
  createdAt: z.string().min(1),
});

export type Story = z.infer<typeof StorySchema>;
export type StoryInput = z.input<typeof StorySchema>;
export type StoryMilestone = z.infer<typeof StoryMilestoneSchema>;
export type StoryFailure = z.infer<typeof StoryFailureSchema>;
