import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "kahneman-ted-2010-experiencing-self",
    personSlug: "daniel-kahneman",
    title: "The Riddle of Experience vs. Memory — TED",
    kind: "Talk",
    year: "2010",
    length: "20 min",
    youtubeId: "XgRlrBl-7Yg",
    description:
      "Kahneman's most-watched TED talk introducing the experiencing self vs. the remembering self — why our memories and our happiness rarely agree.",
    tags: ["psychology", "happiness", "memory"],
    keyTakeaways: [
      "The remembering self writes the story; the experiencing self lives the moments.",
      "We choose memories of experiences, not experiences themselves.",
      "Public policy serves both selves only if it measures both.",
    ],
    difficulty: "Beginner",
    topics: ["psychology", "happiness"],
  },
  {
    id: "kahneman-google-talk-thinking-fast",
    personSlug: "daniel-kahneman",
    title: "Talks at Google — Thinking, Fast and Slow",
    kind: "Talk",
    year: "2011",
    length: "1h 02m",
    youtubeId: "CjVQJdIrDJ0",
    description:
      "Kahneman walks Google engineers through the System 1 / System 2 framework that organizes his life's research.",
    tags: ["psychology", "decision-making", "biases"],
    keyTakeaways: [
      "Two systems run in parallel; one is fast and lazy, one is slow and careful.",
      "Most errors come from System 1 being trusted where System 2 belongs.",
      "Algorithms beat experts whenever feedback is noisy.",
    ],
    difficulty: "Intermediate",
    topics: ["psychology", "decision-making"],
  },
  {
    id: "kahneman-rationally-speaking",
    personSlug: "daniel-kahneman",
    title: "Intuition and Rationality — Conversation with Daniel Kahneman",
    kind: "Interview",
    year: "2015",
    length: "44 min",
    youtubeId: "Yb5kh6KqHfE",
    description:
      "Kahneman in extended conversation on when expert intuition can be trusted and when it must be replaced with rules.",
    tags: ["intuition", "expertise", "decision-making"],
    keyTakeaways: [
      "Expertise requires a regular environment with prompt, accurate feedback.",
      "Without those conditions, confidence is just overclaiming.",
      "Replace judgment with simple rules in noisy domains.",
    ],
    difficulty: "Intermediate",
    topics: ["intuition", "decision-making"],
  },
  {
    id: "kahneman-tyler-cowen-conversation",
    personSlug: "daniel-kahneman",
    title: "Conversations with Tyler — Daniel Kahneman on Cutting Through the Noise",
    kind: "Interview",
    year: "2018",
    length: "1h 02m",
    youtubeId: "VRLDAT05KoE",
    description:
      "Tyler Cowen interviews Kahneman on noise vs. bias, the limits of expert judgment, and why so much of his own thinking has changed over time.",
    tags: ["noise", "judgment", "interview"],
    keyTakeaways: [
      "Variability in expert judgments is as costly as systematic bias.",
      "Decompose decisions into independent estimates and average them.",
      "Update your priors publicly — it strengthens, not weakens, your authority.",
    ],
    difficulty: "Intermediate",
    topics: ["judgment", "interview"],
  },
  {
    id: "kahneman-bbc-hardtalk",
    personSlug: "daniel-kahneman",
    title: "Nudgestock — Daniel Kahneman on Noise",
    kind: "Keynote",
    year: "2021",
    length: "44 min",
    youtubeId: "VgfdIrJUgRw",
    description:
      "Kahneman's keynote on the central thesis of 'Noise' — how invisible variability sabotages medical, judicial, and corporate decisions.",
    tags: ["noise", "judgment", "applied"],
    keyTakeaways: [
      "A noise audit reveals more error than any bias-correction effort.",
      "Algorithmic decision aids beat expert judgment in noisy domains.",
      "The fix is structural, not psychological — change the system, not the person.",
    ],
    difficulty: "Intermediate",
    topics: ["noise", "applied"],
  },
];

export default videos;
