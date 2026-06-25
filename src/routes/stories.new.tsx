import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Eye, Plus, Trash2, PenSquare } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { AtlasBackdrop } from "@/components/landing/AtlasBackdrop";
import { addStory, slugify } from "@/lib/stories/store";
import { StorySchema } from "@/content/schemas";

export const Route = createFileRoute("/stories/new")({
  head: () => ({
    meta: [
      { title: "Submit your story — Orivan" },
      {
        name: "description",
        content:
          "Add your journey to Orivan. A few honest milestones, the failures you learned from, the lessons you'd give your past self.",
      },
    ],
  }),
  component: NewStoryPage,
});

type DraftMilestone = { year: string; title: string; story: string; lesson: string };
type DraftFailure = { title: string; lesson: string };

type Draft = {
  title: string;
  authorName: string;
  role: string;
  country: string;
  summary: string;
  tagsRaw: string;
  milestones: DraftMilestone[];
  failures: DraftFailure[];
};

const EMPTY_MILESTONE: DraftMilestone = { year: "", title: "", story: "", lesson: "" };
const EMPTY_FAILURE: DraftFailure = { title: "", lesson: "" };

const INITIAL_DRAFT: Draft = {
  title: "",
  authorName: "",
  role: "",
  country: "",
  summary: "",
  tagsRaw: "",
  milestones: [{ ...EMPTY_MILESTONE }],
  failures: [{ ...EMPTY_FAILURE }],
};

function NewStoryPage() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<Draft>(INITIAL_DRAFT);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [error, setError] = useState<string | null>(null);

  const parsedDraft = useMemo(() => toStoryInput(draft), [draft]);

  function publish() {
    setError(null);
    const candidate = toStoryInput(draft);
    const result = StorySchema.safeParse({
      ...candidate,
      slug: slugify(candidate.title) || "story",
      status: "published",
      createdAt: new Date().toISOString(),
    });
    if (!result.success) {
      const first = result.error.issues[0];
      setError(
        first
          ? `${first.path.join(".") || "form"}: ${first.message}`
          : "Please complete the required fields.",
      );
      return;
    }
    const saved = addStory(candidate);
    navigate({ to: "/stories/$slug", params: { slug: saved.slug } });
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AtlasBackdrop />
      <div className="relative">
        <Navbar />

        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 2xl:px-12 pt-4">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All stories
          </Link>
        </div>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 2xl:px-12">
            <div className="inline-flex items-center gap-2 text-clay">
              <PenSquare className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Submit a story
              </span>
            </div>
            <h1 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              Tell your journey.
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/70">
              No account needed for this MVP — your story is saved in this browser. A few honest
              milestones and one failure with a lesson is enough.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <ModeToggle mode={mode} setMode={setMode} />
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
              <div>
                {mode === "edit" ? (
                  <EditForm draft={draft} setDraft={setDraft} />
                ) : (
                  <Preview draft={parsedDraft} />
                )}

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setMode(mode === "edit" ? "preview" : "edit")}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 h-11 text-sm font-semibold hover:bg-cream/60 transition"
                  >
                    <Eye className="h-4 w-4" />
                    {mode === "edit" ? "Preview" : "Back to editing"}
                  </button>
                  <button
                    type="button"
                    onClick={publish}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 h-11 text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition"
                  >
                    Publish story
                  </button>
                </div>
              </div>

              <aside className="rounded-[1.5rem] border border-border bg-card/70 backdrop-blur p-6 h-fit lg:sticky lg:top-28">
                <h3 className="font-display text-lg text-foreground">A good story has:</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/75 leading-relaxed">
                  <li>· A specific moment, not a general claim.</li>
                  <li>· One thing you got wrong, with what you learned.</li>
                  <li>· The lesson you'd give your past self.</li>
                </ul>
                <p className="mt-4 text-xs text-foreground/55">
                  Stories submitted now live in your browser. When accounts arrive, you'll be able
                  to claim them.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function ModeToggle({
  mode,
  setMode,
}: {
  mode: "edit" | "preview";
  setMode: (m: "edit" | "preview") => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-border bg-card p-1">
      {(["edit", "preview"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          className={`rounded-full px-4 h-9 text-xs font-semibold uppercase tracking-[0.18em] transition ${
            mode === m
              ? "bg-foreground text-background"
              : "text-foreground/65 hover:text-foreground"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

function EditForm({ draft, setDraft }: { draft: Draft; setDraft: (d: Draft) => void }) {
  const update = <K extends keyof Draft>(key: K, value: Draft[K]) =>
    setDraft({ ...draft, [key]: value });

  const updateMilestone = (i: number, patch: Partial<DraftMilestone>) => {
    const next = draft.milestones.map((m, idx) => (idx === i ? { ...m, ...patch } : m));
    update("milestones", next);
  };
  const updateFailure = (i: number, patch: Partial<DraftFailure>) => {
    const next = draft.failures.map((f, idx) => (idx === i ? { ...f, ...patch } : f));
    update("failures", next);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
      <Section title="The basics">
        <Field label="Story title" required>
          <input
            type="text"
            value={draft.title}
            onChange={(e) => update("title", e.target.value)}
            maxLength={160}
            placeholder="The quiet pivot that saved my agency"
            className="input"
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name" required>
            <input
              type="text"
              value={draft.authorName}
              onChange={(e) => update("authorName", e.target.value)}
              maxLength={80}
              placeholder="Maya R."
              className="input"
            />
          </Field>
          <Field label="Role" required>
            <input
              type="text"
              value={draft.role}
              onChange={(e) => update("role", e.target.value)}
              maxLength={120}
              placeholder="Agency Founder"
              className="input"
            />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Country (optional)">
            <input
              type="text"
              value={draft.country}
              onChange={(e) => update("country", e.target.value)}
              maxLength={80}
              placeholder="Portugal"
              className="input"
            />
          </Field>
          <Field label="Tags (comma-separated)">
            <input
              type="text"
              value={draft.tagsRaw}
              onChange={(e) => update("tagsRaw", e.target.value)}
              placeholder="pivot, agency, pricing"
              className="input"
            />
          </Field>
        </div>
        <Field label="One-line summary" required>
          <textarea
            value={draft.summary}
            onChange={(e) => update("summary", e.target.value)}
            maxLength={600}
            placeholder="What this story is about, in one sentence."
            rows={3}
            className="input"
          />
        </Field>
      </Section>

      <Section
        title="Milestones"
        action={
          <button
            type="button"
            onClick={() => update("milestones", [...draft.milestones, { ...EMPTY_MILESTONE }])}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 h-8 text-xs font-semibold hover:bg-cream/60"
          >
            <Plus className="h-3.5 w-3.5" /> Add milestone
          </button>
        }
      >
        {draft.milestones.map((m, i) => (
          <div
            key={i}
            className="rounded-[1.25rem] border border-border bg-card p-5 space-y-3 relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                Milestone {i + 1}
              </span>
              {draft.milestones.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    update(
                      "milestones",
                      draft.milestones.filter((_, idx) => idx !== i),
                    )
                  }
                  className="text-foreground/40 hover:text-destructive transition"
                  aria-label="Remove milestone"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-[120px_1fr] gap-3">
              <Field label="Year">
                <input
                  type="text"
                  value={m.year}
                  onChange={(e) => updateMilestone(i, { year: e.target.value })}
                  maxLength={20}
                  placeholder="2024"
                  className="input"
                />
              </Field>
              <Field label="Title" required>
                <input
                  type="text"
                  value={m.title}
                  onChange={(e) => updateMilestone(i, { title: e.target.value })}
                  maxLength={160}
                  placeholder="The turning point"
                  className="input"
                />
              </Field>
            </div>
            <Field label="What happened" required>
              <textarea
                value={m.story}
                onChange={(e) => updateMilestone(i, { story: e.target.value })}
                maxLength={2000}
                rows={3}
                placeholder="Tell it in plain language."
                className="input"
              />
            </Field>
            <Field label="Lesson (optional)">
              <input
                type="text"
                value={m.lesson}
                onChange={(e) => updateMilestone(i, { lesson: e.target.value })}
                maxLength={500}
                placeholder="What you'd tell your past self."
                className="input"
              />
            </Field>
          </div>
        ))}
      </Section>

      <Section
        title="Failures & lessons"
        action={
          <button
            type="button"
            onClick={() => update("failures", [...draft.failures, { ...EMPTY_FAILURE }])}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 h-8 text-xs font-semibold hover:bg-cream/60"
          >
            <Plus className="h-3.5 w-3.5" /> Add failure
          </button>
        }
      >
        {draft.failures.map((f, i) => (
          <div
            key={i}
            className="rounded-[1.25rem] border border-border bg-card p-5 space-y-3 relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                Failure {i + 1}
              </span>
              {draft.failures.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    update(
                      "failures",
                      draft.failures.filter((_, idx) => idx !== i),
                    )
                  }
                  className="text-foreground/40 hover:text-destructive transition"
                  aria-label="Remove failure"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <Field label="What didn't work">
              <input
                type="text"
                value={f.title}
                onChange={(e) => updateFailure(i, { title: e.target.value })}
                maxLength={160}
                placeholder="Hired before I had a process"
                className="input"
              />
            </Field>
            <Field label="Lesson">
              <input
                type="text"
                value={f.lesson}
                onChange={(e) => updateFailure(i, { lesson: e.target.value })}
                maxLength={500}
                placeholder="What you'd do differently."
                className="input"
              />
            </Field>
          </div>
        ))}
      </Section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-card, white);
          border: 1px solid hsl(var(--border));
          border-radius: 0.875rem;
          padding: 0.7rem 0.95rem;
          font-size: 0.95rem;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px color-mix(in oklab, hsl(var(--primary)) 18%, transparent);
        }
      `}</style>
    </form>
  );
}

function Section({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-foreground">{title}</h2>
        {action}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60 mb-1.5">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function Preview({ draft }: { draft: ReturnType<typeof toStoryInput> }) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-card p-8 lg:p-10">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay">Preview</div>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl text-foreground leading-tight">
        {draft.title || "Your story title"}
      </h2>
      <div className="mt-3 text-sm text-foreground/65">
        {(draft.authorName || "Your name") + " · " + (draft.role || "Your role")}
        {draft.country ? ` · ${draft.country}` : ""}
      </div>
      <p className="mt-4 text-foreground/80 leading-relaxed">
        {draft.summary || "Your one-line summary will appear here."}
      </p>
      {draft.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {draft.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-cream/70 border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {draft.milestones.length > 0 && (
        <div className="mt-8">
          <h3 className="font-display text-xl text-foreground">Milestones</h3>
          <ol className="mt-4 space-y-5 border-l-2 border-border pl-5">
            {draft.milestones.map((m, i) => (
              <li key={i}>
                {m.year && (
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                    {m.year}
                  </div>
                )}
                <div className="font-display text-lg text-foreground">{m.title}</div>
                <p className="mt-1 text-sm text-foreground/75 leading-relaxed whitespace-pre-line">
                  {m.story}
                </p>
                {m.lesson && (
                  <div className="mt-2 text-sm text-foreground/70">
                    <span className="font-semibold text-foreground">Lesson:</span> {m.lesson}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
      {draft.failures.length > 0 && (
        <div className="mt-8">
          <h3 className="font-display text-xl text-foreground">Failures</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {draft.failures.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border bg-cream/40 p-4">
                <div className="font-display text-base text-foreground">{f.title}</div>
                <p className="mt-1 text-sm text-foreground/75">
                  <span className="font-semibold text-foreground">Lesson:</span> {f.lesson}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function toStoryInput(draft: Draft) {
  return {
    title: draft.title.trim(),
    authorName: draft.authorName.trim(),
    role: draft.role.trim(),
    country: draft.country.trim() || undefined,
    summary: draft.summary.trim(),
    tags: draft.tagsRaw
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 12),
    milestones: draft.milestones
      .map((m) => ({
        year: m.year.trim() || undefined,
        title: m.title.trim(),
        story: m.story.trim(),
        lesson: m.lesson.trim() || undefined,
      }))
      .filter((m) => m.title && m.story),
    failures: draft.failures
      .map((f) => ({
        title: f.title.trim(),
        lesson: f.lesson.trim(),
      }))
      .filter((f) => f.title && f.lesson),
  };
}
