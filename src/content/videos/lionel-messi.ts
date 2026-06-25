import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "messi-fifa-doc-trailer",
    personSlug: "lionel-messi",
    title: "Captains of the World — Messi's World Cup Journey",
    kind: "Documentary",
    year: "2023",
    length: "3 min",
    youtubeId: "ZmKy_fnRM_E",
    description:
      "Netflix documentary trailer covering Messi's road to the 2022 World Cup title with Argentina.",
    tags: ["football", "world-cup", "documentary"],
    keyTakeaways: [
      "Generational players need decades for the title that defines them.",
      "Team chemistry can be assembled by belief, not just talent.",
    ],
    difficulty: "Beginner",
    topics: ["football", "biography"],
  },
  {
    id: "messi-tata-martino-interview",
    personSlug: "lionel-messi",
    title: "Conversations with Messi — TyC Sports",
    kind: "Interview",
    year: "2020",
    length: "55 min",
    youtubeId: "laORxC4Dskg",
    description: "Long-form interview with Messi after Barcelona's most turbulent season.",
    tags: ["interview", "football"],
    keyTakeaways: [
      "Loyalty has limits when an institution stops loving you back.",
      "Family is the operating team behind the career.",
    ],
    difficulty: "Intermediate",
    topics: ["football", "career"],
  },
  {
    id: "messi-world-cup-2022-highlights",
    personSlug: "lionel-messi",
    title: "Messi vs France — 2022 World Cup Final Highlights",
    kind: "Documentary",
    year: "2022",
    length: "10 min",
    youtubeId: "Mxkg3qLIPC8",
    description: "Highlight reel of the 2022 World Cup Final between Argentina and France.",
    tags: ["football", "world-cup", "highlights"],
    keyTakeaways: [
      "Championship games reveal whether the talent compounded into a team.",
      "Decisive moments arrive in waves — manage them in sequence.",
    ],
    difficulty: "Beginner",
    topics: ["football", "highlights"],
  },
  {
    id: "messi-la-masia-doc",
    personSlug: "lionel-messi",
    title: "La Masia — Barcelona's Academy Story",
    kind: "Documentary",
    year: "2018",
    length: "45 min",
    youtubeId: "P1vM_usQufk",
    description:
      "Documentary on La Masia and the players including Messi, Xavi, and Iniesta it produced.",
    tags: ["football", "academy", "barcelona"],
    keyTakeaways: [
      "Player development is institutional, not individual.",
      "Style of play is taught from age 8.",
    ],
    difficulty: "Beginner",
    topics: ["football", "academy"],
  },
];

export default videos;
