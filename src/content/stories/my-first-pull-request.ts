import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "my-first-pull-request",
  title: "My first pull request was a typo. It changed my career.",
  authorName: "Rafael M.",
  role: "Open Source Maintainer",
  summary:
    "A two-character fix to a README in 2018. Six years and three hundred PRs later, the project pays half my rent and most of my confidence.",
  country: "Brazil",
  tags: ["open-source", "engineering", "community", "career"],
  milestones: [
    {
      year: "2018",
      title: "The typo PR",
      story:
        "Fixed 'reciving' to 'receiving' in the docs. The maintainer merged it in nine minutes and said thank you. I read the email four times.",
      lesson: "The first contribution does not have to be impressive. It has to ship.",
    },
    {
      year: "2021",
      title: "Wrote the feature I needed at work",
      story:
        "We needed a config option my employer wouldn't pay me to build. I built it on weekends and contributed it upstream. Three other companies started using it within a month.",
      lesson: "Solving your own problem in public is the cleanest form of marketing.",
    },
    {
      year: "2024",
      title: "Sponsorships covered half the rent",
      story:
        "I moved to maintainer status in 2023. Sponsorships from three companies now cover half my apartment. The other half came from a job that hired me because they used the library.",
      lesson: "Open source compounds slowly, then suddenly.",
    },
  ],
  failures: [
    {
      title: "Burnt out trying to answer every issue alone",
      lesson: "A healthy project has more than one trusted reviewer. Train one early.",
    },
  ],
  status: "published",
  createdAt: "2024-04-12T10:00:00.000Z",
};

export default story;
