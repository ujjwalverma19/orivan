import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "nolan-bafta-screenwriters-2017",
    personSlug: "christopher-nolan",
    title: "BAFTA — A Life in Pictures with Christopher Nolan",
    kind: "Interview",
    year: "2017",
    length: "1h 11m",
    youtubeId: "iYlNtbpn7AQ",
    description:
      "BAFTA's long-form 'A Life in Pictures' interview with Christopher Nolan, covering his career from Following to Dunkirk.",
    tags: ["career", "craft", "filmmaking"],
    keyTakeaways: [
      "Constraints created the filmmaker, not despite them.",
      "Each project is a license to learn one new technique.",
    ],
    difficulty: "Intermediate",
    topics: ["filmmaking", "career"],
  },
  {
    id: "nolan-directors-guild-oppenheimer",
    personSlug: "christopher-nolan",
    title: "DGA Q&A — Oppenheimer with Christopher Nolan",
    kind: "Interview",
    year: "2023",
    length: "55 min",
    youtubeId: "mm4l7KsrLPA",
    description:
      "Directors Guild Q&A about Oppenheimer, including IMAX black-and-white photography and the decision to shoot at Los Alamos.",
    tags: ["oppenheimer", "imax", "craft"],
    keyTakeaways: [
      "Format choices are story choices.",
      "Shoot on location when the location is the subject.",
    ],
    difficulty: "Advanced",
    topics: ["filmmaking", "craft"],
  },
  {
    id: "nolan-princeton-baccalaureate-2015",
    personSlug: "christopher-nolan",
    title: "Princeton Baccalaureate Address",
    kind: "Speech",
    year: "2015",
    length: "23 min",
    youtubeId: "wOqYlCLmElM",
    description:
      "Nolan's Princeton baccalaureate address on reality, perception, and what filmmaking teaches about ambition.",
    tags: ["speech", "philosophy", "students"],
    keyTakeaways: [
      "Dream big, even when the dream isn't yet credible.",
      "Reality is the medium filmmakers most under-use.",
    ],
    difficulty: "Beginner",
    topics: ["speech", "philosophy"],
  },
  {
    id: "nolan-kermode-imax-2017",
    personSlug: "christopher-nolan",
    title: "Mark Kermode in 3D — Dunkirk Interview",
    kind: "Interview",
    year: "2017",
    length: "44 min",
    youtubeId: "R9oOUPE-JaQ",
    description:
      "Mark Kermode interviews Nolan on Dunkirk, structure, IMAX, and the experience of cinema.",
    tags: ["dunkirk", "imax", "structure"],
    keyTakeaways: [
      "Intercut timelines can amplify rather than confuse.",
      "Defend the theatrical experience even when the market doesn't.",
    ],
    difficulty: "Intermediate",
    topics: ["filmmaking", "craft"],
  },
  {
    id: "nolan-variety-actors-studio-2023",
    personSlug: "christopher-nolan",
    title: "Variety Directors on Directors — Nolan x Spielberg",
    kind: "Interview",
    year: "2023",
    length: "30 min",
    youtubeId: "cpm8s1Y4IrQ",
    description:
      "Variety's conversation between Christopher Nolan and Steven Spielberg about Oppenheimer, technique, and lifelong craft.",
    tags: ["filmmaking", "craft", "interview"],
    keyTakeaways: [
      "Direct conversations between filmmakers reveal more than press junkets.",
      "Career-spanning filmmakers borrow techniques across generations.",
    ],
    difficulty: "Advanced",
    topics: ["filmmaking", "craft"],
  },
];

export default videos;
