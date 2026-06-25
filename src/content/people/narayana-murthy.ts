import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-narayana-murthy.webp";

const narayanaMurthy: PersonInput = {
  slug: "narayana-murthy",
  name: "N.R. Narayana Murthy",
  title: "Founder, Infosys",
  summary:
    "The socialist-turned-capitalist who founded Infosys with ₹10,000 from his wife's savings, ran it on a code of 'compassionate capitalism', and built the institution that proved Indian software belonged on the world stage.",
  portrait,
  featured: false,
  birthYear: "1946",
  industry: "Technology Services",
  country: "India",
  era: "Liberalised India (1981–present)",
  companies: ["Infosys", "Catamaran Ventures", "Patni Computer Systems"],
  roles: ["Founder", "CEO", "Author", "Investor"],
  tags: [
    "entrepreneurship",
    "values",
    "governance",
    "india",
    "leadership",
    "institution-building",
    "ethics",
  ],
  keyAchievement:
    "Founded and grew Infosys from a 7-person startup into a global software services company that became the model for Indian IT — and set the country's first benchmark for corporate governance.",
  timeline: [
    {
      year: "1946",
      title: "Born in Sidlaghatta, Karnataka",
      story:
        "Son of a schoolteacher in a Madhya-class Brahmin family of eight children. Money was tight and books were sacred.",
      challenge: "Growing up in a household where there was no obvious path to entrepreneurship.",
      lesson: "A teacher's home teaches you what's worth more than money.",
    },
    {
      year: "1967",
      title: "Graduated from National Institute of Engineering, Mysore",
      story: "Studied electrical engineering on scholarship; topped his class.",
      challenge: "His father couldn't afford IIT fees, so he took the merit route.",
      lesson: "Constraints are the cheapest education in discipline.",
    },
    {
      year: "1974",
      title: "Hitchhiked across Europe and was jailed in Bulgaria",
      story:
        "A young socialist on a hippie pilgrimage, he was thrown in a Bulgarian jail for chatting with a girl on a train. The experience converted him to capitalism.",
      challenge:
        "Watching a state apparatus dehumanise ordinary people he believed Marxism was supposed to protect.",
      lesson: "Ideologies are stories. Reality is the place those stories get tested.",
    },
    {
      year: "1976",
      title: "Joined Patni Computer Systems in Mumbai",
      story:
        "Met Sudha Kulkarni (his future wife) and a young Nandan Nilekani. Worked on early Indian computing.",
      challenge:
        "Indian computing in the 1970s was tiny, low-margin, and constrained by the License Raj.",
      lesson: "The right colleagues are worth more than the right industry.",
    },
    {
      year: "1981",
      title: "Founded Infosys with ₹10,000 from his wife",
      story:
        "Co-founded Infosys with six engineers in his Pune apartment; Sudha's savings were the entire seed capital.",
      challenge:
        "Starting a software company in a country where importing a computer required a ministerial sign-off.",
      lesson: "Most great companies start when the rules say they can't.",
    },
    {
      year: "1990",
      title: "Refused to sell Infosys for $1 million",
      story:
        "Six of seven co-founders wanted to take the exit. Murthy said he'd buy them out instead. They stayed.",
      challenge: "Holding the line in a near-bankrupt company.",
      lesson: "Conviction is most expensive — and most valuable — when the cash isn't there.",
    },
    {
      year: "1991",
      title: "Indian economic liberalisation began",
      story:
        "The Manmohan Singh reforms removed the constraints that had nearly killed Infosys; the company finally got room to grow.",
      challenge: "Pivoting from a survival mindset to a growth mindset in months.",
      lesson: "Macro change is rare. When it arrives, double the speed of execution.",
    },
    {
      year: "1993",
      title: "Infosys IPO on Indian markets",
      story:
        "The IPO was undersubscribed and had to be bailed out by Morgan Stanley — but it crossed the line.",
      challenge:
        "Public market scepticism about the long-term viability of Indian software services.",
      lesson: "An undersubscribed IPO that gets done is still a successful IPO.",
    },
    {
      year: "1999",
      title: "First Indian company on NASDAQ",
      story:
        "Listed on NASDAQ with a $1.7B market cap — an event that re-rated the entire Indian IT industry.",
      challenge:
        "Convincing US institutional investors that Indian governance and disclosure could meet US standards.",
      lesson: "Adopt the harder standard before someone asks you to.",
    },
    {
      year: "2002",
      title: "Stepped down as CEO; handed reins to Nandan Nilekani",
      story:
        "Voluntarily transitioned at the height of his power — first of several planned successions he oversaw.",
      challenge: "Letting go of operational control of a company he'd founded and saved.",
      lesson: "Succession is the founder's last and most important product.",
    },
    {
      year: "2011",
      title: "Retired as Infosys chairman",
      story:
        "Officially stepped away from the company; founded Catamaran Ventures to back Indian startups.",
      challenge: "Defining a post-Infosys life with the same intensity as the Infosys years.",
      lesson: "Retirement is just the next project, named differently.",
    },
    {
      year: "2013",
      title: "Returned as executive chairman to rescue Infosys",
      story:
        "Came back when growth stalled and brought his son Rohan as executive assistant — a controversial move criticised as nepotism.",
      challenge:
        "Reconciling personal succession with institutional values he'd publicly preached.",
      lesson:
        "Even principled founders bend rules under pressure. The lesson is to notice when you do.",
    },
    {
      year: "2014",
      title: "Stepped down again after a failed turnaround",
      story: "Handed over to Vishal Sikka as CEO; left the board entirely.",
      challenge: "Admitting that the comeback hadn't delivered what he'd promised.",
      lesson:
        "Owning a partial failure is harder — and more useful — than declaring a partial win.",
    },
    {
      year: "2023",
      title: "70-hour-work-week controversy",
      story:
        "Said young Indians should work 70-hour weeks to build the country; the comment ignited a national debate.",
      challenge: "Speaking from a generation's lens about a generation that had different choices.",
      lesson: "The advice that worked for you is not always the advice that works now.",
    },
  ],
  skills: [
    {
      name: "Compassionate Capitalism",
      description:
        "A discipline of generating wealth while treating every stakeholder — employees, customers, society — with dignity.",
      developed: "Forged in the Bulgarian jail and refined through 40 years of building Infosys.",
    },
    {
      name: "Governance Discipline",
      description:
        "Pioneered US-GAAP reporting, board independence, and disclosure standards far ahead of Indian regulation.",
      developed:
        "Knew Infosys would be judged by the harder of two standards once it listed in the US.",
    },
    {
      name: "Frugality",
      description:
        "Lived in a modest home, flew economy long after he was a billionaire, and demanded the same modesty from senior leaders.",
      developed:
        "From a teacher's-son upbringing; institutionalised at Infosys as a cultural cornerstone.",
    },
    {
      name: "Public Persuasion",
      description:
        "Wrote A Better India, A Better World, gave thousands of speeches; helped shape India's view of itself as a knowledge economy.",
      developed: "Learned that institution-building requires narrative as much as operations.",
    },
    {
      name: "Hiring at Scale",
      description:
        "Built Infosys's training campus in Mysore — capable of inducting tens of thousands of fresh engineers a year.",
      developed:
        "Faced the reality that Indian engineering colleges produced volume, not consistency.",
    },
    {
      name: "Restraint",
      description:
        "Resisted glamour, foreign vacations, lavish offices; protected the company's ethics from his own ego.",
      developed: "Personal practice from his Bulgarian conversion onward.",
    },
  ],
  failures: [
    {
      title: "Nearly sold Infosys in 1990",
      context:
        "Six of seven co-founders voted to accept a $1M acquisition offer; he was the sole holdout.",
      recovery:
        "Offered to buy the others out; they stayed; the company eventually went public for $1.7B.",
      lesson: "Founder conviction sometimes has to outweigh team consensus.",
    },
    {
      title: "2013 comeback didn't deliver",
      context:
        "Returned to revive growth and chose his son Rohan as executive assistant — a move criticised as undermining his own governance preaching.",
      recovery:
        "Stepped down again, handed over cleanly to Vishal Sikka, accepted the criticism publicly.",
      lesson: "Comebacks are harder than founding. Plan a clean exit before you begin one.",
    },
    {
      title: "70-hour work week comment (2023)",
      context:
        "Suggested young Indians should work 70-hour weeks; the comment was widely criticised as out-of-touch with modern wellbeing concerns.",
      recovery: "Defended the comment but acknowledged the generational gap in framing.",
      lesson: "Generational advice doesn't always transfer. Update the framing or expect pushback.",
    },
    {
      title: "Infosys boardroom crisis (2017)",
      context:
        "After his comeback, he publicly clashed with Sikka over governance; Sikka resigned and Sikka's exit hurt the stock.",
      recovery:
        "Nandan Nilekani returned to stabilise; Murthy stepped back from public commentary.",
      lesson: "Founder commentary in public after handing over has compound risk.",
    },
  ],
  books: [
    {
      title: "A Better India, A Better World",
      author: "N.R. Narayana Murthy",
      note: "His manifesto of compassionate capitalism — values, governance, and the role of business in Indian society.",
    },
    {
      title: "The Infosys Story",
      author: "S. Hema",
      note: "An institutional history of the founding and growth of Infosys, with deep access to the founders.",
    },
    {
      title: "Imagining India",
      author: "Nandan Nilekani",
      note: "His co-founder's complementary vision for India's future — pairs naturally with Murthy's work.",
    },
    {
      title: "Built to Last",
      author: "Jim Collins & Jerry Porras",
      note: "Cited often by Murthy as the framework that shaped how he thought about Infosys's long-term design.",
    },
    {
      title: "Made in Japan",
      author: "Akio Morita",
      note: "The Sony founder's autobiography — a model Murthy openly drew on for building an export-quality Indian brand.",
    },
  ],
  influences: [
    {
      name: "Sudha Murty",
      note: "His wife, who gave the seed capital, the moral spine, and decades of philanthropic partnership through the Infosys Foundation.",
    },
    {
      name: "Mahatma Gandhi",
      note: "Source of his ideas about trusteeship, frugality, and the moral responsibility of wealth.",
    },
    {
      name: "Akio Morita",
      note: "Sony founder; modeled what an Asian founder building a global brand looked like.",
    },
    {
      name: "Jim Collins",
      note: "Built to Last became Murthy's operating manual for institutional thinking.",
    },
    {
      name: "Manmohan Singh",
      note: "The economist whose 1991 reforms made Infosys's growth possible.",
    },
  ],
  videoIds: [
    "murthy-infosys-story-iim",
    "murthy-better-india-talk",
    "murthy-rendezvous-shekhar",
    "murthy-iim-bangalore-convocation",
    "murthy-compassionate-capitalism",
  ],
  decisions: [
    {
      title: "Founding Infosys with ₹10,000 (1981)",
      why: "Believed Indian engineers could compete globally if freed from the License Raj.",
      risk: "High",
      outcome: "Built one of India's most respected companies.",
      impact: "Created the template for the entire Indian IT services industry.",
    },
    {
      title: "Holding through the 1990 near-sale",
      why: "Saw a long-term value in Indian software that the buyer's price didn't reflect.",
      risk: "Extreme",
      outcome: "Company went public for $1.7B nine years later.",
      impact: "Modelled the value of founder conviction over team consensus in early-stage crises.",
    },
    {
      title: "Adopting US-GAAP and full disclosure ahead of regulation",
      why: "Wanted Infosys to be benchmarked against the world's best, not India's regulators.",
      risk: "Medium",
      outcome: "Earned a governance premium that lasted decades.",
      impact: "Set the corporate governance bar for the entire Indian private sector.",
    },
    {
      title: "Voluntary CEO succession to Nandan Nilekani (2002)",
      why: "Believed succession was the founder's most important act.",
      risk: "Medium",
      outcome: "Smooth transition; Nilekani doubled revenues in five years.",
      impact: "Established planned founder succession as a norm in Indian IT.",
    },
    {
      title: "Coming back in 2013 — and admitting it didn't work",
      why: "Felt obligated to revive a slowing Infosys.",
      risk: "High",
      outcome: "Growth didn't recover meaningfully; he stepped down again within two years.",
      impact: "Showed founders the limits of comebacks — and the dignity of admitting them.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Adopt the harder standard before it's required of you.",
      takeaway:
        "US-GAAP, independent boards, employee stock — Infosys did all three before Indian law demanded any.",
    },
    {
      audience: "Leaders",
      lesson: "Frugality is leverage.",
      takeaway: "Lower personal burn buys you the freedom to make long-term decisions.",
    },
    {
      audience: "Indian professionals",
      lesson: "The work you do is part of nation-building.",
      takeaway: "Compassionate capitalism is not charity — it is excellent work done with dignity.",
    },
    {
      audience: "Founders",
      lesson: "Succession is your last and most important product.",
      takeaway:
        "If you can't plan an exit, you don't really own the company. The company owns you.",
    },
    {
      audience: "Anyone",
      lesson: "Ideologies are stories.",
      takeaway:
        "His Marxist convictions died in a Bulgarian jail. Hold beliefs lightly enough to update them.",
    },
    {
      audience: "Boards",
      lesson: "Founder comebacks have compound risk.",
      takeaway: "Codify the rules of post-founder engagement before the founder leaves.",
    },
  ],
  quotes: [
    { text: "The softest pillow is a clear conscience." },
    {
      text: "Performance leads to recognition. Recognition brings respect. Respect enhances power. Humility and grace in one's moments of power enhance the dignity of an organisation.",
    },
    { text: "Love your job, but never fall in love with your company." },
    {
      text: "We have to build a country where every individual feels that he or she has a fair opportunity to use their imagination and create wealth for themselves and the country.",
    },
    { text: "Confidence comes from delivering, not from announcing." },
    { text: "Money has never been a motivator for me. It's the joy of creating something." },
  ],
  sampleQuestions: [
    "How did Narayana Murthy build Infosys from ₹10,000?",
    "What is compassionate capitalism?",
    "Why did Murthy refuse to sell Infosys in 1990?",
    "How did the Bulgaria jail experience change Murthy's worldview?",
    "What governance standards did Infosys pioneer in India?",
    "Why did Murthy's 2013 comeback fail?",
    "What did Murthy mean by the 70-hour work week comment?",
    "What can Indian founders learn from Murthy's succession at Infosys?",
  ],
};

export default narayanaMurthy;
