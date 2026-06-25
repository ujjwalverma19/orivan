import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Lock, MapPin, Mountain, Star } from "lucide-react";
import type { Path, PathStep } from "@/data/paths";

const markers = [Compass, Star, MapPin, Mountain];

export function PathRoadmap({ path }: { path: Path }) {
  return (
    <ol className="relative max-w-5xl mx-auto">
      {/* Hand-drawn dashed spine on mobile */}
      <span
        aria-hidden
        className="absolute left-6 top-2 bottom-2 w-px border-l border-dashed border-foreground/25 lg:hidden"
      />
      {path.steps.map((step, i) => (
        <PathStepNode key={i} step={step} index={i} total={path.steps.length} />
      ))}
    </ol>
  );
}

function PathStepNode({ step, index, total }: { step: PathStep; index: number; total: number }) {
  const Marker = markers[index % markers.length];
  const isLocked = !step.personSlug;
  const flip = index % 2 === 1;

  return (
    <li
      className={`relative pl-16 lg:pl-0 pb-14 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-12 ${flip ? "lg:[&>div]:col-start-2" : ""}`}
    >
      {/* Marker badge */}
      <span
        aria-hidden
        className="absolute left-0 top-1 lg:left-1/2 lg:-translate-x-1/2 lg:top-6 h-12 w-12 rounded-full bg-primary border-2 border-card shadow-[0_0_0_2px_var(--color-foreground)] grid place-items-center z-10"
      >
        <Marker className="h-5 w-5 text-foreground" />
      </span>

      {/* Connector to next on desktop */}
      {index < total - 1 && (
        <svg
          aria-hidden
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-20 w-40 h-32 text-foreground/40"
          viewBox="0 0 160 130"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <path
            d={flip ? "M 80 0 Q 0 60 80 130" : "M 80 0 Q 160 60 80 130"}
            strokeDasharray="3 7"
          />
        </svg>
      )}

      <div className={`relative ${flip ? "lg:pl-10" : "lg:pr-10 lg:text-right"}`}>
        <div
          className={`inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-clay ${flip ? "" : "lg:flex-row-reverse"}`}
        >
          <span>Step {step.order}</span>
          <span className="h-1 w-1 rounded-full bg-clay/60" aria-hidden />
          <span>{step.duration}</span>
        </div>

        <div
          className={`mt-3 rounded-[1.5rem] border border-border bg-card/90 backdrop-blur p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.2)] transition-all ${isLocked ? "opacity-80" : ""}`}
        >
          <div
            className={`flex items-center gap-4 ${flip ? "" : "lg:flex-row-reverse lg:text-right"}`}
          >
            <div className="h-16 w-16 shrink-0 rounded-2xl overflow-hidden bg-secondary border border-border grid place-items-center">
              {step.portrait ? (
                <img
                  src={step.portrait}
                  alt={step.personName}
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Lock className="h-6 w-6 text-foreground/40" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-2xl text-foreground leading-tight">
                {step.personName}
              </h3>
              <p className="mt-0.5 text-sm text-clay font-semibold uppercase tracking-[0.12em]">
                {step.focusSkill}
              </p>
            </div>
          </div>

          <p className={`mt-4 text-foreground/75 leading-relaxed ${flip ? "" : "lg:text-right"}`}>
            {step.whyThisStep}
          </p>

          <div className={`mt-5 ${flip ? "" : "lg:text-right"}`}>
            {isLocked ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-foreground/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] border border-border">
                <Lock className="h-3 w-3" /> Coming soon
              </span>
            ) : (
              <Link
                to="/journey/$slug"
                params={{ slug: step.personSlug! }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5 hover:gap-2.5 transition-all"
              >
                Open {step.personName.split(" ")[0]}'s journey
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
