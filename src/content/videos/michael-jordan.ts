import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "jordan-last-dance-trailer",
    personSlug: "michael-jordan",
    title: "The Last Dance — ESPN Documentary Trailer",
    kind: "Documentary",
    year: "2020",
    length: "2 min",
    youtubeId: "N9Z9JtNcCWY",
    description:
      "Trailer for ESPN and Netflix's 10-part documentary on Jordan's final Chicago Bulls season.",
    tags: ["basketball", "documentary", "bulls"],
    keyTakeaways: [
      "Dynasties are built and unbuilt in slow motion.",
      "Leadership intensity has a price.",
    ],
    difficulty: "Beginner",
    topics: ["basketball", "biography"],
  },
  {
    id: "jordan-hall-of-fame-2009",
    personSlug: "michael-jordan",
    title: "Hall of Fame Induction Speech",
    kind: "Speech",
    year: "2009",
    length: "23 min",
    youtubeId: "XLzBMGXfK4c",
    description:
      "Jordan's basketball Hall of Fame induction — combative, personal, and revealing about the chips he carried for decades.",
    tags: ["leadership", "psychology", "career"],
    keyTakeaways: [
      "Hold onto slights only long enough to use them.",
      "Public acknowledgment is rarely separable from private grudge.",
    ],
    difficulty: "Intermediate",
    topics: ["career", "psychology"],
  },
  {
    id: "jordan-oprah-2005",
    personSlug: "michael-jordan",
    title: "The Oprah Interview — On Failure",
    kind: "Interview",
    year: "2005",
    length: "44 min",
    youtubeId: "I36Q6b6YL00",
    description:
      "Oprah interviews Jordan on his career, his father's influence, and how failure shaped his work ethic.",
    tags: ["psychology", "failure", "father"],
    keyTakeaways: [
      "Failure is the precondition of success, not its opposite.",
      "The mindset is the training.",
    ],
    difficulty: "Beginner",
    topics: ["psychology", "failure"],
  },
  {
    id: "jordan-1997-flu-game-highlights",
    personSlug: "michael-jordan",
    title: "Flu Game — 1997 NBA Finals Game 5",
    kind: "Documentary",
    year: "1997",
    length: "10 min",
    youtubeId: "BQRTInWWMf8",
    description:
      "Highlight reel and analysis from Jordan's iconic Flu Game performance against the Utah Jazz.",
    tags: ["basketball", "finals", "highlights"],
    keyTakeaways: [
      "Performance under physical adversity becomes career mythology.",
      "Champions show up when the body won't.",
    ],
    difficulty: "Beginner",
    topics: ["basketball", "highlights"],
  },
];

export default videos;
