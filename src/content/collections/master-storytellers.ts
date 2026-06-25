import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "master-storytellers",
  title: "Master Storytellers",
  description:
    "Writers, directors and authors who built worlds readers and viewers refuse to leave. The craft of carrying an audience through a thousand pages or three hours of darkness.",
  featured: true,
  featuredOrder: 8,
  personSlugs: [
    "christopher-nolan",
    "hayao-miyazaki",
    "stephen-king",
    "toni-morrison",
    "george-orwell",
    "jrr-tolkien",
  ],
  auto: { tags: ["writing", "storytelling", "craft"] },
};

export default collection;
