/**
 * Template for an editorial seed story. Copy this file, rename it, fill in
 * the fields, and the registry will pick it up automatically. Files
 * prefixed with `_` (like this one) are ignored.
 *
 * User-submitted stories from the UI live in localStorage — they do NOT
 * need a file here. Seed stories are reserved for stories curated by the
 * Orivan team.
 */

import type { StoryInput } from "@/content/schemas";

const _example: StoryInput = {
  slug: "example-story",
  title: "Example Story",
  authorName: "Anonymous",
  role: "Founder",
  summary: "One line summary that explains why this story matters.",
  tags: ["example"],
  milestones: [],
  failures: [],
  status: "draft",
  createdAt: "2024-01-01T00:00:00.000Z",
};

export default _example;
