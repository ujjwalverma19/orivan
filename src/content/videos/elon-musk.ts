import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "musk-ted-2022",
    personSlug: "elon-musk",
    title: "Elon Musk on Twitter, Tesla and How His Brain Works",
    kind: "Interview",
    year: "2022",
    length: "1h 17m",
    youtubeId: "YRvf00NooN8",
    description:
      "TED's Chris Anderson sits down with Musk for a candid conversation on first-principles thinking, Tesla, and Twitter.",
    tags: ["first-principles", "leadership", "strategy"],
    keyTakeaways: [
      "Reason from physics, not analogy.",
      "Question every requirement before optimizing it.",
      "Move fast in the direction of the strongest signal.",
    ],
    difficulty: "Beginner",
    topics: ["first-principles", "strategy"],
  },
  {
    id: "musk-starbase-tour",
    personSlug: "elon-musk",
    title: "Starbase Tour with Everyday Astronaut",
    kind: "Interview",
    year: "2021",
    length: "2h 16m",
    youtubeId: "SA8ZBJWo73E",
    description:
      "Walking through Starbase with Tim Dodd — Musk explains Starship engineering decisions in real time.",
    tags: ["engineering", "first-principles", "spacex"],
    keyTakeaways: [
      "The best part is no part.",
      "Delete before you optimize.",
      "Manufacturing is harder than designing.",
      "Make the requirements less dumb.",
    ],
    difficulty: "Advanced",
    topics: ["engineering", "manufacturing"],
  },
  {
    id: "musk-joe-rogan-1169",
    personSlug: "elon-musk",
    title: "Joe Rogan Experience #1169",
    kind: "Interview",
    year: "2018",
    length: "2h 37m",
    youtubeId: "ycPr5-27vSI",
    description:
      "The viral long-form interview where Musk talks AI risk, Neuralink, the simulation, and his own intensity.",
    tags: ["ai", "neuralink", "future"],
    keyTakeaways: [
      "AI is the most consequential technology in development.",
      "Being a founder is mostly chewing glass.",
      "Optimism is a choice you make daily.",
    ],
    difficulty: "Intermediate",
    topics: ["ai", "future"],
  },
  {
    id: "musk-investor-day-2023",
    personSlug: "elon-musk",
    title: "Tesla Investor Day — Sustainable Energy Future",
    kind: "Keynote",
    year: "2023",
    length: "12 min",
    youtubeId: "C16i8nsIKJ8",
    description:
      "Highlights from Tesla's 2023 Investor Day where Musk lays out the math for a fully sustainable-energy economy.",
    tags: ["energy", "strategy", "scale"],
    keyTakeaways: [
      "Plan for the asymptote, not the next quarter.",
      "Manufacturing is the product.",
      "Vertical integration unlocks cost curves nobody else can hit.",
    ],
    difficulty: "Advanced",
    topics: ["strategy", "energy"],
  },
];

export default videos;
