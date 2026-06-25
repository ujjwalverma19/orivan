import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-s1mple.webp";

const s1mple: PersonInput = {
  slug: "s1mple",
  name: "Oleksandr Kostyliev (s1mple)",
  title: "Counter-Strike's most-decorated AWPer",
  summary:
    "A Ukrainian teenager who flamed his way through Counter-Strike's pro circuit, was banned and benched repeatedly — and matured into the most statistically dominant player the game has ever seen.",
  portrait,
  birthYear: "1997",
  industry: "Esports",
  country: "Ukraine",
  era: "Modern CS:GO (2014–present)",
  companies: ["Natus Vincere", "Team Liquid", "FaZe Clan"],
  roles: ["Esports Athlete", "AWPer", "Streamer"],
  tags: [
    "esports",
    "counter-strike",
    "csgo",
    "discipline",
    "comeback",
    "aim",
    "awp",
    "champion",
    "resilience",
  ],
  keyAchievement: "Two-time HLTV Player of the Year and Major champion with Natus Vincere.",
  timeline: [
    {
      year: "1997",
      title: "Born in Kyiv, Ukraine",
      story: "Began playing Counter-Strike 1.6 at age 4 on his brother's computer.",
      challenge: "Growing up in post-Soviet Kyiv with limited esports infrastructure.",
      lesson: "Childhood obsession with a single game often becomes the only viable career path.",
    },
    {
      year: "2013",
      title: "First pro contract at 16",
      story: "Joined Courage Gaming and quickly drew attention for hyper-aggressive AWPing.",
      challenge: "Lacking the maturity to manage team conflicts.",
      lesson: "Early talent without emotional skill becomes a public liability.",
    },
    {
      year: "2014",
      title: "Banned twice in one year",
      story: "Received a six-month ESL ban and a VAC for two separate incidents.",
      challenge: "Career almost ended before it started.",
      lesson: "Reputation damage as a teenager can compound for years.",
    },
    {
      year: "2015",
      title: "Joined Team Liquid in North America",
      story: "Moved to the US; learned English and a new team culture.",
      challenge: "Culture and language shock; living abroad alone at 17.",
      lesson: "Forcing yourself into a foreign environment compresses years of growth.",
    },
    {
      year: "2016",
      title: "Lost his first Major final",
      story: "Liquid lost the ESL One Cologne final to SK Gaming.",
      challenge: "Losing on the sport's biggest stage at 18.",
      lesson: "Lost finals teach more than won ones.",
    },
    {
      year: "2016",
      title: "Joined Natus Vincere",
      story: "Returned to a Ukrainian team and began the partnership that would define his career.",
      challenge: "Building chemistry with veterans after a turbulent early career.",
      lesson: "The right institution can rehabilitate even a difficult young star.",
    },
    {
      year: "2018",
      title: "First HLTV Player of the Year",
      story: "Won the sport's MVP award with the highest rating ever recorded at the time.",
      challenge: "Performing every match like a finals.",
      lesson: "Statistical dominance comes from refusing to take any match off.",
    },
    {
      year: "2018",
      title: "Lost FACEIT London Major final",
      story: "Reached the Major final but lost to Astralis in his prime.",
      challenge: "Years of being called the best player without a Major.",
      lesson: "Trophy-less greatness is fragile; closing the championship matters.",
    },
    {
      year: "2021",
      title: "Won the PGL Stockholm Major",
      story: "Captured his first Major title; was named tournament MVP after a near-perfect run.",
      challenge: "Five years of doubts about whether he could ever win the big one.",
      lesson: "The breakthrough comes after enough people have stopped expecting it.",
    },
    {
      year: "2022",
      title: "War in Ukraine",
      story:
        "Russia's invasion forced him and NaVi teammates to relocate; donated and raised funds publicly.",
      challenge: "Competing while his country was under attack.",
      lesson: "Public platforms come with obligations the contract never lists.",
    },
    {
      year: "2023",
      title: "Stepped away from NaVi",
      story: "Took a break from competitive play to consider his future after seven years.",
      challenge: "Letting go of the team identity he'd held for seven years.",
      lesson: "Career sabbaticals are sometimes the most pro decision you can make.",
    },
    {
      year: "2024",
      title: "Joined FaZe Clan",
      story: "Returned to active play on FaZe in an effort to chase a second Major.",
      challenge: "Adapting to a new team culture and the CS2 transition.",
      lesson: "Veterans win again only by humbling themselves to a new system.",
    },
  ],
  skills: [
    {
      name: "AWPing Aim",
      description: "Considered the most mechanically gifted AWPer in CS history.",
      developed: "Hundreds of thousands of deathmatch hours starting at age 4.",
    },
    {
      name: "Clutch Composure",
      description: "Specializes in 1vX situations; the team's designated finisher.",
      developed: "Years of taking blame for losses forced him to take credit for wins.",
    },
    {
      name: "Self-Reinvention",
      description: "Rebuilt his personality and reputation between 18 and 22.",
      developed: "Public failure forced private maturation.",
    },
    {
      name: "Game IQ",
      description: "Reads opponent rotations and economic patterns faster than most coaches.",
      developed: "Years of professional-level study and demo review.",
    },
    {
      name: "Versatility",
      description: "Plays AWP, rifle, and entry-fragger roles at elite level — rare for a star.",
      developed: "Forced flexibility on early teams that lacked roles.",
    },
    {
      name: "Streaming Presence",
      description: "Built one of CS's largest personal brands on Twitch.",
      developed: "Years of broadcasting his solo-queue and demo reviews.",
    },
  ],
  failures: [
    {
      title: "Twin teenage bans",
      context: "Banned twice in 2014 for in-game and behavioral incidents.",
      recovery: "Used the time to grow up off-stream and rebuild his game.",
      lesson: "Forced time away can be the inflection point of a career.",
    },
    {
      title: "Lost multiple Major finals",
      context: "Reached and lost three Major finals before finally winning one in 2021.",
      recovery: "Used each loss to refine team and individual preparation.",
      lesson: "The path to the trophy is paved with finals you don't win.",
    },
    {
      title: "Public feuds with teammates",
      context: "Several mid-career conflicts spilled into press conferences and social media.",
      recovery: "Learned to handle disagreements privately after Zeus's mentorship.",
      lesson: "Internal conflict is normal; public conflict is a tax on the next match.",
    },
  ],
  books: [
    {
      title: "The Inner Game of Tennis",
      author: "W. Timothy Gallwey",
      note: "Cited in interviews about managing nerves in clutch moments.",
    },
    {
      title: "Ego Is the Enemy",
      author: "Ryan Holiday",
      note: "Recommended after his reputation rebuild.",
    },
    {
      title: "Can't Hurt Me",
      author: "David Goggins",
      note: "Referenced in streams about pushing through plateaus.",
    },
    {
      title: "The Obstacle Is the Way",
      author: "Ryan Holiday",
      note: "Cited around the time of his 2021 Major win.",
    },
  ],
  influences: [
    {
      name: "Markeloff (Yegor Markelov)",
      note: "Predecessor at NaVi who modeled long careers in CS.",
    },
    {
      name: "Zeus (Danylo Teslenko)",
      note: "Captain who managed his transition into a leadership role.",
    },
    { name: "Hiko (Spencer Martin)", note: "Mentor from his Team Liquid era in North America." },
    {
      name: "B1ad3 (Andriy Gorodenskyi)",
      note: "Coach who built the 2021 Major-winning system around him.",
    },
    {
      name: "Electronic (Denis Sharipov)",
      note: "Long-time NaVi teammate; modeled professionalism.",
    },
  ],
  videoIds: [
    "s1mple-thoorin-conversation",
    "s1mple-pgl-major-2021",
    "s1mple-faze-debut-2024",
    "s1mple-csgo-documentary-2018",
    "s1mple-hltv-confirmed-2022",
  ],
  decisions: [
    {
      title: "Move to North America at 17",
      why: "Believed a different culture would force emotional growth.",
      risk: "High",
      outcome: "Returned to NaVi a more mature player.",
      impact: "Set the template for player-development sabbaticals in CS.",
    },
    {
      title: "Stay at NaVi for seven years",
      why: "Institutional stability mattered after his early career chaos.",
      risk: "Low",
      outcome: "Built the most decorated solo career in CS.",
      impact: "Proved long-tenure rosters can win in esports.",
    },
    {
      title: "Speak publicly during the war",
      why: "Refused to be silent while his country was attacked.",
      risk: "High",
      outcome: "Built a platform that raised millions for Ukraine.",
      impact: "Modeled responsibility-of-platform for athletes.",
    },
    {
      title: "Take 2023 sabbatical",
      why: "Recognized burnout before it ended his career.",
      risk: "Medium",
      outcome: "Returned focused on FaZe in 2024.",
      impact: "Normalized mid-career breaks in esports.",
    },
  ],
  insights: [
    {
      audience: "Esports players",
      lesson: "Reputation damage at 18 compounds — protect it like an asset.",
      takeaway: "Treat early bans and outbursts as permanent line items on your CV.",
    },
    {
      audience: "Builders",
      lesson: "Forced environment changes accelerate growth more than coaching.",
      takeaway: "If you're stuck, change the city before you change the strategy.",
    },
    {
      audience: "Athletes",
      lesson: "Public platforms come with obligations the contract never lists.",
      takeaway: "Decide what you stand for before the moment forces you to.",
    },
    {
      audience: "Young professionals",
      lesson: "Sabbaticals can extend careers more than another season can.",
      takeaway: "Step away before the body or mind forces you to.",
    },
    {
      audience: "Operators",
      lesson: "Veterans pay tuition every time they join a new team.",
      takeaway: "Hire seniors with humility, not just résumés.",
    },
  ],
  quotes: [
    {
      text: "I want to be remembered as the best — but more than that, as someone who never stopped improving.",
    },
    { text: "Losing teaches you what winning never can." },
    { text: "Talent is the floor. Work ethic is the ceiling." },
    { text: "I am Ukrainian. I will always speak about my country." },
    { text: "Every demo I watch is a chance to find one mistake I keep making." },
  ],
  sampleQuestions: [
    "How did you recover from the early bans?",
    "What did moving to North America teach you?",
    "Why did NaVi work for you when other teams didn't?",
    "How do you prepare for a clutch situation?",
    "Why take a sabbatical at the peak of your career?",
  ],
  featured: false,
};

export default s1mple;
