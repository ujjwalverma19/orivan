import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-roger-federer.webp";

const rogerFederer: PersonInput = {
  slug: "roger-federer",
  name: "Roger Federer",
  title: "20-time Grand Slam Tennis Champion",
  summary:
    "The Swiss craftsman who turned a teenage racket-thrower into the most elegant athlete of his generation — and stayed in the top of his sport for two decades by making the game look easy.",
  portrait,
  featured: false,
  birthYear: "1981",
  industry: "Sport & Performance",
  country: "Switzerland",
  era: "Modern Tennis (1998–2022)",
  companies: [
    "Team8",
    "RF Brand",
    "Laver Cup",
    "Uniqlo (athlete partner)",
    "On Running (investor)",
  ],
  roles: ["Athlete", "Entrepreneur", "Philanthropist", "Brand Builder"],
  tags: ["tennis", "longevity", "craft", "discipline", "elegance", "consistency", "brand"],
  keyAchievement:
    "Won 20 Grand Slam singles titles and held the world No. 1 ranking for a record 237 consecutive weeks while redefining tennis as a craft.",
  timeline: [
    {
      year: "1981",
      title: "Born in Basel, Switzerland",
      story:
        "Father Swiss, mother South African; raised speaking Swiss German with an English-speaking mother.",
      challenge: "Growing up between cultures and identities.",
      lesson: "Multiple roots make a portable career possible.",
    },
    {
      year: "1995",
      title: "Joined Swiss National Tennis Centre",
      story: "Moved to Ecublens at 14, living away from family in French-speaking Switzerland.",
      challenge:
        "Severe homesickness; he was the only German speaker and openly cried during the first months.",
      lesson: "The early discomfort of leaving home is the cost of a real apprenticeship.",
    },
    {
      year: "1998",
      title: "Won Wimbledon Junior, turned pro",
      story: "Took the boys' singles and doubles at Wimbledon and turned professional at 17.",
      challenge: "Transitioning from junior dominance to the brutal pro tour grind.",
      lesson: "Junior success is a credential, not a career. Start over the day you turn pro.",
    },
    {
      year: "2001",
      title: "Beat Pete Sampras at Wimbledon",
      story:
        "Defeated the seven-time champion in the fourth round in a five-set classic — his arrival on the global stage.",
      challenge: "Believing he belonged with the greatest player in the sport's history.",
      lesson: "One defining win against the right opponent rewrites your self-image.",
    },
    {
      year: "2003",
      title: "Won first Grand Slam at Wimbledon",
      story:
        "Won his first major in straight sets and credited the years of grass-court apprenticeship at the All England Club.",
      challenge: "Carrying the favorite's pressure for the first time in a major final.",
      lesson: "The first one breaks the dam. Subsequent ones become a system.",
    },
    {
      year: "2004",
      title: "Reached world No. 1",
      story:
        "Took the top ranking in February 2004 after winning the Australian Open; held it for 237 consecutive weeks, a record.",
      challenge: "Sustaining motivation at the top without an obvious peer pushing him.",
      lesson: "The hardest competition is internal once you're already #1.",
    },
    {
      year: "2008",
      title: "Lost the Wimbledon final to Nadal",
      story:
        "Lost the greatest match in tennis history 9–7 in the fifth set, ending his five-year Wimbledon reign.",
      challenge: "Absorbing the most painful loss of his career without losing belief.",
      lesson: "Generational rivalries are the best gift a sport gives an athlete.",
    },
    {
      year: "2009",
      title: "Completed the Career Grand Slam at Roland Garros",
      story:
        "Won his only French Open over Robin Söderling after Nadal was upset, completing all four majors.",
      challenge: "Closing the one gap his critics used against him.",
      lesson: "Sometimes the door only opens when someone else clears the room.",
    },
    {
      year: "2013",
      title: "Hit a slump and ranking collapse",
      story: "Suffered a back injury and dropped to #8; many wrote his career off at age 32.",
      challenge: "Restructuring his team, coach, and racket while ego was bruised.",
      lesson: "Reinvention starts the moment you accept the old version isn't coming back.",
    },
    {
      year: "2017",
      title: "Won Australian Open at 35 after six-month layoff",
      story:
        "Returned from knee surgery and won in Melbourne against Nadal in five sets — one of sport's great comebacks.",
      challenge: "Convincing his body and his coaching team that a major was still possible.",
      lesson: "Long breaks can reset what daily grinding cannot.",
    },
    {
      year: "2019",
      title: "Co-founded On Running investment",
      story:
        "Became a major equity partner in the Swiss running shoe brand, eventually worth over a billion dollars in his stake.",
      challenge: "Choosing the right post-career business that aligned with his identity.",
      lesson: "Endorse only what you would buy yourself. Equity follows authenticity.",
    },
    {
      year: "2022",
      title: "Retired at the Laver Cup",
      story:
        "Played his final professional match in doubles with Rafael Nadal in London; both wept on court.",
      challenge: "Ending a career on his terms while his body forced the timing.",
      lesson: "Choose how you leave. The exit is part of the legacy.",
    },
  ],
  skills: [
    {
      name: "Footwork",
      description:
        "Moved to the ball before most players had read it — the foundation of his apparent effortlessness.",
      developed:
        "Years of one-on-one drills with coach Peter Lundgren and physical trainer Pierre Paganini.",
    },
    {
      name: "Variety",
      description:
        "Played slice, topspin, serve-and-volley, and baseline with equal fluency in the same match.",
      developed:
        "Refused to specialize as a junior; played every surface and every style throughout adolescence.",
    },
    {
      name: "Composure Under Pressure",
      description:
        "Held his serve at break point and converted big moments more often than statistics could predict.",
      developed:
        "Beat a teenage temper through deliberate work with a sports psychologist after junior career meltdowns.",
    },
    {
      name: "Brand Self-Awareness",
      description:
        "Built a global brand by being consistently gracious on camera and aligned with luxury partners.",
      developed:
        "Decades of media training and tight collaboration with agent Tony Godsick at IMG and later Team8.",
    },
    {
      name: "Longevity Management",
      description:
        "Played a 24-year pro career by managing his schedule, surface choices, and recovery obsessively.",
      developed:
        "Built a team — coach, physio, agent, family — around protecting his body and mind, not maximizing tournaments.",
    },
    {
      name: "Generosity in Defeat",
      description:
        "Conceded matches with public grace that protected his rivals' careers and his own brand.",
      developed: "Modeled on Stefan Edberg and shaped by his own teenage struggles with composure.",
    },
    {
      name: "Team Building",
      description:
        "Surrounded himself with the same small group for decades — coaches, agent, wife, trainer.",
      developed:
        "Hired slowly, fired almost never; treated team as family rather than service providers.",
    },
  ],
  failures: [
    {
      title: "Junior temper tantrums (1993–1996)",
      context:
        "Famous for throwing rackets and self-deprecating outbursts that worried coaches about his career prospects.",
      recovery:
        "Worked deliberately on emotional regulation; by 2003 he was almost expressionless on court.",
      lesson: "The temperament problem you fix at 16 is the asset you compound at 36.",
    },
    {
      title: "2008 Wimbledon final loss to Nadal",
      context:
        "Lost the most famous match of the modern era in five sets, ending his five-Wimbledon streak.",
      recovery:
        "Won the next year's French Open and three more Wimbledons; treated Nadal as fuel, not obstacle.",
      lesson: "The defining loss often unlocks a level your wins never demanded.",
    },
    {
      title: "2013 ranking collapse",
      context:
        "Dropped to world No. 8 with back issues; commentators declared his peak years over at 32.",
      recovery:
        "Switched coaches to Stefan Edberg, adopted a larger racket head, and won three more majors after 35.",
      lesson: "Mid-career reinvention is real when you change tools and team together.",
    },
    {
      title: "2016 knee surgery and lost season",
      context:
        "Tore his meniscus running a bath for his daughters; missed Wimbledon and most of the year.",
      recovery:
        "Used the six-month break to retrain his body and game; came back to win the 2017 Australian Open at 35.",
      lesson: "Forced rest can reveal the version of you that was buried under the schedule.",
    },
  ],
  books: [
    {
      title: "The Roger Federer Story: Quest for Perfection",
      author: "René Stauffer",
      note: "The most thorough biography, written with extensive access to family and early coaches.",
    },
    {
      title: "Roger Federer: Phenomenon",
      author: "Michael Mewshaw",
      note: "A literary portrait of the late-career Federer phenomenon.",
    },
    {
      title: "Open",
      author: "Andre Agassi",
      note: "Federer recommended Agassi's memoir as the truest account of a tennis career from the inside.",
    },
    {
      title: "The Inner Game of Tennis",
      author: "W. Timothy Gallwey",
      note: "Foundational mental-game text every elite player engages with at some point.",
    },
    {
      title: "Federer",
      author: "Doris Henkel",
      note: "Photographic and biographical volume covering his career with rare on-court access.",
    },
  ],
  influences: [
    {
      name: "Pete Sampras",
      note: "Childhood idol whose seven Wimbledon titles set Federer's earliest career target.",
    },
    {
      name: "Stefan Edberg",
      note: "Boyhood favorite for his calm court demeanor; later joined Federer's coaching team in 2014.",
    },
    {
      name: "Peter Carter (coach)",
      note: "Australian coach who shaped his game until Carter's death in 2002 — Federer credits him as the foundation.",
    },
    {
      name: "Mirka Federer (wife)",
      note: "Former tour player who became his most trusted advisor on schedule, family, and timing.",
    },
    {
      name: "Tony Godsick",
      note: "Long-time agent and co-founder of Team8 who shaped his business career and the Laver Cup.",
    },
    {
      name: "Pierre Paganini",
      note: "Physical trainer of 20+ years whose conditioning programs underpinned his longevity.",
    },
  ],
  videoIds: [
    "federer-dartmouth-commencement-2024",
    "federer-60-minutes-interview",
    "federer-trevor-noah-2018",
    "federer-laver-cup-retirement-2022",
    "federer-wimbledon-2017-victory-interview",
  ],
  decisions: [
    {
      title: "Leaving home at 14 for the national training center",
      why: "Believed the gap between Swiss club tennis and elite tennis required full immersion.",
      risk: "High",
      outcome: "Built the technical foundation that produced his junior Wimbledon title.",
      impact: "Modeled the early-immersion path now standard in elite Swiss sport.",
    },
    {
      title: "Working on his temper deliberately (1997–2000)",
      why: "Knew his game would never reach its ceiling while he was throwing rackets.",
      risk: "Low",
      outcome: "Became the calmest player of his generation — and the most marketable.",
      impact: "Turned a liability into the signature trait of his brand.",
    },
    {
      title: "Switching to a larger racket head (2014)",
      why: "Old 90 sq. inch racket head couldn't generate the power needed against bigger hitters.",
      risk: "High",
      outcome: "Within three years won the Australian Open and Wimbledon back-to-back.",
      impact: "Proved late-career technical reinvention works when ego is set aside.",
    },
    {
      title: "Hiring Stefan Edberg as coach (2014)",
      why: "Wanted aggressive serve-and-volley tactics to shorten points and protect his body.",
      risk: "Medium",
      outcome: "Returned to world No. 2 and won three more majors after 35.",
      impact: "Re-framed coaching changes as upgrades, not panic moves.",
    },
    {
      title: "Taking equity in On Running (2019)",
      why: "Wanted post-career business aligned with Swiss roots, not just an endorsement.",
      risk: "Medium",
      outcome: "Stake reportedly worth $300M+ after On's 2021 IPO.",
      impact: "Set the new template for elite athlete equity deals.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Effortlessness is the result of effort.",
      takeaway: "Twenty thousand hours hidden behind every shot that looks easy.",
    },
    {
      audience: "Performers",
      lesson: "Master your temperament before your technique.",
      takeaway: "Talent caps out where emotion takes over.",
    },
    {
      audience: "Long-career professionals",
      lesson: "Reinvent the tool, the team, and the schedule together.",
      takeaway: "One change rarely sticks — change the whole system at once.",
    },
    {
      audience: "Anyone",
      lesson: "Effort is a craft you can fall in love with.",
      takeaway: "Federer: 'Easy is an illusion.' Embrace the process — it's the actual reward.",
    },
    {
      audience: "Leaders",
      lesson: "Lose well in public.",
      takeaway: "Your worst moments shape your brand more than your best.",
    },
    {
      audience: "Brand builders",
      lesson: "Endorse only what you'd buy yourself.",
      takeaway: "Long-term commercial value follows authentic alignment.",
    },
    {
      audience: "Founders",
      lesson: "Pick a small team and keep them for decades.",
      takeaway: "Continuity compounds. Constant churn destroys trust capital.",
    },
  ],
  quotes: [
    {
      text: "Easy is an illusion. Effort is. Effort gets you on the court.",
      context: "Dartmouth Commencement",
      year: "2024",
    },
    {
      text: "Perfection is impossible. In the 1,526 singles matches I played in my career, I won almost 80% of those matches. Now, I have a question for you. What percentage of the points do you think I won in those matches? Only 54%.",
    },
    { text: "I fear no one, but respect everyone." },
    {
      text: "You always want to win. That is why you play tennis, because you love the sport and try to be the best you can at it.",
    },
    {
      text: "When you do something best in life, you don't really want to give that up — and for me it's tennis.",
    },
    { text: "It's nice to be important, but it's more important to be nice." },
    { text: "Negative thinking is going to defeat you before anyone else has the chance." },
  ],
  sampleQuestions: [
    "How did Roger Federer stay consistent for so long?",
    "How did Federer beat his teenage temper problem?",
    "What did Federer change to win the 2017 Australian Open at 35?",
    "How did Federer build his business empire around On Running?",
    "What can athletes learn from Federer's 2008 Wimbledon loss?",
    "Why does Federer's career look so effortless?",
    "How did Federer manage his team and longevity?",
  ],
};

export default rogerFederer;
