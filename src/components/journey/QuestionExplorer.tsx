import { useEffect, useMemo, useState } from "react";
import {
  X,
  MessageCircleQuestion,
  ArrowUpRight,
  Sparkle,
  BookOpen,
  Mountain,
  Target,
  Lightbulb,
  Film,
} from "lucide-react";
import type { Person } from "@/content/schemas";
import {
  generateQuestions,
  type GeneratedQuestion,
  type JumpTarget,
} from "@/lib/journey/questions";

const JUMP_META: Record<
  JumpTarget,
  { label: string; href: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  timeline: { label: "Timeline", href: "#timeline", Icon: Mountain },
  library: { label: "Books & influences", href: "#library", Icon: BookOpen },
  failures: { label: "Failures", href: "#failures", Icon: Mountain },
  videos: { label: "Videos", href: "#videos", Icon: Film },
  decisions: { label: "Key decisions", href: "#decisions", Icon: Target },
  lessons: { label: "Lessons", href: "#lessons", Icon: Lightbulb },
  skills: { label: "Skills", href: "#skills", Icon: Sparkle },
};

function scrollToYear(year: string) {
  const el = document.querySelector<HTMLElement>(`[data-timeline-year="${year}"]`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-clay", "ring-offset-2", "ring-offset-background");
    setTimeout(
      () => el.classList.remove("ring-2", "ring-clay", "ring-offset-2", "ring-offset-background"),
      1800,
    );
  } else {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function QuestionExplorer({ person }: { person: Person }) {
  const questions = useMemo(() => generateQuestions(person), [person]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(
    () => questions.find((q) => q.id === activeId) ?? null,
    [questions, activeId],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="ask" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-clay">
            <MessageCircleQuestion className="h-4 w-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              Questions People Ask
            </span>
          </div>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl font-medium leading-[1.05] text-foreground">
            Questions people ask about this journey.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            The questions most people have after studying this life. Tap one — every answer is built
            from {person.name}'s own timeline, decisions, books, and lessons on this page.
          </p>
        </div>

        {questions.length === 0 ? (
          <div className="mt-10 rounded-[1.5rem] border border-border bg-card p-8 text-center text-foreground/70">
            We haven't mapped enough of this journey yet.
          </div>
        ) : (
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {questions.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(q.id)}
                  className="group w-full text-left rounded-2xl border border-border bg-card/85 backdrop-blur px-5 py-4 flex items-start gap-3 hover:-translate-y-1 hover:shadow-[0_18px_38px_-20px_rgba(0,0,0,0.22)] hover:border-foreground/20 transition-all duration-300"
                >
                  <span className="mt-0.5 grid place-items-center h-7 w-7 rounded-full bg-[color:var(--color-butter-soft)] border border-border shrink-0">
                    <MessageCircleQuestion className="h-3.5 w-3.5 text-foreground/70" />
                  </span>
                  <span className="flex-1 min-w-0 font-display text-base sm:text-lg leading-snug text-foreground">
                    {q.question}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-foreground/80 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {active ? <AnswerModal q={active} person={person} onClose={() => setActiveId(null)} /> : null}
    </section>
  );
}

function AnswerModal({
  q,
  person,
  onClose,
}: {
  q: GeneratedQuestion;
  person: Person;
  onClose: () => void;
}) {
  const isEmpty =
    q.answer.length === 1 &&
    q.answer[0].kind === "text" &&
    q.answer[0].value.startsWith("We haven't mapped");

  const handleJump = (target: JumpTarget) => {
    onClose();
    // Defer so the modal close animation does not fight scroll
    setTimeout(() => scrollToHash(JUMP_META[target].href), 80);
  };

  const handleYear = (year: string) => {
    onClose();
    setTimeout(() => scrollToYear(year), 80);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={q.question}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-md"
      />

      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[1.75rem] border border-foreground/10 bg-card/95 backdrop-blur-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.4)] animate-scale-in">
        <div
          className="absolute -top-20 -right-16 h-48 w-48 rounded-full bg-primary/30 blur-3xl pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[color:var(--color-sage)]/25 blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="relative p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-clay">
                <MessageCircleQuestion className="h-3.5 w-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Question about {person.name}
                </span>
              </div>
              <h3 className="font-display mt-3 text-2xl sm:text-3xl leading-[1.15] text-foreground">
                {q.question}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 grid place-items-center h-9 w-9 rounded-full border border-border bg-card hover:bg-secondary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Short answer */}
          <div className="mt-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
              Short answer
            </div>
            <p className="mt-2 text-foreground/85 text-[1.02rem] leading-relaxed">
              {q.answer.map((seg, i) =>
                seg.kind === "text" ? (
                  <span key={i}>{seg.value}</span>
                ) : (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleYear(seg.year)}
                    className="font-display font-medium text-foreground underline decoration-clay/40 underline-offset-4 hover:decoration-clay hover:text-clay transition-colors"
                  >
                    {seg.label}
                  </button>
                ),
              )}
            </p>
          </div>

          {/* Evidence */}
          {q.evidence.length > 0 && (
            <div className="mt-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Supporting evidence
              </div>
              <ul className="mt-3 space-y-2.5">
                {q.evidence.map((e, i) => (
                  <li key={i} className="rounded-xl border border-border bg-secondary/60 px-4 py-3">
                    <button
                      type="button"
                      onClick={() =>
                        e.year ? handleYear(e.year) : e.jumpTo ? handleJump(e.jumpTo) : undefined
                      }
                      disabled={!e.year && !e.jumpTo}
                      className="text-left w-full disabled:cursor-default group"
                    >
                      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                        <span>{e.label}</span>
                        {(e.year || e.jumpTo) && (
                          <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground/80 leading-relaxed">{e.body}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lessons */}
          {q.lessons.length > 0 && (
            <div className="mt-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Related lessons
              </div>
              <ul className="mt-3 space-y-2">
                {q.lessons.map((l, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="mt-2 h-1 w-1 rounded-full bg-clay shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timeline refs */}
          {q.timelineRefs.length > 0 && (
            <div className="mt-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                Related moments
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {q.timelineRefs.map((t) => (
                  <button
                    key={`${t.year}-${t.title}`}
                    type="button"
                    onClick={() => handleYear(t.year)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-foreground/30 hover:bg-secondary transition-colors"
                  >
                    <span className="font-display text-foreground">{t.year}</span>
                    <span className="text-foreground/65">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Takeaway */}
          {!isEmpty && q.takeaway ? (
            <div className="mt-7 rounded-2xl border border-border bg-[color:var(--color-butter-soft)] px-5 py-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                Key takeaway
              </div>
              <p className="mt-1.5 font-display text-base sm:text-lg leading-snug text-foreground">
                {q.takeaway}
              </p>
            </div>
          ) : null}

          {/* Jump links */}
          {q.jumpLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {q.jumpLinks.map((j) => {
                const meta = JUMP_META[j];
                const Icon = meta.Icon;
                return (
                  <button
                    key={j}
                    type="button"
                    onClick={() => handleJump(j)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Icon className="h-3.5 w-3.5" /> Jump to {meta.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
