import { getAllPeople, getAllVideos } from "@/content/registry";
import { isPlayableVideo } from "@/content/schemas";

const people = getAllPeople();
const videos = getAllVideos();

/**
 * Recommendation surfaces shown when the search box is empty. The current
 * implementation derives everything from local structured data; replace
 * with a remote service (popularity from analytics, personalized AI
 * recommendations, etc.) without changing the consuming UI.
 */

export type TrendingQuery = { query: string; label: string };
export type PopularJourney = {
  slug: string;
  name: string;
  title: string;
  portrait: string;
  tags: string[];
};
export type PopularLesson = {
  id: string;
  lesson: string;
  personName: string;
  personSlug: string;
  audience: string;
};
export type PopularTopic = { tag: string };

const asArray = <T>(value: T[] | null | undefined): T[] =>
  Array.isArray(value) ? value.filter((item): item is T => Boolean(item)) : [];

const HAND_PICKED_QUERIES: TrendingQuery[] = [
  { query: "design", label: "Design thinking" },
  { query: "first principles", label: "First principles" },
  { query: "rejection", label: "Handling rejection" },
  { query: "founder mode", label: "Founder mode" },
  { query: "storytelling", label: "Storytelling" },
  { query: "manufacturing", label: "Manufacturing at scale" },
];

export function getTrendingQueries(): TrendingQuery[] {
  return HAND_PICKED_QUERIES;
}

export function getPopularJourneys(limit = 6): PopularJourney[] {
  return asArray(people)
    .slice(0, limit)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      title: p.title,
      portrait: p.portrait,
      tags: asArray(p.tags).slice(0, 3),
    }));
}

export function getPopularLessons(limit = 6): PopularLesson[] {
  const out: PopularLesson[] = [];
  for (const person of asArray(people)) {
    const firstInsight = asArray(person.insights)[0];
    if (firstInsight) {
      out.push({
        id: `${person.slug}-0`,
        lesson: firstInsight.lesson,
        personName: person.name,
        personSlug: person.slug,
        audience: firstInsight.audience,
      });
    }
  }
  return out.slice(0, limit);
}

/**
 * Topic popularity = count of references across people tags + video tags.
 * Approximates trending until real analytics replace it.
 */
export function getPopularTopics(limit = 12): PopularTopic[] {
  const counts = new Map<string, number>();
  for (const p of asArray(people))
    for (const t of asArray(p.tags)) counts.set(t, (counts.get(t) ?? 0) + 3);
  for (const v of asArray(videos)) {
    if (!isPlayableVideo(v)) continue;
    for (const t of asArray(v.tags)) counts.set(t, (counts.get(t) ?? 0) + 1);
    for (const t of asArray(v.topics)) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => ({ tag }))
    .slice(0, limit);
}
