import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "the-busker-who-learned-finance",
  title: "I busked for four years before I understood my royalties",
  authorName: "Owen H.",
  role: "Singer-Songwriter",
  summary:
    "I thought music was opposed to spreadsheets. A bad publishing deal taught me the spreadsheet is the song's caretaker.",
  country: "United Kingdom",
  tags: ["musician", "creator", "money", "rejection"],
  milestones: [
    {
      year: "2019",
      title: "Camden, an amp, and a hat",
      story:
        "Four hours on the same corner three nights a week. I learned more about an audience in six months than in four years of conservatory.",
      lesson: "A live audience is the harshest and kindest A/B test.",
    },
    {
      year: "2022",
      title: "Signed something I didn't read",
      story:
        "A publishing deal arrived. I signed in the pub. I gave away rights to songs I hadn't written yet. The advance bought me eight months.",
      lesson: "The contract is the song's life after you. Read it like it is.",
    },
    {
      year: "2024",
      title: "Bought one song back",
      story:
        "Took a part-time bar job for a year. Negotiated a buyback on one song that mattered. Released it independently. It earned less and meant more.",
      lesson: "Ownership of one thing you love beats royalties on ten you don't.",
    },
  ],
  failures: [
    {
      title: "Treated business as the enemy of art",
      lesson: "Naivety is not purity. It's just a tax somebody else collects.",
    },
  ],
  status: "published",
  createdAt: "2024-05-19T14:00:00.000Z",
};

export default story;
