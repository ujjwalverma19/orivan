import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "srk-ted-talk-2017",
    personSlug: "shah-rukh-khan",
    title: "TED — Thoughts on Humanity, Fame and Love",
    kind: "Talk",
    year: "2017",
    length: "17 min",
    youtubeId: "9D05ej8u-gU",
    description:
      "SRK's TED Talk in Vancouver — a witty, personal address on aging, fame, identity, and what humanity owes itself.",
    tags: ["humanity", "fame", "philosophy"],
    keyTakeaways: [
      "Self-deprecation disarms a global audience.",
      "Fame is a stage on which to do something useful, not a destination.",
    ],
    difficulty: "Beginner",
    topics: ["philosophy", "career"],
  },
  {
    id: "srk-david-letterman-2019",
    personSlug: "shah-rukh-khan",
    title: "My Next Guest Needs No Introduction — David Letterman",
    kind: "Interview",
    year: "2019",
    length: "55 min",
    youtubeId: "gVaJulIZmXo",
    description:
      "David Letterman travels to Mumbai to interview SRK on family, fandom, and the business of Bollywood.",
    tags: ["interview", "biography"],
    keyTakeaways: [
      "Direct fan relationships are an asset the industry can't intermediate.",
      "Bollywood is a brand business as much as a film business.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "biography"],
  },
  {
    id: "srk-yale-chubb-2012",
    personSlug: "shah-rukh-khan",
    title: "Yale Chubb Fellowship Address",
    kind: "Speech",
    year: "2012",
    length: "53 min",
    youtubeId: "q0OaOnT8res",
    description:
      "SRK as a Chubb Fellow at Yale, reflecting on his career, India, and the responsibility of public figures.",
    tags: ["speech", "career", "india"],
    keyTakeaways: [
      "Speak at universities to test ideas before they reach films.",
      "Public stages are training grounds for the next chapter of a career.",
    ],
    difficulty: "Intermediate",
    topics: ["speech", "career"],
  },
  {
    id: "srk-edinburgh-honorary-2015",
    personSlug: "shah-rukh-khan",
    title: "Edinburgh Honorary Doctorate Acceptance Address",
    kind: "Speech",
    year: "2015",
    length: "18 min",
    youtubeId: "Z-pIbTvKqJQ",
    description:
      "SRK's acceptance speech for an honorary doctorate from the University of Edinburgh.",
    tags: ["speech", "honors"],
    keyTakeaways: [
      "Public honors are an opportunity to make a generational argument.",
      "Cross-cultural speeches require translation of context, not language.",
    ],
    difficulty: "Beginner",
    topics: ["speech", "career"],
  },
  {
    id: "srk-bbc-interview-2023",
    personSlug: "shah-rukh-khan",
    title: "BBC Asian Network — Pathaan & The Comeback",
    kind: "Interview",
    year: "2023",
    length: "30 min",
    youtubeId: "FejvlvnWtMQ",
    description:
      "SRK's BBC interview after Pathaan's release, on his five-year break and what he learned from stepping away.",
    tags: ["interview", "comeback", "pathaan"],
    keyTakeaways: [
      "Stepping back is part of the act.",
      "Audiences reward you for the discipline of waiting.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "comeback"],
  },
];

export default videos;
