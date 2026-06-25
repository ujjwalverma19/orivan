import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "frankl-youth-meaning-1972",
    personSlug: "viktor-frankl",
    title: "Viktor Frankl on Youth in Search of Meaning (Toronto, 1972)",
    kind: "Talk",
    year: "1972",
    length: "1h 25m",
    youtubeId: "wr6itOBLVQA",
    description:
      "Frankl's landmark Toronto lecture — the clearest single articulation of logotherapy he ever delivered to a public audience.",
    tags: ["logotherapy", "meaning", "lecture"],
    keyTakeaways: [
      "The existential vacuum is the central pathology of modern life.",
      "Self-actualization is a byproduct of self-transcendence, never a goal.",
      "Meaning is found in work, love, and chosen suffering.",
    ],
    difficulty: "Intermediate",
    topics: ["philosophy", "psychiatry"],
  },
  {
    id: "frankl-interview-1979",
    personSlug: "viktor-frankl",
    title: "Viktor Frankl Interview (1979)",
    kind: "Interview",
    year: "1979",
    length: "57 min",
    youtubeId: "GTbliwS0gS4",
    description:
      "Long-form interview covering his camp experience, the development of logotherapy, and the role of meaning in clinical practice.",
    tags: ["biography", "logotherapy"],
    keyTakeaways: [
      "Camp survival often correlated with the ability to imagine a future task.",
      "Meaning is offered by life, not invented by the self.",
      "Therapy without a 'why' is incomplete.",
    ],
    difficulty: "Intermediate",
    topics: ["philosophy", "psychiatry"],
  },
  {
    id: "frankl-idealists-realists",
    personSlug: "viktor-frankl",
    title: "Viktor Frankl on Why Idealists Are Real Realists",
    kind: "Talk",
    year: "1972",
    length: "16 min",
    youtubeId: "loay2imHq5E",
    description:
      "Short, intense passage in which Frankl argues that demanding the best of people is the only realistic anthropology.",
    tags: ["meaning", "anthropology"],
    keyTakeaways: [
      "If you treat people as they are, they become worse; treat them as they could be, and they become better.",
      "Pessimistic psychology is self-fulfilling.",
      "Demanding the best is a moral act, not a naive one.",
    ],
    difficulty: "Beginner",
    topics: ["philosophy"],
  },
  {
    id: "frankl-youngsters-challenges",
    personSlug: "viktor-frankl",
    title: "Viktor Frankl: Youngsters Need Challenges",
    kind: "Talk",
    year: "1972",
    length: "8 min",
    youtubeId: "ImonPWt7VOA",
    description:
      "Frankl's argument that young people atrophy without meaningful challenges and that the existential vacuum is filled by drugs, violence, or aggression when meaning is absent.",
    tags: ["meaning", "youth", "education"],
    keyTakeaways: [
      "Boredom is the existential vacuum announcing itself.",
      "The young need to be stretched, not protected.",
      "Demand more, and they will rise to the demand.",
    ],
    difficulty: "Beginner",
    topics: ["philosophy", "education"],
  },
  {
    id: "frankl-mans-search-summary",
    personSlug: "viktor-frankl",
    title: "Man's Search for Meaning — Book Summary",
    kind: "Talk",
    year: "2018",
    length: "10 min",
    youtubeId: "SVhuCpgLCTE",
    description:
      "Concise summary of the core arguments and structure of 'Man's Search for Meaning' for newcomers to Frankl's work.",
    tags: ["book-summary", "meaning"],
    keyTakeaways: [
      "Three sources of meaning: work, love, and the attitude taken toward unavoidable suffering.",
      "Meaning is discovered, not invented.",
      "The 'why' makes the 'how' bearable.",
    ],
    difficulty: "Beginner",
    topics: ["philosophy", "psychiatry"],
  },
];

export default videos;
