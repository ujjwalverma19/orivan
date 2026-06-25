import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jensen-huang.webp";

const jensenHuang: PersonInput = {
  slug: "jensen-huang",
  name: "Jensen Huang",
  title: "Founder & CEO, NVIDIA",
  summary:
    "The Denny's busboy who bet thirty years on parallel computing — and turned a 1990s graphics card maker into the most strategically important company of the AI era.",
  portrait,
  featured: false,
  birthYear: "1963",
  industry: "Semiconductors & AI Computing",
  country: "United States (born Taiwan)",
  era: "Modern Silicon (1993–present)",
  companies: ["NVIDIA", "LSI Logic", "Advanced Micro Devices"],
  roles: ["Founder", "CEO", "Engineer"],
  tags: [
    "semiconductors",
    "AI",
    "founder-CEO",
    "platform",
    "long-term",
    "first-principles",
    "resilience",
  ],
  keyAchievement:
    "Founded NVIDIA in 1993 and led it through three decades of near-death experiences to become the platform layer for modern AI — and one of the most valuable companies on earth.",
  timeline: [
    {
      year: "1963",
      title: "Born in Tainan, Taiwan",
      story:
        "Family moved to Thailand when he was 5, then sent him to relatives in the US at 9 to escape Bangkok unrest.",
      challenge:
        "Arrived in Kentucky at age 9 with limited English; placed in what was effectively a reform school by mistake.",
      lesson:
        "Early disorientation builds a tolerance for uncertainty that no business school can teach.",
    },
    {
      year: "1972",
      title: "Sent to Oneida Baptist Institute, Kentucky",
      story:
        "Spent two years at a religious boarding school where he cleaned toilets and learned to play ping pong — both with intensity.",
      challenge: "A 9-year-old immigrant boy among older students at a strict institution.",
      lesson: "Pick a task no one else wants and do it better than anyone else.",
    },
    {
      year: "1984",
      title: "Graduated from Oregon State with EE degree",
      story:
        "Met his future wife Lori in class; he convinced her to date him by promising he'd be a CEO by 30.",
      challenge:
        "Standing out in a public engineering school during the rise of personal computing.",
      lesson: "Set the audacious goal out loud; some people will hold you to it.",
    },
    {
      year: "1985",
      title: "Started as a chip designer at AMD",
      story:
        "His first job designing microprocessors; learned the silicon stack from the bottom up.",
      challenge: "Being the youngest engineer in a room of veterans.",
      lesson: "Pay your dues at the deepest layer of the stack before you try to build on it.",
    },
    {
      year: "1993",
      title: "Co-founded NVIDIA at a Denny's",
      story:
        "Founded with Chris Malachowsky and Curtis Priem in a San Jose Denny's booth; bet on 3D graphics for PC games.",
      challenge: "Entering a market with 30+ competitors and no clear standard.",
      lesson: "If the market is crowded, your conviction has to be sharper, not broader.",
    },
    {
      year: "1995",
      title: "First product NV1 was a commercial disaster",
      story:
        "NV1 used quadratic texture mapping just as Microsoft committed Windows to triangle-based DirectX. NVIDIA almost died.",
      challenge: "Watching the entire premise of the company become obsolete in eighteen months.",
      lesson:
        "Bet-the-company decisions sometimes look obviously wrong in retrospect. Survive the lesson and move.",
    },
    {
      year: "1997",
      title: "Saved by the RIVA 128 launch",
      story:
        "Released RIVA 128, a triangle-based chip rushed to market in 9 months — the company had less than 30 days of cash when it shipped.",
      challenge: "Shipping a complete chip redesign before payroll ran out.",
      lesson: "Pace and survival are the same word in a near-death sprint.",
    },
    {
      year: "1999",
      title: "Invented the GPU with GeForce 256",
      story:
        "Coined the term 'GPU' and shipped the first single-chip 3D processor; NVIDIA IPO'd the same year.",
      challenge: "Establishing GPU as a category, not just a product.",
      lesson: "Naming the category you sell into is a strategic act.",
    },
    {
      year: "2006",
      title: "Launched CUDA — and bet a decade on it",
      story:
        "Released the CUDA parallel-computing platform that let scientists program GPUs for general workloads. Wall Street hated the investment.",
      challenge:
        "Investing billions in a market that didn't exist yet, against analyst objections.",
      lesson: "The platform bets that change everything look unjustifiable for a decade.",
    },
    {
      year: "2008",
      title: "Survived the financial crisis and a manufacturing defect crisis",
      story:
        "Faced a class-action lawsuit over defective laptop GPUs and a collapsing market simultaneously.",
      challenge: "Restructuring during a global crash while paying out settlements.",
      lesson: "Multiple crises at once is the founder's normal mode in deep tech.",
    },
    {
      year: "2012",
      title: "AlexNet won ImageNet using two NVIDIA GPUs",
      story:
        "Geoffrey Hinton's students proved deep neural networks worked on consumer NVIDIA cards. CUDA suddenly had its killer app.",
      challenge:
        "Recognising that the next decade had begun and re-pointing the company toward it.",
      lesson: "Patience plus optionality means you're already positioned when the wave hits.",
    },
    {
      year: "2016",
      title: "Delivered the first DGX-1 to OpenAI",
      story: "Hand-delivered an early AI supercomputer to OpenAI's office — signing the box.",
      challenge:
        "Investing heavily in AI infrastructure when most enterprise customers still bought gaming chips.",
      lesson: "Show up in person for the customers who are about to define your next decade.",
    },
    {
      year: "2020",
      title: "Announced $40B Arm acquisition (later abandoned)",
      story:
        "Tried to acquire Arm from SoftBank; regulators blocked the deal in 2022 after two years of effort.",
      challenge: "Walking away from the most ambitious deal in semiconductor history.",
      lesson: "Sometimes the right move is to lose the deal and keep the strategic relationships.",
    },
    {
      year: "2023",
      title: "AI boom drove NVIDIA past $1 trillion market cap",
      story:
        "Generative AI demand outstripped supply; NVIDIA became the indispensable supplier of every major AI training run.",
      challenge: "Allocating constrained supply across customers all claiming priority.",
      lesson: "When demand inverts overnight, allocation discipline is the new strategy.",
    },
    {
      year: "2024",
      title: "Crossed $3 trillion market cap",
      story:
        "Briefly became the most valuable company in the world; described it as 'an unbelievable year' on his earnings calls.",
      challenge:
        "Sustaining culture in a company that had to scale headcount and revenue simultaneously.",
      lesson: "Hyper-growth tests the culture you built before anyone needed it.",
    },
  ],
  skills: [
    {
      name: "Long-Horizon Bets",
      description:
        "Invests in platform shifts (CUDA, AI, robotics) a decade before they pay off — and defends them through quarterly pressure.",
      developed:
        "Survived three near-death experiences; learned that comfort kills companies faster than crises.",
    },
    {
      name: "Direct Reports at Scale",
      description:
        "Famously has 40–60 direct reports — flat organisation that demands relentless personal pace.",
      developed:
        "Refused traditional org structure because he didn't want hierarchy filtering reality.",
    },
    {
      name: "Operational Detail",
      description:
        "Reads weekly status emails from every team; can recall yield rates and supply contracts in shareholder Q&A.",
      developed: "Treats CEO as engineer-in-chief, not figurehead.",
    },
    {
      name: "Public Storytelling",
      description:
        "GTC keynotes are part-product launch, part-state-of-the-AI-industry address; shaped how the field talks about itself.",
      developed:
        "Realised early that NVIDIA's customers were as much building belief as buying silicon.",
    },
    {
      name: "Resilience",
      description:
        "Has lost the company multiple times — almost-dead three times in the 1990s — and rebuilt each time.",
      developed:
        "Personal philosophy: 'I hope you'll suffer.' Hardship as preparation, not punishment.",
    },
    {
      name: "Customer Obsession in Deep Tech",
      description: "Visits major customers personally; hand-delivered the first DGX-1 to OpenAI.",
      developed:
        "From decades of selling specialised hardware where one missed customer signal cost a year.",
    },
  ],
  failures: [
    {
      title: "NV1 chip disaster (1995)",
      context:
        "First product used quadratic texture mapping just as Microsoft standardised on triangles; instant obsolescence.",
      recovery:
        "Sprinted to ship RIVA 128 in 9 months with less than 30 days of cash; the chip saved the company.",
      lesson: "If the platform shifts under you, build a different boat — fast.",
    },
    {
      title: "Mobile chips (Tegra) failed to gain smartphone share",
      context:
        "Invested heavily in Tegra to compete with Qualcomm; lost the smartphone market badly.",
      recovery:
        "Repurposed Tegra for cars and Nintendo Switch; the IP eventually became the basis for automotive AI chips.",
      lesson:
        "A failed market entry can produce a strategic capability if you refuse to write off the IP.",
    },
    {
      title: "2008 GPU manufacturing defect crisis",
      context:
        "Faulty solder caused laptop GPU failures; led to a major class-action lawsuit and reputational damage.",
      recovery: "Took the charges publicly, paid out, and rebuilt manufacturing QA.",
      lesson: "Hardware crises require visible accountability; cover-ups compound the damage.",
    },
    {
      title: "Failed $40B Arm acquisition (2020–22)",
      context:
        "Regulators blocked the deal after two years of effort; lost goodwill and management bandwidth.",
      recovery:
        "Walked away cleanly; preserved partnership with Arm; pivoted to organic CPU strategy with Grace.",
      lesson: "A deal that doesn't close can still teach you what to build next.",
    },
  ],
  books: [
    {
      title: "The Nvidia Way",
      author: "Tae Kim",
      note: "The most thorough institutional history of NVIDIA, with deep access to Jensen and his executives.",
    },
    {
      title: "Chip War",
      author: "Chris Miller",
      note: "The geopolitical context NVIDIA now operates within — required reading for understanding the company's strategic position.",
    },
    {
      title: "Only the Paranoid Survive",
      author: "Andy Grove",
      note: "Jensen has cited Grove's framing of strategic inflection points as his core operating model.",
    },
    {
      title: "Surfaces and Essences",
      author: "Douglas Hofstadter & Emmanuel Sander",
      note: "On analogy as the engine of cognition — a book Jensen recommends to engineers learning AI.",
    },
    {
      title: "Genius Makers",
      author: "Cade Metz",
      note: "On the AI researchers who shaped the era — Jensen and NVIDIA recur throughout.",
    },
  ],
  influences: [
    { name: "Andy Grove", note: "Intel CEO; model for engineering rigour and strategic paranoia." },
    {
      name: "Geoffrey Hinton",
      note: "AI pioneer whose AlexNet breakthrough validated CUDA's decade-long bet.",
    },
    { name: "Chris Malachowsky", note: "NVIDIA co-founder and longtime engineering conscience." },
    {
      name: "Morris Chang",
      note: "TSMC founder and Jensen's most strategically important supplier relationship.",
    },
    {
      name: "Lori Huang",
      note: "His wife of 40+ years; the person who took the early bet on him at Oregon State.",
    },
  ],
  videoIds: [
    "huang-stanford-gsb-view-top",
    "huang-acquired-podcast",
    "huang-no-priv-engr-talk",
    "huang-gtc-2024-keynote",
    "huang-caltech-commencement",
  ],
  decisions: [
    {
      title: "Betting NVIDIA on CUDA (2006)",
      why: "Believed parallel computing would eventually have a workload beyond graphics.",
      risk: "Extreme",
      outcome: "CUDA became the de-facto platform for deep learning a decade later.",
      impact: "Made NVIDIA the platform layer for the AI era.",
    },
    {
      title: "Pricing RIVA 128 aggressively to save the company (1997)",
      why: "Knew the chip had to ship and sell instantly or NVIDIA would be insolvent.",
      risk: "Extreme",
      outcome: "Sold through fast enough to fund the next generation.",
      impact: "Established NVIDIA's pattern of betting the company on pace.",
    },
    {
      title: "Inventing the term 'GPU' (1999)",
      why: "Wanted to define a new product category, not just sell a faster card.",
      risk: "Low",
      outcome: "GPU became the industry standard term; NVIDIA owned the category narrative.",
      impact: "Demonstrated that category naming is a competitive moat.",
    },
    {
      title: "Investing in datacenter AI hardware (2014–16)",
      why: "Saw deep learning workloads doubling on CUDA every few months.",
      risk: "High",
      outcome: "Datacenter became NVIDIA's largest segment by 2022.",
      impact: "Captured the supply side of the AI economy before competitors realised it existed.",
    },
    {
      title: "Walking away from the Arm acquisition (2022)",
      why: "Recognised regulatory friction would consume years of management attention.",
      risk: "Medium",
      outcome: "Preserved partnerships and refocused on Grace CPU.",
      impact: "Modeled discipline in knowing when to abandon a strategic prize.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Survive long enough to be early.",
      takeaway:
        "NVIDIA was 'too early' for AI for 15 years. Patience plus optionality wins long-horizon games.",
    },
    {
      audience: "CEOs",
      lesson: "Flatten the org to keep reality unfiltered.",
      takeaway: "40+ direct reports forces uncomfortable speed but kills political layers.",
    },
    {
      audience: "Engineers",
      lesson: "Own the platform, not just the product.",
      takeaway: "CUDA is the moat. The chips are the renewal mechanism.",
    },
    {
      audience: "Anyone",
      lesson: "Suffering is the curriculum.",
      takeaway: "He says: 'I hope you'll suffer.' Hardship is how character compounds.",
    },
    {
      audience: "Operators",
      lesson: "Visit the most important customers in person.",
      takeaway:
        "He hand-delivered the first DGX-1 to OpenAI. The signal said more than the spec sheet.",
    },
    {
      audience: "Investors",
      lesson: "Platform bets look indefensible for a decade.",
      takeaway: "CUDA was a waste of money on Wall Street's scoreboard for ten years.",
    },
  ],
  quotes: [
    {
      text: "I hope that you all develop a tremendous amount of suffering for yourself. Suffering is so important.",
    },
    { text: "Our company is thirty days from going out of business — every day." },
    { text: "Don't be afraid to be misunderstood for a long time." },
    {
      text: "The willingness to do something even though you don't know it'll work is what made us.",
    },
    { text: "Resilience matters more than intelligence." },
    { text: "I don't have a five-year plan. I have a 30-year direction and a one-week execution." },
  ],
  sampleQuestions: [
    "How did Jensen Huang turn NVIDIA into the most important AI company?",
    "What was the NV1 disaster and how did NVIDIA survive it?",
    "Why did Jensen bet on CUDA for a decade with no payoff?",
    "How does Jensen run a company with 40+ direct reports?",
    "What did Jensen learn from the failed Arm acquisition?",
    "Why does Jensen say he hopes employees suffer?",
    "How did NVIDIA become the platform for modern AI?",
    "What can founders learn from Jensen's resilience?",
  ],
};

export default jensenHuang;
