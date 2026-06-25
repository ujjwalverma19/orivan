import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-denzel-washington.webp";

const denzelWashington: PersonInput = {
  slug: "denzel-washington",
  name: "Denzel Washington",
  title: "Two-time Academy Award winner, theatre actor, director",
  summary:
    "A pre-med kid from Mount Vernon who almost flunked out of college before finding theatre — and built one of the most uncompromising acting careers in American cinema by refusing to chase fashion.",
  portrait,
  birthYear: "1954",
  industry: "Film & Theatre",
  country: "United States",
  era: "Modern American Cinema (1981–present)",
  companies: ["Mundy Lane Entertainment", "Escape Artists"],
  roles: ["Actor", "Director", "Producer", "Mentor"],
  tags: [
    "actor",
    "theatre",
    "craft",
    "discipline",
    "leadership",
    "preparation",
    "oscar",
    "icon",
    "shakespeare",
  ],
  keyAchievement:
    "Won Oscars for Glory (1989) and Training Day (2001); the most-nominated Black actor in Academy history.",
  timeline: [
    {
      year: "1954",
      title: "Born in Mount Vernon, New York",
      story:
        "Son of a Pentecostal minister and a beauty-shop owner; parents divorced when he was 14.",
      challenge: "Adolescence rocked by the divorce and run-ins with trouble in his neighborhood.",
      lesson: "A few stable adults at the right moment can change the entire trajectory.",
    },
    {
      year: "1968",
      title: "Sent to military school",
      story: "Mother enrolled him at Oakland Military Academy to keep him out of trouble.",
      challenge: "Forced separation from his neighborhood friends.",
      lesson: "Hard parental decisions look like cruelty before they look like rescue.",
    },
    {
      year: "1972",
      title: "Boys & Girls Club mentor",
      story: "Spent summers at a Boys Club where a counselor pushed him toward college.",
      challenge: "Many of his childhood friends ended up incarcerated.",
      lesson: "Adult mentors disproportionately determine teenage trajectories.",
    },
    {
      year: "1975",
      title: "Failed pre-med at Fordham",
      story: "Dropped his pre-med major and stumbled into a campus production of Othello.",
      challenge: "Letting go of the safe career his parents wanted.",
      lesson: "The class you accidentally enroll in is sometimes the one that changes you.",
    },
    {
      year: "1981",
      title: "Graduated American Conservatory Theater",
      story: "Studied classical acting in San Francisco before returning to New York.",
      challenge: "Choosing theatre training over an immediate TV role.",
      lesson: "Invest in craft training even when commercial offers are on the table.",
    },
    {
      year: "1982",
      title: "Cast in St. Elsewhere",
      story: "Played Dr. Philip Chandler for six seasons of the influential NBC drama.",
      challenge: "Being typecast as a serious medical character.",
      lesson: "Long TV runs build the financial floor that lets you take risks in film.",
    },
    {
      year: "1989",
      title: "Won Oscar for Glory",
      story: "Won Best Supporting Actor for the Civil War drama.",
      challenge: "Being one of only a few Black actors winning major Academy awards in the 80s.",
      lesson: "Choose roles that contain craft and history; both compound.",
    },
    {
      year: "1992",
      title: "Played Malcolm X",
      story: "Spike Lee's biopic earned him a Best Actor nomination and reshaped public memory.",
      challenge: "Carrying the historical weight of the role.",
      lesson: "Some performances are also acts of cultural restoration.",
    },
    {
      year: "1995",
      title: "Began long Spike Lee partnership",
      story: "Starred in Mo' Better Blues, Malcolm X, He Got Game, Inside Man across decades.",
      challenge: "Sustaining creative partnerships in a transactional industry.",
      lesson: "Repeated collaborations build a deeper body of work than one-off masterpieces.",
    },
    {
      year: "2001",
      title: "Won Best Actor for Training Day",
      story:
        "Won for playing a corrupt LAPD detective — only the second Black actor to win Best Actor.",
      challenge: "Taking on a villain role that broke his moral-hero typecast.",
      lesson: "Use earned audience trust to take roles that destabilize the brand.",
    },
    {
      year: "2007",
      title: "Directed The Great Debaters",
      story: "Second directorial effort, after Antwone Fisher.",
      challenge: "Splitting time between acting and directing.",
      lesson: "Adding a second craft late in a career is a 5–10 year investment.",
    },
    {
      year: "2016",
      title: "Brought Fences to film",
      story: "Adapted August Wilson's play for the screen; directed and starred.",
      challenge: "Translating four-act theatre into cinema without losing the language.",
      lesson: "Some passion projects only happen when you're senior enough to insist on them.",
    },
    {
      year: "2022",
      title: "Played Macbeth for Joel Coen",
      story: "Returned to Shakespeare on film at age 67 in the stripped-down Tragedy of Macbeth.",
      challenge: "Tackling the canonical role late in his career.",
      lesson: "Craft maintenance demands the hardest texts, not the easiest.",
    },
  ],
  skills: [
    {
      name: "Classical Preparation",
      description: "Researches roles for months; full back-stories, vocabulary, physical habits.",
      developed: "ACT theatre training; reinforced over five decades.",
    },
    {
      name: "Stage Presence",
      description:
        "Returns regularly to Broadway and Shakespeare; treats theatre as core craft maintenance.",
      developed: "Self-imposed discipline of staying connected to live audiences.",
    },
    {
      name: "Quiet Authority",
      description: "Commands attention in scenes without raising volume.",
      developed: "Years of voice and breath work from classical training.",
    },
    {
      name: "Mentorship",
      description: "Funds scholarships and mentors emerging Black actors.",
      developed: "The Boys Club mentor model he received as a teen.",
    },
    {
      name: "Directorial Craft",
      description: "Directs material rooted in theatre and history.",
      developed: "Two decades of close observation of directors like Spike Lee and Jonathan Demme.",
    },
    {
      name: "Faith Discipline",
      description: "Daily prayer and bible reading anchor his preparation rituals.",
      developed: "Father's ministry and lifelong personal practice.",
    },
  ],
  failures: [
    {
      title: "Pre-med washout",
      context: "Nearly flunked out of Fordham as a pre-med student.",
      recovery: "Pivoted into theatre and never looked back.",
      lesson: "An academic failure is sometimes a calling correcting itself.",
    },
    {
      title: "Several mid-career commercial misses",
      context:
        "Films like Heart Condition and Virtuosity didn't connect; he kept choosing the role over the paycheck.",
      recovery: "Trusted long-term taste over short-term box office.",
      lesson: "Don't optimize for the next opening weekend; optimize for the body of work.",
    },
    {
      title: "Public criticism of Cry Freedom Oscar campaign",
      context: "Felt the studio promoted his role as supporting when it was a lead.",
      recovery: "Used the experience to negotiate billing carefully thereafter.",
      lesson: "Industry categorization is a business decision; protect it like one.",
    },
  ],
  books: [
    {
      title: "A Hand to Guide Me",
      author: "Denzel Washington",
      note: "His own collection of essays on mentorship.",
    },
    {
      title: "August Wilson's Century Cycle",
      author: "August Wilson",
      note: "Plays he's adapted and championed for screen.",
    },
    {
      title: "The Daily Stoic",
      author: "Ryan Holiday",
      note: "Cited in commencement addresses about discipline.",
    },
    {
      title: "The Bible",
      author: "Various",
      note: "Daily reading he has discussed publicly across decades.",
    },
  ],
  influences: [
    { name: "Sidney Poitier", note: "First Black Best Actor winner and lifelong reference point." },
    { name: "August Wilson", note: "Playwright whose work he treats as foundational." },
    { name: "His mother, Lennis", note: "Insisted he stay out of trouble during teenage years." },
    { name: "Spike Lee", note: "Director and lifelong collaborator across decades." },
    { name: "Billy Thomas", note: "Boys Club mentor who pushed him toward college." },
  ],
  videoIds: [
    "denzel-actors-studio-2007",
    "denzel-dillard-commencement-2015",
    "denzel-60-minutes-2002",
    "denzel-fall-down-pomona-2011",
    "denzel-aarp-interview-2021",
  ],
  decisions: [
    {
      title: "Take theatre training over early TV roles",
      why: "Believed craft training would still matter in 30 years.",
      risk: "Medium",
      outcome: "Built classical foundation that supported a five-decade career.",
      impact: "Modeled long-arc career planning for Black actors.",
    },
    {
      title: "Take the corrupt-cop role in Training Day",
      why: "Believed audiences trusted him enough to absorb a villain.",
      risk: "High",
      outcome: "Won Best Actor; expanded his range.",
      impact: "Showed that brand can be deliberately destabilized.",
    },
    {
      title: "Direct his own passion projects",
      why: "Wanted to control the rooms where his stories were told.",
      risk: "Medium",
      outcome: "Built a quiet directing career alongside acting.",
      impact: "Created roles for Black actors that didn't yet exist.",
    },
    {
      title: "Return to Broadway every few years",
      why: "Live audiences keep the craft honest.",
      risk: "Low",
      outcome: "Stayed sharp into his late sixties.",
      impact: "Modeled craft maintenance for film actors.",
    },
  ],
  insights: [
    {
      audience: "Performers",
      lesson: "If you don't fail, you're not even trying.",
      takeaway: "Build a career that contains visible swings.",
    },
    {
      audience: "Builders",
      lesson: "Train craft on a schedule even when there's no immediate paycheck for it.",
      takeaway: "Return to live audiences periodically — the feedback loop sharpens everything.",
    },
    {
      audience: "Students",
      lesson: "The class you accidentally enroll in might change your life.",
      takeaway: "Stay curious about subjects outside your major.",
    },
    {
      audience: "Mentors",
      lesson: "One adult at the right moment can rewrite a life.",
      takeaway: "Be the consistent voice for someone who lacks one.",
    },
    {
      audience: "Leaders",
      lesson: "Brand trust is capital you spend deliberately.",
      takeaway: "Use it to take roles your competitors can't.",
    },
  ],
  quotes: [
    {
      text: "Without commitment, you'll never start. But more importantly, without consistency, you'll never finish.",
    },
    { text: "Ease is a greater threat to progress than hardship." },
    { text: "Fall forward. Every failed experiment is one step closer to success." },
    { text: "Don't aspire to make a living; aspire to make a difference." },
    { text: "Dreams without goals remain dreams." },
  ],
  sampleQuestions: [
    "How does theatre training change a film actor?",
    "Why do you keep returning to August Wilson?",
    "What did the Boys Club mentor teach you?",
    "How do you decide which scripts to take?",
    "What does daily preparation actually look like?",
  ],
  featured: false,
};

export default denzelWashington;
