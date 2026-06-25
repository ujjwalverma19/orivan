import { useSyncExternalStore } from "react";
import { StorySchema, type Story, type StoryInput } from "@/content/schemas";

/* ------------------------------------------------------------------ */
/* Seed stories (curated, ship with the build)                         */
/* ------------------------------------------------------------------ */

const seedModules = import.meta.glob<unknown>("../../content/stories/*.ts", {
  eager: true,
  import: "default",
});

const isUnderscored = (path: string) => /\/_[^/]+\.ts$/.test(path);

function loadSeedStories(): Story[] {
  const all: Story[] = [];
  const seen = new Set<string>();
  for (const [path, mod] of Object.entries(seedModules)) {
    if (isUnderscored(path)) continue;
    const parsed = StorySchema.safeParse(mod);
    if (!parsed.success) {
      console.error(`[stories] ${path}: ${parsed.error.message}`);
      continue;
    }
    const story = parsed.data;
    if (story.status !== "published") continue;
    if (seen.has(story.slug)) {
      console.error(`[stories] Duplicate seed slug "${story.slug}" in ${path}`);
      continue;
    }
    seen.add(story.slug);
    all.push(story);
  }
  return all;
}

const SEED_STORIES: Story[] = loadSeedStories();

/* ------------------------------------------------------------------ */
/* User-submitted stories (localStorage)                               */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "orivan:stories:v1";

const listeners = new Set<() => void>();
let userStoriesCache: Story[] | null = null;

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readUserStoriesFromStorage(): Story[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out: Story[] = [];
    for (const candidate of parsed) {
      const safe = StorySchema.safeParse(candidate);
      if (safe.success) out.push(safe.data);
    }
    return out;
  } catch (error) {
    console.error("[stories] Failed to read localStorage", error);
    return [];
  }
}

function writeUserStoriesToStorage(stories: Story[]) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
  } catch (error) {
    console.error("[stories] Failed to write localStorage", error);
  }
}

function getUserStories(): Story[] {
  if (userStoriesCache === null) {
    userStoriesCache = readUserStoriesFromStorage();
  }
  return userStoriesCache;
}

// Cached merged snapshot — useSyncExternalStore requires referential
// stability between calls when nothing changed, or React loops forever.
let allStoriesSnapshot: Story[] | null = null;
function invalidateSnapshot() {
  allStoriesSnapshot = null;
}

function notify() {
  invalidateSnapshot();
  for (const l of listeners) l();
}

// Cross-tab sync
if (isBrowser()) {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      userStoriesCache = readUserStoriesFromStorage();
      notify();
    }
  });
}

/* ------------------------------------------------------------------ */
/* Slug helpers                                                        */
/* ------------------------------------------------------------------ */

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function uniqueSlug(base: string): string {
  const taken = new Set<string>([
    ...SEED_STORIES.map((s) => s.slug),
    ...getUserStories().map((s) => s.slug),
  ]);
  const root = slugify(base) || "story";
  if (!taken.has(root)) return root;
  let i = 2;
  while (taken.has(`${root}-${i}`)) i++;
  return `${root}-${i}`;
}

/* ------------------------------------------------------------------ */
/* Public read API                                                     */
/* ------------------------------------------------------------------ */

/** Returns seed + (browser only) user-submitted stories, newest first. Memoized between mutations. */
export function getAllStories(): Story[] {
  if (allStoriesSnapshot) return allStoriesSnapshot;
  const merged = [...SEED_STORIES, ...getUserStories()];
  merged.sort((a, b) => {
    const at = Date.parse(a.createdAt);
    const bt = Date.parse(b.createdAt);
    return (isNaN(bt) ? 0 : bt) - (isNaN(at) ? 0 : at);
  });
  allStoriesSnapshot = merged;
  return merged;
}

export function getStoryBySlug(slug: string): Story | undefined {
  return getAllStories().find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Public write API                                                    */
/* ------------------------------------------------------------------ */

export type CreateStoryInput = Omit<StoryInput, "slug" | "createdAt" | "status"> & {
  slug?: string;
  status?: StoryInput["status"];
};

/** Persist a new story to localStorage and notify subscribers. Returns the saved story. */
export function addStory(input: CreateStoryInput): Story {
  const base: StoryInput = {
    ...input,
    slug: input.slug && input.slug.trim() ? input.slug : uniqueSlug(input.title),
    status: input.status ?? "published",
    createdAt: new Date().toISOString(),
  };
  const parsed = StorySchema.parse(base);
  // Re-uniquify in case caller passed a slug that collides.
  const finalStory: Story = SEED_STORIES.some((s) => s.slug === parsed.slug)
    ? { ...parsed, slug: uniqueSlug(parsed.slug) }
    : parsed;
  const next = [...getUserStories(), finalStory];
  userStoriesCache = next;
  writeUserStoriesToStorage(next);
  notify();
  return finalStory;
}

/* ------------------------------------------------------------------ */
/* React hooks                                                         */
/* ------------------------------------------------------------------ */

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useStories(): Story[] {
  return useSyncExternalStore(
    subscribe,
    () => getAllStories(),
    () => SEED_STORIES,
  );
}

export function useStory(slug: string | undefined): Story | undefined {
  return useSyncExternalStore(
    subscribe,
    () => (slug ? getStoryBySlug(slug) : undefined),
    () => (slug ? SEED_STORIES.find((s) => s.slug === slug) : undefined),
  );
}
