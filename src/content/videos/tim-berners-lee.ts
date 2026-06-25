import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "berners-lee-ted-2009-data",
    personSlug: "tim-berners-lee",
    title: "TED — The Next Web of Open, Linked Data",
    kind: "Talk",
    year: "2009",
    length: "16 min",
    youtubeId: "OM6XIICm_qo",
    description:
      "Berners-Lee's TED talk arguing that the Web's next chapter is open linked data — and demanding governments and institutions release it raw.",
    tags: ["web", "open-data", "ted"],
    keyTakeaways: [
      "Raw data, now — withholding data is a form of gatekeeping.",
      "Linked data is the prerequisite for the next layer of the Web.",
      "Open standards plus open data compound for decades.",
    ],
    difficulty: "Beginner",
    topics: ["web", "open-data"],
  },
  {
    id: "berners-lee-ted-2010-linked-data",
    personSlug: "tim-berners-lee",
    title: "TED — The Year Open Data Went Worldwide",
    kind: "Talk",
    year: "2010",
    length: "6 min",
    youtubeId: "3YcZ3Zqk0a8",
    description:
      "One year after the 'raw data now' call, Berners-Lee shows the first wave of global open data initiatives that actually shipped.",
    tags: ["web", "open-data", "ted"],
    keyTakeaways: [
      "Public demand can shift institutional defaults in one year.",
      "Standards adoption follows visible reference implementations.",
      "Celebrate the early adopters publicly — it accelerates the next wave.",
    ],
    difficulty: "Beginner",
    topics: ["web", "open-data"],
  },
  {
    id: "berners-lee-cern-25th-anniversary",
    personSlug: "tim-berners-lee",
    title: "30 Years of the World Wide Web — Science Museum London",
    kind: "Talk",
    year: "2019",
    length: "55 min",
    youtubeId: "ykCPFUlasFk",
    description:
      "Berners-Lee at the Science Museum reflecting on three decades of the Web and the urgent work needed to fix what it has become.",
    tags: ["web", "history", "decentralization"],
    keyTakeaways: [
      "The original Web was designed for decentralized, individual agency.",
      "Centralization of personal data is the structural problem to solve next.",
      "Stewardship is part of invention, not a separate phase.",
    ],
    difficulty: "Beginner",
    topics: ["web", "history"],
  },
  {
    id: "berners-lee-acm-turing-lecture",
    personSlug: "tim-berners-lee",
    title: "ACM Turing Award Lecture — What is the Web and What is Its Future?",
    kind: "Keynote",
    year: "2017",
    length: "1h 02m",
    youtubeId: "BaMa4u4Fio4",
    description:
      "Berners-Lee's Turing Award lecture — the most authoritative single overview of the Web's design and its future trajectory.",
    tags: ["web", "computing", "future"],
    keyTakeaways: [
      "HTTP, HTML, and URL were minimum-viable protocols by design.",
      "Open standards beat proprietary ones at planetary scale.",
      "Architectural decisions made today shape the next 30 years.",
    ],
    difficulty: "Advanced",
    topics: ["web", "computing"],
  },
  {
    id: "berners-lee-bbc-hardtalk",
    personSlug: "tim-berners-lee",
    title: "BBC HARDtalk — Tim Berners-Lee on the Web's Risks (1997)",
    kind: "Interview",
    year: "1997",
    length: "23 min",
    youtubeId: "BOHyLkp7TpE",
    description:
      "A remarkable archival interview where Berners-Lee, just years after releasing the Web, warns it could divide as much as it unites.",
    tags: ["web", "ethics", "archive"],
    keyTakeaways: [
      "The inventor saw the structural risks early — but the structural fixes lagged.",
      "Universal access requires deliberate institutional defense.",
      "Predicting harm is easier than preventing it.",
    ],
    difficulty: "Beginner",
    topics: ["web", "ethics"],
  },
];

export default videos;
