import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "feynman-fun-to-imagine",
    personSlug: "richard-feynman",
    title: "Fun to Imagine — BBC",
    kind: "Interview",
    year: "1983",
    length: "1h 06m",
    youtubeId: "P1ww1IXRfTA",
    description:
      "Feynman's famous BBC series on physics intuitions — rubber bands, fire, magnets, and how nature actually works.",
    tags: ["physics", "teaching", "intuition"],
    keyTakeaways: [
      "Explain the phenomenon in everyday language first.",
      "Knowing the name of something is not the same as knowing it.",
      "Curiosity is its own reward.",
    ],
    difficulty: "Beginner",
    topics: ["physics", "teaching"],
  },
  {
    id: "feynman-magnets-bbc",
    personSlug: "richard-feynman",
    title: "Why? — The Magnets Question",
    kind: "Interview",
    year: "1983",
    length: "7 min",
    youtubeId: "wMFPe-DwULM",
    description:
      "Feynman explains why he can't simply answer 'why do magnets repel?' — and uses it to teach how scientific explanation actually works.",
    tags: ["physics", "epistemology"],
    keyTakeaways: [
      "Every 'why' has another 'why' beneath it.",
      "Explanation depends on what the audience already accepts.",
    ],
    difficulty: "Beginner",
    topics: ["physics", "epistemology"],
  },
  {
    id: "feynman-cargo-cult-readout",
    personSlug: "richard-feynman",
    title: "Cargo Cult Science — Caltech Commencement",
    kind: "Speech",
    year: "1974",
    length: "30 min",
    youtubeId: "EKWGGDXe5MA",
    description:
      "Feynman's Caltech address on scientific integrity, the trap of imitating the form of science without its substance.",
    tags: ["science", "integrity", "education"],
    keyTakeaways: [
      "The first principle is that you must not fool yourself.",
      "Disclose what could prove your hypothesis wrong.",
      "Form without rigor is cargo cult.",
    ],
    difficulty: "Intermediate",
    topics: ["science", "integrity"],
  },
  {
    id: "feynman-pleasure-of-finding",
    personSlug: "richard-feynman",
    title: "The Pleasure of Finding Things Out — BBC",
    kind: "Documentary",
    year: "1981",
    length: "50 min",
    youtubeId: "7XA_NVn7XnE",
    description:
      "Hour-long BBC portrait covering Feynman's career, his father's teaching, Los Alamos, and his approach to teaching physics.",
    tags: ["biography", "physics", "teaching"],
    keyTakeaways: [
      "Names don't explain; mechanisms do.",
      "The joy of discovery is the actual reward.",
      "Honesty is the scientist's only protection against self-deception.",
    ],
    difficulty: "Intermediate",
    topics: ["biography", "physics"],
  },
];

export default videos;
