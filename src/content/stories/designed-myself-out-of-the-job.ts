import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "designed-myself-out-of-the-job",
  title: "I designed myself out of the job I wanted",
  authorName: "Sanne V.",
  role: "Product Designer",
  summary:
    "Spent three years building the design system that made my role obsolete. Discovered, slowly, that obsolescence was the promotion.",
  country: "Netherlands",
  tags: ["designer", "product", "systems", "career"],
  milestones: [
    {
      year: "2021",
      title: "The first component library",
      story:
        "I shipped a button. Then a card. Then a colour ramp. Engineers stopped asking me for one-offs. I felt invisible for four months.",
      lesson: "Good systems make their creators less visible. That is the contract.",
    },
    {
      year: "2023",
      title: "Watching juniors ship what I used to",
      story:
        "Two juniors built a settings page in three days using the system. It took me a week the first time. I had to sit with the small grief of being replaceable.",
      lesson: "Replaceability is what leverage looks like from the inside.",
    },
    {
      year: "2024",
      title: "Promoted to staff, then to platform lead",
      story:
        "The promotion arrived without a portfolio of pixels. My portfolio was the team shipping faster than I ever had alone.",
      lesson: "Some careers stop being about your output and start being about your absence.",
    },
  ],
  failures: [
    {
      title: "Hoarded design decisions to feel needed",
      lesson: "Indispensability is a ceiling disguised as a compliment.",
    },
  ],
  status: "published",
  createdAt: "2024-06-30T09:00:00.000Z",
};

export default story;
