import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Compass,
  Film,
  Lightbulb,
  MapPin,
  Mountain,
  Sparkle,
  Star,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { SectionConnector } from "@/components/landing/SectionConnector";
import { getPersonBySlug, getVideosByIds } from "@/content/registry";
import type { Person, Decision } from "@/content/schemas";
import { VideoModal } from "@/components/journey/VideoModal";
import { PersonPortrait } from "@/components/PersonPortrait";
import { QuestionExplorer } from "@/components/journey/QuestionExplorer";
import { ContinueExploring } from "@/components/journey/ContinueExploring";

export const Route = createFileRoute("/journey/$slug")({
  loader: ({ params }) => {
    const person = getPersonBySlug(params.slug);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData, params }) => {
    const person = loaderData?.person;
    if (!person) return { meta: [{ title: "Journey not found — Orivan" }] };
    const url = `https://orivan.online/journey/${params.slug}`;
    const description = person.summary.length > 160
      ? person.summary.slice(0, 159).trimEnd() + "…"
      : person.summary;
    const portraitUrl = person.portrait.startsWith("http")
      ? person.portrait
      : `https://orivan.online${person.portrait}`;
    return {
      meta: [
        { title: `${person.name} — Journey on Orivan` },
        { name: "description", content: description },
        { property: "og:title", content: `${person.name} — Journey on Orivan` },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        { property: "og:image", content: portraitUrl },
        { name: "twitter:title", content: `${person.name} — Journey on Orivan` },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: portraitUrl },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.title,
            description: person.summary,
            image: portraitUrl,
            url,
            nationality: person.country,
          }),
        },
      ],
    };
  },
  component: JourneyPage,
  notFoundComponent: JourneyNotFound,
  errorComponent: ({ error, reset }) => {
    void error;
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl text-foreground">This journey didn't load</h1>
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

function JourneyNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-foreground">Journey not found</h1>
        <p className="mt-3 text-foreground/65">
          We don't have a journey for <span className="font-semibold text-foreground">{slug}</span>{" "}
          yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Back to all journeys
        </Link>
      </div>
    </div>
  );
}

function JourneyPage() {
  const { person } = Route.useLoaderData();

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        {/* Back link */}
        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all journeys
          </Link>
        </div>

        <JourneyHero person={person} />
        <SectionConnector variant="right" marker="compass" />
        <Timeline person={person} />
        <SectionConnector variant="left" marker="star" />
        <Skills person={person} />
        <SectionConnector variant="center" marker="pin" />
        <Failures person={person} />
        <SectionConnector variant="right" marker="dot" />
        <BooksAndInfluences person={person} />
        <SectionConnector variant="left" marker="compass" />
        <Videos person={person} />
        <SectionConnector variant="center" marker="star" />
        <Decisions person={person} />
        <SectionConnector variant="right" marker="pin" />
        <LearnFromThem person={person} />
        <SectionConnector variant="center" marker="compass" />
        <QuestionExplorer person={person} />
        <SectionConnector variant="left" marker="star" />
        <ContinueExploring person={person} />

        <Footer />
      </div>
    </main>
  );
}

/* ---------- Hero ---------- */
function JourneyHero({ person }: { person: Person }) {
  const facts = [
    { label: "Birth Year", value: person.birthYear },
    { label: "Industry", value: person.industry },
    { label: "Country", value: person.country },
    { label: "Key Achievement", value: person.keyAchievement },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -top-8 -left-6 h-32 w-32 rounded-full bg-primary/40 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-[color:var(--color-sage)]/30 blur-3xl"
              aria-hidden
            />
            <div className="relative rounded-[2rem] overflow-hidden bg-secondary border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] aspect-square">
              <PersonPortrait person={person} size="xl" eager />
            </div>
            <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
              <Compass className="h-3.5 w-3.5" /> Journey
            </span>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 text-foreground/55">
              <span className="h-px w-8 bg-foreground/30" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                A life, end to end
              </span>
            </div>
            <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight">
              {person.name}
            </h1>
            <p className="mt-4 font-display text-lg sm:text-xl text-foreground/70">
              {person.title}.
            </p>
            <p className="mt-6 max-w-xl text-base lg:text-lg leading-relaxed text-foreground/75">
              {person.summary}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-border bg-card/70 backdrop-blur px-4 py-3"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display text-base text-foreground leading-snug">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section heading helper ---------- */
function SectionHead({
  eyebrow,
  title,
  intro,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="inline-flex items-center gap-2 text-clay">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        <span className="text-xs font-semibold uppercase tracking-[0.22em]">{eyebrow}</span>
      </div>
      <h2 className="font-display mt-3 text-4xl sm:text-5xl font-medium leading-[1.05] text-foreground">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-foreground/70 text-lg leading-relaxed">{intro}</p> : null}
    </div>
  );
}

/* ---------- Timeline ---------- */
function Timeline({ person }: { person: Person }) {
  return (
    <section id="timeline" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Life Timeline"
          title="The full arc, year by year."
          intro="Every story has the highlights. This is the boring middle, the doubts, and the moments that quietly changed everything."
          icon={Mountain}
        />

        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-foreground/15"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, currentColor 0 3px, transparent 3px 9px)",
              color: "color-mix(in oklab, var(--color-foreground) 25%, transparent)",
              backgroundColor: "transparent",
            }}
          />
          {person.timeline.map((e, i) => (
            <li
              key={`${e.year}-${i}`}
              data-timeline-year={e.year}
              className="relative pl-12 sm:pl-16 pb-12 last:pb-0 scroll-mt-24 rounded-[1.6rem] transition-shadow"
            >
              <span
                aria-hidden
                className="absolute left-0 sm:left-2 top-1.5 h-6 w-6 rounded-full bg-primary border-2 border-card shadow-[0_0_0_2px_var(--color-foreground)] grid place-items-center"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>

              <div className="rounded-[1.5rem] border border-border bg-card/80 backdrop-blur p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.18)] transition-all">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-3xl text-foreground">{e.year}</span>
                  <h3 className="font-display text-xl text-foreground/85">{e.title}</h3>
                </div>
                <p className="mt-3 text-foreground/75 leading-relaxed">{e.story}</p>

                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-secondary/70 border border-border px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                      Challenge
                    </div>
                    <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{e.challenge}</p>
                  </div>
                  <div className="rounded-xl bg-[color:var(--color-butter-soft)] border border-border px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                      Lesson
                    </div>
                    <p className="mt-1 text-sm text-foreground/85 leading-relaxed">{e.lesson}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */
function Skills({ person }: { person: Person }) {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Skills Acquired"
          title="What they learned to do well."
          intro="Skills aren't talents — they're the residue of a thousand decisions. Here is what compounded over a lifetime."
          icon={Sparkle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {person.skills.map((s) => (
            <article
              key={s.name}
              className="rounded-[1.5rem] border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl text-foreground">{s.name}</h3>
                <span className="rounded-full bg-primary/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/80">
                  Mastered
                </span>
              </div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{s.description}</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  How it developed
                </div>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">{s.developed}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Failures ---------- */
function Failures({ person }: { person: Person }) {
  return (
    <section id="failures" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Failures & Challenges"
          title="The chapters most pages skip."
          intro="No journey is a straight line. The setbacks weren't detours — they were the route."
          icon={Mountain}
        />

        <div className="grid lg:grid-cols-2 gap-5">
          {person.failures.map((f) => (
            <article
              key={f.title}
              className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] transition-all"
            >
              <h3 className="font-display text-2xl text-foreground">{f.title}</h3>
              <div className="mt-5 space-y-4">
                <Block label="Context" body={f.context} tone="muted" />
                <Block label="Recovery" body={f.recovery} tone="sage" />
                <Block label="Lesson" body={f.lesson} tone="butter" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "muted" | "sage" | "butter";
}) {
  const toneClass =
    tone === "sage"
      ? "bg-[color:var(--color-sage)]/15 border-border"
      : tone === "butter"
        ? "bg-[color:var(--color-butter-soft)] border-border"
        : "bg-secondary/70 border-border";
  return (
    <div className={`rounded-xl border px-4 py-3 ${toneClass}`}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
        {label}
      </div>
      <p className="mt-1 text-sm text-foreground/85 leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------- Books & Influences ---------- */
function BooksAndInfluences({ person }: { person: Person }) {
  return (
    <section id="library" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Books & Resources"
          title="The library that shaped them."
          intro="The books on the shelf, the people they studied, the ideas they kept returning to."
          icon={BookOpen}
        />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {person.books.map((b) => (
              <article
                key={b.title}
                className="group rounded-[1.25rem] border border-border bg-card p-5 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="h-12 w-9 shrink-0 rounded-sm bg-[color:var(--color-clay)]/85 shadow-[2px_2px_0_0_var(--color-beige)] grid place-items-center">
                    <BookOpen className="h-4 w-4 text-[color:var(--color-cream)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-xs text-foreground/55 mt-0.5">{b.author}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{b.note}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-[1.5rem] border border-border bg-secondary/60 p-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay">
              Influences
            </div>
            <h3 className="font-display mt-2 text-2xl text-foreground">People they studied</h3>
            <ul className="mt-5 divide-y divide-border">
              {person.influences.map((p) => (
                <li key={p.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <Star className="h-3.5 w-3.5 text-clay" />
                    <span className="font-display text-base text-foreground">{p.name}</span>
                  </div>
                  <p className="mt-1 text-sm text-foreground/70 leading-relaxed pl-5">{p.note}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- Videos ---------- */
function Videos({ person }: { person: Person }) {
  const list = useMemo(() => getVideosByIds(person.videoIds), [person.videoIds]);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Videos & Documentaries"
          title="Watch them in their own words."
          intro="Interviews, keynotes, talks, and documentaries — chosen for the moments that reveal how they actually thought."
          icon={Film}
        />

        {list.length === 0 ? (
          <div className="rounded-[1.5rem] border border-border bg-card p-8 lg:p-10 text-center">
            <p className="font-display text-xl lg:text-2xl text-foreground leading-snug">
              We are still curating the best videos for this journey.
            </p>
            <p className="mt-3 text-foreground/70 max-w-xl mx-auto leading-relaxed">
              In the meantime, the most useful material on {person.name} lives in the books they
              shaped, the lessons they left behind, and the quotes that still travel.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <a
                href="#library"
                className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                Books
              </a>
              <a
                href="#lessons"
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-cream/60 transition-colors"
              >
                Lessons
              </a>
              <a
                href="#timeline"
                className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-cream/60 transition-colors"
              >
                Quotes &amp; moments
              </a>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveId(v.id)}
                className="group text-left rounded-[1.5rem] border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                aria-label={`Play ${v.title}`}
              >
                <div className="relative aspect-video bg-[color:var(--color-ink)]/90 overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi_webp/${v.youtubeId}/hqdefault.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--color-butter) 80%, transparent), transparent 60%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--color-clay) 70%, transparent), transparent 65%)",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center h-14 w-14 rounded-full bg-cream/95 text-foreground shadow-lg group-hover:scale-110 transition-transform">
                      <PlayTriangle />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 border border-border">
                    {v.kind}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded bg-foreground/85 text-background px-2 py-0.5 text-[10px] font-semibold">
                    {v.length}
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                    {v.year}
                  </div>
                  <h3 className="mt-1 font-display text-lg text-foreground leading-snug">
                    {v.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <VideoModal
        videos={list}
        activeId={activeId}
        onChange={setActiveId}
        onClose={() => setActiveId(null)}
      />
    </section>
  );
}

function PlayTriangle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M5 3 L15 9 L5 15 Z" fill="currentColor" />
    </svg>
  );
}

/* ---------- Decisions ---------- */
function Decisions({ person }: { person: Person }) {
  const riskColor: Record<Decision["risk"], string> = {
    Low: "bg-[color:var(--color-sage)]/40 text-foreground/80",
    Medium: "bg-primary/60 text-foreground/80",
    High: "bg-clay/80 text-cream",
    Extreme: "bg-foreground text-background",
  };
  return (
    <section id="decisions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Key Decisions"
          title="The forks in the road."
          intro="The bets that, made differently, would have written a different life."
          icon={Target}
        />

        <div className="grid lg:grid-cols-2 gap-5">
          {person.decisions.map((d) => (
            <article
              key={d.title}
              className="rounded-[1.5rem] border border-border bg-card p-6 sm:p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl text-foreground leading-snug">{d.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${riskColor[d.risk]}`}
                >
                  Risk · {d.risk}
                </span>
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <FactRow label="Why" value={d.why} />
                <FactRow label="Outcome" value={d.outcome} />
                <FactRow label="Long-term impact" value={d.impact} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-3 items-start">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55 pt-0.5">
        {label}
      </dt>
      <dd className="text-foreground/80 leading-relaxed">{value}</dd>
    </div>
  );
}

/* ---------- Learn From Them ---------- */
function LearnFromThem({ person }: { person: Person }) {
  return (
    <section id="lessons" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHead
          eyebrow="What Can You Learn?"
          title="Take the lesson, not just the story."
          intro="AI-distilled takeaways, sorted by who you are and what you're building toward."
          icon={Lightbulb}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {person.insights.map((i) => (
            <article
              key={i.audience}
              className="relative rounded-[1.5rem] border border-border bg-gradient-to-br from-card to-[color:var(--color-butter-soft)]/60 p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.18)] transition-all"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/95 text-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
                <MapPin className="h-3 w-3" /> For {i.audience}
              </span>
              <h3 className="font-display mt-4 text-xl text-foreground leading-snug">{i.lesson}</h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{i.takeaway}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
