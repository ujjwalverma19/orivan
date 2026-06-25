import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Library } from "lucide-react";
import { getAllCollections, getCollectionMembers } from "@/content/registry";
import { PersonPortrait } from "@/components/PersonPortrait";
import { pickRandom } from "@/lib/discovery/rotation";

export function ExploreCollections() {
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 0x7fffffff) || 1);
  }, []);

  const featured = useMemo(
    () =>
      getAllCollections()
        .filter((c) => c.featured)
        .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
        .slice(0, 6),
    [],
  );

  if (featured.length === 0) return null;

  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-clay">
              <Library className="h-3.5 w-3.5" /> Collections
            </span>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.05]">
              Explore by collection.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 text-lg">
            Curated groups of journeys. Study a mindset, not just a name.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c, idx) => {
            const members = getCollectionMembers(c.slug);
            // Rotating cover faces — 4 random members per render.
            const stack = pickRandom(members, 4, seed + idx);
            return (
              <Link
                key={c.slug}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                aria-label={`Open the ${c.title} collection`}
                className="group block bg-card rounded-[1.75rem] border border-border overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-px bg-border">
                    {stack.length > 0 ? (
                      stack.map((p) => (
                        <div key={p.slug} className="relative overflow-hidden bg-secondary">
                          <PersonPortrait
                            person={p}
                            size="md"
                            sizes="(min-width: 1024px) 16vw, 50vw"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 row-span-2 grid place-items-center bg-cream/60">
                        <Library className="h-10 w-10 text-foreground/30" />
                      </div>
                    )}
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-card/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/75 border border-border z-10">
                    Collection
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-foreground group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                    Open Collection
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 hover:gap-2.5 transition-all"
          >
            Browse all collections
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
