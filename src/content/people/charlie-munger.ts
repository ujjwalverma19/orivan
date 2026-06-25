import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-charlie-munger.webp";

const charlieMunger: PersonInput = {
  slug: "charlie-munger",
  name: "Charlie Munger",
  title: "Vice Chairman, Berkshire Hathaway",
  summary:
    "The intellectual sparring partner who turned Berkshire from a Graham-style cigar-butt shop into the world's most patient compounder — by insisting that great businesses, bought rarely, beat clever ones bought often.",
  portrait,
  featured: false,
  birthYear: "1924",
  industry: "Investing & Capital Allocation",
  country: "United States",
  era: "Post-war American Capitalism (1948–2023)",
  companies: [
    "Berkshire Hathaway",
    "Wesco Financial",
    "Munger, Tolles & Olson",
    "Daily Journal Corporation",
  ],
  roles: ["Investor", "Vice Chairman", "Lawyer", "Author"],
  tags: [
    "investing",
    "mental-models",
    "rationality",
    "patience",
    "compounding",
    "decision-making",
    "value-investing",
  ],
  keyAchievement:
    "Co-architected Berkshire Hathaway's shift from quantitative bargains to high-quality businesses — turning a textile mill into a $700B+ compounder.",
  timeline: [
    {
      year: "1924",
      title: "Born in Omaha, Nebraska",
      story:
        "Grew up six blocks from a young Warren Buffett's grandfather's grocery store, where he worked weekends as a boy.",
      challenge: "A modest Midwestern childhood with no obvious path to capital.",
      lesson: "Where you start is mostly noise; what you read and who you choose matters far more.",
    },
    {
      year: "1943",
      title: "Enlisted in the Army Air Corps",
      story:
        "Dropped out of the University of Michigan at 19 to serve as a meteorologist during WWII.",
      challenge: "Service interrupted formal education; he never earned an undergraduate degree.",
      lesson: "Credentials are optional. Curiosity isn't.",
    },
    {
      year: "1948",
      title: "Graduated Harvard Law magna cum laude",
      story:
        "Admitted without a bachelor's degree after the dean of his late father's class made an exception.",
      challenge: "Had to prove he belonged at Harvard with no undergraduate credential.",
      lesson: "When the door is closed, find someone who remembers your family.",
    },
    {
      year: "1959",
      title: "Met Warren Buffett at an Omaha dinner",
      story:
        "A mutual friend introduced them; they talked for hours and became lifelong intellectual partners.",
      challenge: "Munger was a corporate lawyer in California with no investing track record.",
      lesson: "One conversation can re-route a life. Stay in rooms with smarter people.",
    },
    {
      year: "1962",
      title: "Started his own investment partnership",
      story:
        "Ran a concentrated partnership from 1962 to 1975, compounding at ~20% annually while running a law firm.",
      challenge: "Splitting attention between a demanding legal practice and investing.",
      lesson: "Concentration plus patience beats diversification plus activity.",
    },
    {
      year: "1972",
      title: "Convinced Buffett to buy See's Candies for $25M",
      story:
        "Persuaded Buffett to pay 3x book value for a quality business — a heretical move for a Graham disciple.",
      challenge: "See's was 'expensive' by every Graham metric Buffett had used for two decades.",
      lesson: "A great business at a fair price beats a fair business at a great price.",
    },
    {
      year: "1975",
      title: "Wound down his partnership",
      story:
        "Returned capital after a brutal 1973–74 drawdown and joined Buffett full-time at Berkshire.",
      challenge: "Accepting that investing as a stand-alone career had run its course.",
      lesson: "Know when to stop a good game to play a better one.",
    },
    {
      year: "1978",
      title: "Named Vice Chairman of Berkshire Hathaway",
      story:
        "Became Buffett's official second-in-command and the loudest internal voice against bad ideas.",
      challenge: "Defining a role that complemented, not duplicated, a once-in-a-century investor.",
      lesson: "Be the abominable no-man. Subtraction is leverage.",
    },
    {
      year: "1995",
      title: "Delivered 'The Psychology of Human Misjudgment'",
      story:
        "Gave a Harvard talk cataloguing 25 cognitive biases — a foundational text for modern behavioral investing.",
      challenge:
        "Synthesizing psychology, economics, and biology into one usable framework before behavioral finance was mainstream.",
      lesson: "Borrow the best ideas from every discipline. Don't be a one-trick mind.",
    },
    {
      year: "2005",
      title: "Published 'Poor Charlie's Almanack'",
      story:
        "A 500-page collection of his speeches and mental models edited by Peter Kaufman — required reading for serious investors.",
      challenge: "Letting his private thinking become a public canonical text.",
      lesson: "Teach what you've learned. Compound your wisdom in other minds.",
    },
    {
      year: "2010",
      title: "Became chairman of Daily Journal Corporation",
      story:
        "Ran the small-cap publisher and used its annual meeting as a second forum after Berkshire's.",
      challenge: "Maintaining intellectual sharpness into his late 80s and 90s.",
      lesson: "Stay in the game. The mind atrophies without problems to solve.",
    },
    {
      year: "2023",
      title: "Died at 99, a month before his 100th birthday",
      story:
        "Worked at Berkshire and Daily Journal almost to the end; his final interview was published days before his death.",
      challenge: "Building a partnership designed to outlive him.",
      lesson: "The longest compounder is a life of learning, not a portfolio.",
    },
  ],
  skills: [
    {
      name: "Mental Models",
      description:
        "Built a latticework of ~100 big ideas from psychology, biology, math, physics, and history — and checked every decision against many of them.",
      developed:
        "Decades of reading 3–4 books a week across every discipline; refusing to specialize.",
    },
    {
      name: "Inversion",
      description:
        "Started every problem by asking what would make it fail — then worked to avoid those things first.",
      developed:
        "Borrowed from Jacobi's mathematics: 'Invert, always invert.' Applied it to law, investing, and life.",
    },
    {
      name: "Patience",
      description:
        "Sat on cash for years waiting for the rare obvious bet, then concentrated heavily when it arrived.",
      developed: "Survived multiple drawdowns by treating inactivity as a position, not a failure.",
    },
    {
      name: "Plain Speech",
      description:
        "Distilled complex business analysis into one-line aphorisms a 12-year-old could remember.",
      developed:
        "Practiced at Berkshire annual meetings — answering hundreds of questions in front of 40,000 people each year.",
    },
    {
      name: "Killing Bad Ideas",
      description:
        "Played the 'abominable no-man' at Berkshire — saying no to almost everything so the yeses could be big.",
      developed:
        "Years as a deal lawyer trained him to spot what kills a transaction before it closes.",
    },
    {
      name: "Reading",
      description:
        "Read continuously — biographies, science, history — as the cheapest form of borrowed experience.",
      developed: "Lifelong habit; said his children called him 'a book with legs sticking out.'",
    },
    {
      name: "Temperament",
      description:
        "Stayed cheerful through bear markets, lawsuits, and personal tragedy. Never panicked publicly.",
      developed:
        "Survived the death of a young son to leukemia in 1955; said the experience hardened his emotional discipline.",
    },
  ],
  failures: [
    {
      title: "Munger Partnership drawdown (1973–74)",
      context: "His partnership lost ~32% in 1973 and ~31% in 1974 during the brutal bear market.",
      recovery:
        "Held positions, didn't panic-sell, and recovered fully by 1976 before winding the fund down on his own terms.",
      lesson: "If you can't handle a 50% drawdown twice a century, you shouldn't be in equities.",
    },
    {
      title: "Wesco's savings & loan exposure (1980s)",
      context:
        "Wesco was a small S&L holding company during the industry's collapse; many peers went bankrupt.",
      recovery:
        "Aggressively de-risked early, sold most thrift assets, and pivoted Wesco into insurance and equity investments.",
      lesson: "When the whole industry is sick, get out before the diagnosis.",
    },
    {
      title: "Alibaba position at Daily Journal (2021–22)",
      context:
        "Bought Alibaba at Daily Journal, doubled down as it fell, then partially sold at a loss after Chinese regulatory crackdowns.",
      recovery:
        "Publicly admitted the misjudgment of Chinese political risk — a rare public reversal at age 98.",
      lesson: "Even great frameworks fail when the political ground beneath the company moves.",
    },
    {
      title: "Missing tech for two decades",
      context:
        "Refused to invest in software and internet businesses through the 1990s and 2000s — missed Amazon, Google, Microsoft, early Apple.",
      recovery:
        "Eventually drove Berkshire's massive Apple position (now a multi-hundred-billion-dollar holding) in his 90s.",
      lesson: "Your circle of competence can grow late. Stay willing to update.",
    },
  ],
  books: [
    {
      title: "Poor Charlie's Almanack",
      author: "Peter Kaufman (ed.)",
      note: "The canonical Munger anthology — speeches, mental models, the human misjudgment talk.",
    },
    {
      title: "Damn Right!",
      author: "Janet Lowe",
      note: "The most thorough Munger biography, written with his cooperation.",
    },
    {
      title: "Influence: The Psychology of Persuasion",
      author: "Robert Cialdini",
      note: "Munger called it required reading and sent Cialdini Berkshire shares as thanks.",
    },
    {
      title: "Selfish Reasons to Have More Kids",
      author: "Bryan Caplan",
      note: "One of his late-life recommendations on rational decision-making at the personal level.",
    },
    {
      title: "Models of My Life",
      author: "Herbert Simon",
      note: "Munger admired Simon's bounded-rationality work and recommended this memoir often.",
    },
    {
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      note: "Cited as an example of cross-disciplinary thinking done right.",
    },
  ],
  influences: [
    {
      name: "Benjamin Franklin",
      note: "His life template — scientist, writer, businessman, civic builder. Munger called him 'my hero.'",
    },
    {
      name: "Carl Jacobi",
      note: "Mathematician who said 'invert, always invert.' Became Munger's core problem-solving move.",
    },
    {
      name: "Charles Darwin",
      note: "Model for slow, evidence-driven theory-building and for actively searching for disconfirming data.",
    },
    {
      name: "Robert Cialdini",
      note: "Social psychology framework that informed his 'misjudgment' taxonomy.",
    },
    {
      name: "Warren Buffett",
      note: "Sixty-year intellectual sparring partner. Each refined the other's thinking.",
    },
    {
      name: "Walter Munger (father)",
      note: "A respected Omaha lawyer who modeled professional integrity and quiet competence.",
    },
  ],
  videoIds: [
    "munger-psychology-misjudgment",
    "munger-daily-journal-2017",
    "munger-usc-law-2007",
    "munger-cnbc-becky-quick-2023",
    "munger-caltech-2008",
  ],
  decisions: [
    {
      title: "Persuading Buffett to buy See's Candies (1972)",
      why: "Saw that pricing power and a beloved brand were worth far more than book value implied.",
      risk: "Medium",
      outcome: "See's returned ~$2B in pre-tax earnings on a $25M investment over five decades.",
      impact:
        "Reframed Berkshire's entire investment philosophy from Graham bargains to quality compounders.",
    },
    {
      title: "Winding down his partnership (1975)",
      why: "Wanted to focus on Berkshire and stop managing other people's money during a brutal market.",
      risk: "Low",
      outcome: "Returned capital cleanly and pivoted to Berkshire's larger canvas.",
      impact: "Modeled how to end one game gracefully to start a better one.",
    },
    {
      title: "Concentrating Berkshire into Coca-Cola (1988)",
      why: "Munger pushed Buffett to ignore the 'expensive' multiple and weight the moat.",
      risk: "High",
      outcome: "$1.3B investment grew to over $25B; the largest single Berkshire winner for years.",
      impact: "Cemented the 'great business at fair price' doctrine that defined modern Berkshire.",
    },
    {
      title: "Saying no to almost everything",
      why: "Believed great investing is the patient rejection of mediocre opportunities.",
      risk: "Low",
      outcome:
        "Berkshire passed on thousands of deals; the few yeses produced extraordinary returns.",
      impact: "Established 'sit on your ass' investing as a legitimate strategy at scale.",
    },
    {
      title: "Reversing on Apple in his 80s (2016)",
      why: "Conceded that Apple's switching costs and brand made it a consumer staple, not a tech company.",
      risk: "Medium",
      outcome:
        "Berkshire's Apple stake became its single largest position, gaining well over $100B.",
      impact: "Proved a circle of competence can expand at any age.",
    },
  ],
  insights: [
    {
      audience: "Investors",
      lesson: "Activity is the enemy of returns.",
      takeaway: "If you can't find a great opportunity, do nothing. Cash is a position.",
    },
    {
      audience: "Founders",
      lesson: "Invert the problem.",
      takeaway: "Don't ask how to succeed — list the ways you'd fail, then avoid them.",
    },
    {
      audience: "Students",
      lesson: "Build a latticework of mental models.",
      takeaway: "Read across disciplines. Specialists miss obvious things generalists catch.",
    },
    {
      audience: "Leaders",
      lesson: "Be the abominable no-man.",
      takeaway: "Subtraction is leverage. The best decisions are the ones you don't make.",
    },
    {
      audience: "Anyone",
      lesson: "Avoid envy, resentment, and self-pity.",
      takeaway: "They are losing strategies that destroy compounders far worse than bear markets.",
    },
    {
      audience: "Parents",
      lesson: "Show up as the person you want them to become.",
      takeaway: "Children watch what you do, not what you say. Live the lesson.",
    },
    {
      audience: "Professionals",
      lesson: "Sell yourself only services worth more than they cost.",
      takeaway: "Long careers compound on trust. Never trade reputation for a fee.",
    },
  ],
  quotes: [
    {
      text: "The big money is not in the buying and the selling, but in the waiting.",
      context: "Daily Journal annual meeting",
    },
    {
      text: "Invert, always invert. Turn a situation or problem upside down. Look at it backwards.",
    },
    {
      text: "It's not supposed to be easy. Anyone who finds it easy is stupid.",
      context: "On investing",
    },
    { text: "Take a simple idea and take it seriously." },
    { text: "Show me the incentive and I'll show you the outcome." },
    {
      text: "I think life is a whole series of opportunity costs. You have to marry the best person who is convenient to find who will have you.",
    },
    {
      text: "Acquire worldly wisdom and adjust your behavior accordingly. If your new behavior gives you a little temporary unpopularity with your peer group, then to hell with them.",
    },
  ],
  sampleQuestions: [
    "How did Charlie Munger think about mental models?",
    "Why did he tell Warren Buffett to buy See's Candies?",
    "What is inversion and how did he use it?",
    "What were Charlie Munger's biggest investing mistakes?",
    "What books did Charlie Munger recommend most often?",
    "How did Charlie Munger and Warren Buffett work together?",
    "What can investors learn from Charlie Munger's patience?",
  ],
};

export default charlieMunger;
