import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-geoffrey-hinton.webp";

const geoffreyHinton: PersonInput = {
  slug: "geoffrey-hinton",
  name: "Geoffrey Hinton",
  title: "Godfather of Deep Learning; Nobel Laureate in Physics 2024",
  summary:
    "The cognitive scientist who spent forty years insisting that neural networks would work — through two AI winters, one Nobel Prize, and a final-act warning that they now might work too well.",
  portrait,
  featured: false,
  birthYear: "1947",
  industry: "Artificial Intelligence & Cognitive Science",
  country: "United Kingdom / Canada",
  era: "From AI Winter to AI Spring (1972–present)",
  companies: ["Google Brain", "University of Toronto", "DNNresearch", "Vector Institute"],
  roles: ["Researcher", "Professor", "Pioneer"],
  tags: [
    "AI",
    "deep-learning",
    "neural-networks",
    "research",
    "long-term",
    "ethics",
    "first-principles",
  ],
  keyAchievement:
    "Co-invented backpropagation, championed deep neural networks through two AI winters, trained the students who built modern AI — and won the 2024 Nobel Prize in Physics for the foundational work that made it all possible.",
  timeline: [
    {
      year: "1947",
      title: "Born in Wimbledon, England",
      story:
        "Great-great-grandson of George Boole; descended from a family of mathematicians, biologists, and economists.",
      challenge: "Expected to be a brilliant academic from birth — a heavy inheritance.",
      lesson: "A famous family is a head start and a weight. Choose which to carry.",
    },
    {
      year: "1970",
      title: "Graduated from King's College, Cambridge",
      story:
        "Switched majors restlessly — natural sciences, physiology, philosophy, finally experimental psychology.",
      challenge:
        "No discipline alone gave him a satisfying account of how the brain produced thought.",
      lesson: "If no field answers your question, your question may be the start of a new field.",
    },
    {
      year: "1978",
      title: "PhD in AI from the University of Edinburgh",
      story:
        "Worked under Christopher Longuet-Higgins; faced supervisors deeply sceptical of neural network research.",
      challenge: "Doing a PhD on the unfashionable side of the great AI divide of the 1970s.",
      lesson:
        "If everyone in your field thinks you're wrong, you have an asymmetric bet — if you're right.",
    },
    {
      year: "1986",
      title: "Co-authored the backpropagation paper",
      story:
        "With David Rumelhart and Ronald Williams, published the paper that popularised backpropagation for multi-layer networks.",
      challenge: "Symbolic AI dominated; neural networks were a backwater funded by almost no one.",
      lesson: "Foundational ideas often arrive in unfashionable papers.",
    },
    {
      year: "1987",
      title: "Moved to Canada in protest of US defence funding",
      story:
        "Refused US grants tied to military applications; took a position at the University of Toronto.",
      challenge: "Walking away from American AI funding at the start of his career.",
      lesson: "Ethics can be a relocation, not just a statement.",
    },
    {
      year: "1992",
      title: "Endured the second AI winter",
      story:
        "Funding for neural network research collapsed; symbolic AI ate the rest. He kept publishing anyway.",
      challenge: "Maintaining a research programme that almost no one was hiring for.",
      lesson: "Conviction without funding is the test of whether you actually believe.",
    },
    {
      year: "2006",
      title: "Published the deep belief net paper",
      story: "Showed how to train deep networks layer by layer — the paper that woke the field up.",
      challenge: "Persuading reviewers that deep models could finally be made trainable.",
      lesson: "A single technical breakthrough can revive a 30-year-dead field overnight.",
    },
    {
      year: "2012",
      title: "AlexNet won ImageNet",
      story:
        "His students Alex Krizhevsky and Ilya Sutskever crushed the ImageNet competition using deep CNNs on NVIDIA GPUs — the moment AI changed.",
      challenge: "Convincing the computer vision community that hand-tuned features were obsolete.",
      lesson: "The students you train are the longest version of your research.",
    },
    {
      year: "2013",
      title: "Sold DNNresearch to Google",
      story:
        "Auctioned his three-person company among Google, Microsoft, Baidu, and DeepMind; Google won.",
      challenge: "Choosing the right home for an idea that had become priceless.",
      lesson: "Sometimes the right sale price is decided by an auction you didn't think to hold.",
    },
    {
      year: "2017",
      title: "Co-invented capsule networks",
      story:
        "Proposed capsule networks as a critique of CNNs — an attempt to model objects with structure.",
      challenge: "Critiquing the success his own students had built.",
      lesson: "The hardest thing to question is the paradigm your name is on.",
    },
    {
      year: "2018",
      title: "Won the Turing Award",
      story:
        "Shared the Turing Award with Yoshua Bengio and Yann LeCun for the deep learning revolution.",
      challenge: "Accepting institutional honour for work the institutions had once ignored.",
      lesson: "Vindication arrives slowly, then publicly.",
    },
    {
      year: "2023",
      title: "Resigned from Google to warn about AI risk",
      story:
        "Stepped down from Google Brain to speak freely about the existential risks of large language models.",
      challenge: "Walking away from a senior role at 75 to start a different kind of public work.",
      lesson: "Some warnings can only be given from outside the institution.",
    },
    {
      year: "2024",
      title: "Won the Nobel Prize in Physics",
      story: "Shared the Nobel with John Hopfield for the foundational work on neural networks.",
      challenge: "Accepting a Nobel in a discipline (physics) different from his own.",
      lesson: "Foundational ideas eventually choose the prize that fits them.",
    },
  ],
  skills: [
    {
      name: "Long-Horizon Conviction",
      description:
        "Sustained a 40-year research programme through two AI winters with almost no peer support.",
      developed:
        "Forged by years of supervisors and grant reviewers telling him neural networks would never work.",
    },
    {
      name: "Student Cultivation",
      description:
        "His students built modern AI: Sutskever (OpenAI), Krizhevsky, LeCun (Meta), Salakhutdinov (Apple), Vinyals (DeepMind).",
      developed:
        "Believed his role was to create the conditions for students to overtake him — and largely succeeded.",
    },
    {
      name: "Intuition-First Reasoning",
      description:
        "Often reasoned by physical analogy and biological plausibility rather than pure mathematics.",
      developed:
        "Cognitive science training; resisted the field's preference for proofs over intuitions.",
    },
    {
      name: "Idea Re-Examination",
      description:
        "Repeatedly returned to old ideas (Boltzmann machines, capsules) when new tools made them feasible.",
      developed: "Habit of keeping a 'graveyard of good ideas' and revisiting it every decade.",
    },
    {
      name: "Plain Speech",
      description:
        "Explains backpropagation, embeddings, and AI risk to general audiences without losing precision.",
      developed: "Decades of teaching undergraduates and giving interviews to non-specialists.",
    },
    {
      name: "Public Conscience",
      description:
        "Twice walked away from institutions over ethical concerns — first US military funding, then Google AI.",
      developed: "Quaker upbringing combined with academic independence.",
    },
  ],
  failures: [
    {
      title: "Decades of marginal funding (1980s–early 2000s)",
      context:
        "Neural network research was unfashionable; grants were small, prestige was negligible.",
      recovery:
        "Kept publishing and training students; the 2006 deep belief net paper finally turned the tide.",
      lesson: "An unfashionable bet pays off if you can survive the wait. Most can't.",
    },
    {
      title: "Capsule networks didn't catch on",
      context:
        "Proposed capsule networks as a successor to CNNs; the community largely ignored them.",
      recovery: "Continued refining the idea; treated it as a long-term research direction.",
      lesson:
        "Even your own students will move on from your latest idea. That's how the field grows.",
    },
    {
      title: "Late warnings about AI risk",
      context:
        "Spoke up about AI existential risk only after leaving Google in 2023, when models were already widely deployed.",
      recovery: "Used his Nobel platform to amplify the warning publicly.",
      lesson:
        "Speak earlier than feels comfortable. Vindication is not a substitute for prevention.",
    },
    {
      title: "Long delays in academic recognition",
      context:
        "Recognition for foundational work arrived only after the 2012 commercial breakthrough.",
      recovery: "Won Turing (2018) and Nobel (2024) within a decade of vindication.",
      lesson: "Recognition arrives all at once, after a long silence. Don't wait for it.",
    },
  ],
  books: [
    {
      title: "Genius Makers",
      author: "Cade Metz",
      note: "The most thorough account of Hinton's role in modern AI, with deep interviews.",
    },
    {
      title: "Parallel Distributed Processing (Vol 1 & 2)",
      author: "Rumelhart, McClelland & the PDP Group",
      note: "The 1986 collection containing the backpropagation paper — the canonical text of the connectionist revival.",
    },
    {
      title: "The Society of Mind",
      author: "Marvin Minsky",
      note: "Hinton's intellectual sparring partner — Minsky helped end the first connectionist wave; Hinton helped restart it.",
    },
    {
      title: "Vehicles",
      author: "Valentino Braitenberg",
      note: "On simple machines that produce complex behaviour — a Hinton favourite for teaching intuition.",
    },
    {
      title: "The Computational Brain",
      author: "Patricia Churchland & Terrence Sejnowski",
      note: "Co-authored by Hinton's longtime collaborator Sejnowski — required reading for the field he helped found.",
    },
  ],
  influences: [
    {
      name: "Donald Hebb",
      note: "Pioneer of synaptic plasticity ('cells that fire together wire together') — the biological seed of all connectionist models.",
    },
    {
      name: "Christopher Longuet-Higgins",
      note: "His Edinburgh PhD supervisor who switched fields from symbolic AI to connectionism — modelling intellectual courage.",
    },
    {
      name: "David Rumelhart",
      note: "Co-author of the 1986 backpropagation paper; collaborator who shared the credit and the risk.",
    },
    {
      name: "John Hopfield",
      note: "Physicist whose Hopfield networks paralleled Hinton's Boltzmann machines — eventual Nobel co-laureate.",
    },
    {
      name: "Mary Hinton (cousin) and family",
      note: "His family's long lineage of mathematicians and scientists shaped his sense of vocation.",
    },
  ],
  videoIds: [
    "hinton-60-minutes-interview",
    "hinton-nobel-lecture-2024",
    "hinton-cbc-ai-risk",
    "hinton-stanford-talk-2023",
    "hinton-coursera-neural-nets",
  ],
  decisions: [
    {
      title: "Refusing US military AI funding (1987)",
      why: "Wouldn't take grants that fed into weapons research.",
      risk: "High",
      outcome: "Moved to Canada; built the Toronto programme that produced modern AI.",
      impact: "Showed that ethical relocation can be a career-defining move, not a constraint.",
    },
    {
      title: "Sticking with neural nets through two AI winters",
      why: "Believed the biological brain proved the architecture was viable.",
      risk: "Extreme",
      outcome: "Vindicated by deep belief nets (2006) and AlexNet (2012).",
      impact: "His decades of stubbornness created the field that now defines technology.",
    },
    {
      title: "Auctioning DNNresearch to Google (2013)",
      why: "Wanted to scale the ideas with industrial compute, not just academic budgets.",
      risk: "Medium",
      outcome:
        "Google won the auction; his students moved to industry; the modern AI labs took shape.",
      impact: "Set the template for academic-to-industry transitions in deep learning.",
    },
    {
      title: "Resigning from Google to warn about AI risk (2023)",
      why: "Wanted to speak freely about existential risk without representing an employer.",
      risk: "Low",
      outcome: "Became the most credible public voice on AI safety from inside the field.",
      impact: "Re-shaped public discourse on AI risk almost overnight.",
    },
    {
      title: "Training students to surpass him",
      why: "Believed the test of a teacher is whether students go beyond their teacher.",
      risk: "Low",
      outcome: "Sutskever, Krizhevsky, Salakhutdinov and others now lead frontier labs.",
      impact: "His real legacy is not papers but the people running modern AI.",
    },
  ],
  insights: [
    {
      audience: "Researchers",
      lesson: "Stay with an unfashionable idea long enough for the world to catch up.",
      takeaway: "Neural nets were dead three times. He was right each time.",
    },
    {
      audience: "Founders",
      lesson: "Train your replacements aggressively.",
      takeaway: "The students who outgrow you are the longest version of your work.",
    },
    {
      audience: "Ethicists",
      lesson: "Leave the institution if you need to speak.",
      takeaway: "He did it twice — and both moves expanded his moral authority.",
    },
    {
      audience: "Engineers",
      lesson: "Old ideas come back when new hardware makes them feasible.",
      takeaway: "Backpropagation existed in the 1970s. GPUs in 2012 made it economical.",
    },
    {
      audience: "Scientists",
      lesson: "Reason from intuition first, formalise second.",
      takeaway: "Most of his best ideas started as physical analogies, not theorems.",
    },
    {
      audience: "Anyone",
      lesson: "Vindication arrives all at once.",
      takeaway:
        "Forty years of quiet, then Turing, Nobel, and global influence within seven years.",
    },
  ],
  quotes: [
    {
      text: "I think it's quite conceivable that humanity is just a passing phase in the evolution of intelligence.",
    },
    {
      text: "If you want to do interesting research, do something that other people think is a stupid idea.",
    },
    { text: "Backpropagation is just a way of computing gradients, but it changed everything." },
    {
      text: "We have to take seriously the possibility that, if they get to be smarter than us, they will be motivated to take control.",
    },
    { text: "Read papers, but not too many. Trust your intuitions." },
    { text: "I sometimes regret my life's work. Not entirely — but partly." },
  ],
  sampleQuestions: [
    "Why is Geoffrey Hinton called the godfather of AI?",
    "What is backpropagation and why did it matter?",
    "Why did Hinton resign from Google in 2023?",
    "How did Hinton survive the two AI winters?",
    "What was the significance of AlexNet in 2012?",
    "What are Hinton's warnings about AI risk?",
    "How did Hinton's students go on to build modern AI?",
    "Why did Hinton win the 2024 Nobel Prize in Physics?",
  ],
};

export default geoffreyHinton;
