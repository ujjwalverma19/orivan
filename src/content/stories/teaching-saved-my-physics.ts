import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "teaching-saved-my-physics",
  title: "Teaching teenagers saved my physics",
  authorName: "Lucía B.",
  role: "High School Physics Teacher",
  summary:
    "I left a PhD program convinced I had failed at science. A classroom of fifteen-year-olds gave it back to me, slower and better.",
  country: "Argentina",
  tags: ["teacher", "career-change", "science", "education"],
  milestones: [
    {
      year: "2020",
      title: "Walked away from the lab",
      story:
        "My advisor was kind when I quit. The shame was mine. I told friends I was 'taking a break' for almost a year.",
      lesson: "Quitting a path is not the same as quitting the field.",
    },
    {
      year: "2021",
      title: "First class, first blank stare",
      story:
        "Thirty kids. I opened with angular momentum because I loved it. They looked at me like I'd spoken Latin. By March I was teaching with a skateboard.",
      lesson: "If they don't get it, the failure is in the explanation, not in them.",
    },
    {
      year: "2023",
      title: "A student emailed me about her university choice",
      story:
        "She had picked physics. She wrote: 'You made it feel like a thing a person could do.' I printed the email and kept it in my desk.",
      lesson: "Permission is a real gift to give a young person.",
    },
  ],
  failures: [
    {
      title: "Tied my self-worth to the PhD outcome",
      lesson: "A program does not get to decide if you belong to a discipline.",
    },
  ],
  status: "published",
  createdAt: "2024-04-29T11:00:00.000Z",
};

export default story;
