import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "the-night-shift-doctor",
  title: "The patient I lost in my first month",
  authorName: "Rina V.",
  role: "Emergency Medicine Resident",
  summary:
    "Three weeks into residency I made a clean decision that ended badly. The supervising attending taught me what to do with the weight of it.",
  country: "Philippines",
  tags: ["doctor", "medicine", "resilience", "early-career"],
  milestones: [
    {
      year: "2022",
      title: "The decision",
      story:
        "A man came in with chest pain at 3 AM. I worked the protocol. Everything correct on paper. He coded at 6 AM. The protocol was correct; medicine wasn't enough.",
      lesson: "Doing the right thing and getting a bad outcome are not the same failure.",
    },
    {
      year: "2022",
      title: "The corridor conversation",
      story:
        "My attending walked me to the stairwell. She said: 'You will carry this. You will not carry it alone.' Then she told me about her own first.",
      lesson: "Older practitioners carry the same weight; they just walk slower with it.",
    },
    {
      year: "2024",
      title: "Walking a junior through hers",
      story:
        "She paged me from the same stairwell. I told her what was told to me. We sat for ten minutes. Then we went back upstairs.",
      lesson: "Mentorship is mostly being available in the corridor.",
    },
  ],
  failures: [
    {
      title: "Tried to grieve the case in private for a month",
      lesson: "Isolation turns sadness into doubt. Doubt is corrosive in this job.",
    },
  ],
  status: "published",
  createdAt: "2024-03-22T07:00:00.000Z",
};

export default story;
