import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Lock } from "lucide-react";
import type { Path } from "@/data/paths";

const accentBg: Record<Path["accent"], string> = {
  butter: "bg-primary/55",
  sage: "bg-[color:var(--color-sage)]/45",
  clay: "bg-clay/35",
};

export function PathCard({ path }: { path: Path }) {
  return (
    <Link
      to="/paths/$slug"
      params={{ slug: path.slug }}
      className="group block rounded-[1.75rem] border border-border bg-card overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300"
    >
      {/* Cover */}
      <div className={`relative aspect-[5/3] ${accentBg[path.accent]} overflow-hidden`}>
        {/* faint atlas doodle */}
        <svg className="absolute inset-0 h-full w-full opacity-25 text-foreground" aria-hidden>
          <defs>
            <pattern
              id={`path-doodle-${path.slug}`}
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40 Q 20 10 40 40 T 80 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 5"
              />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#path-doodle-${path.slug})`} />
        </svg>

        {/* Avatar chain */}
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-0">
          {path.steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="h-10 w-10 rounded-full border-2 border-card overflow-hidden bg-card grid place-items-center shadow-sm">
                {s.portrait ? (
                  <img
                    src={s.portrait}
                    alt={s.personName}
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Lock className="h-4 w-4 text-foreground/40" />
                )}
              </div>
              {i < path.steps.length - 1 && (
                <span
                  className="mx-1 h-px w-4 border-t border-dashed border-foreground/35"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>

        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-card/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/75 border border-border">
          {path.audience}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {path.estimatedTime}
          </span>
        </div>
        <h3 className="font-display mt-2 text-2xl font-medium text-foreground leading-snug">
          {path.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed line-clamp-2">{path.blurb}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
          Open path
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
