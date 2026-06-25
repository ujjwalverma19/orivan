import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "buffett-becoming-trailer-2017",
    personSlug: "warren-buffett",
    title: "Becoming Warren Buffett — HBO Trailer",
    kind: "Documentary",
    year: "2017",
    length: "2 min",
    youtubeId: "jXg0V2tyhXo",
    description:
      "Official HBO trailer for the documentary portrait of Buffett's life, his daily routine in Omaha, and the people who shaped him.",
    tags: ["biography", "documentary", "buffett"],
    keyTakeaways: [
      "Compounding works on knowledge before money.",
      "Stay in your circle of competence.",
      "Quiet routines outlast loud strategies.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "investing"],
  },
  {
    id: "buffett-cnbc-archive-1997",
    personSlug: "warren-buffett",
    title: "CNBC — Warren Buffett on Investing",
    kind: "Interview",
    year: "1997",
    length: "55 min",
    youtubeId: "HFMxB5o18H0",
    description:
      "Classic Buffett interview on intrinsic value, owner mindset, and why temperament matters more than IQ.",
    tags: ["investing", "temperament", "value"],
    keyTakeaways: [
      "Buy businesses, not stocks.",
      "Be greedy when others are fearful.",
      "Temperament is more important than IQ in investing.",
    ],
    difficulty: "Intermediate",
    topics: ["investing", "value"],
  },
  {
    id: "buffett-columbia-1985",
    personSlug: "warren-buffett",
    title: "Columbia Business School — Q&A with Warren Buffett",
    kind: "Talk",
    year: "1985",
    length: "1h 14m",
    youtubeId: "s_wcAh7NGnE",
    description:
      "Buffett answers MBA students' questions on Berkshire Hathaway, Graham, and intrinsic value.",
    tags: ["education", "investing", "graham"],
    keyTakeaways: [
      "Mr. Market is your servant, not your master.",
      "Margin of safety beats forecasting.",
      "Concentration over diversification when you have conviction.",
    ],
    difficulty: "Advanced",
    topics: ["investing", "education"],
  },
  {
    id: "buffett-gates-2017",
    personSlug: "warren-buffett",
    title: "Buffett and Gates at Columbia — Keeping America Great",
    kind: "Interview",
    year: "2017",
    length: "1h",
    youtubeId: "6AiojvXHXnY",
    description:
      "Wide-ranging conversation with Bill Gates on capitalism, philanthropy, and the long view of American prosperity.",
    tags: ["philanthropy", "economy", "long-term"],
    keyTakeaways: [
      "Compounded productivity is the long story.",
      "Philanthropy works best when paired with operating discipline.",
      "Optimism is rational.",
    ],
    difficulty: "Intermediate",
    topics: ["philanthropy", "long-term"],
  },
  {
    id: "buffett-uni-florida-1998",
    personSlug: "warren-buffett",
    title: "University of Florida — Buffett MBA Talk",
    kind: "Talk",
    year: "1998",
    length: "1h 30m",
    youtubeId: "2a9Lx9J8uSs",
    description:
      "One of his most quoted business-school talks: on circle of competence, opportunity cost, and choosing the right peers.",
    tags: ["investing", "career", "education"],
    keyTakeaways: [
      "Hire for integrity, energy, intelligence — in that order.",
      "Marry up. Choose your peers with care.",
      "The ovarian lottery shaped your starting line.",
    ],
    difficulty: "Beginner",
    topics: ["investing", "career"],
  },
];

export default videos;
