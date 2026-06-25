import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-richard-feynman.webp";

const richardFeynman: PersonInput = {
  slug: "richard-feynman",
  name: "Richard Feynman",
  title: "Nobel-winning physicist, teacher, and explainer",
  summary:
    "A Brooklyn-born Nobel laureate who reformulated quantum electrodynamics, played bongos in the Caltech faculty band, cracked Los Alamos safes for sport, and taught millions to think like a physicist.",
  portrait,
  birthYear: "1918",
  industry: "Physics & Education",
  country: "United States",
  era: "Quantum Physics & Postwar Science (1940s–1988)",
  companies: ["Los Alamos National Laboratory", "Cornell University", "Caltech"],
  roles: ["Physicist", "Professor", "Teacher", "Writer"],
  tags: [
    "physics",
    "teaching",
    "curiosity",
    "first-principles",
    "qed",
    "education",
    "communication",
    "play",
  ],
  keyAchievement:
    "Won the 1965 Nobel Prize in Physics for quantum electrodynamics; redefined how physics is taught.",
  timeline: [
    {
      year: "1918",
      title: "Born in Queens, New York",
      story:
        "Son of a uniforms-salesman father who taught him to look for the principle behind the phenomenon.",
      challenge: "Working-class family during the Depression.",
      lesson: "A parent who asks 'why' relentlessly raises a scientist.",
    },
    {
      year: "1935",
      title: "Entered MIT",
      story: "Studied mathematics, then switched to physics; lived in the library.",
      challenge: "Choosing physics when most peers picked engineering.",
      lesson: "The discipline you can't stop reading about is the right one.",
    },
    {
      year: "1939",
      title: "Graduated MIT, started Princeton PhD",
      story:
        "Studied under John Wheeler; began the path-integral formulation of quantum mechanics.",
      challenge: "Reformulating quantum mechanics as a 22-year-old grad student.",
      lesson: "Foundational rewrites are easier before tradition has taught you the rules.",
    },
    {
      year: "1942",
      title: "Joined the Manhattan Project",
      story: "Recruited to Los Alamos at 24; led a computing group of human calculators.",
      challenge: "Working on a weapon of mass destruction in his early twenties.",
      lesson: "Every scientific career has at least one decision with permanent moral weight.",
    },
    {
      year: "1945",
      title: "Wife Arline died of tuberculosis",
      story: "Lost his teenage sweetheart and wife days before the Trinity test.",
      challenge: "Carrying personal grief through a national-security crisis.",
      lesson: "Grief and work coexist — neither postpones the other.",
    },
    {
      year: "1948",
      title: "Developed Feynman diagrams",
      story: "Created the visual notation now used to teach particle interactions worldwide.",
      challenge: "Convincing senior physicists his diagrams weren't a gimmick.",
      lesson: "Visual notation can unlock decades of teaching gain.",
    },
    {
      year: "1950",
      title: "Joined Caltech",
      story: "Moved from Cornell to Caltech, where he stayed for the rest of his career.",
      challenge: "Choosing teaching-heavy institution over pure research one.",
      lesson: "Long careers reward picking the institution that fits your temperament.",
    },
    {
      year: "1959",
      title: "Plenty of Room at the Bottom lecture",
      story: "Predicted nanotechnology decades before the field existed.",
      challenge: "Speculating in public about a technology with no instruments yet.",
      lesson: "Scientists can sketch futures the engineers will build a generation later.",
    },
    {
      year: "1965",
      title: "Won the Nobel Prize in Physics",
      story: "Shared with Schwinger and Tomonaga for quantum electrodynamics.",
      challenge: "Adjusting to celebrity attention while keeping research focus.",
      lesson: "Prizes are a tax on attention; spend the year recovering from them.",
    },
    {
      year: "1965",
      title: "Published the Feynman Lectures on Physics",
      story: "Co-authored three-volume undergraduate textbook from his Caltech lectures.",
      challenge: "Compressing the discipline into teachable form.",
      lesson: "Teaching forces you to discover the parts you only thought you understood.",
    },
    {
      year: "1986",
      title: "Investigated the Challenger disaster",
      story: "Demonstrated O-ring failure on live TV by dipping the rubber in ice water.",
      challenge: "Navigating commission politics while maintaining scientific integrity.",
      lesson: "A simple demo can outweigh thousands of pages of report.",
    },
    {
      year: "1988",
      title: "Died in Los Angeles",
      story: "Succumbed to cancer at age 69 with the line 'I'd hate to die twice. It's so boring.'",
      challenge: "Working through illness on his final lectures.",
      lesson: "A life of curiosity ends with curiosity intact.",
    },
  ],
  skills: [
    {
      name: "First-Principles Reasoning",
      description: "Started every problem by re-deriving rather than memorizing.",
      developed: "Inherited from his father's daily walks of asking 'why?'",
    },
    {
      name: "Visual Teaching",
      description: "Invented the diagrams that compressed years of formalism into a sketch.",
      developed: "Forced to invent shortcuts during PhD work on QED.",
    },
    {
      name: "Plain-Language Communication",
      description: "Could explain rubber bands, fire, and magnets to anyone with curiosity.",
      developed: "Decades of undergraduate teaching and BBC interviews.",
    },
    {
      name: "Curiosity Discipline",
      description:
        "Followed any interesting problem — biology, Mayan glyphs, safe-cracking, bongos.",
      developed: "Treated curiosity as a daily practice, not a hobby.",
    },
    {
      name: "Intellectual Honesty",
      description: "Insisted on disclosing what could disprove a hypothesis.",
      developed: "Refined through Manhattan Project peer scrutiny and Challenger commission work.",
    },
    {
      name: "Performance Energy",
      description: "Lectured with such physicality his classes became collector's items.",
      developed: "Years of refining his Caltech delivery; recorded and re-watched.",
    },
  ],
  failures: [
    {
      title: "Working on the bomb",
      context: "Spent his early 20s on a weapon that killed hundreds of thousands.",
      recovery:
        "Refused to work on nuclear weapons after the war; spoke openly about the moral weight.",
      lesson: "Some achievements are also failures; carry both.",
    },
    {
      title: "Difficulty after Arline's death",
      context: "Struggled for years with grief; bounced between Cornell and depression.",
      recovery: "Moved to Caltech; rebuilt around teaching and a wider intellectual circle.",
      lesson: "Change of place can be a legitimate intervention after loss.",
    },
    {
      title: "Early misogynistic anecdotes in his books",
      context: "Some of his autobiographical stories aged poorly on gender.",
      recovery:
        "Some peers and family addressed them; the lesson belongs to readers separating the work from the man.",
      lesson: "Heroes are partial; engage with the whole record.",
    },
  ],
  books: [
    {
      title: "The Feynman Lectures on Physics",
      author: "Richard Feynman",
      note: "Three-volume undergraduate text — still the gold standard.",
    },
    {
      title: "Surely You're Joking, Mr. Feynman!",
      author: "Richard Feynman",
      note: "Anecdotal autobiography that became a cult classic.",
    },
    {
      title: "The Pleasure of Finding Things Out",
      author: "Richard Feynman",
      note: "Collected essays and interviews on curiosity and method.",
    },
    {
      title: "What Do You Care What Other People Think?",
      author: "Richard Feynman",
      note: "Includes his Challenger commission account.",
    },
    {
      title: "Genius: The Life and Science of Richard Feynman",
      author: "James Gleick",
      note: "Definitive biography.",
    },
  ],
  influences: [
    { name: "Melville Feynman (his father)", note: "Taught him to look past names to mechanisms." },
    { name: "John Wheeler", note: "PhD adviser at Princeton; co-developed early QED ideas." },
    { name: "Hans Bethe", note: "Mentor at Cornell who modeled scientific integrity." },
    { name: "Murray Gell-Mann", note: "Caltech colleague and intellectual sparring partner." },
    { name: "Arline Greenbaum", note: "First wife who shaped his emotional center." },
  ],
  videoIds: [
    "feynman-fun-to-imagine",
    "feynman-magnets-bbc",
    "feynman-cargo-cult-readout",
    "feynman-pleasure-of-finding",
  ],
  decisions: [
    {
      title: "Choose path-integral formulation for thesis",
      why: "Believed the standard formulation hid the underlying intuition.",
      risk: "High",
      outcome: "Reformulated quantum mechanics; foundational for QED.",
      impact: "Defined his Nobel-winning contribution.",
    },
    {
      title: "Move to Caltech in 1950",
      why: "Wanted a smaller institution with more teaching contact.",
      risk: "Low",
      outcome: "Stayed for 38 years; built the Lectures legacy.",
      impact: "Demonstrated that great researchers can also be great teachers.",
    },
    {
      title: "Demo the O-ring on live TV",
      why: "Believed the commission report wouldn't translate to the public otherwise.",
      risk: "Medium",
      outcome: "Galvanized public understanding of the Challenger failure.",
      impact: "Showed how a scientist can communicate during a national crisis.",
    },
    {
      title: "Refuse to work on the H-bomb",
      why: "Couldn't justify a second weapons project.",
      risk: "Medium",
      outcome: "Lost government opportunities but kept independence.",
      impact: "Modeled scientific conscience to his students.",
    },
  ],
  insights: [
    {
      audience: "Scientists",
      lesson: "Teach what you want to understand.",
      takeaway: "Volunteer for the lecture nobody else wants — it'll expose what you don't know.",
    },
    {
      audience: "Builders",
      lesson: "Re-derive from first principles.",
      takeaway: "Start every hard problem by ignoring the literature for a week.",
    },
    {
      audience: "Communicators",
      lesson: "Names hide mechanisms.",
      takeaway:
        "Replace jargon with the actual physical story; if you can't, you don't understand it.",
    },
    {
      audience: "Leaders",
      lesson: "Demos beat reports.",
      takeaway: "Translate the conclusion into a five-minute physical demonstration.",
    },
    {
      audience: "Anyone",
      lesson: "Curiosity is renewable.",
      takeaway: "Follow the next interesting thing even when it's outside your discipline.",
    },
    {
      audience: "Researchers",
      lesson: "Disclose what could prove you wrong.",
      takeaway: "Publish the failure modes alongside the results.",
    },
  ],
  quotes: [
    {
      text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    },
    {
      text: "I would rather have questions that can't be answered than answers that can't be questioned.",
    },
    {
      text: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    },
    { text: "What I cannot create, I do not understand." },
    { text: "Nature uses only the longest threads to weave her patterns." },
    {
      text: "I learned very early the difference between knowing the name of something and knowing something.",
    },
  ],
  sampleQuestions: [
    "How did Feynman approach teaching physics?",
    "What is the path-integral formulation in simple terms?",
    "How did he investigate the Challenger disaster?",
    "What did his father teach him about thinking?",
    "What does 'cargo cult science' mean?",
  ],
  featured: false,
};

export default richardFeynman;
