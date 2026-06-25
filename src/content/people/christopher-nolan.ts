import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-christopher-nolan.webp";

const christopherNolan: PersonInput = {
  slug: "christopher-nolan",
  name: "Christopher Nolan",
  title: "Director of The Dark Knight, Inception, Interstellar, Oppenheimer",
  summary:
    "A British-American director who self-financed his first feature on weekends, won the right to make IMAX-scale event films on his terms, and proved that mainstream audiences will pay full price for ambitious ideas.",
  portrait,
  birthYear: "1970",
  industry: "Film",
  country: "United Kingdom / United States",
  era: "Modern Cinema (1998–present)",
  companies: ["Syncopy Films", "Warner Bros.", "Universal Pictures"],
  roles: ["Director", "Writer", "Producer"],
  tags: [
    "director",
    "film",
    "imax",
    "blockbuster",
    "auteur",
    "writing",
    "craft",
    "physical-effects",
    "oppenheimer",
  ],
  keyAchievement:
    "Made cerebral, original blockbusters the highest-grossing films in Hollywood — won Best Picture for Oppenheimer.",
  timeline: [
    {
      year: "1970",
      title: "Born in London",
      story: "British father, American mother; family split time between London and Chicago.",
      challenge: "Bouncing between two countries and accents as a child.",
      lesson: "Bicultural childhoods build the outsider eye good directors need.",
    },
    {
      year: "1977",
      title: "Saw Star Wars at age 7",
      story: "Father took him; he started making Super-8 films shortly after.",
      challenge: "Translating an obsession into practice with no equipment.",
      lesson: "The film that made you a filmmaker is worth re-watching every decade.",
    },
    {
      year: "1989",
      title: "Studied English Literature at UCL",
      story: "Skipped film school and used UCL's film society to make 16mm shorts.",
      challenge: "No formal film training; learned by doing.",
      lesson:
        "If the path you want doesn't exist, build it inside the institution you're already in.",
    },
    {
      year: "1998",
      title: "Made Following on $6,000",
      story:
        "Shot his first feature over a year of weekends with friends; processed film one reel at a time.",
      challenge: "Total constraint: no money, no crew, no equipment beyond a borrowed camera.",
      lesson: "Constraints are the only film school that always graduates you.",
    },
    {
      year: "2000",
      title: "Memento broke through",
      story:
        "His narratively reverse-engineered second film became a Sundance hit and Oscar-nominated.",
      challenge: "Convincing distributors that a backwards-told mystery would find an audience.",
      lesson: "A clever structural conceit can outflank a large marketing budget.",
    },
    {
      year: "2002",
      title: "Insomnia for a major studio",
      story: "Took a Pacino/Williams remake to learn the studio system.",
      challenge: "Working with movie stars and studio notes for the first time.",
      lesson: "Mid-budget films are the apprenticeship for blockbusters.",
    },
    {
      year: "2005",
      title: "Took over the Batman franchise",
      story: "Rebooted the moribund Batman with Batman Begins.",
      challenge: "Resurrecting an IP after the disaster of Batman & Robin.",
      lesson: "IP that nobody wants is the cheapest IP to acquire creative control of.",
    },
    {
      year: "2008",
      title: "The Dark Knight changed the blockbuster",
      story:
        "Heath Ledger's posthumous performance and the film's seriousness reset the bar for comic-book films.",
      challenge: "Pre-release uncertainty after Ledger's death.",
      lesson: "Treat genre films with the gravity of a drama; audiences notice.",
    },
    {
      year: "2010",
      title: "Inception",
      story:
        "Made an original $160M sci-fi film without a comic-book franchise; grossed $830M worldwide.",
      challenge: "Studios assumed audiences couldn't follow nested-dream logic.",
      lesson: "Audiences are usually one step ahead of executives; trust them.",
    },
    {
      year: "2014",
      title: "Interstellar pushed the IMAX envelope",
      story: "Shot major sequences in IMAX 70mm and grounded the science in Kip Thorne's physics.",
      challenge: "Studio anxiety about a three-hour space film.",
      lesson: "Format choices are storytelling choices — pick them deliberately.",
    },
    {
      year: "2017",
      title: "Dunkirk experimented with structure",
      story: "Released a near-silent war film told across three intercutting timelines.",
      challenge: "Selling an experimental structure to a mass audience.",
      lesson: "Once you've earned the right to experiment, do it visibly.",
    },
    {
      year: "2020",
      title: "Released Tenet during the pandemic",
      story: "Pushed for theatrical release as theatres struggled to reopen.",
      challenge: "Public-health timing of a $200M blockbuster.",
      lesson:
        "Some commitments — to theatre owners, in this case — outweigh box-office optimization.",
    },
    {
      year: "2023",
      title: "Won Best Picture for Oppenheimer",
      story: "Won seven Oscars including Best Picture and Best Director.",
      challenge: "Making a three-hour biopic about quantum physics work as a blockbuster.",
      lesson: "Trust the audience to handle the smartest version of the story.",
    },
  ],
  skills: [
    {
      name: "Practical Effects Discipline",
      description: "Builds physical sets and uses minimal CGI; flipped a real 747 for Tenet.",
      developed: "Years of low-budget filmmaking that taught him the camera responds to the real.",
    },
    {
      name: "Narrative Architecture",
      description:
        "Designs films around structural ideas (reverse chronology, nested dreams, intercut timelines).",
      developed: "Literature degree at UCL trained him in narrative form.",
    },
    {
      name: "Studio Diplomacy",
      description: "Negotiates creative control by being on-time and on-budget.",
      developed:
        "Reputation built across the Batman trilogy made the freedom for Inception and beyond.",
    },
    {
      name: "Theatre Advocacy",
      description: "Champions the theatrical experience and IMAX projection.",
      developed: "Lifetime preference for the communal cinema.",
    },
    {
      name: "Collaborator Loyalty",
      description:
        "Works with the same crew — Hoyte van Hoytema, Hans Zimmer (then Göransson), Lee Smith — across decades.",
      developed: "Recognized early that repeated collaboration sharpens shorthand.",
    },
    {
      name: "Sound Design Obsession",
      description:
        "Treats sound as half the film; pushes mixes louder and stranger than industry standards.",
      developed: "Years of fighting theatre chains over playback levels.",
    },
  ],
  failures: [
    {
      title: "Tenet's theatrical release",
      context:
        "Released into still-closed theatres during the COVID pandemic; box office disappointed.",
      recovery:
        "Used the public dispute with Warner Bros. to renegotiate a better deal with Universal for Oppenheimer.",
      lesson: "A failed launch can be the leverage for a better next contract.",
    },
    {
      title: "Insomnia commercial response",
      context: "His Pacino-led thriller underperformed against expectations.",
      recovery: "Used it as a stepping stone to Batman Begins.",
      lesson: "Mid-tier films build the trust banks needed for bigger swings.",
    },
    {
      title: "The Dark Knight Rises mixed reception",
      context: "Closing his trilogy invited backlash about plot logic and pacing.",
      recovery: "Moved on to Interstellar; refused to engage critics publicly.",
      lesson: "The final chapter of a beloved series will always disappoint someone.",
    },
  ],
  books: [
    {
      title: "American Prometheus",
      author: "Kai Bird & Martin J. Sherwin",
      note: "Source material for Oppenheimer.",
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      note: "Cited as influencing his thinking about ideas as viruses (Inception).",
    },
    {
      title: "Hyperion",
      author: "Dan Simmons",
      note: "Sci-fi influence on Interstellar's structural ambition.",
    },
    {
      title: "The Black Cloud",
      author: "Fred Hoyle",
      note: "Astronomer's novel he has cited about hard-science storytelling.",
    },
  ],
  influences: [
    { name: "Stanley Kubrick", note: "Model for ambitious, control-obsessed filmmaking." },
    { name: "Ridley Scott", note: "Worldbuilding influence visible across his sci-fi work." },
    { name: "Jonathan Nolan", note: "His brother and frequent screenwriting collaborator." },
    { name: "Michael Mann", note: "Modeled the operatic scale of urban crime drama." },
    {
      name: "Nicolas Roeg",
      note: "British director whose non-linear editing shaped Memento's structure.",
    },
  ],
  videoIds: [
    "nolan-bafta-screenwriters-2017",
    "nolan-directors-guild-oppenheimer",
    "nolan-princeton-baccalaureate-2015",
    "nolan-kermode-imax-2017",
    "nolan-variety-actors-studio-2023",
  ],
  decisions: [
    {
      title: "Self-finance Following over a year",
      why: "No producer would back an experimental debut.",
      risk: "High",
      outcome: "Festival circuit success opened doors to Memento.",
      impact: "Validated the micro-budget feature path.",
    },
    {
      title: "Take the Batman job in 2003",
      why: "Saw an underused IP with creative room.",
      risk: "Medium",
      outcome: "Built one of the most influential trilogies in film.",
      impact: "Reset how studios approach IP reboots.",
    },
    {
      title: "Move to Universal after Tenet",
      why: "Wanted shorter theatrical windows and creative trust.",
      risk: "High",
      outcome: "Got the deal for Oppenheimer; won seven Oscars.",
      impact: "Set the bar for director-friendly studio deals.",
    },
    {
      title: "Shoot Oppenheimer in IMAX black-and-white",
      why: "Wanted formal contrast between objective and subjective scenes.",
      risk: "Medium",
      outcome: "Required Kodak to invent new film stock.",
      impact: "Expanded what IMAX productions can attempt.",
    },
  ],
  insights: [
    {
      audience: "Filmmakers",
      lesson:
        "Constraints are not obstacles to creativity — they're the structure that lets it happen.",
      takeaway: "Don't wait for ideal resources; ship within the resources you can summon.",
    },
    {
      audience: "Builders",
      lesson: "Trust your audience to handle the most ambitious version of what you're making.",
      takeaway: "Dumb down only after the data tells you to, not before.",
    },
    {
      audience: "Creators",
      lesson: "Structural conceit can replace marketing budget.",
      takeaway: "Find the form that the story uniquely requires.",
    },
    {
      audience: "Operators",
      lesson: "Being on-time and on-budget buys creative freedom faster than awards.",
      takeaway: "Reliability is the most valuable artistic asset.",
    },
    {
      audience: "Negotiators",
      lesson: "A bad deal at one studio is leverage at the next.",
      takeaway: "Public conflict can be a renegotiation tool when used surgically.",
    },
  ],
  quotes: [
    { text: "You're only as good as your last picture." },
    { text: "Audiences are intelligent. They want to be challenged, not patronized." },
    {
      text: "I think filmmaking is a very personal thing, and as a director, you have to find what works for you.",
    },
    { text: "I don't think there should be limits placed on storytelling." },
    { text: "Every film I make is shaped by the constraints of what the previous one taught me." },
  ],
  sampleQuestions: [
    "How did you really make Following on $6,000?",
    "Why do you prefer practical effects to CGI?",
    "How did the public Warner Bros. dispute play out?",
    "Why did Oppenheimer need to be three hours?",
    "How do you keep the same crew loyal across decades?",
  ],
  featured: false,
};

export default christopherNolan;
