import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "resilient-builders",
  title: "Resilient Builders",
  description:
    "Founders who were fired, rejected a hundred times, or three failed launches from bankruptcy — and the route they took back.",
  featured: true,
  featuredOrder: 5,
  personSlugs: [
    "melanie-perkins",
    "elon-musk",
    "steve-jobs",
    "brian-chesky",
    "serena-williams",
    "michael-jordan",
    "marie-curie",
    "s1mple",
    "ratan-tata",
    "roger-federer",
    "jensen-huang",
    "narayana-murthy",
    "verghese-kurien",
    "geoffrey-hinton",
    "viktor-frankl",
    "nikola-tesla",
    "ray-dalio",
    "jane-goodall",
    "george-orwell",
  ],
  auto: { tags: ["persistence", "crisis-leadership"] },
};

export default collection;
