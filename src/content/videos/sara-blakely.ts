import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "blakely-how-i-built-this",
    personSlug: "sara-blakely",
    title: "How I Built This — Spanx",
    kind: "Interview",
    year: "2017",
    length: "46 min",
    youtubeId: "wOVkf3ZkIr0",
    description:
      "Guy Raz walks Blakely through the Spanx origin — fax cold calls, prototype hosiery, and the Neiman Marcus pitch.",
    tags: ["origin-story", "founder", "sales"],
    keyTakeaways: [
      "Differentiate yourself in the first 30 seconds of a pitch.",
      "Use scrappy distribution before fundraising.",
      "Visualize the customer holding the product before you build it.",
    ],
    difficulty: "Beginner",
    topics: ["founder", "sales", "origin-story"],
  },
  {
    id: "blakely-master-class-trailer",
    personSlug: "sara-blakely",
    title: "MasterClass — Self-Made Entrepreneurship",
    kind: "Talk",
    year: "2021",
    length: "5 min",
    youtubeId: "DNeYKyUa-7w",
    description:
      "Sara introduces her MasterClass on bootstrapping and building a brand without outside capital.",
    tags: ["entrepreneurship", "branding"],
    keyTakeaways: [
      "Failure is a daily practice, not an event.",
      "Test the prototype on yourself first.",
      "Your story is your most defensible IP.",
    ],
    difficulty: "Beginner",
    topics: ["entrepreneurship", "branding"],
  },
  {
    id: "blakely-stanford-etl-2014",
    personSlug: "sara-blakely",
    title: "Stanford eCorner — Mistakes Were Necessary",
    kind: "Talk",
    year: "2014",
    length: "55 min",
    youtubeId: "1sbT4SzSsp0",
    description:
      "Lecture at Stanford on bootstrapping Spanx from $5,000 in savings to a billion-dollar consumer brand.",
    tags: ["bootstrapping", "founder", "mindset"],
    keyTakeaways: [
      "Failure equals not trying, not getting it wrong.",
      "Cold-call yourself into distribution.",
      "Patent and trademark before you scale.",
    ],
    difficulty: "Intermediate",
    topics: ["bootstrapping", "founder"],
  },
  {
    id: "blakely-rich-roll-2022",
    personSlug: "sara-blakely",
    title: "The Rich Roll Podcast — Bet on Yourself",
    kind: "Interview",
    year: "2022",
    length: "2h 10m",
    youtubeId: "b8ka0qVGipA",
    description:
      "Long-form conversation on resilience, motherhood, the Blakely Foundation, and selling a majority stake to Blackstone.",
    tags: ["resilience", "life", "values"],
    keyTakeaways: [
      "Define success on your own terms before others do it for you.",
      "Generosity is the strongest brand asset.",
      "Selling can be a starting line, not a finish line.",
    ],
    difficulty: "Intermediate",
    topics: ["resilience", "values"],
  },
];

export default videos;
