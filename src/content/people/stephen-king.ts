import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-stephen-king.webp";

const stephenKing: PersonInput = {
  slug: "stephen-king",
  name: "Stephen King",
  title: "Author of Carrie, The Shining, IT, and 70+ novels",
  summary:
    "A Maine kid raised by a single mother who fished his discarded manuscript out of a trash can — and went on to publish more books than most authors read in a lifetime by treating writing as a job.",
  portrait,
  birthYear: "1947",
  industry: "Publishing & Film",
  country: "United States",
  era: "Modern Horror & Fiction (1974–present)",
  companies: ["Doubleday", "Scribner", "Viking", "Castle Rock Entertainment"],
  roles: ["Author", "Screenwriter", "Columnist"],
  tags: [
    "writer",
    "horror",
    "craft",
    "discipline",
    "recovery",
    "addiction",
    "novelist",
    "prolific",
    "maine",
  ],
  keyAchievement:
    "Published over 70 novels and 200+ short stories, with combined sales of 400+ million copies.",
  timeline: [
    {
      year: "1947",
      title: "Born in Portland, Maine",
      story:
        "Father abandoned the family when he was 2; raised by his mother Nellie with his brother David.",
      challenge: "Years of moving between relatives' homes.",
      lesson: "Childhoods spent reading often produce adults who can't stop writing.",
    },
    {
      year: "1959",
      title: "Found his father's box of horror paperbacks",
      story: "Discovered Lovecraft, Bloch, and Matheson in an attic.",
      challenge: "No models for being a working writer in his immediate family.",
      lesson: "A single discovered shelf can decide what you write for fifty years.",
    },
    {
      year: "1966",
      title: "Started college at University of Maine",
      story: "Sold his first story to a men's magazine for $35.",
      challenge: "Paying his way through school as the family had no savings.",
      lesson: "Sell what you can while you train.",
    },
    {
      year: "1971",
      title: "Married Tabitha Spruce",
      story:
        "Met at the UMaine library; she became his first reader, lifelong editor, and the person who saved Carrie.",
      challenge: "Living in a trailer on two teachers' salaries with a young child.",
      lesson: "Your first reader is the most important hire of your writing career.",
    },
    {
      year: "1972",
      title: "Threw Carrie in the trash",
      story:
        "Frustrated with the manuscript, threw it away; Tabitha pulled it out and told him to finish it.",
      challenge: "Self-doubt nearly ended the career before it started.",
      lesson: "Outsource the decision to quit to someone who believes in you.",
    },
    {
      year: "1974",
      title: "Carrie published",
      story: "Doubleday paid a $2,500 advance; paperback rights sold for $400,000.",
      challenge: "Sudden financial life change at 26.",
      lesson: "Lottery-ticket outcomes require lottery-ticket preparation.",
    },
    {
      year: "1977",
      title: "Released The Shining",
      story: "Wrote it during a brief stay at the Stanley Hotel in Colorado.",
      challenge: "Pressure of follow-up after Carrie's success.",
      lesson: "Specific locations can unlock specific stories — travel deliberately.",
    },
    {
      year: "1979",
      title: "Pseudonym as Richard Bachman",
      story:
        "Started publishing under a second name to test whether his success was luck or craft.",
      challenge: "Curiosity about whether his name carried the work.",
      lesson: "Test your own brand assumptions before someone else does.",
    },
    {
      year: "1986",
      title: "Released IT",
      story: "Published the 1,138-page epic that became one of his defining works.",
      challenge: "Sustaining narrative across more than a thousand pages.",
      lesson: "Long-form mastery comes from years of short-form discipline.",
    },
    {
      year: "1987",
      title: "Hit rock bottom with addiction",
      story:
        "Family staged an intervention; his trash can was full of beer cans, drugs, and cigarettes.",
      challenge: "Decades of substance abuse during peak productivity.",
      lesson: "High output and addiction can coexist; only one of them is sustainable.",
    },
    {
      year: "1999",
      title: "Hit by a van",
      story: "Nearly killed while walking; spent months in rehab.",
      challenge: "Pelvis and leg shattered; thought he'd never write again.",
      lesson: "Returning to the craft after physical trauma re-defines your relationship with it.",
    },
    {
      year: "2000",
      title: "Published On Writing",
      story:
        "Released his memoir-and-manual that became the most-recommended writing book of the era.",
      challenge: "Writing while still in recovery.",
      lesson: "Sometimes the book about how you work is your most important book.",
    },
    {
      year: "2003",
      title: "Won National Book Foundation medal",
      story:
        "Awarded for distinguished contribution to American letters — controversial in literary circles.",
      challenge: "Genre stigma in literary establishment.",
      lesson: "Outlast the critics who refuse to take your form seriously.",
    },
  ],
  skills: [
    {
      name: "Daily Output",
      description: "Writes 2,000 words a day, every day, including holidays.",
      developed: "Discipline carried from his college teaching days.",
    },
    {
      name: "Character Voice",
      description: "Builds dialogue that survives translation and adaptation.",
      developed: "Years as a high-school English teacher analyzing voice in fiction.",
    },
    {
      name: "Marathon Stamina",
      description:
        "Writes 1,000+ page novels regularly — sustained narrative output most authors can't muster.",
      developed: "Daily-output habit compounded over 50 years.",
    },
    {
      name: "Honest Self-Assessment",
      description: "Talks openly about his weakest novels and his addictions.",
      developed: "Recovery culture's insistence on honesty.",
    },
    {
      name: "Place Writing",
      description: "Builds Maine into a character across dozens of books.",
      developed: "Lifelong commitment to writing about home.",
    },
    {
      name: "Adaptation Generosity",
      description:
        "Sells some film rights for $1 to student filmmakers (the 'Dollar Babies' program).",
      developed: "Belief that stories should circulate.",
    },
  ],
  failures: [
    {
      title: "Pseudonym exposed",
      context:
        "A bookstore clerk noticed shared writing patterns and outed Richard Bachman in 1985.",
      recovery: "Continued under both names; eventually killed off Bachman.",
      lesson: "Identity experiments rarely stay private as long as you hope.",
    },
    {
      title: "Years of addiction",
      context: "Wrote multiple novels with no memory of writing them.",
      recovery: "Family intervention; sobriety since 1988.",
      lesson: "The work can survive addiction; the writer often can't.",
    },
    {
      title: "Mid-career critical dismissal",
      context: "Literary establishment ignored him for decades as 'just genre.'",
      recovery: "Continued working; eventually received literary honors.",
      lesson: "Critic timing is not the same as audience timing.",
    },
  ],
  books: [
    {
      title: "On Writing",
      author: "Stephen King",
      note: "His own memoir on craft; required reading for working writers.",
    },
    {
      title: "The Elements of Style",
      author: "Strunk & White",
      note: "Cited as foundational; recommended to every aspiring writer.",
    },
    {
      title: "Ghost Story",
      author: "Peter Straub",
      note: "Friend and collaborator's work he champions publicly.",
    },
    {
      title: "Watership Down",
      author: "Richard Adams",
      note: "Cited as proof animal-fantasy can carry literary weight.",
    },
  ],
  influences: [
    { name: "Richard Matheson", note: "Horror predecessor he names as central." },
    { name: "Tabitha King", note: "Wife, first reader, and the reason Carrie wasn't thrown away." },
    { name: "Shirley Jackson", note: "Model for psychological horror without explicit monsters." },
    { name: "H.P. Lovecraft", note: "Early reading that shaped his cosmic horror." },
    { name: "John D. MacDonald", note: "Crime novelist whose pacing he studied." },
  ],
  videoIds: [
    "king-george-rr-martin-2017",
    "king-on-writing-talks-at-google",
    "king-bbc-newsnight-2013",
    "king-fresh-air-2019",
    "king-umass-lowell-interview",
  ],
  decisions: [
    {
      title: "Finish Carrie after Tabitha saved it",
      why: "Trusted her judgment over his own self-doubt.",
      risk: "Low",
      outcome: "Started a 50-year career.",
      impact: "Saved one of the most influential horror franchises in publishing history.",
    },
    {
      title: "Get sober at 41",
      why: "Family told him he'd lose them if he didn't.",
      risk: "Medium",
      outcome: "Continued writing at full output for 35+ more years.",
      impact: "Demonstrated that craft can survive sobriety.",
    },
    {
      title: "Write On Writing after the accident",
      why: "Wanted to systematize what he'd learned before the body might quit.",
      risk: "Low",
      outcome: "Bestseller; the writing book of its era.",
      impact: "Mentored a generation of writers he'll never meet.",
    },
    {
      title: "Stay in Maine",
      why: "Believed proximity to his subject mattered more than proximity to publishing.",
      risk: "Low",
      outcome: "Built a fictional Maine that became a literary geography.",
      impact: "Modeled regional commitment in a national career.",
    },
  ],
  insights: [
    {
      audience: "Writers",
      lesson: "If you don't have time to read, you don't have the time — or the tools — to write.",
      takeaway: "Read at least three hours for every hour you write.",
    },
    {
      audience: "Builders",
      lesson: "Daily output beats inspiration every time.",
      takeaway: "Pick a word count and hit it like a job.",
    },
    {
      audience: "Creators",
      lesson: "Your first reader matters more than your editor.",
      takeaway: "Find someone who tells you the truth before publication, not after.",
    },
    {
      audience: "Recovering people",
      lesson: "Productivity is not proof of health.",
      takeaway: "Output is a poor diagnostic for what's happening internally.",
    },
    {
      audience: "Mentors",
      lesson: "Generosity with rights and time grows the field.",
      takeaway: "Give your craft away in small doses; the field returns it.",
    },
  ],
  quotes: [
    { text: "The scariest moment is always just before you start." },
    { text: "Books are a uniquely portable magic." },
    {
      text: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.",
    },
    { text: "Description begins in the writer's imagination, but should finish in the reader's." },
    { text: "If you don't have time to read, you don't have the time — or the tools — to write." },
  ],
  sampleQuestions: [
    "What does your daily writing routine look like?",
    "How did Tabitha actually save Carrie?",
    "How did sobriety change your work?",
    "Why write On Writing in the middle of your career?",
    "Why stay in Maine instead of moving to New York?",
  ],
  featured: false,
};

export default stephenKing;
