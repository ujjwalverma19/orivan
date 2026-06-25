import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "third-generation-the-bakery",
  title: "Third generation, first to change the recipe",
  authorName: "Diego C.",
  role: "Family Bakery Owner",
  summary:
    "My grandfather opened the bakery in 1962. I inherited it at 31, with a queue of regulars and a recipe book I wasn't allowed to touch.",
  country: "Mexico",
  tags: ["family-business", "small-business", "tradition", "founder"],
  milestones: [
    {
      year: "2020",
      title: "My father's last morning at the oven",
      story:
        "He showed me how he scored the bread one final time, then handed me the apron and went home. He never came back to the counter. He still calls every Friday to ask the numbers.",
      lesson: "Some handovers are not negotiations. They are gifts you accept.",
    },
    {
      year: "2022",
      title: "Added one new bread",
      story:
        "A whole-grain loaf my abuela never made. Regulars complained for three months, then asked for it by name. The recipe book got a new page.",
      lesson: "Tradition that can't evolve is just nostalgia in an apron.",
    },
  ],
  failures: [
    {
      title: "Tried to modernise the brand before the bread",
      lesson: "The customers came for the loaf, not the logo. Lead with the work.",
    },
  ],
  status: "published",
  createdAt: "2024-04-04T07:30:00.000Z",
};

export default story;
