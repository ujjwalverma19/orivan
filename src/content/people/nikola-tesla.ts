import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-nikola-tesla.webp";

const nikolaTesla: PersonInput = {
  slug: "nikola-tesla",
  name: "Nikola Tesla",
  title: "Inventor; Electrical Engineer",
  summary:
    "Imagined the alternating-current world we still live in — and proved that one engineer with the right model in his head could reshape the physical infrastructure of a planet, even while losing the business battles around it.",
  portrait,
  featured: false,
  birthYear: "1856",
  industry: "Electrical Engineering & Invention",
  country: "Austrian Empire (Serbian) / United States",
  era: "Second Industrial Revolution (1880–1930)",
  companies: ["Edison Machine Works", "Tesla Electric Company", "Westinghouse Electric"],
  roles: ["Inventor", "Electrical Engineer", "Physicist"],
  tags: ["electricity", "ac-power", "invention", "physics", "wireless", "ideas"],
  keyAchievement:
    "Designed the polyphase alternating-current system that powers the modern electrical grid — and demonstrated wireless power transmission, induction motors, and radio decades before they were commercialized.",
  timeline: [
    {
      year: "1856",
      title: "Born in Smiljan, Austrian Empire",
      story:
        "Son of a Serbian Orthodox priest and an inventor mother who built household tools by hand.",
      challenge: "Rural village with no exposure to advanced science.",
      lesson: "An inventive mother can teach more than a curriculum.",
    },
    {
      year: "1875",
      title: "Entered Polytechnic in Graz",
      story:
        "Studied physics and mathematics; first encounter with a Gramme dynamo set off lifelong fixation on AC.",
      challenge: "Lost his scholarship after gambling losses; never graduated.",
      lesson: "Formal credentials are negotiable; obsessions aren't.",
    },
    {
      year: "1882",
      title: "Solved the rotating magnetic field problem",
      story:
        "Walked through a Budapest park and visualized the polyphase induction motor in his mind.",
      challenge: "No tools to build the device, only the vision.",
      lesson: "The best inventions are first solved in the imagination.",
    },
    {
      year: "1884",
      title: "Arrived in New York with four cents",
      story: "Sailed for America with a letter of recommendation to Thomas Edison.",
      challenge: "Penniless immigrant in a foreign industrial capital.",
      lesson: "Talent plus a single letter can open the right door.",
    },
    {
      year: "1885",
      title: "Quit Edison Machine Works",
      story:
        "Resigned after Edison reneged on a promised $50,000 bonus for redesigning DC generators.",
      challenge: "Walking away from steady work with no plan B.",
      lesson: "Working for the wrong sponsor wastes the prime of your life.",
    },
    {
      year: "1888",
      title: "Patented the AC induction motor",
      story: "Westinghouse licensed his polyphase patents for $60,000 plus royalties.",
      challenge: "Convincing industry that AC could be safe and practical.",
      lesson: "A patent is a contract with the future.",
    },
    {
      year: "1893",
      title: "Lit the Chicago World's Fair with AC",
      story:
        "Westinghouse-Tesla system illuminated 200,000 light bulbs at the Columbian Exposition.",
      challenge: "Public AC fearmongering by Edison's camp.",
      lesson: "Public demonstrations beat editorial wars.",
    },
    {
      year: "1895",
      title: "Niagara Falls hydroelectric plant",
      story:
        "His polyphase system powered the first long-distance AC transmission from Niagara to Buffalo.",
      challenge: "Proving AC could move power across a city, not a workbench.",
      lesson: "Infrastructure is the deepest moat an engineer can build.",
    },
    {
      year: "1899",
      title: "Colorado Springs experiments",
      story:
        "Built a massive coil that produced 100-foot artificial lightning bolts to study wireless energy.",
      challenge: "Self-funded; no commercial customer for the science.",
      lesson: "Some research has to be done before there's a market for it.",
    },
    {
      year: "1901",
      title: "Began Wardenclyffe Tower on Long Island",
      story:
        "Backed by J.P. Morgan to build a global wireless system; envisioned planet-scale power and communication.",
      challenge: "Marconi beat him to commercial radio mid-project.",
      lesson: "Vision without milestones is a liability when investors get scared.",
    },
    {
      year: "1905",
      title: "Lost Wardenclyffe funding",
      story:
        "Morgan refused additional capital after learning Tesla intended to broadcast free wireless power.",
      challenge: "A business model investors couldn't recoup from.",
      lesson: "Aligning incentives matters as much as solving the physics.",
    },
    {
      year: "1917",
      title: "Wardenclyffe Tower demolished for scrap",
      story: "Tower torn down to pay creditors; Tesla's grandest project ended in salvage value.",
      challenge: "Public symbol of his decline.",
      lesson: "Capital structures kill more inventions than physics ever did.",
    },
    {
      year: "1943",
      title: "Died alone at the Hotel New Yorker",
      story:
        "Posthumously credited as the inventor of radio by the US Supreme Court a few months later.",
      challenge: "Decades of poverty after losing patent control.",
      lesson: "Recognition often runs decades behind invention.",
    },
  ],
  skills: [
    {
      name: "Visualization",
      description: "Solved engineering problems entirely in his mind before drawing or building.",
      developed: "A peculiar eidetic ability he documented since childhood.",
    },
    {
      name: "Electromagnetic Theory",
      description: "Understood polyphase AC before the math was widely taught.",
      developed: "Graz Polytechnic plus years of solitary study.",
    },
    {
      name: "Demonstration",
      description:
        "Staged public exhibitions — passing high-frequency current through his body, lighting bulbs wirelessly — to convince skeptics.",
      developed: "Trained as a showman through the AC battles of the 1890s.",
    },
    {
      name: "Prolific Patenting",
      description: "Filed 300+ patents across power, radio, motors, and remote control.",
      developed: "Disciplined documentation of every workable idea.",
    },
    {
      name: "Cross-domain Imagination",
      description:
        "Anticipated radio, radar, remote control, neon lighting, and global wireless networks decades early.",
      developed: "Refused to specialize; followed the physics wherever it led.",
    },
    {
      name: "Self-promotion",
      description: "Cultivated a public persona via press demos and predictions.",
      developed: "Survived the AC war by managing perception as carefully as circuits.",
    },
    {
      name: "Persistence",
      description:
        "Returned to wireless power experiments for decades despite catastrophic failures.",
      developed: "Treated each setback as a parameter update, not a verdict.",
    },
  ],
  failures: [
    {
      title: "Edison bonus dispute (1885)",
      context: "Edison promised $50,000 to redesign DC generators, then refused to pay.",
      recovery: "Quit, dug ditches briefly, then founded his own AC company.",
      lesson: "Get the deal in writing before doing the work.",
    },
    {
      title: "Wardenclyffe collapse (1901–1917)",
      context: "Visionary global wireless system ran out of capital and was demolished for scrap.",
      recovery: "Pivoted to smaller consulting projects; never recovered financially.",
      lesson: "Ambition needs a financing plan as detailed as the physics.",
    },
    {
      title: "Losing the radio narrative to Marconi",
      context:
        "Marconi commercialized radio first using Tesla's prior patents; Tesla won posthumous credit.",
      recovery: "Supreme Court vindication came months after his death.",
      lesson: "First to market often beats first to invent.",
    },
    {
      title: "Later-life poverty and pigeon obsession",
      context: "Spent his last decades in hotels feeding pigeons, often unable to pay bills.",
      recovery: "Westinghouse quietly paid his rent at the Hotel New Yorker out of respect.",
      lesson: "Genius without operational support ends in dependency.",
    },
  ],
  books: [
    {
      title: "My Inventions: The Autobiography of Nikola Tesla",
      author: "Nikola Tesla",
      note: "Tesla's own account, originally serialized in Electrical Experimenter.",
    },
    {
      title: "Wizard: The Life and Times of Nikola Tesla",
      author: "Marc Seifer",
      note: "The most comprehensive modern biography.",
    },
    {
      title: "Tesla: Man Out of Time",
      author: "Margaret Cheney",
      note: "Definitive narrative biography that revived popular interest in Tesla.",
    },
    {
      title: "Empires of Light",
      author: "Jill Jonnes",
      note: "The AC vs. DC battle and the men who fought it.",
    },
    {
      title: "Prodigal Genius",
      author: "John J. O'Neill",
      note: "First major biography, by a Pulitzer-winning science journalist who knew him.",
    },
    {
      title: "The Inventions, Researches and Writings of Nikola Tesla",
      author: "Thomas Commerford Martin",
      note: "Compiled while Tesla was alive; contains his original technical lectures.",
    },
  ],
  influences: [
    {
      name: "Ruđer Bošković",
      note: "Croatian physicist whose atomistic theory shaped Tesla's early imagination.",
    },
    {
      name: "His mother, Đuka Mandić",
      note: "Inventor of household devices; modeled hands-on creativity.",
    },
    {
      name: "George Westinghouse",
      note: "Industrialist who licensed AC patents and made the polyphase system real.",
    },
    { name: "Mark Twain", note: "Close friend and frequent visitor to Tesla's laboratory." },
    {
      name: "Hermann von Helmholtz",
      note: "European physicist whose electromagnetic work informed Tesla's models.",
    },
    {
      name: "John Jacob Astor IV",
      note: "Early financial backer who funded the Colorado Springs experiments.",
    },
  ],
  videoIds: [
    "tesla-full-doc",
    "tesla-history-laboratory",
    "tesla-pbs-nova",
    "tesla-modern-world-doc",
    "tesla-inventions-animated",
  ],
  decisions: [
    {
      title: "Walking out on Edison (1885)",
      why: "Refused to keep working for a man who broke his promise.",
      risk: "Extreme",
      outcome: "Set up his own lab and licensed AC to Westinghouse three years later.",
      impact: "Began the AC revolution that defined modern infrastructure.",
    },
    {
      title: "Tearing up the Westinghouse royalty contract (1897)",
      why: "Westinghouse was facing bankruptcy; Tesla relinquished royalties to save the company.",
      risk: "Extreme",
      outcome:
        "Westinghouse survived and AC spread; Tesla forfeited what could have been billions.",
      impact: "Preserved the AC industry but ensured his own poverty.",
    },
    {
      title: "Building Wardenclyffe (1901)",
      why: "Believed wireless power could electrify the entire planet for free.",
      risk: "Extreme",
      outcome: "Funding collapsed; the tower was demolished.",
      impact: "Cemented his image as a visionary too far ahead of his economics.",
    },
    {
      title: "Publishing inventions openly",
      why: "Believed the work mattered more than the patent thicket.",
      risk: "High",
      outcome: "Many ideas implemented by others without credit.",
      impact: "Modeled open scientific communication a century before open source.",
    },
    {
      title: "Choosing solitary research over institutions",
      why: "Hated administration and political compromise.",
      risk: "Medium",
      outcome: "Produced unique breakthroughs but lacked organizational backup.",
      impact: "Became the archetype of the lone inventor — for better and worse.",
    },
  ],
  insights: [
    {
      audience: "Inventors",
      lesson: "See the thing fully before building it.",
      takeaway: "Mental prototyping saves orders of magnitude of physical iteration.",
    },
    {
      audience: "Founders",
      lesson: "Get the business model right at the same time as the tech.",
      takeaway: "Brilliance without a billing model dies in scrap value.",
    },
    {
      audience: "Engineers",
      lesson: "Document everything you do.",
      takeaway: "Patents and notebooks are the receipts your future self will need.",
    },
    {
      audience: "Scientists",
      lesson: "Stage demonstrations.",
      takeaway: "Public proof moves opinion faster than peer-reviewed papers.",
    },
    {
      audience: "Anyone",
      lesson: "Ambition needs allies.",
      takeaway: "Solitary genius is a romance; institutions are what ship infrastructure.",
    },
    {
      audience: "Investors",
      lesson: "Beware the inventor who can't be billed.",
      takeaway: "Free-for-all visions starve before they scale.",
    },
    {
      audience: "Students",
      lesson: "Follow the physics, not the curriculum.",
      takeaway: "The most interesting problems live between fields.",
    },
  ],
  quotes: [
    { text: "The present is theirs; the future, for which I really worked, is mine." },
    {
      text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    },
    {
      text: "I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success.",
    },
    { text: "Of all things, I liked books best." },
    { text: "Be alone — that is the secret of invention; be alone, that is when ideas are born." },
    { text: "The scientists of today think deeply instead of clearly." },
    { text: "Our virtues and our failings are inseparable, like force and matter." },
  ],
  sampleQuestions: [
    "How did Nikola Tesla invent the AC induction motor?",
    "What was the war of currents between Tesla and Edison?",
    "Why did Wardenclyffe Tower fail?",
    "What did Tesla mean by wireless power transmission?",
    "How did Tesla and Westinghouse work together?",
    "Why did Tesla die poor despite inventing AC power?",
    "What can modern inventors learn from Nikola Tesla?",
  ],
};

export default nikolaTesla;
