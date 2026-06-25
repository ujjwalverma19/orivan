import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "the-lab-that-said-no",
  title: "The grant we lost made the lab better",
  authorName: "Hanna F.",
  role: "Postdoctoral Researcher",
  summary:
    "We staked four years on a single funding application. The rejection arrived on a Tuesday. The next eighteen months were the most honest science of my career.",
  country: "Germany",
  tags: ["scientist", "research", "rejection", "resilience"],
  milestones: [
    {
      year: "2022",
      title: "The application that ate the lab",
      story:
        "Six of us wrote it. Two of us slept under desks. We had built an entire research direction around the assumption it would land.",
      lesson: "A single funding decision should never be the load-bearing wall of a lab.",
    },
    {
      year: "2023",
      title: "Reviewer 2 was right",
      story:
        "The rejection notes were sharp and accurate. We had over-claimed. We sat for a day, then ran the smaller version of the experiment we had been avoiding. It was the first paper to actually replicate.",
      lesson: "Critical reviewers often hand you the better version of your own idea.",
    },
  ],
  failures: [
    {
      title: "Built ambition into the grant the experiments couldn't yet support",
      lesson: "Funders fund evidence and trajectory, not hope dressed as both.",
    },
  ],
  status: "published",
  createdAt: "2024-06-22T11:00:00.000Z",
};

export default story;
