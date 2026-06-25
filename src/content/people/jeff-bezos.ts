import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jeff-bezos.webp";

const jeffBezos: PersonInput = {
  slug: "jeff-bezos",
  name: "Jeff Bezos",
  title: "Founder of Amazon",
  summary:
    "A hedge-fund quant who quit Wall Street to sell books out of a garage and ended up rewiring global commerce, logistics, and cloud computing around one obsession: the customer.",
  portrait,
  birthYear: "1964",
  industry: "E-commerce, Cloud Computing & Aerospace",
  country: "United States",
  era: "Internet & Cloud (1994–present)",
  companies: ["Amazon", "Blue Origin", "Washington Post"],
  roles: ["Founder", "CEO", "Investor", "Operator"],
  tags: [
    "customer-obsession",
    "long-term",
    "founder",
    "operations",
    "logistics",
    "cloud",
    "writing",
    "first-principles",
    "scale",
  ],
  keyAchievement:
    "Built the most customer-obsessed company in the world and invented the modern cloud.",
  timeline: [
    {
      year: "1964",
      title: "Born in Albuquerque, New Mexico",
      story:
        "Raised partly by his Cuban-immigrant stepfather Miguel Bezos; spent summers on his grandfather's Texas ranch fixing windmills and machinery.",
      challenge: "Constantly moved as a child and had to keep starting over socially.",
      lesson:
        "Hands-on tinkering teaches you that almost everything is fixable if you take it apart slowly.",
    },
    {
      year: "1986",
      title: "Graduated Princeton in CS and EE",
      story:
        "Switched from physics after realizing the top theoretical physicists were operating at another level.",
      challenge: "Letting go of a childhood dream of being a physicist.",
      lesson: "Comparative advantage is a better filter than passion alone.",
    },
    {
      year: "1990",
      title: "Joined hedge fund D.E. Shaw",
      story:
        "Became the youngest senior VP at one of Wall Street's most quantitative firms; ran exotic-arbitrage groups.",
      challenge: "Choosing finance over the engineering work he loved.",
      lesson: "Time spent at a learning machine pays a dividend long after you leave.",
    },
    {
      year: "1994",
      title: "Quit to start Amazon",
      story:
        "Saw web usage growing 2,300% a year, wrote a list of 20 categories, and chose books. Drove to Seattle with MacKenzie writing the business plan in the passenger seat.",
      challenge: "Walking away from a guaranteed year-end bonus to sell books online.",
      lesson:
        "Use a regret-minimization framework — project to age 80 and pick what you won't regret.",
    },
    {
      year: "1997",
      title: "Took Amazon public",
      story:
        "IPO'd 18 months after launch at $18 a share; first shareholder letter introduced 'Day 1' and the long-term operating model.",
      challenge: "Convincing public markets to underwrite years of unprofitability.",
      lesson: "Write the operating philosophy down on year one — it compounds for decades.",
    },
    {
      year: "2000",
      title: "Dot-com crash nearly killed Amazon",
      story: "Stock fell from $107 to $6; convertible debt holders began circling.",
      challenge: "Cutting headcount while staying invested in long-bet infrastructure.",
      lesson: "Survive the crash and the surviving competitors are gone.",
    },
    {
      year: "2002",
      title: "Launched AWS in early form",
      story:
        "Saw internal teams reinventing infrastructure and decided to externalize it as a platform.",
      challenge: "Asking retail-trained leaders to build a developer business.",
      lesson: "Inside-out platforms beat outside-in ones because they're battle-tested first.",
    },
    {
      year: "2007",
      title: "Launched the Kindle",
      story: "Took four years of secret hardware work to free books from paper.",
      challenge: "Cannibalizing Amazon's own bookstore business.",
      lesson: "If you don't cannibalize yourself, someone else will.",
    },
    {
      year: "2013",
      title: "Bought the Washington Post",
      story: "Personal $250M purchase; reframed the Post as a national digital paper.",
      challenge: "Restoring credibility to a declining institution under public scrutiny.",
      lesson: "Sometimes you buy an institution because the country needs it to exist.",
    },
    {
      year: "2018",
      title: "Amazon hit a $1T market cap",
      story: "Became the second US company to reach the milestone; AWS now an enterprise standard.",
      challenge: "Managing the regulatory and political weight that comes with scale.",
      lesson: "Scale is a tax; the only deduction is staying focused on customers.",
    },
    {
      year: "2021",
      title: "Stepped down as CEO",
      story:
        "Handed Amazon to Andy Jassy and refocused on Blue Origin, the Bezos Earth Fund, and the Day 1 Fund.",
      challenge: "Letting go of the company he'd defined for 27 years.",
      lesson: "Founders should leave while the institution still has its energy.",
    },
  ],
  skills: [
    {
      name: "Long-Term Thinking",
      description: "Operates on 5–7 year decision horizons in a quarterly world.",
      developed:
        "Refused to give EPS guidance from year one and wrote multi-decade shareholder letters.",
    },
    {
      name: "Writing as Thinking",
      description:
        "Banned PowerPoint for six-page memos; meetings start with 20 minutes of silent reading.",
      developed: "Decade-plus discipline of authoring every shareholder letter himself.",
    },
    {
      name: "First-Principles Reasoning",
      description:
        "Decomposes problems to physics-level building blocks before applying analogies.",
      developed: "Trained at Princeton physics and refined at D.E. Shaw's quantitative culture.",
    },
    {
      name: "Operational Detail",
      description:
        "Personally reviewed metrics dashboards weekly; could quote conversion rates by category.",
      developed: "Treated Amazon's S-Team weekly review as his real classroom.",
    },
    {
      name: "Recruiting Bar Raisers",
      description: "Created the 'bar raiser' role to ensure every hire raised the average.",
      developed:
        "Watched early teams degrade with mediocre hires and engineered the system to prevent it.",
    },
    {
      name: "Capital Allocation",
      description:
        "Reinvested every dollar of profit for two decades to build moats competitors couldn't price.",
      developed: "Modeled compounding from Buffett's letters; applied it to operating cash flow.",
    },
    {
      name: "High-Velocity Decisions",
      description: "Distinguishes one-way and two-way doors; demands speed on the latter.",
      developed: "Codified after observing his own teams over-deliberate reversible choices.",
    },
  ],
  failures: [
    {
      title: "Fire Phone (2014)",
      context: "Spent ~$170M building an Amazon-branded smartphone that flopped at retail.",
      recovery:
        "Killed it within a year; the underlying voice team rolled into Alexa, which became Echo.",
      lesson: "Even disastrous bets can produce the seed of the next category.",
    },
    {
      title: "Pets.com investment (1999)",
      context: "Amazon-backed delivery business that became the symbol of dot-com excess.",
      recovery:
        "Wrote off the investment; absorbed the operational lessons into Amazon's own logistics.",
      lesson: "External bets pay off in pattern recognition even when the equity goes to zero.",
    },
    {
      title: "Auctions and zShops (1999)",
      context: "Two failed attempts to build an eBay competitor before Marketplace finally worked.",
      recovery: "Re-architected as a seller platform integrated with Amazon listings.",
      lesson: "If a strategy is right, the third execution often is the one that ships.",
    },
    {
      title: "MGM acquisition scrutiny (2022)",
      context: "Faced regulatory friction and integration questions on the $8.5B deal.",
      recovery: "Pushed through closing and folded MGM into Prime Video's slate.",
      lesson: "Large acquisitions buy not just IP but a multi-year integration commitment.",
    },
  ],
  books: [
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      note: "Bezos calls it the book that taught him about regret and choices.",
    },
    {
      title: "Sam Walton: Made in America",
      author: "Sam Walton",
      note: "Source of Amazon's frugality and customer-first operating culture.",
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      note: "Used to justify cannibalizing Amazon's own businesses.",
    },
    {
      title: "Built to Last",
      author: "Jim Collins",
      note: "Influence on Amazon's leadership-principles framework.",
    },
    {
      title: "Invent and Wander",
      author: "Jeff Bezos",
      note: "His collected shareholder letters and speeches — the closest thing to his operating manual.",
    },
  ],
  influences: [
    { name: "Warren Buffett", note: "Compounding mindset and shareholder-letter format." },
    { name: "Sam Walton", note: "Frugality, customer obsession, store-walking detail." },
    {
      name: "Jim Sinegal (Costco)",
      note: "Margin-as-opportunity thinking and membership pricing.",
    },
    { name: "Charlie Munger", note: "Mental models and inversion as decision frames." },
    { name: "Andy Grove", note: "High-Output Management discipline applied to Amazon's reviews." },
  ],
  videoIds: [
    "bezos-princeton-2010",
    "bezos-charlie-rose-1999",
    "bezos-day-one-letter-readout",
    "bezos-summit-fireside-2017",
    "bezos-economic-club-2018",
  ],
  decisions: [
    {
      title: "Choose books as Amazon's first category",
      why: "Highest SKU count, lowest shipping risk, easiest customer review loop.",
      risk: "Medium",
      outcome: "Built the catalog and reviews engine that powered every subsequent category.",
      impact: "Defined the playbook for digital retail expansion.",
    },
    {
      title: "Launch AWS as an external business",
      why: "Saw recurring infrastructure work as a horizontal opportunity.",
      risk: "High",
      outcome: "Created the cloud computing industry and Amazon's most profitable business.",
      impact: "Reshaped how the entire software industry deploys.",
    },
    {
      title: "Ban PowerPoint at the S-Team",
      why: "Believed slides hid sloppy thinking.",
      risk: "Low",
      outcome: "Six-page memos became the gold standard for strategic clarity.",
      impact: "Forced executives to write — and therefore actually think — before deciding.",
    },
    {
      title: "Buy the Washington Post personally",
      why: "Believed credible journalism is national infrastructure.",
      risk: "Medium",
      outcome: "Returned the paper to profitability and digital relevance.",
      impact: "Modeled how technologists can underwrite institutions outside their core.",
    },
    {
      title: "Found Blue Origin in 2000",
      why: "Believed heavy industry must move off-planet within a century.",
      risk: "Extreme",
      outcome: "Built reusable rocket technology and a long-duration mission framework.",
      impact: "Positioned a second multi-decade bet alongside Amazon.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Customer obsession beats competitor obsession.",
      takeaway:
        "Watch what customers complain about today; competitors will copy you tomorrow either way.",
    },
    {
      audience: "Operators",
      lesson: "Most decisions are two-way doors.",
      takeaway: "Move fast on reversible choices and slow on the irreversible ones.",
    },
    {
      audience: "Leaders",
      lesson: "Disagree and commit.",
      takeaway: "When the team picks the other path, throw your weight behind it without irony.",
    },
    {
      audience: "Builders",
      lesson: "Pick a market growing on its own.",
      takeaway: "A rising tide hides early mistakes and rewards staying power.",
    },
    {
      audience: "Communicators",
      lesson: "Writing reveals sloppy thinking.",
      takeaway: "Replace slide decks with prose memos and watch quality jump.",
    },
    {
      audience: "Investors",
      lesson: "Free cash flow over earnings.",
      takeaway: "Optimize for what the business can compound, not what looks good this quarter.",
    },
  ],
  quotes: [
    { text: "Your margin is my opportunity." },
    { text: "We are stubborn on vision. We are flexible on details." },
    {
      text: "If you decide that you're going to do only the things you know are going to work, you're going to leave a lot of opportunity on the table.",
    },
    { text: "In the end, we are our choices. Build yourself a great story." },
    { text: "It's not an experiment if you know it's going to work." },
    {
      text: "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    },
  ],
  sampleQuestions: [
    "How do I apply the regret-minimization framework to a career decision?",
    "What can founders learn from Bezos's obsession with customers?",
    "How does Amazon write six-page memos and why?",
    "When should I treat a decision as a one-way door?",
    "How did Bezos think about competition during Amazon's early years?",
  ],
  featured: false,
};

export default jeffBezos;
