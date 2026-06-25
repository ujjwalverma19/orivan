import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-ray-dalio.webp";

const rayDalio: PersonInput = {
  slug: "ray-dalio",
  name: "Ray Dalio",
  title: "Founder, Bridgewater Associates",
  summary:
    "Built the world's largest hedge fund by codifying decision-making itself — turning radical transparency, idea meritocracy, and written principles into an operating system for thinking under uncertainty.",
  portrait,
  featured: false,
  birthYear: "1949",
  industry: "Investing & Macro",
  country: "United States",
  era: "Post-Bretton Woods Macro (1971–present)",
  companies: ["Bridgewater Associates", "Dalio Family Office"],
  roles: ["Hedge Fund Founder", "Macro Investor", "Author", "Philanthropist"],
  tags: [
    "macro",
    "investing",
    "principles",
    "decision-making",
    "radical-transparency",
    "risk-parity",
  ],
  keyAchievement:
    "Founded and scaled Bridgewater to ~$150B AUM and pioneered All Weather / risk parity — while open-sourcing his life and work principles to millions.",
  timeline: [
    {
      year: "1949",
      title: "Born in Queens, New York",
      story:
        "Only child of a jazz musician father and a homemaker mother in a middle-class neighborhood.",
      challenge: "No exposure to capital markets or finance growing up.",
      lesson: "Curiosity is the great equalizer; you can teach yourself any game.",
    },
    {
      year: "1961",
      title: "Bought first stock at age 12",
      story:
        "Used caddying money to buy Northeast Airlines because it was the only company he knew under $5; it tripled.",
      challenge: "Mistook luck for skill in his first win.",
      lesson: "Beginner's luck is the most expensive teacher.",
    },
    {
      year: "1971",
      title: "Watched Nixon close the gold window",
      story:
        "Working on the NYSE floor he expected a crash; markets soared, teaching him history rhymes.",
      challenge: "His textbook intuition was completely wrong about the policy response.",
      lesson: "Study how the machine actually works, not how it's supposed to work.",
    },
    {
      year: "1975",
      title: "Founded Bridgewater from his apartment",
      story:
        "Started as an institutional advisory shop after Harvard Business School, working out of his two-bedroom.",
      challenge: "No capital, no clients, no track record.",
      lesson: "Big things start as small consistent practices.",
    },
    {
      year: "1982",
      title: "Catastrophic bet on a debt crisis",
      story:
        "Publicly predicted a depression that never came; lost nearly everything and had to borrow $4,000 from his father.",
      challenge: "Had to fire all his employees and start over alone.",
      lesson: "Pain plus reflection equals progress. Arrogance is the enemy of survival.",
    },
    {
      year: "1991",
      title: "Launched the Pure Alpha strategy",
      story:
        "Codified a separation of alpha (skill bets) from beta (market exposure) that became an industry standard.",
      challenge: "Convincing institutions that the distinction mattered.",
      lesson: "Clear frameworks compound — name the thing precisely.",
    },
    {
      year: "1996",
      title: "Launched All Weather",
      story:
        "Designed a portfolio engineered to perform across any economic environment using risk parity.",
      challenge: "Selling a 'mediocre in every scenario' product to clients who wanted home runs.",
      lesson: "Robustness beats optimization when you can't predict the regime.",
    },
    {
      year: "2005",
      title: "Started writing 'Principles'",
      story:
        "Began circulating internal memos codifying decision rules; eventually 200+ pages used across the firm.",
      challenge: "Writing publicly about disagreements and mistakes invited ridicule.",
      lesson: "Document the rules so the next decision isn't argued from scratch.",
    },
    {
      year: "2008",
      title: "Bridgewater predicted and profited from the GFC",
      story:
        "Pure Alpha returned ~14% in 2008 while peers blew up; cemented Dalio's status as a macro oracle.",
      challenge: "Resisting the consensus that subprime was contained.",
      lesson: "Calculate the mechanics; ignore the narrative.",
    },
    {
      year: "2011",
      title: "Became the world's largest hedge fund",
      story: "Bridgewater crossed $120B AUM, surpassing Paulson and Man Group.",
      challenge: "Scaling culture as headcount passed 1,000.",
      lesson: "Culture is the product; protect it as ruthlessly as the strategy.",
    },
    {
      year: "2017",
      title: "Published 'Principles: Life and Work'",
      story:
        "Best-selling book and free PDF distilling four decades of operating rules into 600 pages.",
      challenge: "Risking ridicule by publishing the inside of his head.",
      lesson: "Your operating manual is more valuable shared than hoarded.",
    },
    {
      year: "2018",
      title: "Stepped back from CEO role",
      story: "Began handing daily leadership to co-CIOs while remaining mentor and chairman.",
      challenge: "Letting go of identity built around the firm.",
      lesson: "The hardest part of building an institution is leaving it.",
    },
    {
      year: "2022",
      title: "Fully exited Bridgewater control",
      story: "Transferred voting control to the board after a multi-year succession plan.",
      challenge: "Watching the firm move in directions he wouldn't have chosen.",
      lesson: "Succession done well looks like loss; done poorly looks like collapse.",
    },
  ],
  skills: [
    {
      name: "Believability-Weighted Decisions",
      description:
        "Weighted each contributor's input by their track record on that specific kind of question.",
      developed: "Decades of tracking who was right about what at Bridgewater.",
    },
    {
      name: "Pain + Reflection",
      description:
        "Treated every painful event as raw data; wrote down what happened, what was missed, and the rule going forward.",
      developed: "Forged after the 1982 blow-up that nearly ended his career.",
    },
    {
      name: "Systematic Thinking",
      description:
        "Translated discretionary judgments into rules a computer could run, then back-tested across history.",
      developed: "Built Bridgewater's daily observations and indicator system over 40 years.",
    },
    {
      name: "Radical Transparency",
      description:
        "Recorded almost every meeting and made them searchable internally so debates could be replayed and learned from.",
      developed: "Implemented after realizing whisper networks were destroying decision quality.",
    },
    {
      name: "Macro Pattern Recognition",
      description:
        "Studied 500+ years of debt cycles to recognize regime shifts before markets priced them.",
      developed: "Self-taught economic history obsession that began in the 1970s.",
    },
    {
      name: "Risk Parity",
      description:
        "Allocated by risk contribution rather than capital, so portfolios were truly diversified.",
      developed: "Decades of refining All Weather across multiple decades of data.",
    },
    {
      name: "Writing",
      description:
        "Made his thinking transferable through long-form principles, books, and animated videos.",
      developed: "Forced himself to write down rules before acting on them.",
    },
  ],
  failures: [
    {
      title: "The 1982 depression call",
      context:
        "Publicly forecast a US depression on television; instead markets rallied for two decades.",
      recovery:
        "Borrowed $4,000 from his father, rebuilt with fewer staff, and codified humility into his process.",
      lesson: "Being confident is not the same as being right.",
    },
    {
      title: "Culture criticism (2010s)",
      context: "Press exposés portrayed Bridgewater's transparency as cult-like and brutal.",
      recovery: "Doubled down on documenting principles in public and refining the tooling.",
      lesson: "If your culture is misunderstood, explain it better — or change it.",
    },
    {
      title: "Succession false starts",
      context:
        "Cycled through multiple CEOs (Jensen, McCormick, others) before transition stabilized.",
      recovery: "Eventually moved to co-CIO model and gave up voting control.",
      lesson: "Founders are the hardest succession variable to manage.",
    },
    {
      title: "China positioning",
      context:
        "Vocal support for Chinese economic policy drew sharp criticism as relations deteriorated.",
      recovery: "Continued to engage but moderated tone as geopolitical reality shifted.",
      lesson: "Being early on a structural call doesn't excuse missing the political reaction.",
    },
  ],
  books: [
    {
      title: "Principles: Life and Work",
      author: "Ray Dalio",
      note: "The 600-page operating manual that distills four decades of decision rules.",
    },
    {
      title: "Principles for Dealing with the Changing World Order",
      author: "Ray Dalio",
      note: "His macro framework for the rise and fall of empires, currencies, and reserve status.",
    },
    {
      title: "Big Debt Crises",
      author: "Ray Dalio",
      note: "Free PDF dissecting the mechanics of 48 historical debt cycles.",
    },
    {
      title: "Reminiscences of a Stock Operator",
      author: "Edwin Lefèvre",
      note: "His introduction to the psychology of markets in his teens.",
    },
    {
      title: "The Lessons of History",
      author: "Will & Ariel Durant",
      note: "Shaped his long-arc view that the same patterns repeat across centuries.",
    },
    {
      title: "A Random Walk Down Wall Street",
      author: "Burton Malkiel",
      note: "Forced him to reconcile efficient markets with his own active edge.",
    },
  ],
  influences: [
    {
      name: "Paul Volcker",
      note: "Modeled what disciplined leadership through inflation looked like.",
    },
    {
      name: "Will Durant",
      note: "Taught him to read economic history as a single continuous narrative.",
    },
    {
      name: "Lee Kuan Yew",
      note: "Mentor figure on governance, long-term thinking, and country-level engineering.",
    },
    {
      name: "Bob Prince",
      note: "Co-CIO and intellectual sparring partner for 30+ years inside Bridgewater.",
    },
    {
      name: "Joseph Campbell",
      note: "The hero's journey arc shaped how he framed his autobiography.",
    },
    {
      name: "His father",
      note: "The jazz musician who lent him $4,000 after the 1982 blow-up and modeled steady character.",
    },
  ],
  videoIds: [
    "dalio-economic-machine",
    "dalio-principles-success",
    "dalio-ted-idea-meritocracy",
    "dalio-lex-fridman",
    "dalio-big-debt-crises",
  ],
  decisions: [
    {
      title: "Restarting Bridgewater alone after 1982",
      why: "Believed the lessons of failure were too valuable to walk away from.",
      risk: "Extreme",
      outcome: "Rebuilt over a decade into the foundation of the world's largest hedge fund.",
      impact:
        "Proved that catastrophic failure can be the seed of an institution if metabolized properly.",
    },
    {
      title: "Separating alpha from beta (1991)",
      why: "Realized clients were paying alpha fees for hidden beta exposure.",
      risk: "Medium",
      outcome:
        "Pure Alpha became one of the most-replicated structures in institutional investing.",
      impact: "Reshaped how the industry priced and reported active risk.",
    },
    {
      title: "Engineering All Weather (1996)",
      why: "Wanted a portfolio that wouldn't depend on predicting the regime.",
      risk: "Medium",
      outcome: "Birthed risk parity and inspired hundreds of billions in copycat strategies.",
      impact: "Created a new category of institutional portfolio construction.",
    },
    {
      title: "Writing and open-sourcing Principles",
      why: "Believed his decision rules were more valuable shared than kept private.",
      risk: "High",
      outcome: "Bestseller, 30M+ free PDF downloads, and a global brand outside finance.",
      impact: "Turned an internal manual into a public framework used by founders worldwide.",
    },
    {
      title: "Stepping down from control (2018–2022)",
      why: "Believed institutions outlive founders only if founders genuinely let go.",
      risk: "High",
      outcome: "Bridgewater continues; succession turbulent but firm intact.",
      impact: "Modeled a multi-year founder transition rare in alternative asset management.",
    },
  ],
  insights: [
    {
      audience: "Investors",
      lesson: "Diversify across uncorrelated return streams.",
      takeaway:
        "True diversification means 15+ uncorrelated bets, not 15 stocks in the same regime.",
    },
    {
      audience: "Founders",
      lesson: "Pain plus reflection equals progress.",
      takeaway: "Write down every painful event and the rule that prevents recurrence.",
    },
    {
      audience: "Leaders",
      lesson: "Build an idea meritocracy.",
      takeaway: "Weight inputs by believability — track record on the specific question.",
    },
    {
      audience: "Students",
      lesson: "Study how the machine works.",
      takeaway: "Memorize history's debt cycles before forming opinions about today.",
    },
    {
      audience: "Anyone",
      lesson: "Embrace radical truth and transparency.",
      takeaway: "The cost of polite opacity is wrong decisions made twice.",
    },
    {
      audience: "Managers",
      lesson: "Document principles, don't re-debate them.",
      takeaway:
        "Codify the rule once so the next argument is about edge cases, not first principles.",
    },
    {
      audience: "Risk-takers",
      lesson: "Calculate, then act.",
      takeaway: "Confidence without mechanics is gambling dressed in adult clothes.",
    },
  ],
  quotes: [
    { text: "Pain plus reflection equals progress." },
    { text: "He who lives by the crystal ball is destined to eat ground glass." },
    {
      text: "Don't get hung up on your views of how things should be because you will miss out on learning how they really are.",
    },
    {
      text: "Truth — more precisely, an accurate understanding of reality — is the essential foundation for any good outcome.",
    },
    { text: "If you're not failing, you're not pushing your limits." },
    {
      text: "The biggest mistake investors make is to believe that what happened in the recent past is likely to persist.",
    },
    {
      text: "Idea meritocracy = radical truth + radical transparency + believability-weighted decision making.",
    },
  ],
  sampleQuestions: [
    "How did Ray Dalio rebuild Bridgewater after his 1982 blow-up?",
    "What is the idea meritocracy and how does it work?",
    "How does the All Weather portfolio actually function?",
    "What are Ray Dalio's principles for making decisions under uncertainty?",
    "How does Ray Dalio think about debt cycles?",
    "What did Ray Dalio learn from Lee Kuan Yew?",
    "Why did Ray Dalio open-source his Principles?",
  ],
};

export default rayDalio;
