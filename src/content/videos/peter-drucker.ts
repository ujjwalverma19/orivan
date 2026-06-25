import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "drucker-claremont-lecture-1993",
    personSlug: "peter-drucker",
    title: "Peter Drucker Speaks — Drucker School of Management",
    kind: "Talk",
    year: "1993",
    length: "55 min",
    youtubeId: "S1OpTW9jo_4",
    description:
      "Drucker delivering one of his canonical Claremont lectures on management as a liberal art and the responsibility of the executive.",
    tags: ["management", "leadership", "claremont"],
    keyTakeaways: [
      "Management is a liberal art, not a technical discipline.",
      "The executive's job is to make strengths productive.",
      "Results live outside the organization, in the customer.",
    ],
    difficulty: "Intermediate",
    topics: ["management", "leadership"],
  },
  {
    id: "drucker-cspan-booknotes-1993",
    personSlug: "peter-drucker",
    title: "Drucker Lectures — Essential Lessons on Management, Society, and Economy",
    kind: "Talk",
    year: "1990",
    length: "1h 12m",
    youtubeId: "O9FbPfQD_jQ",
    description:
      "A long-form compilation of Drucker speaking on the trajectory of management, organizations, and 20th-century capitalism.",
    tags: ["management", "society", "economy"],
    keyTakeaways: [
      "Knowledge work is the central economic activity of the post-industrial age.",
      "Innovation is a discipline that can be systematically practiced.",
      "Society needs strong organizations as much as it needs strong markets.",
    ],
    difficulty: "Intermediate",
    topics: ["management", "society"],
  },
  {
    id: "drucker-mckinsey-quarterly-interview",
    personSlug: "peter-drucker",
    title: "Systems Thinking — Drucker on Knowledge Workers",
    kind: "Talk",
    year: "1990",
    length: "45 min",
    youtubeId: "CQgDzfiBpHI",
    description:
      "Drucker explains the emergence of the knowledge worker and what makes their productivity fundamentally different from manual labor.",
    tags: ["knowledge-work", "productivity", "management"],
    keyTakeaways: [
      "Knowledge workers own their means of production.",
      "Productivity for knowledge work means doing the right tasks, not more tasks.",
      "Managing knowledge workers is closer to managing volunteers than employees.",
    ],
    difficulty: "Intermediate",
    topics: ["knowledge-work", "management"],
  },
  {
    id: "drucker-essence-of-management",
    personSlug: "peter-drucker",
    title: "Four Essential Principles of Management",
    kind: "Talk",
    year: "2018",
    length: "18 min",
    youtubeId: "1il9VfJoaDo",
    description:
      "A clear walkthrough of the four essential management principles synthesized from 'The Essential Drucker.'",
    tags: ["management", "principles", "introduction"],
    keyTakeaways: [
      "Define the business by the customer it serves.",
      "Make strengths productive and weaknesses irrelevant.",
      "Focus on contribution, not effort.",
    ],
    difficulty: "Beginner",
    topics: ["management", "introduction"],
  },
  {
    id: "drucker-effective-executive-overview",
    personSlug: "peter-drucker",
    title: "The Effective Executive — Book Overview",
    kind: "Talk",
    year: "2018",
    length: "23 min",
    youtubeId: "3KG7-cr-y78",
    description:
      "A detailed walkthrough of Drucker's most practical book — the five habits that make any executive effective.",
    tags: ["effectiveness", "executive", "habits"],
    keyTakeaways: [
      "Effective executives manage their time first.",
      "Focus on contribution: what does this organization need from me?",
      "Decisions are rare but consequential — make them well.",
    ],
    difficulty: "Beginner",
    topics: ["effectiveness", "executive"],
  },
];

export default videos;
