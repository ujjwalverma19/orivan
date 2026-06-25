import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-john-carmack.webp";

const johnCarmack: PersonInput = {
  slug: "john-carmack",
  name: "John Carmack",
  title: "Programmer; Co-founder, id Software; ex-CTO, Oculus",
  summary:
    "The programmer who shipped 3D gaming to the world, open-sourced his engines so the next generation could build on them, and then bet his second act on virtual reality and AGI — always optimizing for raw shipped code over status.",
  portrait,
  featured: false,
  birthYear: "1970",
  industry: "Software & Game Engines",
  country: "United States",
  era: "Personal Computing → VR → AI (1990–present)",
  companies: ["id Software", "Armadillo Aerospace", "Oculus VR / Meta", "Keen Technologies"],
  roles: ["Programmer", "Co-founder", "CTO", "AGI Researcher"],
  tags: ["graphics", "engines", "open-source", "vr", "agi", "first-principles"],
  keyAchievement:
    "Wrote the rendering engines behind Wolfenstein 3D, Doom, Quake, and the early Oculus stack — and open-sourced most of them so the entire game industry could be built on his shoulders.",
  timeline: [
    {
      year: "1970",
      title: "Born in Shawnee Mission, Kansas",
      story:
        "Father was a TV reporter, mother a school administrator; an early Apple II at age 10 set the trajectory.",
      challenge: "No formal CS education available to a curious 1980s kid.",
      lesson: "Manuals plus persistence beat curriculum every time.",
    },
    {
      year: "1981",
      title: "Juvenile detention for an Apple II break-in",
      story:
        "At 14, broke into a school to steal Apple II computers; got a year in a juvenile home.",
      challenge: "A felony at 14 that nearly closed off the conventional path.",
      lesson: "The thing you can't stop doing is the thing you should be paid for.",
    },
    {
      year: "1989",
      title: "Met John Romero at Softdisk in Louisiana",
      story:
        "Hired as a contract programmer; the team that would become id Software coalesced over weekend hacks.",
      challenge: "Stuck producing low-rent monthly software for a magazine subscription.",
      lesson: "Your day job pays for the side project that becomes your real life.",
    },
    {
      year: "1991",
      title: "Founded id Software",
      story:
        "Quit Softdisk with Romero, Tom Hall, and Adrian Carmack to build PC games full-time from a Shreveport lake house.",
      challenge: "Convincing distributors that shareware could be a real business model.",
      lesson: "Distribution innovations matter as much as the product.",
    },
    {
      year: "1992",
      title: "Shipped Wolfenstein 3D",
      story:
        "First true 3D action game on PC, distributed as shareware; spawned the first-person shooter genre.",
      challenge: "Convincing the team to abandon the safer side-scroller they were good at.",
      lesson: "Throw away the working thing to ship the better thing.",
    },
    {
      year: "1993",
      title: "Shipped Doom",
      story:
        "Networked deathmatch, BSP rendering, and a soundtrack that defined a decade; sold by direct download.",
      challenge: "Real-time 3D on hardware that wasn't supposed to be capable of it.",
      lesson: "Algorithmic insight beats hardware budget.",
    },
    {
      year: "1996",
      title: "Shipped Quake",
      story:
        "First fully 3D-polygonal multiplayer game with hardware-accelerated rendering; created esports and modding culture.",
      challenge: "Eighteen months of grueling crunch and internal conflict with Romero.",
      lesson: "Shipping eats friendships unless you protect them deliberately.",
    },
    {
      year: "1999",
      title: "Open-sourced the Quake engine",
      story:
        "Released the source code under GPL, seeding Half-Life, Call of Duty, and a generation of modders.",
      challenge: "Convincing the business that giving away the engine wouldn't kill sales.",
      lesson: "Open source is the deepest distribution channel.",
    },
    {
      year: "2000",
      title: "Founded Armadillo Aerospace",
      story:
        "Self-funded rocketry company chasing the Lunar X Prize on weekends from a Texas hangar.",
      challenge: "Aerospace doesn't share the iteration speed of software.",
      lesson: "Hardware humbles you; do it anyway.",
    },
    {
      year: "2012",
      title: "Joined Oculus VR",
      story:
        "Met Palmer Luckey, became CTO, and ported Doom 3 to early prototypes that made VR feel real.",
      challenge: "Leaving id to bet on a barely-functional headset from a teenager.",
      lesson: "Follow the wave that excites you most, not the one you already conquered.",
    },
    {
      year: "2014",
      title: "Oculus acquired by Facebook for $2B",
      story:
        "Stayed on as CTO through the platform's most formative years and the launch of Quest.",
      challenge: "Working inside a large company after decades of small-team freedom.",
      lesson: "Scale changes which problems are interesting; pick accordingly.",
    },
    {
      year: "2019",
      title: "Moved to Oculus 'Consulting CTO'",
      story: "Stepped back to focus most of his time on artificial general intelligence research.",
      challenge: "Walking away from VR right as Quest hit mass market.",
      lesson: "Knowing when to leave is harder than knowing when to start.",
    },
    {
      year: "2022",
      title: "Founded Keen Technologies",
      story:
        "Raised $20M to pursue AGI from first principles with a tiny team — same playbook as id.",
      challenge: "Entering a field already dominated by billion-dollar labs.",
      lesson: "Small teams with clarity outpace huge teams with politics.",
    },
  ],
  skills: [
    {
      name: "Real-time Graphics",
      description:
        "Invented or productized BSP trees, surface caching, adaptive tile rendering, and binary-space partitioning at scale.",
      developed:
        "Decades of reading SIGGRAPH papers and reimplementing every algorithm from scratch.",
    },
    {
      name: "Engine Architecture",
      description:
        "Designed engines explicitly to be modded and ported — Quake ran on phones a decade after its release.",
      developed: "Hard-won lessons shipping six landmark game engines.",
    },
    {
      name: "Performance Optimization",
      description:
        "Treated every clock cycle as a moral obligation; rewrote inner loops in assembly when needed.",
      developed: "Constrained 1990s hardware forced micro-optimization as a discipline.",
    },
    {
      name: "First-principles Thinking",
      description:
        "Refused to inherit architecture from prior engines; rebuilt the renderer from the ground up for each game.",
      developed: "Wolfenstein, Doom, Quake — three engines, three full rewrites.",
    },
    {
      name: "Writing Plain English",
      description:
        "His .plan files and tweet-storms became technical literature read across the industry.",
      developed: "Decades of writing devlogs and changelogs intended for other engineers.",
    },
    {
      name: "Long Focus Blocks",
      description: "Famous for 12-hour Diet Coke-fueled coding sessions with door closed.",
      developed: "Treated attention as a depletable resource and defended it ruthlessly.",
    },
    {
      name: "Open Sourcing",
      description:
        "Released engine source code after each generation, fueling Half-Life, CoD, and modern engines.",
      developed: "Believed knowledge compounds only when shared.",
    },
  ],
  failures: [
    {
      title: "Daikatana collapse with Romero",
      context: "Personal split with co-founder John Romero damaged both their next decade.",
      recovery: "Stayed focused on the engine work; eventually reconciled publicly years later.",
      lesson: "Co-founder fights are real; don't let them outlive the company.",
    },
    {
      title: "Armadillo Aerospace hibernation (2013)",
      context: "Self-funded rocketry company ran out of momentum without crossing milestones.",
      recovery: "Wound down gracefully and applied the lessons to Oculus hardware work.",
      lesson: "Pivot or pause before you burn out trying to force a market.",
    },
    {
      title: "Doom 3 reception",
      context: "Technically dazzling but criticized for slow pacing and dark corridors.",
      recovery: "Folded the criticism into Rage and later engine work.",
      lesson: "Tech demos aren't games; remember the player.",
    },
    {
      title: "Friction at Meta",
      context: "Publicly criticized Meta's organizational drag while still inside the company.",
      recovery: "Left on his own terms to pursue AGI rather than fight internal battles.",
      lesson: "When the org stops shipping, the engineer should leave.",
    },
  ],
  books: [
    {
      title: "Masters of Doom",
      author: "David Kushner",
      note: "The definitive history of id Software and the Carmack/Romero dynamic.",
    },
    {
      title: "The Art of Computer Programming",
      author: "Donald Knuth",
      note: "Carmack has called Knuth the deepest influence on his engineering aesthetic.",
    },
    {
      title: "Real-Time Rendering",
      author: "Akenine-Möller et al.",
      note: "He's recommended this as the canonical textbook for graphics programmers.",
    },
    {
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard Feynman",
      note: "Modeled his first-principles temperament after Feynman's.",
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      note: "The fictional ancestor of VR thinking he carried into Oculus.",
    },
    {
      title: "Code Complete",
      author: "Steve McConnell",
      note: "Standard reference he's recommended to younger engineers.",
    },
  ],
  influences: [
    { name: "John Romero", note: "Co-founder and design counterweight at id Software." },
    {
      name: "Michael Abrash",
      note: "Graphics programmer whose Black Book of Graphics Programming influenced the Quake renderer.",
    },
    { name: "Donald Knuth", note: "Model for rigor in algorithmic thinking." },
    { name: "Richard Feynman", note: "Patron saint of first-principles curiosity." },
    { name: "Palmer Luckey", note: "Brought him into VR; complementary inventor energy." },
    { name: "Elon Musk", note: "Reference point for hardware-software ambition at scale." },
  ],
  videoIds: [
    "carmack-lex-fridman",
    "carmack-quakecon-2011",
    "carmack-quakecon-2012",
    "carmack-oculus-connect",
    "carmack-oc6-keynote",
  ],
  decisions: [
    {
      title: "Open-sourcing the Quake engine (1999)",
      why: "Believed the community would extend the engine farther than id ever could.",
      risk: "High",
      outcome: "Spawned an entire ecosystem including Half-Life and Call of Duty branches.",
      impact: "Reshaped industry norms around engine licensing and modding.",
    },
    {
      title: "Leaving id for Oculus (2013)",
      why: "Saw VR as the next platform shift and id as a finished chapter.",
      risk: "High",
      outcome: "Stabilized early Oculus tech and shaped Quest's mobile-first architecture.",
      impact: "Gave VR credibility with skeptical PC engineers.",
    },
    {
      title: "Walking away from VR for AGI (2019–2022)",
      why: "Believed AGI was the highest-leverage problem available to a small team.",
      risk: "Extreme",
      outcome: "Founded Keen Technologies with a tight focus on architecture-first research.",
      impact: "Modeled how veteran engineers can re-enter a frontier field late.",
    },
    {
      title: "Refusing to scale id by headcount",
      why: "Believed quality scales sub-linearly with team size in creative software.",
      risk: "Medium",
      outcome: "id stayed small and influential rather than becoming a publisher.",
      impact: "Proved 10-person teams could outship 200-person studios.",
    },
    {
      title: "Publishing the .plan files",
      why: "Wanted to share what he was actually thinking with anyone willing to read.",
      risk: "Low",
      outcome: "Created a generation of engineers who learned by reading his daily notes.",
      impact: "Set the template for the modern technical devlog.",
    },
  ],
  insights: [
    {
      audience: "Engineers",
      lesson: "Focus is a depletable resource.",
      takeaway: "Protect long blocks; multitasking corrodes the deep work that compounds.",
    },
    {
      audience: "Founders",
      lesson: "Throw away the working thing to ship the better thing.",
      takeaway: "Architectural sunk costs kill more startups than market timing.",
    },
    {
      audience: "Students",
      lesson: "Read the papers, then reimplement from scratch.",
      takeaway: "Understanding without reimplementing is borrowed; it evaporates.",
    },
    {
      audience: "Leaders",
      lesson: "Open source compounds.",
      takeaway: "Giving away the engine grows the surface area faster than guarding it.",
    },
    {
      audience: "Anyone",
      lesson: "Optimize for shipped, not status.",
      takeaway: "Output beats prestige in the long compound.",
    },
    {
      audience: "Researchers",
      lesson: "Small teams outpace big labs when the problem is clear.",
      takeaway: "Headcount past a threshold buys politics, not progress.",
    },
    {
      audience: "Creators",
      lesson: "Document what you're doing in public.",
      takeaway: "Your devlog is a recruiting funnel and a future-self diary.",
    },
  ],
  quotes: [
    { text: "Focus is a matter of deciding what things you're not going to do." },
    {
      text: "In the information age, the barriers just aren't there. The barriers are self-imposed.",
    },
    {
      text: "If you're not pissing somebody off, you probably aren't doing anything very important.",
    },
    {
      text: "I would rather give birth to a baby than write a book.",
      context: "On long-form prose vs code",
    },
    { text: "Programming is not a science. Programming is a craft." },
    { text: "A scientist builds in order to learn; an engineer learns in order to build." },
    { text: "It's a depressing thought that the most powerful programs are the ones nobody uses." },
  ],
  sampleQuestions: [
    "How did John Carmack build the Doom engine?",
    "Why did Carmack open-source the Quake engine?",
    "What did John Carmack contribute to early Oculus VR?",
    "How does John Carmack think about focus and deep work?",
    "Why did Carmack leave game development for AGI?",
    "What did Carmack and Romero fight about at id Software?",
    "What can engineers learn from John Carmack's .plan files?",
  ],
};

export default johnCarmack;
