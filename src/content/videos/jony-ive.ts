import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "ive-stephen-fry-2018",
    personSlug: "jony-ive",
    title: "In Conversation with Stephen Fry — Apple Park",
    kind: "Interview",
    year: "2018",
    length: "1h 12m",
    youtubeId: "wLb9g_8r-mE",
    description:
      "Jony Ive and Stephen Fry tour Apple Park; Ive discusses craft, materials, and Steve Jobs's design legacy.",
    tags: ["design", "apple-park", "craft"],
    keyTakeaways: [
      "Material intuition comes from time in the factory.",
      "Reduction is harder than addition.",
      "Apple Park is the product, not the office.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "craft"],
  },
  {
    id: "ive-financial-times-2021",
    personSlug: "jony-ive",
    title: "FT Weekend Festival — Designing the Future",
    kind: "Interview",
    year: "2021",
    length: "45 min",
    youtubeId: "piCuW2wSSTA",
    description:
      "Ive on founding LoveFrom, the responsibilities of designers in technology, and what he learned from Steve Jobs.",
    tags: ["design", "lovefrom", "future"],
    keyTakeaways: [
      "Design carries moral weight at consumer scale.",
      "Small studios concentrate attention.",
      "True simplicity is hard-won, not minimal.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "founder"],
  },
  {
    id: "ive-vanity-fair-2014",
    personSlug: "jony-ive",
    title: "Vanity Fair Summit — Jony Ive on Design",
    kind: "Talk",
    year: "2014",
    length: "35 min",
    youtubeId: "2oksetv3i90",
    description:
      "Ive talks with Graydon Carter about the iPhone era, the Apple Watch, and the discipline of removing.",
    tags: ["design", "iphone", "apple-watch"],
    keyTakeaways: [
      "Care for the parts no one will see.",
      "Materials science is half of industrial design.",
      "Care is contagious; so is its absence.",
    ],
    difficulty: "Intermediate",
    topics: ["design", "apple"],
  },
  {
    id: "ive-design-museum-2014",
    personSlug: "jony-ive",
    title: "Design Museum — Hello, My Name is Paul Smith Inaugural Talk",
    kind: "Talk",
    year: "2014",
    length: "30 min",
    youtubeId: "gIrDvEGDaeo",
    description:
      "Ive in conversation with Paul Smith on craftsmanship, restraint, and British design heritage.",
    tags: ["design", "craft", "british-design"],
    keyTakeaways: [
      "Cross-disciplinary friendships sharpen craft.",
      "Detail is a quiet form of respect.",
    ],
    difficulty: "Beginner",
    topics: ["design", "craft"],
  },
];

export default videos;
