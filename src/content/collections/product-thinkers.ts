import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "product-thinkers",
  title: "Product Thinkers",
  description:
    "Operators who start from the experience and work backward to the technology. Editors of ideas, not adders of features.",
  featured: true,
  featuredOrder: 2,
  personSlugs: [
    "steve-jobs",
    "brian-chesky",
    "melanie-perkins",
    "marissa-mayer",
    "tony-fadell",
    "don-norman",
    "alan-kay",
  ],
  auto: { tags: ["product", "design"] },
};

export default collection;
