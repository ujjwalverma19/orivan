import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "laid-off-and-rebuilt",
  title: "Laid off at 41, rebuilt in public",
  authorName: "Theo K.",
  role: "Staff Engineer → Indie Hacker",
  summary:
    "A surprise layoff after eleven years inside the same company. I spent ninety days building one tiny thing in public — and it became the next job.",
  country: "Germany",
  tags: ["layoff", "career-change", "indie-hacker", "rejection"],
  milestones: [
    {
      year: "2024",
      title: "The Tuesday email",
      story:
        "Got the calendar invite at 9:14 AM. By 9:45 I was logged out of every system I had built over a decade. The grief was real.",
      lesson: "Your identity is bigger than your job. Don't confirm what they take.",
    },
    {
      year: "2024",
      title: "Ninety days of building in public",
      story:
        "Set a rule: ship one tiny improvement to a tool I needed, every day, publicly. Most days nobody clapped. Some days strangers did.",
      lesson: "Public consistency compounds even when the audience doesn't.",
    },
    {
      year: "2024",
      title: "The offer that wasn't a job",
      story:
        "Day 78, a founder DM'd me asking if I'd take a contract instead of a salary. I would have called this 'unstable' in 2023; I called it freedom in 2024.",
      lesson: "The shape of the next thing rarely matches the shape of the last thing.",
    },
  ],
  failures: [
    {
      title: "Spent six weeks polishing a résumé",
      lesson: "Nobody hired the résumé. They hired the work that was visible.",
    },
  ],
  status: "published",
  featured: true,
  createdAt: "2024-03-04T08:00:00.000Z",
};

export default story;
