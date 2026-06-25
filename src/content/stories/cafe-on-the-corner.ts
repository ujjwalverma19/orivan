import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "cafe-on-the-corner",
  title: "Two years to break even, twelve to stay there",
  authorName: "Giulia P.",
  role: "Café Owner",
  summary:
    "I opened a six-table café in a forgotten part of Bologna. The hardest year was the fourth, when the neighbourhood found us and almost broke us.",
  country: "Italy",
  tags: ["small-business", "founder", "operations", "hospitality"],
  milestones: [
    {
      year: "2012",
      title: "Signed the lease, then learned to make coffee",
      story:
        "I had worked in restaurants but never owned one. Spent three months as an unpaid barista in a friend's place before opening. Best decision I made.",
      lesson: "Apprenticeship is cheap tuition for an expensive lesson.",
    },
    {
      year: "2016",
      title: "The queue that nearly killed us",
      story:
        "A magazine wrote about us. Saturday queues went around the corner. We doubled staff, halved quality, lost the regulars. It took eight months to win them back.",
      lesson: "Growth you can't deliver against is the most expensive marketing.",
    },
    {
      year: "2024",
      title: "Still here, smaller on purpose",
      story:
        "We turned down a second location three times. Six tables, one corner, twelve years. The accountant calls us boring. Boring paid for my daughter's school.",
      lesson: "There is a size at which a business stops being a craft. Know yours.",
    },
  ],
  failures: [
    {
      title: "Took the magazine attention as a mandate to scale",
      lesson: "Attention is not demand. Confirm one before responding to the other.",
    },
  ],
  status: "published",
  createdAt: "2024-01-30T10:00:00.000Z",
};

export default story;
