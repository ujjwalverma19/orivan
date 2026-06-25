import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-paul-graham.webp";

const paulGraham: PersonInput = {
  slug: "paul-graham",
  name: "Paul Graham",
  title: "Essayist; Co-founder, Y Combinator",
  summary:
    "The programmer-essayist who invented modern startup investing — turning a Lisp-fueled hacker's worldview into Y Combinator and a body of essays that became the operating manual for two decades of founders.",
  portrait,
  featured: false,
  birthYear: "1964",
  industry: "Startups & Essays",
  country: "United Kingdom / United States",
  era: "Web 2.0 → Modern Startup Era (1995–present)",
  companies: ["Viaweb", "Y Combinator", "Hacker News"],
  roles: ["Founder", "Investor", "Essayist", "Programmer"],
  tags: ["startups", "essays", "lisp", "y-combinator", "founders", "writing"],
  keyAchievement:
    "Co-founded Y Combinator and seeded thousands of startups including Airbnb, Stripe, Dropbox, Reddit, and Coinbase — while writing the canonical essays that shaped how a generation thought about building companies.",
  timeline: [
    {
      year: "1964",
      title: "Born in Weymouth, England",
      story:
        "Family moved to Pittsburgh when he was a child; raised in a quiet academic household.",
      challenge: "An immigrant kid in 1970s suburbia with no obvious peer group.",
      lesson: "Outsider perspective is a structural advantage.",
    },
    {
      year: "1986",
      title: "Graduated Cornell with a philosophy degree",
      story: "Switched from philosophy to computer science via art school detours.",
      challenge: "No clear career track from philosophy.",
      lesson: "The wandering years compound; trust them.",
    },
    {
      year: "1990",
      title: "PhD in Applied Sciences, Harvard",
      story: "Studied with Guy Steele's circle; absorbed Lisp deeply.",
      challenge: "Academia rewarded the wrong things for the future he wanted.",
      lesson: "Pick the tools that fit the work, not the credential.",
    },
    {
      year: "1993",
      title: "Studied painting in Florence",
      story: "Took years off to paint at the Accademia di Belle Arti.",
      challenge: "Reconciling artist's identity with engineer's skills.",
      lesson: "Long detours sharpen the eye more than focused careers do.",
    },
    {
      year: "1995",
      title: "Co-founded Viaweb",
      story: "Built the first web-based application — a store builder — written in Common Lisp.",
      challenge: "Convincing customers and engineers that web apps were a category.",
      lesson: "Ship the smallest provable version of your hypothesis.",
    },
    {
      year: "1998",
      title: "Sold Viaweb to Yahoo for ~$50M",
      story: "Became Yahoo Store and gave Graham the capital and freedom to write and invest.",
      challenge: "Letting go of a product still in its prime.",
      lesson: "Liquidity is permission to play larger games.",
    },
    {
      year: "2001",
      title: "Began publishing essays on paulgraham.com",
      story:
        "Started with 'Beating the Averages' and 'Hackers and Painters'; built a cult following.",
      challenge: "Writing for nobody for years before anyone read it.",
      lesson: "Publish anyway; readers compound on archives, not new posts.",
    },
    {
      year: "2005",
      title: "Co-founded Y Combinator with Jessica Livingston",
      story:
        "Funded the first batch of 8 startups with $20K each — a deliberate inversion of VC norms.",
      challenge: "Convincing serious founders to take $20K and live in Cambridge.",
      lesson: "When everyone says 'this is dumb,' you may have found the opportunity.",
    },
    {
      year: "2007",
      title: "Funded Dropbox and Reddit",
      story: "Early batches produced foundational consumer-internet companies.",
      challenge: "Picking founders without a track record.",
      lesson: "Bet on the founder's relentless resourcefulness; ideas pivot, character doesn't.",
    },
    {
      year: "2009",
      title: "Funded Airbnb after meeting Brian Chesky",
      story: "Famously asked if they had any persistence; the cereal-box story sold him.",
      challenge: "Airbnb looked unfundable on paper — a couch-renting marketplace.",
      lesson: "Determination is more legible than market sizing.",
    },
    {
      year: "2012",
      title: "Published 'How to Get Startup Ideas'",
      story: "Essay became the standard reading for early-stage founders.",
      challenge: "Compressing a decade of pattern recognition into one piece.",
      lesson: "Write the essay you wish someone had handed you years earlier.",
    },
    {
      year: "2014",
      title: "Stepped back from YC president role",
      story: "Handed leadership to Sam Altman and moved to England.",
      challenge: "Walking away from the thing he had built into a brand.",
      lesson: "Founders should leave before they have to.",
    },
    {
      year: "2020",
      title: "Continued essays from England",
      story: "Wrote 'How to Think for Yourself,' 'What I Worked On,' and other late-career pieces.",
      challenge: "Staying relevant as the startup world moved on.",
      lesson: "A writer's job is to keep writing; influence is a byproduct.",
    },
  ],
  skills: [
    {
      name: "Essay Writing",
      description:
        "Distilled complex startup wisdom into 2,000-word essays that stayed canonical for two decades.",
      developed: "Decades of obsessive rewriting; every essay went through dozens of drafts.",
    },
    {
      name: "Founder Evaluation",
      description:
        "Read founder traits from 10-minute interviews better than almost anyone else in venture.",
      developed: "Thousands of YC application reviews and interviews.",
    },
    {
      name: "Lisp & Programming",
      description:
        "Built Viaweb in Common Lisp at a time when this was heresy; productivity edge gave a 5x lead.",
      developed: "Self-taught Lisp obsession starting in graduate school.",
    },
    {
      name: "Pattern Recognition",
      description:
        "Identified founder archetypes (determined, flexible, naive optimist) before they had names.",
      developed: "YC batches as a labeled dataset across two decades.",
    },
    {
      name: "Contrarian Bet Sizing",
      description: "Backed Airbnb, Dropbox, and Stripe when consensus called each one unfundable.",
      developed: "Trained himself to weight conviction by how dumb the bet sounded to peers.",
    },
    {
      name: "Long-form Thinking",
      description: "Kept thinking about a problem for months until the essay wrote itself.",
      developed: "Refused to publish until the argument felt inevitable.",
    },
    {
      name: "Restraint",
      description: "Funded small, hands-off, and trusted founders to figure out the rest.",
      developed: "Built YC's model on the assumption that founders know more than investors.",
    },
  ],
  failures: [
    {
      title: "Twitter spats and politics",
      context: "Late-2010s tweets on inequality and woke culture drew heavy criticism.",
      recovery: "Returned focus to essays and stepped back from real-time discourse.",
      lesson: "Real-time platforms punish the kind of nuance essays are made of.",
    },
    {
      title: "Viaweb early growth struggles",
      context: "First year sold to almost no merchants; nearly ran out of cash.",
      recovery: "Doubled down on ease of use and a fanatic support model.",
      lesson: "First customers come from the founder personally, not the funnel.",
    },
    {
      title: "Missing some YC standouts",
      context: "Passed on a number of companies that became unicorns.",
      recovery: "Used the post-mortems to refine YC's interview heuristics.",
      lesson: "Misses teach you more than hits; the hits all look obvious in retrospect.",
    },
    {
      title: "Lisp's marginalization",
      context: "Bet on Lisp as the future mainstream language; it remained niche.",
      recovery: "Took the productivity lesson into Y Combinator's contrarian thesis.",
      lesson: "Tool choice is a leverage decision, not a popularity contest.",
    },
  ],
  books: [
    {
      title: "Hackers & Painters",
      author: "Paul Graham",
      note: "Collected essays that became required reading for early-2000s programmers.",
    },
    {
      title: "On Lisp",
      author: "Paul Graham",
      note: "His technical book on advanced macros — the deep-end of his programming worldview.",
    },
    {
      title: "Founders at Work",
      author: "Jessica Livingston",
      note: "His wife's interview collection that informed YC's founder philosophy.",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      note: "Companion thinking on contrarian startup theses.",
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      note: "Shaped his thinking on memes and idea propagation.",
    },
    {
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard Feynman",
      note: "The temperament he most admired and modeled.",
    },
  ],
  influences: [
    {
      name: "Jessica Livingston",
      note: "Co-founder, wife, and the more accurate founder-evaluator at YC.",
    },
    {
      name: "Robert Morris",
      note: "MIT professor and YC co-founder; lifelong friend since Viaweb days.",
    },
    {
      name: "John McCarthy",
      note: "Inventor of Lisp; intellectual ancestor of his programming taste.",
    },
    { name: "Sam Altman", note: "Successor who scaled YC into an institution." },
    { name: "Richard Feynman", note: "Patron saint of clear thinking." },
    {
      name: "Brian Chesky",
      note: "Founder who taught him that determination is the legible signal.",
    },
  ],
  videoIds: [
    "pg-before-the-startup",
    "pg-startup-school-2013",
    "pg-startup-ideas",
    "pg-yc-archives",
    "pg-ralston-conversation",
  ],
  decisions: [
    {
      title: "Building Viaweb in Lisp (1995)",
      why: "Believed the productivity edge would outweigh hiring difficulty.",
      risk: "High",
      outcome: "Shipped faster than competitors and sold to Yahoo for $50M.",
      impact: "Validated the 'right tool over popular tool' bet that defined his later worldview.",
    },
    {
      title: "Funding 8 startups at once (2005)",
      why: "Saw that batching reduced cost per startup and created peer support.",
      risk: "Medium",
      outcome: "Birthed the YC model that has since been copied globally.",
      impact: "Reshaped early-stage venture into a class-based system.",
    },
    {
      title: "Funding Airbnb on instinct",
      why: "Saw founder determination that no spreadsheet would capture.",
      risk: "High",
      outcome: "One of the best venture returns of the decade.",
      impact: "Proved that founder character beats market analysis early.",
    },
    {
      title: "Publishing essays for free",
      why: "Believed long-form writing was the highest-leverage broadcast available.",
      risk: "Low",
      outcome: "Built a generational reading list; YC dealflow followed the essays.",
      impact: "Established the founder-essayist archetype that many now emulate.",
    },
    {
      title: "Handing YC to Sam Altman (2014)",
      why: "Believed the institution had outgrown founder dependence.",
      risk: "Medium",
      outcome: "YC scaled into a global accelerator network.",
      impact: "Modeled clean succession in venture, a rare event.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Make something people want.",
      takeaway: "Everything else is downstream of demonstrated demand from real users.",
    },
    {
      audience: "Investors",
      lesson: "Bet on determination over plan.",
      takeaway: "Plans pivot; the relentless founder finds the next plan.",
    },
    {
      audience: "Writers",
      lesson: "Write the essay you wish you'd been handed.",
      takeaway: "Compression beats elaboration; the shorter the more useful.",
    },
    {
      audience: "Engineers",
      lesson: "Choose tools that compound your speed.",
      takeaway: "A 2x productivity edge over four years is a different company.",
    },
    {
      audience: "Students",
      lesson: "Do things that don't scale.",
      takeaway: "Manual, embarrassing, hands-on work seeds every great compound.",
    },
    {
      audience: "Anyone",
      lesson: "Live in the future and build what's missing.",
      takeaway: "The best startup ideas look like notes from the next decade.",
    },
    {
      audience: "Leaders",
      lesson: "Default to writing.",
      takeaway: "If you can't write the argument, you don't have it yet.",
    },
  ],
  quotes: [
    { text: "Make something people want." },
    { text: "Live in the future, then build what's missing." },
    {
      text: "The most important thing for the first batch of customers is to do things that don't scale.",
    },
    { text: "If you have multiple choices, pick the more ambitious one." },
    { text: "A startup is a company designed to grow fast." },
    { text: "The best way to convince yourself is to write it down." },
    { text: "Determination is the single most important quality in a startup founder." },
  ],
  sampleQuestions: [
    "How did Paul Graham start Y Combinator?",
    "Why did Paul Graham build Viaweb in Lisp?",
    "How does Paul Graham evaluate founders?",
    "What did Paul Graham mean by 'do things that don't scale'?",
    "Why did Paul Graham fund Airbnb when others wouldn't?",
    "What can writers learn from Paul Graham's essays?",
    "How did Paul Graham hand off Y Combinator to Sam Altman?",
  ],
};

export default paulGraham;
