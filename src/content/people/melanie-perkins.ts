import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-perkins.webp";

const melaniePerkins: PersonInput = {
  slug: "melanie-perkins",
  name: "Melanie Perkins",
  title: "Co-founder of Canva",
  summary:
    "Teaching yearbooks in Perth that grew into a design tool for a billion people — proof that patient founders win the long game.",
  portrait,
  featured: true,
  featuredOrder: 3,
  birthYear: "1987",
  industry: "Design & SaaS",
  country: "Australia",
  era: "Cloud Software & Design (2012–present)",
  companies: ["Fusion Books", "Canva", "Affinity"],
  roles: ["Co-founder", "CEO", "Product Lead"],
  tags: [
    "design",
    "product",
    "persistence",
    "scaling",
    "pitching",
    "patient-capital",
    "two-step-planning",
    "founder",
    "saas",
  ],
  keyAchievement:
    "Built Canva into a multi-billion dollar design platform serving 150M+ users worldwide.",
  timeline: [
    {
      year: "1987",
      title: "Born in Perth, Western Australia",
      story:
        "Raised in a family of immigrants — Malaysian-Filipino mother, Australian engineer father.",
      challenge: "Growing up far from the global tech industry.",
      lesson: "Distance from the center can sharpen your view of what's missing.",
    },
    {
      year: "2007",
      title: "Started Fusion Books in her mother's living room",
      story:
        "While studying at UWA, taught design tools to fellow students who found them impossibly hard.",
      challenge: "No capital, no engineering background, no obvious path to scale.",
      lesson: "The product you build for the user in front of you can become a global product.",
    },
    {
      year: "2010",
      title: "Met co-founder Cliff Obrecht",
      story: "Built Fusion Books into Australia's largest yearbook publisher over three years.",
      challenge: "Manual operations; printing logistics; tiny team.",
      lesson: "Win the small market first; the big one looks more attainable from there.",
    },
    {
      year: "2012",
      title: "Started pitching Canva to investors",
      story: "Flew to San Francisco; pitched 100+ VCs; got rejected by almost all of them.",
      challenge:
        "Outsider founder, no Silicon Valley network, ambitious vision investors didn't believe.",
      lesson: "Rejection is information about the investor, not the idea.",
    },
    {
      year: "2013",
      title: "Launched Canva",
      story:
        "Free design tool aimed at people who weren't designers — went viral via word of mouth.",
      challenge: "Adobe was the incumbent; designers dismissed Canva as a toy.",
      lesson: "Empower the user the incumbent ignores.",
    },
    {
      year: "2015",
      title: "Hit 2M users",
      story: "Reached 2 million users without a sales team — entirely through self-serve growth.",
      challenge: "Scaling infrastructure faster than the team could hire.",
      lesson: "Product-led growth is a system, not a marketing tactic.",
    },
    {
      year: "2018",
      title: "Unicorn valuation",
      story: "Raised at a $1B valuation as the company crossed 10M monthly users.",
      challenge: "Defending an Australian HQ against pressure to relocate.",
      lesson: "You don't have to be in the Valley to build for the world.",
    },
    {
      year: "2021",
      title: "$40B valuation",
      story: "Valued at $40B as one of the most valuable private SaaS companies in the world.",
      challenge: "Scaling culture as the team grew past 2,000.",
      lesson: "Set a 'crazy big goal' and a 'next concrete step' — and revisit both quarterly.",
    },
    {
      year: "2023",
      title: "Canva for enterprise",
      story:
        "Pushed upmarket into design systems and team collaboration, taking on Figma and Adobe.",
      challenge: "Competing in enterprise without losing the consumer DNA.",
      lesson: "The hardest pivot is staying simple while growing complex.",
    },
  ],
  skills: [
    {
      name: "Persistence",
      description: "Pitched investors 100+ times over three years before her seed round closed.",
      developed:
        "Sharpened by years of being the youngest, the woman, and the Australian in the room.",
    },
    {
      name: "Product Empathy",
      description: "Designs for people intimidated by existing tools — not for power users.",
      developed: "Years of teaching design tools to students who found them inscrutable.",
    },
    {
      name: "Two-Step Planning",
      description: "Holds a 'crazy big goal' alongside the very next concrete step.",
      developed: "Forced by needing to motivate a small team to attempt huge things.",
    },
    {
      name: "Long-Term Capital",
      description: "Picks investors and structures for decades, not exits.",
      developed: "Shaped by watching peers IPO too early and lose strategic optionality.",
    },
    {
      name: "Cultural Hiring",
      description: "Hires for values fit before skill fit at the executive level.",
      developed: "Built Canva's culture deck before product-market fit.",
    },
  ],
  failures: [
    {
      title: "Years of investor rejection",
      context: "Heard 'no' from over 100 investors across multiple trips to San Francisco.",
      recovery:
        "Found Bill Tai through a kitesurfing connection, who introduced her to the right network.",
      lesson: "Persistence is a strategy when most people quit at #20.",
    },
    {
      title: "Fusion Books scaling limits",
      context: "Yearbook business hit a ceiling — too operational, too seasonal, too physical.",
      recovery: "Used the customer learning, not the business, to launch Canva.",
      lesson: "Treat early ventures as research, not destinations.",
    },
    {
      title: "Slow early growth in the US",
      context: "Canva was huge in Australia and Asia long before it was discovered in the US.",
      recovery:
        "Patient brand-building eventually compounded into the dominant share it has today.",
      lesson:
        "Geographic timing differs by market — don't measure success by Silicon Valley clocks.",
    },
    {
      title: "Enterprise growing pains",
      context:
        "Initial enterprise rollout missed the collaboration features design teams expected.",
      recovery: "Acquired Affinity in 2024 to fill the professional-design gap.",
      lesson: "Buy the capability when building it would take too long.",
    },
  ],
  books: [
    {
      title: "Delivering Happiness",
      author: "Tony Hsieh",
      note: "Shaped her belief that culture and customer love compound.",
    },
    {
      title: "Crucial Conversations",
      author: "Patterson et al.",
      note: "Tool for navigating tough conversations as the team grew.",
    },
    {
      title: "Trillion Dollar Coach",
      author: "Schmidt, Eagle, Rosenberg",
      note: "Bill Campbell's playbook for coaching executive teams.",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      note: "Reinforced the power of shared myths in scaling organizations.",
    },
    {
      title: "Originals",
      author: "Adam Grant",
      note: "On championing ideas when most people dismiss them.",
    },
  ],
  influences: [
    {
      name: "Bill Tai",
      note: "VC, kitesurfer, and the network connector who unlocked her first round.",
    },
    {
      name: "Cliff Obrecht",
      note: "Co-founder, husband, and operating partner since the early Fusion Books days.",
    },
    {
      name: "Cameron Adams",
      note: "Co-founder and CPO — a designer's designer who shaped the early product.",
    },
    {
      name: "Mary Spio",
      note: "Aerospace engineer-turned-founder who modeled persistence across industries.",
    },
  ],
  videoIds: [
    "perkins-lennys-rejections",
    "perkins-twist",
    "perkins-sxsw-sydney",
    "perkins-vivatech",
  ],
  decisions: [
    {
      title: "Keeping HQ in Australia",
      why: "Believed talent and culture mattered more than proximity to investors.",
      risk: "High",
      outcome: "Built a globally distributed company without sacrificing density.",
      impact: "Proved category-defining companies don't require Silicon Valley addresses.",
    },
    {
      title: "Free forever for consumers",
      why: "Wanted everyone — student, teacher, small business — to access design.",
      risk: "Medium",
      outcome: "Created a top-of-funnel that paid subscriptions can't replicate.",
      impact: "Made Canva the default verb for design among non-designers.",
    },
    {
      title: "Acquiring Affinity (2024)",
      why: "Needed pro-grade tools to compete with Adobe at the high end.",
      risk: "High",
      outcome: "Closed a multi-hundred-million pound deal with the largest indie design suite.",
      impact: "Stretched Canva from consumer to professional in one move.",
    },
    {
      title: "The Two-Step Plan as company OS",
      why: "Wanted a way to balance ambition with execution.",
      risk: "Low",
      outcome: "Adopted across every team at Canva.",
      impact: "Made giant goals feel like the next concrete step every quarter.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Persistence outlasts pattern matching.",
      takeaway:
        "Most investors say no until something undeniable shifts — keep building the undeniable thing.",
    },
    {
      audience: "Product Managers",
      lesson: "Design for the user that's intimidated, not the user that's expert.",
      takeaway: "The biggest market is the one the incumbents make feel stupid.",
    },
    {
      audience: "Leaders",
      lesson: "Pair a crazy big goal with a tiny next step.",
      takeaway: "Ambition without execution is theatre; execution without ambition is drift.",
    },
    {
      audience: "Operators",
      lesson: "Patient capital is a competitive advantage.",
      takeaway: "Choose investors who'll still be there in 15 years.",
    },
    {
      audience: "Designers",
      lesson: "Templates are not the enemy of creativity.",
      takeaway: "Constraints help people start; blank canvases scare them off.",
    },
  ],
  sampleQuestions: [
    "How did Melanie Perkins raise her first round?",
    "What is Canva's two-step planning model?",
    "Why did she keep Canva headquartered in Australia?",
    "How did she beat Adobe at the bottom of the market?",
    "What can a first-time founder learn from her persistence?",
  ],
};

export default melaniePerkins;
