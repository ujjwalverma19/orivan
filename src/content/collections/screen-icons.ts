import type { CollectionInput } from "@/content/schemas";

const collection: CollectionInput = {
  slug: "screen-icons",
  title: "Screen Icons",
  description:
    "Actors and directors whose work defined eras of cinema — performers who built audiences and storytellers who shaped what they expected.",
  featured: false,
  personSlugs: ["shah-rukh-khan", "denzel-washington", "christopher-nolan", "hayao-miyazaki"],
  auto: { tags: ["actor", "director", "film"] },
};

export default collection;
