import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "murthy-infosys-story-iim",
    personSlug: "narayana-murthy",
    title: "Narayana Murthy on Why He Doesn't Believe in Work-Life Balance",
    kind: "Interview",
    year: "2023",
    length: "29 min",
    youtubeId: "5SlUAQgp69E",
    description:
      "Murthy explains the 70-hour-work-week comment in his own words — and the generational context that produced it.",
    tags: ["work-ethic", "culture", "controversy"],
    keyTakeaways: [
      "Confidence comes from delivering, not from announcing.",
      "Generational advice doesn't always transfer; update the framing.",
      "Performance leads to recognition; humility preserves it.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "culture"],
  },
  {
    id: "murthy-better-india-talk",
    personSlug: "narayana-murthy",
    title: "Rohan Murty Interviews His Father N.R. Narayana Murthy",
    kind: "Interview",
    year: "2021",
    length: "54 min",
    youtubeId: "iK7wEWTAl14",
    description:
      "A rare son-to-father conversation on starting up, sacrifices, and the values that built Infosys.",
    tags: ["infosys", "values", "biography"],
    keyTakeaways: [
      "Family sacrifice is part of the founder's hidden cost.",
      "The softest pillow is a clear conscience.",
      "Love your job, but never fall in love with your company.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "leadership"],
  },
  {
    id: "murthy-rendezvous-shekhar",
    personSlug: "narayana-murthy",
    title: "N.R. Narayana Murthy — Legends with Arnab Goswami",
    kind: "Interview",
    year: "2022",
    length: "47 min",
    youtubeId: "TlTIF04UM-U",
    description:
      "A long-form interview spanning the Bulgaria jail, the founding of Infosys, succession, and his return as chairman.",
    tags: ["biography", "infosys", "succession"],
    keyTakeaways: [
      "Ideologies are stories. Reality is the place those stories get tested.",
      "Succession is the founder's last and most important product.",
      "Frugality is leverage.",
    ],
    difficulty: "Intermediate",
    topics: ["biography", "leadership"],
  },
  {
    id: "murthy-iim-bangalore-convocation",
    personSlug: "narayana-murthy",
    title: "Entrepreneurship and Compassionate Capitalism — Keynote",
    kind: "Speech",
    year: "2018",
    length: "58 min",
    youtubeId: "jbSb4map60o",
    description:
      "Murthy's keynote at AIMA on what compassionate capitalism means in an Indian context — and why it is the only durable form.",
    tags: ["capitalism", "values", "ethics"],
    keyTakeaways: [
      "Capitalism without compassion does not survive politically.",
      "Generate wealth, but treat every stakeholder with dignity.",
      "Adopt the harder standard before it's required of you.",
    ],
    difficulty: "Advanced",
    topics: ["leadership", "ethics"],
  },
  {
    id: "murthy-compassionate-capitalism",
    personSlug: "narayana-murthy",
    title: "Compassionate Capitalism — Narayana Murthy",
    kind: "Talk",
    year: "2019",
    length: "41 min",
    youtubeId: "7zBPbGUjiHQ",
    description:
      "Murthy on the philosophical foundations of compassionate capitalism — and why it is the only path that lasts.",
    tags: ["values", "capitalism", "leadership"],
    keyTakeaways: [
      "Money has never been a motivator; the joy is in creating something.",
      "Performance leads to recognition; recognition demands humility.",
      "Generate wealth legally and ethically — and share it.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "ethics"],
  },
];

export default videos;
