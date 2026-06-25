import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-george-orwell.webp";

const georgeOrwell: PersonInput = {
  slug: "george-orwell",
  name: "George Orwell",
  title: "Novelist; Essayist; Political Journalist",
  summary:
    "Turned every political compromise he refused — empire, fascism, Soviet apologism, sloppy English — into prose so plain it became permanent. Wrote two novels that named two centuries of authoritarianism.",
  portrait,
  featured: false,
  birthYear: "1903",
  industry: "Literature & Political Journalism",
  country: "United Kingdom",
  era: "Empire → Total War → Cold War (1922–1950)",
  companies: ["Indian Imperial Police (Burma)", "BBC Eastern Service", "The Observer", "Tribune"],
  roles: ["Novelist", "Essayist", "Journalist", "Broadcaster"],
  tags: ["writing", "politics", "language", "truth", "totalitarianism", "essays"],
  keyAchievement:
    "Wrote 'Animal Farm' and 'Nineteen Eighty-Four,' creating the vocabulary — Big Brother, doublethink, thoughtcrime, Newspeak — that defines how we name authoritarian power.",
  timeline: [
    {
      year: "1903",
      title: "Born Eric Arthur Blair in Motihari, British India",
      story: "Son of a colonial opium-department official; sent home to England as a child.",
      challenge: "Outsider in his own country from age four.",
      lesson: "Outsider perspective is the writer's earliest training.",
    },
    {
      year: "1917",
      title: "Won scholarship to Eton",
      story:
        "Educated alongside the British upper class he would later spend his career critiquing.",
      challenge: "Scholarship boy in an aristocratic environment.",
      lesson: "Spending years inside a power structure clarifies what's actually true about it.",
    },
    {
      year: "1922",
      title: "Joined the Indian Imperial Police in Burma",
      story: "Five years as a colonial officer in a regime he came to despise.",
      challenge: "Carrying out empire while ceasing to believe in it.",
      lesson: "Live the system you intend to critique; abstractions won't do.",
    },
    {
      year: "1927",
      title: "Resigned from the police",
      story: "Returned to Europe determined to become a writer and to atone for colonial service.",
      challenge: "Walking away from a respected career with no manuscript ready.",
      lesson: "Quit clean; the half-loyal life is worst of all.",
    },
    {
      year: "1933",
      title: "Published 'Down and Out in Paris and London'",
      story: "First book under the pen name George Orwell, based on years of voluntary poverty.",
      challenge: "Building credibility on lived experience rather than reportage.",
      lesson: "Direct experience is the cheapest research and the most expensive currency.",
    },
    {
      year: "1936",
      title: "Fought in the Spanish Civil War",
      story: "Joined POUM militia; shot through the throat by a Francoist sniper.",
      challenge: "Survived assassination attempts by Stalinist allies as well as fascists.",
      lesson: "Some 'allies' are more dangerous than the enemy.",
    },
    {
      year: "1938",
      title: "Published 'Homage to Catalonia'",
      story: "Memoir of Spain that exposed Soviet betrayal of the Republican left.",
      challenge: "Publishing inconvenient truths in a left-wing press that didn't want them.",
      lesson: "Telling truth about your own side is the test of honesty.",
    },
    {
      year: "1941",
      title: "Joined BBC Eastern Service",
      story:
        "Wrote and produced wartime broadcasts for India; later said it taught him about propaganda.",
      challenge: "Working inside a propaganda apparatus while keeping integrity.",
      lesson: "The closer you study propaganda, the better you can write against it.",
    },
    {
      year: "1944",
      title: "Wrote 'Animal Farm'",
      story:
        "Finished the manuscript; rejected by multiple publishers afraid of upsetting the Soviets.",
      challenge: "Selling an anti-Stalin allegory during the wartime alliance with Moscow.",
      lesson: "Truths in the wrong season need patient publishers.",
    },
    {
      year: "1945",
      title: "'Animal Farm' published",
      story: "Released after V-E Day; immediate international success.",
      challenge: "Wife Eileen died unexpectedly during surgery the same year.",
      lesson: "Personal grief and professional vindication arrive uncoordinated.",
    },
    {
      year: "1946",
      title: "Published 'Politics and the English Language'",
      story: "The essay that defined his rules for clear prose and political writing.",
      challenge: "Indicting a literary establishment he was now part of.",
      lesson: "Critique your own discipline first; everyone else next.",
    },
    {
      year: "1949",
      title: "'Nineteen Eighty-Four' published",
      story:
        "Written while tubercular on the Scottish island of Jura; introduced Big Brother and Newspeak.",
      challenge: "Finishing a 400-page novel with one lung functioning.",
      lesson: "The most urgent work is finished against the body's objections.",
    },
    {
      year: "1950",
      title: "Died of tuberculosis at 46",
      story: "Married Sonia Brownell on his deathbed; never recovered from his Jura winter.",
      challenge: "Outliving his own books by only a few months.",
      lesson: "Some writers live just long enough to deliver the work.",
    },
  ],
  skills: [
    {
      name: "Plain English",
      description:
        "Codified six rules for prose that became the standard for clear political writing.",
      developed: "A decade as a journalist editing his own prose ruthlessly.",
    },
    {
      name: "Direct Experience",
      description:
        "Lived as a tramp, a colonial policeman, a soldier — and wrote only from inside.",
      developed: "Deliberate immersion as a research method.",
    },
    {
      name: "Allegory",
      description: "Compressed political arguments into stories a child could read and remember.",
      developed: "Years drafting Animal Farm to find the simplest possible form.",
    },
    {
      name: "Political Vocabulary Building",
      description:
        "Coined Big Brother, doublethink, thoughtcrime, Newspeak, memory hole — words now load-bearing in political English.",
      developed: "Writer-as-engineer of language as well as story.",
    },
    {
      name: "Self-Honesty",
      description: "Reviewed his own past loyalties as ruthlessly as he reviewed others'.",
      developed: "Forged in Spain when his own side tried to kill him.",
    },
    {
      name: "Essay Form",
      description:
        "Wrote some of the 20th century's best essays on language, books, food, and tea.",
      developed: "A weekly column at Tribune trained him to write to a deadline at length.",
    },
    {
      name: "Refusal",
      description: "Refused honors, party loyalties, and easy money throughout his career.",
      developed: "Treated independence as a non-negotiable working condition.",
    },
  ],
  failures: [
    {
      title: "Years rejected by publishers",
      context:
        "'Down and Out' was rejected multiple times; 'Animal Farm' rejected by four publishers afraid of the Soviets.",
      recovery: "Persisted, eventually found brave publishers (Gollancz, then Warburg).",
      lesson: "Books refused for political reasons often become the most permanent.",
    },
    {
      title: "Colonial police service",
      context: "Spent five years enforcing the empire he came to despise.",
      recovery: "Wrote 'Shooting an Elephant' and 'Burmese Days' to atone in print.",
      lesson: "Public confession of past complicity is more powerful than denial.",
    },
    {
      title: "Sloppy political alliances early on",
      context: "Like many young leftists, initially uncritical of the Soviet Union.",
      recovery:
        "Spain stripped the illusions; spent the rest of his life writing against Stalinism.",
      lesson: "Update your politics in public when the evidence demands it.",
    },
    {
      title: "Late-life tuberculosis",
      context: "Worked himself to exhaustion on Jura with worsening TB.",
      recovery: "Finished 1984 before he died; the trade-off was conscious.",
      lesson: "Some books are worth your remaining lung capacity.",
    },
  ],
  books: [
    {
      title: "Nineteen Eighty-Four",
      author: "George Orwell",
      note: "His final novel; the most influential dystopia ever written.",
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      note: "The Stalin allegory that became the entry-level political novel for two generations.",
    },
    {
      title: "Homage to Catalonia",
      author: "George Orwell",
      note: "Spanish Civil War memoir; his political pivot point.",
    },
    {
      title: "Politics and the English Language",
      author: "George Orwell",
      note: "The essay on plain prose that every writing teacher still assigns.",
    },
    {
      title: "Down and Out in Paris and London",
      author: "George Orwell",
      note: "First book; immersive reportage on urban poverty.",
    },
    {
      title: "The Road to Wigan Pier",
      author: "George Orwell",
      note: "Investigative book on northern English mining communities and democratic socialism.",
    },
  ],
  influences: [
    {
      name: "Jonathan Swift",
      note: "Master of political allegory; direct ancestor of Animal Farm.",
    },
    {
      name: "Rudyard Kipling",
      note: "Complicated admiration; modeled the writer-imperialist tension.",
    },
    {
      name: "Charles Dickens",
      note: "Subject of one of Orwell's best long essays; influenced his moral clarity.",
    },
    {
      name: "Aldous Huxley",
      note: "His Eton French teacher; later 'Brave New World' was the rival dystopia.",
    },
    {
      name: "Henry Miller",
      note: "Modeled prose freedom Orwell admired even when he disagreed politically.",
    },
    {
      name: "James Burnham",
      note: "'The Managerial Revolution' shaped the political theory underlying 1984.",
    },
  ],
  videoIds: [
    "orwell-life-in-pictures",
    "orwell-final-warning",
    "orwell-warning-to-mankind",
    "orwell-why-i-write",
    "orwell-politics-english-language",
  ],
  decisions: [
    {
      title: "Resigning from the Imperial Police (1927)",
      why: "Refused to keep enforcing a system he had come to detest.",
      risk: "High",
      outcome: "Pivoted to a writing career that produced two canonical novels.",
      impact: "Modeled walking away from a respectable system on principle.",
    },
    {
      title: "Fighting in Spain (1936)",
      why: "Believed anti-fascism required direct participation.",
      risk: "Extreme",
      outcome: "Nearly killed; produced 'Homage to Catalonia' and the rest of his politics.",
      impact: "Made his anti-totalitarianism unimpeachable by experience.",
    },
    {
      title: "Publishing 'Animal Farm' against publisher resistance (1944–45)",
      why: "Refused to soften the Stalin critique to ease the wartime alliance.",
      risk: "High",
      outcome: "Became an international bestseller within months of release.",
      impact: "Made anti-totalitarianism speakable in the post-war left.",
    },
    {
      title: "Finishing 1984 on Jura while gravely ill",
      why: "Believed the warning had to be delivered before he died.",
      risk: "Extreme",
      outcome: "Completed and shipped the book; died eight months later.",
      impact: "Created the dystopia that named 20th-century surveillance states.",
    },
    {
      title: "Refusing honors and party loyalties",
      why: "Independence was the working condition his books required.",
      risk: "Low",
      outcome: "Stayed free of factional capture throughout his career.",
      impact: "Modeled what unaffiliated political writing actually looks like.",
    },
  ],
  insights: [
    {
      audience: "Writers",
      lesson: "Never use a long word where a short one will do.",
      takeaway: "Plain English is a moral choice, not a style preference.",
    },
    {
      audience: "Citizens",
      lesson: "Political language is designed to make lies sound truthful.",
      takeaway: "Read every cliché for what it conceals.",
    },
    {
      audience: "Journalists",
      lesson: "Live inside the story.",
      takeaway: "Distance corrodes accuracy; immersion sharpens it.",
    },
    {
      audience: "Leaders",
      lesson: "Watch your own side.",
      takeaway: "Tribal loyalty is the easiest path to writing falsehoods you'll believe.",
    },
    {
      audience: "Anyone",
      lesson:
        "If liberty means anything, it's the right to tell people what they don't want to hear.",
      takeaway: "Free speech that only protects agreeable speech isn't speech.",
    },
    {
      audience: "Students",
      lesson: "Direct experience beats secondary research.",
      takeaway: "Go live the thing before you write about it.",
    },
    {
      audience: "Editors",
      lesson: "Break the rules to avoid barbarisms.",
      takeaway: "Orwell's sixth rule trumps the other five; clarity above all.",
    },
  ],
  quotes: [
    {
      text: "If liberty means anything at all, it means the right to tell people what they do not want to hear.",
    },
    {
      text: "Political language is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.",
    },
    { text: "In a time of universal deceit, telling the truth is a revolutionary act." },
    {
      text: "Who controls the past controls the future. Who controls the present controls the past.",
    },
    { text: "All animals are equal, but some animals are more equal than others." },
    { text: "Big Brother is watching you." },
    { text: "Good prose should be transparent, like a window pane." },
  ],
  sampleQuestions: [
    "Why did George Orwell write 'Nineteen Eighty-Four'?",
    "What is 'Politics and the English Language' about?",
    "How did fighting in the Spanish Civil War change Orwell's politics?",
    "Why did publishers refuse 'Animal Farm' during World War II?",
    "What are Orwell's six rules for clear writing?",
    "How did Orwell's time in the Burma police shape his work?",
    "What can modern writers learn from George Orwell's essays?",
  ],
};

export default georgeOrwell;
