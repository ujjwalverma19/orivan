import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "tufte-beautiful-evidence-highlights",
    personSlug: "edward-tufte",
    title: "Edward Tufte: Beautiful Evidence (Highlights)",
    kind: "Talk",
    year: "2012",
    length: "37 min",
    youtubeId: "Th_1azZA2OY",
    description:
      "Highlights from Tufte's flagship one-day workshop — the design principles that govern serious quantitative communication.",
    tags: ["dataviz", "workshop"],
    keyTakeaways: [
      "Show the data above all else.",
      "Minimize chartjunk; maximize information density.",
      "Sparklines turn tables into living indicators.",
    ],
    difficulty: "Beginner",
    topics: ["design", "analytics"],
  },
  {
    id: "tufte-thinking-eye-ssac15",
    personSlug: "edward-tufte",
    title: "The Thinking Eye — MIT Sloan Sports Analytics",
    kind: "Talk",
    year: "2015",
    length: "57 min",
    youtubeId: "mvrNemNoQ5M",
    description:
      "Tufte's SSAC keynote applying information design principles to sports analytics dashboards and broadcast graphics.",
    tags: ["dataviz", "sports", "analytics"],
    keyTakeaways: [
      "Comparison is the engine of insight; design to enable it.",
      "Small multiples beat single giant charts.",
      "The thinking eye is the goal; UI should get out of its way.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "analytics"],
  },
  {
    id: "tufte-state-keynote",
    personSlug: "edward-tufte",
    title: "Data Visualization Keynote — Tech@State",
    kind: "Keynote",
    year: "2012",
    length: "1h 10m",
    youtubeId: "g9Y4SxgfGCg",
    description:
      "Tufte's State Department keynote — public-sector applications of evidence-based information design.",
    tags: ["public-sector", "dataviz"],
    keyTakeaways: [
      "Civic data needs civic-quality visuals.",
      "Dashboards must compress, not expand, decision time.",
      "Public information design is a democratic instrument.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "public-sector"],
  },
  {
    id: "tufte-principles-lecture",
    personSlug: "edward-tufte",
    title: "Edward Tufte's Principles — Lecture",
    kind: "Talk",
    year: "2014",
    length: "27 min",
    youtubeId: "UuL6wPGTJZQ",
    description:
      "Concise lecture summarizing Tufte's core principles for honest, dense, evidence-bearing graphics.",
    tags: ["principles", "dataviz"],
    keyTakeaways: [
      "Show comparisons and contrasts.",
      "Provide causality, mechanism, structure.",
      "Documentation is part of the graphic, not separate.",
    ],
    difficulty: "Beginner",
    topics: ["design"],
  },
  {
    id: "tufte-explained",
    personSlug: "edward-tufte",
    title: "Who Is Edward Tufte In Data Visualization?",
    kind: "Documentary",
    year: "2024",
    length: "11 min",
    youtubeId: "YPd4QTq6dH0",
    description:
      "Compact explainer for newcomers — Tufte's biography, books, and influence on modern analytics tooling.",
    tags: ["biography", "explainer"],
    keyTakeaways: [
      "Tufte defined the standards modern dashboards still aspire to.",
      "Self-publishing was a craft decision, not a financial one.",
      "His workshops shaped tens of thousands of careers.",
    ],
    difficulty: "Beginner",
    topics: ["design"],
  },
];

export default videos;
