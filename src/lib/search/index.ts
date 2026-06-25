/**
 * Public entry point for search.
 *
 * UI components must import from here only — never reach into ./service
 * or ./scoring directly. That keeps the search backend swappable
 * (Supabase full-text, vector search, AI rerankers) without touching the
 * call sites.
 */
export { searchProvider } from "./service";
export {
  searchAll,
  searchPeople,
  searchVideos,
  searchLessons,
  searchFailures,
  searchCollections,
  searchStories,
} from "./service";
export {
  getTrendingQueries,
  getPopularJourneys,
  getPopularLessons,
  getPopularTopics,
} from "./recommendations";
export type {
  AnyResult,
  PersonResult,
  VideoResult,
  LessonResult,
  FailureResult,
  CollectionResult,
  StoryResult,
  SearchProvider,
  SearchResult,
  ResultKind,
} from "./types";
