import type { Story } from "@/content/schemas";

/** Common junk/placeholder tokens that should never appear publicly. */
const JUNK_PATTERNS: RegExp[] = [
  /\blorem\s+ipsum\b/i,
  /^(test|testing|tests?\d*)$/i,
  /^(sample|draft|dummy|placeholder|todo|tbd|wip|qa|demo)\b/i,
  /^(foo|bar|baz|qux)\b/i,
  /^(asd[asd]*|sda[sda]*|qwe[qwer]*|wer[twer]*|zxc[zxc]*|jkl[jkl]*|hjk[hjk]*)$/i,
];

function looksLikeKeyboardSmash(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return true;
  // Single token, no spaces.
  if (!/\s/.test(t)) {
    if (t.length < 6) return true;
    const vowels = (t.match(/[aeiou]/g) || []).length;
    if (vowels / t.length < 0.18) return true;
    // 3+ same char in a row
    if (/(.)\1{2,}/.test(t)) return true;
  }
  // All-caps yelling short tokens like "ASDASDA"
  return false;
}

function isFieldJunk(value: string | undefined): boolean {
  if (!value) return false;
  const v = value.trim();
  if (!v) return false;
  for (const re of JUNK_PATTERNS) if (re.test(v)) return true;
  return looksLikeKeyboardSmash(v);
}

/** Returns true if the story looks like test/placeholder content. */
export function isLikelyJunk(story: Story): boolean {
  if (isFieldJunk(story.title)) return true;
  if (isFieldJunk(story.authorName)) return true;
  // Summary too short or junky
  const summary = story.summary?.trim() ?? "";
  if (summary.length < 40) return true;
  if (/\blorem\s+ipsum\b/i.test(summary)) return true;
  if (/^(asd|test|sample|dummy|placeholder|qwe|zxc)/i.test(summary)) return true;
  // Needs at least some narrative — milestones or failures
  const hasNarrative =
    (story.milestones?.some((m) => (m.story ?? "").trim().length > 40) ?? false) ||
    (story.failures?.some((f) => (f.lesson ?? "").trim().length > 20) ?? false);
  if (!hasNarrative) return true;
  return false;
}

/** Filters out junk/placeholder stories. */
export function filterPublishable(stories: Story[]): Story[] {
  return stories.filter((s) => !isLikelyJunk(s));
}

/* ---------------- Rotation ---------------- */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Pick `count` stories with diversity across country/role/theme tags.
 * `seed` lets callers vary between page loads (random) or stay stable (SSR).
 */
export function pickRotation(stories: Story[], count: number, seed: number): Story[] {
  const clean = filterPublishable(stories);
  if (clean.length <= count) return clean;
  const rand = mulberry32(seed || 1);
  const shuffled = shuffle(clean, rand);

  const picked: Story[] = [];
  const seenCountry = new Set<string>();
  const seenRole = new Set<string>();
  const seenTag = new Set<string>();

  // Diversity pass
  for (const s of shuffled) {
    if (picked.length >= count) break;
    const country = (s.country ?? "").toLowerCase();
    const role = (s.role ?? "").toLowerCase();
    const firstTag = (s.tags?.[0] ?? "").toLowerCase();
    if (country && seenCountry.has(country)) continue;
    if (role && seenRole.has(role)) continue;
    if (firstTag && seenTag.has(firstTag)) continue;
    picked.push(s);
    if (country) seenCountry.add(country);
    if (role) seenRole.add(role);
    if (firstTag) seenTag.add(firstTag);
  }
  // Fill remaining slots ignoring diversity
  if (picked.length < count) {
    for (const s of shuffled) {
      if (picked.length >= count) break;
      if (!picked.includes(s)) picked.push(s);
    }
  }
  return picked;
}
