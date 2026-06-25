import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Library, PenSquare, Sparkles } from "lucide-react";
import type { Person } from "@/content/schemas";
import { JourneyCard } from "@/components/JourneyCard";
import { PersonPortrait } from "@/components/PersonPortrait";
import { getCollectionMembers, getCollectionsForPerson } from "@/content/registry";
import { getAllStories } from "@/lib/stories/store";
import { getDiscoveryPick, getRelatedPeople } from "@/lib/journey/related";

export function ContinueExploring({ person }: { person: Person }) {
  // One seed per page load — stable across SSR/hydration, fresh on reload.
  const [seed] = useState(() => Math.floor(Math.random() * 0x7fffffff));

  const related = getRelatedPeople(person.slug, 4);

  const cols = getCollectionsForPerson(person.slug);
  const relatedCol = cols
    .map((c) => {
      const members = getCollectionMembers(c.slug);
      const overlap = members.filter((m) => related.some((r) => r.slug === m.slug)).length;
      return { c, score: overlap, size: members.length };
    })
    .sort((a, b) => b.score - a.score || b.size - a.size)[0]?.c;

  const personTagSet = new Set(
    (person.tags ?? []).concat(person.roles ?? []).map((t) => t.toLowerCase()),
  );
  const story = getAllStories().find((s) =>
    (s.tags ?? []).some((t) => personTagSet.has(t.toLowerCase())),
  );

  const pick = getDiscoveryPick(
    person.slug,
    related.map((r) => r.slug),
    seed,
  );

  return (
    <section id="continue-exploring" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-clay">
            <Compass className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Continue Exploring
            </span>
          </div>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-medium leading-[1.05] text-foreground">
            Don't stop here.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            Adjacent journeys, a collection that frames the craft, and one pick from a different
            world.
          </p>
        </div>

        {/* Study Next */}
        {related.length > 0 && (
          <div className="mb-14">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl text-foreground">Study Next</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <JourneyCard key={p.slug} person={p} />
              ))}
            </div>
          </div>
        )}

        {/* Side rail: collection + story + discovery */}
        <div className="grid lg:grid-cols-3 gap-6">
          {relatedCol && (
            <Link
              to="/collections/$slug"
              params={{ slug: relatedCol.slug }}
              className="group block rounded-[1.5rem] border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="grid grid-cols-2 grid-rows-2 aspect-[16/10] gap-px bg-border overflow-hidden">
                {getCollectionMembers(relatedCol.slug)
                  .slice(0, 4)
                  .map((m) => (
                    <div key={m.slug} className="relative overflow-hidden bg-secondary">
                      <PersonPortrait person={m} size="md" />
                    </div>
                  ))}
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  <Library className="h-3.5 w-3.5" /> Related Collection
                </div>
                <h4 className="font-display mt-2 text-xl text-foreground">{relatedCol.title}</h4>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                  {relatedCol.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                  Open Collection <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )}

          {story && (
            <Link
              to="/stories/$slug"
              params={{ slug: story.slug }}
              className="group block rounded-[1.5rem] border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                <PenSquare className="h-3.5 w-3.5" /> Related Story
              </div>
              <h4 className="font-display mt-3 text-xl text-foreground leading-snug">
                {story.title}
              </h4>
              <div className="mt-1 text-sm text-foreground/65">
                {story.authorName} · {story.role}
              </div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed line-clamp-5">
                {story.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                Read Story <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          )}

          {pick && (
            <Link
              to="/journey/$slug"
              params={{ slug: pick.slug }}
              className="group block rounded-[1.5rem] border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <PersonPortrait person={pick} size="lg" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  <Sparkles className="h-3.5 w-3.5" /> Random Discovery
                </div>
                <h4 className="font-display mt-2 text-xl text-foreground">{pick.name}</h4>
                <p className="mt-1 text-sm text-foreground/65">{pick.title}</p>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed line-clamp-3">
                  {pick.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                  Open Journey <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
