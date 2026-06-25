import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "chesky-blitzscaling",
    personSlug: "brian-chesky",
    title: "Blitzscaling — Launching Airbnb and the Challenges of Scale",
    kind: "Talk",
    year: "2015",
    length: "1h 02m",
    youtubeId: "W608u6sBFpo",
    description:
      "Chesky tells the founding story of Airbnb at Stanford's Blitzscaling class — air mattresses, cereal boxes, and the year nobody believed.",
    tags: ["startup", "storytelling", "design"],
    keyTakeaways: [
      "Do things that don't scale to find what works.",
      "The first 100 users teach you more than the next 100,000.",
      "Design is a competitive advantage when nobody else cares about it.",
    ],
    difficulty: "Beginner",
    topics: ["startup", "design"],
  },
  {
    id: "chesky-lennys-playbook",
    personSlug: "brian-chesky",
    title: "Brian Chesky's New Playbook",
    kind: "Interview",
    year: "2024",
    length: "1h 28m",
    youtubeId: "4ef0juAMqoE",
    description:
      "On Lenny's Podcast — Chesky on rebuilding Airbnb post-pandemic, founder mode, and running a functional organization.",
    tags: ["leadership", "organization", "product"],
    keyTakeaways: [
      "Founder mode beats manager mode at small scale.",
      "Functional orgs keep founders close to the product.",
      "Reviews and rituals are how you scale your taste.",
    ],
    difficulty: "Advanced",
    topics: ["leadership", "organization"],
  },
  {
    id: "chesky-the-circuit",
    personSlug: "brian-chesky",
    title: "At Home With the Billionaire CEO Behind Airbnb",
    kind: "Documentary",
    year: "2023",
    length: "24 min",
    youtubeId: "AKxPIWTQYys",
    description:
      "Bloomberg's The Circuit follows Chesky through his San Francisco home and inside Airbnb HQ for a portrait of how he actually operates.",
    tags: ["leadership", "lifestyle", "design"],
    keyTakeaways: [
      "Taste is built by living with the product you ship.",
      "Operating principles compound when leaders live them publicly.",
      "Pressure looks different when the company is your life's work.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "design"],
  },
  {
    id: "chesky-sinek-micromanagement",
    personSlug: "brian-chesky",
    title: "The Secret Art of Micromanagement — with Simon Sinek",
    kind: "Interview",
    year: "2024",
    length: "1h 03m",
    youtubeId: "6_tRZMzb94Q",
    description:
      "Chesky and Simon Sinek on A Bit of Optimism — when 'micromanagement' is actually high standards, and how founders set the bar without crushing the team.",
    tags: ["leadership", "culture", "standards"],
    keyTakeaways: [
      "Detail is love when it makes the product better.",
      "Lead the work you most want others to imitate.",
      "Standards travel through rituals, not memos.",
    ],
    difficulty: "Intermediate",
    topics: ["leadership", "culture"],
  },
];

export default videos;
