import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "tolkien-all-interviews",
    personSlug: "jrr-tolkien",
    title: "J.R.R. Tolkien — Complete Video Interview Collection",
    kind: "Interview",
    year: "2020",
    length: "39 min",
    youtubeId: "NTz2-im7s9k",
    description:
      "Consolidated archive of every surviving filmed Tolkien interview — voice, manner, and his own framing of Middle-earth.",
    tags: ["interview", "archive"],
    keyTakeaways: [
      "Tolkien spoke of the invented languages as the foundation, not the decoration.",
      "He resisted allegorical readings of LOTR.",
      "The legendarium was a lifelong scholarly project, not a marketing trilogy.",
    ],
    difficulty: "Intermediate",
    topics: ["literature", "history"],
  },
  {
    id: "tolkien-legacy-doc",
    personSlug: "jrr-tolkien",
    title: "J.R.R. Tolkien: The Legacy of Middle-Earth",
    kind: "Documentary",
    year: "2021",
    length: "57 min",
    youtubeId: "TiNmVzs3KSI",
    description:
      "Full documentary tracing Tolkien's life from South Africa to Oxford and the influence Middle-earth has had on global culture.",
    tags: ["biography", "legacy"],
    keyTakeaways: [
      "WWI is the unspoken backbone of the trilogy.",
      "Oxford philology was the scholarly engine behind Middle-earth.",
      "Christopher Tolkien's editorial work expanded the legendarium posthumously.",
    ],
    difficulty: "Beginner",
    topics: ["literature", "history"],
  },
  {
    id: "tolkien-bbc-1968",
    personSlug: "jrr-tolkien",
    title: "Tolkien on 'The Lord of the Rings' — BBC, 1968",
    kind: "Interview",
    year: "1968",
    length: "13 min",
    youtubeId: "rre7zQGcldI",
    description:
      "Rare BBC archive interview from 1968 — Tolkien at home in Oxford discussing LOTR, philology, and his writing routine.",
    tags: ["bbc", "archive"],
    keyTakeaways: [
      "Worldbuilding starts with language for Tolkien, not plot.",
      "He wrote evenings around academic duties for nearly two decades.",
      "He distrusted critics who wanted political allegory.",
    ],
    difficulty: "Beginner",
    topics: ["literature"],
  },
  {
    id: "tolkien-ww1-inspiration",
    personSlug: "jrr-tolkien",
    title: "How WW1 Inspired The Lord of the Rings — BBC Global",
    kind: "Documentary",
    year: "2019",
    length: "8 min",
    youtubeId: "1JF_COdf5Zg",
    description:
      "Short documentary tracing how Tolkien's Somme experiences shaped Mordor, the Dead Marshes, and the trilogy's tone.",
    tags: ["ww1", "context"],
    keyTakeaways: [
      "Trench warfare is encoded directly into Mordor's geography.",
      "Tolkien lost most of his close friends in WWI.",
      "Grief becomes mythology when it's named with care.",
    ],
    difficulty: "Beginner",
    topics: ["literature", "history"],
  },
  {
    id: "tolkien-1964-interview",
    personSlug: "jrr-tolkien",
    title: "J.R.R. Tolkien Interview about The Lord of the Rings (1964)",
    kind: "Interview",
    year: "1964",
    length: "23 min",
    youtubeId: "OEQ0qbUA-eo",
    description:
      "Long-form 1964 interview — Tolkien on the writing of LOTR, the invented languages, and his views on adaptations.",
    tags: ["interview", "archive"],
    keyTakeaways: [
      "Quenya and Sindarin came first; the world followed the languages.",
      "Tolkien preferred the long form because the story required it.",
      "He saw the work as historical mythology, not modern novel.",
    ],
    difficulty: "Intermediate",
    topics: ["literature"],
  },
];

export default videos;
