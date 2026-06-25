import { useEffect, useMemo, useState, useTransition } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Search as SearchIcon,
  ArrowUpRight,
  Sparkles,
  Film,
  BookOpen,
  AlertTriangle,
  User,
  Library,
  PenSquare,
} from "lucide-react";
import {
  searchAll,
  getTrendingQueries,
  getPopularJourneys,
  getPopularLessons,
  getPopularTopics,
  type AnyResult,
  type ResultKind,
} from "@/lib/search";
import {
  relatedPeopleForQuery,
  relatedCollectionsForQuery,
  relatedStoriesForQuery,
} from "@/lib/search/related";
import { PersonPortrait } from "@/components/PersonPortrait";
import { JourneyCard } from "@/components/JourneyCard";
import { getAllPeople } from "@/content/registry";

const KIND_LABEL: Record<ResultKind, string> = {
  person: "Journey",
  video: "Video",
  lesson: "Lesson",
  failure: "Failure",
  collection: "Collection",
  story: "Story",
};

const SEARCH_KINDS = [
  "all",
  "person",
  "collection",
  "story",
  "video",
  "lesson",
  "failure",
] as const;
type SearchKind = (typeof SEARCH_KINDS)[number];
const RESULT_KINDS: ResultKind[] = ["person", "collection", "story", "video", "lesson", "failure"];
type RawSearch = Partial<Record<"q" | "kind", unknown>>;

function normalizeSearch(search: RawSearch) {
  const q = typeof search.q === "string" ? search.q : "";
  const kind = SEARCH_KINDS.includes(search.kind as SearchKind)
    ? (search.kind as SearchKind)
    : "all";
  return { q, kind };
}

const KindIcon = ({ kind, className }: { kind: ResultKind; className?: string }) => {
  const Cmp =
    kind === "person"
      ? User
      : kind === "collection"
        ? Library
        : kind === "story"
          ? PenSquare
          : kind === "video"
            ? Film
            : kind === "lesson"
              ? BookOpen
              : AlertTriangle;
  return <Cmp className={className} aria-hidden />;
};

export const Route = createFileRoute("/search")({
  validateSearch: normalizeSearch,
  head: () => ({
    meta: [
      { title: "Search — Orivan" },
      {
        name: "description",
        content: "Search journeys, lessons, failures, and videos across every Orivan profile.",
      },
    ],
  }),
  component: SearchPage,
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-2xl text-foreground">Search hit a snag</h1>
      <p className="mt-2 text-foreground/70">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold"
      >
        Try again
      </button>
    </div>
  ),
  notFoundComponent: () => <SearchPage />,
});

function SearchPage() {
  const { q, kind } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });
  const [draft, setDraft] = useState(q);
  const [, startTransition] = useTransition();

  // Re-sync the input when the URL changes externally (e.g. clicking a chip).
  useEffect(() => setDraft(q), [q]);

  useEffect(() => {
    const current = q.trim();
    const next = draft.trim();
    if (next === current) return;
    const timer = window.setTimeout(() => {
      startTransition(() => {
        navigate({
          search: (prev: RawSearch) => ({ ...normalizeSearch(prev), q: next }),
          replace: true,
        });
      });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [draft, navigate, q, startTransition]);

  const searchState = useMemo(() => {
    const trimmed = q.trim();
    if (!trimmed) return { results: [] as AnyResult[], error: null as string | null };
    try {
      const all = searchAll(trimmed, 48);
      const safeResults = Array.isArray(all) ? all : [];
      const results = kind === "all" ? safeResults : safeResults.filter((r) => r?.kind === kind);
      return { results, error: null as string | null };
    } catch (error) {
      void error;
      return {
        results: [] as AnyResult[],
        error:
          "Search is temporarily unavailable. Try another query or explore the recommendations below.",
      };
    }
  }, [q, kind]);

  const results = searchState.results;

  const trending = getTrendingQueries();
  const journeys = getPopularJourneys();
  const lessons = getPopularLessons();
  const topics = getPopularTopics();

  const submit = (next: string) => {
    navigate({ search: (prev: RawSearch) => ({ ...normalizeSearch(prev), q: next.trim() }) });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-cream/40">
        <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 py-14 lg:py-20">
          <Link
            to="/"
            className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-clay hover:text-foreground transition-colors"
          >
            ← Back to Orivan
          </Link>
          <h1 className="mt-4 font-display text-3xl lg:text-5xl leading-tight text-foreground">
            Search every journey, lesson, failure, and video.
          </h1>
          <p className="mt-3 max-w-2xl text-foreground/70 leading-relaxed">
            Type a name, a topic, or a feeling. Results are ranked by name, tags, roles, skills,
            lessons, then videos.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(draft);
            }}
            className="mt-8 flex items-center gap-2 rounded-full bg-card border border-foreground/10 p-2 pl-6 shadow-[0_2px_0_0_var(--color-beige)] focus-within:border-foreground/30 focus-within:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] transition-all"
          >
            <SearchIcon className="h-5 w-5 text-foreground/40 shrink-0" />
            <input
              type="text"
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Try “design”, “rejection”, “first principles”…"
              className="flex-1 min-w-0 bg-transparent outline-none text-base placeholder:text-foreground/40 py-2"
              aria-label="Search Orivan"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground text-background px-6 h-11 text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition shrink-0"
            >
              Search
            </button>
          </form>

          {q && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {SEARCH_KINDS.map((k) => {
                const active = kind === k;
                return (
                  <Link
                    key={k}
                    to="/search"
                    search={(prev: RawSearch) => ({ ...normalizeSearch(prev), kind: k })}
                    className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "bg-foreground text-background border-foreground"
                        : "bg-card text-foreground/70 border-border hover:text-foreground"
                    }`}
                  >
                    {k === "all" ? "All" : KIND_LABEL[k]}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 py-12 lg:py-16">
        {searchState.error ? (
          <SearchErrorState message={searchState.error} trending={trending} onPick={submit} />
        ) : q.trim() === "" ? (
          <EmptyState
            trending={trending}
            journeys={journeys}
            lessons={lessons}
            topics={topics}
            onPick={submit}
          />
        ) : results.length === 0 ? (
          <NoResults query={q} trending={trending} onPick={submit} />
        ) : (
          <ResultsList results={results} />
        )}
      </section>
    </div>
  );
}

/* ---------------- Results list ---------------- */

function ResultsList({ results }: { results: AnyResult[] }) {
  const safeResults = Array.isArray(results) ? results.filter(Boolean) : [];
  return (
    <>
      <ul className="mt-4 divide-y divide-border rounded-[1.5rem] border border-border bg-card overflow-hidden">
        {safeResults.map((r) => {
          const kind = RESULT_KINDS.includes(r.kind) ? r.kind : "person";
          const matches = Array.isArray(r.matches) ? r.matches : [];
          return (
            <li key={r.id || `${kind}:${r.title}`}>
              <Link
                to={r.href || "/search"}
                className="flex items-start gap-4 p-5 lg:p-6 hover:bg-cream/50 transition-colors group"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-foreground/70 border border-border">
                  <KindIcon kind={kind} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                    <span>{KIND_LABEL[kind]}</span>
                    {matches.slice(0, 2).map((m) => (
                      <span key={m} className="text-foreground/40">
                        · match: {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 font-display text-lg text-foreground leading-snug truncate">
                    {r.title || "Untitled result"}
                  </div>
                  <div className="mt-1 text-sm text-foreground/65 leading-relaxed truncate">
                    {r.snippet || "Open this result to keep exploring."}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-foreground transition-colors shrink-0" />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* ---------------- Search error ---------------- */

function SearchErrorState({
  message,
  trending,
  onPick,
}: {
  message: string;
  trending: ReturnType<typeof getTrendingQueries>;
  onPick: (q: string) => void;
}) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card p-8 lg:p-10 text-center">
      <p className="font-display text-xl lg:text-2xl text-foreground leading-snug">
        Search hit a snag.
      </p>
      <p className="mt-3 text-foreground/70 max-w-xl mx-auto leading-relaxed">{message}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {trending.map((t) => (
          <button
            key={t.query}
            type="button"
            onClick={() => onPick(t.query)}
            className="inline-flex items-center rounded-full border border-border bg-cream px-4 py-2 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- No results — discovery state ---------------- */

function NoResults({
  query,
  trending: _trending,
  onPick: _onPick,
}: {
  query: string;
  trending: ReturnType<typeof getTrendingQueries>;
  onPick: (q: string) => void;
}) {
  const people = relatedPeopleForQuery(query, 6);
  const collections = relatedCollectionsForQuery(query, 6);
  const stories = relatedStoriesForQuery(query, 3);
  const hasRelated = people.length > 0 || collections.length > 0 || stories.length > 0;

  const popular = useMemo(() => {
    if (hasRelated) return [];
    return getAllPeople()
      .filter((p) => p.featured)
      .slice(0, 6);
  }, [hasRelated]);

  return (
    <div className="space-y-12">
      <div className="rounded-[1.5rem] border border-border bg-card p-8 lg:p-10 text-center">
        <p className="font-display text-2xl lg:text-3xl text-foreground leading-snug">
          We haven't mapped this journey yet.
        </p>
        <p className="mt-3 text-foreground/70 max-w-xl mx-auto leading-relaxed">
          More journeys are being added regularly. In the meantime, here's where this thread leads.
        </p>
      </div>

      {hasRelated ? (
        <>
          {people.length > 0 && (
            <section>
              <Heading icon={<User className="h-3.5 w-3.5" />} label="Related journeys" />
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {people.map((p) => (
                  <JourneyCard key={p.slug} person={p} />
                ))}
              </div>
            </section>
          )}

          {collections.length > 0 && (
            <section>
              <Heading icon={<Library className="h-3.5 w-3.5" />} label="Related collections" />
              <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {collections.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/collections/$slug"
                      params={{ slug: c.slug }}
                      className="group block rounded-[1.25rem] border border-border bg-card p-5 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-22px_rgba(0,0,0,0.2)] transition-all"
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                        Collection
                      </div>
                      <div className="mt-2 font-display text-lg text-foreground">{c.title}</div>
                      <p className="mt-1 text-sm text-foreground/65 leading-relaxed line-clamp-3">
                        {c.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {stories.length > 0 && (
            <section>
              <Heading icon={<PenSquare className="h-3.5 w-3.5" />} label="Related stories" />
              <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stories.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/stories/$slug"
                      params={{ slug: s.slug }}
                      className="block rounded-[1.25rem] border border-border bg-card p-5 hover:bg-cream/50 transition-colors"
                    >
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                        Story
                      </div>
                      <div className="mt-2 font-display text-lg text-foreground leading-snug">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                        {s.summary}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <section>
          <Heading
            icon={<Sparkles className="h-3.5 w-3.5" />}
            label="Popular journeys to start with"
          />
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popular.map((p) => (
              <JourneyCard key={p.slug} person={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

/* ---------------- Empty state (recommendations) ---------------- */

function EmptyState({
  trending,
  journeys,
  lessons,
  topics,
  onPick,
}: {
  trending: ReturnType<typeof getTrendingQueries>;
  journeys: ReturnType<typeof getPopularJourneys>;
  lessons: ReturnType<typeof getPopularLessons>;
  topics: ReturnType<typeof getPopularTopics>;
  onPick: (q: string) => void;
}) {
  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Trending */}
      <section>
        <Heading icon={<Sparkles className="h-3.5 w-3.5" />} label="Trending searches" />
        <div className="mt-4 flex flex-wrap gap-2">
          {trending.map((t) => (
            <button
              key={t.query}
              type="button"
              onClick={() => onPick(t.query)}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Journeys */}
      <section>
        <Heading icon={<User className="h-3.5 w-3.5" />} label="Popular journeys" />
        <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {journeys.map((j) => (
            <li key={j.slug}>
              <Link
                to="/journey/$slug"
                params={{ slug: j.slug }}
                className="group block rounded-[1.25rem] border border-border bg-card overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-22px_rgba(0,0,0,0.2)] transition-all"
              >
                <div className="aspect-[4/3] bg-cream overflow-hidden">
                  <PersonPortrait
                    person={{
                      name: j.name,
                      slug: j.slug,
                      portrait: j.portrait,
                      roles: [j.title],
                      industry: undefined as unknown as string,
                    }}
                    size="md"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg text-foreground">{j.name}</div>
                  <div className="mt-0.5 text-sm text-foreground/65">{j.title}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {j.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-cream/60 px-2 py-0.5 text-[10px] font-medium text-foreground/70"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Lessons */}
      <section>
        <Heading icon={<BookOpen className="h-3.5 w-3.5" />} label="Popular lessons" />
        <ul className="mt-4 grid sm:grid-cols-2 gap-3">
          {lessons.map((l) => (
            <li key={l.id}>
              <Link
                to="/journey/$slug"
                params={{ slug: l.personSlug }}
                hash="lessons"
                className="block rounded-[1.25rem] border border-border bg-card p-5 hover:bg-cream/50 transition-colors"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                  {l.personName} · for {l.audience}
                </div>
                <p className="mt-2 font-display text-base text-foreground leading-snug">
                  {l.lesson}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Topics */}
      <section>
        <Heading icon={<Sparkles className="h-3.5 w-3.5" />} label="Popular topics" />
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t.tag}
              type="button"
              onClick={() => onPick(t.tag)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-cream transition-colors"
            >
              <span>#{t.tag}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function Heading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-clay">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cream border border-border text-foreground/70">
        {icon}
      </span>
      {label}
    </div>
  );
}
