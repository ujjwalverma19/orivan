import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-edward-tufte.webp";

const edwardTufte: PersonInput = {
  slug: "edward-tufte",
  name: "Edward Tufte",
  title: "Statistician; Pioneer of Information Design",
  summary:
    "Treated charts as a form of moral seriousness — taught a generation that bad visualizations don't merely confuse, they kill, and built the standards that distinguish honest evidence from decorated noise.",
  portrait,
  featured: false,
  birthYear: "1942",
  industry: "Statistics & Information Design",
  country: "United States",
  era: "Computer-Age Data Communication (1970–present)",
  companies: ["Princeton University", "Yale University", "Graphics Press"],
  roles: ["Statistician", "Professor", "Author", "Publisher", "Sculptor"],
  tags: ["dataviz", "statistics", "design", "writing", "evidence", "education"],
  keyAchievement:
    "Self-published four canonical books on information design — 'The Visual Display of Quantitative Information,' 'Envisioning Information,' 'Visual Explanations,' and 'Beautiful Evidence' — that defined how serious quantitative communication is taught.",
  timeline: [
    {
      year: "1942",
      title: "Born in Kansas City, Missouri",
      story: "Father was a city manager; mother a teacher who emphasized rigor.",
      challenge: "Small-town start with no obvious path to information design.",
      lesson: "Disciplines you'll invent are easier to find from outside academic centers.",
    },
    {
      year: "1965",
      title: "BS in Statistics, Stanford",
      story: "Studied statistics and political science with an emphasis on quantitative methods.",
      challenge: "Bridging hard quantitative methods and political analysis.",
      lesson: "The synthesis between disciplines is more original than mastery of one.",
    },
    {
      year: "1968",
      title: "PhD in Political Science, Yale",
      story: "Dissertation used quantitative methods on political behavior.",
      challenge: "Political science was largely qualitative at the time.",
      lesson: "Bring the new tools to the field that needs them most.",
    },
    {
      year: "1968",
      title: "Joined Princeton faculty",
      story:
        "Taught statistics and political science; co-authored quantitative methodology textbooks.",
      challenge: "Establishing quantitative legitimacy in social sciences.",
      lesson: "Teach the methods until they become normal.",
    },
    {
      year: "1975",
      title: "Began work on 'Visual Display'",
      story:
        "Frustrated with bad charts in newspapers and journals, started cataloguing what worked.",
      challenge: "No publishers wanted a book about graphics design.",
      lesson: "Sometimes the book has to invent its own audience.",
    },
    {
      year: "1977",
      title: "Joined Yale as a professor",
      story: "Became Senior Critic in graphic design as well as Political Science professor.",
      challenge: "Crossing departmental lines at a research university.",
      lesson: "Cross-appointments are how new fields get institutional cover.",
    },
    {
      year: "1983",
      title: "Self-published 'The Visual Display of Quantitative Information'",
      story: "Mortgaged his house to print and design the book exactly as he wanted.",
      challenge: "Publishers wouldn't commit to the craftsmanship he demanded.",
      lesson: "When publishers won't say yes to quality, become the publisher.",
    },
    {
      year: "1990",
      title: "Published 'Envisioning Information'",
      story: "Second canonical book — won 17 awards and defined his publishing aesthetic.",
      challenge: "Maintaining production quality while scaling distribution.",
      lesson: "Craft compounds when you control the supply chain.",
    },
    {
      year: "1997",
      title: "Published 'Visual Explanations'",
      story: "Third book — case studies on cause and effect including the Challenger disaster.",
      challenge: "Translating statistical critique into accessible narrative.",
      lesson: "Powerful stories make statistical lessons stick.",
    },
    {
      year: "2003",
      title: "Wrote 'The Cognitive Style of PowerPoint'",
      story:
        "Argued PowerPoint had bureaucratized thinking and contributed to the Columbia shuttle disaster.",
      challenge: "Taking on Microsoft's most-used product in a 28-page essay.",
      lesson: "Targeting the right monopoly with a focused critique amplifies impact.",
    },
    {
      year: "2006",
      title: "Published 'Beautiful Evidence'",
      story:
        "Fourth book — introduced sparklines and the discipline of integrated visual reasoning.",
      challenge: "Synthesizing 30 years of teaching into one design philosophy.",
      lesson: "The capstone book defines how your discipline is taught after you.",
    },
    {
      year: "2010",
      title: "Appointed to White House recovery board",
      story:
        "Joined Obama's Recovery Accountability and Transparency Board to design public spending dashboards.",
      challenge: "Applying his principles inside a federal bureaucracy.",
      lesson: "Information design has civic stakes the discipline often underestimates.",
    },
    {
      year: "2020",
      title: "Continued running design workshops in his 80s",
      story:
        "Day-long Tufte courses still draw analysts, designers, and engineers from across industries.",
      challenge: "Sustaining a one-person teaching brand for four decades.",
      lesson: "A reliable in-person teaching practice can outlast any platform.",
    },
  ],
  skills: [
    {
      name: "Data-Ink Discipline",
      description:
        "Maximized the ratio of information-bearing ink to decorative noise in every chart.",
      developed: "Decades of redrawing canonical historical graphics by hand.",
    },
    {
      name: "Historical Synthesis",
      description:
        "Pulled examples from 18th-century French maps to 1986 NASA reports to make every point.",
      developed: "Obsessive archival research.",
    },
    {
      name: "Book Design",
      description:
        "Designed every page of his books personally — typography, layout, paper stock, ink.",
      developed: "Built his own publishing company to enforce standards.",
    },
    {
      name: "Public Critique",
      description:
        "Picked specific high-stakes examples (Challenger, PowerPoint) and dissected them publicly.",
      developed: "Decades of teaching and writing case studies.",
    },
    {
      name: "Workshop Pedagogy",
      description:
        "Held attention for a full day in workshops attended by tens of thousands of professionals.",
      developed: "Refined over hundreds of repeat-performance sessions.",
    },
    {
      name: "Statistical Reasoning",
      description: "Trained as a serious statistician before becoming a designer.",
      developed: "PhD-level statistical methodology training.",
    },
    {
      name: "Cross-discipline Translation",
      description:
        "Wrote so designers could learn statistics and statisticians could learn design.",
      developed: "Wrote and revised until both audiences could read fluently.",
    },
  ],
  failures: [
    {
      title: "Publishers rejecting 'Visual Display'",
      context: "No major press wanted to invest in the craftsmanship he required.",
      recovery: "Mortgaged his house, started Graphics Press, and out-sold them all.",
      lesson: "Sometimes you have to build the distribution channel yourself.",
    },
    {
      title: "PowerPoint essay backlash",
      context: "Microsoft and many corporate trainers attacked his Columbia analysis.",
      recovery: "Held to the analysis; the critique stayed canonical.",
      lesson: "Specific high-stakes targets attract specific attacks; weather them.",
    },
    {
      title: "Limited reach into product UI design",
      context: "His influence in static analytics was huge but slower to permeate live dashboards.",
      recovery: "Modern dashboard tooling eventually adopted sparklines and small multiples.",
      lesson: "Patient principles outlast the medium they were first taught in.",
    },
    {
      title: "Frosty relations with academic statistics",
      context: "Mainstream statistics journals were slow to cite his work as 'real statistics.'",
      recovery: "Built influence outside the journals through books, workshops, and consulting.",
      lesson: "Disciplinary acceptance is optional when public impact is the real metric.",
    },
  ],
  books: [
    {
      title: "The Visual Display of Quantitative Information",
      author: "Edward Tufte",
      note: "The canonical text on chart design; the foundation of modern information design.",
    },
    {
      title: "Envisioning Information",
      author: "Edward Tufte",
      note: "Designing complex multivariate displays across maps, schedules, and timelines.",
    },
    {
      title: "Visual Explanations",
      author: "Edward Tufte",
      note: "Cause and effect; includes the Challenger and cholera-map case studies.",
    },
    {
      title: "Beautiful Evidence",
      author: "Edward Tufte",
      note: "His capstone — sparklines, integrated graphics, and the discipline of evidence.",
    },
    {
      title: "The Cognitive Style of PowerPoint",
      author: "Edward Tufte",
      note: "His 28-page essay on how slideware corrupts thinking.",
    },
    {
      title: "Data Analysis for Politics and Policy",
      author: "Edward Tufte",
      note: "His early statistical methodology textbook from his Princeton years.",
    },
  ],
  influences: [
    {
      name: "John Tukey",
      note: "Princeton statistician whose exploratory data analysis shaped Tufte's outlook.",
    },
    {
      name: "Charles Joseph Minard",
      note: "His 1869 map of Napoleon's Russia campaign is Tufte's favorite chart of all time.",
    },
    { name: "John Snow", note: "Cholera map that founded epidemiology — a recurring case study." },
    {
      name: "Galileo",
      note: "Tufte calls Galileo's sketches the ancestor of integrated visual reasoning.",
    },
    {
      name: "Eadweard Muybridge",
      note: "Photographic motion studies as proto-data visualization.",
    },
    {
      name: "William Playfair",
      note: "Inventor of the line, bar, and pie chart — a foundational ancestor.",
    },
  ],
  videoIds: [
    "tufte-beautiful-evidence-highlights",
    "tufte-thinking-eye-ssac15",
    "tufte-state-keynote",
    "tufte-principles-lecture",
    "tufte-explained",
  ],
  decisions: [
    {
      title: "Self-publishing 'Visual Display' (1983)",
      why: "Wouldn't trust trade publishers to deliver the craftsmanship.",
      risk: "Extreme",
      outcome: "Out-sold trade publishers and built Graphics Press into a respected imprint.",
      impact: "Defined a discipline and the visual standard for its books.",
    },
    {
      title: "Writing 'Cognitive Style of PowerPoint' (2003)",
      why: "Believed slideware was corrupting evidence at safety-critical institutions.",
      risk: "Medium",
      outcome: "Became a canonical critique cited in disaster reviews.",
      impact: "Shifted how serious organizations think about presentation media.",
    },
    {
      title: "Joining Obama's Recovery Board (2010)",
      why: "Saw a chance to apply his principles at federal scale.",
      risk: "Low",
      outcome: "Helped design the recovery.gov dashboard.",
      impact: "Demonstrated that information design has civic weight.",
    },
    {
      title: "Running one-day workshops for 40+ years",
      why: "Believed in-person teaching transmitted the discipline best.",
      risk: "Low",
      outcome: "Tens of thousands of professionals trained directly by him.",
      impact: "Built a craft-school institution outside academia.",
    },
    {
      title: "Designing books page-by-page personally",
      why: "Refused to delegate the artifact's craft.",
      risk: "Low",
      outcome: "Books became collector items as well as references.",
      impact: "Modeled craft commitment for an entire field.",
    },
  ],
  insights: [
    {
      audience: "Analysts",
      lesson: "Maximize the data-ink ratio.",
      takeaway: "Every drop of ink that doesn't carry information is noise.",
    },
    {
      audience: "Designers",
      lesson: "Above all, show the data.",
      takeaway: "Decoration is a tax on the reader; pay it sparingly.",
    },
    {
      audience: "Engineers",
      lesson: "Sparklines belong in tables.",
      takeaway: "Trends in context beat dashboards full of giant charts.",
    },
    {
      audience: "Founders",
      lesson: "Self-publish when standards demand it.",
      takeaway: "If publishers won't honor quality, become the publisher.",
    },
    {
      audience: "Educators",
      lesson: "Use the canonical historical examples.",
      takeaway: "Snow's map and Minard's campaign teach more than any modern dashboard.",
    },
    {
      audience: "Anyone",
      lesson: "Bad evidence kills.",
      takeaway: "Treat clear graphics as a moral obligation, especially in safety-critical fields.",
    },
    {
      audience: "Leaders",
      lesson: "Beware slideware.",
      takeaway: "PowerPoint is a vendor of conclusions; demand the underlying tables.",
    },
  ],
  quotes: [
    { text: "Above all else show the data." },
    { text: "Clutter and confusion are failures of design, not attributes of information." },
    { text: "The world is much more interesting than any one discipline." },
    { text: "Graphical excellence is the well-designed presentation of interesting data." },
    {
      text: "PowerPoint is a competent slide manager and projector. But rather than supplementing a presentation, it has become a substitute for it.",
    },
    {
      text: "There are only two industries that refer to their customers as 'users': illegal drugs and software.",
    },
    { text: "Confusion and clutter are failures of design, not attributes of information." },
  ],
  sampleQuestions: [
    "What is Edward Tufte's data-ink ratio?",
    "Why did Tufte self-publish 'The Visual Display of Quantitative Information'?",
    "What did Tufte say about PowerPoint and the Columbia disaster?",
    "What are sparklines and why did Tufte invent them?",
    "How does Tufte use historical examples to teach design?",
    "Why is Minard's Napoleon graphic Tufte's favorite chart?",
    "What can analysts learn from Edward Tufte's workshops?",
  ],
};

export default edwardTufte;
