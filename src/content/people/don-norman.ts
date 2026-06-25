import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-don-norman.webp";

const donNorman: PersonInput = {
  slug: "don-norman",
  name: "Don Norman",
  title: "Cognitive Scientist; Author of 'The Design of Everyday Things'",
  summary:
    "Coined 'user experience' and built the field — by insisting that confusing doors and broken stovetops were design failures, not user failures, and that cognition is what design actually serves.",
  portrait,
  featured: false,
  birthYear: "1935",
  industry: "Design & Cognitive Science",
  country: "United States",
  era: "Personal Computing → UX Era (1970–present)",
  companies: ["UC San Diego", "Apple", "HP", "Nielsen Norman Group", "Northwestern"],
  roles: ["Cognitive Scientist", "Author", "Professor", "VP of Advanced Technology"],
  tags: ["design", "ux", "cognitive-science", "human-factors", "education", "writing"],
  keyAchievement:
    "Wrote 'The Design of Everyday Things,' invented the title 'User Experience Architect' at Apple, and co-founded the Nielsen Norman Group — defining UX as a discipline.",
  timeline: [
    {
      year: "1935",
      title: "Born in Long Beach, California",
      story: "Raised in Los Angeles in an academic-leaning family that prized engineering.",
      challenge: "Choosing between engineering and psychology, two divergent paths.",
      lesson: "The most interesting careers refuse to choose between disciplines.",
    },
    {
      year: "1957",
      title: "BS in Electrical Engineering, MIT",
      story: "Studied EE at MIT during the dawn of modern computing.",
      challenge: "EE was a strict discipline; psychology was off the syllabus.",
      lesson: "Get the formal training before you cross into the field you actually want.",
    },
    {
      year: "1962",
      title: "PhD in Psychology, University of Pennsylvania",
      story: "Switched from engineering to mathematical psychology under Duncan Luce.",
      challenge: "Justifying the switch to advisors who saw the move as career suicide.",
      lesson: "Career moves that confuse mentors often turn out to be the most leveraged.",
    },
    {
      year: "1966",
      title: "Joined UC San Diego",
      story: "Co-founded the cognitive science department, one of the first in the world.",
      challenge: "Building a discipline that didn't yet have textbooks.",
      lesson: "Pioneer fields require institution-building, not just research.",
    },
    {
      year: "1986",
      title: "Co-edited 'User-Centered System Design'",
      story: "With Stephen Draper, formalized the discipline of user-centered design.",
      challenge: "Convincing engineers that users came first.",
      lesson: "Naming a movement is half of starting it.",
    },
    {
      year: "1988",
      title: "Published 'The Design of Everyday Things'",
      story:
        "Originally titled 'The Psychology of Everyday Things'; reframed bad design as a public-health issue.",
      challenge: "Selling cognitive science to a general audience.",
      lesson: "A clear book outlasts a hundred papers.",
    },
    {
      year: "1993",
      title: "Joined Apple as 'User Experience Architect'",
      story: "Coined the title that defined a generation of design jobs.",
      challenge: "Building UX inside Apple's engineering-led culture of the early 90s.",
      lesson: "Job titles are taxonomy weapons; choose them with intent.",
    },
    {
      year: "1995",
      title: "VP of Advanced Technology Group, Apple",
      story: "Led research across hardware, software, and HCI.",
      challenge: "Defending long-horizon research during Apple's pre-Jobs near-death years.",
      lesson: "Research budgets are the first to go when execs panic.",
    },
    {
      year: "1998",
      title: "Co-founded Nielsen Norman Group",
      story: "Launched a UX consulting and research firm with Jakob Nielsen.",
      challenge: "Building demand for an emerging discipline among corporate clients.",
      lesson:
        "If you want a discipline to mature, build the institution that defines its standards.",
    },
    {
      year: "2003",
      title: "Published 'Emotional Design'",
      story: "Expanded his framework: visceral, behavioral, reflective levels of design.",
      challenge: "Squaring earlier 'usability' message with the role of beauty and meaning.",
      lesson: "Update your framework publicly; consistency is overrated.",
    },
    {
      year: "2010",
      title: "Returned to academia at Northwestern",
      story: "Founded the Design Lab at UCSD shortly after.",
      challenge: "Building a design school inside an engineering university.",
      lesson: "Design needs interdisciplinary homes; build them deliberately.",
    },
    {
      year: "2023",
      title: "Published 'Design for a Better World'",
      story: "Late-career call for sustainable, humanity-centered design at planetary scale.",
      challenge: "Reframing his own discipline as too focused on individual users.",
      lesson: "It's never too late to admit your field needs to grow.",
    },
  ],
  skills: [
    {
      name: "Affordance Theory",
      description:
        "Popularized Gibson's concept of affordances and applied it to interface design.",
      developed: "Decades synthesizing perception research with applied design.",
    },
    {
      name: "Plain-language Writing",
      description:
        "Wrote textbooks that read like trade books and trade books that taught psychology.",
      developed: "Dozens of revisions; he rewrites obsessively.",
    },
    {
      name: "User Research Methodology",
      description:
        "Codified the methods — observation, contextual inquiry, usability testing — that became standard UX practice.",
      developed: "Decades of empirical lab work, then consulting with global brands.",
    },
    {
      name: "Critical Synthesis",
      description: "Could pull a discipline-spanning framework from a stack of papers in days.",
      developed: "Trained as a cognitive scientist before specialization narrowed the field.",
    },
    {
      name: "Institution Building",
      description: "Founded departments, labs, and a consultancy that gave UX its credentials.",
      developed: "Five decades of academic and corporate institution work.",
    },
    {
      name: "Public Speaking",
      description: "Made cognitive science feel like common sense for boardroom audiences.",
      developed: "Hundreds of corporate and conference talks.",
    },
    {
      name: "Self-revision",
      description: "Publicly updated his framework when new evidence demanded it.",
      developed: "Treated his books as living documents, not monuments.",
    },
  ],
  failures: [
    {
      title: "Early UX inside Apple",
      context: "Joined Apple at a turbulent moment when research budgets were unstable.",
      recovery: "Used the platform to build credibility, then left to start NN/g.",
      lesson: "When an org won't fund the work, leave and fund it yourself.",
    },
    {
      title: "Initial dismissal of beauty in design",
      context: "'Design of Everyday Things' downplayed aesthetics — drew valid criticism.",
      recovery: "Wrote 'Emotional Design' to integrate beauty into the framework.",
      lesson: "Defend your worldview only as long as the evidence does.",
    },
    {
      title: "UX backlash against consulting",
      context: "Some academic colleagues criticized NN/g as commercializing the field.",
      recovery: "Argued institutional consulting was the only way to scale standards.",
      lesson: "Discipline-building requires unpopular institution-building.",
    },
    {
      title: "Late acknowledgement of sustainability",
      context: "Spent much of his career focused on individual user delight, not collective harm.",
      recovery: "Published 'Design for a Better World' to reframe the discipline.",
      lesson: "Frameworks need to expand to match the scale of their consequences.",
    },
  ],
  books: [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      note: "The canonical UX text; revised and expanded in 2013.",
    },
    {
      title: "Emotional Design",
      author: "Don Norman",
      note: "His three-level framework: visceral, behavioral, reflective.",
    },
    {
      title: "Living with Complexity",
      author: "Don Norman",
      note: "Why complexity is necessary and how to make it feel simple.",
    },
    {
      title: "Design for a Better World",
      author: "Don Norman",
      note: "Late-career argument for humanity-centered, sustainable design.",
    },
    {
      title: "User Centered System Design",
      author: "Don Norman & Stephen Draper",
      note: "The foundational academic anthology that named the field.",
    },
    {
      title: "The Design of Future Things",
      author: "Don Norman",
      note: "His take on automation and the human side of intelligent products.",
    },
  ],
  influences: [
    {
      name: "James J. Gibson",
      note: "Perception psychologist whose affordances concept Norman popularized.",
    },
    {
      name: "Herbert Simon",
      note: "Cognitive scientist whose bounded-rationality framing shaped his work.",
    },
    { name: "Jakob Nielsen", note: "Long-time co-founder and methodological partner at NN/g." },
    { name: "Marvin Minsky", note: "Early influence on his cognitive science work at MIT." },
    {
      name: "Christopher Alexander",
      note: "Pattern-language thinking shaped his views on design.",
    },
    {
      name: "George Miller",
      note: "Cognitive psychology pioneer whose work framed his early research.",
    },
  ],
  videoIds: [
    "norman-ted-three-ways",
    "norman-design-everyday-things-talk",
    "norman-emotional-design",
    "norman-emotional-design-theory",
    "norman-we-design-wrong",
  ],
  decisions: [
    {
      title: "Switching from EE to psychology (1959)",
      why: "Believed human cognition was the real bottleneck, not circuits.",
      risk: "High",
      outcome: "Became one of the founders of cognitive science.",
      impact: "Reframed how engineers think about users.",
    },
    {
      title: "Writing 'The Design of Everyday Things' for general readers (1988)",
      why: "Believed the cognitive frame would only matter if non-experts could use it.",
      risk: "Medium",
      outcome: "Became the canonical UX book read by millions.",
      impact: "Created the educated demand that grew the UX profession.",
    },
    {
      title: "Coining 'User Experience Architect' (1993)",
      why: "Wanted a title that captured the breadth of cognitive-led design.",
      risk: "Low",
      outcome: "Reshaped how tens of thousands of jobs would be named.",
      impact: "Gave the discipline a name product orgs could hire against.",
    },
    {
      title: "Founding Nielsen Norman Group (1998)",
      why: "Saw consulting as the fastest way to scale UX standards.",
      risk: "Medium",
      outcome: "Became the most influential UX consultancy worldwide.",
      impact: "Trained a generation of UX practitioners through reports and courses.",
    },
    {
      title: "Updating his framework with 'Emotional Design'",
      why: "Conceded that earlier work had under-weighted aesthetics.",
      risk: "Low",
      outcome: "Restored the full picture of usability + beauty + meaning.",
      impact: "Modeled intellectual honesty across a career.",
    },
  ],
  insights: [
    {
      audience: "Designers",
      lesson: "Bad design is a public-health issue.",
      takeaway: "Confusion costs lives in cockpits and emergency rooms — not just frustration.",
    },
    {
      audience: "Engineers",
      lesson: "If users 'fail,' the design failed.",
      takeaway: "Blame the artifact, then redesign it.",
    },
    {
      audience: "Founders",
      lesson: "Coin the title.",
      takeaway: "Naming the role shapes who you can hire and what they'll build.",
    },
    {
      audience: "Researchers",
      lesson: "Write for non-experts.",
      takeaway: "A clear book outlasts a hundred citations.",
    },
    {
      audience: "Leaders",
      lesson: "Update your framework publicly.",
      takeaway: "Consistency is a vice when evidence has moved.",
    },
    {
      audience: "Anyone",
      lesson: "Affordances are everywhere.",
      takeaway: "Notice the doors you push when they say 'pull'; that's design teaching you.",
    },
    {
      audience: "Educators",
      lesson: "Pioneer fields need institution-building.",
      takeaway: "Departments and degrees mature a discipline faster than papers.",
    },
  ],
  quotes: [
    { text: "Good design is actually a lot harder to notice than poor design." },
    {
      text: "Two of the most important characteristics of good design are discoverability and understanding.",
    },
    { text: "Attractive things work better." },
    {
      text: "Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating.",
    },
    {
      text: "Rule of thumb: if you think something is clever and sophisticated beware — it is probably self-indulgence.",
    },
    { text: "It is the duty of machines and those who design them to understand people." },
    { text: "The real problem with the interface is that it is an interface." },
  ],
  sampleQuestions: [
    "What is 'The Design of Everyday Things' about?",
    "How did Don Norman coin the term 'user experience'?",
    "What are affordances and why do they matter?",
    "What is Don Norman's three-level emotional design framework?",
    "How did Don Norman build the field of UX?",
    "Why did Don Norman update his views in 'Emotional Design'?",
    "What can designers learn from Don Norman's career?",
  ],
};

export default donNorman;
