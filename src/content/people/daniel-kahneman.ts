import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-daniel-kahneman.webp";

const danielKahneman: PersonInput = {
  slug: "daniel-kahneman",
  name: "Daniel Kahneman",
  title: "Nobel Laureate, Founder of Behavioral Economics",
  summary:
    "The psychologist who proved economists wrong about rationality — and gave the world a vocabulary for the two systems running in every human head.",
  portrait,
  featured: false,
  birthYear: "1934",
  industry: "Psychology & Behavioral Economics",
  country: "United States (born Tel Aviv)",
  era: "Cognitive Revolution to Behavioral Economics (1961–2024)",
  companies: [
    "Hebrew University of Jerusalem",
    "University of British Columbia",
    "UC Berkeley",
    "Princeton University",
    "The Greatest Good",
  ],
  roles: ["Psychologist", "Professor", "Author", "Researcher"],
  tags: [
    "psychology",
    "decision-making",
    "behavioral-economics",
    "biases",
    "rationality",
    "judgment",
    "noise",
  ],
  keyAchievement:
    "Won the 2002 Nobel Prize in Economics (as a psychologist) for prospect theory — the work with Amos Tversky that founded behavioral economics.",
  timeline: [
    {
      year: "1934",
      title: "Born in Tel Aviv, raised in Paris",
      story:
        "Lithuanian Jewish family living in occupied France; his father was briefly held in a deportation camp.",
      challenge:
        "Spent his childhood hiding from the Nazis, moving between safe houses in rural France.",
      lesson:
        "Early exposure to human cruelty made the study of human judgment a personal mission.",
    },
    {
      year: "1948",
      title: "Moved to newly founded Israel",
      story:
        "Family emigrated to British Mandate Palestine just before the State of Israel was declared.",
      challenge: "Starting over again in a third language and a country at war.",
      lesson: "Identity is what you carry, not what you leave behind.",
    },
    {
      year: "1954",
      title: "Drafted as a psychologist in the IDF",
      story:
        "Designed the personality assessment system used by the Israeli military to evaluate officer candidates.",
      challenge:
        "At 20, redesigning the methodology used to evaluate every Israeli officer for decades.",
      lesson: "Sometimes your most lasting work happens before anyone considers you an expert.",
    },
    {
      year: "1961",
      title: "Earned PhD from UC Berkeley",
      story:
        "Studied perception and cognition; returned to Hebrew University as a junior faculty member.",
      challenge:
        "Bridging the rigor of American experimental psychology with Israeli academic life.",
      lesson: "Train abroad, build at home. The combination is harder to replicate.",
    },
    {
      year: "1969",
      title: "Met Amos Tversky in Jerusalem",
      story:
        "Tversky gave a guest lecture; Kahneman pushed back hard. They went for coffee and started a 30-year collaboration.",
      challenge:
        "Two brilliant, opinionated people learning to think jointly without either dominating.",
      lesson: "The most productive partnerships are intellectually equal and emotionally generous.",
    },
    {
      year: "1974",
      title: "Published 'Judgment Under Uncertainty' in Science",
      story:
        "The paper that introduced cognitive heuristics — availability, representativeness, anchoring — to the broader scientific world.",
      challenge:
        "Convincing economists that humans aren't the rational agents their models assumed.",
      lesson: "If your field's foundational assumption is wrong, document it precisely.",
    },
    {
      year: "1979",
      title: "Published 'Prospect Theory' in Econometrica",
      story:
        "Showed how people actually weight gains and losses asymmetrically — the foundation of behavioral economics.",
      challenge: "Getting a psychology paper accepted in a top economics journal in 1979.",
      lesson: "Bridge disciplines by submitting your best work to the harder field's journal.",
    },
    {
      year: "1996",
      title: "Death of Amos Tversky",
      story:
        "Lost his closest collaborator to melanoma; the 30-year partnership ended just as their work was reaching mainstream acceptance.",
      challenge: "Continuing the research and the public role alone.",
      lesson: "Build collaborations that can carry the field forward even when one of you is gone.",
    },
    {
      year: "2002",
      title: "Awarded Nobel Prize in Economics",
      story:
        "Won for prospect theory — and used the Nobel speech to publicly credit Tversky, who would have shared it.",
      challenge:
        "Receiving an economics Nobel as a psychologist who had never taken an economics class.",
      lesson: "Honors find work that the field couldn't ignore. Keep producing that kind of work.",
    },
    {
      year: "2011",
      title: "Published 'Thinking, Fast and Slow'",
      story:
        "His 500-page summary of a career's research; became one of the best-selling psychology books ever written.",
      challenge: "Compressing decades of technical work into a book for general readers.",
      lesson: "The best summary of your work is written by you, in your 70s.",
    },
    {
      year: "2021",
      title: "Published 'Noise' with Sibony and Sunstein",
      story:
        "Extended his framework from individual bias to system-level noise in decisions like medical diagnosis and judicial sentencing.",
      challenge:
        "Convincing experts that random variability in their judgments was as dangerous as systematic bias.",
      lesson: "Even a famous framework deserves an upgrade. Don't stop at one big idea.",
    },
    {
      year: "2024",
      title: "Died at 90 in Switzerland",
      story:
        "Reported to have chosen assisted death in Switzerland; spent his final years writing and teaching.",
      challenge: "Choosing how to leave on his own terms.",
      lesson: "How you end is part of the work. Decide it before others decide it for you.",
    },
  ],
  skills: [
    {
      name: "Experimental Design",
      description:
        "Crafted simple paradigms (the Linda problem, framing effects) that revealed deep cognitive structure.",
      developed:
        "Years of Israeli military assessment work taught him to design tests that revealed real judgment, not impressed people.",
    },
    {
      name: "Intellectual Partnership",
      description:
        "Worked alongside Amos Tversky for 30 years in true co-authorship — neither could later separate whose idea was whose.",
      developed:
        "Daily conversations in Jerusalem coffee shops where ideas were drafted out loud and rewritten together.",
    },
    {
      name: "Cross-disciplinary Translation",
      description:
        "Made cognitive psychology legible to economists, doctors, lawyers, and the general public.",
      developed:
        "Forced himself to publish in target-discipline journals rather than psychology venues alone.",
    },
    {
      name: "Intellectual Honesty",
      description:
        "Publicly disavowed his own priming-effect chapter in 'Thinking, Fast and Slow' when replication failed.",
      developed:
        "Modeled after Karl Popper's standard: a theory survives by surviving attempts to kill it.",
    },
    {
      name: "Long-Form Synthesis",
      description:
        "Held an entire field's worth of evidence in mind and rendered it as a single coherent narrative.",
      developed: "Five years of writing 'Thinking, Fast and Slow' in his 70s.",
    },
    {
      name: "Teaching",
      description:
        "Mentored generations of researchers including Richard Thaler, who built behavioral economics as a sub-field.",
      developed: "Decades of seminars at Hebrew University, Berkeley, and Princeton.",
    },
  ],
  failures: [
    {
      title: "Priming-effects chapter in 'Thinking, Fast and Slow' (2011)",
      context:
        "Devoted a chapter to social-priming research that subsequently failed widespread replication attempts.",
      recovery:
        "Publicly retracted his confidence in the chapter, wrote letters to lead researchers, and called the priming literature 'a train wreck.'",
      lesson:
        "Publicly walk back your own claims when the evidence turns. Your reputation survives. Your authority grows.",
    },
    {
      title: "Early hedonic-adaptation framework",
      context:
        "His earlier work suggested humans return to baseline well-being after major life events; later evidence showed this was overstated.",
      recovery: "Updated his views and incorporated the criticism into later well-being research.",
      lesson: "Even your most cited finding deserves the same scrutiny you apply to others.",
    },
    {
      title: "Underweighting the role of luck in expertise (early career)",
      context:
        "Early frameworks gave too much weight to deliberate practice and too little to environmental noise.",
      recovery:
        "The book 'Noise' (2021) was partly his correction — taking variability seriously as an equal partner to bias.",
      lesson: "The next book is often the answer to your previous book's blind spot.",
    },
  ],
  books: [
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      note: "His canonical summary; required reading for anyone making decisions for a living.",
    },
    {
      title: "Noise",
      author: "Daniel Kahneman, Olivier Sibony, Cass Sunstein",
      note: "Extends his framework from bias to unwanted variability in expert judgments.",
    },
    {
      title: "The Undoing Project",
      author: "Michael Lewis",
      note: "Narrative account of the Kahneman–Tversky partnership; the best introduction to the people behind the ideas.",
    },
    {
      title: "Misbehaving",
      author: "Richard Thaler",
      note: "Kahneman's protégé telling the founding story of behavioral economics from the inside.",
    },
    {
      title: "Nudge",
      author: "Richard Thaler & Cass Sunstein",
      note: "The applied version of Kahneman's research — how design choices reshape behavior.",
    },
  ],
  influences: [
    {
      name: "Amos Tversky",
      note: "Thirty-year collaborator without whom the work would not exist; Kahneman called him a co-author of his own thinking.",
    },
    {
      name: "Paul Meehl",
      note: "Statistical psychologist whose work on clinical vs. actuarial prediction shaped Kahneman's early skepticism of expert intuition.",
    },
    {
      name: "Herbert Simon",
      note: "Bounded-rationality pioneer whose framework Kahneman built upon.",
    },
    {
      name: "Richard Thaler",
      note: "Younger collaborator who carried the behavioral revolution into economics departments and policy.",
    },
    {
      name: "Cass Sunstein",
      note: "Co-author on 'Noise' and intellectual partner in late-career applied work.",
    },
    {
      name: "Karl Popper",
      note: "Set the falsifiability standard Kahneman used to discipline his own theories.",
    },
  ],
  videoIds: [
    "kahneman-ted-2010-experiencing-self",
    "kahneman-google-talk-thinking-fast",
    "kahneman-rationally-speaking",
    "kahneman-tyler-cowen-conversation",
    "kahneman-bbc-hardtalk",
  ],
  decisions: [
    {
      title: "Partnering with Tversky (1969)",
      why: "Saw an intellectual equal who pushed his thinking sharper.",
      risk: "Low",
      outcome: "Thirty years of joint work that founded behavioral economics.",
      impact: "Modeled what real co-authorship can produce.",
    },
    {
      title: "Submitting Prospect Theory to Econometrica (1979)",
      why: "Wanted economists to engage the work on their own turf, not dismiss it as psychology.",
      risk: "Medium",
      outcome: "Acceptance in a top economics journal that put behavioral economics on the map.",
      impact: "Created the bridge between two disciplines that had ignored each other.",
    },
    {
      title: "Spending five years writing 'Thinking, Fast and Slow' (2006–2011)",
      why: "Believed the field needed a synthesis a non-academic could read.",
      risk: "Low",
      outcome: "Became one of the most influential popular science books of the century.",
      impact: "Mainstreamed cognitive biases into general culture, journalism, and management.",
    },
    {
      title: "Publicly disavowing the priming chapter (2017)",
      why: "Couldn't endorse research the replication evidence no longer supported.",
      risk: "Medium",
      outcome:
        "Strengthened his credibility and reshaped how the field handled replication failures.",
      impact: "Modeled how to admit error at the height of fame.",
    },
    {
      title: "Writing 'Noise' at 87",
      why: "Saw that variability in judgment was an under-studied counterpart to bias.",
      risk: "Low",
      outcome: "Extended the framework that defined his career.",
      impact: "Showed that great frameworks deserve a second book, not a sequel.",
    },
  ],
  insights: [
    {
      audience: "Decision-makers",
      lesson: "We have two systems: fast and intuitive, slow and deliberate.",
      takeaway: "Decide which system the question deserves before answering it.",
    },
    {
      audience: "Managers",
      lesson: "Replace judgment with rules when stakes are high and feedback is noisy.",
      takeaway: "A simple algorithm often beats a smart expert. Use checklists.",
    },
    {
      audience: "Investors",
      lesson: "Losses hurt about twice as much as gains feel good.",
      takeaway:
        "Risk tolerance is asymmetric. Design portfolios for the feeling, not the spreadsheet.",
    },
    {
      audience: "Researchers",
      lesson: "Replication is a feature, not an insult.",
      takeaway: "Treat failed replications as data, not attacks. Update fast.",
    },
    {
      audience: "Anyone",
      lesson: "Nothing in life is as important as you think it is while you are thinking about it.",
      takeaway: "The focusing illusion warps every plan. Step back before deciding.",
    },
    {
      audience: "Hiring managers",
      lesson: "Interview noise destroys hiring quality.",
      takeaway:
        "Score structured criteria separately and average them; don't form a holistic judgment.",
    },
    {
      audience: "Forecasters",
      lesson: "Take the outside view first.",
      takeaway:
        "Look at base rates for similar projects before trusting your inside-the-project optimism.",
    },
  ],
  quotes: [
    { text: "Nothing in life is as important as you think it is while you are thinking about it." },
    {
      text: "A reliable way to make people believe in falsehoods is frequent repetition, because familiarity is not easily distinguished from truth.",
    },
    { text: "We are blind to our blindness. We have very little idea of how little we know." },
    {
      text: "The illusion that we understand the past fosters overconfidence in our ability to predict the future.",
    },
    {
      text: "Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.",
    },
    {
      text: "The acquisition of skills requires a regular environment, an adequate opportunity to practice, and rapid and unequivocal feedback.",
    },
    {
      text: "When you are asked what you are thinking about, you can normally answer. You believe you know what goes on in your mind, which often consists of one conscious thought leading in an orderly way to another. But that is not the only way the mind works.",
    },
  ],
  sampleQuestions: [
    "What is the difference between System 1 and System 2 thinking?",
    "How did Kahneman and Tversky develop prospect theory?",
    "Why did Kahneman publicly disavow part of his own book?",
    "What is loss aversion and how does it affect decisions?",
    "How can managers reduce noise in expert judgments?",
    "What can investors learn from behavioral economics?",
    "How did Kahneman handle the death of his collaborator Amos Tversky?",
  ],
};

export default danielKahneman;
