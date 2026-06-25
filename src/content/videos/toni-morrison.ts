import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "morrison-nobel-lecture-1993",
    personSlug: "toni-morrison",
    title: "Nobel Lecture in Literature, 1993",
    kind: "Speech",
    year: "1993",
    length: "30 min",
    youtubeId: "ticXzFEpN9o",
    description:
      "Toni Morrison's Nobel Prize lecture — a parable about the responsibility of language, delivered in Stockholm.",
    tags: ["nobel", "language", "speech"],
    keyTakeaways: [
      "Language is the measure of our lives.",
      "Public speeches at the highest stage codify a lifetime of essays.",
    ],
    difficulty: "Intermediate",
    topics: ["speech", "language"],
  },
  {
    id: "morrison-charlie-rose-1993",
    personSlug: "toni-morrison",
    title: "Charlie Rose — Toni Morrison Interview",
    kind: "Interview",
    year: "1993",
    length: "55 min",
    youtubeId: "F4vIGvKpT1c",
    description:
      "Charlie Rose interviews Toni Morrison shortly after the Nobel Prize announcement.",
    tags: ["interview", "nobel", "race"],
    keyTakeaways: [
      "Writers can refuse to translate themselves for a dominant audience.",
      "Specificity is the path to universality.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "writing"],
  },
  {
    id: "morrison-uncensored-2008",
    personSlug: "toni-morrison",
    title: "Toni Morrison Uncensored — PBS",
    kind: "Documentary",
    year: "2008",
    length: "55 min",
    youtubeId: "BtWdy8pFktM",
    description:
      "PBS portrait of Toni Morrison combining interview footage with her own reflections on race, craft, and her novels.",
    tags: ["documentary", "biography", "craft"],
    keyTakeaways: [
      "Editing and writing compound as careers.",
      "Family storytelling is the first writing training.",
    ],
    difficulty: "Beginner",
    topics: ["documentary", "biography"],
  },
  {
    id: "morrison-pieces-i-am-2019",
    personSlug: "toni-morrison",
    title: "The Pieces I Am — Trailer",
    kind: "Documentary",
    year: "2019",
    length: "3 min",
    youtubeId: "A8sUwXTWb4M",
    description:
      "Trailer for Timothy Greenfield-Sanders' feature-length documentary on Toni Morrison's life and work.",
    tags: ["documentary", "biography", "trailer"],
    keyTakeaways: [
      "Late-career documentaries codify a writer's public legacy.",
      "Friends and contemporaries shape the public memory of a writer.",
    ],
    difficulty: "Beginner",
    topics: ["documentary", "biography"],
  },
  {
    id: "morrison-colbert-2014",
    personSlug: "toni-morrison",
    title: "The Colbert Report — Toni Morrison Interview",
    kind: "Interview",
    year: "2014",
    length: "9 min",
    youtubeId: "ErbBlbE6sxI",
    description:
      "Stephen Colbert interviews Toni Morrison about God Help the Child and her writing process.",
    tags: ["interview", "process"],
    keyTakeaways: [
      "Great writers can navigate any interview tone — including comedy.",
      "Writers' rituals matter more than their reputations.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "writing"],
  },
];

export default videos;
