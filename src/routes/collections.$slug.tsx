import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Library } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { SectionConnector } from "@/components/landing/SectionConnector";
import { getCollectionBySlug, getCollectionMembers } from "@/content/registry";
import { JourneyCard } from "@/components/JourneyCard";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollectionBySlug(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.collection;
    if (!c) return { meta: [{ title: "Collection — Orivan" }] };
    const url = `https://orivan.online/collections/${params.slug}`;
    return {
      meta: [
        { title: `${c.title} — Orivan Collections` },
        { name: "description", content: c.description },
        { property: "og:title", content: `${c.title} — Orivan` },
        { property: "og:description", content: c.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: c.title,
            description: c.description,
            url,
          }),
        },
      ],
    };
  },
  component: CollectionDetail,
  notFoundComponent: CollectionNotFound,
  errorComponent: ({ error, reset }) => {
    void error;
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl text-foreground">This collection didn't load</h1>
          <p className="mt-2 text-foreground/65">Something went wrong loading this page.</p>
          <button
            onClick={reset}
            className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
});

function CollectionDetail() {
  const { collection } = Route.useLoaderData();
  const members = getCollectionMembers(collection.slug);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 pt-4">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All collections
          </Link>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            <div className="inline-flex items-center gap-2 text-clay">
              <Library className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Orivan Collection
              </span>
            </div>
            <h1 className="font-display mt-4 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight max-w-3xl">
              {collection.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              {collection.description}
            </p>
          </div>
        </section>

        <SectionConnector variant="center" marker="compass" />

        {/* Members */}
        <section className="pb-24 pt-12 lg:pt-16">
          <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            {members.length === 0 ? (
              <EmptyCollection />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((p) => (
                  <JourneyCard key={p.slug} person={p} />
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

function EmptyCollection() {
  return (
    <div className="rounded-[2rem] border border-border bg-card/60 backdrop-blur p-12 text-center">
      <Library className="h-10 w-10 mx-auto text-foreground/40" />
      <h2 className="font-display mt-4 text-2xl text-foreground">
        This collection is still being mapped.
      </h2>
      <p className="mt-2 text-foreground/65 max-w-md mx-auto">
        Curators are picking the right journeys. Check back soon — or explore the rest of the
        library in the meantime.
      </p>
      <Link
        to="/collections"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
      >
        Browse all collections
      </Link>
    </div>
  );
}

function CollectionNotFound() {
  const { slug } = Route.useParams();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />
        <section className="py-32">
          <div className="mx-auto max-w-xl px-6 text-center">
            <Library className="h-12 w-12 mx-auto text-foreground/40" />
            <h1 className="font-display mt-6 text-4xl text-foreground">
              This collection is still being mapped.
            </h1>
            <p className="mt-3 text-foreground/65">
              We don't have a collection called{" "}
              <span className="font-semibold text-foreground">{slug}</span> yet.
            </p>
            <Link
              to="/collections"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
            >
              Browse all collections
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
