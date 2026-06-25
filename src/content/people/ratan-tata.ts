import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-ratan-tata.webp";

const ratanTata: PersonInput = {
  slug: "ratan-tata",
  name: "Ratan Tata",
  title: "Chairman Emeritus, Tata Sons",
  summary:
    "The quiet industrialist who took an aging family conglomerate and turned it into India's first true global corporation — acquiring Jaguar Land Rover, Tetley, and Corus while building the world's cheapest car.",
  portrait,
  featured: false,
  birthYear: "1937",
  industry: "Industry & Business",
  country: "India",
  era: "Liberalized Indian Economy (1991–2024)",
  companies: ["Tata Sons", "Tata Motors", "Tata Steel", "Tata Consultancy Services", "Tata Trusts"],
  roles: ["Chairman", "Industrialist", "Philanthropist", "Investor"],
  tags: [
    "leadership",
    "manufacturing",
    "globalization",
    "philanthropy",
    "ethics",
    "india",
    "long-term",
  ],
  keyAchievement:
    "Multiplied Tata Group revenues over 40x during his 21-year chairmanship while taking Indian industry global through Jaguar Land Rover and Corus.",
  timeline: [
    {
      year: "1937",
      title: "Born in Bombay",
      story:
        "Born into the Tata family but raised largely by his grandmother after his parents separated when he was 10.",
      challenge: "An emotionally lonely childhood inside one of India's most public families.",
      lesson: "Public lineage doesn't insulate private hardship. Both can coexist.",
    },
    {
      year: "1962",
      title: "Returned to India after Cornell architecture degree",
      story:
        "Came back from the US to join Tata Steel as a shop-floor blue-collar worker in Jamshedpur.",
      challenge: "Working in extreme heat shoveling limestone in steel furnaces.",
      lesson: "Heirs who skip the floor never understand the factory.",
    },
    {
      year: "1971",
      title: "Asked to turn around National Radio & Electronics (NELCO)",
      story:
        "Given a failing consumer electronics company to fix; spent years trying and ultimately couldn't save it.",
      challenge: "A first major operational test that the market environment doomed.",
      lesson: "Some assignments are unwinnable. Learn what you can and move on.",
    },
    {
      year: "1981",
      title: "Named chairman of Tata Industries",
      story:
        "Took over the group's incubation arm and began identifying technology bets for the Tata future.",
      challenge:
        "Operating in license-raj India where new ventures faced years of regulatory delay.",
      lesson: "Bet on the country you want, not the one you have.",
    },
    {
      year: "1991",
      title: "Became chairman of Tata Sons",
      story: "Took over the parent company days before India's economic liberalization began.",
      challenge:
        "Confronting entrenched satraps — chairmen of major Tata companies who treated their fiefdoms as personal.",
      lesson: "New leadership is mostly about removing the people who block change.",
    },
    {
      year: "1998",
      title: "Launched the Tata Indica",
      story:
        "Pushed through India's first indigenously designed passenger car despite engineering and skeptic resistance.",
      challenge:
        "Built in a country with no modern passenger car design history; early quality was poor.",
      lesson:
        "Confidence in domestic capability has to start with one product, even an imperfect one.",
    },
    {
      year: "2000",
      title: "Acquired Tetley Tea for $432M",
      story:
        "First major foreign acquisition; an Indian company buying a UK heritage brand made global headlines.",
      challenge: "Convincing the Tata board to deploy unprecedented capital outside India.",
      lesson: "The signal value of a single bold acquisition can outweigh the financial logic.",
    },
    {
      year: "2007",
      title: "Acquired Corus Steel for $12.1B",
      story:
        "Bought the Anglo-Dutch steelmaker in a bidding war — making Tata Steel the world's fifth-largest producer.",
      challenge: "Took on massive debt right before the 2008 financial crisis.",
      lesson: "Big bets in cyclical industries can look heroic or reckless depending on the cycle.",
    },
    {
      year: "2008",
      title: "Acquired Jaguar Land Rover from Ford for $2.3B",
      story:
        "Bought the two British luxury brands during the financial crisis when no one else would.",
      challenge: "Skeptics called it Indian overreach into European luxury; JLR was bleeding cash.",
      lesson: "Counter-cyclical M&A is where lasting wealth gets built.",
    },
    {
      year: "2008",
      title: "Launched the Tata Nano at ₹1 lakh ($2,500)",
      story:
        "Shipped the world's cheapest car after a public promise that he'd build a safe family car at that price.",
      challenge:
        "Manufacturing chaos, factory relocation from Singur, and weak demand led to commercial disappointment.",
      lesson: "A promise made publicly forces follow-through even when economics turn against you.",
    },
    {
      year: "2012",
      title: "Retired as chairman at 75",
      story:
        "Handed the chairmanship to Cyrus Mistry per long-planned succession; retained chairmanship of Tata Trusts.",
      challenge: "Letting go of operational control after 21 years.",
      lesson: "Real leaders are measured by how peacefully they hand power over.",
    },
    {
      year: "2016",
      title: "Returned as interim chairman during the Mistry crisis",
      story:
        "Came back after the board fired Mistry amid a public dispute, then helped install N. Chandrasekaran.",
      challenge: "Navigating an ugly public legal and family conflict that lasted years.",
      lesson: "Even cleanly designed succession can fail. Be ready to come back briefly to fix it.",
    },
    {
      year: "2024",
      title: "Died at 86 in Mumbai",
      story:
        "Mourned across India as one of the country's most trusted industrialists; final years focused on Tata Trusts and startup investing.",
      challenge: "Closing a life of public service while staying useful to the next generation.",
      lesson: "Quiet ethics build a reputation that outlives every quarter's earnings.",
    },
  ],
  skills: [
    {
      name: "Long-term Capital Allocation",
      description:
        "Pushed Tata into multi-decade bets like indigenous car manufacturing and global M&A.",
      developed:
        "Twenty-one years as chairman conditioned him to think in five-year, not five-quarter, increments.",
    },
    {
      name: "Ethical Decision-Making",
      description:
        "Refused bribes, walked away from a Tata Airlines license rather than pay, and reinforced an internal code of conduct.",
      developed:
        "Modeled on Jamsetji Tata's founding ethics and reinforced by Trust governance structures.",
    },
    {
      name: "Talent Identification",
      description:
        "Promoted operators like N. Chandrasekaran from TCS and trusted technical leadership over family ties.",
      developed:
        "Watched the satrap problem destroy decision-making for decades and consciously chose merit.",
    },
    {
      name: "Composure Under Crisis",
      description:
        "Stayed publicly calm during the Mumbai 26/11 terror attacks at the Taj, the Nano controversy, and the Mistry firing.",
      developed: "Stoic temperament reinforced by decades of public scrutiny.",
    },
    {
      name: "Brand-Building",
      description: "Made 'Tata' synonymous with trust, quality, and Indian global ambition.",
      developed:
        "Treated every group company as a steward of the parent brand, not an independent operator.",
    },
    {
      name: "Listening",
      description:
        "Famous for low-key dinners with junior engineers and the willingness to change direction based on what he heard.",
      developed:
        "Years on the Tata Steel shop floor and at NELCO that taught him technical conversation matters.",
    },
  ],
  failures: [
    {
      title: "NELCO turnaround (1971–1980s)",
      context:
        "Tried to revive a struggling consumer electronics business through the worst years of the Indian license raj.",
      recovery:
        "Eventually divested most of it and absorbed the lessons into his later strategic discipline.",
      lesson: "Some businesses are killed by the environment, not the management.",
    },
    {
      title: "Tata Nano (2008–2020)",
      context:
        "The 'world's cheapest car' launched with massive hype but struggled with safety perceptions and commercial demand.",
      recovery:
        "Used the engineering platform to develop subsequent Tata small cars; quietly discontinued the Nano by 2020.",
      lesson: "A product can be a marketing triumph and a commercial failure simultaneously.",
    },
    {
      title: "Singur factory relocation (2008)",
      context:
        "Forced to move the Nano plant from West Bengal to Gujarat after farmer protests and political opposition.",
      recovery: "Built the Sanand plant in 14 months and shipped the Nano on time.",
      lesson: "Political risk in emerging markets is a permanent line item, not a one-time event.",
    },
    {
      title: "Mistry succession crisis (2016)",
      context:
        "His chosen successor was fired four years in, triggering a multi-year public legal and reputational battle.",
      recovery:
        "Returned as interim chairman, installed N. Chandrasekaran, and saw the Supreme Court rule in Tata's favor in 2021.",
      lesson: "Cleanly designed succession still needs to be defended after the handover.",
    },
    {
      title: "Corus debt overhang (2008–2015)",
      context:
        "The $12B Corus deal loaded Tata Steel with debt right before the global financial crisis crushed steel demand.",
      recovery:
        "Slowly restructured the European operations and sold non-core assets through the 2010s.",
      lesson:
        "Mega-acquisitions in cyclicals require modeling the worst cycle, not the average one.",
    },
  ],
  books: [
    {
      title: "The Tata Story",
      author: "Peter Casey",
      note: "Reported account of the modern Tata Group built around interviews with Ratan Tata.",
    },
    {
      title: "Ratan Tata: A Life",
      author: "Thomas Mathew",
      note: "Authorized biography drawing on rare archival access.",
    },
    {
      title: "Jamsetji Tata: Powerful Learnings for Corporate Success",
      author: "R. Gopalakrishnan & Harish Bhat",
      note: "The founding ethics text Ratan Tata pointed his executives toward.",
    },
    {
      title: "Tata Log: Eight Modern Stories from a Timeless Institution",
      author: "Harish Bhat",
      note: "Eight case studies inside the modern Tata Group — Indica, Indigo, Tetley, JLR, and more.",
    },
  ],
  influences: [
    {
      name: "Jamsetji Tata",
      note: "Founder of the group; provided the ethical and nation-building template Ratan inherited.",
    },
    {
      name: "J.R.D. Tata",
      note: "His predecessor and mentor; modeled the role of the principled industrialist.",
    },
    {
      name: "Simone (mother)",
      note: "Italian-born mother whose European sensibility shaped his cultural openness.",
    },
    {
      name: "Henri Krause (Cornell architecture professor)",
      note: "Taught him to see industrial design as an act of public responsibility.",
    },
    {
      name: "Russi Mody (Tata Steel chairman)",
      note: "The kind of larger-than-life satrap Ratan had to navigate around to modernize Tata governance.",
    },
    {
      name: "Sumant Moolgaokar (Telco)",
      note: "The engineering legend whose Telco/Tata Motors he eventually inherited and modernized.",
    },
  ],
  videoIds: [
    "ratan-tata-cornell-talk",
    "ratan-tata-jrd-tata-tribute",
    "ratan-tata-nita-ambani-interview",
    "ratan-tata-mid-day-interview",
  ],
  decisions: [
    {
      title: "Breaking the satrap system (1991–1995)",
      why: "Believed the group could not modernize while individual chairmen ran fiefdoms.",
      risk: "High",
      outcome:
        "Installed retirement age and central governance; cleared the path for strategic alignment.",
      impact: "Created the conditions for every subsequent Tata global move.",
    },
    {
      title: "Buying Tetley (2000)",
      why: "Wanted to signal Indian industry was a buyer, not just a seller, on the global stage.",
      risk: "Medium",
      outcome: "Successful integration that became the template for later acquisitions.",
      impact: "Opened a decade of Indian outbound M&A activity.",
    },
    {
      title: "Buying Jaguar Land Rover from Ford (2008)",
      why: "Saw two iconic brands sold under duress at a once-in-a-cycle price.",
      risk: "Extreme",
      outcome: "JLR became Tata Motors' largest profit engine within a decade.",
      impact: "Defined Indian global luxury capability and rewrote the M&A narrative.",
    },
    {
      title: "Launching the Nano (2008)",
      why: "Public promise that a safe family car could be built for ₹1 lakh to get Indian families off two-wheelers.",
      risk: "High",
      outcome: "Engineering triumph, commercial disappointment, lasting brand resonance.",
      impact: "Reframed what Indian engineering could attempt at scale.",
    },
    {
      title: "Coming back to fix the Mistry crisis (2016)",
      why: "Believed the future of the group required immediate stable leadership.",
      risk: "Medium",
      outcome: "Installed N. Chandrasekaran, who restored growth and brand stability.",
      impact: "Showed that founders may need to return briefly to defend their succession.",
    },
  ],
  insights: [
    {
      audience: "Leaders",
      lesson:
        "I don't believe in taking right decisions. I take decisions and then make them right.",
      takeaway:
        "Execution converts uncertain decisions into right ones. Bias to action plus quality of follow-through.",
    },
    {
      audience: "Founders",
      lesson: "Build for 50 years, not 5.",
      takeaway: "Capital structures, talent pipelines, and brand promises should outlast you.",
    },
    {
      audience: "Executives",
      lesson: "Promote merit over family.",
      takeaway:
        "Inherited businesses survive by hiring better than themselves, not by trusting bloodlines.",
    },
    {
      audience: "Managers",
      lesson: "Walk the factory floor before you redesign it.",
      takeaway: "The best information lives with the operators, not the consultants.",
    },
    {
      audience: "Anyone in public roles",
      lesson: "Quiet ethics compound louder than loud activism.",
      takeaway: "Refuse the bribe once and the reputation lasts a lifetime.",
    },
    {
      audience: "Indian builders",
      lesson: "Aim global from the start.",
      takeaway:
        "The Indian market is large but the Indian standard cannot be lower than the world standard.",
    },
    {
      audience: "Heirs",
      lesson: "Earn the right to lead before you assume it.",
      takeaway: "Spend years on the shop floor before you take the corner office.",
    },
  ],
  quotes: [
    {
      text: "I don't believe in taking right decisions. I take decisions and then make them right.",
    },
    { text: "If you want to walk fast, walk alone. But if you want to walk far, walk together." },
    { text: "Power and wealth are not two of my main stakes." },
    { text: "Take the stones people throw at you, and use them to build a monument." },
    {
      text: "None can destroy iron, but its own rust can. Likewise, none can destroy a person but their own mindset can.",
    },
    {
      text: "Ups and downs in life are very important to keep us going, because a straight line even in an ECG means we are not alive.",
    },
    {
      text: "Businesses need to go beyond the interest of their companies to the communities they serve.",
    },
  ],
  sampleQuestions: [
    "How did Ratan Tata transform the Tata Group?",
    "Why did Tata acquire Jaguar Land Rover during the 2008 crisis?",
    "What happened with the Tata Nano and what's its real legacy?",
    "How did Ratan Tata handle the Mistry succession crisis?",
    "What can Indian founders learn from Ratan Tata's leadership?",
    "Why is the Tata Group considered ethical in Indian business?",
    "What was Ratan Tata's approach to global acquisitions?",
  ],
};

export default ratanTata;
