import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Compass, MapPin } from "lucide-react";
import { getPath, paths } from "@/data/paths";
import { PathRoadmap } from "@/components/paths/PathRoadmap";
import { PathCard } from "@/components/paths/PathCard";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { SectionConnector } from "@/components/landing/SectionConnector";
import { buildFallbackPath } from "@/lib/paths/fallback";

function resolvePath(slug: string) {
  const curated = getPath(slug);
  if (curated) return curated;
  // Auto-generated paths use a `discover-<audience>` slug pattern.
  if (slug.startsWith("discover-")) {
    const audience = slug.replace(/^discover-/, "").replace(/-/g, " ");
    return buildFallbackPath(audience);
  }
  return undefined;
}

export const Route = createFileRoute("/paths/$slug")({
  head: ({ params }) => {
    const path = resolvePath(params.slug);
    const title = path ? `${path.title} — Orivan Paths` : "Path — Orivan";
    const description =
      path?.blurb ??
      "An Orivan learning path — a step-by-step route through the people who built the world you want to build.";
    const url = `https://orivan.online/paths/${params.slug}`;
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
    };
  },
  component: PathDetail,
});

function PathDetail() {
  const { slug } = Route.useParams();
  const path = resolvePath(slug);

  if (!path) return <UnknownPath />;

  const others = paths.filter((p) => p.slug !== path.slug).slice(0, 2);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-4">
          <Link
            to="/paths"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All paths
          </Link>
        </div>

        {/* Hero */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 text-clay">
              <Compass className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">Orivan Path</span>
            </div>
            <h1 className="font-display mt-4 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight">
              {path.title}
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              {path.blurb}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 font-semibold text-foreground/75">
                <MapPin className="h-3.5 w-3.5" /> {path.audience}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 font-semibold text-foreground/75">
                <Clock className="h-3.5 w-3.5" /> {path.estimatedTime}
              </span>
            </div>

            <a
              href="#roadmap"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 h-12 text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition"
            >
              Start path
            </a>
          </div>
        </section>

        <SectionConnector variant="center" marker="compass" />

        {/* Roadmap */}
        <section id="roadmap" className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                The Route
              </span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl font-medium text-foreground leading-[1.05]">
                Follow the milestones in order.
              </h2>
            </div>
            <PathRoadmap path={path} />
          </div>
        </section>

        <SectionConnector variant="right" marker="star" />

        {/* Other paths */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                Keep exploring
              </span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl font-medium text-foreground leading-[1.05]">
                Other paths you might like.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((p) => (
                <PathCard key={p.slug} path={p} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function UnknownPath() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />
        <section className="py-32">
          <div className="mx-auto max-w-xl px-6 text-center">
            <Compass className="h-12 w-12 mx-auto text-foreground/40" />
            <h1 className="font-display mt-6 text-4xl text-foreground">
              We haven't charted that path yet.
            </h1>
            <p className="mt-3 text-foreground/65">
              The cartographers are on it. In the meantime, explore the ones already drawn.
            </p>
            <Link
              to="/paths"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
            >
              Browse all paths
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
