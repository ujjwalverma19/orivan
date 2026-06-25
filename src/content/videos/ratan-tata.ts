import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "ratan-tata-cornell-talk",
    personSlug: "ratan-tata",
    title: "Ratan Tata on His Cornell Years and Family Defiance",
    kind: "Interview",
    year: "2019",
    length: "14 min",
    youtubeId: "e21OIB1hjOw",
    description:
      "Tata reflects on the rebellious decision to study architecture at Cornell against his family's wishes — and how that shaped his industrial career.",
    tags: ["biography", "education", "values"],
    keyTakeaways: [
      "Defy family expectations when your judgment is clear.",
      "Architecture training shapes how you see industry.",
      "Early hardship as an heir builds the credibility to lead later.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "education"],
  },
  {
    id: "ratan-tata-jrd-tata-tribute",
    personSlug: "ratan-tata",
    title: "Ratan Tata: The Man Behind the Legacy — CNBC TV18",
    kind: "Interview",
    year: "2018",
    length: "48 min",
    youtubeId: "VsjFQBw78Bo",
    description:
      "Suhel Seth and Delshad Irani in a long-form conversation on the Tata legacy, JRD's influence, and Ratan Tata's own chairmanship.",
    tags: ["biography", "legacy", "tata-group"],
    keyTakeaways: [
      "JRD modeled the principled industrialist Ratan inherited.",
      "Succession is a multi-generation responsibility.",
      "Reputation compounds through quiet ethical decisions.",
    ],
    difficulty: "Intermediate",
    topics: ["biography", "leadership"],
  },
  {
    id: "ratan-tata-nita-ambani-interview",
    personSlug: "ratan-tata",
    title: "Ratan Tata's Last Conversation with Shereen Bhan",
    kind: "Interview",
    year: "2024",
    length: "32 min",
    youtubeId: "OSEblphgayc",
    description:
      "CNBC's Shereen Bhan in conversation with Ratan Tata — one of his final extended interviews on Indian industry's future.",
    tags: ["interview", "legacy", "india"],
    keyTakeaways: [
      "India's industrial story is still being written.",
      "The Tata code of conduct outlasts any single chairman.",
      "Quiet ethics beat loud activism in business leadership.",
    ],
    difficulty: "Beginner",
    topics: ["interview", "india"],
  },
  {
    id: "ratan-tata-mid-day-interview",
    personSlug: "ratan-tata",
    title: "Stanford GSB — Moving the Tata Group Beyond India",
    kind: "Talk",
    year: "2013",
    length: "1h 02m",
    youtubeId: "9mySvo-EPT0",
    description:
      "Ratan Tata at Stanford Graduate School of Business on the strategy and execution behind Tata's global acquisitions — Tetley, Corus, and Jaguar Land Rover.",
    tags: ["strategy", "globalization", "acquisitions"],
    keyTakeaways: [
      "Cross-border M&A signals national capability before financial logic.",
      "Counter-cyclical acquisitions build the most durable wealth.",
      "Operating discipline matters more than deal structure.",
    ],
    difficulty: "Intermediate",
    topics: ["strategy", "globalization"],
  },
];

export default videos;
