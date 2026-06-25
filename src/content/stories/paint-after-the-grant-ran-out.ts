import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "paint-after-the-grant-ran-out",
  title: "I painted better after the grant ran out",
  authorName: "Camille A.",
  role: "Painter",
  summary:
    "A two-year residency ended the week my savings did. The bar shifts that followed taught me what the studio never had to.",
  country: "France",
  tags: ["artist", "creator", "money", "discipline"],
  milestones: [
    {
      year: "2021",
      title: "The residency ended on a Friday",
      story:
        "I had two finished canvases and seven unfinished ones. The studio key was due by 6 PM. I painted until 5:55.",
      lesson: "Deadlines are arbitrary and they still work.",
    },
    {
      year: "2022",
      title: "Four shifts a week at a wine bar",
      story:
        "I painted mornings, poured wine evenings. The painting got slower and better. The customers asked what I did. I said: 'painter.' I started to mean it.",
      lesson: "A second income is not a defeat for art. Often it's what keeps the art honest.",
    },
    {
      year: "2024",
      title: "First sale that wasn't to a friend",
      story:
        "A regular at the bar bought a small piece for €380. I delivered it in the metro in a plastic bag. He hung it in his hallway. He sent me a photo.",
      lesson: "The first stranger sale changes how you describe yourself to yourself.",
    },
  ],
  failures: [
    {
      title: "Believed taking a day job would dilute the work",
      lesson: "Dilution is from indifference, not from a shift schedule.",
    },
  ],
  status: "published",
  createdAt: "2024-05-09T15:00:00.000Z",
};

export default story;
