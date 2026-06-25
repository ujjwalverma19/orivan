import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "scientific-minds",
  title: "Scientific Minds",
  description:
    "Researchers who reshaped what humans understand about the physical world — and how they teach the next generation to think.",
  featured: false,
  personSlugs: [
    "marie-curie",
    "richard-feynman",
    "daniel-kahneman",
    "tim-berners-lee",
    "geoffrey-hinton",
    "carl-sagan",
    "nikola-tesla",
    "jane-goodall",
    "alan-kay",
  ],
  auto: { roles: ["Scientist"], tags: ["science", "physics"] },
};

export default collection;
