import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "bezos-princeton-2010",
    personSlug: "jeff-bezos",
    title: "We Are What We Choose — Princeton Commencement",
    kind: "Speech",
    year: "2010",
    length: "20 min",
    youtubeId: "vBmavNoChZc",
    description:
      "Bezos's most personal speech — on the difference between gifts and choices, and how he decided to quit a Wall Street job to sell books online.",
    tags: ["mindset", "career", "choices", "regret-minimization"],
    keyTakeaways: [
      "Cleverness is a gift; kindness is a choice.",
      "Use a regret-minimization framework for hard decisions.",
      "In the end, we are what we choose.",
    ],
    difficulty: "Beginner",
    topics: ["mindset", "career", "decisions"],
  },
  {
    id: "bezos-charlie-rose-1999",
    personSlug: "jeff-bezos",
    title: "Amazon's Bet on the Web — Charlie Rose Interview",
    kind: "Interview",
    year: "1999",
    length: "55 min",
    youtubeId: "JAF3HCt0dUs",
    description:
      "A young Bezos explains the long-term thesis behind Amazon, why books were the right starting category, and how he thinks about competition.",
    tags: ["strategy", "long-term", "internet"],
    keyTakeaways: [
      "Pick a market that's growing on its own.",
      "Talk about decades when competitors are talking about quarters.",
      "Customer obsession outlasts competitor obsession.",
    ],
    difficulty: "Intermediate",
    topics: ["strategy", "internet", "long-term"],
  },
  {
    id: "bezos-day-one-letter-readout",
    personSlug: "jeff-bezos",
    title: "Day 1 Mentality — Bezos on Amazon Culture",
    kind: "Talk",
    year: "2017",
    length: "12 min",
    youtubeId: "fTwXS2H_iJo",
    description:
      "Bezos at an internal Q&A explaining what Day 2 looks like and how to keep a large company operating like a startup.",
    tags: ["culture", "leadership", "operating-model"],
    keyTakeaways: [
      "Day 2 is stasis, then irrelevance, then death.",
      "Resist proxies — measure outcomes, not process.",
      "Embrace external trends quickly.",
      "High-velocity decision-making is its own moat.",
    ],
    difficulty: "Advanced",
    topics: ["culture", "leadership"],
  },
  {
    id: "bezos-summit-fireside-2017",
    personSlug: "jeff-bezos",
    title: "Summit LA — A Conversation with Jeff Bezos",
    kind: "Interview",
    year: "2017",
    length: "1h 02m",
    youtubeId: "sjkTBUQgeH0",
    description:
      "Wide-ranging conversation on space, family, the Washington Post, and how he allocates time across his ventures.",
    tags: ["leadership", "space", "media"],
    keyTakeaways: [
      "Two-pizza teams: keep ownership small enough to ship.",
      "Most decisions are two-way doors — make them fast.",
      "Disagree and commit when you're outvoted.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "decisions"],
  },
  {
    id: "bezos-economic-club-2018",
    personSlug: "jeff-bezos",
    title: "Economic Club of Washington — David Rubenstein",
    kind: "Interview",
    year: "2018",
    length: "55 min",
    youtubeId: "xv_vkA0jsyo",
    description:
      "Rubenstein walks Bezos through the Amazon origin story, family, philanthropy, and Blue Origin.",
    tags: ["origin-story", "philanthropy", "space"],
    keyTakeaways: [
      "Lifetime regrets are inactions, not actions.",
      "Wealth is a stewardship problem.",
      "Build for missions you'd give a hundred years to.",
    ],
    difficulty: "Beginner",
    topics: ["origin-story", "philanthropy"],
  },
];

export default videos;
