import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ArrowLeft, Compass } from "lucide-react";
import { paths } from "@/data/paths";
import { PathCard } from "@/components/paths/PathCard";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { buildFallbackPath } from "@/lib/paths/fallback";

const searchSchema = z.object({
  audience: fallback(z.string().optional(), undefined).default(undefined),
  person: fallback(z.string().optional(), undefined).default(undefined),
});

export const Route = createFileRoute("/paths/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Paths — Orivan" },
      {
        name: "description",
        content: "Curated learning paths. Don't know which journey to study first? Follow one.",
      },
      { property: "og:title", content: "Orivan Paths — Curated learning journeys" },
      {
        property: "og:description",
        content: "Step-by-step roadmaps through the lives that built our world.",
      },
    ],
  }),
  component: PathsIndex,
});

function PathsIndex() {
  const { audience, person } = Route.useSearch();

  const filteredCurated = paths.filter((p) => {
    if (audience && p.audienceTag.toLowerCase() !== audience.toLowerCase()) return false;
    if (person && !p.steps.some((s) => s.personSlug === person)) return false;
    return true;
  });

  // If a filter exists but no curated path matches, try to build a fallback path
  // so no audience chip can dead-end into an empty page.
  const filtered =
    filteredCurated.length === 0 && audience && !person
      ? (() => {
          const fb = buildFallbackPath(audience);
          return fb ? [fb] : [];
        })()
      : filteredCurated;

  const activeFilter = audience ?? (person ? `Featuring ${person}` : null);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="inline-flex items-center gap-2 text-clay">
              <Compass className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Orivan Paths
              </span>
            </div>
            <h1 className="font-display mt-4 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-3xl">
              Don't know where to start? Follow a path.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70 leading-relaxed">
              Curated, step-by-step routes through the people who built the world you want to build.
              One map per craft.
            </p>

            {activeFilter && (
              <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-card border border-border px-4 py-1.5 text-sm">
                <span className="text-foreground/60">Filtered by</span>
                <span className="font-display text-foreground">{activeFilter}</span>
                <Link
                  to="/paths"
                  search={{}}
                  aria-label="Clear filter"
                  className="text-foreground/50 hover:text-foreground"
                >
                  ×
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            {filtered.length === 0 ? (
              <EmptyPaths />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <PathCard key={p.slug} path={p} />
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

function EmptyPaths() {
  return (
    <div className="text-center py-16 rounded-[2rem] border border-border bg-card/60 backdrop-blur">
      <Compass className="h-10 w-10 mx-auto text-foreground/40" />
      <h2 className="font-display mt-4 text-2xl text-foreground">No paths charted here yet.</h2>
      <p className="mt-2 text-foreground/65 max-w-md mx-auto">
        Clear the filter to see every route in the atlas.
      </p>
      <Link
        to="/paths"
        search={{}}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 hover:gap-2.5 transition-all"
      >
        Show all paths
      </Link>
    </div>
  );
}
