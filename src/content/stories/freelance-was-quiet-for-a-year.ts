import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "freelance-was-quiet-for-a-year",
  title: "Freelance was quiet for a year. I almost called it dead.",
  authorName: "Priya J.",
  role: "Freelance Brand Designer",
  summary:
    "Twelve months of soft inquiries and no contracts. The fix wasn't a new portfolio site. It was admitting who I actually wanted to work with.",
  country: "Canada",
  tags: ["freelancer", "designer", "career", "positioning"],
  milestones: [
    {
      year: "2023",
      title: "The polite no-thank-yous",
      story:
        "Twenty-two intro calls, eighteen 'maybe next quarter's. My pipeline looked busy and was empty. I blamed the market for nine months.",
      lesson: "A full calendar of free calls is not a business.",
    },
    {
      year: "2024",
      title: "Picked a niche I had been embarrassed about",
      story:
        "I had built brands for three small literary magazines on the side. I loved the work, hid it on my site. I rebuilt the site around it. Two paying clients within six weeks.",
      lesson: "The work you hide is often the work you're meant to do.",
    },
  ],
  failures: [
    {
      title: "Tried to be a generalist with enterprise polish",
      lesson: "Trying to look bigger usually makes you invisible. Specific is louder than slick.",
    },
  ],
  status: "published",
  createdAt: "2024-07-08T09:00:00.000Z",
};

export default story;
