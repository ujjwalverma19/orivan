import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "great-communicators",
  title: "Great Communicators",
  description:
    "Storytellers who turned keynotes into theater and pitches into pilgrimages. The discipline of making the inevitable feel obvious.",
  featured: true,
  featuredOrder: 4,
  personSlugs: [
    "steve-jobs",
    "brian-chesky",
    "elon-musk",
    "shah-rukh-khan",
    "denzel-washington",
    "richard-feynman",
    "carl-sagan",
    "paul-graham",
  ],
  auto: { tags: ["storytelling", "pitching"] },
};

export default collection;
