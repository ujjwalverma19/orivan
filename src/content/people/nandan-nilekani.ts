import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-nandan-nilekani.webp";

const nandanNilekani: PersonInput = {
  slug: "nandan-nilekani",
  name: "Nandan Nilekani",
  title: "Co-founder, Infosys; Architect of Aadhaar",
  summary:
    "The technologist who built India's biggest IT company, then walked away to build the world's largest digital identity system — and proved a billion people could be brought online without a credit card.",
  portrait,
  featured: false,
  birthYear: "1955",
  industry: "Technology & Public Infrastructure",
  country: "India",
  era: "India's Digital Era (1981–present)",
  companies: ["Infosys", "UIDAI / Aadhaar", "iSPIRT", "Ekstep Foundation"],
  roles: ["Co-founder", "CEO", "Public Servant", "Author"],
  tags: [
    "digital-public-goods",
    "identity",
    "fintech",
    "scale",
    "policy",
    "india",
    "platform-thinking",
  ],
  keyAchievement:
    "Designed and delivered Aadhaar — the world's largest biometric identity system, covering 1.3 billion people — and laid the foundation for the India Stack that powers UPI, eKYC, and DigiLocker.",
  timeline: [
    {
      year: "1955",
      title: "Born in Bengaluru, Karnataka",
      story:
        "Son of a manager at Mysore Minerals; raised in a middle-class Konkani family that prized education.",
      challenge:
        "A comfortable but constrained childhood with no obvious path to entrepreneurship.",
      lesson: "Curiosity travels further than circumstance.",
    },
    {
      year: "1973",
      title: "Joined IIT Bombay for electrical engineering",
      story:
        "Discovered student politics, debating, and the wider world of ideas outside engineering.",
      challenge:
        "Coming from a small-town school into one of India's most competitive institutions.",
      lesson: "The classroom is half the education at any good college.",
    },
    {
      year: "1978",
      title: "Joined Patni Computer Systems in Mumbai",
      story:
        "Met Narayana Murthy during his interview — Murthy became his first boss and lifelong partner.",
      challenge: "Indian IT in 1978 was tiny, low-margin, and built on imported mainframes.",
      lesson: "Your first boss matters more than your first company.",
    },
    {
      year: "1981",
      title: "Co-founded Infosys with N.R. Narayana Murthy and five others",
      story:
        "Seven engineers pooled ₹10,000 to start a software company in a one-room flat in Pune.",
      challenge:
        "License Raj India made importing computers and exporting services nearly impossible.",
      lesson: "Found with people whose values you'll still respect in thirty years.",
    },
    {
      year: "1990",
      title: "Voted against selling Infosys for $1 million",
      story:
        "When a buyer offered to acquire the struggling company, six of seven co-founders wanted to sell. Murthy and Nilekani held out.",
      challenge: "Saying no to liquidity in a company that had barely survived a decade.",
      lesson: "The hardest decisions are made when you have the least money.",
    },
    {
      year: "1999",
      title: "Infosys listed on NASDAQ",
      story:
        "First Indian company to list on NASDAQ; the IPO turned Indian software services into a global asset class.",
      challenge:
        "Convincing US investors that a Bangalore company could run mission-critical systems for the Fortune 500.",
      lesson: "Credibility compounds — show up at the harder venue once and the easier ones open.",
    },
    {
      year: "2002",
      title: "Became CEO of Infosys",
      story: "Took over from Murthy in a planned succession; doubled revenues in five years.",
      challenge: "Stepping out of a founder's shadow while keeping his trust.",
      lesson: "Inheritance is a position. Authority is built one decision at a time.",
    },
    {
      year: "2009",
      title: "Appointed chairman of UIDAI by Manmohan Singh",
      story:
        "Quit Infosys at the peak of his corporate career to build a free digital identity system for every Indian.",
      challenge: "Leaving a $30B company for a government office with a 12-person team.",
      lesson: "The biggest leverage in mid-career is the willingness to start over.",
    },
    {
      year: "2010",
      title: "Enrolled the first Aadhaar number in Tembhli, Maharashtra",
      story:
        "A tribal woman named Ranjana Sonawane received India's first 12-digit Aadhaar number.",
      challenge:
        "Convincing skeptics that biometric enrolment of a billion people was feasible at all.",
      lesson:
        "Start with the hardest user, not the easiest. If the system works for them, it works.",
    },
    {
      year: "2014",
      title: "Lost the South Bangalore Lok Sabha election",
      story:
        "Contested as a Congress candidate against Ananth Kumar of BJP and lost by over 200,000 votes.",
      challenge: "Discovering that competence and goodwill don't translate into votes.",
      lesson: "Politics is its own craft. Mastery in one domain doesn't transfer.",
    },
    {
      year: "2016",
      title: "Co-founded iSPIRT and shaped the India Stack",
      story:
        "Helped design UPI, eKYC, DigiLocker — the open APIs that now move ₹100+ trillion a year.",
      challenge:
        "Convincing banks, regulators, and startups to build on shared public infrastructure.",
      lesson:
        "Open protocols outscale proprietary platforms when the network matters more than the rent.",
    },
    {
      year: "2017",
      title: "Returned as non-executive chairman of Infosys",
      story:
        "Came back after a boardroom crisis pushed out CEO Vishal Sikka; stabilised the company and the stock.",
      challenge: "Walking back into a company changed beyond what he'd left behind.",
      lesson: "You can go home again — but you bring back what you learned outside.",
    },
    {
      year: "2022",
      title: "Crossed 1.3 billion Aadhaar enrolments",
      story:
        "Aadhaar had become the world's largest digital identity system, embedded in every major Indian welfare and finance flow.",
      challenge: "Sustaining public trust through ongoing privacy, exclusion, and design debates.",
      lesson: "Digital public infrastructure is a generational project, not a launch.",
    },
  ],
  skills: [
    {
      name: "Platform Thinking",
      description:
        "Designs systems as thin, open protocols that others build on — not as feature-rich products.",
      developed:
        "Years of watching closed enterprise software collapse against open ecosystems; refined while designing the India Stack.",
    },
    {
      name: "Public-Private Translation",
      description:
        "Speaks both the language of regulators and the language of engineers without losing precision in either.",
      developed: "Decades alternating between corporate boardrooms and government committee rooms.",
    },
    {
      name: "Long-Horizon Execution",
      description:
        "Sets 10–15 year goals (a billion enrolments, a trillion-rupee UPI) and works back from them.",
      developed:
        "Internalised at Infosys, where every meaningful contract took 3–5 years to develop.",
    },
    {
      name: "Team Assembly",
      description:
        "Pulled a 12-person UIDAI core team from across Infosys, IIT, and government — a 'volunteer army' on government salaries.",
      developed:
        "Years of recruiting at Infosys taught him that talent follows mission, not money, at the senior end.",
    },
    {
      name: "Writing & Public Communication",
      description: "Uses books, op-eds, and lectures to set policy agendas before regulators do.",
      developed:
        "Authored Imagining India and Rebooting India; learned that policy is downstream of public narrative.",
    },
    {
      name: "Trust Stewardship",
      description:
        "Defended Aadhaar's privacy design publicly through years of Supreme Court scrutiny.",
      developed:
        "Forced into the role when activists and journalists turned Aadhaar into a national debate.",
    },
  ],
  failures: [
    {
      title: "South Bangalore election loss (2014)",
      context:
        "Ran as a Congress candidate; lost by 228,000 votes despite spending heavily and campaigning hard.",
      recovery:
        "Returned to civic-tech work full time; wrote Rebooting India with Viral Shah within months.",
      lesson:
        "Optionality is freedom. He had something to go back to — and went back without bitterness.",
    },
    {
      title: "Infosys boardroom crisis (2017)",
      context:
        "His co-founder Murthy publicly clashed with then-CEO Sikka over governance; the company hit a confidence crisis.",
      recovery:
        "Returned as non-executive chairman, stabilised governance, oversaw a smooth CEO transition.",
      lesson:
        "Founder-CEO relationships are fragile. Codify the rules of engagement in writing, early.",
    },
    {
      title: "Aadhaar privacy and exclusion controversies",
      context:
        "Years of reports of welfare denial due to biometric failures and ongoing court cases over data protection.",
      recovery:
        "Continually engaged critics, supported privacy legislation, and revised consent architecture.",
      lesson: "Public infrastructure must be argued about publicly. Defensiveness ages badly.",
    },
    {
      title: "Slow early Infosys growth",
      context:
        "Took Infosys nearly a decade to find product-market fit; almost sold the company in 1990.",
      recovery: "Held on through the 1991 reforms which unlocked Indian IT exports.",
      lesson: "Macro tailwinds can take a decade to arrive. Survive long enough to catch them.",
    },
  ],
  books: [
    {
      title: "Imagining India",
      author: "Nandan Nilekani",
      note: "His 2008 manifesto — a roadmap for India's economic and technological future that previewed Aadhaar.",
    },
    {
      title: "Rebooting India",
      author: "Nandan Nilekani & Viral Shah",
      note: "Inside-the-room account of building Aadhaar and the lessons for digital governance.",
    },
    {
      title: "The Art of Bitfulness",
      author: "Nandan Nilekani & Tanuj Bhojwani",
      note: "On digital wellbeing and personal information management in an attention economy.",
    },
    {
      title: "A Better India, A Better World",
      author: "N.R. Narayana Murthy",
      note: "His co-founder's parallel manifesto — required reading to understand the Infosys ethos.",
    },
    {
      title: "Code/Space",
      author: "Rob Kitchin & Martin Dodge",
      note: "Theoretical scaffolding he often cites for how digital infrastructure reshapes physical life.",
    },
  ],
  influences: [
    {
      name: "N.R. Narayana Murthy",
      note: "Co-founder, first boss, and the source of Infosys's value system.",
    },
    {
      name: "Manmohan Singh",
      note: "The Prime Minister who handed him the cabinet rank to build Aadhaar.",
    },
    {
      name: "C.K. Prahalad",
      note: "Management thinker whose 'Bottom of the Pyramid' framework shaped his view of India as a market.",
    },
    {
      name: "Pramod Varma",
      note: "Chief architect of Aadhaar and India Stack; the engineer who turned Nilekani's vision into protocol.",
    },
    {
      name: "Lawrence Lessig",
      note: "Code-is-law thinker whose work on open standards informed the India Stack design.",
    },
  ],
  videoIds: [
    "nilekani-ted-india-future",
    "nilekani-india-stack-talk",
    "nilekani-davos-aadhaar",
    "nilekani-infosys-story",
    "nilekani-podcast-tyler-cowen",
  ],
  decisions: [
    {
      title: "Co-founding Infosys with ₹10,000 (1981)",
      why: "Believed Indian engineers could build for the world if given the chance and the equity.",
      risk: "High",
      outcome: "Built India's most respected technology services company.",
      impact: "Created the template for the entire Indian IT services industry.",
    },
    {
      title: "Refusing the $1M Infosys sale (1990)",
      why: "Saw a long-term path through liberalisation that the rest of the team didn't.",
      risk: "Extreme",
      outcome: "Company went on to a multi-billion-dollar IPO nine years later.",
      impact: "Proved that founder conviction is sometimes worth more than the offer on the table.",
    },
    {
      title: "Quitting Infosys to chair UIDAI (2009)",
      why: "Believed digital identity was a once-in-a-generation public infrastructure opportunity.",
      risk: "High",
      outcome: "Delivered Aadhaar — now embedded in every major Indian public service.",
      impact: "Set the model for technologists serving in government without becoming bureaucrats.",
    },
    {
      title: "Designing Aadhaar as a thin protocol, not an application",
      why: "Wanted thousands of services to build on identity — not one giant database to run them.",
      risk: "Medium",
      outcome: "Enabled the India Stack — UPI, eKYC, DigiLocker — to flourish on top.",
      impact: "Established 'digital public goods' as a model now exported to multiple countries.",
    },
    {
      title: "Returning to Infosys as non-executive chairman (2017)",
      why: "Felt a duty to the institution he co-founded during its first real governance crisis.",
      risk: "Medium",
      outcome: "Stabilised the company, oversaw a clean CEO transition, restored investor trust.",
      impact: "Modeled how founders can return without taking back operational control.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Build platforms, not products, when the market is a billion people.",
      takeaway:
        "Aadhaar is an API. UPI is an API. Both scaled because they were thin layers others could build on.",
    },
    {
      audience: "Policy makers",
      lesson: "Digital public infrastructure beats centralised platforms.",
      takeaway: "Open protocols capture network value for the public; closed platforms extract it.",
    },
    {
      audience: "Engineers in government",
      lesson: "Bring product thinking into public service.",
      takeaway:
        "Government has the scale and the mandate. Product people bring the discipline of the user.",
    },
    {
      audience: "Mid-career leaders",
      lesson: "Restart in a different domain after 25 years.",
      takeaway: "He left Infosys at the peak. The second act became the bigger story.",
    },
    {
      audience: "Indians",
      lesson: "Identity is the most under-priced infrastructure.",
      takeaway:
        "Once a billion people have a verifiable identity, every other public service gets cheaper.",
    },
    {
      audience: "Anyone",
      lesson: "Trust is the rate-limit on scale.",
      takeaway: "You can ship the code in months. You earn the trust to use it in decades.",
    },
  ],
  quotes: [
    { text: "Nothing happens in India for the first ten years. Then it happens all at once." },
    {
      text: "A billion people cannot afford a thick stack. We had to design the thinnest possible protocol.",
    },
    { text: "The state's job is to provide the rails, not to run every train on them." },
    { text: "Identity is the most leveraged infrastructure in any modern economy." },
    {
      text: "If you want to change a system, you have to first understand why it currently makes sense to the people inside it.",
    },
    { text: "Public infrastructure must be argued about in public. That's a feature, not a bug." },
  ],
  sampleQuestions: [
    "How did Nandan Nilekani build Aadhaar for a billion people?",
    "What is the India Stack and why does it matter?",
    "Why did Nilekani leave Infosys for UIDAI in 2009?",
    "How did Infosys almost get sold for $1 million in 1990?",
    "What lessons does Nilekani offer founders building for emerging markets?",
    "Why did Nilekani lose the 2014 Lok Sabha election?",
    "What did Nilekani learn from the 2017 Infosys boardroom crisis?",
    "How should technologists work with governments?",
  ],
};

export default nandanNilekani;
