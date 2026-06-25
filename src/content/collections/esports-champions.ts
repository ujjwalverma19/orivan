import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "esports-champions",
  title: "Esports Champions",
  description:
    "The new generation of competitive players who built careers on solo-queue ladders and turned video games into a global professional sport.",
  featured: false,
  personSlugs: ["faker", "s1mple"],
  auto: { roles: ["Esports Athlete"], tags: ["esports"] },
};

export default collection;
