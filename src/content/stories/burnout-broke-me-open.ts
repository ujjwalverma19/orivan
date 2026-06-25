import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "burnout-broke-me-open",
  title: "Burnout broke me open, then put me back together",
  authorName: "Devon M.",
  role: "Senior Software Engineer",
  summary:
    "Four years on a high-velocity team. The breakdown didn't look like one — it looked like productivity, until it didn't.",
  country: "United States",
  tags: ["burnout", "engineering", "mental-health", "career"],
  milestones: [
    {
      year: "2022",
      title: "On-call became identity",
      story:
        "I was proud of my Slack response times. I scheduled therapy around standups. The day I cried in a one-on-one I was still apologising for the inconvenience.",
      lesson: "Pride in unsustainable behaviour is the last warning.",
    },
    {
      year: "2023",
      title: "Six weeks of doing nothing",
      story:
        "Took medical leave. First two weeks I tried to 'optimise my recovery'. Then I let it be boring. Walks, library books, no phone before noon.",
      lesson: "Recovery resists productivity. That's the whole point.",
    },
    {
      year: "2024",
      title: "Came back at 70%",
      story:
        "Negotiated four days a week, no after-hours pager. Shipped more in a quarter than the year before. Nobody noticed I was working less. They noticed I was kinder.",
      lesson: "Bandwidth was never the bottleneck. Attention was.",
    },
  ],
  failures: [
    {
      title: "Treated 'pushing through' as a virtue for a decade",
      lesson: "Endurance without recovery is just slow self-harm.",
    },
  ],
  status: "published",
  createdAt: "2024-06-11T08:30:00.000Z",
};

export default story;
