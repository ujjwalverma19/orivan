import type { StoryInput } from "@/content/schemas";

const story: StoryInput = {
  slug: "immigrant-twice",
  title: "Immigrant twice — once for the visa, once for me",
  authorName: "Trang N.",
  role: "Data Engineer",
  summary:
    "I moved to Sydney for a job I had earned. Two years later I moved across the country for a life I hadn't planned. The second move was harder.",
  country: "Australia",
  tags: ["immigrant", "career-change", "family", "engineering"],
  milestones: [
    {
      year: "2019",
      title: "Arrived with two suitcases and a contract",
      story:
        "The job paid well, the apartment was near the office, the supermarket signs were a foreign language for the first month. I cried over a packet of rice that wasn't the right one.",
      lesson: "Small foreignness wears you down more than the big one.",
    },
    {
      year: "2022",
      title: "Realised the visa was the only reason I was staying",
      story:
        "I had been turning down weekends because I was 'tired'. I was lonely. I moved to a smaller city, took a 15% pay cut, found a Vietnamese church on the third Sunday.",
      lesson: "A career that costs your community costs more than you think.",
    },
  ],
  failures: [
    {
      title: "Told my parents I was thriving for two years",
      lesson: "Pretending protects no one. It just delays the help.",
    },
  ],
  status: "published",
  createdAt: "2024-03-10T08:00:00.000Z",
};

export default story;
