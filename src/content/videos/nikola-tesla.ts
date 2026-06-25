import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "tesla-full-doc",
    personSlug: "nikola-tesla",
    title: "Nikola Tesla — Full Documentary",
    kind: "Documentary",
    year: "2019",
    length: "3h 06m",
    youtubeId: "SVIp0Yk9yXs",
    description:
      "Long-form chronological documentary covering Tesla's life from Smiljan to the Hotel New Yorker, with archival footage and lab recreations.",
    tags: ["biography", "inventions", "history"],
    keyTakeaways: [
      "Tesla's AC system was the public utility blueprint we still use.",
      "Wardenclyffe failed on economics, not physics.",
      "Patent control determined who made the money and who didn't.",
    ],
    difficulty: "Beginner",
    topics: ["history", "science"],
  },
  {
    id: "tesla-history-laboratory",
    personSlug: "nikola-tesla",
    title: "The Tesla Files: His Infamous Abandoned Laboratory",
    kind: "Documentary",
    year: "2018",
    length: "2h 02m",
    youtubeId: "NBp8DaeDGzA",
    description:
      "History Channel investigation into Wardenclyffe Tower, Colorado Springs, and Tesla's missing papers.",
    tags: ["wardenclyffe", "wireless-power", "history"],
    keyTakeaways: [
      "Wardenclyffe was a physical prototype of planet-scale wireless power.",
      "Tesla's missing papers became a focal point for decades of speculation.",
      "His infrastructure thinking was a century ahead of his financing.",
    ],
    difficulty: "Intermediate",
    topics: ["history", "science"],
  },
  {
    id: "tesla-pbs-nova",
    personSlug: "nikola-tesla",
    title: "PBS Nova — Tesla: Master of Lightning",
    kind: "Documentary",
    year: "2000",
    length: "1h 24m",
    youtubeId: "xQFYFwHqlDU",
    description:
      "PBS Nova's canonical biography — measured, archival, and the standard reference for Tesla's scientific contributions.",
    tags: ["biography", "ac-power", "physics"],
    keyTakeaways: [
      "The AC induction motor unlocked industrial electrification.",
      "The Niagara Falls project was the first proof of long-distance AC.",
      "Tesla's rivalry with Edison was a clash of operating models, not just technology.",
    ],
    difficulty: "Beginner",
    topics: ["history", "science"],
  },
  {
    id: "tesla-modern-world-doc",
    personSlug: "nikola-tesla",
    title: "Nikola Tesla — Inventor of the Modern World",
    kind: "Documentary",
    year: "2020",
    length: "55 min",
    youtubeId: "HEH3qLofMaU",
    description:
      "Compact documentary connecting Tesla's polyphase AC system to today's electrical grid, radio, and wireless infrastructure.",
    tags: ["legacy", "ac-power", "wireless"],
    keyTakeaways: [
      "Most modern electrical infrastructure traces back to Tesla's polyphase patents.",
      "Marconi commercialized radio using Tesla's prior art.",
      "Tesla's late-life predictions about wireless and remote control proved largely correct.",
    ],
    difficulty: "Beginner",
    topics: ["history", "science"],
  },
  {
    id: "tesla-inventions-animated",
    personSlug: "nikola-tesla",
    title: "Nikola Tesla and His Incredible Inventions",
    kind: "Documentary",
    year: "2020",
    length: "20 min",
    youtubeId: "mvyJrY1ZmLY",
    description:
      "Short animated explainer walking through Tesla's key inventions — induction motor, AC transmission, Tesla coil, and wireless ideas.",
    tags: ["inventions", "explainer"],
    keyTakeaways: [
      "The induction motor was Tesla's first commercial breakthrough.",
      "Tesla coils still appear in modern radio and TV circuits.",
      "Many late ideas — remote control, radar — became products decades after his death.",
    ],
    difficulty: "Beginner",
    topics: ["science", "history"],
  },
];

export default videos;
