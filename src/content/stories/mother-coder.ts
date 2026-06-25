import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "mother-coder",
  title: "Back to the keyboard after four years away",
  authorName: "Aoife D.",
  role: "Returning Software Engineer",
  summary:
    "Two children, one career pause, and a tech stack that had changed underneath me. The hardest part wasn't the code. It was believing I still belonged.",
  country: "Ireland",
  tags: ["parent", "career-change", "engineering", "return-to-work"],
  milestones: [
    {
      year: "2019",
      title: "Stepped out, intentionally",
      story:
        "Took a planned career break after my second. I told myself it was a year. It became four. Every six months I updated my LinkedIn and didn't post.",
      lesson: "Choosing a pause is different from drifting. Both deserve naming.",
    },
    {
      year: "2023",
      title: "A returnship interview I almost cancelled",
      story:
        "Applied to a programme for parents returning to engineering. Convinced myself I'd embarrass us all. Showed up. The technical interview was kind. I solved most of it.",
      lesson: "The voice that tells you not to apply is rarely accurate. Apply anyway.",
    },
    {
      year: "2024",
      title: "First production deploy in five years",
      story:
        "A two-line fix. I cried in the kitchen with the laptop open. My six-year-old asked if I was sad. I said: 'No. I remembered.'",
      lesson: "Skills don't vanish. They wait, sometimes for years.",
    },
  ],
  failures: [
    {
      title: "Underpriced myself in the offer negotiation",
      lesson:
        "A break is not a discount. Negotiate for the engineer you are, not the apologetic one.",
    },
  ],
  status: "published",
  createdAt: "2024-07-15T08:00:00.000Z",
};

export default story;
