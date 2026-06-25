import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "sachin-documentary-trailer",
    personSlug: "sachin-tendulkar",
    title: "Sachin: A Billion Dreams — Trailer",
    kind: "Documentary",
    year: "2017",
    length: "3 min",
    youtubeId: "8gTeE6pa4Kg",
    description:
      "Trailer for the feature-length documentary on Tendulkar's career and personal life.",
    tags: ["cricket", "biography", "documentary"],
    keyTakeaways: [
      "A nation's expectations can become a personal burden.",
      "Long careers are family endeavors.",
    ],
    difficulty: "Beginner",
    topics: ["cricket", "biography"],
  },
  {
    id: "sachin-david-frost",
    personSlug: "sachin-tendulkar",
    title: "Sachin Tendulkar in Conversation",
    kind: "Interview",
    year: "2011",
    length: "55 min",
    youtubeId: "GwpZKy05D-w",
    description:
      "Long-form interview covering his early years, coaches, and 2011 World Cup victory.",
    tags: ["interview", "cricket"],
    keyTakeaways: [
      "Childhood coaches set the technical foundation.",
      "Pressure is a privilege at every stage of a career.",
    ],
    difficulty: "Intermediate",
    topics: ["cricket", "biography"],
  },
  {
    id: "sachin-100s-compilation",
    personSlug: "sachin-tendulkar",
    title: "Every Sachin Tendulkar Century — Compilation",
    kind: "Documentary",
    year: "2020",
    length: "20 min",
    youtubeId: "rM0t2CznoZM",
    description: "Visual compilation of Tendulkar's 100 international centuries.",
    tags: ["cricket", "highlights"],
    keyTakeaways: [
      "Consistency across 24 years required adaptation.",
      "Records cumulate from craft, not flash.",
    ],
    difficulty: "Beginner",
    topics: ["cricket", "highlights"],
  },
  {
    id: "sachin-rajya-sabha-speech",
    personSlug: "sachin-tendulkar",
    title: "Farewell Speech — Wankhede Stadium",
    kind: "Speech",
    year: "2013",
    length: "20 min",
    youtubeId: "u1ckD5y2eKo",
    description: "Sachin's farewell speech after his final Test match at Wankhede Stadium, Mumbai.",
    tags: ["cricket", "farewell", "speech"],
    keyTakeaways: [
      "Public gratitude is its own discipline.",
      "End the career by naming everyone who carried you.",
    ],
    difficulty: "Beginner",
    topics: ["cricket", "leadership"],
  },
];

export default videos;
