import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "dravid-bradman-oration-2011",
    personSlug: "rahul-dravid",
    title: "Rahul Dravid — Sir Donald Bradman Oration 2011",
    kind: "Speech",
    year: "2011",
    length: "44 min",
    youtubeId: "7m9j4FZWtUY",
    description:
      "Dravid's full Bradman Oration in Canberra — the first non-Australian to deliver the lecture. A clinic on the spirit of cricket.",
    tags: ["bradman-oration", "speech", "cricket-history"],
    keyTakeaways: [
      "Respect for the game is the deepest form of respect for yourself.",
      "Cross-cultural respect is built by reading more than you talk.",
      "Test cricket is the form most worth defending.",
    ],
    difficulty: "Beginner",
    topics: ["leadership", "cricket"],
  },
  {
    id: "dravid-mak-pataudi-lecture",
    personSlug: "rahul-dravid",
    title: "M.A.K. Pataudi Memorial Lecture",
    kind: "Speech",
    year: "2015",
    length: "34 min",
    youtubeId: "Lc9HOYN8SPo",
    description:
      "Dravid's Pataudi Memorial Lecture on captaincy, character, and the unglamorous work that defines great cricketers.",
    tags: ["captaincy", "speech", "mentorship"],
    keyTakeaways: [
      "Captaincy is about people, not tactics.",
      "Take the loss publicly. Hand the win to someone else.",
      "The unglamorous role often has the highest leverage.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "cricket"],
  },
  {
    id: "dravid-breakfast-with-champions",
    personSlug: "rahul-dravid",
    title: "Rahul Dravid at the Tiger Pataudi Memorial Lecture",
    kind: "Speech",
    year: "2015",
    length: "29 min",
    youtubeId: "irb5FgnepmE",
    description:
      "An extended cut of Dravid's Pataudi lecture in New Delhi — on the duties of senior players to those who come next.",
    tags: ["mentorship", "speech", "cricket-history"],
    keyTakeaways: [
      "Mentorship is the quietest leverage in any team.",
      "The most leveraged jobs are upstream of the spotlight.",
      "Protect the young from the noise so they can find the craft.",
    ],
    difficulty: "Beginner",
    topics: ["mentorship", "cricket"],
  },
  {
    id: "dravid-180-eden-gardens",
    personSlug: "rahul-dravid",
    title: "Rahul Dravid — Overage Business Is Toxic | Wisden India",
    kind: "Interview",
    year: "2018",
    length: "11 min",
    youtubeId: "38f4GwVV8VA",
    description:
      "Dravid on age fraud in age-group cricket and the structural reforms India needed — a rare on-record advocacy moment.",
    tags: ["youth-cricket", "reform", "coaching"],
    keyTakeaways: [
      "Systems that tolerate cheating eventually rot the talent pool.",
      "Coaching the pipeline is more leveraged than coaching the seniors.",
      "Speak up about the structural problems no one else will.",
    ],
    difficulty: "Intermediate",
    topics: ["coaching", "reform"],
  },
  {
    id: "dravid-bcci-coaching-talk",
    personSlug: "rahul-dravid",
    title: "Rahul Dravid — Bradman Oration 2011 (Part II)",
    kind: "Speech",
    year: "2011",
    length: "21 min",
    youtubeId: "2HIxxKsdKI4",
    description:
      "Second part of the Bradman Oration — Dravid on the threats to Test cricket, the future of the game, and the responsibilities of players.",
    tags: ["bradman-oration", "test-cricket", "speech"],
    keyTakeaways: [
      "Test cricket survives only if the players themselves defend it.",
      "Honesty about commercial pressure is the start of resistance to it.",
      "Athletes have civic responsibilities to the game that fed them.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "cricket"],
  },
];

export default videos;
