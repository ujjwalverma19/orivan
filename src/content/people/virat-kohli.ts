import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-virat-kohli.webp";

const viratKohli: PersonInput = {
  slug: "virat-kohli",
  name: "Virat Kohli",
  title: "Former India captain, modern run-chase specialist",
  summary:
    "A Delhi boy who modernized Indian cricket's fitness culture, rewrote the ODI run-chasing rulebook, and turned himself into the most-marketed athlete India has ever produced.",
  portrait,
  birthYear: "1988",
  industry: "Professional Cricket",
  country: "India",
  era: "Modern Cricket (2008–present)",
  companies: ["India National Team", "Royal Challengers Bengaluru", "Wrogn", "One8"],
  roles: ["Athlete", "Captain", "Brand Founder"],
  tags: ["cricket", "batting", "captaincy", "fitness", "india", "rcb", "run-chase", "discipline"],
  keyAchievement:
    "50 ODI centuries — the most in history; transformed Indian cricket's fitness standards.",
  timeline: [
    {
      year: "1988",
      title: "Born in Delhi",
      story: "Youngest of three; father was a criminal lawyer.",
      challenge: "Working-middle-class family in West Delhi.",
      lesson: "Many great careers begin in cities that don't yet know they produce talent.",
    },
    {
      year: "1998",
      title: "Started training under Rajkumar Sharma",
      story:
        "Joined West Delhi Cricket Academy after his father identified his obsession with bat-and-ball play.",
      challenge: "Balancing school cricket and academy cricket.",
      lesson: "A coach who calibrates intensity early shapes the next 20 years.",
    },
    {
      year: "2006",
      title: "Lost his father",
      story: "Played a Ranji Trophy match the morning his father died of a heart attack.",
      challenge: "Carrying the family financially at 18 while still in academy cricket.",
      lesson: "Some careers are accelerated by grief that demands they grow up fast.",
    },
    {
      year: "2008",
      title: "Captained India U19 World Cup",
      story: "Led India to the U19 World Cup title in Malaysia.",
      challenge: "Captaining a young team under global press attention.",
      lesson: "Junior tournaments produce the leaders of the senior era.",
    },
    {
      year: "2008",
      title: "Senior ODI debut",
      story: "Made debut against Sri Lanka at 19 in Dambulla.",
      challenge: "Establishing himself in a senior squad still dominated by the Fab Four.",
      lesson: "Standing on the shoulders of legends requires patience and craft.",
    },
    {
      year: "2013",
      title: "Married fitness shift",
      story: "Adopted a strict gym, nutrition, and sleep regime; cut sugar.",
      challenge: "Breaking from Indian cricket's traditional fitness culture.",
      lesson: "Personal standards can shift institutional ones.",
    },
    {
      year: "2014",
      title: "Failed England tour against James Anderson",
      story: "Averaged 13 in the 5-Test series.",
      challenge: "Public criticism over technical flaws.",
      lesson: "Public technical failures force private technical resets.",
    },
    {
      year: "2017",
      title: "Married Anushka Sharma",
      story: "Married Indian actress Anushka Sharma in Italy.",
      challenge: "Navigating media intrusion as a public couple.",
      lesson: "Family infrastructure is the back-office of every great athlete.",
    },
    {
      year: "2018",
      title: "Returned to England with a century",
      story: "Scored 200+ runs in the Edgbaston Test after his 2014 failure.",
      challenge: "Re-confronting the venue and bowler that exposed him.",
      lesson: "Comebacks are made on the same grounds where the failure happened.",
    },
    {
      year: "2021",
      title: "Stepped down as ODI captain",
      story: "Resigned T20 captaincy; later removed from ODI captaincy by BCCI.",
      challenge: "Public removal during a form slump.",
      lesson: "Captaincy turnover can free a senior player's batting.",
    },
    {
      year: "2022",
      title: "Returned to form with Asia Cup hundred",
      story: "Ended a 1,020-day century drought in Dubai.",
      challenge: "Carrying form-doubt across two tournament cycles.",
      lesson: "Long droughts are usually solved by removing pressure, not adding work.",
    },
    {
      year: "2023",
      title: "Reached 50th ODI century",
      story: "Surpassed Sachin Tendulkar's record at the Wankhede in the World Cup semi-final.",
      challenge: "Performing under the weight of the record at his hero's home ground.",
      lesson: "Records arrive when craft and circumstance coincide.",
    },
    {
      year: "2024",
      title: "Won T20 World Cup",
      story: "Retired from T20Is after India lifted the T20 World Cup.",
      challenge: "Ending a format with a title rather than a decline.",
      lesson: "Format-specific retirements can be a leadership move.",
    },
  ],
  skills: [
    {
      name: "Run-Chase Construction",
      description: "Built innings by pacing risk against required rate.",
      developed: "Hundreds of pressure chases over 15 years of ODI cricket.",
    },
    {
      name: "Fitness Standards",
      description: "Reshaped Indian cricket's gym and nutrition culture.",
      developed: "Personal trainer-nutritionist partnerships from 2013 onward.",
    },
    {
      name: "Mental Resets",
      description: "Recovered from public form slumps through structured breaks.",
      developed: "Took a one-month international break in 2022; returned to form.",
    },
    {
      name: "On-Field Intensity",
      description: "Set fielding standards in the deep and at slip.",
      developed: "Captaincy reinforcement of throwing standards across all formats.",
    },
    {
      name: "Captaincy Communication",
      description: "Led teams across all three formats; vocal in dressing room and on field.",
      developed: "U19 leadership and senior captaincy across multiple cycles.",
    },
    {
      name: "Brand Building",
      description: "Built apparel (Wrogn), fragrance (One8), and food businesses.",
      developed: "Decade-plus of consistent marketing partnerships.",
    },
  ],
  failures: [
    {
      title: "2014 England tour",
      context: "Averaged 13.4 across five Tests; technical flaw exposed by James Anderson.",
      recovery:
        "Took six months to rebuild technique; returned to score 200+ at Edgbaston in 2018.",
      lesson: "Failures abroad are blueprints for resets, not verdicts on talent.",
    },
    {
      title: "Loss of captaincy across formats (2021–22)",
      context: "Stepped down or removed across all three formats during form slump.",
      recovery: "Returned to form as a senior batter; helped win the 2024 T20 World Cup.",
      lesson: "Leadership transitions and form slumps often coincide — separate them mentally.",
    },
    {
      title: "2019 World Cup semifinal exit",
      context: "India lost to New Zealand in Manchester despite being tournament favorites.",
      recovery: "Restructured ODI batting unit toward 2023 World Cup.",
      lesson: "Tournament losses force selection and tactical resets.",
    },
  ],
  books: [
    {
      title: "Driven: The Virat Kohli Story",
      author: "Vijay Lokapally",
      note: "Definitive biography of his rise from West Delhi.",
    },
    {
      title: "Numbers Do Lie: 61 Hidden Cricket Stories",
      author: "Aakash Chopra & Impact Index",
      note: "Contains analytical chapters on Kohli's chasing record.",
    },
    {
      title: "Playing It My Way",
      author: "Sachin Tendulkar",
      note: "Recommended for the Indian cricket context that shaped his generation.",
    },
    {
      title: "The Test",
      author: "Author varies",
      note: "Documentary book on captaincy and team rebuild.",
    },
  ],
  influences: [
    { name: "Rajkumar Sharma", note: "Childhood coach who structured his early technique." },
    {
      name: "Prem Kohli (his father)",
      note: "Encouraged him to take cricket seriously; died when Virat was 18.",
    },
    { name: "Sachin Tendulkar", note: "Childhood hero; later teammate and mentor." },
    { name: "MS Dhoni", note: "Captain during his early years; modeled calm leadership." },
    {
      name: "Ravi Shastri",
      note: "Coach during the peak captaincy years; pushed the fitness culture.",
    },
  ],
  videoIds: [
    "kohli-interview-2019",
    "kohli-graham-bensinger",
    "kohli-batting-masterclass",
    "kohli-100s-2023",
  ],
  decisions: [
    {
      title: "Play Ranji match after father's death",
      why: "Wanted to honor his father and stay disciplined.",
      risk: "Medium",
      outcome: "Scored 90; sealed selection trajectory.",
      impact: "Defined his reputation for resilience early.",
    },
    {
      title: "Adopt strict fitness regime (2013)",
      why: "Saw fitness as the multiplier on talent.",
      risk: "Low",
      outcome: "Reshaped Indian cricket's training culture.",
      impact: "Raised standards for every younger Indian player.",
    },
    {
      title: "Take an international break in 2022",
      why: "Needed to reset mentally during form slump.",
      risk: "Medium",
      outcome: "Returned with century in Dubai; reset the second half of his career.",
      impact: "Modeled mental-health-aware professional sport in India.",
    },
    {
      title: "Retire from T20Is after World Cup",
      why: "Wanted to end the format at a peak moment.",
      risk: "Low",
      outcome: "Walked away on a title.",
      impact: "Showed format-specific exits can be strategic.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Fitness is the multiplier on talent.",
      takeaway: "Make gym and nutrition non-negotiable from your early 20s.",
    },
    {
      audience: "Operators",
      lesson: "Reset cycles are productive.",
      takeaway: "Plan deliberate breaks before the body or media forces them.",
    },
    {
      audience: "Leaders",
      lesson: "Set the standard publicly.",
      takeaway: "Behavior visible to the team becomes the team's behavior.",
    },
    {
      audience: "Founders",
      lesson: "Marketing partnerships need decades to compound.",
      takeaway: "Stay with category-defining partners across multiple contract cycles.",
    },
    {
      audience: "Builders",
      lesson: "Reframe failure as research.",
      takeaway: "Treat public failures as the dataset for your next reset.",
    },
  ],
  quotes: [
    { text: "Self-belief and hard work will always earn you success." },
    { text: "You don't play for the crowd; you play for the country." },
    { text: "I want to keep believing that I can do anything for the team." },
    { text: "Talent without focus is wasted." },
    { text: "I never went into a game thinking I have to score runs to be in the team." },
  ],
  sampleQuestions: [
    "How did Virat Kohli rebuild consistency after setbacks?",
    "What changed in Indian cricket because of his fitness culture?",
    "Why did he take a break in 2022?",
    "How does he construct an ODI run-chase?",
    "What did losing the captaincy teach him?",
  ],
  featured: false,
};

export default viratKohli;
