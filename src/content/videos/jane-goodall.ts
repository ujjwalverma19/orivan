import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "goodall-ted-chimpanzees",
    personSlug: "jane-goodall",
    title: "What Separates Us From Chimpanzees? — TED",
    kind: "Talk",
    year: "2007",
    length: "27 min",
    youtubeId: "51z7WRDjOjM",
    description:
      "Goodall's TED talk on what we share with chimps, what we don't, and what humanity's choices mean for both species.",
    tags: ["ted", "primatology", "evolution"],
    keyTakeaways: [
      "Chimps share 98%+ of human DNA and many behavioral traits.",
      "Human destruction of habitat is the central threat to both species.",
      "Individual choice scales when paired with community action.",
    ],
    difficulty: "Beginner",
    topics: ["science", "conservation"],
  },
  {
    id: "goodall-natgeo-inside-look",
    personSlug: "jane-goodall",
    title: "Jane Goodall: An Inside Look — National Geographic",
    kind: "Documentary",
    year: "2020",
    length: "44 min",
    youtubeId: "d3b6zSpy7P4",
    description:
      "Full-length National Geographic documentary spanning her Gombe years, advocacy work, and personal life.",
    tags: ["biography", "natgeo"],
    keyTakeaways: [
      "Sixty years of Gombe research is one of science's longest continuous studies.",
      "Her transition from field scientist to global advocate was deliberate.",
      "Roots & Shoots is the next-generation arm of the institution.",
    ],
    difficulty: "Beginner",
    topics: ["science", "biography"],
  },
  {
    id: "goodall-reasons-for-hope",
    personSlug: "jane-goodall",
    title: "Dr. Jane Goodall: Reasons for Hope",
    kind: "Talk",
    year: "2021",
    length: "1h 17m",
    youtubeId: "uD46VvwRbcg",
    description:
      "Goodall's late-career talk on the four reasons for hope — youth, the human brain, the resilience of nature, and the indomitable human spirit.",
    tags: ["hope", "advocacy"],
    keyTakeaways: [
      "Hope is a survival skill, not a feeling.",
      "The next generation is the strategy.",
      "Nature recovers when given the chance.",
    ],
    difficulty: "Beginner",
    topics: ["conservation", "philosophy"],
  },
  {
    id: "goodall-60-minutes-archive",
    personSlug: "jane-goodall",
    title: "Jane Goodall and Tom Mangelsen — 60 Minutes Archive",
    kind: "Interview",
    year: "2014",
    length: "26 min",
    youtubeId: "QSxvy0lKJTM",
    description:
      "60 Minutes profile on her later-life work with wildlife photographer Tom Mangelsen on Yellowstone grizzly conservation.",
    tags: ["wildlife", "conservation", "interview"],
    keyTakeaways: [
      "Conservation requires alliances across disciplines and continents.",
      "Charismatic megafauna are political ambassadors for whole ecosystems.",
      "Documenting individuals (chimps, grizzlies) builds public empathy.",
    ],
    difficulty: "Beginner",
    topics: ["conservation"],
  },
  {
    id: "goodall-mangelsen-wildlife",
    personSlug: "jane-goodall",
    title: "Jane and Tom: Wildlife and Whiskey",
    kind: "Interview",
    year: "2019",
    length: "11 min",
    youtubeId: "RENCv2o2hIg",
    description:
      "Informal conversation between Goodall and Mangelsen on the lifelong practice of paying attention to wild animals as individuals.",
    tags: ["wildlife", "conversation"],
    keyTakeaways: [
      "Individual recognition is the foundation of conservation.",
      "Long-term study reveals what snapshots miss.",
      "Patience is the field scientist's superpower.",
    ],
    difficulty: "Beginner",
    topics: ["conservation"],
  },
];

export default videos;
