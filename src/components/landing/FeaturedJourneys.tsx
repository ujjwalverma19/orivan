import { useEffect, useMemo, useState } from "react";
import { getAllPeople } from "@/content/registry";
import { JourneyCard } from "@/components/JourneyCard";
import { shuffle } from "@/lib/discovery/rotation";
import type { Person } from "@/content/schemas";

/**
 * Pick 4 diverse people, preferring different industries / eras.
 * Weighted ~50% featured, ~50% non-featured when both pools are available.
 */
function pickDiverse(all: Person[], seed: number, n = 4): Person[] {
  const featured = shuffle(
    all.filter((p) => p.featured),
    seed,
  );
  const rest = shuffle(
    all.filter((p) => !p.featured),
    seed ^ 0x9e37,
  );

  // Interleave: featured, rest, featured, rest...
  const interleaved: Person[] = [];
  const max = Math.max(featured.length, rest.length);
  for (let i = 0; i < max; i++) {
    if (featured[i]) interleaved.push(featured[i]);
    if (rest[i]) interleaved.push(rest[i]);
  }

  const picked: Person[] = [];
  const usedIndustries = new Set<string>();
  const usedEras = new Set<string>();

  // Pass 1: enforce industry + era diversity.
  for (const p of interleaved) {
    if (picked.length >= n) break;
    if (usedIndustries.has(p.industry)) continue;
    if (p.era && usedEras.has(p.era)) continue;
    picked.push(p);
    usedIndustries.add(p.industry);
    if (p.era) usedEras.add(p.era);
  }

  // Pass 2: relax era constraint.
  if (picked.length < n) {
    for (const p of interleaved) {
      if (picked.length >= n) break;
      if (picked.includes(p)) continue;
      if (usedIndustries.has(p.industry)) continue;
      picked.push(p);
      usedIndustries.add(p.industry);
    }
  }

  // Pass 3: fill remaining slots from anyone left.
  if (picked.length < n) {
    for (const p of interleaved) {
      if (picked.length >= n) break;
      if (picked.includes(p)) continue;
      picked.push(p);
    }
  }

  return picked.slice(0, n);
}

export function FeaturedJourneys() {
  const all = useMemo(() => getAllPeople(), []);
  // Start with a deterministic seed for SSR/first hydration, then randomize on mount.
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 0x7fffffff) || 1);
  }, []);

  const featured = useMemo(() => pickDiverse(all, seed, 4), [all, seed]);

  return (
    <section id="journeys" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-clay">
              Featured
            </span>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.05]">
              Journeys worth studying.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 text-lg">
            Full arcs — early doubts, the pivot, the boring middle, and the breakthrough. Not just
            the highlight reel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <JourneyCard key={p.slug} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
