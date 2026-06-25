import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "peak-athletes",
  title: "Peak Athletes",
  description:
    "Champions who built dynasties through preparation, recovery, and relentless self-management — across tennis courts, basketball arenas, football pitches, and cricket grounds.",
  featured: true,
  featuredOrder: 7,
  personSlugs: [
    "serena-williams",
    "michael-jordan",
    "lionel-messi",
    "cristiano-ronaldo",
    "roger-federer",
    "sachin-tendulkar",
    "virat-kohli",
    "rahul-dravid",
  ],
  auto: { roles: ["Athlete"], tags: ["athlete", "champion", "discipline"] },
};

export default collection;
