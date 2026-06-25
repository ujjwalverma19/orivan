import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "kurien-amul-story",
    personSlug: "verghese-kurien",
    title: "How Amul Got Its Name — Branding Story",
    kind: "Documentary",
    year: "2020",
    length: "12 min",
    youtubeId: "AIFFdvH1S58",
    description:
      "Short documentary on the birth of the Amul brand — and Kurien's bet that farmer cooperatives could build a beloved consumer name.",
    tags: ["amul", "brand", "cooperative"],
    keyTakeaways: [
      "Producer ownership is the deepest competitive moat.",
      "A great brand can speak with wit, even when it represents farmers.",
      "Naming is a strategic act — not a marketing afterthought.",
    ],
    difficulty: "Beginner",
    topics: ["entrepreneurship", "brand"],
  },
  {
    id: "kurien-rendezvous-shekhar-gupta",
    personSlug: "verghese-kurien",
    title: "Verghese Kurien on the Success of Amul",
    kind: "Interview",
    year: "2010",
    length: "23 min",
    youtubeId: "X0PGkL0T1-c",
    description:
      "Kurien reflects on what made Amul work — and on the delicensing battles that nearly broke the cooperative model.",
    tags: ["amul", "policy", "leadership"],
    keyTakeaways: [
      "Battles forge institutions; comfort hollows them out.",
      "Defend producer ownership against every wave of policy fashion.",
      "Conviction without daily defence does not survive.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "policy"],
  },
  {
    id: "kurien-anand-pattern-doc",
    personSlug: "verghese-kurien",
    title: "In Conversation with Dr. Verghese Kurien",
    kind: "Interview",
    year: "2008",
    length: "29 min",
    youtubeId: "zs79JCZfTZg",
    description:
      "An extended conversation with the father of the White Revolution on the Anand pattern, Operation Flood, and the politics behind both.",
    tags: ["anand-pattern", "operation-flood", "cooperative"],
    keyTakeaways: [
      "The Anand pattern is about ownership, not just structure.",
      "Foreign aid is only acceptable if it ends the need for foreign aid.",
      "Spend a night with the people you intend to serve.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "policy"],
  },
  {
    id: "kurien-iim-lecture",
    personSlug: "verghese-kurien",
    title: "Dr. Verghese Kurien at IIM Ahmedabad",
    kind: "Talk",
    year: "2011",
    length: "47 min",
    youtubeId: "iTB2yf_zdgc",
    description:
      "Kurien addresses an IIM Ahmedabad board meeting on the lessons of building cooperatives at national scale.",
    tags: ["leadership", "management", "institution-building"],
    keyTakeaways: [
      "Build institutions that outlast the founder.",
      "Hire managers who will live where the work is.",
      "Talent that won't come to the village must be grown locally.",
    ],
    difficulty: "Advanced",
    topics: ["leadership", "management"],
  },
  {
    id: "kurien-bbc-interview",
    personSlug: "verghese-kurien",
    title: "In Memory: Verghese Kurien — Tribute Film",
    kind: "Documentary",
    year: "2012",
    length: "38 min",
    youtubeId: "q33-uL6J3gE",
    description:
      "A tribute film made after his death, drawing on archival interviews with Kurien and Amul colleagues.",
    tags: ["biography", "amul", "legacy"],
    keyTakeaways: [
      "A life's work is measured by what continues after you stop.",
      "Institutions outlast founders only if founders let them.",
      "The hardest engineering problems are organisational.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "leadership"],
  },
];

export default videos;
