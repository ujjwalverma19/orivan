import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { useStories } from "@/lib/stories/store";
import { filterPublishable } from "@/lib/stories/quality";

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

function shuffleOnce<T>(arr: T[], seed: number): T[] {
  if (!seed) return arr;
  const out = arr.slice();
  const rand = mulberry32(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories from the community — Orivan" },
      {
        name: "description",
        content:
          "Real journeys submitted by the Orivan community. Pivots, layoffs, comebacks, quiet wins.",
      },
      { property: "og:title", content: "Stories from the community — Orivan" },
      {
        property: "og:description",
        content: "Real journeys, told by the people living them.",
      },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  const all = filterPublishable(useStories());
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 2_000_000_000) + 1);
  }, []);
  const stories = useMemo(() => shuffleOnce(all, seed), [all, seed]);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-clay">
                <BookOpen className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  Community Stories
                </span>
              </div>
              <h1 className="font-display mt-4 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-3xl">
                Stories from the community.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-foreground/70 leading-relaxed">
                Real journeys, told by the people living them. New stories are added regularly.
              </p>
              <p className="mt-3 text-xs text-foreground/50">
                Story submissions will open when accounts launch.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            {stories.length === 0 ? (
              <EmptyStories />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((s) => (
                  <StoryCard key={s.slug} story={s} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function StoryCard({ story }: { story: ReturnType<typeof useStories>[number] }) {
  return (
    <Link
      to="/stories/$slug"
      params={{ slug: story.slug }}
      aria-label={`Read ${story.title}`}
      className="group block bg-card rounded-[1.75rem] border border-border p-6 lg:p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
        <BookOpen className="h-3.5 w-3.5" />
        <span>Story</span>
        {story.country ? (
          <>
            <span className="text-foreground/30">·</span>
            <span className="text-foreground/55">{story.country}</span>
          </>
        ) : null}
      </div>
      <h3 className="font-display mt-3 text-2xl font-medium text-foreground leading-snug group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
        {story.title}
      </h3>
      <div className="mt-2 text-sm text-foreground/65">
        {story.authorName} · {story.role}
      </div>
      <p className="mt-4 text-sm text-foreground/75 leading-relaxed line-clamp-4">
        {story.summary}
      </p>
      {story.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {story.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-cream/70 border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
        Read story <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

function EmptyStories() {
  return (
    <div className="rounded-[2rem] border border-border bg-card/60 backdrop-blur p-12 text-center">
      <BookOpen className="h-10 w-10 mx-auto text-foreground/40" />
      <h2 className="font-display mt-4 text-2xl text-foreground">New stories are on the way.</h2>
      <p className="mt-2 text-foreground/65 max-w-md mx-auto">
        Submissions will open when accounts launch. In the meantime, explore the journeys already
        mapped on Orivan.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
      >
        Explore journeys
      </Link>
    </div>
  );
}
