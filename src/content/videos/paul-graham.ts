import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "pg-before-the-startup",
    personSlug: "paul-graham",
    title: "Before the Startup — Stanford CS183B",
    kind: "Talk",
    year: "2014",
    length: "51 min",
    youtubeId: "ii1jcLg-eIQ",
    description:
      "Graham's classic lecture from the 'How to Start a Startup' Stanford course — what to do (and not do) before starting a company.",
    tags: ["startups", "students", "founders"],
    keyTakeaways: [
      "Don't start a startup in college; start later when the idea finds you.",
      "Counterintuitive truths about startups feel wrong because your intuitions formed in normal companies.",
      "Learn powerful things and meet potential co-founders — that's it.",
    ],
    difficulty: "Beginner",
    topics: ["startups", "founders"],
  },
  {
    id: "pg-startup-school-2013",
    personSlug: "paul-graham",
    title: "Office Hours at Startup School 2013",
    kind: "Interview",
    year: "2013",
    length: "47 min",
    youtubeId: "syoqjYLDs48",
    description:
      "Live founder coaching with Sam Altman — real-time diagnoses of pitches, products, and pivots.",
    tags: ["startups", "office-hours"],
    keyTakeaways: [
      "Most founder questions are about confidence, not strategy.",
      "Specificity is the cure for confused positioning.",
      "Talk to ten users today; you can't research your way out of a startup.",
    ],
    difficulty: "Beginner",
    topics: ["startups"],
  },
  {
    id: "pg-startup-ideas",
    personSlug: "paul-graham",
    title: "Paul Graham on How to Get Startup Ideas",
    kind: "Talk",
    year: "2018",
    length: "33 min",
    youtubeId: "FlCWg-KkUN4",
    description:
      "Graham's distilled framework for finding startup ideas — live in the future, notice what's missing, build it for yourself first.",
    tags: ["startups", "ideas"],
    keyTakeaways: [
      "The best ideas look like toys to outsiders.",
      "Build for yourself; you are the first qualified user.",
      "Schlep blindness hides the biggest opportunities in plain sight.",
    ],
    difficulty: "Beginner",
    topics: ["startups"],
  },
  {
    id: "pg-yc-archives",
    personSlug: "paul-graham",
    title: "Paul Graham and Jessica Livingston on Starting YC",
    kind: "Interview",
    year: "2020",
    length: "1h 04m",
    youtubeId: "SuoPiiUBcOk",
    description:
      "Origin story of Y Combinator with Jessica Livingston — the early bets, the model, and the mistakes they nearly made.",
    tags: ["yc", "history", "founders"],
    keyTakeaways: [
      "YC's model came from inverting standard VC norms.",
      "Jessica reads founders better than almost anyone.",
      "The first batch decided the brand for everything that followed.",
    ],
    difficulty: "Intermediate",
    topics: ["startups", "history"],
  },
  {
    id: "pg-ralston-conversation",
    personSlug: "paul-graham",
    title: "A Conversation with Paul Graham — Geoff Ralston",
    kind: "Interview",
    year: "2018",
    length: "42 min",
    youtubeId: "4WO5kJChg3w",
    description:
      "Wide-ranging conversation on essays, founder mode, and how YC's culture evolved over a decade.",
    tags: ["essays", "yc", "writing"],
    keyTakeaways: [
      "Writing is thinking; if you can't write the argument you don't have it.",
      "Default to fewer rules and more trust at small scale.",
      "Founders who write tend to think more clearly.",
    ],
    difficulty: "Intermediate",
    topics: ["writing", "leadership"],
  },
];

export default videos;
