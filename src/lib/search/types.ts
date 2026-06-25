import type {
  Person,
  Insight,
  Failure,
  TimelineEntry,
  Video,
  Collection,
  Story,
} from "@/content/schemas";

/**
 * Kind of entity returned from a search.
 * Add a new kind when the index grows (e.g. "book", "decision").
 */
export type ResultKind = "person" | "video" | "lesson" | "failure" | "collection" | "story";

/** A single ranked search result. */
export type SearchResult<T = unknown> = {
  /** Stable id for React keys and analytics. */
  id: string;
  kind: ResultKind;
  /** Relevance score — higher is better. Implementation-specific scale. */
  score: number;
  /** Which fields produced the match (for debugging and analytics). */
  matches: string[];
  /** Human-readable title shown in the result row. */
  title: string;
  /** Short context line shown under the title. */
  snippet: string;
  /** Destination route to open when the result is clicked. */
  href: string;
  /** Raw underlying item — useful for future renderers. */
  item: T;
};

export type PersonResult = SearchResult<Person>;
export type VideoResult = SearchResult<Video>;
export type LessonResult = SearchResult<{
  person: Person;
  source: "insight" | "timeline";
  lesson: string;
  audience?: string;
  takeaway?: string;
  origin?: Insight | TimelineEntry;
}>;
export type FailureResult = SearchResult<{ person: Person; failure: Failure }>;
export type CollectionResult = SearchResult<{ collection: Collection }>;
export type StoryResult = SearchResult<Story>;

export type AnyResult =
  | PersonResult
  | VideoResult
  | LessonResult
  | FailureResult
  | CollectionResult
  | StoryResult;

/**
 * Contract for a search backend. The current implementation is a local
 * structured-data scorer; a future implementation can swap to Supabase
 * full-text or a vector index without changing the UI.
 */
export interface SearchProvider {
  searchPeople(query: string, limit?: number): PersonResult[];
  searchVideos(query: string, limit?: number): VideoResult[];
  searchLessons(query: string, limit?: number): LessonResult[];
  searchFailures(query: string, limit?: number): FailureResult[];
  searchCollections(query: string, limit?: number): CollectionResult[];
  searchStories(query: string, limit?: number): StoryResult[];
  searchAll(query: string, limit?: number): AnyResult[];
}
