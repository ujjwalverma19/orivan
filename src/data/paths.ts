import jobs from "@/assets/journey-jobs.webp";
import musk from "@/assets/journey-musk.webp";
import perkins from "@/assets/journey-perkins.webp";
import chesky from "@/assets/journey-chesky.webp";

export type PathStep = {
  order: number;
  personSlug: string | null;
  personName: string;
  portrait?: string;
  focusSkill: string;
  whyThisStep: string;
  duration: string;
};

export type Path = {
  slug: string;
  title: string;
  blurb: string;
  audience: string;
  audienceTag: string;
  totalSteps: number;
  estimatedTime: string;
  accent: "butter" | "sage" | "clay";
  steps: PathStep[];
};

const portraits = {
  "steve-jobs": jobs,
  "elon-musk": musk,
  "melanie-perkins": perkins,
  "brian-chesky": chesky,
} as const;

function p(
  personSlug: string | null,
  personName: string,
  focusSkill: string,
  whyThisStep: string,
  duration: string,
  order: number,
): PathStep {
  return {
    order,
    personSlug,
    personName,
    portrait: personSlug ? portraits[personSlug as keyof typeof portraits] : undefined,
    focusSkill,
    whyThisStep,
    duration,
  };
}

export const paths: Path[] = [
  {
    slug: "become-a-product-manager",
    title: "Become a Product Manager",
    blurb:
      "From customer empathy to product strategy. The four mindsets every great PM eventually carries.",
    audience: "Aspiring PMs",
    audienceTag: "Product Managers",
    totalSteps: 4,
    estimatedTime: "~2 hours",
    accent: "butter",
    steps: [
      p(
        "brian-chesky",
        "Brian Chesky",
        "Customer Empathy",
        "Start where every PM should: living inside the customer's frustration before touching a roadmap.",
        "25 min read",
        1,
      ),
      p(
        "steve-jobs",
        "Steve Jobs",
        "Product Thinking",
        "Learn to start from the experience and work backward to the technology — the editor's mindset.",
        "35 min read",
        2,
      ),
      p(
        null,
        "Marty Cagan",
        "Product Leadership",
        "How to lead product teams that ship continuously instead of shipping committees.",
        "Coming soon",
        3,
      ),
      p(
        null,
        "Shreyas Doshi",
        "Product Strategy",
        "Frameworks for prioritization, leverage, and saying the loud no.",
        "Coming soon",
        4,
      ),
    ],
  },
  {
    slug: "become-a-startup-founder",
    title: "Become a Startup Founder",
    blurb:
      "The four traits founders forge in order — persistence first, then design, vision, and finally first principles.",
    audience: "First-time founders",
    audienceTag: "Startup Founders",
    totalSteps: 4,
    estimatedTime: "~2.5 hours",
    accent: "sage",
    steps: [
      p(
        "melanie-perkins",
        "Melanie Perkins",
        "Persistence",
        "100+ rejections before a yes. Learn how she kept moving when nobody believed her.",
        "30 min read",
        1,
      ),
      p(
        "brian-chesky",
        "Brian Chesky",
        "Design Thinking",
        "How a designer turned three air mattresses into a global marketplace by storyboarding the experience.",
        "25 min read",
        2,
      ),
      p(
        "steve-jobs",
        "Steve Jobs",
        "Product Vision",
        "The discipline of focus: killing 70% of the lineup to ship the one thing that matters.",
        "35 min read",
        3,
      ),
      p(
        "elon-musk",
        "Elon Musk",
        "First Principles",
        "Stop reasoning by analogy. Tear problems down to physics and rebuild from the floor up.",
        "40 min read",
        4,
      ),
    ],
  },
  {
    slug: "become-a-design-led-leader",
    title: "Become a Design-Led Leader",
    blurb:
      "Taste as a leadership discipline. Build the standards that pull a team past their own limits.",
    audience: "Design leads & founders",
    audienceTag: "Designers",
    totalSteps: 4,
    estimatedTime: "~2 hours",
    accent: "clay",
    steps: [
      p(
        "steve-jobs",
        "Steve Jobs",
        "Editorial Taste",
        "Why every product review is a thousand small bets on what to remove.",
        "30 min read",
        1,
      ),
      p(
        "brian-chesky",
        "Brian Chesky",
        "Design Operations",
        "Storyboards, founder mode, and how design culture survives a 10,000-person company.",
        "25 min read",
        2,
      ),
      p(
        null,
        "Jony Ive",
        "Industrial Craft",
        "Material, geometry, and the relentless pursuit of inevitability.",
        "Coming soon",
        3,
      ),
      p(
        null,
        "Dieter Rams",
        "Ten Principles",
        "The lineage every modern product designer eventually traces back to.",
        "Coming soon",
        4,
      ),
    ],
  },
  {
    slug: "overcome-rejection",
    title: "Overcome Rejection",
    blurb:
      "Four people who were told no, fired, ridiculed, or written off — and the route they took back.",
    audience: "Anyone in the middle",
    audienceTag: "Creators",
    totalSteps: 4,
    estimatedTime: "~2 hours",
    accent: "butter",
    steps: [
      p(
        "melanie-perkins",
        "Melanie Perkins",
        "The Long No",
        "How to keep pitching after the 99th rejection without losing your conviction.",
        "25 min read",
        1,
      ),
      p(
        "brian-chesky",
        "Brian Chesky",
        "Surviving a Crisis",
        "When the press, the platform, and your investors all want answers at once.",
        "20 min read",
        2,
      ),
      p(
        "steve-jobs",
        "Steve Jobs",
        "Getting Fired",
        "The 1985 firing wasn't the end — it traded the weight of success for the lightness of a beginner.",
        "30 min read",
        3,
      ),
      p(
        "elon-musk",
        "Elon Musk",
        "Three Rockets, One Shot",
        "Falcon 1 failed three times. The fourth flight had to work or the company died.",
        "30 min read",
        4,
      ),
    ],
  },
  {
    slug: "master-storytelling",
    title: "Master Storytelling",
    blurb: "Turn keynotes into theater, pitches into pilgrimages, and product pages into proof.",
    audience: "Builders who must persuade",
    audienceTag: "Creators",
    totalSteps: 4,
    estimatedTime: "~2 hours",
    accent: "sage",
    steps: [
      p(
        "steve-jobs",
        "Steve Jobs",
        "The Inevitable Opening",
        "How to rewrite an opening line until it feels like the only one that could exist.",
        "30 min read",
        1,
      ),
      p(
        "brian-chesky",
        "Brian Chesky",
        "Storyboarding the Product",
        "Disney-style storyboards as the company's shared script.",
        "25 min read",
        2,
      ),
      p(
        "melanie-perkins",
        "Melanie Perkins",
        "Pitching the Inevitable",
        "How to make investors feel like they're missing out, not being sold to.",
        "20 min read",
        3,
      ),
      p(
        "elon-musk",
        "Elon Musk",
        "Narrative as Strategy",
        "Mars, Roadsters, robots: tying every product to a single civilizational story.",
        "25 min read",
        4,
      ),
    ],
  },
  {
    slug: "first-principles-thinking",
    title: "Think From First Principles",
    blurb:
      "Stop copying the playbook. Reason from physics, customer pain, or human nature — whichever is closer to the floor.",
    audience: "Engineers & founders",
    audienceTag: "Engineers",
    totalSteps: 4,
    estimatedTime: "~2.5 hours",
    accent: "clay",
    steps: [
      p(
        "elon-musk",
        "Elon Musk",
        "Physics First",
        "Battery packs, rocket cost per kilo, tunnels — every cost broken to its raw materials.",
        "35 min read",
        1,
      ),
      p(
        "steve-jobs",
        "Steve Jobs",
        "Experience First",
        "Reasoning backwards from the moment the customer holds the product.",
        "30 min read",
        2,
      ),
      p(
        "melanie-perkins",
        "Melanie Perkins",
        "Market First",
        "Why the right question wasn't 'better design tool' but 'who can't use Photoshop?'",
        "25 min read",
        3,
      ),
      p(
        "brian-chesky",
        "Brian Chesky",
        "Trust First",
        "Designing a marketplace by solving the problem strangers don't sleep in strangers' homes.",
        "25 min read",
        4,
      ),
    ],
  },
];

export function getPath(slug: string): Path | undefined {
  return paths.find((p) => p.slug === slug);
}

export function pathsForPerson(slug: string): Path[] {
  return paths.filter((p) => p.steps.some((s) => s.personSlug === slug));
}

export function pathsByAudience(tag: string): Path[] {
  const t = tag.toLowerCase();
  return paths.filter((p) => p.audienceTag.toLowerCase() === t);
}
