import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-cristiano-ronaldo.webp";

const cristianoRonaldo: PersonInput = {
  slug: "cristiano-ronaldo",
  name: "Cristiano Ronaldo",
  title: "Five-time Ballon d'Or, all-time international goalscorer",
  summary:
    "A Madeiran teenager who left home at 12 to chase football, became the most marketed athlete on earth, and built a career powered by training discipline that outlasted most of his contemporaries.",
  portrait,
  birthYear: "1985",
  industry: "Professional Football",
  country: "Portugal",
  era: "Modern Football (2003–present)",
  companies: [
    "Sporting CP",
    "Manchester United",
    "Real Madrid",
    "Juventus",
    "Al-Nassr",
    "Portugal National Team",
  ],
  roles: ["Athlete", "Captain", "Brand Founder"],
  tags: [
    "football",
    "soccer",
    "ballon-dor",
    "champions-league",
    "longevity",
    "discipline",
    "branding",
    "portugal",
  ],
  keyAchievement:
    "Five Ballon d'Or awards, five UEFA Champions Leagues, and the all-time international goalscorer record.",
  timeline: [
    {
      year: "1985",
      title: "Born in Funchal, Madeira",
      story: "Youngest of four; father worked as a kit man at a local club.",
      challenge: "Family lived in modest conditions on the Portuguese island.",
      lesson: "Athletic environments at home compound long before formal coaching does.",
    },
    {
      year: "1997",
      title: "Joined Sporting CP at 12",
      story: "Left home for Lisbon to attend Sporting's academy.",
      challenge: "Boarding-school loneliness as the smallest kid in his cohort.",
      lesson:
        "Early career mobility separates the kids who chase the game from those who wait for it.",
    },
    {
      year: "2002",
      title: "Diagnosed with racing heart",
      story: "Underwent laser surgery for tachycardia at 15.",
      challenge: "Medical risk that could have ended his career.",
      lesson: "Generational talent often survives an early medical scare nobody talks about.",
    },
    {
      year: "2003",
      title: "Signed for Manchester United",
      story: "Sir Alex Ferguson signed him after a Sporting friendly.",
      challenge: "Adapting to the Premier League at 18.",
      lesson: "Managers who pick on instinct can shape a career more than scouting reports.",
    },
    {
      year: "2008",
      title: "Won first Ballon d'Or and Champions League",
      story: "Led Manchester United to UCL title; awarded first Ballon d'Or.",
      challenge: "Carrying United's attacking burden as the lone striker.",
      lesson: "Star players win team titles; team titles win individual awards.",
    },
    {
      year: "2009",
      title: "Transferred to Real Madrid for world record fee",
      story: "€94M move set a transfer record at the time.",
      challenge: "Replacing club heroes; meeting Galáctico-era expectations.",
      lesson: "Record fees come with record expectations; deliver in season one or lose the room.",
    },
    {
      year: "2014",
      title: "Won Champions League with La Décima",
      story: "Real Madrid's tenth UCL title — the trophy the club obsessed over for a decade.",
      challenge: "Repeated late-stage UCL exits before the breakthrough.",
      lesson: "Institutional dreams come true through individual perseverance.",
    },
    {
      year: "2016",
      title: "Captained Portugal to Euro 2016",
      story: "Portugal beat France in the final despite Ronaldo going off injured early.",
      challenge: "Leading from the sidelines after a 25th-minute injury.",
      lesson: "Leadership extends beyond minutes played.",
    },
    {
      year: "2018",
      title: "Moved to Juventus",
      story: "€100M transfer at 33; brought Champions League ambition to Turin.",
      challenge: "Adapting to Serie A's tactical defense.",
      lesson: "Top players use late-career moves to test themselves in new systems.",
    },
    {
      year: "2021",
      title: "Returned to Manchester United",
      story: "Second spell at United ended in fallout with the manager and a public split.",
      challenge: "Reintegrating into a club whose culture had changed.",
      lesson: "Return moves are rarely about football alone.",
    },
    {
      year: "2022",
      title: "Joined Al-Nassr",
      story:
        "Reportedly the highest-paid contract in football history — and a marketing inflection for the Saudi Pro League.",
      challenge: "Choosing a new league late in career.",
      lesson: "Late-career moves can reshape the marketplace as much as the trophy cabinet.",
    },
    {
      year: "2023",
      title: "Became all-time international goalscorer",
      story: "Surpassed every other men's player on the international goal record.",
      challenge: "Sustaining elite output into his late 30s.",
      lesson: "Records are won across decades by people who stay healthy.",
    },
  ],
  skills: [
    {
      name: "Training Intensity",
      description: "Reportedly trains 4+ hours daily, including private gym sessions.",
      developed: "Carried his Sporting Academy work ethic into every club.",
    },
    {
      name: "Body Maintenance",
      description: "Built one of the longest physical careers in football history.",
      developed: "Investment in cryotherapy, nutrition science, and sleep optimization.",
    },
    {
      name: "Aerial Dominance",
      description: "Generated record vertical leap and timing for headers.",
      developed: "Daily plyometrics and finishing drills.",
    },
    {
      name: "Mental Toughness",
      description: "Handles public criticism and continues performing at a high level.",
      developed: "Two decades of media scrutiny across multiple countries.",
    },
    {
      name: "Brand Discipline",
      description: "Built CR7, fragrance lines, hotels, and Insta-era marketing apparatus.",
      developed: "Long-term partnership with agent Jorge Mendes.",
    },
    {
      name: "Captaincy",
      description: "Led national side through three generations of teammates.",
      developed: "Years carrying Portugal through tournaments.",
    },
  ],
  failures: [
    {
      title: "Manchester United second spell collapse",
      context: "Public fallout with manager Erik ten Hag led to mid-season exit.",
      recovery: "Moved to Al-Nassr; reset narrative within months.",
      lesson: "Return chapters require institutional alignment more than nostalgia.",
    },
    {
      title: "Euro 2020 round-of-16 exit",
      context: "Portugal lost to Belgium with Ronaldo as captain.",
      recovery: "Reset for the 2022 World Cup and 2024 Euro cycle.",
      lesson: "Tournament losses force selection and tactical resets.",
    },
    {
      title: "2017 tax fraud case in Spain",
      context: "Accepted fine and suspended sentence over image-rights tax structuring.",
      recovery: "Restructured commercial arrangements after the settlement.",
      lesson: "International careers require professional tax structures, not improvisation.",
    },
  ],
  books: [
    {
      title: "Cristiano Ronaldo: The Biography",
      author: "Guillem Balagué",
      note: "Definitive biography by a leading football journalist.",
    },
    {
      title: "Moments — Cristiano Ronaldo",
      author: "Cristiano Ronaldo",
      note: "His self-published photobook on key career memories.",
    },
    {
      title: "Messi vs. Ronaldo",
      author: "Jonathan Clegg & Joshua Robinson",
      note: "Cross-portrait of the era-defining rivalry.",
    },
    {
      title: "Sir Alex Ferguson: My Autobiography",
      author: "Sir Alex Ferguson",
      note: "Includes detailed accounts of coaching the young Ronaldo.",
    },
  ],
  influences: [
    { name: "Sir Alex Ferguson", note: "Manager who signed and shaped him at Manchester United." },
    { name: "Jorge Mendes", note: "Long-time agent and architect of his career." },
    { name: "Carlos Queiroz", note: "Coach who tutored him technically at United and Portugal." },
    { name: "Eusébio", note: "Portuguese football legend and personal hero." },
    { name: "Dolores Aveiro (his mother)", note: "Family anchor and emotional grounding." },
  ],
  videoIds: [
    "ronaldo-piers-morgan-2022",
    "ronaldo-mentality-documentary",
    "ronaldo-jonathan-ross-2018",
    "ronaldo-champions-league-best",
  ],
  decisions: [
    {
      title: "Leave home at 12 for Lisbon",
      why: "Believed Sporting's academy was the fastest path.",
      risk: "High",
      outcome: "Reached the Sporting first team at 16.",
      impact: "Founded a career trajectory most players don't get.",
    },
    {
      title: "Transfer to Real Madrid in 2009",
      why: "Wanted the biggest stage and a Galáctico legacy.",
      risk: "Medium",
      outcome: "Won 4 UCL titles in Madrid and broke club scoring records.",
      impact: "Reset modern transfer-fee economics.",
    },
    {
      title: "Move to Juventus at 33",
      why: "Believed he could win UCL with a new club.",
      risk: "Medium",
      outcome: "Won Serie A but never claimed UCL with Juventus.",
      impact: "Demonstrated late-career willingness to embrace a new system.",
    },
    {
      title: "Join Al-Nassr",
      why: "Wanted financial and marketing scale outside Europe.",
      risk: "Medium",
      outcome: "Sparked global investment in Saudi football.",
      impact: "Restructured the global player-market geography.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Discipline beats talent over decades.",
      takeaway: "Train when you don't feel like it; the compounding shows up in your 30s.",
    },
    {
      audience: "Leaders",
      lesson: "Public reaction is a tool — use it sparingly.",
      takeaway:
        "Interviews are leverage; deploy them when the timing serves the institution and you.",
    },
    {
      audience: "Operators",
      lesson: "Body is the business.",
      takeaway: "Spend on recovery infrastructure before you spend on lifestyle.",
    },
    {
      audience: "Founders",
      lesson: "Build the personal brand alongside the career.",
      takeaway: "Treat marketing partnerships as long-term equity, not annual campaigns.",
    },
    {
      audience: "Builders",
      lesson: "Late-career chapters reset the narrative.",
      takeaway: "Pick the league or geography that grows your second decade of relevance.",
    },
  ],
  quotes: [
    { text: "Your love makes me strong, your hate makes me unstoppable." },
    { text: "Talent without working hard is nothing." },
    { text: "I'm living a dream I never want to wake up from." },
    { text: "I don't have to show anything to anyone. There is nothing to prove." },
    { text: "The minute you start to be satisfied, the minute things start to go downhill." },
  ],
  sampleQuestions: [
    "How does Ronaldo sustain elite performance into his late 30s?",
    "What did Sir Alex Ferguson teach him at Manchester United?",
    "Why did he move to Saudi Arabia after Europe?",
    "How does he build and protect the CR7 brand?",
    "What can leaders learn from his training discipline?",
  ],
  featured: false,
};

export default cristianoRonaldo;
