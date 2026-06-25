import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Library } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { getAllCollections, getCollectionMembers } from "@/content/registry";
import { PersonPortrait } from "@/components/PersonPortrait";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Orivan" },
      {
        name: "description",
        content:
          "Curated collections of journeys. Study a mindset, a craft, or a moment in history through the people who lived it.",
      },
      { property: "og:title", content: "Orivan Collections" },
      {
        property: "og:description",
        content: "Curated groups of journeys. Study a mindset, not just a name.",
      },
    ],
  }),
  component: CollectionsIndex,
});

function CollectionsIndex() {
  const collections = getAllCollections().sort(
    (a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999),
  );

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
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            <div className="inline-flex items-center gap-2 text-clay">
              <Library className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Orivan Collections
              </span>
            </div>
            <h1 className="font-display mt-4 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-3xl">
              Study a mindset, not just a name.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/70 leading-relaxed">
              Curated groups of journeys, organized by craft, era, and mindset.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            {collections.length === 0 ? (
              <EmptyCollections />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map((c) => {
                  const members = getCollectionMembers(c.slug);
                  const stack = members.slice(0, 4);
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
                                <PersonPortrait person={p} size="md" />
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
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function EmptyCollections() {
  return (
    <div className="rounded-[2rem] border border-border bg-card/60 backdrop-blur p-12 text-center">
      <Library className="h-10 w-10 mx-auto text-foreground/40" />
      <h2 className="font-display mt-4 text-2xl text-foreground">
        The first collections are still being mapped.
      </h2>
      <p className="mt-2 text-foreground/65 max-w-md mx-auto">
        Check back soon — collections are added directly from the Orivan registry.
      </p>
    </div>
  );
}
