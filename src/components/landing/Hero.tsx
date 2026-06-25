import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import heroScene from "@/assets/hero-scene.webp";
import heroBgMap from "@/assets/hero-bg-map.webp";
import { getAllPeople, getAllCollections } from "@/content/registry";
import { pickRandom } from "@/lib/discovery/rotation";
import { knownFallbackAudiences } from "@/lib/paths/fallback";

const VALUE_STATEMENTS = [
  "Curated Life Journeys",
  "Lessons From Real Builders",
  "Timeless Decision Making",
  "New Journeys Added Regularly",
];

export function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [seed, setSeed] = useState(0);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 0x7fffffff) || 1);
  }, []);

  // Rotating path chips — only audiences that resolve to a real (curated or fallback) path.
  const chips = useMemo(() => {
    const all = getAllPeople();
    const featuredPeople = all.filter((p) => p.featured).map((p) => p.name);
    const collectionTitles = getAllCollections().map((c) => c.title);
    const audiences = knownFallbackAudiences().map((a) =>
      a.replace(/\b\w/g, (m) => m.toUpperCase()),
    );
    const pool = [...new Set([...audiences, ...collectionTitles, ...featuredPeople])];
    return pickRandom(pool, 6, seed);
  }, [seed]);

  return (
    <section className="relative overflow-hidden lg:min-h-[88vh] flex items-center">
      {/* faint map background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage: `url(${heroBgMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 90%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-14 items-center">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 text-foreground/55">
              <span className="h-px w-8 bg-foreground/30" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                Human Journeys. Human Potential.
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.04] tracking-tight text-foreground max-w-[18ch] mx-auto lg:mx-0">
              Every Life{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Leaves</span>
                <span
                  className="absolute inset-x-0 bottom-1 h-3 bg-primary/70 -z-0 rounded-sm"
                  aria-hidden
                />
              </span>{" "}
              a Map.
            </h1>

            <p className="mt-7 max-w-md mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed text-foreground/65">
              Explore how founders, creators, athletes, researchers, and innovators became who they
              are.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate({ to: "/search", search: { q: query.trim(), kind: "all" } });
              }}
              className="group/search mt-9 flex items-center gap-2 rounded-full bg-card border border-foreground/10 p-2 pl-6 shadow-[0_2px_0_0_var(--color-beige)] max-w-lg mx-auto lg:mx-0 transition-all duration-300 focus-within:border-foreground/30 focus-within:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)] focus-within:-translate-y-0.5"
            >
              <Search className="h-5 w-5 text-foreground/40 shrink-0 transition-colors group-focus-within/search:text-foreground/70" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Whose journey would you like to study?"
                aria-label="Search Orivan"
                className="flex-1 min-w-0 bg-transparent outline-none text-base placeholder:text-foreground/40 py-2"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground text-background px-6 h-11 text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition shrink-0"
              >
                Explore
              </button>
            </form>

            {/* Value strip */}
            <ul className="mt-5 flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
              {VALUE_STATEMENTS.map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-foreground/25" aria-hidden />}
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center lg:items-start gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/50">
                Start Exploring
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {chips.map((c) => (
                  <Link
                    key={c}
                    to="/search"
                    search={{ q: c, kind: "all" as const }}
                    className="rounded-full bg-card border border-border px-4 py-1.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:border-foreground/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="relative">
            {/* depth halos */}
            <div
              className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-[color:var(--color-sage)]/30 blur-3xl"
              aria-hidden
            />
            {/* dotted texture behind frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 opacity-40"
              style={{
                backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                color: "color-mix(in oklab, var(--color-foreground) 12%, transparent)",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />

            <div className="relative rounded-[2rem] overflow-hidden bg-secondary border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
              <img
                src={heroScene}
                alt="An illustrated landscape of winding paths leading explorers toward mountains, books, and ideas"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1280}
                height={1024}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="w-full h-auto lg:max-h-[82vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
