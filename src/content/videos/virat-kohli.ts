import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "kohli-interview-2019",
    personSlug: "virat-kohli",
    title: "Open with Virat Kohli — Star Sports",
    kind: "Interview",
    year: "2019",
    length: "45 min",
    youtubeId: "t_3wf65ctwk",
    description:
      "Long-form interview with Kohli on fitness, captaincy, and the next phase of Indian cricket.",
    tags: ["captaincy", "cricket", "interview"],
    keyTakeaways: [
      "Captaincy compounds fitness expectations in the dressing room.",
      "Discipline is the multiplier on talent.",
    ],
    difficulty: "Intermediate",
    topics: ["cricket", "captaincy"],
  },
  {
    id: "kohli-graham-bensinger",
    personSlug: "virat-kohli",
    title: "In Depth with Graham Bensinger",
    kind: "Interview",
    year: "2022",
    length: "55 min",
    youtubeId: "1rW0tAvpGl0",
    description:
      "Long-form interview with Kohli on career, marriage, and balancing media attention.",
    tags: ["interview", "personal", "fitness"],
    keyTakeaways: [
      "Marriage and family can be a fitness intervention.",
      "Time off the game protects time on it.",
    ],
    difficulty: "Beginner",
    topics: ["cricket", "personal"],
  },
  {
    id: "kohli-batting-masterclass",
    personSlug: "virat-kohli",
    title: "Virat Kohli — Batting Masterclass",
    kind: "Talk",
    year: "2021",
    length: "20 min",
    youtubeId: "m8u-18Q0s7I",
    description:
      "Kohli walks through his batting setup, shot selection, and game-management philosophy.",
    tags: ["cricket", "batting", "technique"],
    keyTakeaways: [
      "Game-management is more important than shot-making.",
      "Match awareness is built by hundreds of hours of mid-pitch conversation.",
    ],
    difficulty: "Intermediate",
    topics: ["cricket", "technique"],
  },
  {
    id: "kohli-100s-2023",
    personSlug: "virat-kohli",
    title: "Virat Kohli — Every ODI Century",
    kind: "Documentary",
    year: "2023",
    length: "15 min",
    youtubeId: "joci2rLAIU0",
    description:
      "Highlight reel of every Kohli ODI century, including his record 50th vs New Zealand.",
    tags: ["cricket", "highlights", "odi"],
    keyTakeaways: [
      "Chases require purpose-built innings construction.",
      "Records arrive through accumulation, not spectacle.",
    ],
    difficulty: "Beginner",
    topics: ["cricket", "highlights"],
  },
];

export default videos;
