import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-serena-williams.webp";

const serenaWilliams: PersonInput = {
  slug: "serena-williams",
  name: "Serena Williams",
  title: "23-time Grand Slam champion",
  summary:
    "A Compton, California prodigy coached by her father on public courts who became the most decorated tennis player of the Open era — and rewrote what a global athlete brand can look like.",
  portrait,
  birthYear: "1981",
  industry: "Professional Tennis",
  country: "United States",
  era: "Modern Tennis (1995–2022)",
  companies: ["Women's Tennis Association", "Serena Ventures", "Serena Williams Fund"],
  roles: ["Athlete", "Investor", "Founder"],
  tags: [
    "athlete",
    "tennis",
    "longevity",
    "champion",
    "comeback",
    "investing",
    "motherhood",
    "icon",
  ],
  keyAchievement: "Won 23 Grand Slam singles titles — the most of any player in the Open era.",
  timeline: [
    {
      year: "1981",
      title: "Born in Saginaw, Michigan",
      story:
        "Youngest of five sisters; family moved to Compton, California when she was a toddler.",
      challenge: "Growing up in a neighborhood without traditional tennis infrastructure.",
      lesson: "The best origin stories often come from places nobody is recruiting from.",
    },
    {
      year: "1985",
      title: "Started training under father Richard Williams",
      story:
        "Richard self-taught from books and videos; trained Serena and Venus on cracked public courts.",
      challenge: "No coach, no academy, no peer competition.",
      lesson: "A parent with a written plan can outperform an institution without one.",
    },
    {
      year: "1991",
      title: "Family moved to Florida",
      story: "Trained at Rick Macci's academy before going independent again.",
      challenge: "Entering elite junior tennis as outsiders.",
      lesson: "Use elite institutions for what they offer, then leave when they stop adding.",
    },
    {
      year: "1995",
      title: "Turned professional at 14",
      story:
        "Bypassed most of the junior circuit; Richard kept her out of WTA events until he chose.",
      challenge: "Skipping a developmental path most pros considered mandatory.",
      lesson: "Conserving a young athlete's body protects the back half of the career.",
    },
    {
      year: "1999",
      title: "Won first Grand Slam at US Open",
      story: "Beat Martina Hingis in the final at 17.",
      challenge: "Carrying the first Black women's singles Grand Slam in nearly 40 years.",
      lesson: "Breakthroughs carry historical weight along with personal achievement.",
    },
    {
      year: "2003",
      title: "Completed the 'Serena Slam'",
      story: "Held all four major titles simultaneously — non-calendar Grand Slam.",
      challenge: "Maintaining peak across all four surfaces.",
      lesson: "Versatility across conditions is the real test of generational players.",
    },
    {
      year: "2010",
      title: "Severe foot injury and pulmonary embolism",
      story:
        "Stepped on glass at a Munich restaurant; later developed life-threatening blood clots.",
      challenge: "Months out of competition with health scares.",
      lesson: "Champions plan for the body breaking, not just the opponent winning.",
    },
    {
      year: "2015",
      title: "Completed the second Serena Slam",
      story: "Held all four majors again at age 33.",
      challenge: "Recovering form after multiple injuries.",
      lesson: "Second peaks are designed; first peaks happen.",
    },
    {
      year: "2017",
      title: "Won the Australian Open while pregnant",
      story: "Won the title eight weeks pregnant with daughter Olympia.",
      challenge: "Hiding pregnancy from competitors and managing physical changes.",
      lesson: "Some of the deepest performances come with the most personal stakes.",
    },
    {
      year: "2017",
      title: "Near-fatal childbirth complications",
      story: "Suffered pulmonary embolism after C-section; advocated for her own medical care.",
      challenge: "Navigating systemic gaps in Black maternal healthcare.",
      lesson: "Patient advocacy is a survival skill nobody teaches you.",
    },
    {
      year: "2018",
      title: "Founded Serena Ventures",
      story:
        "Made her venture firm public; focused on companies founded by women and people of color.",
      challenge: "Earning credibility in venture as an outsider.",
      lesson: "Build the post-career platform years before you need it.",
    },
    {
      year: "2022",
      title: "Evolved away from tennis at US Open",
      story: "Played her final tournament at the US Open in front of a sold-out Arthur Ashe.",
      challenge: "Choosing the right exit moment publicly.",
      lesson: "Athletes who pick their last match write a better third act.",
    },
  ],
  skills: [
    {
      name: "Power Serving",
      description: "Reset the women's serve speed standard for two decades.",
      developed: "Hundreds of thousands of reps with her father from age 4.",
    },
    {
      name: "Competitive Composure",
      description: "Won 4+ Grand Slam finals from match-point down.",
      developed: "Multiple high-stakes finals against her sister Venus.",
    },
    {
      name: "Comeback Discipline",
      description: "Returned to top form after pregnancies, surgeries, and pulmonary embolism.",
      developed: "Physical-therapy partnership with a long-tenured medical team.",
    },
    {
      name: "Brand Building",
      description: "Built fashion, beauty, and venture brands during peak career.",
      developed: "Decades of partnership work with Nike, IMG, and her own labels.",
    },
    {
      name: "Patient Advocacy",
      description: "Saved her own life by advocating during postpartum complications.",
      developed: "Years of navigating her own medical needs as an elite athlete.",
    },
    {
      name: "Investing Conviction",
      description: "Made over 60 early-stage investments through Serena Ventures.",
      developed: "Personal interest plus a structured pipeline with operating partners.",
    },
  ],
  failures: [
    {
      title: "2018 US Open final controversy",
      context: "Penalized for code violations in a contested final vs Naomi Osaka.",
      recovery: "Took the moment publicly; reflected on the umpire dispute and her own reactions.",
      lesson: "Athletes carry both the trophy and the press cycle that follows.",
    },
    {
      title: "Multiple injury comebacks",
      context: "Foot surgery, blood clots, and post-pregnancy recovery cost years.",
      recovery: "Built a long-term medical team and progressive return-to-play protocols.",
      lesson: "Comebacks are about infrastructure, not willpower.",
    },
    {
      title: "Calendar Slam loss at 2015 US Open",
      context: "Lost the semifinal to Roberta Vinci with the calendar Slam on the line.",
      recovery: "Stepped away briefly, then returned for the 2017 Australian Open title.",
      lesson: "Generational records carry generational pressure — not all of them fall.",
    },
  ],
  books: [
    {
      title: "Queen of the Court",
      author: "Serena Williams",
      note: "Her personal account of competing at the top of the game.",
    },
    {
      title: "On the Line",
      author: "Serena Williams",
      note: "Earlier autobiography covering her childhood and the early Slam years.",
    },
    {
      title: "King Richard (film)",
      author: "Reinaldo Marcus Green",
      note: "Biopic on father Richard Williams's coaching plan.",
    },
    {
      title: "Open",
      author: "Andre Agassi",
      note: "Recommended pro-tennis memoir; she's spoken about its honesty.",
    },
  ],
  influences: [
    {
      name: "Richard Williams (her father)",
      note: "Coach, manager, and architect of her career plan.",
    },
    { name: "Oracene Price (her mother)", note: "Co-coach; structured the family's discipline." },
    { name: "Venus Williams (her sister)", note: "Greatest sparring partner of her career." },
    { name: "Patrick Mouratoglou", note: "Long-time coach during her post-2012 dominance." },
    { name: "Billie Jean King", note: "Mentor on the business and politics of women's tennis." },
  ],
  videoIds: [
    "serena-being-serena-2018",
    "serena-ted-2017",
    "serena-david-letterman-2019",
    "serena-us-open-2002",
  ],
  decisions: [
    {
      title: "Skip much of the junior circuit",
      why: "Father believed early professional play burned out women's tennis careers.",
      risk: "Medium",
      outcome: "Entered the WTA fresh and physically protected.",
      impact: "Set a template other elite parents have copied since.",
    },
    {
      title: "Return after Olympia's birth",
      why: "Believed motherhood and elite tennis weren't mutually exclusive.",
      risk: "High",
      outcome: "Reached four more Slam finals after returning.",
      impact: "Changed expectations for athlete-mothers in pro sports.",
    },
    {
      title: "Found Serena Ventures publicly",
      why: "Wanted to direct capital to underrepresented founders.",
      risk: "Low",
      outcome: "Built a fund with returns and a focused thesis.",
      impact: "Modeled athlete-led venture investing.",
    },
    {
      title: "Choose her own retirement timing",
      why: "Wanted to end on her terms at the US Open.",
      risk: "Low",
      outcome: "Sold-out Arthur Ashe celebrated her last match.",
      impact: "Demonstrated dignified exit for generational athletes.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Plan the body, not just the career.",
      takeaway: "Hire medical infrastructure five years before you think you need it.",
    },
    {
      audience: "Founders",
      lesson: "Build the second platform during the first peak.",
      takeaway: "The next act needs years of compounding before it goes live.",
    },
    {
      audience: "Operators",
      lesson: "Advocate for yourself with experts.",
      takeaway: "Knowing your own data is the only way to be heard by professionals.",
    },
    {
      audience: "Parents",
      lesson: "Write a plan and stick to it.",
      takeaway: "Coaching consistency outperforms institutional prestige.",
    },
    {
      audience: "Leaders",
      lesson: "Public losses can deepen public trust.",
      takeaway: "Speak openly about defeat; vulnerability extends the brand.",
    },
  ],
  quotes: [
    {
      text: "Luck has nothing to do with it. I have spent many, many hours, countless hours, on the court working.",
    },
    { text: "Every woman's success should be an inspiration to another." },
    {
      text: "I really think a champion is defined not by their wins but by how they can recover when they fall.",
    },
    { text: "Pressure is a privilege." },
    { text: "If anything, you could say I'm loud about loving myself." },
  ],
  sampleQuestions: [
    "How did Richard Williams coach Serena from public courts to 23 Slams?",
    "What's Serena's approach to comebacks after injuries?",
    "Why did she found Serena Ventures during her playing career?",
    "How did she balance motherhood and tennis?",
    "What can founders learn from her career planning?",
  ],
  featured: false,
};

export default serenaWilliams;
