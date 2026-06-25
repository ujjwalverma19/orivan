import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-alan-kay.webp";

const alanKay: PersonInput = {
  slug: "alan-kay",
  name: "Alan Kay",
  title: "Computer Scientist; Inventor of Smalltalk and the Dynabook",
  summary:
    "The computer scientist who imagined the laptop, the GUI, and object-oriented programming a decade before any of them existed — then spent his life pushing the rest of the industry to catch up to the children he was building it for.",
  portrait,
  featured: false,
  birthYear: "1940",
  industry: "Computing & Education",
  country: "United States",
  era: "Personal Computing Revolution (1968–present)",
  companies: [
    "Xerox PARC",
    "Apple",
    "Atari",
    "Disney Imagineering",
    "Viewpoints Research Institute",
  ],
  roles: ["Computer Scientist", "Researcher", "Educator", "Fellow"],
  tags: ["computing", "object-oriented", "education", "smalltalk", "gui", "dynabook"],
  keyAchievement:
    "Invented Smalltalk, the Dynabook concept, and the overlapping-window GUI at Xerox PARC — laying the conceptual foundation for every personal computer since.",
  timeline: [
    {
      year: "1940",
      title: "Born in Springfield, Massachusetts",
      story:
        "Raised by a musician mother and a physiologist father in a household where curiosity was the default mode.",
      challenge: "Read at three; school bored him profoundly.",
      lesson: "Precocious kids need projects, not curricula.",
    },
    {
      year: "1961",
      title: "Air Force programmer",
      story: "Joined the Air Force, where he learned to program early IBM systems.",
      challenge: "Programming was clerical work in 1961; he saw it as a medium.",
      lesson: "The job description rarely describes the real opportunity.",
    },
    {
      year: "1966",
      title: "Began PhD at the University of Utah",
      story: "Studied with Ivan Sutherland and David Evans, the godfathers of computer graphics.",
      challenge: "Joining a field that didn't yet have departments.",
      lesson: "Find the small group that's inventing the future and move there.",
    },
    {
      year: "1968",
      title: "Saw Sketchpad and a flat-panel display demo",
      story:
        "The flat-panel demo seeded the Dynabook idea; Sketchpad reshaped his sense of what software could be.",
      challenge: "Reconciling current hardware with a vision a decade ahead.",
      lesson: "A few seminal demos can route a career for life.",
    },
    {
      year: "1972",
      title: "Wrote 'A Personal Computer for Children of All Ages'",
      story: "Proposed the Dynabook — a tablet-style learning device — at Xerox PARC.",
      challenge: "Selling a kids' device to a copier company.",
      lesson: "Frame breakthrough hardware around its hardest user.",
    },
    {
      year: "1972",
      title: "Started Smalltalk at Xerox PARC",
      story:
        "With Dan Ingalls and Adele Goldberg, built the first complete object-oriented programming environment.",
      challenge: "Convincing engineers raised on FORTRAN to think in messages and objects.",
      lesson: "Languages shape what programmers can imagine.",
    },
    {
      year: "1973",
      title: "Built the Xerox Alto",
      story:
        "PARC's team shipped the first personal computer with a GUI, mouse, and bitmap display.",
      challenge: "Xerox executives didn't know what they had.",
      lesson: "Breakthroughs need patrons who can see, not just fund.",
    },
    {
      year: "1979",
      title: "Hosted Steve Jobs at PARC",
      story: "Showed Jobs Smalltalk and the Alto; the demo seeded the Macintosh.",
      challenge: "Letting the future leave the building under someone else's name.",
      lesson: "Ideas spread fastest when you give them away.",
    },
    {
      year: "1984",
      title: "Joined Apple as Fellow",
      story:
        "Continued research on educational computing and influenced HyperCard and early Mac OS direction.",
      challenge: "Researching inside a product company.",
      lesson: "Choose patrons who let you keep doing the long-horizon work.",
    },
    {
      year: "1996",
      title: "Joined Disney Imagineering as VP",
      story: "Built educational software and prototypes for Imagineering R&D.",
      challenge: "Embedding research in an entertainment company.",
      lesson: "Curiosity finds collaborators in unlikely industries.",
    },
    {
      year: "2001",
      title: "Founded Viewpoints Research Institute",
      story:
        "Non-profit dedicated to fundamental research in human-computer symbiosis and education.",
      challenge: "Raising sustained funding for blue-sky research.",
      lesson: "Institutional independence is the price of long-term thinking.",
    },
    {
      year: "2003",
      title: "Received the Turing Award",
      story: "ACM's highest honor, cited for object-oriented programming and overlapping windows.",
      challenge: "Resisting the temptation to coast on legacy.",
      lesson: "Recognition is the start of the next phase, not the end of the work.",
    },
    {
      year: "2007",
      title: "Started the STEPS project",
      story: "Aimed to reinvent personal computing in 20,000 lines of code instead of millions.",
      challenge: "Proving software bloat is not inevitable.",
      lesson: "Constraints expose how much of complexity is accidental.",
    },
  ],
  skills: [
    {
      name: "Conceptual Invention",
      description:
        "Specialized in coining the categories — 'personal computer,' 'object-oriented,' 'Dynabook' — before they existed.",
      developed: "Years at PARC where conceptual clarity was the currency.",
    },
    {
      name: "Language Design",
      description: "Designed Smalltalk to make object-oriented programming livable and learnable.",
      developed: "Iterated through multiple Smalltalk versions over a decade.",
    },
    {
      name: "Demos as Argument",
      description: "Used live, working systems to convince skeptics in a way papers never could.",
      developed: "PARC culture of 'point at the running thing.'",
    },
    {
      name: "Cross-disciplinary Reading",
      description: "Drew on Piaget, McLuhan, Bruner, and music theory to shape computing's future.",
      developed: "Refused to specialize; treated computing as a humanities subject.",
    },
    {
      name: "Teaching Children",
      description:
        "Treated children as the true user of personal computing — the most demanding audience he could find.",
      developed: "Decades of school visits and educational pilots.",
    },
    {
      name: "Polemic",
      description: "Skilled at provocative talks that punctured industry complacency.",
      developed: "Stage-tested in keynotes and lectures across five decades.",
    },
    {
      name: "Long-horizon Patience",
      description: "Comfortable working on ideas that wouldn't ship for 20 years.",
      developed: "Picked patrons (PARC, Apple, Disney) who allowed it.",
    },
  ],
  failures: [
    {
      title: "Xerox's failure to commercialize Alto",
      context:
        "Xerox sat on the personal computer for years; Apple and Microsoft captured the market.",
      recovery:
        "Continued advocating publicly for what Xerox had built; wrote it into the historical record.",
      lesson: "Inventing the future doesn't guarantee owning it.",
    },
    {
      title: "Dynabook never quite shipped",
      context:
        "His tablet-laptop vision required 30 years of hardware progress; he never built the product itself.",
      recovery: "Watched the iPad ship and noted it still wasn't the Dynabook he had imagined.",
      lesson: "Visions outrun supply chains; keep restating them.",
    },
    {
      title: "Smalltalk's commercial decline",
      context: "Smalltalk lost mindshare to C++ and Java despite a richer model.",
      recovery:
        "Helped birth Squeak as an open-source successor; influenced Ruby, Self, and many languages.",
      lesson: "Even when your language loses, its ideas can win.",
    },
    {
      title: "STEPS funding constraints",
      context:
        "Ambitious 20,000-line reinvention of personal computing ran out of NSF support before completion.",
      recovery:
        "Published the work and ideas as research; influenced later minimalist systems work.",
      lesson: "Long research bets need patient money you may not always find.",
    },
  ],
  books: [
    {
      title: "The Early History of Smalltalk",
      author: "Alan Kay",
      note: "His own definitive essay on how Smalltalk and Dynabook came together.",
    },
    {
      title: "A Personal Computer for Children of All Ages",
      author: "Alan Kay",
      note: "The 1972 Dynabook memo that imagined the laptop and tablet.",
    },
    {
      title: "Mindstorms",
      author: "Seymour Papert",
      note: "Kay calls Papert's vision of children-as-programmers a foundational influence.",
    },
    {
      title: "Understanding Media",
      author: "Marshall McLuhan",
      note: "Shaped his view of the computer as a new medium, not just a tool.",
    },
    {
      title: "Mind in Society",
      author: "Lev Vygotsky",
      note: "Underpinned his ideas about computing as a tool for cognitive scaffolding.",
    },
    {
      title: "The Art of the Soluble",
      author: "Peter Medawar",
      note: "Frequently recommended for its philosophy of fruitful scientific problem choice.",
    },
  ],
  influences: [
    {
      name: "Seymour Papert",
      note: "Pioneer of children-as-programmers; deep philosophical kinship.",
    },
    {
      name: "Marshall McLuhan",
      note: "Framed the computer as a medium that would reshape thinking.",
    },
    {
      name: "Ivan Sutherland",
      note: "Utah advisor whose Sketchpad demo seeded everything that followed.",
    },
    {
      name: "Doug Engelbart",
      note: "Mother of all demos shaped Kay's idea of computing as human augmentation.",
    },
    {
      name: "Jean Piaget",
      note: "Developmental psychology that shaped his idea of staged learning environments.",
    },
    {
      name: "J.C.R. Licklider",
      note: "ARPA visionary whose 'man-computer symbiosis' set the agenda.",
    },
  ],
  videoIds: [
    "kay-doing-with-images",
    "kay-normal-considered-harmful",
    "kay-ted-2007",
    "kay-tribute-ted-nelson",
    "kay-vpri-1972",
  ],
  decisions: [
    {
      title: "Choosing Xerox PARC over commercial work (1971)",
      why: "PARC offered the only environment that funded long-horizon computing research.",
      risk: "Medium",
      outcome: "Produced Smalltalk, the Alto, and the GUI inside one decade.",
      impact: "Defined the template for industrial computing research.",
    },
    {
      title: "Showing Steve Jobs the Alto (1979)",
      why: "Believed PARC's ideas should propagate, even at Xerox's expense.",
      risk: "High",
      outcome: "Macintosh shipped the ideas to the world.",
      impact: "Made the GUI inevitable years earlier than otherwise.",
    },
    {
      title: "Joining Disney Imagineering (1996)",
      why: "Saw entertainment R&D as a fresh patron for learning-software experiments.",
      risk: "Medium",
      outcome: "Built educational prototypes and recruited a new generation.",
      impact: "Demonstrated research can thrive in non-obvious institutions.",
    },
    {
      title: "Founding Viewpoints Research Institute (2001)",
      why: "Wanted full independence to pursue computing's unfinished agenda.",
      risk: "High",
      outcome: "Produced the STEPS project and shaped Croquet/Squeak.",
      impact: "Modeled small-team long-horizon CS research outside academia.",
    },
    {
      title: "Treating children as the lead user",
      why: "Believed the toughest design constraint produced the best systems.",
      risk: "Low",
      outcome: "Educational focus stayed central to his work for 50 years.",
      impact: "Influenced everything from Scratch to one-laptop-per-child.",
    },
  ],
  insights: [
    {
      audience: "Engineers",
      lesson: "Point of view is worth 80 IQ points.",
      takeaway: "The frame you bring to a problem matters more than raw horsepower.",
    },
    {
      audience: "Founders",
      lesson: "The best way to predict the future is to invent it.",
      takeaway: "Stop forecasting; start building the next decade.",
    },
    {
      audience: "Designers",
      lesson: "Simple things should be simple, complex things should be possible.",
      takeaway: "Tool design is a moral act for the people who'll use them.",
    },
    {
      audience: "Educators",
      lesson: "Children are the demanding users.",
      takeaway: "If your system works for an eight-year-old, it'll work for everyone.",
    },
    {
      audience: "Researchers",
      lesson: "Set goals 20 years out.",
      takeaway: "Real breakthroughs require time horizons quarterly funding can't fit.",
    },
    {
      audience: "Programmers",
      lesson: "Object-oriented means messaging.",
      takeaway: "The big idea wasn't classes; it was late-bound message passing between cells.",
    },
    {
      audience: "Anyone",
      lesson: "Computers are a medium, not a tool.",
      takeaway: "Treat them like printing presses and your imagination expands.",
    },
  ],
  quotes: [
    { text: "The best way to predict the future is to invent it." },
    { text: "People who are really serious about software should make their own hardware." },
    { text: "Simple things should be simple, complex things should be possible." },
    { text: "Point of view is worth 80 IQ points." },
    { text: "Technology is anything invented after you were born." },
    { text: "The computer revolution hasn't happened yet." },
    { text: "If you don't fail at least 90 percent of the time, you're not aiming high enough." },
  ],
  sampleQuestions: [
    "What was the Dynabook and why did Alan Kay propose it in 1972?",
    "How did Smalltalk change programming?",
    "What did Alan Kay show Steve Jobs at Xerox PARC?",
    "Why does Alan Kay say the computer revolution hasn't happened yet?",
    "How does Alan Kay think about teaching computing to children?",
    "What is Alan Kay's view of object-oriented programming?",
    "What can researchers learn from Alan Kay's work at PARC?",
  ],
};

export default alanKay;
