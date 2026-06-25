import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useStories } from "@/lib/stories/store";
import { pickRotation } from "@/lib/stories/quality";

export function CommunityStories() {
  const all = useStories();
  // Seed=0 on SSR for a stable initial render; randomize on mount so each
  // visit surfaces a different mix.
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 2_000_000_000) + 1);
  }, []);
  const recent = useMemo(() => pickRotation(all, 3, seed), [all, seed]);

  return (
    <section id="stories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-clay">
              <BookOpen className="h-3.5 w-3.5" /> Community
            </span>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.05]">
              Stories from the community.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70 text-lg">
            Real journeys, told by the people living them. The messy middle is what other people
            learn from.
          </p>
        </div>

        {recent.length === 0 ? (
          <div className="rounded-[2rem] border border-border bg-card/60 backdrop-blur p-12 text-center">
            <BookOpen className="h-10 w-10 mx-auto text-foreground/40" />
            <h3 className="font-display mt-4 text-2xl text-foreground">
              Stories are being added regularly.
            </h3>
            <p className="mt-2 text-foreground/65 max-w-md mx-auto">
              Check back soon for new community journeys.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((s) => (
              <Link
                key={s.slug}
                to="/stories/$slug"
                params={{ slug: s.slug }}
                aria-label={`Read ${s.title}`}
                className="group block bg-card rounded-[1.75rem] border border-border p-6 lg:p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  <BookOpen className="h-3.5 w-3.5" /> Story
                  {s.country && (
                    <>
                      <span className="text-foreground/30">·</span>
                      <span className="text-foreground/55">{s.country}</span>
                    </>
                  )}
                </div>
                <h3 className="font-display mt-3 text-2xl font-medium text-foreground leading-snug group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
                  {s.title}
                </h3>
                <div className="mt-2 text-sm text-foreground/65">
                  {s.authorName} · {s.role}
                </div>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed line-clamp-4">
                  {s.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                  Read story <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-3">
          <Link
            to="/stories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 hover:gap-2.5 transition-all"
          >
            Browse all stories <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-foreground/50">
            Story submissions will open when accounts launch.
          </p>
        </div>
      </div>
    </section>
  );
}
