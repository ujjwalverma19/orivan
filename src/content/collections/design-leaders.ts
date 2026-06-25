import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "design-leaders",
  title: "Design Leaders",
  description:
    "Taste as a leadership discipline. Founders and operators who used design culture as a competitive moat.",
  featured: true,
  featuredOrder: 3,
  personSlugs: [
    "steve-jobs",
    "brian-chesky",
    "melanie-perkins",
    "dieter-rams",
    "jony-ive",
    "don-norman",
    "edward-tufte",
    "alan-kay",
  ],
  auto: { tags: ["design"], roles: ["Designer"] },
};

export default collection;
