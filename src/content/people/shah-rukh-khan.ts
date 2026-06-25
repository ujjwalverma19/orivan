import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-shah-rukh-khan.webp";

const shahRukhKhan: PersonInput = {
  slug: "shah-rukh-khan",
  name: "Shah Rukh Khan",
  title: 'The "King of Bollywood"',
  summary:
    "A middle-class Delhi boy who lost both parents young, moved to Mumbai with nothing, and built one of the most beloved film careers in global cinema — plus a media empire on the side.",
  portrait,
  birthYear: "1965",
  industry: "Film & Entertainment",
  country: "India",
  era: "Bollywood Modern Era (1988–present)",
  companies: ["Red Chillies Entertainment", "Kolkata Knight Riders", "Dreamz Unlimited"],
  roles: ["Actor", "Producer", "Studio Owner", "Cricket Franchise Owner", "Brand Builder"],
  tags: [
    "actor",
    "bollywood",
    "brand",
    "resilience",
    "storytelling",
    "charisma",
    "icon",
    "founder",
    "india",
  ],
  keyAchievement:
    "Built a four-decade Bollywood career and a multi-business empire spanning film, VFX, and sports.",
  timeline: [
    {
      year: "1965",
      title: "Born in New Delhi",
      story: "Father was a freedom fighter and businessman; mother was a magistrate.",
      challenge: "Family was financially modest despite educated parents.",
      lesson: "Early loss compresses ambition into urgency.",
    },
    {
      year: "1981",
      title: "Lost his father to cancer",
      story: "Father died when he was 15; the family's economic situation worsened.",
      challenge: "Adolescent grief alongside financial pressure.",
      lesson: "Loss before adulthood reshapes the relationship to ambition.",
    },
    {
      year: "1988",
      title: "Started in TV — Fauji and Circus",
      story: "Made his name in army-themed serial Fauji and the circus drama Circus.",
      challenge: "Television was considered a lesser medium than film.",
      lesson: "Start where the door is open; reputation crosses over later.",
    },
    {
      year: "1991",
      title: "Mother died",
      story: "Lost his mother shortly after; moved to Bombay with very little money.",
      challenge: "Orphaned in his mid-20s.",
      lesson: "When the home you came from disappears, you build the next one with the next role.",
    },
    {
      year: "1992",
      title: "Debuted in Deewana",
      story: "Played a romantic lead in his first film; won Filmfare Best Male Debut.",
      challenge: "Being seen as a TV actor breaking into films.",
      lesson:
        "Be willing to be the newcomer twice — once in your first medium and once in your second.",
    },
    {
      year: "1993",
      title: "Played the villain in Baazigar and Darr",
      story: "Took anti-hero roles back-to-back, breaking the romantic-newcomer mold.",
      challenge: "Risking his bankable image early.",
      lesson: "Range is built by the third film, not the tenth.",
    },
    {
      year: "1995",
      title: "Dilwale Dulhania Le Jayenge released",
      story:
        "Played Raj in the romantic blockbuster that still runs in a Mumbai theatre 30 years later.",
      challenge: "Choosing romance over the era's action-hero formula.",
      lesson: "Pick the role that bets on a category nobody owns yet.",
    },
    {
      year: "1999",
      title: "Co-founded Dreamz Unlimited and later Red Chillies",
      story: "Built a production company and visual-effects studio.",
      challenge: "Producing in an industry built around financiers, not creators.",
      lesson: "Own the means of production while you're still the talent in front of the camera.",
    },
    {
      year: "2008",
      title: "Bought the Kolkata Knight Riders IPL team",
      story: "Co-owns the cricket franchise that has won the IPL three times.",
      challenge: "Entering a sport business as a non-cricketer.",
      lesson: "Cross-category investments work when you bring brand to a category that needs it.",
    },
    {
      year: "2010",
      title: "My Name Is Khan released",
      story:
        "Performed in one of the first major Bollywood films to deal openly with post-9/11 Islamophobia.",
      challenge: "Confronting religious identity in a divided market.",
      lesson: "Use platform capital to take stances you couldn't earlier in your career.",
    },
    {
      year: "2018",
      title: "Career setback — Zero underperformed",
      story: "Several big-budget films underperformed; he stepped away from acting.",
      challenge: "Maintaining bankability as the industry shifted toward content-led films.",
      lesson: "Even franchise stars need a comeback chapter.",
    },
    {
      year: "2023",
      title: "Pathaan and Jawan dual blockbusters",
      story: "Returned with two massive box-office hits in a single year after a five-year gap.",
      challenge: "Coming back after a public lull.",
      lesson: "Time away is sometimes the most effective marketing.",
    },
    {
      year: "2023",
      title: "Dunki released to mixed reception",
      story: "Closed his comeback year with a Rajkumar Hirani film about migration.",
      challenge: "Balancing populist hits with subject-led cinema.",
      lesson: "Comebacks need a portfolio, not a single moonshot.",
    },
  ],
  skills: [
    {
      name: "Emotional Range",
      description: "Plays comedy, romance, villainy and tragedy with equal commitment.",
      developed: "TV training; theatre roots at Delhi's TAG troupe.",
    },
    {
      name: "Audience Connection",
      description:
        "Maintains direct relationships with fans — the famous Sunday wave outside Mannat.",
      developed:
        "Conscious choice early in his career to cultivate the fanbase, not just the press.",
    },
    {
      name: "Business Diversification",
      description: "Built film, VFX, IPL, and merchandise businesses on top of acting.",
      developed: "Watched producers profit while actors got royalties cut from contracts.",
    },
    {
      name: "Wit Under Pressure",
      description: "Disarms hostile interviews with self-deprecating humor.",
      developed: "Years of media exposure since his TV days.",
    },
    {
      name: "Brand Architecture",
      description: "Built the 'SRK' brand as separable from any single film.",
      developed: "Deliberate years of endorsement curation and public appearances.",
    },
    {
      name: "Reinvention",
      description:
        "Repositions himself every decade — TV romantic, anti-hero, NRI icon, action star.",
      developed: "Refusal to repeat the formula that just worked.",
    },
  ],
  failures: [
    {
      title: "Detained at US airports",
      context: "Stopped at US immigration multiple times, sparking diplomatic incidents.",
      recovery: "Turned each into a comedic media moment.",
      lesson: "Humor disarms public indignity better than indignation.",
    },
    {
      title: "Late-2010s box-office cold streak",
      context: "Films like Zero and Jab Harry Met Sejal underperformed.",
      recovery: "Took a five-year acting break; returned with Pathaan and Jawan.",
      lesson: "Step back before the audience steps away.",
    },
    {
      title: "IPL controversy in 2012",
      context: "Banned from Mumbai's Wankhede Stadium after a public altercation.",
      recovery: "Acknowledged it; ban was lifted after five years.",
      lesson: "Public mistakes shorten when you don't fight the narrative.",
    },
  ],
  books: [
    {
      title: "The Argumentative Indian",
      author: "Amartya Sen",
      note: "Cited in interviews as influencing his views on Indian pluralism.",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      note: "Frequently recommended to friends and on TED stages.",
    },
    { title: "Becoming", author: "Michelle Obama", note: "Cited as a recent favorite memoir." },
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      note: "Indian classic he has publicly recommended to young people.",
    },
  ],
  influences: [
    {
      name: "Dilip Kumar",
      note: "Indian acting legend whose subtle craft shaped his early performances.",
    },
    { name: "Yash Chopra", note: "Director who built the romantic-hero persona around him." },
    { name: "His father, Taj Mohammed Khan", note: "Inspired his sense of duty and pluralism." },
    { name: "Aditya Chopra", note: "Director and lifelong collaborator on DDLJ and beyond." },
    { name: "Karan Johar", note: "Close friend and director whose films shaped his 2000s arc." },
  ],
  videoIds: [
    "srk-ted-talk-2017",
    "srk-david-letterman-2019",
    "srk-yale-chubb-2012",
    "srk-edinburgh-honorary-2015",
    "srk-bbc-interview-2023",
  ],
  decisions: [
    {
      title: "Play the villain in Baazigar and Darr",
      why: "Wanted to break the romantic-newcomer mold immediately.",
      risk: "High",
      outcome: "Established range early and changed how Bollywood villains were written.",
      impact: "Reset audience expectations of the leading-man archetype.",
    },
    {
      title: "Start Red Chillies and VFX studio",
      why: "Wanted to own the production stack.",
      risk: "Medium",
      outcome: "Built one of India's leading VFX houses.",
      impact: "Moved Bollywood toward in-house production capacity.",
    },
    {
      title: "Take a five-year acting break",
      why: "Burned out; needed reinvention.",
      risk: "High",
      outcome: "Returned with two of the highest-grossing Hindi films ever.",
      impact: "Proved time-off can sharpen demand.",
    },
    {
      title: "Co-own KKR in the inaugural IPL",
      why: "Saw a new entertainment category being formed.",
      risk: "High",
      outcome: "Three IPL titles and a major sports brand.",
      impact: "Made actor-owned franchises mainstream in Indian sport.",
    },
  ],
  insights: [
    {
      audience: "Performers",
      lesson:
        "Build the relationship with the audience directly — the industry intermediates badly.",
      takeaway: "Show up at the door of the people who buy your tickets.",
    },
    {
      audience: "Founders",
      lesson: "Own the production stack while you're still the talent.",
      takeaway: "Royalties matter less than equity when you're the demand-creator.",
    },
    {
      audience: "Brand builders",
      lesson: "Reinvent every decade before the market does it for you.",
      takeaway: "Plan the next chapter while the current one is still selling.",
    },
    {
      audience: "Creators",
      lesson: "Self-deprecation is a moat against criticism.",
      takeaway: "Be the first to make the joke at your own expense.",
    },
    {
      audience: "Public figures",
      lesson: "Step back before audiences ask you to.",
      takeaway: "Time away is part of the act.",
    },
  ],
  quotes: [
    { text: "Success isn't a result of spontaneous combustion. You must set yourself on fire." },
    { text: "Don't become a philosopher before you become rich." },
    { text: "I sell dreams, and I peddle love to millions of people." },
    {
      text: "If you study, you will be a king of knowledge. If you sleep, you will only be dreaming of it.",
    },
    { text: "My name is Khan, and I am not a terrorist." },
  ],
  sampleQuestions: [
    "How did losing your parents young shape your ambition?",
    "Why play villains right after you became a romantic lead?",
    "Why buy a cricket team?",
    "What did the five-year break do for your craft?",
    "How did you build Red Chillies into a full studio?",
  ],
  featured: false,
};

export default shahRukhKhan;
