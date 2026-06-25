import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "federer-dartmouth-commencement-2024",
    personSlug: "roger-federer",
    title: "Dartmouth Commencement Address",
    kind: "Speech",
    year: "2024",
    length: "26 min",
    youtubeId: "pqWUuYTcG-o",
    description:
      "Federer's celebrated commencement speech at Dartmouth — three tennis lessons that apply to every career.",
    tags: ["speech", "career", "philosophy"],
    keyTakeaways: [
      "Effortless is a myth — effort gets you on the court.",
      "You'll lose 46% of the points; only the next one matters.",
      "Life is bigger than the thing you're best at.",
    ],
    difficulty: "Beginner",
    topics: ["career", "philosophy"],
  },
  {
    id: "federer-60-minutes-interview",
    personSlug: "roger-federer",
    title: "60 Minutes Australia — Roger Federer Exclusive",
    kind: "Interview",
    year: "2018",
    length: "27 min",
    youtubeId: "yNNuTva0VSI",
    description:
      "Long-form interview with Federer at home in Switzerland on family, the tour, and his approach to longevity.",
    tags: ["biography", "family", "longevity"],
    keyTakeaways: [
      "Long careers are family endeavors, not individual ones.",
      "Choose the schedule that protects the body.",
      "Brand follows behavior, not the other way around.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "career"],
  },
  {
    id: "federer-trevor-noah-2018",
    personSlug: "roger-federer",
    title: "The Daily Show — Trevor Noah Interviews Roger Federer",
    kind: "Interview",
    year: "2018",
    length: "11 min",
    youtubeId: "W6rKB_UxONE",
    description:
      "Federer with Trevor Noah on the rivalry with Nadal, life after tennis, and what keeps him motivated at 36.",
    tags: ["interview", "rivalry", "personality"],
    keyTakeaways: [
      "Rivalry is a generous gift — it raises everyone's ceiling.",
      "The hardest opponent late in a career is internal motivation.",
      "Authenticity travels better than any marketing plan.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "personality"],
  },
  {
    id: "federer-laver-cup-retirement-2022",
    personSlug: "roger-federer",
    title: "Laver Cup 2022 — Final Match and Retirement",
    kind: "Documentary",
    year: "2022",
    length: "12 min",
    youtubeId: "Z0X_gvnyNi4",
    description:
      "Federer's final professional match — doubles with Rafael Nadal at the Laver Cup in London, ending a 24-year career.",
    tags: ["retirement", "tennis", "rivalry"],
    keyTakeaways: [
      "End on your terms when you can.",
      "Rivalry becomes friendship across a long enough career.",
      "How you leave is part of the legacy.",
    ],
    difficulty: "Beginner",
    topics: ["retirement", "legacy"],
  },
  {
    id: "federer-wimbledon-2017-victory-interview",
    personSlug: "roger-federer",
    title: "Wimbledon 2017 Final — Press Conference",
    kind: "Interview",
    year: "2017",
    length: "20 min",
    youtubeId: "rnfWgrUoZiI",
    description:
      "Federer's press conference after winning a record eighth Wimbledon at 35, post-surgery comeback in full effect.",
    tags: ["tennis", "comeback", "wimbledon"],
    keyTakeaways: [
      "Six months off can reset what daily grinding cannot.",
      "Larger racket head plus new coaching = late-career upgrade.",
      "Believe the comeback is possible before others do.",
    ],
    difficulty: "Beginner",
    topics: ["tennis", "comeback"],
  },
];

export default videos;
