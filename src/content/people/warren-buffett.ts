import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-warren-buffett.webp";

const warrenBuffett: PersonInput = {
  slug: "warren-buffett",
  name: "Warren Buffett",
  title: "Chairman and CEO of Berkshire Hathaway",
  summary:
    "An Omaha paperboy who turned a failing New England textile mill into the world's most patient compounding machine, and along the way wrote the most-quoted shareholder letters in business history.",
  portrait,
  birthYear: "1930",
  industry: "Investing & Capital Allocation",
  country: "United States",
  era: "Postwar American Capitalism (1956–present)",
  companies: ["Berkshire Hathaway", "Buffett Partnership"],
  roles: ["Investor", "CEO", "Capital Allocator", "Philanthropist"],
  tags: [
    "investing",
    "compounding",
    "value",
    "long-term",
    "capital-allocation",
    "patience",
    "writing",
    "philanthropy",
  ],
  keyAchievement: "Compounded Berkshire Hathaway's book value at ~20% for over half a century.",
  timeline: [
    {
      year: "1930",
      title: "Born in Omaha, Nebraska",
      story: "Son of a stockbroker and congressman; bought his first stock at age 11.",
      challenge: "Family money tight during the Depression.",
      lesson: "An early relationship to scarcity shapes a lifetime relationship to risk.",
    },
    {
      year: "1942",
      title: "First investment — Cities Service Preferred",
      story: "Bought three shares with his sister Doris; sold too early and watched it triple.",
      challenge: "Coping with his sister's frustration at the early sale.",
      lesson: "Selling winners early is the most expensive mistake an investor makes.",
    },
    {
      year: "1950",
      title: "Read The Intelligent Investor",
      story:
        "Discovered Ben Graham's book and applied to Columbia Business School to study under him.",
      challenge: "Getting accepted late after missing Wharton's preferred path.",
      lesson: "One book at the right moment can redirect a career permanently.",
    },
    {
      year: "1956",
      title: "Founded Buffett Partnership",
      story: "Returned to Omaha with $174,000 from family and friends; charged no management fee.",
      challenge: "Building credibility outside Wall Street.",
      lesson: "Aligning incentives with limited partners pays decades of trust dividends.",
    },
    {
      year: "1962",
      title: "Began buying Berkshire Hathaway",
      story: "Took control of a declining textile mill in New Bedford.",
      challenge: "Inheriting a dying industrial business as his investment vehicle.",
      lesson: "The vehicle matters less than the operator running it.",
    },
    {
      year: "1965",
      title: "Took control of Berkshire",
      story: "Voted out the existing CEO after a price disagreement on share buybacks.",
      challenge: "Becoming a turnaround operator overnight.",
      lesson: "Sometimes a bad business teaches you better lessons than a good one would.",
    },
    {
      year: "1972",
      title: "Bought See's Candies",
      story:
        "Paid $25M for a confectioner generating $4M pre-tax — first 'wonderful business at a fair price.'",
      challenge: "Overpaying by Graham standards.",
      lesson: "Quality compounds; cheap stays cheap.",
    },
    {
      year: "1988",
      title: "Acquired major Coca-Cola stake",
      story: "Spent $1.3B on Coca-Cola shares between 1988–94.",
      challenge: "Holding through the early 90s slump.",
      lesson: "The right holding period for a great business is forever.",
    },
    {
      year: "2006",
      title: "Pledged 99% of his wealth to philanthropy",
      story: "Began annual transfers to the Gates Foundation and family foundations.",
      challenge: "Redirecting a fortune at scale without disrupting beneficiaries.",
      lesson: "Wealth distribution is a multi-decade operational job, not a single gift.",
    },
    {
      year: "2010",
      title: "Co-founded The Giving Pledge",
      story: "With Bill and Melinda Gates, asked billionaires to give majority of wealth.",
      challenge: "Setting a public norm for peer billionaires.",
      lesson: "Public pledges create accountability where private intentions don't.",
    },
    {
      year: "2020",
      title: "Designated Greg Abel as successor",
      story: "Publicly named Abel as CEO-in-waiting for Berkshire.",
      challenge: "Telegraphing the succession without disrupting operations.",
      lesson: "Succession announced early lets the new operator earn legitimacy in advance.",
    },
    {
      year: "2024",
      title: "Sat on $300B+ in cash at Berkshire",
      story:
        "Trimmed Apple stake and built record cash position before stepping back from annual letter authorship.",
      challenge: "Resisting pressure to deploy capital into elevated markets.",
      lesson: "Inactivity is a legitimate investment decision when prices are wrong.",
    },
  ],
  skills: [
    {
      name: "Capital Allocation",
      description: "Reinvested float and earnings across decades into compounding businesses.",
      developed: "60+ years of practicing reinvestment as the primary CEO duty.",
    },
    {
      name: "Business Analysis",
      description: "Reads 500+ pages a day; can read a 10-K and reconstruct the business model.",
      developed: "Daily reading habit since childhood, codified through Graham's framework.",
    },
    {
      name: "Temperament",
      description: "Holds through crashes; buys when others panic.",
      developed: "Lived through 1987, 2000, 2008 and 2020 as a buyer.",
    },
    {
      name: "Writing",
      description: "Authors annual shareholder letters in plain English.",
      developed: "Six decades of drafting them personally, often by hand.",
    },
    {
      name: "Hiring CEOs",
      description: "Empowers operators with full autonomy after acquisition.",
      developed: "Refined over 90+ acquisitions where management stayed in place.",
    },
    {
      name: "Partner Loyalty",
      description: "Worked with Charlie Munger for 60+ years; never wrote a competing fund.",
      developed: "Built around long-term partnerships rather than transactional ones.",
    },
  ],
  failures: [
    {
      title: "Berkshire Hathaway purchase itself",
      context: "Called it a $200B mistake to use a dying textile business as his vehicle.",
      recovery: "Used the name as a holding company and built around it.",
      lesson: "Even the headline-mistake can be re-framed into a long-term asset.",
    },
    {
      title: "Dexter Shoe acquisition (1993)",
      context: "Paid $433M in Berkshire stock for a shoe company that went to zero.",
      recovery: "Stock used as currency compounded — the real cost grew enormously.",
      lesson: "Paying in equity at a discount is more expensive than paying in cash.",
    },
    {
      title: "Missed early Amazon, Google, and Walmart",
      context: "Avoided technology businesses for decades, citing his circle of competence.",
      recovery: "Built Apple position in 2016 onward; admitted the misses publicly.",
      lesson:
        "A discipline is also a constraint; revisit which businesses you can understand each decade.",
    },
  ],
  books: [
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      note: "The book that taught him value investing.",
    },
    {
      title: "Security Analysis",
      author: "Benjamin Graham & David Dodd",
      note: "His investing reference text.",
    },
    {
      title: "Berkshire Hathaway Shareholder Letters",
      author: "Warren Buffett",
      note: "The most-quoted operating literature in modern finance.",
    },
    {
      title: "Poor Charlie's Almanack",
      author: "Charles T. Munger",
      note: "The mental-models companion volume to his investing playbook.",
    },
    {
      title: "Common Stocks and Uncommon Profits",
      author: "Philip Fisher",
      note: "Shaped his bias toward quality businesses.",
    },
  ],
  influences: [
    {
      name: "Benjamin Graham",
      note: "Mentor, professor, and original framework for value investing.",
    },
    {
      name: "Charlie Munger",
      note: "60-year partner; expanded his thinking from value to quality.",
    },
    {
      name: "Philip Fisher",
      note: "Author whose growth-quality lens reshaped his approach in the 70s.",
    },
    { name: "Howard Buffett (his father)", note: "Modeled integrity and independence in finance." },
    { name: "Bill Gates", note: "Friendship and Giving Pledge collaboration." },
  ],
  videoIds: [
    "buffett-becoming-trailer-2017",
    "buffett-cnbc-archive-1997",
    "buffett-columbia-1985",
    "buffett-gates-2017",
    "buffett-uni-florida-1998",
  ],
  decisions: [
    {
      title: "Move home to Omaha in 1956",
      why: "Believed proximity to Wall Street was a liability, not an asset.",
      risk: "Low",
      outcome: "Built Berkshire from Omaha for 60+ years.",
      impact: "Modeled that great investors don't need to be where everyone else is.",
    },
    {
      title: "Buy See's Candies in 1972",
      why: "Pivoted from pure Graham value to quality businesses.",
      risk: "Medium",
      outcome: "Generated billions in float and compounded earnings.",
      impact: "Set the template for every Berkshire acquisition after.",
    },
    {
      title: "Take the largest position ever in Apple",
      why: "Saw Apple as a consumer brand, not a tech company.",
      risk: "Medium",
      outcome: "Became Berkshire's largest equity position; billions in unrealized gains.",
      impact: "Showed he could update his circle of competence after age 80.",
    },
    {
      title: "Sign and promote the Giving Pledge",
      why: "Wanted to set a public norm among billionaires.",
      risk: "Low",
      outcome: "Hundreds of billionaires signed.",
      impact: "Reframed wealth as a multi-decade philanthropy job.",
    },
    {
      title: "Name Greg Abel publicly as successor",
      why: "Wanted to remove uncertainty about Berkshire's continuity.",
      risk: "Low",
      outcome: "Smooth board and operator transition planning.",
      impact: "Demonstrated CEO succession can be telegraphed without disruption.",
    },
  ],
  insights: [
    {
      audience: "Investors",
      lesson: "Temperament beats IQ.",
      takeaway: "Build emotional rituals that let you act when markets panic.",
    },
    {
      audience: "Founders",
      lesson: "Inactivity is a decision.",
      takeaway: "Cash on the balance sheet is optionality, not laziness.",
    },
    {
      audience: "Leaders",
      lesson: "Hire for integrity first.",
      takeaway: "Smart and energetic without integrity is the worst combination.",
    },
    {
      audience: "Operators",
      lesson: "Write your operating philosophy down annually.",
      takeaway: "Annual letters force you to update yourself in public.",
    },
    {
      audience: "Builders",
      lesson: "Buy wonderful businesses at fair prices.",
      takeaway: "Quality compounds; cheap mediocrity doesn't.",
    },
    {
      audience: "Anyone",
      lesson: "Compounding works on relationships too.",
      takeaway: "Stay in long partnerships — the dividends arrive decades later.",
    },
  ],
  quotes: [
    { text: "Be fearful when others are greedy, and greedy when others are fearful." },
    { text: "Price is what you pay; value is what you get." },
    { text: "Our favorite holding period is forever." },
    {
      text: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
    },
    { text: "Risk comes from not knowing what you're doing." },
    {
      text: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    },
  ],
  sampleQuestions: [
    "How does Buffett pick businesses to buy?",
    "What's the difference between value and quality investing?",
    "Why did he move back to Omaha after Columbia?",
    "How did the Apple investment break his old rules?",
    "What's the Giving Pledge and why did he start it?",
  ],
  featured: false,
};

export default warrenBuffett;
