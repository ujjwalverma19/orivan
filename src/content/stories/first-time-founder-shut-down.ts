import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "first-time-founder-shut-down",
  title: "We shut down on a Friday. I slept ten hours.",
  authorName: "Aarav S.",
  role: "First-time Founder",
  summary:
    "Three years building a tool nobody asked for, financed by my parents' savings. The post-mortem was harder than the shutdown.",
  country: "India",
  tags: ["startup", "failure", "founder", "post-mortem"],
  milestones: [
    {
      year: "2021",
      title: "Quit a stable job for a cold idea",
      story:
        "I was a backend engineer with a wedding-budget bonus on the way. I left to build a logistics dashboard for small fleet owners — a problem I had read about, never lived.",
      lesson: "Reading about a problem is not the same as carrying it.",
    },
    {
      year: "2023",
      title: "Six pilots, zero contracts",
      story:
        "Fleet owners loved the demo and never paid. I rebuilt the product four times chasing each free-trial's feedback. We were a feature factory for a customer who didn't exist.",
      lesson: "Iteration speed without a paying user is just expensive theatre.",
    },
    {
      year: "2024",
      title: "The Friday shutdown email",
      story:
        "Sent the wind-down note at 4 PM. By 5 PM I was crying in a parking lot. By 10 PM I had eaten my mother's khichdi and slept the deepest sleep of three years.",
      lesson: "Relief is a real signal. Honour it.",
    },
  ],
  failures: [
    {
      title: "Took my parents' money before talking to ten customers",
      lesson: "Family capital should be the last cheque, not the first.",
    },
  ],
  status: "published",
  createdAt: "2024-04-18T09:00:00.000Z",
};

export default story;
