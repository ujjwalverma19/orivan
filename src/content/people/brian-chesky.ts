import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-chesky.webp";

const brianChesky: PersonInput = {
  slug: "brian-chesky",
  name: "Brian Chesky",
  title: "Co-founder of Airbnb",
  summary:
    "Three air mattresses and a designer's eye that turned strangers into hosts — a founder who treats hospitality as a craft and product as the story.",
  portrait,
  featured: true,
  featuredOrder: 4,
  birthYear: "1981",
  industry: "Hospitality & Marketplaces",
  country: "United States",
  era: "Marketplaces & Platforms (2008–present)",
  companies: ["Airbnb"],
  roles: ["Co-founder", "CEO", "Designer", "Operator"],
  tags: [
    "design",
    "marketplace",
    "trust",
    "founder-mode",
    "brand",
    "hospitality",
    "storytelling",
    "startup",
    "crisis-leadership",
  ],
  keyAchievement: "Built a global marketplace that reshaped how people travel and host.",
  timeline: [
    {
      year: "1981",
      title: "Born in Niskayuna, New York",
      story:
        "Raised by two social workers in upstate New York; obsessive about drawing from age 5.",
      challenge: "Felt out of place in a town that valued sports over art.",
      lesson: "Your obsession is information about your future career.",
    },
    {
      year: "2004",
      title: "Graduated RISD in Industrial Design",
      story: "Studied with Joe Gebbia, his future Airbnb co-founder.",
      challenge: "Couldn't find a design job he loved after graduation.",
      lesson: "School friendships often become the most important career relationships.",
    },
    {
      year: "2007",
      title: "Three air mattresses and a conference",
      story:
        "Couldn't make rent in SF, so he and Gebbia rented out air mattresses to design-conference attendees.",
      challenge: "$1,150 in October rent due; $0 in the bank.",
      lesson: "Solve your own problem first — it's the only one you understand viscerally.",
    },
    {
      year: "2008",
      title: "Founded AirBed & Breakfast",
      story: "Launched the SXSW version, got two bookings, neither were friends.",
      challenge: "Nobody believed strangers would sleep in strangers' homes.",
      lesson: "If your idea sounds crazy, ship it before you finish convincing people.",
    },
    {
      year: "2008",
      title: "Funded by selling cereal boxes",
      story:
        "Made and sold 'Obama O's' and 'Cap'n McCain's' to fund the company through the election.",
      challenge: "Rejected by every investor; $30K in credit card debt.",
      lesson: "Resourcefulness is the founder skill nobody can teach you.",
    },
    {
      year: "2009",
      title: "Joined Y Combinator",
      story:
        "Paul Graham accepted them mainly because of their persistence and the cereal-box story.",
      challenge: "Growth was flat for months despite the YC support.",
      lesson: "Sometimes the asset isn't the metric — it's the proof that you won't quit.",
    },
    {
      year: "2009",
      title: "Do things that don't scale",
      story: "Flew to New York, photographed every listing personally — bookings jumped overnight.",
      challenge: "The unscalable work was painful and slow.",
      lesson: "Founders should do unscalable things until they understand what scale needs to do.",
    },
    {
      year: "2011",
      title: "Reached 1M nights booked",
      story: "Crossed a million nights booked, then a million in a single quarter, then a month.",
      challenge: "Scaling trust between strangers at internet speed.",
      lesson: "Trust is a design problem before it's a technology problem.",
    },
    {
      year: "2020",
      title: "Pandemic almost ended Airbnb",
      story:
        "Bookings fell 80% in 8 weeks. Cut half the staff with extraordinary care, raised emergency debt.",
      challenge: "A travel company in a frozen world.",
      lesson: "How you handle the worst week of the company defines the next decade.",
    },
    {
      year: "2020",
      title: "IPO at $47B",
      story:
        "Went public 7 months after laying off 25% of the company. Stock jumped 112% on day one.",
      challenge: "Convincing the market that travel — and Airbnb — would come back stronger.",
      lesson: "Survive the impossible months; the rest of the market gives you a multiple.",
    },
    {
      year: "2024",
      title: "Founder Mode",
      story: "Reorganized Airbnb into a functional org and stayed close to every product detail.",
      challenge: "Translating a designer's instincts into a 6,000-person operating system.",
      lesson: "Founder mode beats manager mode while the founder still wants to be in the details.",
    },
  ],
  skills: [
    {
      name: "Design Storytelling",
      description:
        "Treats every launch and product update as a narrative with characters, conflict, and resolution.",
      developed:
        "RISD industrial-design training; lifetime of sketching narratives before products.",
    },
    {
      name: "Customer Empathy",
      description: "Personally responds to hosts and guests; runs frequent customer immersions.",
      developed: "Years of in-home stays with real hosts in the early years of Airbnb.",
    },
    {
      name: "Crisis Leadership",
      description:
        "Calm operator during black-swan events — handled the pandemic layoffs as a case study in compassion.",
      developed: "Pressure-tested by 2008, multiple regulatory battles, and Covid simultaneously.",
    },
    {
      name: "Functional Organization",
      description: "Designed Airbnb's operating system around functions, not business units.",
      developed: "Adopted from Steve Jobs' Apple model after deep study and conversations.",
    },
    {
      name: "Hospitality as a Discipline",
      description: "Built training, rituals, and standards that treat hospitality as a craft.",
      developed: "Modeled after Disney, Ritz-Carlton, and his own host visits.",
    },
  ],
  failures: [
    {
      title: "Early investor rejection (2008)",
      context: "Pitched dozens of VCs; almost all said the idea was unworkable.",
      recovery: "Funded the company by selling cereal boxes; stayed alive long enough for YC.",
      lesson: "Resourcefulness is the founder skill nobody can teach you.",
    },
    {
      title: "Trust crisis (2011)",
      context: "A host's home was vandalized; the story went viral and threatened the brand.",
      recovery: "Built the $1M Host Guarantee and a 24/7 trust & safety team.",
      lesson:
        "When trust breaks, over-correct — then design the system that prevents the next break.",
    },
    {
      title: "Pandemic collapse (2020)",
      context: "Travel evaporated overnight; revenue fell 80% in 8 weeks.",
      recovery:
        "Cut 25% of staff with severance, healthcare, equity, and recruiting help — IPO'd 7 months later.",
      lesson: "How you handle the worst week defines the next decade.",
    },
    {
      title: "Experiences (2016 launch)",
      context: "First version of Experiences underperformed and was largely shelved.",
      recovery: "Relaunched in 2024 with stricter curation and host training.",
      lesson: "Launch, learn, retreat, relaunch — pride is not a product strategy.",
    },
  ],
  books: [
    {
      title: "Setting the Table",
      author: "Danny Meyer",
      note: "Foundational text on hospitality as operating strategy.",
    },
    {
      title: "The Art of the Start",
      author: "Guy Kawasaki",
      note: "Early playbook that helped him think about positioning.",
    },
    {
      title: "Becoming Steve Jobs",
      author: "Schlender & Tetzeli",
      note: "Direct influence on his shift to founder mode and functional orgs.",
    },
    {
      title: "Walt Disney: The Triumph of the American Imagination",
      author: "Neal Gabler",
      note: "Modeled Disney's relentless storytelling and theme-park experience.",
    },
    {
      title: "The Ride of a Lifetime",
      author: "Bob Iger",
      note: "Practical lessons on leading a large creative organization.",
    },
  ],
  influences: [
    {
      name: "Joe Gebbia",
      note: "Co-founder and design partner since RISD; the original visual voice of Airbnb.",
    },
    { name: "Walt Disney", note: "Studied obsessively for storytelling and theme-design lessons." },
    {
      name: "Steve Jobs",
      note: "Direct inspiration for founder mode and Airbnb's functional org redesign.",
    },
    { name: "Bob Iger", note: "Personal mentor on leading a large creative company." },
    { name: "Reid Hoffman", note: "Early backer who coached him through scaling and ethics." },
  ],
  videoIds: [
    "chesky-blitzscaling",
    "chesky-lennys-playbook",
    "chesky-the-circuit",
    "chesky-sinek-micromanagement",
  ],
  decisions: [
    {
      title: "Photographing every NYC listing personally",
      why: "The product looked unappealing because hosts' photos were unappealing.",
      risk: "Low",
      outcome: "Bookings jumped overnight when photos improved.",
      impact: "Defined the 'do things that don't scale' chapter of startup lore.",
    },
    {
      title: "The 2020 layoff letter",
      why: "Cut 25% of staff while protecting their long-term outcomes.",
      risk: "Medium",
      outcome: "Severance, healthcare, equity acceleration, recruiting help.",
      impact: "Became the reference standard for compassionate layoffs in tech.",
    },
    {
      title: "IPO'ing in December 2020",
      why: "Believed Airbnb's recovery story was a competitive advantage at IPO.",
      risk: "High",
      outcome: "Listed at $68; opened at $146; closed first day at $144.",
      impact: "Reset Airbnb's narrative from crisis to comeback.",
    },
    {
      title: "Adopting founder mode",
      why: "Believed Airbnb had drifted into manager mode and lost product taste.",
      risk: "Medium",
      outcome: "Reorg'd into a functional org with founder in every product review.",
      impact: "Reaccelerated product velocity and shipped the 2024 Experiences relaunch.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Do things that don't scale.",
      takeaway: "The first 100 customers should teach you more than the next 100,000.",
    },
    {
      audience: "Designers",
      lesson: "Design the end-to-end experience.",
      takeaway:
        "If a customer feels something at any step, you designed that — intentionally or not.",
    },
    {
      audience: "Operators",
      lesson: "Treat layoffs as a design problem.",
      takeaway:
        "How you treat people when you have to say goodbye becomes culture for the people who stay.",
    },
    {
      audience: "Leaders",
      lesson: "Founder mode beats manager mode at small scale.",
      takeaway: "Stay close to the product until the company runs faster than you can.",
    },
    {
      audience: "Product Managers",
      lesson: "Hospitality is a feature.",
      takeaway: "Standards, rituals, and training are how taste scales.",
    },
  ],
  sampleQuestions: [
    "How did Brian Chesky fund Airbnb in 2008?",
    "What is 'do things that don't scale'?",
    "How did Airbnb handle the pandemic layoffs?",
    "What is founder mode and when does it work?",
    "How does Chesky use storytelling in product launches?",
  ],
};

export default brianChesky;
