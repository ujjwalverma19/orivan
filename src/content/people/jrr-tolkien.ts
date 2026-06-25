import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jrr-tolkien.webp";

const jrrTolkien: PersonInput = {
  slug: "jrr-tolkien",
  name: "J.R.R. Tolkien",
  title: "Philologist; Professor; Author of 'The Lord of the Rings'",
  summary:
    "Invented languages first, then the world they would be spoken in — and proved that a single Oxford philologist, working evenings for forty years, could create the mythology a country didn't know it was missing.",
  portrait,
  featured: false,
  birthYear: "1892",
  industry: "Literature & Philology",
  country: "United Kingdom",
  era: "Edwardian Britain → Cold War (1911–1973)",
  companies: ["University of Leeds", "Pembroke College, Oxford", "Merton College, Oxford"],
  roles: ["Philologist", "Professor", "Author", "WWI Officer"],
  tags: ["literature", "philology", "worldbuilding", "language", "myth", "writing"],
  keyAchievement:
    "Wrote 'The Hobbit' and 'The Lord of the Rings,' inventing modern fantasy as a genre — built on decades of philological scholarship and the Quenya and Sindarin languages he created.",
  timeline: [
    {
      year: "1892",
      title: "Born in Bloemfontein, Orange Free State",
      story: "Family moved to England when he was three after his father died in South Africa.",
      challenge: "Lost both parents by age twelve.",
      lesson:
        "Imagination is sometimes built on the absence of the people who would have shared it.",
    },
    {
      year: "1908",
      title: "Met Edith Bratt",
      story: "Fell in love at sixteen; his guardian forbade contact until he turned twenty-one.",
      challenge: "Forced separation from the woman who would become Lúthien.",
      lesson: "Forced patience can become the mythology of a love.",
    },
    {
      year: "1911",
      title: "Entered Exeter College, Oxford",
      story: "Read Classics, then switched to English Language and Literature.",
      challenge: "Choosing philology over the more prestigious classics track.",
      lesson: "Follow the field that makes you forget the time.",
    },
    {
      year: "1915",
      title: "Commissioned as a Second Lieutenant",
      story: "Joined the Lancashire Fusiliers as Britain entered World War I.",
      challenge: "Reconciling academic life with imminent trench warfare.",
      lesson: "The catastrophe doesn't wait for the right moment in your career.",
    },
    {
      year: "1916",
      title: "Survived the Battle of the Somme",
      story: "Served as battalion signals officer; lost most of his close friends in the war.",
      challenge:
        "Witnessing industrial slaughter on a scale his generation didn't have language for.",
      lesson: "Direct experience of horror becomes the unspoken backbone of every later page.",
    },
    {
      year: "1917",
      title: "Began the legendarium in hospital",
      story:
        "Recovering from trench fever, started writing 'The Fall of Gondolin' — the seed of Middle-earth.",
      challenge: "Inventing a mythology while recovering from a war and grieving lost friends.",
      lesson: "The work that matters most often begins in convalescence.",
    },
    {
      year: "1920",
      title: "Lecturer in English at the University of Leeds",
      story:
        "First academic post; co-edited a definitive edition of 'Sir Gawain and the Green Knight.'",
      challenge: "Establishing scholarly credibility while privately constructing Quenya.",
      lesson: "Day-job rigor funds the private projects.",
    },
    {
      year: "1925",
      title: "Elected Rawlinson and Bosworth Professor of Anglo-Saxon at Oxford",
      story: "Returned to Oxford as one of the youngest professors in the university's history.",
      challenge: "Defending philology against modern English studies' rising influence.",
      lesson: "Old disciplines need confident, modern defenders.",
    },
    {
      year: "1929",
      title: "Helped found the Inklings",
      story: "Informal Oxford literary group with C.S. Lewis and others; read drafts aloud weekly.",
      challenge: "Sustaining a writing practice with no external deadline.",
      lesson: "Find the small group that takes your unfinished work seriously.",
    },
    {
      year: "1937",
      title: "'The Hobbit' published",
      story:
        "Originally a children's tale told to his own children; became an unexpected bestseller.",
      challenge: "Reconciling academic dignity with a successful children's book.",
      lesson: "Don't be embarrassed by the work the audience actually loves.",
    },
    {
      year: "1937",
      title: "Began 'The Lord of the Rings'",
      story: "Allen & Unwin asked for a Hobbit sequel; the project took 17 years.",
      challenge: "Writing a long-form mythology around academic duties and family life.",
      lesson: "Generational books are completed evenings, not weekends.",
    },
    {
      year: "1954",
      title: "'The Fellowship of the Ring' published",
      story:
        "First volume of the trilogy released after years of revision and publisher negotiation.",
      challenge: "Publishers wanted a single book; he insisted on three volumes.",
      lesson: "Defend the structural choices the work requires.",
    },
    {
      year: "1973",
      title: "Died in Bournemouth at 81",
      story:
        "Left 'The Silmarillion' unfinished; son Christopher would spend the next 47 years editing the legendarium.",
      challenge: "Trusting another generation with the unfinished work.",
      lesson: "A literary legacy outlives you only when someone else loves it as you did.",
    },
  ],
  skills: [
    {
      name: "Philology",
      description: "Deep mastery of Old English, Old Norse, Middle English, Gothic, and Finnish.",
      developed: "Decades of Oxford scholarship and editorial work.",
    },
    {
      name: "Constructed Languages",
      description:
        "Invented Quenya and Sindarin with full phonology, grammar, and historical evolution.",
      developed: "Started in his teens; refined for sixty years.",
    },
    {
      name: "Worldbuilding",
      description: "Built Middle-earth with consistent history, geography, races, and cosmology.",
      developed:
        "Treated worldbuilding as scholarship; cross-referenced his own appendices obsessively.",
    },
    {
      name: "Long-form Patience",
      description:
        "Spent 17 years writing 'The Lord of the Rings' in evenings around teaching and family.",
      developed: "Inklings accountability plus a refusal to release until ready.",
    },
    {
      name: "Mythopoeia",
      description:
        "Wrote with the conviction that England lacked its own mythology and he could supply one.",
      developed: "Lifelong reading of Norse, Finnish, and Celtic mythology.",
    },
    {
      name: "Lecturing",
      description:
        "Held Oxford audiences with dramatic recitations of Beowulf in the original Old English.",
      developed: "Decades of teaching in tutorial and lecture format.",
    },
    {
      name: "Friendship",
      description:
        "Sustained intellectual friendships (Lewis, the Inklings) that anchored his writing.",
      developed: "Weekly group readings for two decades.",
    },
  ],
  failures: [
    {
      title: "'The Silmarillion' unfinished at death",
      context: "Spent 60 years on the foundational mythology and never published it himself.",
      recovery:
        "Son Christopher edited and published it in 1977 and another decade of derivative volumes.",
      lesson: "Some bodies of work are deliberately too large for one lifetime.",
    },
    {
      title: "WWI loss of close friends",
      context: "Three of his four closest school friends died in WWI.",
      recovery:
        "Channelled the grief into Frodo's path through the Dead Marshes and the broader theme of loss.",
      lesson: "Grief becomes mythology when you don't deny it.",
    },
    {
      title: "Initial publisher resistance to LOTR scope",
      context: "Allen & Unwin balked at three volumes; Collins refused the manuscript altogether.",
      recovery: "Held firm on structure; A&U eventually published all three volumes.",
      lesson: "Defend the work's shape even against the publisher you trust.",
    },
    {
      title: "Slow acceptance in serious literary circles",
      context: "Critics dismissed LOTR as escapist fantasy through the 1950s and 60s.",
      recovery: "Audience took the work seriously across generations; criticism caught up.",
      lesson: "Audience verdicts outlast critical fashion.",
    },
  ],
  books: [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      note: "His central work; modern fantasy's foundational text.",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      note: "Children's tale that became the gateway to Middle-earth for generations.",
    },
    {
      title: "The Silmarillion",
      author: "J.R.R. Tolkien (ed. Christopher Tolkien)",
      note: "The foundational mythology, published posthumously.",
    },
    {
      title: "On Fairy-Stories",
      author: "J.R.R. Tolkien",
      note: "His essay on the moral and imaginative function of fantasy.",
    },
    {
      title: "Beowulf: The Monsters and the Critics",
      author: "J.R.R. Tolkien",
      note: "Landmark lecture that reshaped Beowulf scholarship for the 20th century.",
    },
    {
      title: "The Letters of J.R.R. Tolkien",
      author: "Tolkien & Humphrey Carpenter (ed.)",
      note: "Indispensable companion to his methods, intentions, and theology.",
    },
  ],
  influences: [
    {
      name: "C.S. Lewis",
      note: "Best friend, Inklings co-founder, fiercest reader; their conversations shaped both their works.",
    },
    { name: "Edith Bratt Tolkien", note: "Wife of 55 years; model for Lúthien Tinúviel." },
    {
      name: "Christopher Tolkien",
      note: "Son and literary executor who edited the posthumous legendarium.",
    },
    {
      name: "Beowulf poet",
      note: "The medieval voice he interpreted as scholar and channelled as novelist.",
    },
    {
      name: "Elias Lönnrot / Kalevala",
      note: "Finnish epic that inspired the linguistic and mythic structure of Middle-earth.",
    },
    {
      name: "William Morris",
      note: "Victorian fantasy and prose style that prefigured Tolkien's.",
    },
  ],
  videoIds: [
    "tolkien-all-interviews",
    "tolkien-legacy-doc",
    "tolkien-bbc-1968",
    "tolkien-ww1-inspiration",
    "tolkien-1964-interview",
  ],
  decisions: [
    {
      title: "Switching from Classics to English at Oxford (1913)",
      why: "Philology pulled harder than the prestige of Classics.",
      risk: "Medium",
      outcome: "Became one of the century's leading philologists.",
      impact: "Routed his life into the field that would seed Middle-earth.",
    },
    {
      title: "Beginning the legendarium during WWI recovery (1917)",
      why: "Needed an imaginative project to survive the aftermath of the Somme.",
      risk: "Low",
      outcome: "Started 60 years of work that became 'The Silmarillion.'",
      impact: "Founded modern fantasy literature.",
    },
    {
      title: "Publishing 'The Hobbit' as children's literature (1937)",
      why: "Trusted the bedtime stories he had told his children.",
      risk: "Low",
      outcome: "Unexpected bestseller that opened the door to LOTR.",
      impact: "Validated his own mythology with a broad audience.",
    },
    {
      title: "Insisting on three volumes for LOTR (1953)",
      why: "Believed the structure required a single narrative in three parts.",
      risk: "Medium",
      outcome: "Format became the model for the modern fantasy trilogy.",
      impact: "Defined a genre publishing template still used today.",
    },
    {
      title: "Refusing the Disney film rights (1960s)",
      why: "Disliked what Disney had done with mythological material.",
      risk: "Low",
      outcome: "Held licensing leverage for decades.",
      impact: "Set a precedent for author control over IP adaptations.",
    },
  ],
  insights: [
    {
      audience: "Writers",
      lesson: "Worldbuilding is scholarship.",
      takeaway:
        "Treat invented languages, maps, and chronologies with academic rigor; readers feel the difference.",
    },
    {
      audience: "Founders",
      lesson: "Long-horizon work is compatible with a day job.",
      takeaway: "LOTR was written evenings around teaching and family for 17 years.",
    },
    {
      audience: "Creators",
      lesson: "The unfinished work matters.",
      takeaway: "The Silmarillion's incompleteness didn't diminish its influence; intention did.",
    },
    {
      audience: "Students",
      lesson: "Pick the field that makes you forget the time.",
      takeaway: "Philology over Classics changed his life — and English literature with it.",
    },
    {
      audience: "Artists",
      lesson: "Find your Inklings.",
      takeaway: "Weekly readings to a small group accountable readers can sustain decades of work.",
    },
    {
      audience: "Anyone",
      lesson: "Mythology is a civic resource.",
      takeaway:
        "Cultures starve without stories; build them deliberately if your nation lacks them.",
    },
    {
      audience: "Survivors",
      lesson: "Grief can become mythology.",
      takeaway: "WWI losses are everywhere in Middle-earth; named and dignified, not denied.",
    },
  ],
  quotes: [
    { text: "Not all those who wander are lost." },
    { text: "It's a dangerous business, Frodo, going out your door." },
    { text: "I cordially dislike allegory in all its manifestations." },
    {
      text: "I have claimed that Escape is one of the main functions of fairy-stories, and since I do not disapprove of them, it is plain that I do not accept the tone in which they are usually denounced.",
    },
    { text: "All we have to decide is what to do with the time that is given us." },
    { text: "There is some good in this world, and it's worth fighting for." },
    { text: "Faithless is he that says farewell when the road darkens." },
  ],
  sampleQuestions: [
    "How did J.R.R. Tolkien invent the languages of Middle-earth?",
    "How did WWI shape 'The Lord of the Rings'?",
    "Why did Tolkien start writing 'The Silmarillion'?",
    "What was the Inklings group and what role did it play?",
    "Why did Tolkien insist on three volumes for LOTR?",
    "How did Christopher Tolkien shape his father's legacy?",
    "What can writers learn from Tolkien's 17-year writing process?",
  ],
};

export default jrrTolkien;
