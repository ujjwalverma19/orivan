import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-marie-curie.webp";

const marieCurie: PersonInput = {
  slug: "marie-curie",
  name: "Marie Curie",
  title: "Two-time Nobel laureate; pioneer of radioactivity",
  summary:
    "A Polish-born scientist who walked across Europe to study physics, discovered two new elements, won Nobel Prizes in two different sciences, and pushed open the door for every woman scientist who came after her.",
  portrait,
  birthYear: "1867",
  industry: "Physics & Chemistry",
  country: "Poland / France",
  era: "Late 19th–Early 20th Century Science (1891–1934)",
  companies: ["Sorbonne (Université de Paris)", "Institut du Radium", "Radium Institute Warsaw"],
  roles: ["Scientist", "Professor", "Researcher"],
  tags: [
    "science",
    "physics",
    "chemistry",
    "discovery",
    "perseverance",
    "research",
    "nobel",
    "women-in-science",
  ],
  keyAchievement:
    "Discovered polonium and radium; first person — and only woman — to win Nobel Prizes in two different sciences.",
  timeline: [
    {
      year: "1867",
      title: "Born Maria Skłodowska in Warsaw",
      story:
        "Daughter of two teachers in Russian-occupied Poland; lost her mother to tuberculosis at age 10.",
      challenge: "Polish education denied women university admission.",
      lesson: "Restrictions on access often produce the most determined autodidacts.",
    },
    {
      year: "1885",
      title: "Joined the underground 'Flying University'",
      story: "Studied secretly with other women in Warsaw's clandestine higher-education network.",
      challenge: "Risk of arrest under Russian rule.",
      lesson: "Where official channels close, parallel institutions form.",
    },
    {
      year: "1891",
      title: "Moved to Paris alone",
      story:
        "Followed her sister Bronisława to Paris and enrolled at the Sorbonne with almost no money.",
      challenge: "Survived winters in a Paris attic eating bread and tea.",
      lesson:
        "Education is a multi-year investment that begins with willingness to be uncomfortable.",
    },
    {
      year: "1893",
      title: "Graduated first in her Sorbonne physics class",
      story: "Became the first woman to earn a physics degree from the Sorbonne.",
      challenge: "Studying in French as a second language.",
      lesson: "Outsiders who outwork insiders compound recognition over time.",
    },
    {
      year: "1895",
      title: "Married Pierre Curie",
      story: "Married physicist Pierre Curie, who shared her lab work and life.",
      challenge: "Choosing a partnership of equal collaboration in an era that didn't allow it.",
      lesson: "Pick a partner who multiplies your work rather than competes with it.",
    },
    {
      year: "1898",
      title: "Discovered polonium and radium",
      story: "Isolated two new elements by hand-processing tons of pitchblende ore.",
      challenge: "Years of manual chemistry in a leaky shed laboratory.",
      lesson: "Major discoveries often require physical labor no apprentice will do for you.",
    },
    {
      year: "1903",
      title: "Won Nobel Prize in Physics",
      story: "Shared with Pierre and Henri Becquerel for the discovery of radioactivity.",
      challenge: "Nobel committee initially considered awarding only the men; Pierre intervened.",
      lesson: "Recognition has to be lobbied for even after the work is done.",
    },
    {
      year: "1906",
      title: "Pierre killed in a Paris street accident",
      story:
        "Took over Pierre's Sorbonne chair, becoming the first woman professor in the university's history.",
      challenge: "Raising two daughters as a widow while running a major research program.",
      lesson: "Personal catastrophe doesn't pause the research; the work becomes the continuity.",
    },
    {
      year: "1911",
      title: "Won Nobel Prize in Chemistry",
      story:
        "Sole recipient for the discovery of polonium and radium and the isolation of pure radium.",
      challenge: "Personal scandal over an affair with Paul Langevin nearly derailed the award.",
      lesson: "Public scrutiny falls harder on women in science; do the work anyway.",
    },
    {
      year: "1914",
      title: "Built mobile X-ray units for WWI",
      story:
        "Designed and drove 'petites Curies' — vehicles equipped to image battlefield injuries.",
      challenge: "Operating across active battlefields with her daughter Irène.",
      lesson: "Apply the discovery to the world's most urgent problem in your lifetime.",
    },
    {
      year: "1921",
      title: "Toured the United States for radium funding",
      story: "Met President Harding and received a gram of radium for research.",
      challenge: "Public attention exhausted her introverted temperament.",
      lesson: "Fundraising is the price of running an independent research program.",
    },
    {
      year: "1934",
      title: "Died of aplastic anemia from radiation exposure",
      story: "Decades of unprotected radium handling caused fatal blood disorder.",
      challenge: "Her notebooks remain too radioactive to handle without lead today.",
      lesson: "Working at the frontier carries unknown costs that show up generations later.",
    },
  ],
  skills: [
    {
      name: "Experimental Persistence",
      description:
        "Processed tons of pitchblende by hand to isolate fractions of a gram of radium.",
      developed: "Years of methodical fractional crystallization with Pierre.",
    },
    {
      name: "Cross-Disciplinary Mastery",
      description: "Performed groundbreaking work in both physics and chemistry.",
      developed: "Self-study at the Flying University and structured study at the Sorbonne.",
    },
    {
      name: "Public Communication",
      description: "Traveled internationally to fundraise for the Radium Institute.",
      developed: "Forced into the role after Pierre's death.",
    },
    {
      name: "Mentorship",
      description: "Trained the next generation of women in physics including her daughter Irène.",
      developed: "Built the Radium Institute around a teaching-research model.",
    },
    {
      name: "Institutional Building",
      description: "Founded research institutes in Paris and Warsaw.",
      developed: "Lobbied governments and donors for decades to secure funding.",
    },
  ],
  failures: [
    {
      title: "Rejection by the French Academy of Sciences (1911)",
      context: "Voted down for membership by one vote despite two Nobel Prizes.",
      recovery: "Kept publishing; the Academy admitted women decades later.",
      lesson: "Institutional gatekeepers can lag the work by a generation.",
    },
    {
      title: "Langevin affair scandal",
      context:
        "Press coverage of an affair with a married colleague threatened her Nobel acceptance.",
      recovery: "Traveled to Stockholm to accept anyway; refocused on the institute.",
      lesson: "Public scandal is shorter-lived than the work you continue doing.",
    },
    {
      title: "Unprotected radium handling",
      context: "Decades of exposure caused fatal blood disorder.",
      recovery:
        "Pioneered radiation-safety standards too late for herself but in time for her successors.",
      lesson: "Frontier work demands documenting hazards even as you discover them.",
    },
  ],
  books: [
    {
      title: "Pierre Curie",
      author: "Marie Curie",
      note: "Her biography of her husband and scientific partner.",
    },
    {
      title: "Madame Curie",
      author: "Ève Curie",
      note: "Definitive biography by her younger daughter.",
    },
    {
      title: "Radioactive: Marie & Pierre Curie",
      author: "Lauren Redniss",
      note: "Illustrated biography of the partnership.",
    },
    {
      title: "Obsessive Genius: The Inner World of Marie Curie",
      author: "Barbara Goldsmith",
      note: "Modern scholarly biography emphasizing the human cost.",
    },
  ],
  influences: [
    { name: "Pierre Curie", note: "Husband, scientific partner, and laboratory collaborator." },
    {
      name: "Henri Becquerel",
      note: "Discoverer of radioactivity whose work prompted her doctoral thesis.",
    },
    {
      name: "Władysław Skłodowski (her father)",
      note: "Mathematics and physics teacher who tutored her at home.",
    },
    {
      name: "Bronisława Dłuska (her sister)",
      note: "Funded her early years in Paris; later founded the Warsaw Radium Institute together.",
    },
    { name: "Albert Einstein", note: "Defended her publicly during the Langevin scandal." },
  ],
  videoIds: [
    "curie-bbc-documentary",
    "curie-radioactivity-explained",
    "curie-ted-ed",
    "curie-american-experience",
  ],
  decisions: [
    {
      title: "Move to Paris alone in 1891",
      why: "Polish universities barred women.",
      risk: "High",
      outcome: "Earned two degrees and began her doctoral research.",
      impact: "Set the template for women crossing borders for education.",
    },
    {
      title: "Choose radioactivity as her PhD topic",
      why: "Becquerel's recent discovery was unexplored and instrument-friendly.",
      risk: "Medium",
      outcome: "Led to the discovery of two new elements.",
      impact: "Founded the field that would transform medicine and physics.",
    },
    {
      title: "Refuse to patent radium",
      why: "Believed scientific knowledge should be openly shared.",
      risk: "Medium",
      outcome: "Forewent enormous personal wealth.",
      impact: "Set a public-good precedent in early 20th-century science.",
    },
    {
      title: "Drive mobile X-ray units in WWI",
      why: "Wanted radioactivity to serve immediate human need.",
      risk: "Extreme",
      outcome: "Hundreds of thousands of soldiers were imaged at the front.",
      impact: "Demonstrated that science can be a national service in wartime.",
    },
    {
      title: "Found two Radium Institutes (Paris and Warsaw)",
      why: "Wanted to leave permanent institutional infrastructure.",
      risk: "Low",
      outcome: "Both institutes remain leading research centers today.",
      impact: "Created continuity beyond a single career.",
    },
  ],
  insights: [
    {
      audience: "Scientists",
      lesson: "Pick a topic where the instruments are new.",
      takeaway: "Frontiers open when measurement opens — chase the new tool.",
    },
    {
      audience: "Founders",
      lesson: "Institutions outlive careers.",
      takeaway: "Build something that will run after you stop.",
    },
    {
      audience: "Researchers",
      lesson: "Open knowledge is a multiplier.",
      takeaway: "Refuse patents when the public-good upside is large.",
    },
    {
      audience: "Leaders",
      lesson: "Mentorship is your sustainable output.",
      takeaway: "Train the people who'll take the field further than you can.",
    },
    {
      audience: "Anyone",
      lesson: "Outsiders compound recognition through work, not access.",
      takeaway: "Show up to the laboratory before anyone notices you're there.",
    },
  ],
  quotes: [
    { text: "Nothing in life is to be feared, it is only to be understood." },
    { text: "Be less curious about people and more curious about ideas." },
    {
      text: "I have frequently been questioned, especially by women, of how I could reconcile family life with a scientific career. Well, it has not been easy.",
    },
    { text: "One never notices what has been done; one can only see what remains to be done." },
    { text: "Have no fear of perfection — you'll never reach it." },
  ],
  sampleQuestions: [
    "How did Marie Curie discover radium?",
    "What did she sacrifice for her research?",
    "Why did she refuse to patent radium?",
    "How did she pioneer women's role in science?",
    "What was her work during WWI?",
  ],
  featured: false,
};

export default marieCurie;
