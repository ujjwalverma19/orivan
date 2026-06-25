import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "denzel-actors-studio-2007",
    personSlug: "denzel-washington",
    title: "Inside the Actors Studio — Denzel Washington",
    kind: "Interview",
    year: "2007",
    length: "1h 30m",
    youtubeId: "9Xm_mcmgk6Q",
    description:
      "James Lipton's full Inside the Actors Studio episode with Denzel Washington on craft, theatre roots, and the discipline of preparation.",
    tags: ["craft", "theatre", "preparation"],
    keyTakeaways: [
      "Classical preparation outlasts trends.",
      "Theatre training holds up film performances decades later.",
    ],
    difficulty: "Intermediate",
    topics: ["craft", "theatre"],
  },
  {
    id: "denzel-dillard-commencement-2015",
    personSlug: "denzel-washington",
    title: "Dillard University Commencement Address — Put God First",
    kind: "Speech",
    year: "2015",
    length: "26 min",
    youtubeId: "BxY_eJLBflk",
    description:
      "Denzel's widely-shared 2015 Dillard University commencement address on faith, work ethic, and falling forward.",
    tags: ["speech", "commencement", "faith"],
    keyTakeaways: [
      "Fall forward — every failed try is information.",
      "Discipline and consistency outlast talent.",
    ],
    difficulty: "Beginner",
    topics: ["speech", "career"],
  },
  {
    id: "denzel-60-minutes-2002",
    personSlug: "denzel-washington",
    title: "60 Minutes — Denzel Washington on Training Day",
    kind: "Interview",
    year: "2002",
    length: "13 min",
    youtubeId: "Y9nM_9oBj2k",
    description:
      "60 Minutes profile after his Best Actor win for Training Day, covering his career arc and Oscars history.",
    tags: ["interview", "oscars"],
    keyTakeaways: [
      "Trust earned through prior roles enables risk in the next.",
      "Best Actor is the result of a body of work, not one film.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "career"],
  },
  {
    id: "denzel-fall-down-pomona-2011",
    personSlug: "denzel-washington",
    title: "Pomona Theater Department — A Conversation with Denzel",
    kind: "Talk",
    year: "2011",
    length: "1h 14m",
    youtubeId: "m_9O2vd4C_w",
    description:
      "Denzel in conversation with theatre students at Pomona College on craft, choosing roles, and the discipline of preparation.",
    tags: ["talk", "theatre", "students"],
    keyTakeaways: [
      "Prepare like the role depends on you, because it does.",
      "Live audiences keep film actors honest.",
    ],
    difficulty: "Intermediate",
    topics: ["theatre", "craft"],
  },
  {
    id: "denzel-aarp-interview-2021",
    personSlug: "denzel-washington",
    title: "AARP — Denzel Washington on a Lifetime of Acting",
    kind: "Interview",
    year: "2021",
    length: "22 min",
    youtubeId: "da5Go6dKmBk",
    description:
      "AARP's long-form interview with Denzel on faith, family, and the discipline of choosing roles after forty years.",
    tags: ["interview", "life", "career"],
    keyTakeaways: [
      "Older roles are chosen with different criteria than younger ones.",
      "Stability at home enables risk on screen.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "career"],
  },
];

export default videos;
