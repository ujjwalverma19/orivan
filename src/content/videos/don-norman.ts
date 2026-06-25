import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "norman-ted-three-ways",
    personSlug: "don-norman",
    title: "The Three Ways That Good Design Makes You Happy — TED",
    kind: "Talk",
    year: "2009",
    length: "13 min",
    youtubeId: "RlQEoJaLQRA",
    description:
      "Norman's classic TED talk on the visceral, behavioral, and reflective levels of design — and why attractive things really do work better.",
    tags: ["ted", "emotional-design"],
    keyTakeaways: [
      "Three levels of design: visceral, behavioral, reflective.",
      "Attractive things lower stress, which makes them work better.",
      "Emotion is not the opposite of usability.",
    ],
    difficulty: "Beginner",
    topics: ["design"],
  },
  {
    id: "norman-design-everyday-things-talk",
    personSlug: "don-norman",
    title: "The Design of Everyday Things",
    kind: "Talk",
    year: "2016",
    length: "1h 06m",
    youtubeId: "_Kc57XAE_V4",
    description:
      "Norman's IDEO-hosted talk walking through the core ideas of his canonical book, with new examples from a decade later.",
    tags: ["affordances", "usability"],
    keyTakeaways: [
      "Discoverability is the first job of an interface.",
      "Affordances tell users what's possible without instruction.",
      "If users fail, the design failed.",
    ],
    difficulty: "Beginner",
    topics: ["design"],
  },
  {
    id: "norman-emotional-design",
    personSlug: "don-norman",
    title: "Emotional Design",
    kind: "Talk",
    year: "2010",
    length: "57 min",
    youtubeId: "fwr4AIpvQ5o",
    description:
      "Norman's full lecture on emotional design — the framework that updated his earlier 'usability first' message.",
    tags: ["emotional-design", "framework"],
    keyTakeaways: [
      "Visceral design happens before thought.",
      "Behavioral design lives in the moment of use.",
      "Reflective design is the story the user tells themselves about the object.",
    ],
    difficulty: "Intermediate",
    topics: ["design"],
  },
  {
    id: "norman-emotional-design-theory",
    personSlug: "don-norman",
    title: "Don Norman and His Theory on Emotional Design",
    kind: "Interview",
    year: "2018",
    length: "27 min",
    youtubeId: "G7MeRkDkRN4",
    description:
      "Conversational walkthrough of how Norman developed the three-level emotional design model and why he believes beauty is functional.",
    tags: ["emotional-design", "theory"],
    keyTakeaways: [
      "Designers should design for the whole person, not just the task.",
      "Beauty supports usability rather than competing with it.",
      "Self-image is part of every product experience.",
    ],
    difficulty: "Intermediate",
    topics: ["design"],
  },
  {
    id: "norman-we-design-wrong",
    personSlug: "don-norman",
    title: "The Way We Design Today Is Wrong",
    kind: "Talk",
    year: "2023",
    length: "1h 02m",
    youtubeId: "FMEzKQpTosY",
    description:
      "Late-career provocation — Norman argues that design needs to move from user-centered to humanity-centered to address planetary problems.",
    tags: ["sustainability", "humanity-centered"],
    keyTakeaways: [
      "User-centered design optimizes individuals at the cost of communities.",
      "Humanity-centered design must include externalities.",
      "Designers carry political and ecological responsibility.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "ethics"],
  },
];

export default videos;
