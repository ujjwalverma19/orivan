import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, AlertTriangle, Compass, Layers } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { SectionConnector } from "@/components/landing/SectionConnector";
import { useStory, getStoryBySlug } from "@/lib/stories/store";
import { getRelatedJourneyForStory, getRelatedCollectionForStory } from "@/lib/stories/related";

function clamp(text: string, max = 160): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export const Route = createFileRoute("/stories/$slug")({
  head: ({ params }) => {
    const story = getStoryBySlug(params.slug);
    if (!story) {
      return {
        meta: [
          { title: "Story not found — Orivan" },
          {
            name: "description",
            content: "This community story is not available on Orivan.",
          },
        ],
      };
    }
    const title = `${story.title} — Community Story on Orivan`;
    const description = clamp(story.summary, 160);
    const url = `https://orivan.online/stories/${story.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: story.title,
            description,
            author: { "@type": "Person", name: story.authorName },
            url,
            mainEntityOfPage: url,
            datePublished: story.createdAt,
            keywords: story.tags?.join(", "),
          }),
        },
      ],
    };
  },
  component: StoryDetail,
});

function StoryDetail() {
  const { slug } = Route.useParams();
  const story = useStory(slug);

  if (!story) return <StoryMissing slug={slug} />;

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 pt-4">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All stories
          </Link>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 2xl:px-12">
            <div className="inline-flex items-center gap-2 text-clay">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Community Story
              </span>
            </div>
            <h1 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              {story.title}
            </h1>
            <div className="mt-5 text-sm text-foreground/65">
              <span className="font-semibold text-foreground">{story.authorName}</span>
              {" · "}
              {story.role}
              {story.country ? ` · ${story.country}` : ""}
            </div>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">{story.summary}</p>
            {story.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {story.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-cream/70 border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <SectionConnector variant="center" marker="compass" />

        {/* Timeline */}
        {story.milestones.length > 0 && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 2xl:px-12">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">
                The path, in milestones.
              </h2>
              <ol className="mt-8 space-y-8 border-l-2 border-border pl-6">
                {story.milestones.map((m, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary border-2 border-background" />
                    {m.year && (
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                        {m.year}
                      </div>
                    )}
                    <h3 className="font-display mt-1 text-xl text-foreground">{m.title}</h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed whitespace-pre-line">
                      {m.story}
                    </p>
                    {m.lesson && (
                      <div className="mt-3 rounded-2xl bg-cream/60 border border-border px-4 py-3 text-sm text-foreground/85">
                        <span className="font-semibold text-foreground">Lesson:</span> {m.lesson}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Failures */}
        {story.failures.length > 0 && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 2xl:px-12">
              <div className="inline-flex items-center gap-2 text-clay">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  Failures & Lessons
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {story.failures.map((f, i) => (
                  <div key={i} className="rounded-[1.5rem] border border-border bg-card p-6">
                    <h3 className="font-display text-lg text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-foreground/75 leading-relaxed">
                      <span className="font-semibold text-foreground">Lesson:</span> {f.lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <RelatedForStory story={story} />

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 2xl:px-12 text-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 hover:gap-2.5 transition-all"
            >
              Browse more stories <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs text-foreground/50">
              Story submissions will open when accounts launch.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function RelatedForStory({ story }: { story: NonNullable<ReturnType<typeof useStory>> }) {
  const journey = getRelatedJourneyForStory(story);
  const collection = getRelatedCollectionForStory(story);
  if (!journey && !collection) return null;

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        <div className="inline-flex items-center gap-2 text-clay">
          <Compass className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em]">
            Continue exploring
          </span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {journey && (
            <Link
              to="/journey/$slug"
              params={{ slug: journey.slug }}
              className="group block rounded-[1.5rem] border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                <Compass className="h-3.5 w-3.5" /> Related Journey
              </div>
              <h3 className="font-display mt-3 text-xl text-foreground group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
                {journey.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{journey.title}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                Open journey <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          )}
          {collection && (
            <Link
              to="/collections/$slug"
              params={{ slug: collection.slug }}
              className="group block rounded-[1.5rem] border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                <Layers className="h-3.5 w-3.5" /> Related Collection
              </div>
              <h3 className="font-display mt-3 text-xl text-foreground group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
                {collection.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                {collection.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
                Open collection <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function StoryMissing({ slug }: { slug: string }) {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />
        <section className="py-32">
          <div className="mx-auto max-w-xl px-6 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-foreground/40" />
            <h1 className="font-display mt-6 text-4xl text-foreground">
              We couldn't find that story.
            </h1>
            <p className="mt-3 text-foreground/65">
              The story <span className="font-semibold text-foreground">{slug}</span> isn't on
              Orivan. It may have been removed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/stories"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
              >
                Browse all stories
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
