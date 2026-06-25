import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "startup-founders",
  title: "Startup Founders",
  description:
    "Builders who turned a stubborn idea into a company. Study the persistence, the pivot, and the boring middle that no pitch deck ever shows.",
  featured: true,
  featuredOrder: 1,
  personSlugs: [
    "melanie-perkins",
    "brian-chesky",
    "elon-musk",
    "steve-jobs",
    "jeff-bezos",
    "sara-blakely",
    "narayana-murthy",
    "nandan-nilekani",
    "jensen-huang",
    "verghese-kurien",
    "paul-graham",
    "john-carmack",
  ],
  auto: { roles: ["Founder", "Co-founder", "CEO"] },
};

export default collection;
