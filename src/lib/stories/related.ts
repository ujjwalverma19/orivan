import { getAllPeople, getAllCollections } from "@/content/registry";
import type { Person, Collection, Story } from "@/content/schemas";

function norm(s: string | undefined): string {
  return (s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim();
}

function tokens(s: string | undefined): string[] {
  return norm(s)
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function storyHaystack(s: Story): Set<string> {
  const bag = new Set<string>();
  for (const t of s.tags ?? []) tokens(t).forEach((x) => bag.add(x));
  tokens(s.role).forEach((x) => bag.add(x));
  tokens(s.title).forEach((x) => bag.add(x));
  return bag;
}

function overlap(needle: Set<string>, hay: string[]): number {
  let n = 0;
  for (const h of hay) if (needle.has(h)) n += 1;
  return n;
}

export function getRelatedJourneyForStory(story: Story): Person | undefined {
  const needle = storyHaystack(story);
  if (needle.size === 0) return undefined;
  const scored = getAllPeople()
    .map((p) => {
      const hay = [
        ...tokens(p.name),
        ...tokens(p.industry),
        ...(p.tags ?? []).flatMap(tokens),
        ...(p.roles ?? []).flatMap(tokens),
      ];
      return { p, s: overlap(needle, hay) };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored[0]?.p;
}

export function getRelatedCollectionForStory(story: Story): Collection | undefined {
  const needle = storyHaystack(story);
  if (needle.size === 0) return undefined;
  const people = getAllPeople();
  const scored = getAllCollections()
    .map((c) => {
      const text = [...tokens(c.title), ...tokens(c.description)];
      const memberTags = c.personSlugs
        .map((slug) => people.find((p) => p.slug === slug))
        .filter((p): p is Person => Boolean(p))
        .flatMap((p) => [
          ...(p.tags ?? []).flatMap(tokens),
          ...(p.roles ?? []).flatMap(tokens),
          ...tokens(p.industry),
        ]);
      const s = overlap(needle, text) * 2 + overlap(needle, memberTags);
      return { c, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored[0]?.c;
}
