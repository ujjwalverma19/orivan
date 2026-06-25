import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-dieter-rams.webp";

const dieterRams: PersonInput = {
  slug: "dieter-rams",
  name: "Dieter Rams",
  title: "Industrial designer at Braun and Vitsoe, author of the Ten Principles",
  summary:
    "A German industrial designer whose 40 years at Braun produced a body of work so disciplined and reduced it set the visual language for modern consumer electronics — including the iPod and iPhone.",
  portrait,
  birthYear: "1932",
  industry: "Industrial Design",
  country: "Germany",
  era: "Postwar Modernism (1955–1995)",
  companies: ["Braun", "Vitsoe"],
  roles: ["Designer", "Head of Design"],
  tags: [
    "design",
    "industrial-design",
    "minimalism",
    "principles",
    "modernism",
    "craft",
    "braun",
    "vitsoe",
  ],
  keyAchievement:
    "Defined modern industrial design through his Braun work and the Ten Principles of Good Design.",
  timeline: [
    {
      year: "1932",
      title: "Born in Wiesbaden, Germany",
      story:
        "Grandson of a carpenter; spent his childhood in the workshop watching joinery and detail work.",
      challenge: "Growing up through wartime austerity and reconstruction.",
      lesson:
        "Restraint as a value is often inherited from a generation that had nothing to waste.",
    },
    {
      year: "1947",
      title: "Apprenticed as a carpenter",
      story: "Learned cabinetmaking by hand before formal design training.",
      challenge: "Physical craft as foundation before drawing.",
      lesson: "Designers who can build never lose their grip on materials.",
    },
    {
      year: "1953",
      title: "Studied at Wiesbaden School of Applied Arts",
      story: "Trained in architecture and interior design.",
      challenge: "Reconciling postwar German modernism with traditional craft training.",
      lesson: "Good design schools teach you how to look, not what to draw.",
    },
    {
      year: "1955",
      title: "Joined Braun as an architect",
      story:
        "Hired by Erwin and Artur Braun to redesign company interiors; quickly shifted to product design.",
      challenge: "Walking into a family business in transition.",
      lesson: "The right environment hands you 10 years of opportunity in one offer.",
    },
    {
      year: "1956",
      title: "Designed the SK4 Phonosuper",
      story:
        "The 'Snow White's Coffin' — a transparent acrylic and white-metal record player that became an icon.",
      challenge: "Defending austerity against German consumer norms.",
      lesson: "A single product can announce a designer's philosophy for life.",
    },
    {
      year: "1959",
      title: "Created the Braun T3 pocket radio",
      story:
        "A handheld radio with a circular dial that prefigured the iPod's design language by 40 years.",
      challenge: "Compressing electronics into a hand-friendly slab.",
      lesson: "Good design ages slowly because it solves the underlying problem, not the trend.",
    },
    {
      year: "1961",
      title: "Promoted to Head of Design at Braun",
      story: "Led the design team that defined Braun's visual identity for decades.",
      challenge: "Managing a multidisciplinary team across razors, kitchen appliances, and audio.",
      lesson: "Continuity of taste is a leadership outcome, not a personal one.",
    },
    {
      year: "1970",
      title: "Partnered with Vitsoe",
      story:
        "Designed the 606 Universal Shelving System for Vitsoe — a modular shelving design still in production.",
      challenge: "Designing for indefinite manufacturing rather than annual model years.",
      lesson: "Time is a designer's harshest critic; long-lived designs are pre-judged.",
    },
    {
      year: "1976",
      title: "Wrote the Ten Principles of Good Design",
      story: "Asked himself 'Is my design good design?' and codified the answer.",
      challenge: "Reducing intuition to ten testable statements.",
      lesson: "If you can't write your principles down, they aren't actually principles.",
    },
    {
      year: "1995",
      title: "Retired from Braun",
      story: "Stepped back from active design after 40 years.",
      challenge: "Watching consumer electronics drift away from his ethos.",
      lesson: "Influence is measured by what continues without you.",
    },
    {
      year: "2018",
      title: "Featured in Hustwit's Rams documentary",
      story: "Brian Eno-scored portrait introduced his work to a new generation.",
      challenge: "Speaking publicly about a career he had always treated as quiet.",
      lesson: "The most disciplined designers still need to tell the story eventually.",
    },
  ],
  skills: [
    {
      name: "Reduction",
      description: "Removes elements until removing one more would break the object.",
      developed: "Carpentry training that taught addition costs material and weight.",
    },
    {
      name: "Material Literacy",
      description: "Sees plastic, aluminum, and glass as expressive materials, not commodities.",
      developed: "Decades of factory walks at Braun and Vitsoe.",
    },
    {
      name: "Design Systems",
      description: "Built a unified visual language across hundreds of Braun products.",
      developed: "Continuous head-of-design tenure across multiple product lines.",
    },
    {
      name: "Principled Critique",
      description: "Codified ten principles to test any object against.",
      developed: "Distilled from 20 years of in-house design reviews.",
    },
    {
      name: "Restraint in Color",
      description: "Used near-white, gray, and black with rare accent color.",
      developed: "Bauhaus and Ulm school inheritance refined through Braun's brand discipline.",
    },
  ],
  failures: [
    {
      title: "Limited public recognition for decades",
      context: "His work was widely copied but rarely credited until the 1990s.",
      recovery: "Continued shipping; the iPod era retroactively elevated his profile.",
      lesson: "Quiet careers compound — the body of work eventually speaks.",
    },
    {
      title: "Watching consumer electronics drift to disposable culture",
      context: "By the 90s most consumer products had abandoned longevity for fashion cycles.",
      recovery: "Spent retirement years lecturing and writing on sustainable design.",
      lesson: "If your industry abandons your ethos, become its teacher instead.",
    },
  ],
  books: [
    {
      title: "Less but Better",
      author: "Dieter Rams",
      note: "The closest thing to a Rams operating manual.",
    },
    {
      title: "Dieter Rams: As Little Design as Possible",
      author: "Sophie Lovell",
      note: "Definitive monograph on his Braun work.",
    },
    {
      title: "Designing Design",
      author: "Kenya Hara",
      note: "A parallel philosophy from a Japanese designer.",
    },
    { title: "The Form of Design", author: "Dieter Rams", note: "Collected lectures and essays." },
  ],
  influences: [
    { name: "Erwin and Artur Braun", note: "Family employers who gave him creative license." },
    {
      name: "Bauhaus and Ulm School (HfG)",
      note: "Modernist design traditions that framed his thinking.",
    },
    { name: "Wilhelm Wagenfeld", note: "Modernist designer who pre-figured Braun's clarity." },
    { name: "Hans Gugelot", note: "Ulm-trained collaborator at Braun in the 1950s." },
  ],
  videoIds: [
    "rams-documentary-trailer-2018",
    "rams-vitsoe-talk-2010",
    "rams-ten-principles-readout",
    "rams-objectified-segment-2009",
  ],
  decisions: [
    {
      title: "Stay at Braun for 40 years",
      why: "Believed continuity of taste required continuity of place.",
      risk: "Low",
      outcome: "Built the most coherent industrial-design body of work of the century.",
      impact: "Defined the visual language modern consumer electronics inherited.",
    },
    {
      title: "Partner with Vitsoe for furniture",
      why: "Saw Vitsoe as a company that would manufacture his designs indefinitely.",
      risk: "Medium",
      outcome: "606 shelving still in production after 50+ years.",
      impact: "Demonstrated that design can outlive the designer.",
    },
    {
      title: "Codify the Ten Principles",
      why: "Wanted a self-testable framework, not a manifesto.",
      risk: "Low",
      outcome: "Became the default ethics text of industrial design.",
      impact: "Made his philosophy transferable across generations.",
    },
    {
      title: "Speak publicly only in retirement",
      why: "Believed work should precede explanation.",
      risk: "Low",
      outcome: "Hustwit's documentary cemented his legacy.",
      impact: "Showed a model for designers who prefer the studio to the stage.",
    },
  ],
  insights: [
    {
      audience: "Designers",
      lesson: "Reduce until removing one more thing breaks it.",
      takeaway: "Default to subtraction; addition has to be argued for.",
    },
    {
      audience: "Product Leaders",
      lesson: "Design for indefinite manufacturing.",
      takeaway: "If the product wouldn't be made in 20 years, redesign it now.",
    },
    {
      audience: "Creators",
      lesson: "Write your principles down.",
      takeaway: "Codify the taste so the team can apply it without you in the room.",
    },
    {
      audience: "Operators",
      lesson: "Continuity beats reinvention.",
      takeaway: "Stay long enough at one place to compound a body of work.",
    },
    {
      audience: "Founders",
      lesson: "Good design is environmentally friendly.",
      takeaway:
        "Pick longevity over annual fashion cycles; it's the cheapest sustainability story.",
    },
  ],
  quotes: [
    { text: "Less, but better." },
    { text: "Good design is as little design as possible." },
    {
      text: "Indifference toward people and the reality in which they live is actually the one and only cardinal sin in design.",
    },
    { text: "Weniger, aber besser." },
    {
      text: "Design should be invisible in the sense that it serves the user without drawing attention to itself.",
    },
    { text: "Good design is honest design." },
  ],
  sampleQuestions: [
    "What are Dieter Rams's Ten Principles?",
    "How did Rams influence Apple's design language?",
    "Why did he stay at Braun for 40 years?",
    "What does 'less, but better' mean in practice?",
    "How does Rams think about sustainability through design?",
  ],
  featured: false,
};

export default dieterRams;
