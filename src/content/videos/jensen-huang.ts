import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "huang-stanford-gsb-view-top",
    personSlug: "jensen-huang",
    title: "Jensen Huang at Stanford GSB — View From The Top",
    kind: "Interview",
    year: "2024",
    length: "58 min",
    youtubeId: "lXLBTBBil2U",
    description:
      "Huang's Stanford GSB conversation on resilience, the early NVIDIA crises, and why he hopes his employees suffer.",
    tags: ["resilience", "leadership", "founder-CEO"],
    keyTakeaways: [
      "Suffering is the curriculum — not a punishment.",
      "Resilience matters more than intelligence.",
      "Our company is thirty days from going out of business — every day.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "resilience"],
  },
  {
    id: "huang-acquired-podcast",
    personSlug: "jensen-huang",
    title: "Jensen Huang — 2024 SIEPR Economic Summit Keynote",
    kind: "Talk",
    year: "2024",
    length: "47 min",
    youtubeId: "cEg8cOx7UZk",
    description:
      "Huang's keynote at the Stanford Institute for Economic Policy Research on the economics of accelerated computing.",
    tags: ["AI", "strategy", "computing"],
    keyTakeaways: [
      "Accelerated computing is a once-in-a-generation platform shift.",
      "Don't be afraid to be misunderstood for a long time.",
      "Platform bets look indefensible for a decade.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "strategy"],
  },
  {
    id: "huang-no-priv-engr-talk",
    personSlug: "jensen-huang",
    title: "U.S. Leadership in AI with Jensen Huang",
    kind: "Interview",
    year: "2024",
    length: "1h 04m",
    youtubeId: "tofBqR5N1RI",
    description:
      "Huang in conversation on the geopolitics of AI, export controls, and what it takes to maintain American leadership in compute.",
    tags: ["AI", "geopolitics", "strategy"],
    keyTakeaways: [
      "Compute is now a strategic national resource.",
      "Allocation discipline becomes strategy when demand inverts overnight.",
      "Show up in person for the customers who will define your next decade.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "policy"],
  },
  {
    id: "huang-gtc-2024-keynote",
    personSlug: "jensen-huang",
    title: "Jensen Huang at Stanford — On Pace and Resilience",
    kind: "Interview",
    year: "2023",
    length: "9 min",
    youtubeId: "LtXoB-YxJhM",
    description:
      "A short, viral Stanford clip on why people with high expectations have low resilience — and why hardship matters.",
    tags: ["resilience", "leadership"],
    keyTakeaways: [
      "People with really high expectations have very low resilience.",
      "Hardship is the unfair head start the unprivileged have.",
      "The willingness to do something even though you don't know it'll work is what made us.",
    ],
    difficulty: "Beginner",
    topics: ["resilience", "leadership"],
  },
  {
    id: "huang-caltech-commencement",
    personSlug: "jensen-huang",
    title: "NVIDIA CEO Jensen Huang's Caltech 2024 Commencement",
    kind: "Speech",
    year: "2024",
    length: "20 min",
    youtubeId: "53iujxhGRsE",
    description:
      "Huang's Caltech commencement address on pain, perseverance, and the importance of hard problems.",
    tags: ["commencement", "perseverance"],
    keyTakeaways: [
      "Run, don't walk, to the hard problems.",
      "Pain and suffering build character that nothing else can.",
      "The willingness to do uncertain things compounds over a career.",
    ],
    difficulty: "Beginner",
    topics: ["leadership", "career"],
  },
];

export default videos;
