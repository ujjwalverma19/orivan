import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-viktor-frankl.webp";

const viktorFrankl: PersonInput = {
  slug: "viktor-frankl",
  name: "Viktor Frankl",
  title: "Psychiatrist; Founder of Logotherapy",
  summary:
    "Survived four Nazi concentration camps, lost almost his entire family, and emerged with a psychology built on a single insight: meaning, freely chosen, is the human capacity even camps cannot take.",
  portrait,
  featured: false,
  birthYear: "1905",
  industry: "Psychiatry & Philosophy",
  country: "Austria",
  era: "Interwar Vienna → Postwar Reconstruction (1925–1997)",
  companies: ["Vienna General Hospital", "Vienna Polyclinic of Neurology", "University of Vienna"],
  roles: ["Psychiatrist", "Neurologist", "Author", "Professor"],
  tags: ["logotherapy", "meaning", "resilience", "psychiatry", "philosophy", "holocaust"],
  keyAchievement:
    "Founded logotherapy — the 'third Viennese school of psychotherapy' — and wrote 'Man's Search for Meaning,' which has sold 16+ million copies in 50+ languages.",
  timeline: [
    {
      year: "1905",
      title: "Born in Vienna, Austria-Hungary",
      story:
        "Son of a civil servant in a Jewish family; absorbed the intellectual ferment of pre-war Vienna.",
      challenge: "Witnessed the empire's collapse and Austria's interwar instability.",
      lesson: "A turbulent civic backdrop sharpens the questions that become a life's work.",
    },
    {
      year: "1923",
      title: "Corresponded with Sigmund Freud",
      story:
        "As a teenager sent essays to Freud, who arranged publication in the International Journal of Psychoanalysis.",
      challenge: "Working under the shadow of two competing schools — Freud and Adler.",
      lesson: "Reach out to your heroes; they reply more often than students expect.",
    },
    {
      year: "1930",
      title: "Earned MD at the University of Vienna",
      story:
        "Studied neurology and psychiatry; broke with both Freud and Adler over the question of meaning.",
      challenge: "Founding a new school in a city dominated by two giants.",
      lesson: "Differentiate on the question your masters refuse to take seriously.",
    },
    {
      year: "1933",
      title: "Directed the Steinhof suicide prevention program",
      story: "Treated 3,000+ women at risk of suicide; zero deaths during his tenure.",
      challenge: "Building a system around meaning rather than medication.",
      lesson: "Frameworks save lives at scale when applied with care.",
    },
    {
      year: "1937",
      title: "Opened a private practice in Vienna",
      story: "Began formal articulation of logotherapy as a meaning-centered approach.",
      challenge: "The Anschluss loomed; Jewish doctors faced shrinking practice rights.",
      lesson: "Build the body of work before history forces you to defend it from memory.",
    },
    {
      year: "1942",
      title: "Deported to Theresienstadt with his family",
      story:
        "Arrived with wife Tilly, parents, and brother; began secretly treating fellow inmates for despair.",
      challenge: "Holding a clinical role while a prisoner himself.",
      lesson: "Service is the strongest form of meaning under conditions you didn't choose.",
    },
    {
      year: "1944",
      title: "Transferred to Auschwitz",
      story: "Manuscript of his first book was sewn into his coat and confiscated on arrival.",
      challenge: "Losing the formal record of his theory.",
      lesson: "Hold ideas in mind first; manuscripts are downstream.",
    },
    {
      year: "1945",
      title: "Liberated from Türkheim (Dachau subcamp)",
      story:
        "Survived four camps; learned afterward that his wife, parents, and brother had all been murdered.",
      challenge: "Reconstructing a life with almost no surviving family.",
      lesson: "Meaning is what carries you across the abyss when everything else is taken.",
    },
    {
      year: "1946",
      title: "Wrote 'Man's Search for Meaning' in 9 days",
      story: "Dictated the manuscript on returning to Vienna; published anonymously at first.",
      challenge: "Translating direct experience of mass atrocity into a usable framework.",
      lesson: "Write the book only you can write — fast, before time domesticates the urgency.",
    },
    {
      year: "1947",
      title: "Remarried Eleonore Schwindt",
      story: "Met his second wife at the Vienna Polyclinic where he became head of neurology.",
      challenge: "Choosing life again after total loss.",
      lesson: "Resuming a life is itself an act of meaning.",
    },
    {
      year: "1955",
      title: "Appointed Professor of Neurology and Psychiatry, University of Vienna",
      story: "Codified logotherapy into a teachable system and trained thousands of clinicians.",
      challenge: "Defending logotherapy against academic dismissal as 'pop psychology.'",
      lesson: "Institutional position is necessary to keep a method alive across generations.",
    },
    {
      year: "1970",
      title: "Toured the United States lecturing",
      story: "Drew massive audiences at universities and prisons; appeared on national television.",
      challenge: "Translating European clinical language for American audiences.",
      lesson: "A globally true idea still has to be re-staged for each culture.",
    },
    {
      year: "1997",
      title: "Died in Vienna at age 92",
      story:
        "Continued seeing patients and writing until the final year; 30+ books published in his lifetime.",
      challenge: "Carrying the meaning of survival into a final decade.",
      lesson: "Late-life work consolidates the framework for everyone who comes after.",
    },
  ],
  skills: [
    {
      name: "Clinical Listening",
      description: "Diagnosed despair as a question of meaning, not just symptoms.",
      developed: "Decades of suicide-prevention and post-war trauma practice.",
    },
    {
      name: "Meaning Framing",
      description: "Reframed unavoidable suffering as a chosen attitude rather than a fate.",
      developed: "Forged in the camps and tested with patients for fifty years afterward.",
    },
    {
      name: "Writing",
      description: "Wrote 'Man's Search for Meaning' in 9 days; eventually published 30+ books.",
      developed: "Trained as a Viennese intellectual where prose was a clinical instrument.",
    },
    {
      name: "Public Lecturing",
      description: "Held large auditoriums in silence with stories of survival and choice.",
      developed: "Hundreds of post-war lectures from Vienna to American campuses.",
    },
    {
      name: "Logotherapy Method",
      description:
        "Built a structured therapeutic system around three sources of meaning — work, love, suffering chosen well.",
      developed: "Codified across decades of writing and teaching at the University of Vienna.",
    },
    {
      name: "Equanimity Under Threat",
      description: "Remained clinical and observant even inside Auschwitz.",
      developed: "Treated each day in the camps as a laboratory for his theory.",
    },
    {
      name: "Translation",
      description:
        "Translated camp experience into language clinicians, patients, and readers could use.",
      developed: "Believed unshared insight is wasted insight.",
    },
  ],
  failures: [
    {
      title: "Lost first manuscript at Auschwitz",
      context:
        "Manuscript of 'The Doctor and the Soul' was sewn into his coat and confiscated on arrival.",
      recovery: "Rewrote it after liberation; expanded with what he had learned in the camps.",
      lesson: "Ideas you can rebuild from memory are the ones worth keeping.",
    },
    {
      title: "Did not flee Vienna in 1941",
      context: "Had a US visa but chose to stay so his elderly parents would not be alone.",
      recovery: "Accepted the consequences; survived the camps with that choice as the framework.",
      lesson: "Some decisions are meant to be lived with, not optimized away.",
    },
    {
      title: "Academic dismissal of logotherapy",
      context: "Many psychiatric establishments dismissed his work as religious or unscientific.",
      recovery: "Built institutional credibility through his Vienna chair and clinical results.",
      lesson: "Outsider methods need institutional anchors to survive a generation.",
    },
    {
      title: "Controversy over Anschluss-era survival",
      context: "Later critics questioned the choices that allowed his survival in the camps.",
      recovery: "Acknowledged the moral complexity without retreating from the work.",
      lesson:
        "Survival under atrocity is not a clean moral position; honesty about that is the only defensible stance.",
    },
  ],
  books: [
    {
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      note: "His camp memoir and introduction to logotherapy; 16M+ copies sold.",
    },
    {
      title: "The Doctor and the Soul",
      author: "Viktor Frankl",
      note: "His foundational clinical text on logotherapy, rewritten after the war.",
    },
    {
      title: "The Will to Meaning",
      author: "Viktor Frankl",
      note: "His clearest theoretical statement on logotherapy's framework.",
    },
    {
      title: "Yes to Life: In Spite of Everything",
      author: "Viktor Frankl",
      note: "Lectures given just months after liberation, published in English in 2020.",
    },
    {
      title: "Recollections: An Autobiography",
      author: "Viktor Frankl",
      note: "Memoir covering his life from Vienna childhood to the camps and after.",
    },
    {
      title: "The Unheard Cry for Meaning",
      author: "Viktor Frankl",
      note: "Essays on the 'existential vacuum' of modern life.",
    },
  ],
  influences: [
    {
      name: "Sigmund Freud",
      note: "Early mentor whose framework he respected but ultimately departed from.",
    },
    {
      name: "Alfred Adler",
      note: "Second mentor; logotherapy positioned as the 'third Viennese school' after Adler's individual psychology.",
    },
    {
      name: "Søren Kierkegaard",
      note: "Existential foundation for Frankl's emphasis on freedom and responsibility.",
    },
    {
      name: "Martin Heidegger",
      note: "Philosophical companion in articulating meaning, though Frankl rejected his politics.",
    },
    { name: "Tilly Frankl", note: "First wife whose memory shaped his post-camp recovery." },
    {
      name: "Eleonore Schwindt",
      note: "Second wife and lifelong clinical and intellectual partner.",
    },
  ],
  videoIds: [
    "frankl-youth-meaning-1972",
    "frankl-interview-1979",
    "frankl-idealists-realists",
    "frankl-youngsters-challenges",
    "frankl-mans-search-summary",
  ],
  decisions: [
    {
      title: "Staying in Vienna in 1941",
      why: "Believed leaving his parents alone violated the principles he was building.",
      risk: "Extreme",
      outcome: "Lost his family but emerged with the lived basis for his life's work.",
      impact: "Made his theory unimpeachable by experience.",
    },
    {
      title: "Treating fellow prisoners in the camps",
      why: "Believed clinical service was a source of meaning even in captivity.",
      risk: "Extreme",
      outcome: "Saved lives and gathered the observations that became logotherapy.",
      impact: "Demonstrated meaning-making under the most extreme conditions imaginable.",
    },
    {
      title: "Writing 'Man's Search for Meaning' in 9 days",
      why: "Knew the urgency would fade as he readjusted to normal life.",
      risk: "Low",
      outcome: "Produced one of the 20th century's most-read books.",
      impact: "Made post-Holocaust psychology accessible to ordinary readers.",
    },
    {
      title: "Building logotherapy as an institution",
      why: "Believed the method had to outlive him to matter at scale.",
      risk: "Medium",
      outcome: "Logotherapy institutes now operate in 30+ countries.",
      impact: "Created a global clinical infrastructure for meaning-centered therapy.",
    },
    {
      title: "Continuing to lecture in Germany after the war",
      why: "Believed reconciliation required showing up in the country that had tried to kill him.",
      risk: "High",
      outcome: "Helped reframe postwar German psychiatric education.",
      impact: "Modeled what reconciliation looks like at the level of practice.",
    },
  ],
  insights: [
    {
      audience: "Anyone",
      lesson: "The last human freedom is choosing your attitude.",
      takeaway: "Circumstances dictate inputs; meaning is what you choose to do with them.",
    },
    {
      audience: "Therapists",
      lesson: "Treat the search for meaning as primary.",
      takeaway: "Symptoms are downstream of the question 'why?'",
    },
    {
      audience: "Sufferers",
      lesson: "Suffering ceases to be suffering when it finds a meaning.",
      takeaway: "Reframe doesn't erase pain; it gives it structure.",
    },
    {
      audience: "Leaders",
      lesson: "Give people a 'why.'",
      takeaway: "Engagement at scale comes from shared meaning, not incentives.",
    },
    {
      audience: "Students",
      lesson: "Don't aim at success.",
      takeaway: "Pursue meaning; success arrives sideways as a byproduct.",
    },
    {
      audience: "Survivors",
      lesson: "Reconstruct the future tense.",
      takeaway: "People who imagined a future task survived the camps at higher rates.",
    },
    {
      audience: "Citizens",
      lesson: "Freedom without responsibility is dangerous.",
      takeaway: "Augment the Statue of Liberty with a Statue of Responsibility on the West Coast.",
    },
  ],
  quotes: [
    {
      text: "Everything can be taken from a man but one thing: the last of the human freedoms — to choose one's attitude in any given set of circumstances, to choose one's own way.",
    },
    {
      text: "When we are no longer able to change a situation, we are challenged to change ourselves.",
    },
    { text: "Those who have a 'why' to live, can bear with almost any 'how.'" },
    {
      text: "Don't aim at success. The more you aim at it and make it a target, the more you are going to miss it.",
    },
    {
      text: "Life is never made unbearable by circumstances, but only by lack of meaning and purpose.",
    },
    {
      text: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
    },
    { text: "What is to give light must endure burning." },
  ],
  sampleQuestions: [
    "How did Viktor Frankl survive four concentration camps?",
    "What is logotherapy and how does it differ from Freud and Adler?",
    "Why did Frankl say meaning is the last human freedom?",
    "How did Frankl write 'Man's Search for Meaning' in 9 days?",
    "What are Frankl's three sources of meaning?",
    "Why did Frankl stay in Vienna instead of escaping to the US?",
    "What can leaders learn from Viktor Frankl about meaning?",
  ],
};

export default viktorFrankl;
