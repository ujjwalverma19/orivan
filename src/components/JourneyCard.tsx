import { memo, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Person } from "@/content/schemas";
import { PersonPortrait } from "@/components/PersonPortrait";

/**
 * Reusable journey card. Single canonical shape — used by Featured Journeys
 * on the homepage, Collection detail pages, and any future grid that lists
 * people. The entire card is one focusable Link.
 */
export const JourneyCard = memo(function JourneyCard({ person }: { person: Person }) {
  const tag = person.roles?.[0] ?? "Founder";
  const read = useMemo(
    () => Math.max(5, Math.round(person.timeline.length * 0.7)),
    [person.timeline.length],
  );
  return (
    <Link
      to="/journey/$slug"
      params={{ slug: person.slug }}
      aria-label={`Read ${person.name}'s journey`}
      className="group block cursor-pointer bg-card rounded-[1.75rem] border border-border overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] hover:border-foreground/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="aspect-square relative overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]">
          <PersonPortrait person={person} size="lg" />
        </div>
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-card/95 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/75 border border-border z-10">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
          <span>{read} min read</span>
        </div>
        <h3 className="font-display mt-2 text-2xl font-medium text-foreground group-hover:underline underline-offset-4 decoration-2 decoration-primary/60">
          {person.name}
        </h3>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{person.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 group-hover:gap-2.5 transition-all">
          Read Journey
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
});
