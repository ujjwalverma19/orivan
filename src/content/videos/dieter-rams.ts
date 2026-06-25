import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "rams-documentary-trailer-2018",
    personSlug: "dieter-rams",
    title: "Rams — Documentary by Gary Hustwit (Trailer)",
    kind: "Documentary",
    year: "2018",
    length: "3 min",
    youtubeId: "AZU5xP5lNHk",
    description:
      "Trailer for Gary Hustwit's feature-length portrait of Dieter Rams, with original score by Brian Eno.",
    tags: ["design", "documentary", "craft"],
    keyTakeaways: [
      "Less, but better.",
      "Good design is honest design.",
      "Make the object disappear into use.",
    ],
    difficulty: "Beginner",
    topics: ["design", "craft"],
  },
  {
    id: "rams-vitsoe-talk-2010",
    personSlug: "dieter-rams",
    title: "Vitsoe — Dieter Rams in Conversation",
    kind: "Interview",
    year: "2010",
    length: "32 min",
    youtubeId: "ypyAg3Zbs_8",
    description:
      "Rams discusses his ten principles, his work at Braun, and the longstanding partnership with Vitsoe.",
    tags: ["principles", "industrial-design"],
    keyTakeaways: [
      "Reduce until nothing more can be taken away.",
      "Material honesty matters as much as form.",
      "Time-tested designs are sustainability.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "principles"],
  },
  {
    id: "rams-ten-principles-readout",
    personSlug: "dieter-rams",
    title: "The Ten Principles of Good Design — Narrated",
    kind: "Talk",
    year: "2017",
    length: "12 min",
    youtubeId: "-mlAdcQZZAM",
    description:
      "A guided walkthrough of Rams' ten principles, illustrated with the Braun products that embody them.",
    tags: ["design", "principles", "braun"],
    keyTakeaways: [
      "Good design is innovative, useful, and aesthetic.",
      "Good design makes a product understandable.",
      "Good design is environmentally friendly and as little design as possible.",
    ],
    difficulty: "Beginner",
    topics: ["design", "principles"],
  },
  {
    id: "rams-objectified-segment-2009",
    personSlug: "dieter-rams",
    title: "Objectified — Dieter Rams Segment",
    kind: "Documentary",
    year: "2009",
    length: "10 min",
    youtubeId: "FrIpF8GTgFo",
    description:
      "Rams's segment from Gary Hustwit's design documentary, including reflections on consumer culture.",
    tags: ["consumerism", "design"],
    keyTakeaways: [
      "Most of the things we surround ourselves with are unnecessary.",
      "Good design rejects fashion for longevity.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "consumerism"],
  },
];

export default videos;
