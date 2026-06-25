import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "fadell-ted-2015",
    personSlug: "tony-fadell",
    title: "TED — The First Secret of Design Is Noticing",
    kind: "Talk",
    year: "2015",
    length: "17 min",
    youtubeId: "9uOMectkCCs",
    description:
      "Fadell's TED talk on habituation and how great products begin by re-seeing the everyday problems we've stopped noticing.",
    tags: ["design", "product", "noticing"],
    keyTakeaways: [
      "Habit blinds you to the problem.",
      "Travel to break your default frame.",
      "Design from the moment of friction, not the spec sheet.",
    ],
    difficulty: "Beginner",
    topics: ["design", "product"],
  },
  {
    id: "fadell-build-launch-2022",
    personSlug: "tony-fadell",
    title: "Talks at Google — Build",
    kind: "Talk",
    year: "2022",
    length: "55 min",
    youtubeId: "ovi79B1A0QA",
    description:
      "Fadell discusses his book Build and the operating manual he wished he'd had when he was 25.",
    tags: ["career", "leadership", "build"],
    keyTakeaways: [
      "Apprentice yourself to people who are 10 years ahead.",
      "Decisions divide into data-driven and opinion-driven; name which one you're making.",
      "Mentorship is just structured story transfer.",
    ],
    difficulty: "Intermediate",
    topics: ["career", "leadership"],
  },
  {
    id: "fadell-tim-ferriss-2022",
    personSlug: "tony-fadell",
    title: "The Tim Ferriss Show — Tony Fadell",
    kind: "Interview",
    year: "2022",
    length: "2h 30m",
    youtubeId: "5M5SJ5u0Ke4",
    description:
      "Long-form conversation on the iPod origin story, Nest, leaving Google, and lessons from 30+ years of consumer electronics.",
    tags: ["origin-story", "leadership", "hardware"],
    keyTakeaways: [
      "Story-first product narrative beats spec sheets.",
      "Hardware demands tighter feedback loops than software.",
      "Pick problems you'll obsess over for a decade.",
    ],
    difficulty: "Intermediate",
    topics: ["hardware", "leadership"],
  },
  {
    id: "fadell-stanford-etl-2015",
    personSlug: "tony-fadell",
    title: "Stanford eCorner — Lessons from iPod, iPhone, Nest",
    kind: "Talk",
    year: "2015",
    length: "1h 02m",
    youtubeId: "LnrhvMT2r84",
    description:
      "Fadell walks Stanford students through three category-defining products and the patterns that connect them.",
    tags: ["product", "design", "hardware"],
    keyTakeaways: [
      "A category-creating product is a story problem, not a tech problem.",
      "Walk into the customer's home before you draw the second sketch.",
      "Tight teams beat large teams when the spec is unknown.",
    ],
    difficulty: "Intermediate",
    topics: ["product", "design"],
  },
];

export default videos;
