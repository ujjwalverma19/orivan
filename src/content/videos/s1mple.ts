import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "s1mple-thoorin-conversation",
    personSlug: "s1mple",
    title: "Thorin's Talk Show — s1mple",
    kind: "Interview",
    year: "2019",
    length: "1h 02m",
    youtubeId: "IpM3rduhdZM",
    description:
      "Long-form conversation with esports journalist Duncan 'Thorin' Shields covering his career, mindset, and the rivalries that shaped him.",
    tags: ["interview", "career", "mindset"],
    keyTakeaways: [
      "Honest interviews reveal the personality behind the stats.",
      "Rivalries push elite players to higher floors.",
    ],
    difficulty: "Intermediate",
    topics: ["interview", "career"],
  },
  {
    id: "s1mple-pgl-major-2021",
    personSlug: "s1mple",
    title: "PGL Stockholm Major 2021 — NaVi Champions Documentary",
    kind: "Documentary",
    year: "2021",
    length: "28 min",
    youtubeId: "6x1qy0J6dHY",
    description:
      "PGL's documentary on NaVi's 2021 Major win in Stockholm, including s1mple's tournament-MVP performance.",
    tags: ["major", "championship", "documentary"],
    keyTakeaways: [
      "Five years of finals losses preceded a single trophy.",
      "Major wins are the team product wrapped around a star.",
    ],
    difficulty: "Beginner",
    topics: ["major", "championship"],
  },
  {
    id: "s1mple-faze-debut-2024",
    personSlug: "s1mple",
    title: "FaZe Clan — s1mple Trial Run Announcement",
    kind: "Interview",
    year: "2024",
    length: "12 min",
    youtubeId: "KhnDrcohbhw",
    description:
      "FaZe Clan's announcement video and short interview about s1mple joining the roster after his sabbatical.",
    tags: ["faze", "comeback", "career"],
    keyTakeaways: [
      "Joining a new team late in a career means humbling yourself to a new system.",
      "Public sabbaticals reset expectations.",
    ],
    difficulty: "Beginner",
    topics: ["career", "comeback"],
  },
  {
    id: "s1mple-csgo-documentary-2018",
    personSlug: "s1mple",
    title: "Boris — The Tactical Genius (NaVi Documentary)",
    kind: "Documentary",
    year: "2018",
    length: "18 min",
    youtubeId: "FeggpJGkiKw",
    description:
      "Profile of Natus Vincere's roster during their HLTV Player of the Year season, with extended s1mple footage.",
    tags: ["navi", "documentary", "team"],
    keyTakeaways: [
      "Star players are made by the system around them.",
      "Documentaries capture the day-to-day work behind the highlights.",
    ],
    difficulty: "Beginner",
    topics: ["documentary", "team"],
  },
  {
    id: "s1mple-hltv-confirmed-2022",
    personSlug: "s1mple",
    title: "HLTV Confirmed — s1mple Long-Form Interview",
    kind: "Interview",
    year: "2022",
    length: "1h 30m",
    youtubeId: "wvtvaF5AEWw",
    description:
      "HLTV's flagship interview show with s1mple on his career, the war in Ukraine, and the future of Counter-Strike.",
    tags: ["interview", "ukraine", "career"],
    keyTakeaways: [
      "Public platforms come with obligations.",
      "Long-form interviews surface the depth highlights can't.",
    ],
    difficulty: "Intermediate",
    topics: ["interview", "career"],
  },
];

export default videos;
