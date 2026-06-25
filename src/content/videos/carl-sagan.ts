import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "sagan-pale-blue-dot",
    personSlug: "carl-sagan",
    title: "Pale Blue Dot — Reading by Carl Sagan",
    kind: "Speech",
    year: "1994",
    length: "4 min",
    youtubeId: "wupToqz1e2g",
    description:
      "Sagan reads his own meditation on the Voyager 1 photograph of Earth from 3.7 billion miles away — one of the most quoted passages in modern science writing.",
    tags: ["pale-blue-dot", "perspective", "writing"],
    keyTakeaways: [
      "Scale and humility are the same lesson.",
      "Every conflict in human history happened on a pixel.",
      "The image is the argument.",
    ],
    difficulty: "Beginner",
    topics: ["science", "philosophy"],
  },
  {
    id: "sagan-pale-blue-dot-official",
    personSlug: "carl-sagan",
    title: "Pale Blue Dot — Official Visualization",
    kind: "Documentary",
    year: "2020",
    length: "4 min",
    youtubeId: "GO5FwsblpT8",
    description:
      "The Planetary Society's official animated visualization paired with Sagan's reading.",
    tags: ["voyager", "earth", "visual"],
    keyTakeaways: [
      "Visualizing scale changes what the words mean.",
      "Voyager's perspective is humanity's most distant self-portrait.",
      "The image needs the words; the words need the image.",
    ],
    difficulty: "Beginner",
    topics: ["science", "space"],
  },
  {
    id: "sagan-charlie-rose-1996",
    personSlug: "carl-sagan",
    title: "Carl Sagan Interviewed by Charlie Rose (1996)",
    kind: "Interview",
    year: "1996",
    length: "55 min",
    youtubeId: "yLQ2qHBuQZU",
    description:
      "Sagan's final major television interview — covers skepticism, the future of science, and what he thinks people should know.",
    tags: ["skepticism", "interview", "legacy"],
    keyTakeaways: [
      "Skepticism and wonder are not opposites.",
      "The combustible mix of ignorance and power threatens democracy.",
      "Teach the method, not just the conclusions.",
    ],
    difficulty: "Intermediate",
    topics: ["science", "philosophy"],
  },
  {
    id: "sagan-charlie-rose-demon",
    personSlug: "carl-sagan",
    title: "Sagan on The Demon-Haunted World — Charlie Rose Rewind",
    kind: "Interview",
    year: "1996",
    length: "15 min",
    youtubeId: "dtCwxFTMMDg",
    description:
      "Sagan defends the case for scientific literacy and the baloney detection kit in a focused TV segment.",
    tags: ["skepticism", "demon-haunted", "literacy"],
    keyTakeaways: [
      "Scientific literacy is a self-defense skill for citizens.",
      "Pseudoscience fills the vacuum left by bad science education.",
      "Extraordinary claims require extraordinary evidence.",
    ],
    difficulty: "Intermediate",
    topics: ["science", "philosophy"],
  },
  {
    id: "sagan-cosmos-intro",
    personSlug: "carl-sagan",
    title: "Introduction to Carl Sagan's Cosmos",
    kind: "Documentary",
    year: "1980",
    length: "10 min",
    youtubeId: "h8k48bXJDDc",
    description:
      "The opening of 'Cosmos: A Personal Voyage' — Sagan's invitation to think at the scale of the universe.",
    tags: ["cosmos", "education", "wonder"],
    keyTakeaways: [
      "Start by setting the scale of the topic, not the details.",
      "Wonder is a teaching strategy, not a decoration.",
      "Pacing earns the audience's attention.",
    ],
    difficulty: "Beginner",
    topics: ["science", "communication"],
  },
];

export default videos;
