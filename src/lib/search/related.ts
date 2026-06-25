import { getAllPeople, getAllCollections } from "@/content/registry";
import { getAllStories } from "@/lib/stories/store";
import type { Person, Collection } from "@/content/schemas";
import type { Story } from "@/content/schemas";

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function personHaystack(p: Person): string[] {
  return [p.name, p.industry ?? "", ...(p.tags ?? []), ...(p.roles ?? [])].flatMap(tokenize);
}

function scoreOverlap(needle: string[], haystack: string[]): number {
  if (needle.length === 0 || haystack.length === 0) return 0;
  const h = new Set(haystack);
  let s = 0;
  for (const t of needle) if (h.has(t)) s += 1;
  return s;
}

export function relatedPeopleForQuery(query: string, n = 6): Person[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return getAllPeople()
    .map((p) => ({ p, s: scoreOverlap(tokens, personHaystack(p)) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.p);
}

export function relatedCollectionsForQuery(query: string, n = 6): Collection[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const people = getAllPeople();
  return getAllCollections()
    .map((c) => {
      const text = tokenize(`${c.title} ${c.description}`);
      const memberTagText = c.personSlugs
        .map((slug) => people.find((p) => p.slug === slug))
        .filter(Boolean)
        .flatMap((p) => personHaystack(p as Person));
      const s = scoreOverlap(tokens, text) * 2 + scoreOverlap(tokens, memberTagText);
      return { c, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.c);
}

export function relatedStoriesForQuery(query: string, n = 3): Story[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return getAllStories()
    .map((s) => {
      const text = [...(s.tags ?? []), s.title, s.summary, s.role ?? ""].flatMap(tokenize);
      return { s, sc: scoreOverlap(tokens, text) };
    })
    .filter((x) => x.sc > 0)
    .sort((a, b) => b.sc - a.sc)
    .slice(0, n)
    .map((x) => x.s);
}
