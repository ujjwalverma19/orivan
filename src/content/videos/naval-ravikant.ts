import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "naval-how-to-get-rich-2019",
    personSlug: "naval-ravikant",
    title: "How to Get Rich (Without Getting Lucky) — Tweetstorm Read",
    kind: "Talk",
    year: "2019",
    length: "3h 20m",
    youtubeId: "1-TZqOsVCNM",
    description:
      "Naval's own audio reading of his viral How-to-Get-Rich tweetstorm, with extended explanations.",
    tags: ["wealth", "leverage", "judgment"],
    keyTakeaways: [
      "Seek wealth, not money or status.",
      "Build specific knowledge through obsession.",
      "Use code and media as permissionless leverage.",
    ],
    difficulty: "Beginner",
    topics: ["wealth", "leverage"],
  },
  {
    id: "naval-joe-rogan-2019",
    personSlug: "naval-ravikant",
    title: "The Joe Rogan Experience — Naval Ravikant",
    kind: "Interview",
    year: "2019",
    length: "2h 12m",
    youtubeId: "3qHkcs3kG44",
    description:
      "Naval's most-watched long-form interview, covering wealth, happiness, meditation, and decision-making.",
    tags: ["happiness", "philosophy", "meditation"],
    keyTakeaways: [
      "Desire is a contract with yourself to be unhappy until you get what you want.",
      "Happiness is a skill — and a default.",
      "Reading what you love until you love to read.",
    ],
    difficulty: "Intermediate",
    topics: ["philosophy", "happiness"],
  },
  {
    id: "naval-knowledge-project-2017",
    personSlug: "naval-ravikant",
    title: "The Knowledge Project — Shane Parrish",
    kind: "Interview",
    year: "2017",
    length: "1h 30m",
    youtubeId: "mGY2To_HW98",
    description:
      "Naval and Shane Parrish on decision-making, mental models, and learning to think clearly.",
    tags: ["decision-making", "mental-models"],
    keyTakeaways: [
      "Clear thinkers appeal to their own authority.",
      "Skip the middle of decision trees; pick from the easy ones first.",
      "Lifelong learning is the meta-skill.",
    ],
    difficulty: "Intermediate",
    topics: ["decision-making", "mental-models"],
  },
  {
    id: "naval-tim-ferriss-2015",
    personSlug: "naval-ravikant",
    title: "The Tim Ferriss Show — Naval Ravikant",
    kind: "Interview",
    year: "2015",
    length: "2h 03m",
    youtubeId: "HiYo14wylQw",
    description:
      "Their original long-form conversation: AngelList, philosophy, decision-making, and reading habits.",
    tags: ["angellist", "philosophy", "reading"],
    keyTakeaways: [
      "Read what you love until you love to read.",
      "Hard choices are the easy ones — pick them quickly.",
      "Status games and wealth games are different games.",
    ],
    difficulty: "Intermediate",
    topics: ["reading", "philosophy"],
  },
];

export default videos;
