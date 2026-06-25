import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "serena-being-serena-2018",
    personSlug: "serena-williams",
    title: "Being Serena — HBO Trailer",
    kind: "Documentary",
    year: "2018",
    length: "2 min",
    youtubeId: "cNABSm-jUNk",
    description:
      "Trailer for HBO's five-part documentary following Serena through pregnancy, motherhood, and her return to professional tennis.",
    tags: ["athlete", "motherhood", "documentary"],
    keyTakeaways: [
      "Comebacks reshape what 'peak' means.",
      "Identity expands when the sport contracts.",
    ],
    difficulty: "Beginner",
    topics: ["athlete", "biography"],
  },
  {
    id: "serena-ted-2017",
    personSlug: "serena-williams",
    title: "TED — On Tennis, Love, and Motherhood (Gayle King Interview)",
    kind: "Talk",
    year: "2017",
    length: "26 min",
    youtubeId: "CL-SiaFuLo4",
    description:
      "Serena's TED conversation with Gayle King covering family, returning to tennis, and managing expectations as the GOAT.",
    tags: ["athlete", "motherhood", "ted"],
    keyTakeaways: [
      "Pressure is a privilege.",
      "The hardest opponents are internal narratives.",
      "Identity beyond the sport gives the career a longer arc.",
    ],
    difficulty: "Beginner",
    topics: ["athlete", "identity"],
  },
  {
    id: "serena-david-letterman-2019",
    personSlug: "serena-williams",
    title: "My Next Guest Needs No Introduction — David Letterman",
    kind: "Interview",
    year: "2019",
    length: "55 min",
    youtubeId: "eFRmJZ3upI4",
    description:
      "Letterman interviews Serena on family, business, and the long arc of professional tennis.",
    tags: ["interview", "biography"],
    keyTakeaways: [
      "Family is the operating team behind every long career.",
      "Investing builds the post-athlete decade before retirement.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "biography"],
  },
  {
    id: "serena-us-open-2002",
    personSlug: "serena-williams",
    title: "US Open Final 2002 — Highlights",
    kind: "Documentary",
    year: "2002",
    length: "12 min",
    youtubeId: "ssPnfV-EpMc",
    description:
      "Highlight reel from the 2002 US Open final vs Venus Williams — the second leg of the Serena Slam.",
    tags: ["tennis", "highlights", "us-open"],
    keyTakeaways: [
      "Sibling competition can produce two GOATs.",
      "Power tennis re-shaped the women's game.",
    ],
    difficulty: "Beginner",
    topics: ["tennis", "highlights"],
  },
];

export default videos;
