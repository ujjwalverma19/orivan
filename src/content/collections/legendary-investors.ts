import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "legendary-investors",
  title: "Legendary Investors",
  description:
    "Capital allocators who treat investing as a craft of patience, judgment, and compounding — and rewrote the rules of how money is put to work.",
  featured: false,
  personSlugs: ["warren-buffett", "charlie-munger", "ray-dalio", "naval-ravikant"],
  auto: { roles: ["Investor"], tags: ["investing"] },
};

export default collection;
