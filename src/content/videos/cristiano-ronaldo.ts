import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "ronaldo-piers-morgan-2022",
    personSlug: "cristiano-ronaldo",
    title: "Piers Morgan Uncensored — The Cristiano Ronaldo Interview",
    kind: "Interview",
    year: "2022",
    length: "1h 30m",
    youtubeId: "Jk9uJRMvBIA",
    description:
      "Cristiano Ronaldo's most-watched long-form interview, covering his split with Manchester United and his views on the modern game.",
    tags: ["interview", "football", "career"],
    keyTakeaways: [
      "Speaking publicly is a tool — and a risk.",
      "Standards in elite sport require institutional buy-in.",
    ],
    difficulty: "Intermediate",
    topics: ["football", "career"],
  },
  {
    id: "ronaldo-mentality-documentary",
    personSlug: "cristiano-ronaldo",
    title: "Ronaldo — Documentary (Trailer)",
    kind: "Documentary",
    year: "2015",
    length: "2 min",
    youtubeId: "PKTMIc6Zaww",
    description:
      "Anthony Wonke's intimate documentary trailer on Ronaldo's training, family, and life off the pitch.",
    tags: ["documentary", "family", "training"],
    keyTakeaways: [
      "Routines outperform talent over decades.",
      "Family structure is part of athletic infrastructure.",
    ],
    difficulty: "Beginner",
    topics: ["football", "biography"],
  },
  {
    id: "ronaldo-jonathan-ross-2018",
    personSlug: "cristiano-ronaldo",
    title: "The Jonathan Ross Show — Cristiano Ronaldo",
    kind: "Interview",
    year: "2018",
    length: "22 min",
    youtubeId: "Nm67SpDDdOY",
    description: "Ronaldo on his training methods, charity work, and life as a global icon.",
    tags: ["interview", "training"],
    keyTakeaways: [
      "Discipline is the consistent variable across decades.",
      "Public figures choose what to leave private.",
    ],
    difficulty: "Beginner",
    topics: ["football", "discipline"],
  },
  {
    id: "ronaldo-champions-league-best",
    personSlug: "cristiano-ronaldo",
    title: "Champions League — Cristiano Ronaldo's Greatest Goals",
    kind: "Documentary",
    year: "2020",
    length: "12 min",
    youtubeId: "3JQkveP0UL4",
    description:
      "UEFA highlight reel of Ronaldo's defining Champions League moments across Manchester United, Real Madrid, and Juventus.",
    tags: ["highlights", "champions-league", "football"],
    keyTakeaways: [
      "Big-stage records are accumulated, not given.",
      "Adaptability across clubs widens a legacy.",
    ],
    difficulty: "Beginner",
    topics: ["football", "highlights"],
  },
];

export default videos;
