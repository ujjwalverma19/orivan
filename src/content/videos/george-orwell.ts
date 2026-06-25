import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "orwell-life-in-pictures",
    personSlug: "george-orwell",
    title: "George Orwell: A Life in Pictures",
    kind: "Documentary",
    year: "2003",
    length: "1h 28m",
    youtubeId: "s6txpumkY5I",
    description:
      "BBC docudrama using Orwell's own words and archival imagery to trace his life from Burma to Jura.",
    tags: ["biography", "bbc"],
    keyTakeaways: [
      "His prose was shaped by direct contact with empire, war, and poverty.",
      "Spain was the pivot point of his politics.",
      "Jura's cold accelerated the tuberculosis that killed him.",
    ],
    difficulty: "Beginner",
    topics: ["literature", "history"],
  },
  {
    id: "orwell-final-warning",
    personSlug: "george-orwell",
    title: "1984: George Orwell's Final Warning — BBC",
    kind: "Documentary",
    year: "2017",
    length: "26 min",
    youtubeId: "HFF1DVvr28k",
    description:
      "BBC explainer connecting 1984's themes to modern surveillance, data, and propaganda regimes.",
    tags: ["1984", "surveillance"],
    keyTakeaways: [
      "Big Brother described tools that surveillance states now actually have.",
      "Newspeak anticipated modern political euphemism.",
      "Doublethink describes media consumption more than 1948 propaganda did.",
    ],
    difficulty: "Beginner",
    topics: ["politics", "literature"],
  },
  {
    id: "orwell-warning-to-mankind",
    personSlug: "george-orwell",
    title: "George Orwell — A Warning to Mankind",
    kind: "Documentary",
    year: "2020",
    length: "1h 22m",
    youtubeId: "yy-yWNvcSfA",
    description:
      "Long-form biographical documentary tracing the political and literary arc that led to Animal Farm and 1984.",
    tags: ["biography", "totalitarianism"],
    keyTakeaways: [
      "His anti-totalitarianism was forged by Stalinist betrayal in Spain.",
      "Animal Farm and 1984 were companion arguments, not standalone novels.",
      "Self-honesty was the working method behind both books.",
    ],
    difficulty: "Intermediate",
    topics: ["literature", "history"],
  },
  {
    id: "orwell-why-i-write",
    personSlug: "george-orwell",
    title: "'Why I Write' — Full Essay (Audiobook)",
    kind: "Speech",
    year: "2022",
    length: "25 min",
    youtubeId: "ceyD9tdrL-I",
    description:
      "Unabridged reading of Orwell's essay on his four motives for writing — sheer egoism, aesthetic enthusiasm, historical impulse, political purpose.",
    tags: ["why-i-write", "essay"],
    keyTakeaways: [
      "Every writer has the same four motives in different proportions.",
      "Good prose is transparent, like a window pane.",
      "Political purpose is unavoidable; the question is which politics.",
    ],
    difficulty: "Beginner",
    topics: ["writing", "literature"],
  },
  {
    id: "orwell-politics-english-language",
    personSlug: "george-orwell",
    title: "Write What You Mean — 'Politics and the English Language'",
    kind: "Talk",
    year: "2021",
    length: "13 min",
    youtubeId: "_zMJZ622bjE",
    description:
      "Concise walkthrough of Orwell's six rules for clear, honest political writing — still the canonical writing-class essay.",
    tags: ["writing", "language", "politics"],
    keyTakeaways: [
      "Never use a long word where a short one will do.",
      "If it is possible to cut a word out, always cut it out.",
      "Break any of these rules sooner than say anything outright barbarous.",
    ],
    difficulty: "Beginner",
    topics: ["writing"],
  },
];

export default videos;
