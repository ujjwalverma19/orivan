import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "mayer-stanford-etl-2006",
    personSlug: "marissa-mayer",
    title: "Stanford eCorner — Nine Lessons Learned at Google",
    kind: "Talk",
    year: "2006",
    length: "55 min",
    youtubeId: "soYKFWqVVzg",
    description:
      "Mayer's lecture on the operating principles Google used to ship product at scale, from speed obsession to creative constraint.",
    tags: ["product", "operations", "google"],
    keyTakeaways: [
      "Speed wins — every 100ms of latency loses users.",
      "Creativity loves constraint, not freedom.",
      "Ideas come from everywhere; rituals capture them.",
    ],
    difficulty: "Intermediate",
    topics: ["product", "operations"],
  },
  {
    id: "mayer-charlie-rose-2013",
    personSlug: "marissa-mayer",
    title: "Charlie Rose — Inside Yahoo",
    kind: "Interview",
    year: "2013",
    length: "30 min",
    youtubeId: "cDFZOC1EY6g",
    description:
      "A year into the Yahoo CEO role, Mayer walks Charlie Rose through the turnaround thesis, mobile strategy, and acquisitions.",
    tags: ["leadership", "turnaround", "mobile"],
    keyTakeaways: [
      "Mobile-first reorgs require a complete product re-platform.",
      "Acquisitions can buy talent, not strategy.",
      "Public-company CEO mode is its own job — not bigger management.",
    ],
    difficulty: "Advanced",
    topics: ["leadership", "turnaround"],
  },
  {
    id: "mayer-girls-in-tech",
    personSlug: "marissa-mayer",
    title: "Girls in Tech Conference — Engineering Career Paths",
    kind: "Talk",
    year: "2011",
    length: "32 min",
    youtubeId: "jyq6ZBZuAfk",
    description:
      "Mayer's argument for why CS is the world's most leveraged skill and how to navigate engineering as a woman.",
    tags: ["engineering", "career", "women-in-tech"],
    keyTakeaways: [
      "Pick environments uncomfortable enough to grow you.",
      "Find peers who play above your level.",
      "Optimize for slope, not intercept.",
    ],
    difficulty: "Beginner",
    topics: ["career", "engineering"],
  },
  {
    id: "mayer-bloomberg-studio-1-1",
    personSlug: "marissa-mayer",
    title: "Bloomberg Studio 1.0 — Post-Yahoo Reflection",
    kind: "Interview",
    year: "2020",
    length: "27 min",
    youtubeId: "h3PqYDueBm8",
    description:
      "Emily Chang interviews Mayer on lessons from Google and Yahoo, the new venture Sunshine, and second-act founder energy.",
    tags: ["reflection", "founder", "second-act"],
    keyTakeaways: [
      "The hardest part of a turnaround is what to stop doing.",
      "Second-act founders bring scar tissue as a feature.",
      "Build for users you actually share life with.",
    ],
    difficulty: "Intermediate",
    topics: ["reflection", "founder"],
  },
];

export default videos;
