import type { VideoInput } from "@/content/schemas";

const videos: VideoInput[] = [
  {
    id: "nilekani-ted-india-future",
    personSlug: "nandan-nilekani",
    title: "India's Biggest Digital ID — The Aadhaar Project Explained",
    kind: "Talk",
    year: "2020",
    length: "22 min",
    youtubeId: "Oi5JY5ionhg",
    description:
      "Nilekani walks through the architecture of Aadhaar — how a 12-digit number became the spine of Indian digital infrastructure.",
    tags: ["aadhaar", "identity", "india-stack"],
    keyTakeaways: [
      "Public infrastructure beats centralised platforms at scale.",
      "Identity is the most leveraged infrastructure in any modern economy.",
      "A billion people demand the thinnest possible protocol.",
    ],
    difficulty: "Intermediate",
    topics: ["policy", "platform"],
  },
  {
    id: "nilekani-india-stack-talk",
    personSlug: "nandan-nilekani",
    title: "Nandan Nilekani on India's Digital Transformation",
    kind: "Interview",
    year: "2022",
    length: "26 min",
    youtubeId: "6hgy3bGaUkY",
    description:
      "Nilekani on UPI, eKYC, DigiLocker — and how India built digital public goods that the rest of the world is now studying.",
    tags: ["india-stack", "upi", "fintech"],
    keyTakeaways: [
      "Open protocols outscale proprietary platforms when the network matters.",
      "Public APIs let thousands of startups build on shared rails.",
      "DPI is a generational project, not a launch.",
    ],
    difficulty: "Advanced",
    topics: ["platform", "policy"],
  },
  {
    id: "nilekani-davos-aadhaar",
    personSlug: "nandan-nilekani",
    title: "GenAI Will Amplify Us, Not Replace Us",
    kind: "Talk",
    year: "2024",
    length: "31 min",
    youtubeId: "ZZJT1GopM_M",
    description:
      "Nilekani at Infosys AI Day on how generative AI plugs into India's digital infrastructure — and where the value will accrue.",
    tags: ["AI", "infosys", "strategy"],
    keyTakeaways: [
      "GenAI is a layer above the India Stack, not a replacement.",
      "Population-scale AI requires population-scale rails.",
      "The next decade is about combining DPI with AI.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "strategy"],
  },
  {
    id: "nilekani-infosys-story",
    personSlug: "nandan-nilekani",
    title: "How Infosys Succeeded — The Inside Story",
    kind: "Interview",
    year: "2021",
    length: "44 min",
    youtubeId: "_KDteHyH9nQ",
    description:
      "Nilekani on 40 years of Infosys — from a Pune apartment to the NASDAQ listing, and the lessons that travel.",
    tags: ["infosys", "founding", "leadership"],
    keyTakeaways: [
      "Found with people whose values you'll still respect in thirty years.",
      "Adopt the harder standard before it's required of you.",
      "Macro tailwinds take a decade to arrive — survive long enough to catch them.",
    ],
    difficulty: "Intermediate",
    topics: ["entrepreneurship", "leadership"],
  },
  {
    id: "nilekani-podcast-tyler-cowen",
    personSlug: "nandan-nilekani",
    title: "Nilekani & Dario Amodei — Fireside on AI and India",
    kind: "Interview",
    year: "2025",
    length: "52 min",
    youtubeId: "8Ik05fQARYo",
    description:
      "A live conversation between Nilekani and Anthropic CEO Dario Amodei on safe AI, India's role, and the future of digital infrastructure.",
    tags: ["AI", "policy", "india"],
    keyTakeaways: [
      "Population-scale AI needs population-scale governance.",
      "India's DPI is a model for combining state and market roles.",
      "Trust is the rate-limit on scale.",
    ],
    difficulty: "Advanced",
    topics: ["AI", "policy"],
  },
];

export default videos;
