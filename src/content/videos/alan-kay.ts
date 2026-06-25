import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "kay-doing-with-images",
    personSlug: "alan-kay",
    title: "Doing with Images Makes Symbols",
    kind: "Talk",
    year: "1987",
    length: "1h 52m",
    youtubeId: "p2LZLYcu_JY",
    description:
      "Kay's classic Apple lecture on how children learn computing — and how user interfaces should follow developmental stages, not technological history.",
    tags: ["ui", "education", "smalltalk"],
    keyTakeaways: [
      "Doing, images, and symbols are the three developmental modes computing must respect.",
      "Direct manipulation maps to the enactive stage of learning.",
      "Symbolic abstraction is what makes computers a new medium.",
    ],
    difficulty: "Intermediate",
    topics: ["software", "education"],
  },
  {
    id: "kay-normal-considered-harmful",
    personSlug: "alan-kay",
    title: "Normal Considered Harmful",
    kind: "Talk",
    year: "2012",
    length: "1h 12m",
    youtubeId: "FvmTSpJU-Xc",
    description:
      "Kay's UIUC lecture arguing that most software is a layer of accidental complexity that should have been redesigned long ago.",
    tags: ["software", "complexity", "design"],
    keyTakeaways: [
      "Most of what we accept as normal in software is an accident frozen into infrastructure.",
      "STEPS showed personal computing could fit in 20,000 lines of code.",
      "Civilization-scale software needs civilization-scale review.",
    ],
    difficulty: "Advanced",
    topics: ["software", "research"],
  },
  {
    id: "kay-ted-2007",
    personSlug: "alan-kay",
    title: "A Powerful Idea About Teaching Ideas — TED",
    kind: "Talk",
    year: "2007",
    length: "20 min",
    youtubeId: "Eg_ToU7m1MI",
    description:
      "Kay's TED talk on how computers can teach the underlying intuitions of math and science to children of any age.",
    tags: ["education", "ted", "children"],
    keyTakeaways: [
      "The best educational software lets kids reinvent the discoveries themselves.",
      "Simulation is a new kind of literacy.",
      "Powerful ideas deserve powerful media.",
    ],
    difficulty: "Beginner",
    topics: ["education"],
  },
  {
    id: "kay-tribute-ted-nelson",
    personSlug: "alan-kay",
    title: "Tribute to Ted Nelson at Intertwingled",
    kind: "Talk",
    year: "2014",
    length: "39 min",
    youtubeId: "AnrlSqtpOkw",
    description:
      "Kay reflects on hypertext, Xanadu, and the road computing didn't take — in tribute to fellow visionary Ted Nelson.",
    tags: ["hypertext", "history", "vision"],
    keyTakeaways: [
      "Industry chose the easy path over Nelson's harder, richer one.",
      "Hypertext is still mostly unrealized.",
      "Vision keeps a field honest, even when products lag.",
    ],
    difficulty: "Intermediate",
    topics: ["history", "research"],
  },
  {
    id: "kay-vpri-1972",
    personSlug: "alan-kay",
    title: "Computer Applications: A Dynamic Medium for Creative Thought (1972)",
    kind: "Talk",
    year: "1972",
    length: "1h 17m",
    youtubeId: "WJzi9R_55Iw",
    description:
      "Kay's University of Illinois lecture — the foundational case for the personal computer as a medium for thought.",
    tags: ["dynabook", "vision", "history"],
    keyTakeaways: [
      "Personal computers are a new medium, like books and film.",
      "The most demanding users are children.",
      "Hardware will catch up; design for the medium first.",
    ],
    difficulty: "Intermediate",
    topics: ["history", "research"],
  },
];

export default videos;
