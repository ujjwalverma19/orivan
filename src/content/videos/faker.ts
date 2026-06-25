import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "faker-tedx-2019",
    personSlug: "faker",
    title: "TEDxSeoul — The Unkillable Demon King",
    kind: "Talk",
    year: "2019",
    length: "13 min",
    youtubeId: "xNBGTrAGRE0",
    description:
      "A profile of Faker's career, training discipline, and what makes the 'Unkillable Demon King' continue to dominate League of Legends.",
    tags: ["esports", "career", "discipline"],
    keyTakeaways: [
      "Longevity in esports is a product of routine, not talent.",
      "Public expectation can be a fuel or a tax — depending on the player.",
    ],
    difficulty: "Beginner",
    topics: ["esports", "discipline"],
  },
  {
    id: "faker-t1-documentary-2023",
    personSlug: "faker",
    title: "T1 Worlds 2023 — Inside the Comeback (Documentary)",
    kind: "Documentary",
    year: "2023",
    length: "22 min",
    youtubeId: "7ZotmS_ChZQ",
    description:
      "Behind-the-scenes of T1's 2023 Worlds-winning season in Seoul, including Faker's injury recovery and the team's mental preparation.",
    tags: ["worlds", "comeback", "team"],
    keyTakeaways: [
      "Comebacks at the top look quiet from the outside.",
      "Team identity is the multiplier on individual skill.",
    ],
    difficulty: "Beginner",
    topics: ["worlds", "team"],
  },
  {
    id: "faker-worlds-2023-final",
    personSlug: "faker",
    title: "Worlds 2023 Final — T1 vs Weibo Gaming Highlights",
    kind: "Documentary",
    year: "2023",
    length: "15 min",
    youtubeId: "-V0fhmD80dc",
    description:
      "LoL Esports' highlight package of the 2023 Worlds Final in Seoul, where T1 swept Weibo Gaming 3-0.",
    tags: ["worlds", "final", "highlights"],
    keyTakeaways: [
      "Hometown crowds can carry a team through nerves.",
      "Veteran-led rosters close finals faster than star-led ones.",
    ],
    difficulty: "Beginner",
    topics: ["worlds", "highlights"],
  },
  {
    id: "faker-mbc-news-2024",
    personSlug: "faker",
    title: "Worlds 2024 Champion Interview — LoL Esports",
    kind: "Interview",
    year: "2024",
    length: "9 min",
    youtubeId: "Mh_3PXnC_uk",
    description:
      "Faker on T1's back-to-back Worlds titles and what it took to win a fifth championship.",
    tags: ["worlds", "interview"],
    keyTakeaways: [
      "Back-to-back titles depend on letting the previous one go.",
      "Career goals shift from winning to mentoring late.",
    ],
    difficulty: "Beginner",
    topics: ["worlds", "career"],
  },
  {
    id: "faker-skt-documentary-2017",
    personSlug: "faker",
    title: "SKT T1 — Becoming Legends (Documentary Excerpt)",
    kind: "Documentary",
    year: "2017",
    length: "25 min",
    youtubeId: "hNQC5GyumQ4",
    description: "Earlier-career portrait of Faker and SKT T1 during their dynastic 2015–2016 run.",
    tags: ["documentary", "history", "skt"],
    keyTakeaways: [
      "Dynasty teams are built on practice culture, not roster moves.",
      "Champions stay quiet because the play is louder than the talk.",
    ],
    difficulty: "Beginner",
    topics: ["documentary", "history"],
  },
];

export default videos;
