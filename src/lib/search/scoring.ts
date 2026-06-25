/**
 * Pure scoring helpers. No data imports — these can be reused by a future
 * remote search backend that needs to rerank locally.
 */

export const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "or",
  "of",
  "the",
  "to",
  "for",
  "in",
  "on",
  "with",
  "is",
  "it",
  "this",
  "that",
  "by",
  "at",
  "as",
  "be",
  "are",
  "was",
  "were",
]);

/** Lowercase, trim, and split a query into meaningful tokens. */
export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{Letter}\p{Number}\s'-]/gu, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

/** Normalize a single string for comparison (lowercased, no diacritics). */
export function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Score how strongly `tokens` match a single field value. The higher the
 * weight, the more important that field. Returns 0 when there's no overlap.
 *
 * Scoring rules (per field, per token):
 *   - exact equality     → 4 × weight
 *   - starts-with        → 2 × weight
 *   - whole-word match   → 1.5 × weight
 *   - substring          → 1 × weight
 */
export function scoreField(tokens: string[], value: string | undefined, weight: number): number {
  if (!value) return 0;
  return scorePreparedField(tokens, norm(value), weight);
}

export function scorePreparedField(
  tokens: string[],
  normalizedValue: string | undefined,
  weight: number,
): number {
  if (!normalizedValue) return 0;
  const v = normalizedValue;
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (v === t) score += 4 * weight;
    else if (v.startsWith(t)) score += 2 * weight;
    else if (new RegExp(`\\b${escapeRegex(t)}\\b`).test(v)) score += 1.5 * weight;
    else if (v.includes(t)) score += 1 * weight;
  }
  return score;
}

/** Score across an array of strings (e.g. tags, roles). Best per-item wins. */
export function scoreList(tokens: string[], values: string[] | undefined, weight: number): number {
  if (!values || values.length === 0) return 0;
  let score = 0;
  for (const v of values) score += scoreField(tokens, v, weight);
  return score;
}

export function scorePreparedList(
  tokens: string[],
  normalizedValues: string[] | undefined,
  weight: number,
): number {
  if (!normalizedValues || normalizedValues.length === 0) return 0;
  let score = 0;
  for (const v of normalizedValues) score += scorePreparedField(tokens, v, weight);
  return score;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Bonus when the full query exactly matches the entity name.
 * Guarantees "steve" → Steve Jobs ranks first.
 */
export function exactNameBonus(query: string, name: string): number {
  const q = norm(query.trim());
  const n = norm(name);
  if (!q) return 0;
  if (n === q) return 5000;
  if (n.startsWith(`${q} `) || n.startsWith(q)) return 1500;
  return 0;
}
