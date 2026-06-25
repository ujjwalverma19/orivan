import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-naval-ravikant.webp";

const navalRavikant: PersonInput = {
  slug: "naval-ravikant",
  name: "Naval Ravikant",
  title: "Founder of AngelList, philosopher of wealth and happiness",
  summary:
    "An Indian-American founder who built AngelList into the operating system for early-stage startups, and whose tweets and podcasts have become a generational manual for wealth, judgment, and happiness.",
  portrait,
  birthYear: "1974",
  industry: "Venture & Philosophy",
  country: "United States (born India)",
  era: "Internet & Crypto (2000–present)",
  companies: ["AngelList", "Epinions", "Vast.com", "MetaStable Capital"],
  roles: ["Founder", "Investor", "Writer"],
  tags: [
    "wealth",
    "leverage",
    "philosophy",
    "venture",
    "founder",
    "happiness",
    "writing",
    "first-principles",
  ],
  keyAchievement:
    "Created AngelList and rewrote the cultural script for how operators think about wealth, leverage, and happiness.",
  timeline: [
    {
      year: "1974",
      title: "Born in New Delhi, India",
      story: "Moved to Queens, New York at age 9 with his mother and brother.",
      challenge: "Immigrant childhood with little money and no family network.",
      lesson: "Scarcity early often produces strong opinions about freedom later.",
    },
    {
      year: "1995",
      title: "Graduated Dartmouth",
      story: "Studied computer science and economics; arrived in Silicon Valley after graduation.",
      challenge: "Choosing a tech career as an outsider with no industry connections.",
      lesson: "Two-discipline degrees outperform single-discipline ones in compound careers.",
    },
    {
      year: "1999",
      title: "Co-founded Epinions",
      story: "Consumer-review startup that raised major funding before the dot-com crash.",
      challenge: "Surviving the bust with the team intact.",
      lesson:
        "First startup teaches you what mistakes look like; the second teaches you what to avoid.",
    },
    {
      year: "2005",
      title: "Lost the Epinions lawsuit headlines",
      story: "A founder-vs-investor dispute over a merger valuation became a cautionary tale.",
      challenge: "Public conflict with former investors and co-founders.",
      lesson: "Cap-table arithmetic and trust are the same conversation.",
    },
    {
      year: "2010",
      title: "Founded AngelList with Babak Nivi",
      story: "Built a marketplace connecting startups, angels, and talent.",
      challenge: "Persuading investors to syndicate in public.",
      lesson: "Open infrastructure beats closed networks once trust is the bottleneck.",
    },
    {
      year: "2013",
      title: "Pushed for the JOBS Act syndicates",
      story: "Lobbied the SEC and Congress to allow online accredited fundraising.",
      challenge: "Changing regulation in an industry built on private relationships.",
      lesson: "Regulation is product surface; treat policy like UI.",
    },
    {
      year: "2016",
      title: "Began publishing tweets that became viral",
      story: "A series of one-line essays on wealth and happiness reached millions.",
      challenge: "Distilling a decade of operator thinking into 140 characters.",
      lesson: "Compression is the highest leverage form of writing.",
    },
    {
      year: "2018",
      title: "How to Get Rich tweetstorm went viral",
      story:
        "A 40-tweet thread on building wealth became one of the most-shared business essays of the decade.",
      challenge: "Speaking publicly about taboo financial topics.",
      lesson: "Speak the obvious truths nobody is willing to publish.",
    },
    {
      year: "2020",
      title: "Backed Bitcoin and crypto early",
      story: "Became one of the most vocal early proponents of Bitcoin in venture.",
      challenge: "Reputational risk in a still-skeptical Wall Street world.",
      lesson: "Convictions are most useful before consensus arrives.",
    },
    {
      year: "2021",
      title: "Stepped back from AngelList CEO",
      story: "Handed CEO duties to Avlok Kohli; remained chairman.",
      challenge: "Letting go of an operating role to focus on writing and investing.",
      lesson: "Founders who release operating control early protect their long-term thinking.",
    },
  ],
  skills: [
    {
      name: "Compression Writing",
      description: "Distills paragraphs into tweet-length statements.",
      developed: "Years of editing his own writing publicly on Twitter.",
    },
    {
      name: "First-Principles Reasoning",
      description: "Decomposes wealth, status, and happiness into separate games.",
      developed: "Decades of reading philosophy, finance, and physics.",
    },
    {
      name: "Marketplace Design",
      description:
        "Designed two-sided marketplaces (Epinions, AngelList) where trust is the bottleneck.",
      developed: "Two decades of building network products.",
    },
    {
      name: "Operator Investing",
      description: "Backed Uber, Twitter, Notion, and Postmates as an angel.",
      developed: "Pattern recognition from founder reps and AngelList syndicate data.",
    },
    {
      name: "Meditation & Mental Models",
      description: "Practices daily meditation and reads from multi-disciplinary models.",
      developed: "Influenced by Eastern philosophy, Charlie Munger, and Nassim Taleb.",
    },
    {
      name: "Public Thinking",
      description: "Builds intellectual capital by tweeting in public.",
      developed: "10+ year practice of refining ideas through audience feedback.",
    },
  ],
  failures: [
    {
      title: "Epinions dispute (2005)",
      context: "Public legal battle over Epinions' sale to eBay/Shopping.com.",
      recovery:
        "Settled and channeled lessons into building AngelList with explicit founder protections.",
      lesson: "Make incentives explicit at the cap table or be prepared for litigation.",
    },
    {
      title: "Vast.com slow growth",
      context: "Vertical search startup never reached escape velocity.",
      recovery: "Sold remaining assets and consolidated focus on AngelList.",
      lesson:
        "Discipline of killing your own underperforming startup is rarer than building a new one.",
    },
    {
      title: "Public commentary backlash",
      context:
        "Several controversial takes on remote work, AI, and US politics drew waves of criticism.",
      recovery: "Engaged the critique; clarified positions; kept posting.",
      lesson: "Public thinking creates surface area for both leverage and attack.",
    },
  ],
  books: [
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      note: "Curated tweet and podcast highlights; closest thing to a Naval operating manual.",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      note: "Naval's most-recommended history book.",
    },
    {
      title: "Total Freedom",
      author: "J. Krishnamurti",
      note: "Influence on his views on desire and happiness.",
    },
    {
      title: "Skin in the Game",
      author: "Nassim Nicholas Taleb",
      note: "Reinforced his framework on incentive design.",
    },
    {
      title: "The Beginning of Infinity",
      author: "David Deutsch",
      note: "Foundational text on knowledge and progress.",
    },
  ],
  influences: [
    { name: "Charlie Munger", note: "Multi-disciplinary mental-models framework." },
    { name: "Nassim Nicholas Taleb", note: "Skin-in-the-game and antifragility lenses." },
    { name: "J. Krishnamurti", note: "Philosophy of desire and present-moment awareness." },
    { name: "Babak Nivi", note: "Long-time co-founder and writing partner." },
    { name: "Balaji Srinivasan", note: "Crypto and exit-strategy thinking interlocutor." },
  ],
  videoIds: [
    "naval-how-to-get-rich-2019",
    "naval-joe-rogan-2019",
    "naval-knowledge-project-2017",
    "naval-tim-ferriss-2015",
  ],
  decisions: [
    {
      title: "Open up syndicates on AngelList",
      why: "Believed online accredited fundraising was inevitable.",
      risk: "High",
      outcome: "Helped pass the JOBS Act provisions and built a category-defining platform.",
      impact: "Restructured early-stage venture allocation.",
    },
    {
      title: "Publish wealth and happiness essays in public",
      why: "Wanted to bypass gatekeepers and traditional publishers.",
      risk: "Medium",
      outcome: "Built a global audience that compounds his investing brand.",
      impact: "Modeled a new path from operator to public intellectual.",
    },
    {
      title: "Bet on Bitcoin early",
      why: "Believed permissionless money was the killer protocol of the decade.",
      risk: "High",
      outcome: "Made early gains and amplified the narrative.",
      impact: "Helped legitimize crypto in mainstream venture circles.",
    },
    {
      title: "Step back from CEO of AngelList",
      why: "Wanted compounding time for writing and thinking.",
      risk: "Low",
      outcome: "AngelList scaled under Avlok Kohli; Naval expanded public presence.",
      impact: "Demonstrated founder-to-thinker transition is a legitimate path.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Wealth is owning equity in things that work while you sleep.",
      takeaway: "Build or buy assets; don't sell your time forever.",
    },
    {
      audience: "Operators",
      lesson: "Specific knowledge can't be taught.",
      takeaway: "Follow obsessions; specific knowledge accumulates as a side effect.",
    },
    {
      audience: "Investors",
      lesson: "Permissionless leverage beats permissioned leverage.",
      takeaway: "Code and media compound while you sleep; capital requires asking.",
    },
    {
      audience: "Thinkers",
      lesson: "Compression is the highest form of writing.",
      takeaway: "Edit your essays until they become tweets, then test them in public.",
    },
    {
      audience: "Anyone",
      lesson: "Happiness is a default, not a destination.",
      takeaway: "Subtract sources of unhappiness before adding sources of pleasure.",
    },
    {
      audience: "Learners",
      lesson: "Read what you love until you love to read.",
      takeaway: "Begin reading from interest, not duty.",
    },
  ],
  quotes: [
    { text: "Seek wealth, not money or status." },
    { text: "Play long-term games with long-term people." },
    {
      text: "All the returns in life come from compound interest — in money, in relationships, or in knowledge.",
    },
    { text: "Read what you love until you love to read." },
    {
      text: "Desire is a contract you make with yourself to be unhappy until you get what you want.",
    },
    { text: "Specific knowledge cannot be trained for." },
  ],
  sampleQuestions: [
    "What does Naval mean by 'specific knowledge'?",
    "How does he think about leverage in modern careers?",
    "What's his philosophy on happiness as a default?",
    "Why did he build AngelList in public?",
    "How does he approach decision-making?",
  ],
  featured: false,
};

export default navalRavikant;
