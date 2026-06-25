import { getAllPeople, getAllVideos, getAllCollections } from "@/content/registry";
import { getAllStories } from "@/lib/stories/store";
import {
  isPlayableVideo,
  type Person,
  type Video,
  type Collection,
  type Story,
} from "@/content/schemas";
import {
  exactNameBonus,
  norm,
  scoreField,
  scoreList,
  scorePreparedField,
  scorePreparedList,
  tokenize,
} from "./scoring";
import type {
  AnyResult,
  CollectionResult,
  FailureResult,
  LessonResult,
  PersonResult,
  SearchProvider,
  StoryResult,
  VideoResult,
} from "./types";

/**
 * Field weights — these encode the product priority documented in the
 * search brief:
 *   exact name > tags > roles > skills > lessons > videos.
 *
 * Tuning is intentionally centralized here so future ranking experiments
 * (or a remote ranker) can adjust without touching call sites.
 */
const W = {
  name: 200,
  tag: 80,
  role: 60,
  company: 60,
  skill: 40,
  industry: 30,
  era: 30,
  country: 25,
  title: 20,
  summary: 15,
  lesson: 25,
  videoTitle: 18,
  videoTag: 15,
  videoTopic: 14,
  videoDescription: 10,
  failureTitle: 20,
  failureLesson: 25,
} as const;

const asArray = <T>(value: T[] | null | undefined): T[] =>
  Array.isArray(value) ? value.filter((item): item is T => Boolean(item)) : [];

type PersonIndex = {
  person: Person;
  name: string;
  tags: string[];
  roles: string[];
  companies: string[];
  skills: string[];
  skillDescriptions: string[];
  industry: string;
  era: string;
  country: string;
  title: string;
  summary: string;
  insights: string[];
  timelineLessons: string[];
};

type VideoIndex = {
  video: Video;
  title: string;
  tags: string[];
  topics: string[];
  description: string;
  kind: string;
};

const peopleIndex: PersonIndex[] = asArray(getAllPeople()).map((person) => ({
  person,
  name: norm(person.name),
  tags: asArray(person.tags).map(norm),
  roles: asArray(person.roles).map(norm),
  companies: asArray(person.companies).map(norm),
  skills: asArray(person.skills).map((s) => norm(s.name)),
  skillDescriptions: asArray(person.skills).map((s) => norm(s.description)),
  industry: norm(person.industry),
  era: norm(person.era),
  country: norm(person.country),
  title: norm(person.title),
  summary: norm(person.summary),
  insights: asArray(person.insights).map((i) => norm(i.lesson)),
  timelineLessons: asArray(person.timeline).map((t) => norm(t.lesson)),
}));

const videoIndex: VideoIndex[] = asArray(getAllVideos()).map((video) => ({
  video,
  title: norm(video.title),
  tags: asArray(video.tags).map(norm),
  topics: asArray(video.topics).map(norm),
  description: norm(video.description),
  kind: norm(video.kind),
}));

const publishedPeople = peopleIndex.map((entry) => entry.person);
const personBySlug = new Map(publishedPeople.map((p) => [p.slug, p]));

/* ------------------------------------------------------------------ */
/* People                                                              */
/* ------------------------------------------------------------------ */

function scorePerson(entry: PersonIndex, tokens: string[], query: string) {
  const { person } = entry;
  const matches: string[] = [];
  let score = exactNameBonus(query, person.name ?? "");
  if (score > 0) matches.push("name");

  const add = (label: string, n: number) => {
    if (n > 0) {
      score += n;
      if (!matches.includes(label)) matches.push(label);
    }
  };

  add("name", scorePreparedField(tokens, entry.name, W.name));
  add("tag", scorePreparedList(tokens, entry.tags, W.tag));
  add("role", scorePreparedList(tokens, entry.roles, W.role));
  add("company", scorePreparedList(tokens, entry.companies, W.company));
  add("skill", scorePreparedList(tokens, entry.skills, W.skill));
  add("skill", scorePreparedList(tokens, entry.skillDescriptions, Math.round(W.skill / 2)));
  add("industry", scorePreparedField(tokens, entry.industry, W.industry));
  add("era", scorePreparedField(tokens, entry.era, W.era));
  add("country", scorePreparedField(tokens, entry.country, W.country));
  add("title", scorePreparedField(tokens, entry.title, W.title));
  add("summary", scorePreparedField(tokens, entry.summary, W.summary));
  add("lesson", scorePreparedList(tokens, entry.insights, W.lesson));
  add("lesson", scorePreparedList(tokens, entry.timelineLessons, Math.round(W.lesson / 2)));

  return { score, matches };
}

function toPersonResult(person: Person, score: number, matches: string[]): PersonResult {
  return {
    id: `person:${person.slug}`,
    kind: "person",
    score,
    matches,
    title: person.name,
    snippet: `${person.title} · ${person.era}`,
    href: `/journey/${person.slug}`,
    item: person,
  };
}

export function searchPeople(query: string, limit = 20): PersonResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return peopleIndex
    .map((entry) => {
      const { score, matches } = scorePerson(entry, tokens, query);
      return { p: entry.person, score, matches };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => toPersonResult(r.p, r.score, r.matches));
}

/* ------------------------------------------------------------------ */
/* Videos                                                              */
/* ------------------------------------------------------------------ */

function scoreVideo(entry: VideoIndex, tokens: string[]) {
  const matches: string[] = [];
  let score = 0;

  const add = (label: string, n: number) => {
    if (n > 0) {
      score += n;
      if (!matches.includes(label)) matches.push(label);
    }
  };

  add("title", scorePreparedField(tokens, entry.title, W.videoTitle));
  add("tag", scorePreparedList(tokens, entry.tags, W.videoTag));
  add("topic", scorePreparedList(tokens, entry.topics, W.videoTopic));
  add("description", scorePreparedField(tokens, entry.description, W.videoDescription));
  add("kind", scorePreparedField(tokens, entry.kind, 8));

  return { score, matches };
}

export function searchVideos(query: string, limit = 20): VideoResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return videoIndex
    .filter(({ video }) => isPlayableVideo(video))
    .map((entry) => {
      const { score, matches } = scoreVideo(entry, tokens);
      return { v: entry.video, score, matches };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map<VideoResult>((r) => {
      const person = personBySlug.get(r.v.personSlug);
      return {
        id: `video:${r.v.id}`,
        kind: "video",
        score: r.score,
        matches: r.matches,
        title: r.v.title,
        snippet: `${person?.name ?? r.v.personSlug} · ${r.v.kind} · ${r.v.year}`,
        href: person ? `/journey/${person.slug}#videos` : "#",
        item: r.v,
      };
    });
}

/* ------------------------------------------------------------------ */
/* Lessons (insights + timeline lessons)                               */
/* ------------------------------------------------------------------ */

export function searchLessons(query: string, limit = 30): LessonResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: LessonResult[] = [];
  for (const person of publishedPeople) {
    asArray(person.insights).forEach((insight, i) => {
      const s =
        scoreField(tokens, insight.lesson, W.lesson * 1.5) +
        scoreField(tokens, insight.takeaway, W.lesson) +
        scoreField(tokens, insight.audience, W.role);
      if (s > 0) {
        results.push({
          id: `lesson:${person.slug}:insight:${i}`,
          kind: "lesson",
          score: s,
          matches: ["insight"],
          title: insight.lesson,
          snippet: `${person.name} · for ${insight.audience}`,
          href: `/journey/${person.slug}#lessons`,
          item: {
            person,
            source: "insight",
            lesson: insight.lesson,
            audience: insight.audience,
            takeaway: insight.takeaway,
            origin: insight,
          },
        });
      }
    });
    asArray(person.timeline).forEach((entry, i) => {
      const s = scoreField(tokens, entry.lesson, W.lesson);
      if (s > 0) {
        results.push({
          id: `lesson:${person.slug}:timeline:${i}`,
          kind: "lesson",
          score: s,
          matches: ["timeline"],
          title: entry.lesson,
          snippet: `${person.name} · ${entry.year} · ${entry.title}`,
          href: `/journey/${person.slug}#timeline`,
          item: { person, source: "timeline", lesson: entry.lesson, origin: entry },
        });
      }
    });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Failures                                                            */
/* ------------------------------------------------------------------ */

export function searchFailures(query: string, limit = 20): FailureResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: FailureResult[] = [];
  for (const person of publishedPeople) {
    asArray(person.failures).forEach((failure, i) => {
      const s =
        scoreField(tokens, failure.title, W.failureTitle) +
        scoreField(tokens, failure.context, Math.round(W.failureTitle / 2)) +
        scoreField(tokens, failure.lesson, W.failureLesson) +
        scoreField(tokens, failure.recovery, 10);
      if (s > 0) {
        results.push({
          id: `failure:${person.slug}:${i}`,
          kind: "failure",
          score: s,
          matches: ["failure"],
          title: failure.title,
          snippet: `${person.name} · ${failure.lesson}`,
          href: `/journey/${person.slug}#failures`,
          item: { person, failure },
        });
      }
    });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* Collections                                                         */
/* ------------------------------------------------------------------ */

function scoreCollection(c: Collection, tokens: string[]) {
  const matches: string[] = [];
  let score = 0;
  const add = (label: string, n: number) => {
    if (n > 0) {
      score += n;
      if (!matches.includes(label)) matches.push(label);
    }
  };
  add("title", scoreField(tokens, c.title, W.name));
  add("description", scoreField(tokens, c.description, W.summary));
  add("tag", scoreList(tokens, c.auto?.tags, W.tag));
  add("role", scoreList(tokens, c.auto?.roles, W.role));
  add("industry", scoreField(tokens, c.auto?.industry, W.industry));
  return { score, matches };
}

export function searchCollections(query: string, limit = 10): CollectionResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return getAllCollections()
    .map((c) => {
      const { score, matches } = scoreCollection(c, tokens);
      return { c, score, matches };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map<CollectionResult>((r) => ({
      id: `collection:${r.c.slug}`,
      kind: "collection",
      score: r.score,
      matches: r.matches,
      title: r.c.title,
      snippet: r.c.description,
      href: `/collections/${r.c.slug}`,
      item: { collection: r.c },
    }));
}

/* ------------------------------------------------------------------ */
/* Stories (community-submitted)                                       */
/* ------------------------------------------------------------------ */

function scoreStory(story: Story, tokens: string[], query: string) {
  const matches: string[] = [];
  let score = exactNameBonus(query, story.title);
  if (score > 0) matches.push("title");

  const add = (label: string, n: number) => {
    if (n > 0) {
      score += n;
      if (!matches.includes(label)) matches.push(label);
    }
  };

  add("title", scoreField(tokens, story.title, W.name));
  add("tag", scoreList(tokens, story.tags, W.tag));
  add("role", scoreField(tokens, story.role, W.role));
  add("author", scoreField(tokens, story.authorName, W.name / 2));
  add("country", scoreField(tokens, story.country, W.country));
  add("summary", scoreField(tokens, story.summary, W.summary));
  add(
    "milestone",
    scoreList(
      tokens,
      story.milestones.map((m) => m.title),
      W.title,
    ),
  );
  add(
    "milestone",
    scoreList(
      tokens,
      story.milestones.map((m) => m.story),
      W.summary,
    ),
  );
  add(
    "lesson",
    scoreList(
      tokens,
      story.milestones.map((m) => m.lesson ?? ""),
      W.lesson,
    ),
  );
  add(
    "failure",
    scoreList(
      tokens,
      story.failures.map((f) => f.title),
      W.failureTitle,
    ),
  );
  add(
    "lesson",
    scoreList(
      tokens,
      story.failures.map((f) => f.lesson),
      W.failureLesson,
    ),
  );

  return { score, matches };
}

export function searchStories(query: string, limit = 20): StoryResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return getAllStories()
    .map((s) => {
      const { score, matches } = scoreStory(s, tokens, query);
      return { s, score, matches };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map<StoryResult>((r) => ({
      id: `story:${r.s.slug}`,
      kind: "story",
      score: r.score,
      matches: r.matches,
      title: r.s.title,
      snippet: `${r.s.authorName} · ${r.s.role}${r.s.country ? ` · ${r.s.country}` : ""}`,
      href: `/stories/${r.s.slug}`,
      item: r.s,
    }));
}

/* ------------------------------------------------------------------ */
/* Aggregate                                                           */
/* ------------------------------------------------------------------ */

export function searchAll(query: string, limit = 50): AnyResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const all: AnyResult[] = [
    ...searchPeople(query, limit),
    ...searchCollections(query, limit),
    ...searchStories(query, limit),
    ...searchVideos(query, limit),
    ...searchLessons(query, limit),
    ...searchFailures(query, limit),
  ];
  return all.sort((a, b) => b.score - a.score).slice(0, limit);
}

/**
 * Default provider implementation. Use the `searchProvider` symbol from
 * any UI component so the underlying engine can be swapped (Supabase
 * full-text, vector search, AI rerankers) without touching the UI.
 */
export const localSearchProvider: SearchProvider = {
  searchPeople,
  searchVideos,
  searchLessons,
  searchFailures,
  searchCollections,
  searchStories,
  searchAll,
};

export const searchProvider: SearchProvider = localSearchProvider;
