import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "carmack-lex-fridman",
    personSlug: "john-carmack",
    title: "John Carmack: Doom, Quake, VR, AGI, Programming — Lex Fridman Podcast",
    kind: "Interview",
    year: "2022",
    length: "5h 16m",
    youtubeId: "I845O57ZSy4",
    description:
      "The definitive long-form interview — id Software's origin, the Quake engine rewrite, VR at Oculus, and why he's now chasing AGI at Keen Technologies.",
    tags: ["programming", "vr", "agi", "career"],
    keyTakeaways: [
      "Architectural sunk costs kill more projects than missed deadlines.",
      "Hardware humbles you; iterate anyway.",
      "Small teams with clarity outpace huge teams with politics.",
    ],
    difficulty: "Intermediate",
    topics: ["software", "career"],
  },
  {
    id: "carmack-quakecon-2011",
    personSlug: "john-carmack",
    title: "QuakeCon 2011 Keynote",
    kind: "Keynote",
    year: "2011",
    length: "3h 40m",
    youtubeId: "4zgYG-_ha28",
    description:
      "Annual unscripted technical address covering Rage's megatexture, mobile rendering, and the state of GPU architecture.",
    tags: ["graphics", "engines", "performance"],
    keyTakeaways: [
      "Optimize for the bottleneck you actually have, not the one you remember.",
      "Mobile GPUs are a parallel universe with their own rules.",
      "Long unscripted talks reveal more than rehearsed ones.",
    ],
    difficulty: "Advanced",
    topics: ["software"],
  },
  {
    id: "carmack-quakecon-2012",
    personSlug: "john-carmack",
    title: "QuakeCon 2012 Keynote",
    kind: "Keynote",
    year: "2012",
    length: "3h 17m",
    youtubeId: "wt-iVFxgFWk",
    description:
      "Deep dive into Doom 3 BFG, functional programming influences in C++, and early VR experiments before Oculus existed.",
    tags: ["graphics", "engines", "vr"],
    keyTakeaways: [
      "Pure functions reduce surface area for bugs even in C++.",
      "Early VR latency was the make-or-break problem.",
      "Engine refactoring is a lifestyle, not a project.",
    ],
    difficulty: "Advanced",
    topics: ["software"],
  },
  {
    id: "carmack-oculus-connect",
    personSlug: "john-carmack",
    title: "Oculus Connect Keynote",
    kind: "Keynote",
    year: "2014",
    length: "1h 50m",
    youtubeId: "gn8m5d74fk8",
    description:
      "Carmack's first major Oculus keynote — mobile VR, asynchronous timewarp, and the mental model of presence.",
    tags: ["vr", "graphics"],
    keyTakeaways: [
      "Latency is the dominant variable in VR comfort.",
      "Mobile VR will out-distribute PC VR by 10x.",
      "Presence is a binary; you have it or you don't.",
    ],
    difficulty: "Intermediate",
    topics: ["vr"],
  },
  {
    id: "carmack-oc6-keynote",
    personSlug: "john-carmack",
    title: "Oculus Connect 6 — Day 2 Keynote",
    kind: "Keynote",
    year: "2019",
    length: "2h 18m",
    youtubeId: "PMIDaomx0GA",
    description:
      "His unfiltered keynote on Quest, the discipline of shipping at Meta scale, and why he's transitioning to consulting CTO.",
    tags: ["vr", "leadership"],
    keyTakeaways: [
      "Quest validated standalone VR as the mass-market path.",
      "Org friction compounds faster than codebase complexity.",
      "Knowing when to step back is harder than knowing when to step up.",
    ],
    difficulty: "Intermediate",
    topics: ["vr", "leadership"],
  },
];

export default videos;
