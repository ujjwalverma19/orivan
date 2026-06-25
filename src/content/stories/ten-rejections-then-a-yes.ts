import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "ten-rejections-then-a-yes",
  title: "Forty-three rejection letters in a manila folder",
  authorName: "Wanjiru K.",
  role: "Novelist",
  summary:
    "Five years of submitting short fiction to magazines that mostly ignored me. The acceptance, when it came, was for the piece I almost didn't send.",
  country: "Kenya",
  tags: ["writer", "rejection", "creator", "persistence"],
  milestones: [
    {
      year: "2019",
      title: "The folder began",
      story:
        "I kept every rejection in a folder labelled 'evidence'. Some were form letters. Two were handwritten. The handwritten ones I read on hard days.",
      lesson: "Rejections are receipts that prove you showed up.",
    },
    {
      year: "2022",
      title: "Burning a draft",
      story:
        "I had been polishing one story for three years. I deleted it. The fear of starting over for the eleventh time was smaller than the fear of being the writer who only had one story.",
      lesson: "Sometimes the brave act is to stop revising and write something new.",
    },
    {
      year: "2023",
      title: "The email at 6:14 PM",
      story:
        "Accepted by a quarterly I had read since university. Three hundred pounds and a contributor copy. I told nobody for a week, just to keep it mine.",
      lesson: "Let yourself believe a good thing in private before you announce it.",
    },
  ],
  failures: [
    {
      title: "Read every rejection as a verdict on me",
      lesson: "Editors reject pieces, not people. The distinction keeps you writing.",
    },
  ],
  status: "published",
  createdAt: "2024-06-02T09:00:00.000Z",
};

export default story;
