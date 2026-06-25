import {
  PersonSchema,
  VideoSchema,
  CollectionSchema,
  isPlayableVideo,
  type Person,
  type Video,
  type Collection,
} from "@/content/schemas";

/* ------------------------------------------------------------------ */
/* Auto-discovery via Vite's import.meta.glob                          */
/* ------------------------------------------------------------------ */

const personModules = import.meta.glob<unknown>("./people/*.ts", {
  eager: true,
  import: "default",
});

const videoModules = import.meta.glob<unknown>("./videos/*.ts", {
  eager: true,
  import: "default",
});

const collectionModules = import.meta.glob<unknown>("./collections/*.ts", {
  eager: true,
  import: "default",
});

const isUnderscored = (path: string) => /\/_[^/]+\.ts$/.test(path);

const IS_DEV = Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);

const failHard = (msg: string) => {
  if (IS_DEV) throw new Error(msg);

  console.error(msg);
};

/* ------------------------------------------------------------------ */
/* Load + validate people                                              */
/* ------------------------------------------------------------------ */

function loadPeople(): Person[] {
  const all: Person[] = [];
  const seen = new Map<string, string>();

  for (const [path, mod] of Object.entries(personModules)) {
    if (isUnderscored(path)) continue;
    const parsed = PersonSchema.safeParse(mod);
    if (!parsed.success) {
      console.error(`[content] ${path}: ${parsed.error.message}`);
      continue;
    }
    const person = parsed.data;
    const prev = seen.get(person.slug);
    if (prev) {
      failHard(`[content] Duplicate person slug "${person.slug}" in ${path} and ${prev}`);
      continue;
    }
    seen.set(person.slug, path);
    all.push(person);
  }

  return all.sort((a, b) => a.slug.localeCompare(b.slug));
}

function loadVideos(): Video[] {
  const all: Video[] = [];
  const seen = new Map<string, string>();

  for (const [path, mod] of Object.entries(videoModules)) {
    if (isUnderscored(path)) continue;
    if (!Array.isArray(mod)) {
      console.error(`[content] ${path}: default export must be a Video[]`);
      continue;
    }
    for (const raw of mod) {
      const parsed = VideoSchema.safeParse(raw);
      if (!parsed.success) {
        console.error(`[content] ${path}: ${parsed.error.message}`);
        continue;
      }
      const video = parsed.data;
      const prev = seen.get(video.id);
      if (prev) {
        failHard(`[content] Duplicate video id "${video.id}" in ${path} and ${prev}`);
        continue;
      }
      seen.set(video.id, path);
      all.push(video);
    }
  }

  return all.sort((a, b) => a.id.localeCompare(b.id));
}

function loadCollections(): Collection[] {
  const all: Collection[] = [];
  const seen = new Map<string, string>();

  for (const [path, mod] of Object.entries(collectionModules)) {
    if (isUnderscored(path)) continue;
    const parsed = CollectionSchema.safeParse(mod);
    if (!parsed.success) {
      console.error(`[content] ${path}: ${parsed.error.message}`);
      continue;
    }
    const collection = parsed.data;
    const prev = seen.get(collection.slug);
    if (prev) {
      failHard(`[content] Duplicate collection slug "${collection.slug}" in ${path} and ${prev}`);
      continue;
    }
    seen.set(collection.slug, path);
    all.push(collection);
  }

  return all.sort((a, b) => a.slug.localeCompare(b.slug));
}

/* ------------------------------------------------------------------ */
/* Memoized indexes                                                    */
/* ------------------------------------------------------------------ */

const allPeopleRaw: Person[] = loadPeople();
const allVideos: Video[] = loadVideos();
const allCollections: Collection[] = loadCollections();

const allPeoplePublished: Person[] = allPeopleRaw.filter((p) => p.status === "published");

const peopleBySlug = new Map<string, Person>(allPeopleRaw.map((p) => [p.slug, p]));
const videosById = new Map<string, Video>(allVideos.map((v) => [v.id, v]));
const collectionsBySlug = new Map<string, Collection>(allCollections.map((c) => [c.slug, c]));

const videosByPersonSlug = new Map<string, Video[]>();
for (const v of allVideos) {
  const list = videosByPersonSlug.get(v.personSlug) ?? [];
  list.push(v);
  videosByPersonSlug.set(v.personSlug, list);
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/** All published people. Drafts and review-state submissions are excluded. */
export function getAllPeople(): Person[] {
  return allPeoplePublished;
}

/** Every person including drafts and review state — for future admin tooling. */
export function getAllPeopleRaw(): Person[] {
  return allPeopleRaw;
}

export function getPersonBySlug(slug: string): Person | undefined {
  const person = peopleBySlug.get(slug);
  if (!person) return undefined;
  return person.status === "published" ? person : undefined;
}

export function getAllVideos(): Video[] {
  return allVideos;
}

export function getVideoById(id: string): Video | undefined {
  return videosById.get(id);
}

export function getVideosForPerson(slug: string): Video[] {
  return videosByPersonSlug.get(slug) ?? [];
}

export function getPlayableVideosForPerson(slug: string): Video[] {
  return getVideosForPerson(slug).filter(isPlayableVideo);
}

export function getVideosByIds(ids: string[]): Video[] {
  return ids.map((id) => videosById.get(id)).filter(isPlayableVideo);
}

/* ----- Collections ----- */

export function getAllCollections(): Collection[] {
  return allCollections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collectionsBySlug.get(slug);
}

/** Resolve a collection's members to published Person objects, preserving order. */
export function getCollectionMembers(slug: string): Person[] {
  const c = collectionsBySlug.get(slug);
  if (!c) return [];
  return c.personSlugs
    .map((s) => peopleBySlug.get(s))
    .filter((p): p is Person => Boolean(p) && p!.status === "published");
}

/** Collections that include this person (curated `personSlugs` only). */
export function getCollectionsForPerson(personSlug: string): Collection[] {
  return allCollections.filter((c) => c.personSlugs.includes(personSlug));
}

/* ------------------------------------------------------------------ */
/* Future-ready helpers (no UI consumers yet)                          */
/* ------------------------------------------------------------------ */

/** Hydrate a list of slugs to Person objects, preserving order. */
export function compareBySlugs(slugs: string[]): Person[] {
  return slugs
    .map((s) => peopleBySlug.get(s))
    .filter((p): p is Person => Boolean(p) && p!.status === "published");
}

/** Structured fields the future Journey DNA feature will read. */
export function getDnaInputs(slug: string) {
  const person = getPersonBySlug(slug);
  if (!person) return undefined;
  return {
    slug: person.slug,
    tags: person.tags,
    roles: person.roles,
    industry: person.industry,
    era: person.era,
    skills: person.skills,
    decisions: person.decisions,
    insights: person.insights,
    failures: person.failures,
  };
}

/* ------------------------------------------------------------------ */
/* Integrity validation (dev-only, runs once at boot)                  */
/* ------------------------------------------------------------------ */

// Loaded lazily to avoid a circular import at module init.
void import("./validation").then((m) =>
  m.runIntegrityChecks({
    peopleCount: Object.keys(personModules).filter((p) => !isUnderscored(p)).length,
    videoCount: Object.values(videoModules).reduce<number>(
      (n, mod) => n + (Array.isArray(mod) ? mod.length : 0),
      0,
    ),
    collectionCount: Object.keys(collectionModules).filter((p) => !isUnderscored(p)).length,
    allPeopleRaw,
    allVideos,
    allCollections,
  }),
);
