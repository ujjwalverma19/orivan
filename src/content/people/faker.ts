import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-faker.webp";

const faker: PersonInput = {
  slug: "faker",
  name: "Lee Sang-hyeok (Faker)",
  title: "League of Legends' winningest mid-laner",
  summary:
    "A quiet Seoul teenager who turned solo-queue ranks into a global esports career — winning four World Championships and redefining what an esports professional looks like.",
  portrait,
  birthYear: "1996",
  industry: "Esports",
  country: "South Korea",
  era: "Esports Modern Era (2013–present)",
  companies: ["T1 (SKT T1)", "SK Telecom", "Comcast Spectacor"],
  roles: ["Esports Athlete", "Captain", "Part-Owner", "Brand Ambassador"],
  tags: [
    "esports",
    "league-of-legends",
    "discipline",
    "longevity",
    "champion",
    "korea",
    "mid-laner",
    "icon",
    "loyalty",
  ],
  keyAchievement:
    "Four-time League of Legends World Champion with T1 — the most decorated player in the game's history.",
  timeline: [
    {
      year: "1996",
      title: "Born in Gangseo, Seoul",
      story: "Raised by his father and grandmother; began playing PC games at age 5.",
      challenge: "Shy and introverted; struggled to find his place in school.",
      lesson: "Childhood that points to one game often points to one career.",
    },
    {
      year: "2011",
      title: "Started ranking up in solo queue",
      story:
        "Became one of the highest-ranked players on the Korean ladder under the handle 'GoJeonPa.'",
      challenge: "Balancing high-school studies with 8+ hours of gameplay daily.",
      lesson: "Public ladder play is a meritocracy — the rank can't be faked.",
    },
    {
      year: "2013",
      title: "Joined SK Telecom T1",
      story: "Recruited mid-season to T1's new roster; debuted as a substitute.",
      challenge: "Skipping the traditional academy track to enter top-tier play.",
      lesson: "Sometimes the gatekeeper is the ladder, not the resume.",
    },
    {
      year: "2013",
      title: "First World Championship",
      story: "Won Worlds in Los Angeles in his rookie year against Royal Club.",
      challenge: "Performing on a global stage as a 17-year-old.",
      lesson: "Early peaks demand earlier process discipline to sustain.",
    },
    {
      year: "2015",
      title: "Back-to-back World titles",
      story: "Won Worlds in Berlin after a dominant year sweeping LCK and MSI.",
      challenge: "Carrying the weight of being the consensus best mid-laner.",
      lesson: "Repeat winners design the practice ritual around staying hungry.",
    },
    {
      year: "2016",
      title: "Third World Championship",
      story: "Won at Madison Square Garden against Samsung Galaxy, cementing a dynasty.",
      challenge: "Adapting to multiple game-meta shifts in a single season.",
      lesson: "Long careers in evolving games come from a willingness to relearn the basics.",
    },
    {
      year: "2017",
      title: "Lost the World final to Samsung Galaxy",
      story: "Wept openly on the stage in Beijing; the moment went viral globally.",
      challenge: "Public grief at the highest stakes.",
      lesson: "Letting yourself feel the loss is part of the recovery.",
    },
    {
      year: "2019",
      title: "Drought continues, doubts mount",
      story: "Two more years without a Worlds trophy as the West and China rose.",
      challenge: "Carrying the burden of past greatness while new generations entered the league.",
      lesson: "Legacy buys patience, but only for a while.",
    },
    {
      year: "2020",
      title: "Became part-owner of T1",
      story:
        "Received an equity stake when T1 was restructured under the Comcast and SK Telecom JV.",
      challenge: "Negotiating ownership terms in a new asset class.",
      lesson: "Get equity early in a category nobody knows how to value yet.",
    },
    {
      year: "2022",
      title: "Lost Worlds final to DRX",
      story: "After a fairy-tale run, T1 fell in five games at home in San Francisco.",
      challenge: "Another final, another silver medal.",
      lesson: "Heartbreak in finals is the toll for the chance to win them.",
    },
    {
      year: "2023",
      title: "Fourth World Championship",
      story: "Won Worlds in Seoul a decade after his first title, sweeping Weibo Gaming 3–0.",
      challenge: "Coming back from a wrist injury that sidelined him mid-summer.",
      lesson: "Some careers have a fairy-tale chapter; the boring practice years earned it.",
    },
    {
      year: "2024",
      title: "Fifth World Championship in London",
      story: "Defended the title at the O2 Arena — the only five-time Worlds winner.",
      challenge: "Maintaining elite play into a tenth season.",
      lesson: "Longevity is the rarest achievement in any competitive field.",
    },
  ],
  skills: [
    {
      name: "Mechanical Precision",
      description: "Executes complex champion combos with the fewest wasted actions in the league.",
      developed: "Thousands of hours of solo-queue practice from his early teens.",
    },
    {
      name: "Champion Range",
      description: "Mastered dozens of mid-lane champions across changing metas.",
      developed: "Refusing to specialize in just one playstyle.",
    },
    {
      name: "Emotional Composure",
      description: "Quiet, focused presence on stage; sets the team's tone.",
      developed: "Years of public broadcasts and viral moments of grief and joy.",
    },
    {
      name: "Practice Discipline",
      description:
        "Reportedly the first into the practice room and the last to leave for over a decade.",
      developed: "Korean esports training-house culture, internalized to extreme degree.",
    },
    {
      name: "Shotcalling",
      description:
        "Quiet in-game leadership; reads teamfights and macro windows ahead of the timer.",
      developed: "Years of pairing with veteran junglers and coaches like Kkoma.",
    },
    {
      name: "Mentorship",
      description:
        "Develops younger T1 prospects in scrims; quietly raises an entire roster's level.",
      developed: "Took on a senior role after the 2018 slump forced rebuilding.",
    },
  ],
  failures: [
    {
      title: "2017 World final loss",
      context:
        "Lost to Samsung Galaxy in front of a home Beijing crowd; tears on stage went viral.",
      recovery: "Took criticism in silence; came back to win Worlds in 2023 and 2024.",
      lesson: "Long-term champions absorb the loss without rewriting the system.",
    },
    {
      title: "2018–2019 mid-career slump",
      context: "T1 missed Worlds in 2018; he was widely declared 'past his prime.'",
      recovery: "Reset training; rebuilt the team identity around him and won LCK again.",
      lesson: "Public obituaries are often premature; ignore them and ship the next season.",
    },
    {
      title: "2022 Worlds final loss to DRX",
      context: "After dominating the year, lost 2–3 to an underdog DRX side at home in California.",
      recovery: "Used the loss to refine team protocols; returned and won Worlds 2023.",
      lesson: "Underdogs win finals because favorites stop being underdogs themselves.",
    },
  ],
  books: [
    {
      title: "Atomic Habits",
      author: "James Clear",
      note: "Cited in Korean media interviews about daily routine and 1% improvement.",
    },
    {
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      note: "Recommended in T1 documentary footage about staying motivated.",
    },
    {
      title: "Mindset",
      author: "Carol Dweck",
      note: "Frequently referenced theme in T1 training-house culture.",
    },
    {
      title: "Grit",
      author: "Angela Duckworth",
      note: "Aligns with his decade-long commitment to one organization.",
    },
  ],
  influences: [
    {
      name: "Kkoma (Kim Jeong-gyun)",
      note: "Head coach who developed his early career at SKT T1.",
    },
    {
      name: "Bengi (Bae Seong-woong)",
      note: "Long-time jungle partner; modeled selfless team play.",
    },
    { name: "Wolf (Lee Jae-wan)", note: "Support partner across multiple Worlds titles." },
    { name: "Joe Marsh", note: "T1 CEO who restructured the org and gave him equity." },
    {
      name: "Park Ji-sung",
      note: "Korean football legend cited as a role model for global representation.",
    },
  ],
  videoIds: [
    "faker-tedx-2019",
    "faker-t1-documentary-2023",
    "faker-worlds-2023-final",
    "faker-mbc-news-2024",
    "faker-skt-documentary-2017",
  ],
  decisions: [
    {
      title: "Stay with T1 for over a decade",
      why: "Believed institutional continuity beat individual mobility.",
      risk: "Medium",
      outcome: "Became inseparable from the franchise's identity.",
      impact: "Set a new template for esports player loyalty.",
    },
    {
      title: "Take equity in the org",
      why: "Realized owners capture value players don't.",
      risk: "Low",
      outcome: "Among the first esports player-owners.",
      impact: "Pioneered athlete-equity model in esports.",
    },
    {
      title: "Skip Chinese super-team offers",
      why: "Reported nine-figure offers from LPL teams turned down to remain at T1.",
      risk: "High",
      outcome: "Sacrificed peak earnings for legacy.",
      impact: "Reframed what 'success' means for an esports career.",
    },
    {
      title: "Play through 2023 wrist injury",
      why: "Knew the team needed his leadership for the Worlds run at home.",
      risk: "High",
      outcome: "Won Worlds in Seoul.",
      impact: "Cemented the fairy-tale comeback narrative.",
    },
  ],
  insights: [
    {
      audience: "Esports players",
      lesson: "The ladder is the most honest interview process in any career.",
      takeaway: "Climb solo-queue every season; rank is a moving floor, not a credential.",
    },
    {
      audience: "Operators",
      lesson: "Quiet leadership outlasts loud personalities in a meta-driven game.",
      takeaway: "Let the play speak louder than the personality.",
    },
    {
      audience: "Athletes",
      lesson: "Loyalty to one institution can compound into legacy you can't buy elsewhere.",
      takeaway: "Optimize for the ten-year arc, not the next contract cycle.",
    },
    {
      audience: "Founders",
      lesson: "Equity in an emerging category beats salary in a mature one.",
      takeaway: "Take ownership when the asset class is still being defined.",
    },
    {
      audience: "Young professionals",
      lesson: "Practice is identity, not preparation.",
      takeaway: "Treat your daily reps as who you are, not what you do.",
    },
  ],
  quotes: [
    {
      text: "I want to keep playing as long as I can. Even if I'm not the best, I want to keep playing.",
    },
    { text: "I don't think I've played a perfect game yet." },
    { text: "If you lose, learn. If you win, learn faster." },
    { text: "Being the best is hard. Staying the best is harder." },
    { text: "I trust my teammates. That's how we win." },
  ],
  sampleQuestions: [
    "How do you adapt to a new game meta every few months?",
    "What kept you at T1 for over a decade?",
    "How did you recover from the 2017 final loss?",
    "What does your practice schedule look like?",
    "Why turn down nine-figure offers from China?",
  ],
  featured: false,
};

export default faker;
