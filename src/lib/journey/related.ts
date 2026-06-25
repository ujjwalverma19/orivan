import { getAllPeople, getCollectionsForPerson } from "@/content/registry";
import type { Person } from "@/content/schemas";

/**
 * Score related people for a given person using simple tag/role/industry
 * overlap plus shared collection membership. No hardcoded relationships.
 */
function scorePair(target: Person, candidate: Person): number {
  if (candidate.slug === target.slug) return -Infinity;
  let score = 0;

  const targetTags = new Set(target.tags ?? []);
  for (const t of candidate.tags ?? []) if (targetTags.has(t)) score += 3;

  const targetRoles = new Set((target.roles ?? []).map((r) => r.toLowerCase()));
  for (const r of candidate.roles ?? []) if (targetRoles.has(r.toLowerCase())) score += 2;

  if (
    target.industry &&
    candidate.industry &&
    target.industry.toLowerCase() === candidate.industry.toLowerCase()
  ) {
    score += 2;
  }

  const targetCols = new Set(getCollectionsForPerson(target.slug).map((c) => c.slug));
  for (const c of getCollectionsForPerson(candidate.slug)) if (targetCols.has(c.slug)) score += 1;

  return score;
}

function eraDistance(a: Person, b: Person): number {
  const ax = parseInt(a.birthYear ?? "", 10);
  const bx = parseInt(b.birthYear ?? "", 10);
  if (Number.isNaN(ax) || Number.isNaN(bx)) return 9999;
  return Math.abs(ax - bx);
}

/** Top N related people for `slug`, ranked by overlap score. */
export function getRelatedPeople(slug: string, n = 4): Person[] {
  const all = getAllPeople();
  const target = all.find((p) => p.slug === slug);
  if (!target) return [];
  const scored = all
    .map((p) => ({ p, s: scorePair(target, p), d: eraDistance(target, p) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.d - b.d);
  return scored.slice(0, n).map((x) => x.p);
}

/**
 * One person from a clearly different category — different industry, minimal
 * tag overlap. Falls back gradually if nothing matches.
 */
export function getDiscoveryPick(
  slug: string,
  exclude: readonly string[],
  seed: number,
): Person | undefined {
  const all = getAllPeople();
  const target = all.find((p) => p.slug === slug);
  if (!target) return undefined;
  const targetIndustry = target.industry?.toLowerCase();
  const targetTags = new Set(target.tags ?? []);
  const excludeSet = new Set([slug, ...exclude]);

  const sharedTagCount = (p: Person) =>
    (p.tags ?? []).reduce((n, t) => n + (targetTags.has(t) ? 1 : 0), 0);

  // Strict pool: different industry, ≤1 shared tag.
  const strict = all.filter(
    (p) =>
      !excludeSet.has(p.slug) &&
      p.industry?.toLowerCase() !== targetIndustry &&
      sharedTagCount(p) <= 1,
  );
  // Prefer featured.
  const featured = strict.filter((p) => p.featured);
  const pool = featured.length > 0 ? featured : strict;
  if (pool.length > 0) {
    return pool[Math.floor(deterministic(seed) * pool.length)];
  }

  // Loose fallback: anyone not excluded.
  const loose = all.filter((p) => !excludeSet.has(p.slug));
  if (loose.length === 0) return undefined;
  return loose[Math.floor(deterministic(seed + 1) * loose.length)];
}

function deterministic(seed: number): number {
  let a = (seed * 0x9e3779b9) >>> 0;
  a = (a + 0x6d2b79f5) >>> 0;
  let t = a;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
