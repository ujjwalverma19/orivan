import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "perkins-lennys-rejections",
    personSlug: "melanie-perkins",
    title: "She Turned 100+ Rejections Into a $42B Company",
    kind: "Interview",
    year: "2024",
    length: "1h 32m",
    youtubeId: "-LywX3T5Scc",
    description:
      "On Lenny's Podcast — Perkins on the years of investor no's, building Canva from a tiny Perth bedroom, and the long road to becoming an overnight success.",
    tags: ["startup", "founder", "persistence"],
    keyTakeaways: [
      "Rejection is information, not a verdict.",
      "Solve a problem you have personally lived.",
      "Big visions need patient capital and patient teams.",
    ],
    difficulty: "Beginner",
    topics: ["startup", "persistence"],
  },
  {
    id: "perkins-twist",
    personSlug: "melanie-perkins",
    title: "How Canva Became a Global Design Empire",
    kind: "Interview",
    year: "2023",
    length: "1h 04m",
    youtubeId: "8TBSg79Gf0M",
    description:
      "Perkins on This Week in Startups — turning a college side project in Australia into one of the world's most valuable software companies.",
    tags: ["product", "strategy", "culture"],
    keyTakeaways: [
      "Set crazy big goals, then plan backwards.",
      "Hire for values before skills.",
      "Distribution matters as much as the product itself.",
    ],
    difficulty: "Intermediate",
    topics: ["product", "strategy"],
  },
  {
    id: "perkins-sxsw-sydney",
    personSlug: "melanie-perkins",
    title: "Canva's Story — From Idea to Startup to World Leader",
    kind: "Talk",
    year: "2023",
    length: "46 min",
    youtubeId: "EbiGblxQmIE",
    description:
      "A SXSW Sydney keynote where Perkins walks through Canva's product strategy, scaling culture, and the two-step plan she uses to move the company.",
    tags: ["product", "leadership", "scaling"],
    keyTakeaways: [
      "Two-step plans: the crazy big goal and the next concrete step.",
      "Healthy companies metabolize feedback quickly.",
      "Culture is what survives when you're not in the room.",
    ],
    difficulty: "Advanced",
    topics: ["leadership", "scaling"],
  },
  {
    id: "perkins-vivatech",
    personSlug: "melanie-perkins",
    title: "Melanie Perkins at VivaTech",
    kind: "Interview",
    year: "2024",
    length: "28 min",
    youtubeId: "FkS8eaLTeZU",
    description:
      "A VivaTech interview on AI, Canva's expansion into the enterprise, and what it took to win Silicon Valley's attention after years of nobody listening.",
    tags: ["founder", "ai", "growth"],
    keyTakeaways: [
      "Investors say no until something undeniable shifts.",
      "A demo is worth a thousand decks.",
      "Founders should never delegate the vision.",
    ],
    difficulty: "Beginner",
    topics: ["founder", "growth"],
  },
];

export default videos;
