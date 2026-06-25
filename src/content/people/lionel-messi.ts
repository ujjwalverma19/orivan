import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-lionel-messi.webp";

const lionelMessi: PersonInput = {
  slug: "lionel-messi",
  name: "Lionel Messi",
  title: "Eight-time Ballon d'Or, World Cup champion",
  summary:
    "A growth-hormone-deficient Argentinian boy whose family relocated continents so he could play football at La Masia, and who grew into the most decorated player in the sport's history.",
  portrait,
  birthYear: "1987",
  industry: "Professional Football",
  country: "Argentina / Spain / United States",
  era: "Modern Football (2004–present)",
  companies: ["FC Barcelona", "Paris Saint-Germain", "Inter Miami CF", "Argentina National Team"],
  roles: ["Athlete", "Captain"],
  tags: [
    "football",
    "soccer",
    "ballon-dor",
    "world-cup",
    "argentina",
    "barcelona",
    "longevity",
    "genius",
  ],
  keyAchievement:
    "Eight Ballon d'Or awards, four UEFA Champions League titles, and the 2022 FIFA World Cup.",
  timeline: [
    {
      year: "1987",
      title: "Born in Rosario, Argentina",
      story:
        "Son of a steelworker father and cleaner mother; played from age 5 for the local Grandoli club.",
      challenge: "Working-class family in industrial Rosario.",
      lesson: "World-class talent often comes from places without world-class infrastructure.",
    },
    {
      year: "1997",
      title: "Diagnosed with growth hormone deficiency",
      story: "Required nightly injections costing $900/month — beyond his family's means.",
      challenge: "Local clubs in Argentina couldn't or wouldn't pay for treatment.",
      lesson: "Medical access often decides who reaches their genetic potential.",
    },
    {
      year: "2000",
      title: "Tried out for FC Barcelona",
      story: "Carles Rexach signed his contract on a napkin in a tennis-club bar in Barcelona.",
      challenge: "Family had to relocate to Spain at huge personal cost.",
      lesson: "Sometimes the institution that says yes commits with a napkin.",
    },
    {
      year: "2004",
      title: "First-team debut at 17",
      story: "Played his first match for Barcelona's senior squad against Espanyol.",
      challenge: "Adjusting to the senior level at 17 in one of Europe's biggest clubs.",
      lesson: "Academy systems give athletes a 10-year head start on adapting to adults.",
    },
    {
      year: "2009",
      title: "First Ballon d'Or and treble",
      story: "Won UCL, La Liga, Copa del Rey and his first Ballon d'Or in one season.",
      challenge: "Carrying the weight of being the next-generation #10.",
      lesson: "Generational players are validated by titles, not just stats.",
    },
    {
      year: "2014",
      title: "Lost World Cup Final to Germany",
      story: "Argentina lost 1–0 in extra time at the Maracanã.",
      challenge: "Carrying Argentina's hopes alone for nearly a decade.",
      lesson: "Some defeats compound into the motivation for the eventual title.",
    },
    {
      year: "2015",
      title: "Second treble with Barcelona",
      story: "Won UCL, La Liga, Copa del Rey under Luis Enrique with the MSN front three.",
      challenge: "Sharing the spotlight with Neymar and Suárez.",
      lesson: "The best players amplify teammates rather than diminish them.",
    },
    {
      year: "2016",
      title: "Announced retirement from Argentina",
      story: "Walked away from the national team after a Copa America final loss; later returned.",
      challenge: "Coping with public criticism in Argentina.",
      lesson: "Strategic withdrawals can renew commitment.",
    },
    {
      year: "2021",
      title: "Left Barcelona for PSG",
      story:
        "Barcelona couldn't register him under La Liga financial rules; tearful press conference.",
      challenge: "Forced to leave the club after 21 years.",
      lesson: "Institutions sometimes fail their own legends; the player still has to move.",
    },
    {
      year: "2022",
      title: "Won the FIFA World Cup",
      story: "Captained Argentina to a 4–2 penalty shootout win over France.",
      challenge: "Performing under generational pressure at his fifth World Cup.",
      lesson: "Some titles only arrive when the career has earned them through losses.",
    },
    {
      year: "2023",
      title: "Joined Inter Miami CF",
      story: "Signed for MLS and helped lift the Leagues Cup in his first months.",
      challenge: "Re-architecting a career around legacy growth rather than peak titles.",
      lesson: "Late-career moves can rebuild fan markets and institutional momentum.",
    },
    {
      year: "2024",
      title: "Won Copa America again",
      story: "Captained Argentina to a second consecutive major international title.",
      challenge: "Sustaining international form at 37.",
      lesson: "Veteran captains transfer mentality more than minutes.",
    },
  ],
  skills: [
    {
      name: "Spatial Awareness",
      description: "Reads gaps and runs that defenders can't anticipate.",
      developed: "20+ years of structured La Masia training in tight-space play.",
    },
    {
      name: "Left-Footed Dribbling",
      description: "Carries the ball at speed through traffic with minimal touches.",
      developed: "Daily 1v1 reps from age 5 onward.",
    },
    {
      name: "Set-Piece Mastery",
      description: "Top free-kick taker of his era.",
      developed: "Hours of after-training reps with goalkeepers.",
    },
    {
      name: "Game Reading",
      description: "Walks early in matches to identify opponent weaknesses.",
      developed: "Pep Guardiola era at Barcelona codified the approach.",
    },
    {
      name: "Quiet Leadership",
      description: "Leads by example rather than verbal direction.",
      developed: "Matured into captaincy slowly through repeated international finals.",
    },
    {
      name: "Body Maintenance",
      description:
        "Built an extraordinary 20-year career through nutrition, biomechanics and rest.",
      developed: "Partnership with nutritionist Giuliano Poser and personal medical team.",
    },
  ],
  failures: [
    {
      title: "2014 World Cup Final loss",
      context: "Lost 1–0 to Germany in extra time despite Golden Ball.",
      recovery:
        "Returned to lead Argentina through three more major tournaments before winning 2022.",
      lesson: "The loss that hurts most often funds the title that defines you.",
    },
    {
      title: "Barcelona exit (2021)",
      context: "Forced out by Barcelona's financial collapse despite wanting to stay.",
      recovery: "Joined PSG, then Inter Miami; rebuilt career on different terms.",
      lesson: "Some chapters end because institutions fail, not because you do.",
    },
    {
      title: "2016 Copa America Final",
      context: "Missed his penalty in the shootout; briefly retired from Argentina.",
      recovery: "Returned to win Copa America 2021 and the World Cup.",
      lesson: "Public failures can be re-narrated by later triumphs.",
    },
  ],
  books: [
    {
      title: "Messi: The Inside Story of the Boy Who Became a Legend",
      author: "Luca Caioli",
      note: "Definitive biography covering his rise from Rosario to Barcelona.",
    },
    {
      title: "Messi vs. Ronaldo",
      author: "Jonathan Clegg & Joshua Robinson",
      note: "Cross-portrait of the two defining stars of the era.",
    },
    {
      title: "Pep Guardiola: Another Way of Winning",
      author: "Guillem Balagué",
      note: "Insight into the coach who shaped his game.",
    },
    {
      title: "The Barcelona Way",
      author: "Damian Hughes",
      note: "Cultural and leadership lessons from his club.",
    },
  ],
  influences: [
    { name: "Jorge Messi (his father)", note: "Long-time manager and family anchor." },
    { name: "Carles Rexach", note: "Barcelona scout who signed the napkin contract." },
    { name: "Pep Guardiola", note: "Coach who built Barcelona's tactical system around him." },
    {
      name: "Xavi Hernández and Andrés Iniesta",
      note: "Midfield partners who shaped his understanding of space.",
    },
    { name: "Diego Maradona", note: "National hero whose legacy he carried at Argentina." },
  ],
  videoIds: [
    "messi-fifa-doc-trailer",
    "messi-tata-martino-interview",
    "messi-world-cup-2022-highlights",
    "messi-la-masia-doc",
  ],
  decisions: [
    {
      title: "Move family to Barcelona at 13",
      why: "Local clubs wouldn't fund his hormone treatment.",
      risk: "Extreme",
      outcome: "Joined La Masia and built his career.",
      impact: "Set up the most successful player-club partnership in football history.",
    },
    {
      title: "Stay at Barcelona through difficult years",
      why: "Loyalty to the academy that raised him.",
      risk: "Low",
      outcome: "Won 35 trophies before leaving.",
      impact: "Modeled long-tenure loyalty rare in modern football.",
    },
    {
      title: "Return after retiring from Argentina",
      why: "Believed the national team still had a window.",
      risk: "Medium",
      outcome: "Won Copa America 2021 and World Cup 2022.",
      impact: "Completed the only trophy missing from his career.",
    },
    {
      title: "Join Inter Miami in MLS",
      why: "Wanted growth in a new market and family stability.",
      risk: "Medium",
      outcome: "Restructured American football and trophy cabinet in MLS.",
      impact: "Modeled late-career legacy moves for global stars.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Body maintenance is career maintenance.",
      takeaway: "Invest in nutrition and biomechanics in your early 20s, not your 30s.",
    },
    {
      audience: "Operators",
      lesson: "Walk the field before you run.",
      takeaway: "Spend early time observing the system; act decisively when you've found the gap.",
    },
    {
      audience: "Leaders",
      lesson: "Lead by behavior, not volume.",
      takeaway: "Consistency over decades is the loudest signal.",
    },
    {
      audience: "Founders",
      lesson: "Loyalty has limits.",
      takeaway:
        "Stay as long as the institution honors what it promised; leave cleanly when it doesn't.",
    },
    {
      audience: "Builders",
      lesson: "Long arcs need stage changes.",
      takeaway: "Plan distinct chapters; the same setting can't carry you for 30 years.",
    },
  ],
  quotes: [
    { text: "You have to fight to reach your dream. You have to sacrifice and work hard for it." },
    { text: "I prefer to win titles with the team ahead of individual awards." },
    {
      text: "I start early and I stay late, day after day, year after year. It took me 17 years and 114 days to become an overnight success.",
    },
    { text: "The best decisions aren't made with your mind, but with your instinct." },
    { text: "There is no pressure when you're making a dream come true." },
  ],
  sampleQuestions: [
    "How did La Masia shape Messi's playing style?",
    "What changed in his career after 2014's World Cup loss?",
    "Why did he leave Barcelona for PSG?",
    "How does he sustain peak performance into his late 30s?",
    "What can leaders learn from his quiet captaincy style?",
  ],
  featured: false,
};

export default lionelMessi;
