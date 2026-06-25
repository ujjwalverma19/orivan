import { getAllPeople } from "@/content/registry";
import type { Person } from "@/content/schemas";
import type { Path, PathStep } from "@/data/paths";

/**
 * Audience → matcher tags/roles for auto-generating a Path when no curated
 * one exists. Keeps homepage chips and paths filters from ever dead-ending.
 */
const AUDIENCE_MATCHERS: Record<
  string,
  { tags: string[]; roles: string[]; industry?: string[]; accent: Path["accent"] }
> = {
  athletes: {
    tags: ["sports", "athlete", "tennis", "cricket", "football", "basketball", "discipline"],
    roles: ["athlete", "player"],
    accent: "sage",
  },
  creators: {
    tags: ["writing", "storytelling", "literature", "film", "animation", "design"],
    roles: [
      "writer",
      "author",
      "filmmaker",
      "director",
      "designer",
      "creator",
      "storyteller",
      "artist",
    ],
    accent: "butter",
  },
  "product thinkers": {
    tags: ["product", "design", "ux", "taste"],
    roles: ["product manager", "product visionary", "designer", "vp of advanced technology"],
    accent: "clay",
  },
  "product managers": {
    tags: ["product", "leadership"],
    roles: ["product manager", "product visionary"],
    accent: "butter",
  },
  founders: {
    tags: ["founder", "startup", "entrepreneurship"],
    roles: ["founder", "co-founder", "ceo", "entrepreneur"],
    accent: "sage",
  },
  "startup founders": {
    tags: ["founder", "startup"],
    roles: ["founder", "co-founder"],
    accent: "sage",
  },
  designers: {
    tags: ["design", "ux", "industrial-design"],
    roles: ["designer"],
    accent: "clay",
  },
  investors: {
    tags: ["investing", "capital", "value-investing"],
    roles: ["investor"],
    accent: "sage",
  },
  scientists: {
    tags: ["science", "research", "physics", "biology", "ai", "cognitive-science"],
    roles: ["scientist", "researcher", "physicist", "biologist"],
    accent: "clay",
  },
  engineers: {
    tags: ["engineering", "first-principles", "systems"],
    roles: ["engineer"],
    accent: "clay",
  },
};

const portraitMap = import.meta.glob<string>("/src/assets/journey-*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function portraitFor(slug: string): string | undefined {
  return portraitMap[`/src/assets/journey-${slug}.webp`];
}

function audienceKey(tag: string): string {
  return tag.trim().toLowerCase();
}

function matchPeople(matcher: { tags: string[]; roles: string[] }): Person[] {
  const tagSet = new Set(matcher.tags.map((t) => t.toLowerCase()));
  const roleNeedles = matcher.roles.map((r) => r.toLowerCase());
  const score = (p: Person) => {
    const tags = (p.tags ?? []).map((t) => t.toLowerCase());
    const roles = (p.roles ?? []).map((r) => r.toLowerCase());
    let s = 0;
    for (const t of tags) if (tagSet.has(t)) s += 2;
    for (const r of roles) if (roleNeedles.some((n) => r.includes(n))) s += 3;
    return s;
  };
  return getAllPeople()
    .map((p) => ({ p, s: score(p) }))
    .filter((x) => x.s > 0)
    .sort(
      (a, b) => b.s - a.s || parseInt(a.p.birthYear ?? "9999") - parseInt(b.p.birthYear ?? "9999"),
    )
    .map((x) => x.p);
}

/** True when we have at least 3 people to build a meaningful fallback path. */
export function hasFallbackForAudience(audienceTag: string): boolean {
  const matcher = AUDIENCE_MATCHERS[audienceKey(audienceTag)];
  if (!matcher) return false;
  return matchPeople(matcher).length >= 3;
}

/** Build a synthetic Path on the fly from existing journeys. */
export function buildFallbackPath(audienceTag: string): Path | undefined {
  const key = audienceKey(audienceTag);
  const matcher = AUDIENCE_MATCHERS[key];
  if (!matcher) return undefined;
  const people = matchPeople(matcher).slice(0, 4);
  if (people.length < 3) return undefined;

  const steps: PathStep[] = people.map((p, i) => ({
    order: i + 1,
    personSlug: p.slug,
    personName: p.name,
    portrait: portraitFor(p.slug),
    focusSkill: p.roles?.[0] ?? p.industry ?? "Lesson",
    whyThisStep: p.summary,
    duration: `${Math.max(8, Math.round((p.timeline?.length ?? 6) * 1.2))} min read`,
  }));

  const titleAudience = audienceTag
    .split(/\s+/)
    .map((w) => w[0]?.toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  return {
    slug: `discover-${key.replace(/\s+/g, "-")}`,
    title: `Study ${titleAudience}`,
    blurb: `A curated route through ${titleAudience.toLowerCase()} on Orivan — read in the order their lessons compound.`,
    audience: titleAudience,
    audienceTag: titleAudience,
    totalSteps: steps.length,
    estimatedTime: `~${steps.length * 25} min`,
    accent: matcher.accent,
    steps,
  };
}

/** Audiences for which a fallback path can always be built. */
export function knownFallbackAudiences(): string[] {
  return Object.keys(AUDIENCE_MATCHERS).filter(hasFallbackForAudience);
}
