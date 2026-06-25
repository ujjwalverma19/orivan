import { z } from "zod";

export const VideoKindSchema = z.enum(["Speech", "Interview", "Keynote", "Talk", "Documentary"]);
export const VideoDifficultySchema = z.enum(["Beginner", "Intermediate", "Advanced"]);

export const VideoSchema = z.object({
  id: z.string().min(1),
  personSlug: z.string().min(1),
  title: z.string(),
  kind: VideoKindSchema,
  year: z.string(),
  length: z.string(),
  youtubeId: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  keyTakeaways: z.array(z.string()).default([]),
  difficulty: VideoDifficultySchema.optional(),
  topics: z.array(z.string()).optional(),
});

export type VideoKind = z.infer<typeof VideoKindSchema>;
export type VideoDifficulty = z.infer<typeof VideoDifficultySchema>;
export type Video = z.infer<typeof VideoSchema>;
export type VideoInput = z.input<typeof VideoSchema>;

/**
 * Manual blocklist for videos confirmed unplayable
 * (deleted, private, age-restricted, or embedding disabled).
 */
const UNPLAYABLE_IDS: ReadonlySet<string> = new Set<string>([]);

const YT_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

/**
 * True only if the video has a structurally valid YouTube ID and is not on
 * the manual unplayable blocklist. Gate every clickable card with this.
 */
export function isPlayableVideo(video: Video | undefined | null): video is Video {
  if (!video) return false;
  if (!video.youtubeId || !YT_ID_PATTERN.test(video.youtubeId)) return false;
  if (UNPLAYABLE_IDS.has(video.id) || UNPLAYABLE_IDS.has(video.youtubeId)) return false;
  return true;
}

export const videoToRow = (v: Video) => ({
  id: v.id,
  person_slug: v.personSlug,
  title: v.title,
  kind: v.kind,
  year: v.year,
  length: v.length,
  youtube_id: v.youtubeId,
  description: v.description,
  tags: v.tags,
  key_takeaways: v.keyTakeaways,
  difficulty: v.difficulty ?? null,
  topics: v.topics ?? null,
});
