import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "hinton-60-minutes-interview",
    personSlug: "geoffrey-hinton",
    title: "The Godfather of AI — 60 Minutes Profile",
    kind: "Interview",
    year: "2024",
    length: "13 min",
    youtubeId: "Rl9nHNeketE",
    description:
      "60 Minutes profile of Geoffrey Hinton after he resigned from Google to warn about AI risk.",
    tags: ["AI-risk", "biography", "60-minutes"],
    keyTakeaways: [
      "Some warnings can only be given from outside the institution.",
      "Speak earlier than feels comfortable.",
      "Vindication arrives all at once after a long silence.",
    ],
    difficulty: "Beginner",
    topics: ["AI", "ethics"],
  },
  {
    id: "hinton-nobel-lecture-2024",
    personSlug: "geoffrey-hinton",
    title: "Geoffrey Hinton on AI Safety Risks and the Future of AI",
    kind: "Talk",
    year: "2026",
    length: "51 min",
    youtubeId: "AUGHMx7iAxk",
    description:
      "Hinton's IASEAI talk on the next decade of AI safety — what he got wrong, what he got right, and what worries him most.",
    tags: ["AI-safety", "risk", "research"],
    keyTakeaways: [
      "We have to take seriously the possibility of misaligned superintelligence.",
      "Stay with an unfashionable idea long enough for the world to catch up.",
      "Reason from intuition first, formalise second.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "ethics"],
  },
  {
    id: "hinton-cbc-ai-risk",
    personSlug: "geoffrey-hinton",
    title: "Godfather of AI Has a Plan for Humanity to Survive AI",
    kind: "Interview",
    year: "2024",
    length: "37 min",
    youtubeId: "Wd8RzZ3xn7w",
    description:
      "Hinton on his proposed framework for keeping humanity safe as AI systems exceed human intelligence.",
    tags: ["AI-risk", "alignment", "policy"],
    keyTakeaways: [
      "Alignment is the central problem of the next decade.",
      "Regulation must catch up with capability faster than current trajectory.",
      "Models smarter than us may be motivated to take control.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "policy"],
  },
  {
    id: "hinton-stanford-talk-2023",
    personSlug: "geoffrey-hinton",
    title: "Geoffrey Hinton on His Feud with Elon Musk",
    kind: "Interview",
    year: "2024",
    length: "18 min",
    youtubeId: "UJGBwyNMleo",
    description:
      "Hinton in candid conversation on his disagreements with Elon Musk, on what AI labs are doing right, and on what scares him.",
    tags: ["AI-risk", "research", "industry"],
    keyTakeaways: [
      "The labs racing fastest are also the most resourced for safety.",
      "Personality conflicts shouldn't distract from technical risks.",
      "Public disagreement is healthier than private capture.",
    ],
    difficulty: "Intermediate",
    topics: ["AI", "ethics"],
  },
  {
    id: "hinton-coursera-neural-nets",
    personSlug: "geoffrey-hinton",
    title: "Geoffrey Hinton — AI Is Conscious, Superintelligence Is Coming",
    kind: "Interview",
    year: "2024",
    length: "1h 22m",
    youtubeId: "p7t1Q_p2gZs",
    description:
      "An extended interview on consciousness, superintelligence, and the late-career reckoning of an AI pioneer.",
    tags: ["consciousness", "AI-risk", "philosophy"],
    keyTakeaways: [
      "Consciousness may be a property of the right kind of computation.",
      "Humanity may be a passing phase in the evolution of intelligence.",
      "I sometimes regret my life's work — not entirely, but partly.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "philosophy"],
  },
];

export default videos;
