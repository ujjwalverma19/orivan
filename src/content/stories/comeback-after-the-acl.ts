import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "comeback-after-the-acl",
  title: "Eleven months on a knee that wasn't mine yet",
  authorName: "Mateo R.",
  role: "Semi-Pro Footballer",
  summary:
    "An ACL tear at 24, a comeback nobody asked me to make, and a quiet decision to stop measuring myself against the player I used to be.",
  country: "Spain",
  tags: ["athlete", "comeback", "injury", "resilience"],
  milestones: [
    {
      year: "2022",
      title: "The pop",
      story:
        "Heard it before I felt it. Sat on the grass for two minutes. Coach jogged over. We both already knew. Surgery the following Tuesday.",
      lesson: "Bad news travels through the body before the head catches up.",
    },
    {
      year: "2023",
      title: "Boring is the program",
      story:
        "Rehab was sixteen reps, three sets, four times a day, for ten months. The boring ones are the ones that work. I learned to make the gym a meditation.",
      lesson: "Discipline is what you do on the day you don't want to.",
    },
    {
      year: "2023",
      title: "First match back, on the bench",
      story:
        "Coach put me on for the last six minutes. I touched the ball twice. I cried in the showers. Not because I was back — because I had survived not being.",
      lesson: "Coming back is a different feeling than the first arrival. Both count.",
    },
  ],
  failures: [
    {
      title: "Rushed return at month seven",
      lesson: "The knee was ready before the trust was. Both need to heal.",
    },
  ],
  status: "published",
  createdAt: "2024-02-14T08:00:00.000Z",
};

export default story;
