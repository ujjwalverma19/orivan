import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "miyazaki-10-years-documentary",
    personSlug: "hayao-miyazaki",
    title: "10 Years with Hayao Miyazaki — NHK Documentary",
    kind: "Documentary",
    year: "2019",
    length: "49 min",
    youtubeId: "Jj03YLsePCE",
    description:
      "NHK's intimate four-part documentary on Miyazaki at work — the first episode tracks his methods over a decade at Studio Ghibli.",
    tags: ["documentary", "craft", "ghibli"],
    keyTakeaways: [
      "Hand-drawn animation is sustained by daily ritual.",
      "Storyboards discover the film as much as they document it.",
    ],
    difficulty: "Intermediate",
    topics: ["animation", "craft"],
  },
  {
    id: "miyazaki-kingdom-of-dreams",
    personSlug: "hayao-miyazaki",
    title: "The Kingdom of Dreams and Madness — Documentary",
    kind: "Documentary",
    year: "2013",
    length: "1h 58m",
    youtubeId: "24wViGZKVu8",
    description:
      "Mami Sunada's feature-length documentary inside Studio Ghibli during the production of The Wind Rises and Princess Kaguya.",
    tags: ["documentary", "ghibli", "biography"],
    keyTakeaways: [
      "Studio Ghibli runs on the daily presence of its founders.",
      "Creative partnerships contain decades of unresolved disagreement.",
    ],
    difficulty: "Intermediate",
    topics: ["documentary", "biography"],
  },
  {
    id: "miyazaki-charlie-rose-1999",
    personSlug: "hayao-miyazaki",
    title: "Charlie Rose — Hayao Miyazaki Interview",
    kind: "Interview",
    year: "1999",
    length: "22 min",
    youtubeId: "6F2ckRlH14U",
    description:
      "Charlie Rose interviews Miyazaki around the US release of Princess Mononoke on craft, themes, and the responsibility of children's storytelling.",
    tags: ["interview", "mononoke", "storytelling"],
    keyTakeaways: [
      "Children's stories carry the heaviest themes.",
      "Animation can be morally serious without losing wonder.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "storytelling"],
  },
  {
    id: "miyazaki-never-ending-man-2016",
    personSlug: "hayao-miyazaki",
    title: "Never-Ending Man — NHK Documentary",
    kind: "Documentary",
    year: "2016",
    length: "1h 10m",
    youtubeId: "7od_hvrGeHo",
    description:
      "NHK's documentary on Miyazaki's return from retirement to begin work on what would become The Boy and the Heron.",
    tags: ["documentary", "retirement", "craft"],
    keyTakeaways: [
      "Retirement is a decision the next idea overrules.",
      "Computers can be tools, but not the medium.",
    ],
    difficulty: "Intermediate",
    topics: ["documentary", "craft"],
  },
  {
    id: "miyazaki-spirited-away-interview",
    personSlug: "hayao-miyazaki",
    title: "Spirited Away — Miyazaki Discusses the Film",
    kind: "Interview",
    year: "2003",
    length: "26 min",
    youtubeId: "ByXuk9QqQkk",
    description: "Interview with Miyazaki around the US release and Oscar win for Spirited Away.",
    tags: ["interview", "spirited-away", "oscar"],
    keyTakeaways: [
      "Specific cultural stories travel globally when crafted honestly.",
      "Awards are downstream of work the audience already loves.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "animation"],
  },
];

export default videos;
