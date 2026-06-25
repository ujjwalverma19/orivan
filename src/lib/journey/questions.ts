import type {
  Person,
  TimelineEntry,
  Failure,
  Decision,
  Insight,
  Skill,
  Book,
  Influence,
  Quote,
} from "@/content/schemas";

export type JumpTarget =
  | "timeline"
  | "library"
  | "failures"
  | "videos"
  | "decisions"
  | "lessons"
  | "skills";

export type AnswerSegment =
  | { kind: "text"; value: string }
  | { kind: "yearLink"; year: string; label: string };

export type EvidenceItem = {
  label: string;
  body: string;
  jumpTo?: JumpTarget;
  year?: string;
};

export type GeneratedQuestion = {
  id: string;
  question: string;
  /** One short paragraph answering the question in human voice. */
  answer: AnswerSegment[];
  evidence: EvidenceItem[];
  lessons: string[];
  timelineRefs: { year: string; title: string }[];
  takeaway: string;
  jumpLinks: JumpTarget[];
};

/* ----------------------------- tokenization ----------------------------- */

const STOPWORDS = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "of",
  "to",
  "in",
  "on",
  "for",
  "with",
  "by",
  "from",
  "as",
  "at",
  "it",
  "its",
  "this",
  "that",
  "these",
  "those",
  "what",
  "why",
  "how",
  "did",
  "do",
  "does",
  "done",
  "had",
  "has",
  "have",
  "make",
  "made",
  "make",
  "makes",
  "you",
  "your",
  "their",
  "they",
  "them",
  "his",
  "her",
  "he",
  "she",
  "i",
  "we",
  "us",
  "our",
  "most",
  "more",
  "than",
  "then",
  "into",
  "over",
  "out",
  "up",
  "down",
  "about",
  "can",
  "could",
  "would",
  "should",
  "will",
  "just",
  "only",
  "also",
  "very",
  "really",
  "such",
  "like",
  "not",
  "no",
  "yes",
  "still",
  "ever",
  "never",
  "much",
  "many",
  "some",
  "any",
  "one",
  "two",
  "three",
  "first",
  "last",
  "best",
  "big",
  "biggest",
  "great",
  "greatest",
  "truly",
  "truely",
  "think",
  "thinks",
  "thinking",
  "life",
  "journey",
  "career",
  "said",
  "say",
  "says",
  "people",
  "person",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));
}

function nameTokens(person: Person): Set<string> {
  return new Set(person.name.toLowerCase().split(/\s+/));
}

function score(queryTokens: string[], targetText: string, exclude: Set<string>): number {
  if (!targetText) return 0;
  const target = tokenize(targetText).filter((t) => !exclude.has(t));
  if (target.length === 0) return 0;
  const targetSet = new Set(target);
  let overlap = 0;
  for (const q of queryTokens) if (targetSet.has(q)) overlap += 1;
  return overlap;
}

/* ----------------------------- answer pieces ----------------------------- */

const YEAR_RE = /\b(1[5-9]\d{2}|20\d{2})\b/g;

function toSegments(text: string, validYears: Set<string>): AnswerSegment[] {
  const out: AnswerSegment[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(YEAR_RE)) {
    const idx = match.index ?? 0;
    if (idx > lastIndex) out.push({ kind: "text", value: text.slice(lastIndex, idx) });
    const year = match[0];
    if (validYears.has(year)) {
      out.push({ kind: "yearLink", year, label: year });
    } else {
      out.push({ kind: "text", value: year });
    }
    lastIndex = idx + year.length;
  }
  if (lastIndex < text.length) out.push({ kind: "text", value: text.slice(lastIndex) });
  return out;
}

/* ----------------------------- matchers ----------------------------- */

function topTimeline(person: Person, qTokens: string[], excl: Set<string>, n = 2): TimelineEntry[] {
  return [...person.timeline]
    .map((t) => ({
      t,
      s: score(qTokens, `${t.title} ${t.story} ${t.challenge} ${t.lesson}`, excl),
    }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, n)
    .map((x) => x.t);
}

function topFailures(person: Person, qTokens: string[], excl: Set<string>, n = 1): Failure[] {
  return [...person.failures]
    .map((f) => ({
      f,
      s: score(qTokens, `${f.title} ${f.context} ${f.recovery} ${f.lesson}`, excl),
    }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, n)
    .map((x) => x.f);
}

function topDecisions(person: Person, qTokens: string[], excl: Set<string>, n = 1): Decision[] {
  return [...person.decisions]
    .map((d) => ({ d, s: score(qTokens, `${d.title} ${d.why} ${d.outcome} ${d.impact}`, excl) }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, n)
    .map((x) => x.d);
}

function topInsights(person: Person, qTokens: string[], excl: Set<string>, n = 1): Insight[] {
  return [...person.insights]
    .map((i) => ({ i, s: score(qTokens, `${i.audience} ${i.lesson} ${i.takeaway}`, excl) }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, n)
    .map((x) => x.i);
}

function topSkills(person: Person, qTokens: string[], excl: Set<string>, n = 1): Skill[] {
  return [...person.skills]
    .map((s) => ({ s, sc: score(qTokens, `${s.name} ${s.description} ${s.developed}`, excl) }))
    .sort((a, b) => b.sc - a.sc)
    .filter((x) => x.sc > 0)
    .slice(0, n)
    .map((x) => x.s);
}

/* ----------------------------- answer builder ----------------------------- */

function buildSemanticAnswer(person: Person, question: string): GeneratedQuestion {
  const excl = nameTokens(person);
  const qTokens = tokenize(question).filter((t) => !excl.has(t));
  const validYears = new Set(person.timeline.map((t) => t.year));

  const tls = topTimeline(person, qTokens, excl, 2);
  const fails = topFailures(person, qTokens, excl, 1);
  const decs = topDecisions(person, qTokens, excl, 1);
  const ins = topInsights(person, qTokens, excl, 1);
  const sks = topSkills(person, qTokens, excl, 1);

  const evidence: EvidenceItem[] = [];
  const lessons: string[] = [];
  const timelineRefs: { year: string; title: string }[] = [];
  const jumps = new Set<JumpTarget>();
  let answerText = "";

  if (tls[0]) {
    const t = tls[0];
    answerText = t.story;
    timelineRefs.push({ year: t.year, title: t.title });
    evidence.push({
      label: `${t.year} · ${t.title}`,
      body: t.challenge,
      year: t.year,
      jumpTo: "timeline",
    });
    lessons.push(t.lesson);
    jumps.add("timeline");
  }
  if (tls[1]) {
    timelineRefs.push({ year: tls[1].year, title: tls[1].title });
    evidence.push({
      label: `${tls[1].year} · ${tls[1].title}`,
      body: tls[1].story,
      year: tls[1].year,
      jumpTo: "timeline",
    });
    lessons.push(tls[1].lesson);
  }
  if (fails[0]) {
    const f = fails[0];
    if (!answerText) answerText = `${f.context} ${f.recovery}`;
    evidence.push({ label: `Setback · ${f.title}`, body: f.recovery, jumpTo: "failures" });
    lessons.push(f.lesson);
    jumps.add("failures");
  }
  if (decs[0]) {
    const d = decs[0];
    if (!answerText) answerText = `${d.why} ${d.outcome}`;
    evidence.push({
      label: `Decision · ${d.title}`,
      body: `${d.why} Outcome: ${d.outcome}`,
      jumpTo: "decisions",
    });
    lessons.push(d.impact);
    jumps.add("decisions");
  }
  if (sks[0]) {
    const s = sks[0];
    evidence.push({ label: `Skill · ${s.name}`, body: s.developed, jumpTo: "skills" });
  }

  let takeaway = "";
  if (ins[0]) {
    takeaway = ins[0].takeaway;
    jumps.add("lessons");
  } else if (lessons[0]) {
    takeaway = lessons[0];
  } else if (person.quotes[0]) {
    takeaway = `"${person.quotes[0].text}"`;
  }

  // Fallback: nothing matched
  if (!answerText && evidence.length === 0) {
    return emptyAnswer(question);
  }
  if (!answerText) answerText = evidence[0]?.body ?? "";

  return {
    id: slugifyQ(question),
    question,
    answer: toSegments(answerText, validYears),
    evidence,
    lessons: dedupe(lessons).slice(0, 3),
    timelineRefs,
    takeaway,
    jumpLinks: Array.from(jumps),
  };
}

function emptyAnswer(question: string): GeneratedQuestion {
  return {
    id: slugifyQ(question),
    question,
    answer: [
      { kind: "text", value: "We haven't mapped enough of this journey to answer that yet." },
    ],
    evidence: [],
    lessons: [],
    timelineRefs: [],
    takeaway: "",
    jumpLinks: [],
  };
}

function slugifyQ(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

function dedupe<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/* ----------------------------- structured questions ----------------------------- */

function biggestFailure(person: Person): GeneratedQuestion | null {
  const f = person.failures[0];
  if (!f) return null;
  const validYears = new Set(person.timeline.map((t) => t.year));
  return {
    id: "biggest-failure",
    question: `What was ${person.name.split(" ")[0]}'s biggest setback?`,
    answer: toSegments(`${f.context} ${f.recovery}`, validYears),
    evidence: person.failures.slice(0, 2).map((x) => ({
      label: x.title,
      body: x.recovery,
      jumpTo: "failures" as JumpTarget,
    })),
    lessons: person.failures.slice(0, 2).map((x) => x.lesson),
    timelineRefs: [],
    takeaway: f.lesson,
    jumpLinks: ["failures"],
  };
}

function shapingBooks(person: Person): GeneratedQuestion | null {
  if (person.books.length === 0) return null;
  const titles = person.books
    .slice(0, 3)
    .map((b) => `${b.title} by ${b.author}`)
    .join(", ");
  return {
    id: "books",
    question: `What books shaped ${person.name.split(" ")[0]}?`,
    answer: [{ kind: "text", value: `A handful of books kept coming back: ${titles}.` }],
    evidence: person.books.slice(0, 4).map((b) => ({
      label: `${b.title} — ${b.author}`,
      body: b.note,
      jumpTo: "library" as JumpTarget,
    })),
    lessons: [],
    timelineRefs: [],
    takeaway: person.books[0]?.note ?? "",
    jumpLinks: ["library"],
  };
}

function whoInfluenced(person: Person): GeneratedQuestion | null {
  if (person.influences.length === 0) return null;
  const names = person.influences
    .slice(0, 4)
    .map((i) => i.name)
    .join(", ");
  return {
    id: "influences",
    question: `Who influenced ${person.name.split(" ")[0]} most?`,
    answer: [{ kind: "text", value: `The people they studied closely include ${names}.` }],
    evidence: person.influences
      .slice(0, 4)
      .map((i) => ({ label: i.name, body: i.note, jumpTo: "library" as JumpTarget })),
    lessons: [],
    timelineRefs: [],
    takeaway: person.influences[0]?.note ?? "",
    jumpLinks: ["library"],
  };
}

function hardestDecision(person: Person): GeneratedQuestion | null {
  const d =
    person.decisions.find((x) => x.risk === "Extreme") ??
    person.decisions.find((x) => x.risk === "High") ??
    person.decisions[0];
  if (!d) return null;
  const validYears = new Set(person.timeline.map((t) => t.year));
  return {
    id: "hardest-decision",
    question: `What was the hardest decision ${person.name.split(" ")[0]} made?`,
    answer: toSegments(`${d.why} ${d.outcome}`, validYears),
    evidence: person.decisions.slice(0, 3).map((x) => ({
      label: `${x.title} · Risk ${x.risk}`,
      body: x.impact,
      jumpTo: "decisions" as JumpTarget,
    })),
    lessons: [d.impact],
    timelineRefs: [],
    takeaway: d.impact,
    jumpLinks: ["decisions"],
  };
}

function whatSkillsMattered(person: Person): GeneratedQuestion | null {
  if (person.skills.length === 0) return null;
  const top = person.skills
    .slice(0, 3)
    .map((s) => s.name)
    .join(", ");
  return {
    id: "skills",
    question: `What skills set ${person.name.split(" ")[0]} apart?`,
    answer: [{ kind: "text", value: `The skills that compounded over a lifetime: ${top}.` }],
    evidence: person.skills
      .slice(0, 4)
      .map((s) => ({ label: s.name, body: s.developed, jumpTo: "skills" as JumpTarget })),
    lessons: [],
    timelineRefs: [],
    takeaway: person.skills[0]?.developed ?? "",
    jumpLinks: ["skills"],
  };
}

function turningPoint(person: Person): GeneratedQuestion | null {
  // Pick the middle-ish timeline entry with longest story
  if (person.timeline.length < 2) return null;
  const validYears = new Set(person.timeline.map((t) => t.year));
  const sorted = [...person.timeline].sort(
    (a, b) => (b.story?.length ?? 0) - (a.story?.length ?? 0),
  );
  const t = sorted[0];
  return {
    id: "turning-point",
    question: `What changed everything for ${person.name.split(" ")[0]}?`,
    answer: toSegments(t.story, validYears),
    evidence: [
      { label: `${t.year} · ${t.title}`, body: t.challenge, year: t.year, jumpTo: "timeline" },
    ],
    lessons: [t.lesson],
    timelineRefs: [{ year: t.year, title: t.title }],
    takeaway: t.lesson,
    jumpLinks: ["timeline"],
  };
}

function ownWords(person: Person): GeneratedQuestion | null {
  if (person.quotes.length === 0) return null;
  const q = person.quotes[0];
  return {
    id: "own-words",
    question: `What did ${person.name.split(" ")[0]} say about their work?`,
    answer: [{ kind: "text", value: `"${q.text}"${q.context ? ` — ${q.context}` : ""}` }],
    evidence: person.quotes.slice(0, 4).map((x) => ({
      label: x.year ? `Quote · ${x.year}` : "Quote",
      body: `"${x.text}"`,
    })),
    lessons: [],
    timelineRefs: [],
    takeaway: person.quotes[0]?.text ?? "",
    jumpLinks: ["videos"],
  };
}

/* ----------------------------- public API ----------------------------- */

export function generateQuestions(person: Person): GeneratedQuestion[] {
  const auto: (GeneratedQuestion | null)[] = [
    turningPoint(person),
    biggestFailure(person),
    hardestDecision(person),
    whatSkillsMattered(person),
    shapingBooks(person),
    whoInfluenced(person),
    ownWords(person),
  ];

  const curated = (person.sampleQuestions ?? []).map((q) => buildSemanticAnswer(person, q));

  const all: GeneratedQuestion[] = [];
  const seen = new Set<string>();

  // Interleave curated first (they reflect editorial voice), then structured.
  for (const q of [...curated, ...auto]) {
    if (!q) continue;
    if (seen.has(q.id)) continue;
    seen.add(q.id);
    all.push(q);
  }

  // Cap at 10, ensure minimum 6 by allowing all available.
  return all.slice(0, 10);
}
