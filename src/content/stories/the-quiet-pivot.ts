import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "the-quiet-pivot",
  title: "The quiet pivot that saved my agency",
  authorName: "Maya R.",
  role: "Agency Founder",
  summary:
    "Two years in, my brand studio was busy and broke. Killing our biggest service is what finally made the business work.",
  country: "Portugal",
  tags: ["pivot", "agency", "pricing", "resilience"],
  milestones: [
    {
      year: "2021",
      title: "Opened the studio with one client",
      story:
        "Quit my in-house design job with one freelance retainer in hand. The plan was: stay small, stay fast, never hire.",
      lesson: "A single committed customer is enough to start. Conviction beats certainty.",
    },
    {
      year: "2022",
      title: "Said yes to every project",
      story:
        "Took on websites, brand systems, packaging, ad campaigns. Revenue doubled. Margins disappeared.",
      lesson: "Growth without focus is just expensive motion.",
    },
    {
      year: "2023",
      title: "Killed the service that paid the bills",
      story:
        "Stopped offering full websites. Kept only the brand work. Lost 40% of pipeline overnight and slept better the same week.",
      lesson: "The thing you're scared to drop is often the thing draining the rest.",
    },
  ],
  failures: [
    {
      title: "Hired before I had a system",
      lesson: "A second designer doubles your output only if there's a process to plug them into.",
    },
  ],
  status: "published",
  featured: true,
  createdAt: "2024-02-12T10:00:00.000Z",
};

export default story;
