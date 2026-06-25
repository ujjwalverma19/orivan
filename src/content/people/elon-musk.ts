import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-musk.webp";

const elonMusk: PersonInput = {
  slug: "elon-musk",
  name: "Elon Musk",
  title: "Founder of Tesla & SpaceX",
  summary:
    "An obsessive engineer betting on rockets, electric cars, and the impossible — applying first-principles thinking at planetary scale.",
  portrait,
  featured: true,
  featuredOrder: 2,
  birthYear: "1971",
  industry: "Aerospace & Mobility",
  country: "South Africa → USA",
  era: "Space, EV & AI (1995–present)",
  companies: ["Zip2", "PayPal", "SpaceX", "Tesla", "Neuralink", "The Boring Company", "xAI", "X"],
  roles: ["Founder", "CEO", "Chief Engineer", "Investor"],
  tags: [
    "first-principles",
    "engineering",
    "manufacturing",
    "space",
    "electric-vehicles",
    "ai",
    "ambition",
    "risk",
    "vertical-integration",
  ],
  keyAchievement: "First privately funded company to launch and recover orbital rockets.",
  timeline: [
    {
      year: "1971",
      title: "Born in Pretoria, South Africa",
      story:
        "Bookish, bullied, and obsessed with science fiction long before computers were household objects.",
      challenge: "Isolated childhood under apartheid and a difficult home life.",
      lesson: "Outsiders often see what insiders take for granted.",
    },
    {
      year: "1983",
      title: "Taught himself to code at 10",
      story: "Built and sold a game called Blastar for $500 — his first commercial product.",
      challenge: "No mentors, no tutorials, just a Commodore VIC-20 and a manual.",
      lesson: "Build something real before you feel ready.",
    },
    {
      year: "1995",
      title: "Dropped out of Stanford for Zip2",
      story:
        "Left a PhD program two days in to start an online city-guide for newspapers with his brother Kimbal.",
      challenge: "Slept in the office, showered at the YMCA, lived on $1 hot dogs.",
      lesson: "Conviction beats credentials when timing is right.",
    },
    {
      year: "1999",
      title: "Founded X.com (later PayPal)",
      story:
        "Took the $22M from selling Zip2 and started an online bank that became PayPal after a merger.",
      challenge: "Ousted as CEO while on his honeymoon in 2000.",
      lesson: "Lose the battle, keep the equity — be patient with outcomes.",
    },
    {
      year: "2002",
      title: "Founded SpaceX",
      story: "Used $100M of PayPal proceeds to start a rocket company everyone said would fail.",
      challenge: "Three consecutive Falcon 1 launch failures nearly bankrupted the company.",
      lesson: "If failure isn't an option, neither is innovation.",
    },
    {
      year: "2004",
      title: "Invested in & led Tesla",
      story: "Funded a 6-person electric car startup, became chairman, and later CEO.",
      challenge: "Production hell, near-bankruptcy in 2008 with SpaceX simultaneously imploding.",
      lesson: "Two impossible bets are easier than one — they share the same emotional discipline.",
    },
    {
      year: "2008",
      title: "Falcon 1 reaches orbit",
      story:
        "Fourth and final attempt — last $20M in the bank — succeeded weeks before SpaceX would have folded.",
      challenge: "All capital depleted; investors gone; team burned out.",
      lesson: "Most breakthroughs happen on the last try you can afford.",
    },
    {
      year: "2012",
      title: "Dragon docks with the ISS",
      story: "First commercial spacecraft to dock with the International Space Station.",
      challenge: "NASA, Boeing, and Lockheed had spent decades and billions to do less.",
      lesson: "Reasoning from first principles beats reasoning from analogy.",
    },
    {
      year: "2015",
      title: "Falcon 9 booster landing",
      story: "Recovered a first stage upright on land for the first time in history.",
      challenge: "Every aerospace expert called reusable rockets economically impossible.",
      lesson: "Manufacturing is the product — fixing it changes the economics of everything.",
    },
    {
      year: "2022",
      title: "Acquired Twitter for $44B",
      story: "Bought the world's town square, rebranded it as X, and gutted its workforce.",
      challenge: "Watching the deal lose half its valuation while ads collapsed.",
      lesson: "Owning the platform is a different skill than building it.",
    },
  ],
  skills: [
    {
      name: "First-Principles Thinking",
      description: "Decomposes problems into physics and rebuilds them from scratch.",
      developed: "Years of self-teaching physics, chemistry, and aerospace engineering.",
    },
    {
      name: "Vertical Integration",
      description: "Builds the supply chain when no supplier can hit the price or quality bar.",
      developed: "Forced by Tesla and SpaceX both being told their costs were impossible.",
    },
    {
      name: "Recruiting Engineers",
      description: "Personally interviewed the first 3,000 hires at SpaceX.",
      developed: "Treats hiring as the most important job a CEO has.",
    },
    {
      name: "Extreme Work Tolerance",
      description: "Famous for 100-hour weeks during 'production hell' periods.",
      developed: "Practiced through repeated crises where shutting off was not an option.",
    },
    {
      name: "Narrative Setting",
      description: "Frames missions in terms big enough to attract obsessive talent.",
      developed: "Refined through Mars-mission storytelling and Tesla master plans.",
    },
  ],
  failures: [
    {
      title: "Falcon 1 launches (2006–2008)",
      context: "Three consecutive launch failures nearly ended SpaceX before it began.",
      recovery: "Fourth attempt reached orbit on the last budget the company had.",
      lesson: "Iterate publicly; the next attempt is the only attempt that matters.",
    },
    {
      title: "Ousted as PayPal CEO (2000)",
      context: "Replaced by Peter Thiel while on his honeymoon, after a strategy disagreement.",
      recovery: "Stayed on the board and used proceeds to fund SpaceX and Tesla.",
      lesson: "Losing the title isn't losing the leverage.",
    },
    {
      title: "Tesla Model 3 production hell (2017–2018)",
      context: "Missed manufacturing targets by months, Tesla weeks from running out of cash.",
      recovery: "Slept on the factory floor, built a tent assembly line, hit 5,000/week.",
      lesson: "Founders should be operators when the company can't afford a layer of insulation.",
    },
    {
      title: "Twitter / X acquisition",
      context: "Paid $44B for a platform whose revenue collapsed under his moderation changes.",
      recovery: "Cut costs aggressively but valuation hasn't recovered.",
      lesson: "Conviction in your judgement only works when the data agrees within a few years.",
    },
  ],
  books: [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      note: "Early model for heroic missions against impossible odds.",
    },
    {
      title: "Foundation",
      author: "Isaac Asimov",
      note: "Inspired his belief that civilization needs interplanetary insurance.",
    },
    {
      title: "Structures: Or Why Things Don't Fall Down",
      author: "J.E. Gordon",
      note: "Foundational for SpaceX engineering intuition.",
    },
    {
      title: "Benjamin Franklin: An American Life",
      author: "Walter Isaacson",
      note: "Hero biography of a polymath he openly admires.",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      note: "Mental model for monopoly thinking by his PayPal co-founder.",
    },
  ],
  influences: [
    { name: "Nikola Tesla", note: "The polymath engineer whose name graces the car company." },
    {
      name: "Werner von Braun",
      note: "Foundational rocket engineering whose ambitions Musk extends.",
    },
    { name: "Larry Page", note: "Friend and reference point on betting on long-term technology." },
    {
      name: "Douglas Adams",
      note: "The Hitchhiker's Guide framed his sense of humor and existential lens.",
    },
  ],
  videoIds: [
    "musk-ted-2022",
    "musk-starbase-tour",
    "musk-joe-rogan-1169",
    "musk-investor-day-2023",
  ],
  decisions: [
    {
      title: "Putting last $100M into SpaceX & Tesla simultaneously (2008)",
      why: "Couldn't pick which mission to save, so backed both.",
      risk: "Extreme",
      outcome: "Both survived; SpaceX won NASA contract weeks later.",
      impact: "Set the template for betting personal capital alongside investors.",
    },
    {
      title: "Building reusable rockets",
      why: "Saw that throwing away first stages was the real cost driver.",
      risk: "Extreme",
      outcome: "Cut launch cost by an order of magnitude.",
      impact: "Created the modern commercial space economy.",
    },
    {
      title: "Open-sourcing Tesla patents",
      why: "Wanted to grow the EV market, not lock it down.",
      risk: "High",
      outcome: "Accelerated industry adoption of electric vehicles.",
      impact: "Made Tesla a movement, not just a company.",
    },
    {
      title: "Building the Gigafactory",
      why: "Battery supply was the bottleneck for mass EV adoption.",
      risk: "High",
      outcome: "Lowered battery cost per kWh dramatically.",
      impact: "Made the Model 3 economically possible.",
    },
  ],
  insights: [
    {
      audience: "Engineers",
      lesson: "Question every requirement.",
      takeaway: "Most specs are inherited from analogies, not physics.",
    },
    {
      audience: "Founders",
      lesson: "The best part is no part.",
      takeaway: "Delete before you optimize; simplify before you scale.",
    },
    {
      audience: "Operators",
      lesson: "Manufacturing is the product.",
      takeaway: "Whoever builds the factory wins the cost curve.",
    },
    {
      audience: "Leaders",
      lesson: "Communicate the mission, not the metrics.",
      takeaway: "Talent shows up for missions that won't fit on a slide.",
    },
    {
      audience: "Investors",
      lesson: "Long timelines compound.",
      takeaway: "Most people overestimate one year and underestimate ten.",
    },
  ],
  sampleQuestions: [
    "How does Elon Musk use first-principles thinking?",
    "How did SpaceX survive 2008?",
    "What does 'the best part is no part' mean in practice?",
    "How does he run two companies at once?",
    "What can a founder learn from his manufacturing playbook?",
  ],
};

export default elonMusk;
