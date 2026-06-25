/**
 * Deterministic random helpers for homepage/journey "feels alive" rotation.
 *
 * Always pass a seed produced once per page load (e.g. via
 * `useState(() => Math.random())`) so SSR and hydration agree.
 */

/** Mulberry32 PRNG — small, fast, deterministic. */
function mulberry32(seed: number): () => number {
  let a = (seed * 0x9e3779b9) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle returning a new array. */
export function shuffle<T>(list: readonly T[], seed: number): T[] {
  const arr = list.slice();
  const rand = mulberry32(seed || 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Pick up to `n` unique elements using the given seed. */
export function pickRandom<T>(list: readonly T[], n: number, seed: number): T[] {
  if (list.length === 0 || n <= 0) return [];
  return shuffle(list, seed).slice(0, Math.min(n, list.length));
}

/** Pick one element, or undefined. */
export function pickOne<T>(list: readonly T[], seed: number): T | undefined {
  return pickRandom(list, 1, seed)[0];
}
