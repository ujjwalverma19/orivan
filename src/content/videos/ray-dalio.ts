import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "dalio-economic-machine",
    personSlug: "ray-dalio",
    title: "How the Economic Machine Works",
    kind: "Documentary",
    year: "2013",
    length: "30 min",
    youtubeId: "PHe0bXAIuk0",
    description:
      "Dalio's animated explainer that distills the entire global economy into three forces — productivity growth, short-term debt cycle, and long-term debt cycle.",
    tags: ["macro", "debt-cycles", "economics"],
    keyTakeaways: [
      "The economy is the sum of transactions; understand the transactions and you understand the machine.",
      "Credit is the largest and most volatile component — and the one most often misunderstood.",
      "Long-term debt cycles end with deleveraging; how policymakers handle it defines the decade.",
    ],
    difficulty: "Beginner",
    topics: ["macro", "investing"],
  },
  {
    id: "dalio-principles-success",
    personSlug: "ray-dalio",
    title: "Principles for Success (Animated, 30 min)",
    kind: "Documentary",
    year: "2019",
    length: "30 min",
    youtubeId: "B9XGUpQZY38",
    description:
      "Eight-episode animated series condensing 'Principles' into a single half-hour run through Dalio's life arc and decision rules.",
    tags: ["principles", "life-work", "decision-making"],
    keyTakeaways: [
      "Your pain plus reflection equals progress.",
      "Embrace reality and deal with it.",
      "Five-step process: goals, problems, diagnosis, design, do.",
    ],
    difficulty: "Beginner",
    topics: ["leadership", "decision-making"],
  },
  {
    id: "dalio-ted-idea-meritocracy",
    personSlug: "ray-dalio",
    title: "How to Build a Company Where the Best Ideas Win",
    kind: "Talk",
    year: "2017",
    length: "16 min",
    youtubeId: "HXbsVbFAczg",
    description:
      "Dalio's TED talk introducing radical transparency, the Dot Collector, and believability-weighted decision-making to a mass audience.",
    tags: ["culture", "transparency", "decision-making"],
    keyTakeaways: [
      "Polite opacity hides the disagreements that matter most.",
      "Weight contributors by their track record on the specific question.",
      "Tools, not slogans, are how culture actually changes.",
    ],
    difficulty: "Beginner",
    topics: ["leadership", "culture"],
  },
  {
    id: "dalio-lex-fridman",
    personSlug: "ray-dalio",
    title: "Money, Power, and the Collapse of Empires — Lex Fridman Podcast",
    kind: "Interview",
    year: "2021",
    length: "2h 13m",
    youtubeId: "TISMidxdZoc",
    description:
      "Long-form conversation on the rise and fall of reserve currencies, US-China dynamics, and what indicators Dalio actually watches.",
    tags: ["geopolitics", "macro", "history"],
    keyTakeaways: [
      "Reserve currency status outlasts the empire that created it — by decades.",
      "Internal disorder, not external rivals, ends most great powers.",
      "Read 500 years of history before forming a 5-year view.",
    ],
    difficulty: "Advanced",
    topics: ["macro", "investing"],
  },
  {
    id: "dalio-big-debt-crises",
    personSlug: "ray-dalio",
    title: "Navigating Big Debt Crises",
    kind: "Talk",
    year: "2018",
    length: "47 min",
    youtubeId: "0-obY4ZtLxE",
    description:
      "Dalio walks through the mechanics from his free book — the archetypal deflationary and inflationary debt cycles dissected step by step.",
    tags: ["debt", "macro", "crisis"],
    keyTakeaways: [
      "There are only a handful of policy levers in a debt crisis; learn all of them.",
      "Beautiful deleveragings balance the four levers; ugly ones don't.",
      "The next crisis rhymes with one of the last 48; know which one.",
    ],
    difficulty: "Advanced",
    topics: ["macro", "investing"],
  },
];

export default videos;
