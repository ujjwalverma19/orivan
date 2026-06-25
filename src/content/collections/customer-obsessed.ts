import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "customer-obsessed",
  title: "Customer Obsessed Leaders",
  description:
    "Builders who lived inside the customer's frustration long before they touched a roadmap. Empathy as a product strategy.",
  featured: true,
  featuredOrder: 6,
  personSlugs: ["brian-chesky", "melanie-perkins", "steve-jobs", "jeff-bezos"],
  auto: { tags: ["customer", "hospitality", "trust"] },
};

export default collection;
