import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "eight-years-in-uniform",
  title: "Eight years in uniform, three years finding the next one",
  authorName: "Marcus T.",
  role: "Veteran → Operations Manager",
  summary:
    "Left the army at 29 with a resume that didn't translate and a network of people who had also just left. The transition took longer than the enlistment had implied.",
  country: "United States",
  tags: ["military", "career-change", "transition", "operations"],
  milestones: [
    {
      year: "2020",
      title: "Out-processing on a Wednesday",
      story:
        "Cleaned out my locker in twenty minutes. Drove home to a wife I had been a stranger to for two deployments. The civilian quiet was louder than I expected.",
      lesson: "Endings without ceremony still need to be marked.",
    },
    {
      year: "2022",
      title: "Stopped translating, started learning",
      story:
        "I had been telling recruiters how my squad leadership 'translated' to management. They didn't care. I enrolled in a community college supply chain course and stopped trying to sound like the old job.",
      lesson: "Translating yourself is exhausting. Learning the new language is faster.",
    },
    {
      year: "2023",
      title: "First civilian promotion",
      story:
        "Made shift manager at a regional warehouse. The corporate language still felt silly. But the people listened, and the schedule worked, and I was home for dinner.",
      lesson: "Authority without rank is mostly being trusted in small things first.",
    },
  ],
  failures: [
    {
      title: "Assumed civilian companies would teach me the way the army did",
      lesson: "Most workplaces will not invest in you. Build your own training plan.",
    },
  ],
  status: "published",
  createdAt: "2024-05-25T09:00:00.000Z",
};

export default story;
