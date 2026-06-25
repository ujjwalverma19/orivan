import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "munger-psychology-misjudgment",
    personSlug: "charlie-munger",
    title: "The Psychology of Human Misjudgement",
    kind: "Speech",
    year: "1995",
    length: "1h 17m",
    youtubeId: "pqzcCfUglws",
    description:
      "Munger's foundational Harvard talk cataloging the cognitive biases that lead smart people to bad decisions — the most important behavioral text of his career.",
    tags: ["psychology", "biases", "decision-making", "mental-models"],
    keyTakeaways: [
      "Twenty-five cognitive biases compound silently inside every organization.",
      "Incentives explain more behavior than character does.",
      "Invert the problem: ask what would make it fail first.",
    ],
    difficulty: "Intermediate",
    topics: ["psychology", "decision-making"],
  },
  {
    id: "munger-daily-journal-2017",
    personSlug: "charlie-munger",
    title: "Daily Journal Annual Meeting — Full Q&A",
    kind: "Interview",
    year: "2021",
    length: "2h 18m",
    youtubeId: "ypazIe5OVaA",
    description:
      "Munger's solo annual Q&A at Daily Journal — markets, China, BYD, succession, and the discipline of saying no.",
    tags: ["investing", "markets", "patience"],
    keyTakeaways: [
      "Sit on cash until the obvious opportunity arrives.",
      "Concentration beats diversification once your conviction is high.",
      "Bear markets are the cost of admission to long-run equity returns.",
    ],
    difficulty: "Advanced",
    topics: ["investing", "decision-making"],
  },
  {
    id: "munger-usc-law-2007",
    personSlug: "charlie-munger",
    title: "USC Law School Commencement Address",
    kind: "Speech",
    year: "2007",
    length: "37 min",
    youtubeId: "8kxv-BKMUzA",
    description:
      "Munger's most-quoted commencement speech — on lifelong learning, avoiding envy, and the discipline of staying inside your circle of competence.",
    tags: ["wisdom", "career", "self-management"],
    keyTakeaways: [
      "Acquire worldly wisdom through cross-disciplinary reading.",
      "Avoid envy, resentment, and self-pity — they destroy compounders.",
      "Marry the best person who is convenient to find who will have you.",
    ],
    difficulty: "Beginner",
    topics: ["wisdom", "career"],
  },
  {
    id: "munger-cnbc-becky-quick-2023",
    personSlug: "charlie-munger",
    title: "Final CNBC Interview with Becky Quick",
    kind: "Interview",
    year: "2023",
    length: "27 min",
    youtubeId: "H5Oom5Rjp_Y",
    description:
      "Munger's final televised interview, recorded weeks before his death at 99 — frank reflections on Berkshire, China, and a long life.",
    tags: ["biography", "investing", "reflection"],
    keyTakeaways: [
      "The big money is in the waiting, not the buying or selling.",
      "Berkshire's edge was patience plus the willingness to be quiet.",
      "Stay learning to the end — the alternative is decline.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "investing"],
  },
  {
    id: "munger-caltech-2008",
    personSlug: "charlie-munger",
    title: "Caltech DuBridge Distinguished Lecture",
    kind: "Talk",
    year: "2008",
    length: "1h 09m",
    youtubeId: "4ibabROYccs",
    description:
      "Munger at Caltech discussing the latticework of mental models that drives Berkshire's investment decisions.",
    tags: ["mental-models", "science", "investing"],
    keyTakeaways: [
      "Borrow the big ideas from every major discipline.",
      "Specialists miss what generalists catch at the intersections.",
      "Discipline is doing what you should even when you'd rather not.",
    ],
    difficulty: "Intermediate",
    topics: ["mental-models", "science"],
  },
];

export default videos;
