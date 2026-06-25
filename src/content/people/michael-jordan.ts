import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-michael-jordan.webp";

const michaelJordan: PersonInput = {
  slug: "michael-jordan",
  name: "Michael Jordan",
  title: "Six-time NBA champion, global brand pioneer",
  summary:
    "A North Carolina teenager cut from his high-school varsity team who became basketball's defining player and proved that an athlete could be a multi-billion-dollar global brand.",
  portrait,
  birthYear: "1963",
  industry: "Professional Basketball & Sports Business",
  country: "United States",
  era: "Golden NBA Era (1984–2003)",
  companies: ["Chicago Bulls", "Washington Wizards", "Charlotte Hornets", "Jordan Brand", "Nike"],
  roles: ["Athlete", "Owner", "Brand Founder"],
  tags: ["athlete", "basketball", "nba", "longevity", "competitive", "branding", "owner", "icon"],
  keyAchievement:
    "Six NBA championships, five MVPs, and the most lucrative athlete-brand partnership of all time.",
  timeline: [
    {
      year: "1963",
      title: "Born in Brooklyn, raised in Wilmington, NC",
      story:
        "Son of an equipment-supervisor father and bank-teller mother; the family moved to North Carolina when he was an infant.",
      challenge: "Middle child trying to compete with older brother Larry.",
      lesson: "Sibling rivalry calibrates competitive intensity early.",
    },
    {
      year: "1978",
      title: "Cut from varsity sophomore year",
      story:
        "Coach Clifton Herring placed him on JV; the moment became Jordan's lifelong motivation story.",
      challenge: "Public rejection at 15.",
      lesson: "A rejection used as fuel outlasts the rejection itself.",
    },
    {
      year: "1982",
      title: "Hit the winning shot at NCAA Final",
      story: "Sank the game-winner as a freshman at North Carolina vs. Georgetown.",
      challenge: "Being the freshman trusted to take the last shot.",
      lesson:
        "Coaches who trust freshmen create stars; players who deliver in those moments compound forever.",
    },
    {
      year: "1984",
      title: "Drafted third by the Chicago Bulls",
      story:
        "Picked behind Hakeem Olajuwon and Sam Bowie; signed Nike deal worth $500K/year — unprecedented for a rookie.",
      challenge: "Joining a struggling franchise as the face of its turnaround.",
      lesson: "Sometimes the third pick is the franchise pick.",
    },
    {
      year: "1985",
      title: "Air Jordan launches",
      story: "First sneaker dropped to record sales despite NBA fines for non-compliant colors.",
      challenge: "Convincing Adidas-dominant league to share the marketing.",
      lesson: "A signature product with the right partner can outlast a playing career.",
    },
    {
      year: "1991",
      title: "First NBA championship",
      story: "Beat the Los Angeles Lakers after seven seasons of playoff disappointment.",
      challenge: "Carrying a franchise to the title for the first time.",
      lesson: "The first championship is the proof; the second is the dynasty signal.",
    },
    {
      year: "1993",
      title: "Father James Jordan murdered",
      story:
        "Stunned by his father's death; abruptly retired from basketball to play minor-league baseball.",
      challenge: "Grieving in public while changing sports.",
      lesson: "Loss can rewrite even the most successful career mid-stream.",
    },
    {
      year: "1995",
      title: "Returned to the NBA",
      story: "Came back with the fax-message 'I'm back.'",
      challenge: "Rebuilding chemistry with a team that had moved on.",
      lesson: "Re-entries require humility before they require dominance.",
    },
    {
      year: "1996",
      title: "Second three-peat begins",
      story: "Won three consecutive titles in 1996, 1997, and 1998.",
      challenge: "Sustaining a championship culture under coach Phil Jackson.",
      lesson: "Dynasties require operators (Jackson) who can manage the star.",
    },
    {
      year: "1998",
      title: "The Last Shot vs Utah Jazz",
      story:
        "Hit the title-winning shot over Bryon Russell in Game 6 — the final image of his Bulls career.",
      challenge: "Knowing it might be his final game in a Bulls jersey.",
      lesson: "Champions design the exit moment when they can.",
    },
    {
      year: "2010",
      title: "Bought the Charlotte Hornets",
      story: "Became the first former NBA player to be majority owner of a team.",
      challenge: "Running a struggling small-market franchise.",
      lesson: "Player-to-owner transitions need different muscles entirely.",
    },
    {
      year: "2020",
      title: "Became a billionaire largely through Jordan Brand",
      story:
        "Jordan Brand surpassed $5B in revenue; his stake made him one of the wealthiest athletes ever.",
      challenge: "Maintaining brand authenticity decades after retirement.",
      lesson: "The career compounds for as long as the brand is tended.",
    },
  ],
  skills: [
    {
      name: "Competitive Drive",
      description: "Built and maintained a competitive edge that bordered on obsession.",
      developed:
        "Sibling rivalry with brother Larry; sustained through varsity cut and every slight after.",
    },
    {
      name: "Closing Mentality",
      description: "Defined the last-shot, last-quarter, last-game psychology.",
      developed: "Years of high-pressure college and NBA finals reps.",
    },
    {
      name: "Game Film Discipline",
      description: "Reportedly watched opponent film for hours daily.",
      developed: "Bulls scouting routines refined under Phil Jackson and Tex Winter.",
    },
    {
      name: "Brand Authenticity",
      description:
        "Wore his sneakers on court even when fined; co-built Jordan Brand from the floor up.",
      developed: "Decades of partnership with Nike CEO and his agent David Falk.",
    },
    {
      name: "Team Leadership",
      description: "Pushed teammates to a standard they didn't always want.",
      developed: "Modeled after his college coach Dean Smith.",
    },
    {
      name: "Owner Operations",
      description: "Bought, sold and ran an NBA franchise.",
      developed: "Time on the Wizards front office and Hornets ownership.",
    },
  ],
  failures: [
    {
      title: "Baseball career",
      context: "Hit .202 with the Birmingham Barons in 1994.",
      recovery: "Returned to basketball and won three more titles.",
      lesson: "Side bets can clarify which discipline you really belong in.",
    },
    {
      title: "Wizards comeback (2001–03)",
      context: "Played two seasons in Washington; team underperformed despite his individual play.",
      recovery: "Stepped away cleanly and refocused on ownership and brand.",
      lesson: "Late career returns rarely match the original peak — plan the exit accordingly.",
    },
    {
      title: "Hornets ownership struggles",
      context: "Charlotte missed the playoffs in most of his ownership years.",
      recovery: "Sold majority stake in 2023 while keeping a minority position.",
      lesson: "Ownership is a multi-decade operating game; not every championship transfers.",
    },
  ],
  books: [
    {
      title: "Driven from Within",
      author: "Michael Jordan",
      note: "His direct take on competitive drive and personal standards.",
    },
    {
      title: "I Can't Accept Not Trying",
      author: "Michael Jordan",
      note: "Short illustrated book on his attitude toward failure.",
    },
    {
      title: "Eleven Rings",
      author: "Phil Jackson",
      note: "Coach's account of managing Jordan and the Bulls dynasty.",
    },
    {
      title: "The Jordan Rules",
      author: "Sam Smith",
      note: "Inside account of the first-championship Bulls.",
    },
  ],
  influences: [
    { name: "Dean Smith", note: "College coach at UNC who modeled team-first basketball." },
    { name: "Phil Jackson", note: "NBA coach who built the Bulls system around him." },
    { name: "Tex Winter", note: "Architect of the Triangle Offense." },
    {
      name: "James Jordan (his father)",
      note: "Steady early role model whose death reshaped his career arc.",
    },
    { name: "David Falk", note: "Long-time agent who structured the Nike deal." },
  ],
  videoIds: [
    "jordan-last-dance-trailer",
    "jordan-hall-of-fame-2009",
    "jordan-oprah-2005",
    "jordan-1997-flu-game-highlights",
  ],
  decisions: [
    {
      title: "Sign with Nike instead of Adidas",
      why: "Nike offered the largest deal and the autonomy to co-design.",
      risk: "High",
      outcome: "Air Jordan became a $5B-plus brand.",
      impact: "Defined athlete brand-building for the next 40 years.",
    },
    {
      title: "Retire in 1993 to play baseball",
      why: "Honored a promise to his late father.",
      risk: "High",
      outcome: "Two seasons of minor-league play before returning.",
      impact: "Reframed athlete agency over career arcs.",
    },
    {
      title: "Return to NBA in 1995",
      why: "Realized his peak window was closing.",
      risk: "Medium",
      outcome: "Won three more titles between 1996–98.",
      impact: "Created the template for dramatic second-act comebacks.",
    },
    {
      title: "Buy the Hornets in 2010",
      why: "Wanted to own a team rather than be owned by one.",
      risk: "Medium",
      outcome: "Built ownership credibility; sold majority in 2023.",
      impact: "Modeled player-to-owner pathway for retiring superstars.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Hold rejections long enough to use them.",
      takeaway: "Keep a private list of slights; revisit it the night before big competitions.",
    },
    {
      audience: "Operators",
      lesson: "Pick the partner, not just the deal.",
      takeaway: "Equity and co-creation matter more than headline numbers.",
    },
    {
      audience: "Leaders",
      lesson: "Lift teammates to your standard or lose them.",
      takeaway: "Set the standard publicly; deliver on it weekly.",
    },
    {
      audience: "Founders",
      lesson: "Build the brand during the peak.",
      takeaway: "Your scarcity window is the time to ship the product line.",
    },
    {
      audience: "Builders",
      lesson: "Exit deliberately.",
      takeaway: "Design your final season so the last image is what people remember.",
    },
  ],
  quotes: [
    {
      text: "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    },
    { text: "Some people want it to happen, some wish it would happen, others make it happen." },
    { text: "Talent wins games, but teamwork and intelligence win championships." },
    { text: "I can accept failure, everyone fails at something. But I can't accept not trying." },
    { text: "Limits, like fears, are often just an illusion." },
  ],
  sampleQuestions: [
    "How did Jordan use early rejections as motivation?",
    "What made the Nike deal so different at the time?",
    "Why did he retire to play baseball?",
    "What's his framework for handling failure?",
    "How does Jordan Brand still grow decades after retirement?",
  ],
  featured: false,
};

export default michaelJordan;
