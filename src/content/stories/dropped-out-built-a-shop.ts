import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "dropped-out-built-a-shop",
  title: "I dropped out the week the shop hit profit",
  authorName: "Chinaza O.",
  role: "Student → Shop Owner",
  summary:
    "A side project printing tote bags from my dorm room turned into rent money, then full-time money. The hardest call was telling my father.",
  country: "Nigeria",
  tags: ["student", "small-business", "side-project", "family"],
  milestones: [
    {
      year: "2022",
      title: "A heat press in a shared room",
      story:
        "Bought the press with NYSC stipend money. My roommate hated the smell. We sold the first hundred bags to classmates in two weeks.",
      lesson: "Constraints make you ruthless about what to ship.",
    },
    {
      year: "2023",
      title: "The week rent paid itself",
      story:
        "April 2023 we cleared rent, materials, and a small profit in the same week. I realised the degree was now the side project.",
      lesson: "Watch what the numbers want, not what your plan wants.",
    },
    {
      year: "2023",
      title: "Telling my father",
      story:
        "He didn't shout. He asked me to show him the books. He asked questions for an hour. At the end he said: 'Then run it like a business, not a hobby.'",
      lesson: "The people you fear judging you often just want evidence you're serious.",
    },
  ],
  failures: [
    {
      title: "Spent two months designing a logo before selling anything",
      lesson: "Customers buy the bag, not the wordmark.",
    },
  ],
  status: "published",
  createdAt: "2024-05-02T10:00:00.000Z",
};

export default story;
