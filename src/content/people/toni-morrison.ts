import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-toni-morrison.webp";

const toniMorrison: PersonInput = {
  slug: "toni-morrison",
  name: "Toni Morrison",
  title: "Nobel laureate, author of Beloved and Song of Solomon",
  summary:
    "An editor at Random House who wrote her first novel before work in the early morning hours — and ended up rewriting the American literary canon and winning every major prize a writer can win.",
  portrait,
  birthYear: "1931",
  industry: "Publishing & Literature",
  country: "United States",
  era: "Modern American Letters (1970–2019)",
  companies: ["Random House", "Princeton University", "Howard University"],
  roles: ["Author", "Editor", "Professor", "Essayist"],
  tags: ["writer", "novelist", "editor", "nobel", "craft", "language", "literary", "icon", "race"],
  keyAchievement:
    "First Black woman to win the Nobel Prize in Literature (1993); Pulitzer Prize for Beloved (1988).",
  timeline: [
    {
      year: "1931",
      title: "Born Chloe Wofford in Lorain, Ohio",
      story: "Daughter of a welder and a domestic worker who told her ghost stories.",
      challenge: "Growing up in a Depression-era integrated steel town.",
      lesson: "Family storytelling is often the first writing training you get.",
    },
    {
      year: "1949",
      title: "Enrolled at Howard University",
      story: "Studied English; nicknamed 'Toni' on campus.",
      challenge:
        "Encountered the South's segregation for the first time touring with the Howard Players.",
      lesson: "Geographic context changes what you understand about your own country.",
    },
    {
      year: "1953",
      title: "Master's at Cornell on Faulkner and Woolf",
      story: "Wrote her thesis on alienation in Faulkner and Virginia Woolf.",
      challenge: "Mastering the white modernist canon while preparing to expand it.",
      lesson: "You must read the canon you intend to rewrite.",
    },
    {
      year: "1957",
      title: "Married Harold Morrison",
      story: "Married, had two sons; the marriage ended in divorce in 1964.",
      challenge: "Building a writing life as a single working mother of two.",
      lesson: "Writing life adapts to family life; not the reverse.",
    },
    {
      year: "1965",
      title: "Took editor job at Random House",
      story:
        "Became a senior editor at the prestigious imprint; published Angela Davis, Toni Cade Bambara, Muhammad Ali, Gayl Jones.",
      challenge: "Building a Black literary list inside a white institution.",
      lesson: "Editors shape canons more than they're credited for.",
    },
    {
      year: "1970",
      title: "Published The Bluest Eye",
      story: "Wrote it in early-morning hours while editing during the day.",
      challenge:
        "Convincing publishers that there was an audience for literary fiction about Black girls.",
      lesson: "Some markets you have to demonstrate exist before publishers will believe in them.",
    },
    {
      year: "1973",
      title: "Released Sula",
      story: "Second novel; nominated for the National Book Award.",
      challenge: "Sustaining literary work while editing full time.",
      lesson: "Two careers compound differently than either alone.",
    },
    {
      year: "1977",
      title: "Won National Book Critics Circle Award for Song of Solomon",
      story: "Established her as a major American writer.",
      challenge: "Carrying a male protagonist after two women-centered novels.",
      lesson: "Range as a writer is built across books, not within them.",
    },
    {
      year: "1987",
      title: "Published Beloved",
      story: "Won the Pulitzer Prize the following year.",
      challenge:
        "Writing about American slavery in a way the literary establishment had largely avoided.",
      lesson: "Take on the subject your culture refuses to look at.",
    },
    {
      year: "1989",
      title: "Joined Princeton faculty",
      story: "First Black woman to hold a named chair at an Ivy League university.",
      challenge: "Adding a third career on top of writing and editing.",
      lesson:
        "Late-career institutional positions create the stability that allows the boldest work.",
    },
    {
      year: "1993",
      title: "Won the Nobel Prize in Literature",
      story: "First Black woman ever to win.",
      challenge: "Carrying the weight of representation in her acceptance speech.",
      lesson:
        "Speeches at the highest stages should be written with the next generation reading them.",
    },
    {
      year: "2012",
      title: "Awarded Presidential Medal of Freedom",
      story: "Received the honor from President Obama.",
      challenge: "Reconciling activism with literary craft over a six-decade career.",
      lesson: "Politics and craft can coexist if neither colonizes the other.",
    },
    {
      year: "2019",
      title: "Passed in New York",
      story: "Died at 88 after publishing essays and a final novel in her last decade.",
      challenge: "Working through her eighties despite declining health.",
      lesson: "A lifelong writing practice is the most reliable form of late-life vitality.",
    },
  ],
  skills: [
    {
      name: "Sentence-Level Craft",
      description:
        "Constructs sentences with the density of poetry; rewrites passages dozens of times.",
      developed: "Years as an editor watching what failed sentences look like.",
    },
    {
      name: "Historical Imagination",
      description:
        "Recovers untold Black American stories through fiction grounded in archival research.",
      developed: "Editor's discipline of fact-checking applied to her own work.",
    },
    {
      name: "Mentor Editing",
      description: "Built the careers of writers she edited; treated editing as art, not service.",
      developed: "Random House years; Princeton workshops.",
    },
    {
      name: "Public Voice",
      description: "Spoke about race, gender, and American history with literary authority.",
      developed: "Nobel lecture as the codification of decades of essay-writing.",
    },
    {
      name: "Early-Morning Discipline",
      description: "Wrote before dawn while raising two children alone.",
      developed: "Years of having no other available time.",
    },
    {
      name: "Cultural Excavation",
      description:
        "Recovered earlier Black women writers — Zora Neale Hurston above all — and brought them back into print.",
      developed: "Editorial work she treated as cultural infrastructure.",
    },
  ],
  failures: [
    {
      title: "Critical resistance to The Bluest Eye",
      context: "First novel sold modestly and received mixed reviews.",
      recovery: "Kept writing; later reread as a foundational text after Beloved's success.",
      lesson: "First books are sometimes recognized only after later ones light them up.",
    },
    {
      title: "Beloved Oprah-film struggle",
      context: "1998 film adaptation underperformed despite Oprah Winfrey's championing.",
      recovery: "Did not let film performance affect novel's reputation.",
      lesson: "A book's identity should not depend on its movie.",
    },
    {
      title: "Random House restructuring in the 80s",
      context: "Industry consolidation made her Black literary list harder to sustain.",
      recovery: "Used the moment to pivot fully to writing and teaching.",
      lesson: "When the institution stops supporting the work, the work has to relocate.",
    },
  ],
  books: [
    {
      title: "Playing in the Dark",
      author: "Toni Morrison",
      note: "Her own critical work on race in American literature.",
    },
    {
      title: "Invisible Man",
      author: "Ralph Ellison",
      note: "Foundational text for the canon she rewrote.",
    },
    {
      title: "Their Eyes Were Watching God",
      author: "Zora Neale Hurston",
      note: "Predecessor she championed publicly when Hurston had fallen out of print.",
    },
    {
      title: "The Sound and the Fury",
      author: "William Faulkner",
      note: "Studied for her Cornell master's; lifelong reference point.",
    },
  ],
  influences: [
    { name: "Zora Neale Hurston", note: "Predecessor whose voice she helped recanonize." },
    { name: "James Baldwin", note: "Contemporary in essay-writing on race and craft." },
    { name: "Her father, George Wofford", note: "Welder who modeled disciplined craft." },
    {
      name: "Her grandmother, Ardelia Willis",
      note: "Source of family ghost stories that shaped Beloved.",
    },
    {
      name: "William Faulkner",
      note: "Modernist whose narrative structures she studied and surpassed.",
    },
  ],
  videoIds: [
    "morrison-nobel-lecture-1993",
    "morrison-charlie-rose-1993",
    "morrison-uncensored-2008",
    "morrison-pieces-i-am-2019",
    "morrison-colbert-2014",
  ],
  decisions: [
    {
      title: "Edit while writing for nearly two decades",
      why: "Believed editing taught craft no MFA could.",
      risk: "Low",
      outcome: "Built canonical literary list and her own canonical work simultaneously.",
      impact: "Reshaped American publishing and American letters at the same time.",
    },
    {
      title: "Write Beloved on slavery",
      why: "Filled a silence in American letters.",
      risk: "High",
      outcome: "Won the Pulitzer; became required reading nationwide.",
      impact: "Forced the canon to confront stories it had avoided.",
    },
    {
      title: "Take the Princeton chair",
      why: "Wanted to teach the next generation directly.",
      risk: "Low",
      outcome: "Trained writers and scholars for decades.",
      impact: "Built a pipeline of writers shaped by her standards.",
    },
    {
      title: "Refuse to write to a white reader",
      why: "Believed art needs to assume its audience without explanation.",
      risk: "Medium",
      outcome: "Her books became universally read precisely because they refused to translate.",
      impact: "Reset what literary fiction is allowed to assume of readers.",
    },
  ],
  insights: [
    {
      audience: "Writers",
      lesson: "If there's a book you want to read but nobody has written it, you must write it.",
      takeaway: "Catalog your reading absences — your next book is likely in one of them.",
    },
    {
      audience: "Builders",
      lesson: "Build other people's careers while building your own; both compound.",
      takeaway: "Editing, mentoring, and teaching create the audience your next book needs.",
    },
    {
      audience: "Creators",
      lesson: "Refuse to translate yourself for the dominant audience.",
      takeaway: "Specificity is the path to universality.",
    },
    {
      audience: "Working parents",
      lesson: "Writing life adapts to family life, not the other way around.",
      takeaway: "Find the hour the day has not yet claimed.",
    },
    {
      audience: "Editors",
      lesson: "Editing is cultural infrastructure.",
      takeaway: "Treat the books you ship as the canon you're building.",
    },
  ],
  quotes: [
    {
      text: "If you find a book you really want to read but it hasn't been written yet, then you must write it.",
    },
    { text: "The function of freedom is to free someone else." },
    { text: "Definitions belong to the definers, not the defined." },
    {
      text: "We die. That may be the meaning of life. But we do language. That may be the measure of our lives.",
    },
    {
      text: "If you can only be tall because somebody else is on their knees, then you have a serious problem.",
    },
  ],
  sampleQuestions: [
    "How did editing shape your writing?",
    "Why was Beloved necessary?",
    "What writers did you most want to recover?",
    "How did you balance editing, writing, and teaching?",
    "What does it mean to refuse the white gaze?",
  ],
  featured: false,
};

export default toniMorrison;
