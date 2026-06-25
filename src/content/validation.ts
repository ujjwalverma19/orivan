import type { Person, Video, Collection } from "@/content/schemas";

type Args = {
  peopleCount: number;
  videoCount: number;
  collectionCount: number;
  allPeopleRaw: Person[];
  allVideos: Video[];
  allCollections: Collection[];
};

const IS_DEV = Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);

const report = (msg: string) => {
  if (IS_DEV) throw new Error(msg);

  console.error(msg);
};

export function runIntegrityChecks({
  peopleCount,
  videoCount,
  collectionCount,
  allPeopleRaw,
  allVideos,
  allCollections,
}: Args) {
  // Registry counts match number of loaded modules (catches Zod drops).
  if (allPeopleRaw.length !== peopleCount) {
    report(
      `[content] Person registry count mismatch: loaded ${allPeopleRaw.length}, expected ${peopleCount}. Check earlier Zod errors.`,
    );
  }
  if (allVideos.length !== videoCount) {
    report(
      `[content] Video registry count mismatch: loaded ${allVideos.length}, expected ${videoCount}. Check earlier Zod errors.`,
    );
  }
  if (allCollections.length !== collectionCount) {
    report(
      `[content] Collection registry count mismatch: loaded ${allCollections.length}, expected ${collectionCount}. Check earlier Zod errors.`,
    );
  }

  // Unique person slugs (also enforced at load — defensive).
  const slugs = new Set<string>();
  for (const p of allPeopleRaw) {
    if (slugs.has(p.slug)) report(`[content] Duplicate person slug: ${p.slug}`);
    slugs.add(p.slug);
  }

  // Unique video ids.
  const ids = new Set<string>();
  for (const v of allVideos) {
    if (ids.has(v.id)) report(`[content] Duplicate video id: ${v.id}`);
    ids.add(v.id);
  }

  // Every Video.personSlug resolves.
  for (const v of allVideos) {
    if (!slugs.has(v.personSlug)) {
      report(`[content] Video "${v.id}" references unknown personSlug "${v.personSlug}"`);
    }
  }

  // Every Person.videoIds entry resolves.
  for (const p of allPeopleRaw) {
    for (const id of p.videoIds) {
      if (!ids.has(id)) {
        report(`[content] Person "${p.slug}" references unknown video id "${id}"`);
      }
    }
  }

  // Every Collection.personSlugs entry resolves.
  const collectionSlugs = new Set<string>();
  for (const c of allCollections) {
    if (collectionSlugs.has(c.slug)) {
      report(`[content] Duplicate collection slug: ${c.slug}`);
    }
    collectionSlugs.add(c.slug);
    for (const s of c.personSlugs) {
      if (!slugs.has(s)) {
        report(`[content] Collection "${c.slug}" references unknown personSlug "${s}"`);
      }
    }
  }
}
