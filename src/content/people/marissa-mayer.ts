import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-marissa-mayer.webp";

const marissaMayer: PersonInput = {
  slug: "marissa-mayer",
  name: "Marissa Mayer",
  title: "First female engineer at Google, former CEO of Yahoo",
  summary:
    "A Stanford symbolic-systems engineer who joined Google as employee 20, owned its consumer products through hypergrowth, and then took on the hardest turnaround in consumer internet at Yahoo.",
  portrait,
  birthYear: "1975",
  industry: "Internet & Consumer Software",
  country: "United States",
  era: "Web 2.0 to Mobile (1999–present)",
  companies: ["Google", "Yahoo", "Sunshine"],
  roles: ["Engineer", "Product Lead", "CEO", "Founder"],
  tags: [
    "product",
    "engineering",
    "speed",
    "operations",
    "consumer-internet",
    "leadership",
    "google",
    "yahoo",
  ],
  keyAchievement:
    "Shaped Google's consumer product surface from search to maps to Gmail; later led Yahoo's mobile turnaround.",
  timeline: [
    {
      year: "1975",
      title: "Born in Wausau, Wisconsin",
      story:
        "Daughter of an engineer and an art teacher; ranked in the top of her class at every school stage.",
      challenge: "Small-town childhood with no obvious bridge to the tech industry.",
      lesson: "Where you're from doesn't decide what you can build.",
    },
    {
      year: "1997",
      title: "Graduated Stanford in symbolic systems",
      story: "Studied AI under Eric Roberts; specialized in human-computer interaction.",
      challenge: "Picking a degree no one had heard of.",
      lesson: "Niche disciplines age into category-defining roles when the world catches up.",
    },
    {
      year: "1999",
      title: "Joined Google as employee 20",
      story: "Took an engineer offer from a startup most professors warned her against.",
      challenge: "Choosing a 20-person company over McKinsey and a Stanford PhD.",
      lesson: "Early-stage offers compound career advantage faster than prestigious starts.",
    },
    {
      year: "2002",
      title: "Owned Google Search UI",
      story: "Locked the search homepage to 28 words and forbade design changes without data.",
      challenge: "Defending austerity in a culture that worshipped product additions.",
      lesson: "Minimalism is a defense; gravity always pulls toward more features.",
    },
    {
      year: "2005",
      title: "Launched Google Maps",
      story: "Owned the consumer launch of one of the most influential products of the era.",
      challenge: "Stitching together acquisitions (Where 2, Keyhole, ZipDash) into one experience.",
      lesson: "Most great products are integrations dressed up as inventions.",
    },
    {
      year: "2010",
      title: "Promoted to VP of Local, Maps, and Location Services",
      story: "Took control of one of Google's largest consumer divisions.",
      challenge: "Managing thousands of engineers while remaining product-detail focused.",
      lesson: "Scaling leadership without losing taste requires ritualized review cadence.",
    },
    {
      year: "2012",
      title: "Named CEO of Yahoo",
      story:
        "Took over a company that had had four CEOs in five years; pregnant during the announcement.",
      challenge: "Resetting culture, product, and stock narrative simultaneously.",
      lesson: "Turnaround CEOs need a 90-day public position before the first big move.",
    },
    {
      year: "2013",
      title: "Acquired Tumblr for $1.1B",
      story: "Tried to buy mobile and youth engagement in a single deal.",
      challenge: "Integrating a creative platform into a struggling media company.",
      lesson: "Acquisitions can buy talent; they can't buy the strategy you didn't have yet.",
    },
    {
      year: "2015",
      title: "Yahoo mobile reaches 600M users",
      story: "Mobile revenue tripled under her tenure as Yahoo restructured every product.",
      challenge: "Funding mobile-first while the desktop ad business eroded.",
      lesson: "Platform shifts give you one credible window to rebuild — use it loudly.",
    },
    {
      year: "2017",
      title: "Verizon acquired Yahoo's core for $4.5B",
      story: "Closed the chapter; remained on the spinoff Altaba board.",
      challenge: "Walking away from the most public CEO role of her generation.",
      lesson: "End the chapter cleanly so the next one can start on your terms.",
    },
    {
      year: "2018",
      title: "Co-founded Sunshine",
      story:
        "Started an AI consumer-utility company in Palo Alto with longtime collaborator Enrique Muñoz Torres.",
      challenge: "Returning to founder mode after a decade as a public-company CEO.",
      lesson: "Founders can re-become beginners — the scar tissue is the new asset.",
    },
  ],
  skills: [
    {
      name: "Product Speed",
      description:
        "Obsesses over page-load and decision latency; ships small, measurable iterations.",
      developed: "Internalized Google's culture of A/B testing every pixel.",
    },
    {
      name: "Design Discipline",
      description: "Defends minimalism through data, not preference.",
      developed: "Years guarding the Google search homepage against feature creep.",
    },
    {
      name: "Hiring at Scale",
      description:
        "Personally screened thousands of Google APM candidates and built the program with Bret Taylor and others.",
      developed: "Trained as an engineer who valued slope over credentials.",
    },
    {
      name: "Mobile Re-architecture",
      description: "Forced product orgs to rebuild around handsets, not retrofit.",
      developed: "Led Google's location-services pivot to mobile in 2010–11.",
    },
    {
      name: "Public Communication",
      description: "Carried the public face of two of the most scrutinized brands in tech.",
      developed: "Press, board, and earnings practice through the Yahoo CEO years.",
    },
    {
      name: "Decision Velocity",
      description:
        "Made tens of thousands of product calls a year at Google with structured weekly cadence.",
      developed: "Refined a weekly Friday review where any team could ship through her.",
    },
  ],
  failures: [
    {
      title: "Tumblr acquisition writedown",
      context: "Wrote down most of the $1.1B Tumblr purchase by 2016.",
      recovery: "Sold to Automattic in 2019 under Verizon ownership.",
      lesson:
        "Cultural-fit and integration plan should be a board-level diligence item before price.",
    },
    {
      title: "Yahoo mail breach disclosure (2016)",
      context: "A breach affecting 500M accounts came to light during the Verizon sale.",
      recovery: "Negotiated a $350M reduction in deal price; coordinated security overhaul.",
      lesson: "Security debt is balance-sheet debt; disclose early, not at exit.",
    },
    {
      title: "Layoffs and morale",
      context: "Multiple rounds of cuts during the turnaround eroded employee trust.",
      recovery:
        "Restructured to a smaller, mobile-focused org; published a transparent operating plan.",
      lesson: "Restructuring requires a narrative the team can keep retelling internally.",
    },
  ],
  books: [
    {
      title: "Creativity, Inc.",
      author: "Ed Catmull",
      note: "Operating philosophy for creative teams under pressure.",
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      note: "Lens she used to argue for cannibalizing Yahoo's desktop business.",
    },
    {
      title: "How Google Works",
      author: "Eric Schmidt and Jonathan Rosenberg",
      note: "Includes anecdotes from the Mayer years on product reviews.",
    },
    {
      title: "High Output Management",
      author: "Andy Grove",
      note: "Cadence and OKR philosophy applied at every job.",
    },
  ],
  influences: [
    { name: "Larry Page", note: "Co-founder mentor; pushed her on scale and product taste." },
    { name: "Eric Schmidt", note: "Modeled the COO–CEO discipline at Google in the 2000s." },
    { name: "Eric Roberts (Stanford)", note: "Academic mentor in symbolic systems and HCI." },
    {
      name: "Anne Wojcicki and Susan Wojcicki",
      note: "Peers who shaped her view of women-led platforms.",
    },
  ],
  videoIds: [
    "mayer-stanford-etl-2006",
    "mayer-charlie-rose-2013",
    "mayer-girls-in-tech",
    "mayer-bloomberg-studio-1-1",
  ],
  decisions: [
    {
      title: "Take Google's engineer offer over McKinsey",
      why: "Believed the slope of learning was steeper at a 20-person startup.",
      risk: "Medium",
      outcome: "Became one of Google's most influential product leaders.",
      impact: "Defined her career trajectory and the Google APM program.",
    },
    {
      title: "Accept the Yahoo CEO role",
      why: "Believed the brand could be re-platformed for mobile.",
      risk: "Extreme",
      outcome: "Mobile usage tripled; core business sold to Verizon.",
      impact: "Modeled how a turnaround CEO communicates publicly even when execution falters.",
    },
    {
      title: "Buy Tumblr for $1.1B",
      why: "Sought to acquire youth audience and creative mobile DNA.",
      risk: "High",
      outcome: "Tumblr integration underperformed; written down.",
      impact: "Cautionary tale for acquisition-led repositioning.",
    },
    {
      title: "Found Sunshine after Yahoo",
      why: "Wanted to build a small consumer team again.",
      risk: "Medium",
      outcome: "Building AI utilities for everyday consumers.",
      impact: "Demonstrated that ex-public-company CEOs can return to founder mode.",
    },
  ],
  insights: [
    {
      audience: "Product Managers",
      lesson: "Defend minimalism with data.",
      takeaway: "Treat additions as the burden of proof; subtractions are the default.",
    },
    {
      audience: "Engineers",
      lesson: "Take the steeper learning curve.",
      takeaway:
        "A small fast-growing team will compound your skill faster than a prestigious slow one.",
    },
    {
      audience: "Operators",
      lesson: "Cadence beats heroics.",
      takeaway:
        "A weekly review meeting that ships decisions outperforms quarterly all-hands theater.",
    },
    {
      audience: "CEOs",
      lesson: "Acquisitions don't replace a missing strategy.",
      takeaway: "Ask what the integration plan looks like before debating the price.",
    },
    {
      audience: "Leaders",
      lesson: "Turnarounds need a public position.",
      takeaway: "Spend the first 90 days on a narrative the board, team, and press can all repeat.",
    },
  ],
  quotes: [
    { text: "I always did something I was a little not ready to do." },
    { text: "When you need to innovate, you need collaboration." },
    { text: "Speed wins. Period." },
    { text: "Creativity loves constraint." },
    { text: "I'm not a girl at Google. I'm a geek at Google." },
  ],
  sampleQuestions: [
    "How did Mayer protect Google's homepage minimalism?",
    "What went wrong with Yahoo's Tumblr acquisition?",
    "How did she approach the mobile turnaround at Yahoo?",
    "What's the Google APM program and how did she shape it?",
    "What's her advice to engineers picking their first job?",
  ],
  featured: false,
};

export default marissaMayer;
