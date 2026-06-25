import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jony-ive.webp";

const jonyIve: PersonInput = {
  slug: "jony-ive",
  name: "Jony Ive",
  title: "Designer of the iMac, iPod, iPhone",
  summary:
    "A soft-spoken British industrial designer who turned a near-bankrupt Apple into the most valuable design-led company on earth — and then walked away to start over.",
  portrait,
  birthYear: "1967",
  industry: "Industrial & Product Design",
  country: "United Kingdom",
  era: "Design-led Tech (1992–present)",
  companies: ["Apple", "LoveFrom", "Tangerine"],
  roles: ["Designer", "Chief Design Officer", "Founder"],
  tags: [
    "design",
    "industrial-design",
    "minimalism",
    "craft",
    "materials",
    "apple",
    "iphone",
    "imac",
    "lovefrom",
  ],
  keyAchievement:
    "Defined the visual language of modern personal computing through Apple's design.",
  timeline: [
    {
      year: "1967",
      title: "Born in Chingford, London",
      story:
        "His father was a silversmith and design teacher who let him use the school workshop on weekends.",
      challenge: "British design culture was undervalued in the 70s.",
      lesson: "A childhood spent making physical things builds intuition no school can teach.",
    },
    {
      year: "1989",
      title: "Graduated Newcastle Polytechnic",
      story:
        "Won a student RSA travel award that took him to California and Silicon Valley for the first time.",
      challenge: "British design jobs were scarce and underpaid.",
      lesson: "Get on the plane; the world is smaller than industries claim.",
    },
    {
      year: "1990",
      title: "Co-founded Tangerine",
      story: "London design consultancy serving clients including Apple, LG, and Ideal Standard.",
      challenge: "Surviving a recession-era design market.",
      lesson: "Consultancy work is a way to test partners before committing.",
    },
    {
      year: "1992",
      title: "Joined Apple under Sculley",
      story: "Hired by Robert Brunner; nearly quit before Jobs returned in 1997.",
      challenge: "Apple was directionless and almost insolvent.",
      lesson: "Stay close to the embers — sometimes the company is one leader away from the fire.",
    },
    {
      year: "1996",
      title: "Promoted to head of industrial design",
      story: "Took over Apple's design studio just before Jobs returned.",
      challenge: "Designing under low budgets and corporate fatigue.",
      lesson: "Quiet excellence is invisible until the right leader spots it.",
    },
    {
      year: "1998",
      title: "Designed the iMac G3",
      story: "Translucent, candy-colored — a friendly all-in-one that signaled Apple's return.",
      challenge: "Manufacturing translucent plastic at consumer scale.",
      lesson: "Materials science is product design when you push it to a new place.",
    },
    {
      year: "2001",
      title: "Designed the iPod",
      story:
        "Worked with Fadell's team to translate a hard drive into 'a thousand songs in your pocket.'",
      challenge: "Compressing a Walkman replacement into the size of a deck of cards.",
      lesson: "The best products are the simplest sentences.",
    },
    {
      year: "2007",
      title: "iPhone shipped",
      story: "Co-led the industrial design that defined the modern smartphone.",
      challenge: "Designing a glass-fronted slab nobody wanted to drop.",
      lesson: "Make the object disappear — let the content be the experience.",
    },
    {
      year: "2013",
      title: "Took over software design (iOS 7)",
      story: "Apple flattened iOS under his direction after years of skeuomorphic design.",
      challenge: "Re-aligning software design with hardware language across thousands of apps.",
      lesson: "Visual systems are easier to break than to redesign at scale.",
    },
    {
      year: "2015",
      title: "Promoted to Chief Design Officer",
      story: "Took ownership of all design at Apple, including software, packaging and stores.",
      challenge: "Operating at executive scale while staying close to materials.",
      lesson: "Pull back from the sketch only when you can trust the room you've trained.",
    },
    {
      year: "2017",
      title: "Apple Park opened",
      story: "Co-designed Apple's $5B circular Cupertino campus with Foster + Partners.",
      challenge: "Architecting a workplace as a design statement.",
      lesson: "The environment around the team is part of the team's output.",
    },
    {
      year: "2019",
      title: "Left Apple to found LoveFrom",
      story: "Started a multidisciplinary studio with Marc Newson; Apple became the first client.",
      challenge: "Returning to first-principles work after a corporate decade.",
      lesson: "The best second chapter often begins by re-becoming an outsider.",
    },
  ],
  skills: [
    {
      name: "Materials Craft",
      description: "Treats aluminum, glass and plastic as expressive materials, not commodities.",
      developed: "Childhood workshop hours with his silversmith father.",
    },
    {
      name: "Reduction",
      description: "Removes elements until the object becomes inevitable.",
      developed: "Years apprenticing to Dieter Rams's design philosophy.",
    },
    {
      name: "Cross-Functional Diplomacy",
      description:
        "Translated industrial design into language engineers and operations could ship.",
      developed: "Decades partnering with Apple's hardware engineering leadership.",
    },
    {
      name: "Design Team Leadership",
      description: "Built a small, deeply loyal studio that worked together for 25+ years.",
      developed: "Inherited Apple's design studio in 1996 and refused to grow it past intimacy.",
    },
    {
      name: "Manufacturing Partnership",
      description: "Spent more time in Shenzhen factories than most operators.",
      developed:
        "Annual trips with Apple's operations team to design CNC processes alongside vendors.",
    },
    {
      name: "Storytelling Through Object",
      description: "Designed product films that explained the materials and intent.",
      developed: "Decades narrating Apple's launch videos personally.",
    },
  ],
  failures: [
    {
      title: "Apple Watch sales miss",
      context: "First generation underperformed expectations as a fashion device.",
      recovery:
        "Repositioned it as a health and fitness device; became the bestselling watch in the world.",
      lesson: "First positioning is rarely right; the product can stay, the story can change.",
    },
    {
      title: "The pre-Jobs Apple years",
      context: "Nearly quit in 1997 because Apple seemed terminal.",
      recovery: "Stayed long enough to meet Jobs's second act.",
      lesson: "Inflection points look like dead ends from inside.",
    },
    {
      title: "Initial iOS 7 reception",
      context: "First version of flat iOS was criticized for legibility and animation choices.",
      recovery: "Iterated through iOS 8 and 9 to refine type, motion and color.",
      lesson: "Software design systems need 2–3 versions to stabilize after a big reset.",
    },
  ],
  books: [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      note: "Reference text since design school.",
    },
    { title: "Less but Better", author: "Dieter Rams", note: "His acknowledged operating bible." },
    {
      title: "Designing Design",
      author: "Kenya Hara",
      note: "Japanese counterpart to his minimalism.",
    },
    {
      title: "Jony Ive: The Genius Behind Apple's Greatest Products",
      author: "Leander Kahney",
      note: "Authoritative biography of his Apple years.",
    },
  ],
  influences: [
    { name: "Dieter Rams", note: "Lifelong design hero." },
    { name: "Steve Jobs", note: "Partner who gave him the authority to apply his beliefs." },
    { name: "Robert Brunner", note: "First boss at Apple who hired him." },
    { name: "Marc Newson", note: "Long-time friend and LoveFrom co-founder." },
    { name: "Norman Foster", note: "Architectural collaborator on Apple Park." },
  ],
  videoIds: [
    "ive-stephen-fry-2018",
    "ive-financial-times-2021",
    "ive-vanity-fair-2014",
    "ive-design-museum-2014",
  ],
  decisions: [
    {
      title: "Stay at Apple under Sculley",
      why: "Saw an institutional foundation worth keeping.",
      risk: "High",
      outcome: "Was in place when Jobs returned and the partnership began.",
      impact: "Co-authored the most influential consumer products of the era.",
    },
    {
      title: "Take ownership of iOS design in 2012",
      why: "Believed hardware and software needed unified design leadership.",
      risk: "High",
      outcome: "Delivered the flattened iOS 7 visual reset.",
      impact: "Aligned Apple's product surface for the next decade.",
    },
    {
      title: "Leave Apple in 2019",
      why: "Wanted to return to small studio work.",
      risk: "Medium",
      outcome: "Founded LoveFrom; building beyond Apple again.",
      impact: "Demonstrated that even iconic designers should refresh their constraints.",
    },
    {
      title: "Open LoveFrom with Marc Newson",
      why: "Believed cross-disciplinary studios outperform single-vision ones.",
      risk: "Medium",
      outcome: "Built a multi-client studio working on Ferrari, Airbnb, and Moncler.",
      impact: "Showed how designer-led firms scale beyond consulting.",
    },
  ],
  insights: [
    {
      audience: "Designers",
      lesson: "Spend time with the material; spec sheets lie.",
      takeaway: "Visit the factory before you draw the second sketch.",
    },
    {
      audience: "Founders",
      lesson: "Design taste is a partnership.",
      takeaway: "Hire people who give you back the version of yourself you wish you were.",
    },
    {
      audience: "Product Leaders",
      lesson: "Care for the unseen parts.",
      takeaway: "The hidden surfaces of a product are where craftsmanship signals itself.",
    },
    {
      audience: "Leaders",
      lesson: "Keep the team small.",
      takeaway: "Intimacy is a craftsmanship multiplier; grow only as fast as trust scales.",
    },
    {
      audience: "Creators",
      lesson: "Simplicity is the final stage.",
      takeaway: "Add to learn the problem; subtract to ship the solution.",
    },
  ],
  quotes: [
    {
      text: "True simplicity is derived from so much more than just the absence of clutter and ornamentation.",
    },
    {
      text: "I have always thought there is something rather wonderful about a story that begins in Wales.",
    },
    { text: "There's a profound and enduring beauty in simplicity, in clarity, in efficiency." },
    { text: "The object is the design; everything else is conversation." },
    { text: "Care is contagious. So is its absence." },
  ],
  sampleQuestions: [
    "How did Jony Ive and Steve Jobs work together?",
    "Why is reduction so difficult in hardware design?",
    "What did Dieter Rams teach him?",
    "Why did he leave Apple to start LoveFrom?",
    "How does Ive think about materials and factories?",
  ],
  featured: false,
};

export default jonyIve;
