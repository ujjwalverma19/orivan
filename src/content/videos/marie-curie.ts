import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "curie-bbc-documentary",
    personSlug: "marie-curie",
    title: "Marie Curie: The Genius Behind the Glow — BBC",
    kind: "Documentary",
    year: "2013",
    length: "59 min",
    youtubeId: "w6JFRi0Qm_s",
    description:
      "BBC documentary on Marie Curie's life and discoveries, including the human cost of working with radioactive materials.",
    tags: ["science", "biography", "radium"],
    keyTakeaways: [
      "Discovery demands physical sacrifice when the safety science doesn't exist yet.",
      "Independent women scientists faced institutional walls she had to break.",
      "Two Nobel Prizes were the public face of a lifetime of laboratory labor.",
    ],
    difficulty: "Beginner",
    topics: ["science", "biography"],
  },
  {
    id: "curie-radioactivity-explained",
    personSlug: "marie-curie",
    title: "How Marie Curie Discovered Radioactivity — Royal Society",
    kind: "Talk",
    year: "2017",
    length: "12 min",
    youtubeId: "fVgfymHVhNM",
    description:
      "Royal Society animated lecture explaining Curie's discovery of polonium and radium and her measurement of radioactivity.",
    tags: ["science", "physics", "discovery"],
    keyTakeaways: [
      "Methodical fractional crystallization isolated the new elements.",
      "Naming polonium after Poland was a political act as well as a scientific one.",
    ],
    difficulty: "Intermediate",
    topics: ["physics", "discovery"],
  },
  {
    id: "curie-ted-ed",
    personSlug: "marie-curie",
    title: "TED-Ed — The Genius of Marie Curie",
    kind: "Talk",
    year: "2017",
    length: "4 min",
    youtubeId: "snn29wkKTi4",
    description:
      "TED-Ed animated portrait covering her early life, two Nobel Prizes, and contributions to medicine in WWI.",
    tags: ["science", "biography", "wwi"],
    keyTakeaways: [
      "X-ray ambulances saved thousands of lives in WWI.",
      "Persistence in the face of institutional sexism defined her career.",
    ],
    difficulty: "Beginner",
    topics: ["science", "biography"],
  },
  {
    id: "curie-american-experience",
    personSlug: "marie-curie",
    title: "American Experience — The Mystery of Marie Curie",
    kind: "Documentary",
    year: "2003",
    length: "55 min",
    youtubeId: "Bf7wdUXuG-g",
    description:
      "PBS American Experience documentary on Curie's life, family, and the radium tragedy.",
    tags: ["biography", "documentary"],
    keyTakeaways: [
      "Family scientific tradition: husband Pierre, daughter Irène (also a Nobel laureate).",
      "Personal cost shaped her later advocacy for radiation safety.",
    ],
    difficulty: "Beginner",
    topics: ["biography", "science"],
  },
];

export default videos;
