import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "king-george-rr-martin-2017",
    personSlug: "stephen-king",
    title: "In Conversation with George R.R. Martin",
    kind: "Interview",
    year: "2017",
    length: "1h 30m",
    youtubeId: "xR7XMkjDGw0",
    description:
      "Stephen King and George R.R. Martin in a long-form public conversation about writing, characters, and prolific output.",
    tags: ["writing", "craft", "interview"],
    keyTakeaways: [
      "Daily output beats inspiration.",
      "Long-form authors disagree productively about character control.",
    ],
    difficulty: "Intermediate",
    topics: ["writing", "craft"],
  },
  {
    id: "king-on-writing-talks-at-google",
    personSlug: "stephen-king",
    title: "On Writing — Talks at Google",
    kind: "Talk",
    year: "2014",
    length: "55 min",
    youtubeId: "LLPe7pguifI",
    description:
      "Stephen King discusses his writing process, On Writing, and the discipline that sustains a fifty-year career.",
    tags: ["writing", "process", "talk"],
    keyTakeaways: [
      "Read three hours for every hour you write.",
      "Pick a word count and treat it like a job.",
    ],
    difficulty: "Beginner",
    topics: ["writing", "process"],
  },
  {
    id: "king-bbc-newsnight-2013",
    personSlug: "stephen-king",
    title: "BBC Newsnight — Stephen King Interview",
    kind: "Interview",
    year: "2013",
    length: "21 min",
    youtubeId: "2AiCS7YWXp4",
    description:
      "BBC Newsnight's interview with Stephen King on writing, his accident, and the legacy of his work.",
    tags: ["interview", "career", "bbc"],
    keyTakeaways: [
      "Physical recovery shapes the next chapter of a writing life.",
      "Long-tenured writers see their own catalog as a single conversation.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "career"],
  },
  {
    id: "king-fresh-air-2019",
    personSlug: "stephen-king",
    title: "Fresh Air with Terry Gross — Stephen King",
    kind: "Interview",
    year: "2019",
    length: "46 min",
    youtubeId: "YyUNspQJQXY",
    description:
      "NPR Fresh Air's video interview with Stephen King on writing horror, recovery, and politics.",
    tags: ["interview", "horror", "recovery"],
    keyTakeaways: [
      "Honest interviews about addiction extend the conversation past the work.",
      "Genre stigma is best outlasted, not argued with.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "writing"],
  },
  {
    id: "king-umass-lowell-interview",
    personSlug: "stephen-king",
    title: "UMass Lowell — A Conversation with Stephen King",
    kind: "Talk",
    year: "2012",
    length: "1h 04m",
    youtubeId: "NLfINvRut4I",
    description:
      "UMass Lowell's chancellor in conversation with Stephen King about his career, craft, and Maine.",
    tags: ["talk", "career", "maine"],
    keyTakeaways: [
      "Regional commitment can be a career advantage.",
      "Writers can mentor through public conversations as much as classes.",
    ],
    difficulty: "Beginner",
    topics: ["talk", "writing"],
  },
];

export default videos;
