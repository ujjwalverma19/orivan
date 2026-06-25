import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-hayao-miyazaki.webp";

const hayaoMiyazaki: PersonInput = {
  slug: "hayao-miyazaki",
  name: "Hayao Miyazaki",
  title: "Co-founder of Studio Ghibli, animator and director",
  summary:
    "A Japanese boy who grew up watching his country rebuild from war and turned a lifetime of pacifist guilt, ecological grief, and obsessive drawing into the most universally loved animated films ever made.",
  portrait,
  birthYear: "1941",
  industry: "Animation & Film",
  country: "Japan",
  era: "Postwar Japanese Animation (1963–present)",
  companies: ["Studio Ghibli", "Toei Animation", "Topcraft"],
  roles: ["Animator", "Director", "Writer", "Co-founder", "Manga Artist"],
  tags: [
    "animator",
    "film",
    "ghibli",
    "craft",
    "patience",
    "ecology",
    "hand-drawn",
    "auteur",
    "japan",
  ],
  keyAchievement:
    "Co-founded Studio Ghibli; directed Spirited Away, the only non-English-language film to win the Best Animated Feature Oscar for decades.",
  timeline: [
    {
      year: "1941",
      title: "Born in Tokyo",
      story: "Father ran an aircraft factory during WWII that made parts for Zero fighter planes.",
      challenge: "Childhood marked by Allied bombings; mother had spinal tuberculosis.",
      lesson:
        "Childhood under conflict can produce art that is both anti-war and full of flying machines.",
    },
    {
      year: "1958",
      title: "Decided to become an animator",
      story: "Watched the Toei Animation feature Panda and the Magic Serpent and was overcome.",
      challenge: "Animation was not a respected career in postwar Japan.",
      lesson: "One film can be the moment your life turns.",
    },
    {
      year: "1963",
      title: "Joined Toei Animation",
      story: "Started as an inbetweener on Wolf Boy Ken.",
      challenge: "Bottom of a strict studio hierarchy.",
      lesson: "Start at the base of the craft pyramid even when you have ambitions for the top.",
    },
    {
      year: "1968",
      title: "Met Isao Takahata",
      story:
        "Began the partnership on Horus, Prince of the Sun that would define both their careers.",
      challenge: "Finding a collaborator with equal craft commitment.",
      lesson: "Your work is shaped most by who you choose to work next to for decades.",
    },
    {
      year: "1971",
      title: "Joined the union and led labor action",
      story: "Active in the Toei animators' union; deepened lifelong political consciousness.",
      challenge: "Organizing in a culture that punished dissent.",
      lesson: "Craftspeople benefit from the same labor protections as any other workers.",
    },
    {
      year: "1979",
      title: "Directed Lupin the Third: The Castle of Cagliostro",
      story: "His first feature; later cited by Spielberg and Pixar as a touchstone.",
      challenge: "Working within a franchise's commercial constraints.",
      lesson: "Franchise work teaches discipline that auteur work can't.",
    },
    {
      year: "1984",
      title: "Released Nausicaä of the Valley of the Wind",
      story: "Released the manga and film that previewed his ecological themes.",
      challenge: "No studio support — he serialized the manga himself for years.",
      lesson: "Some auteur visions need a self-published phase before any studio will buy them.",
    },
    {
      year: "1985",
      title: "Co-founded Studio Ghibli",
      story: "Founded the studio with Takahata and producer Toshio Suzuki.",
      challenge: "Building a creator-led studio in an industry of work-for-hire houses.",
      lesson: "When the institution you need doesn't exist, build it with the people you trust.",
    },
    {
      year: "1988",
      title: "Released My Neighbor Totoro and Grave of the Fireflies as double feature",
      story: "Two of his and Takahata's most enduring films released back-to-back.",
      challenge: "Pairing a children's fantasy with a wartime tragedy as the same ticket.",
      lesson: "Audiences can hold opposite tones if the storyteller can.",
    },
    {
      year: "1997",
      title: "Princess Mononoke topped Japanese box office",
      story: "Became the highest-grossing Japanese film of all time at release.",
      challenge: "Heavy environmental and historical themes in a kids-genre wrapper.",
      lesson: "Don't dilute the message because the form is animated.",
    },
    {
      year: "2003",
      title: "Won Oscar for Spirited Away",
      story: "First non-English-language film to win Best Animated Feature.",
      challenge: "Skipped the ceremony in protest of the Iraq War.",
      lesson: "Show up with your values louder than the prestige.",
    },
    {
      year: "2013",
      title: "Announced retirement",
      story: "Said he would stop making features after The Wind Rises.",
      challenge: "Letting go of the craft that defined his life.",
      lesson: "Some retirements are honest; some are pauses.",
    },
    {
      year: "2023",
      title: "Released The Boy and the Heron",
      story:
        "Came out of retirement to direct one more feature; won the Best Animated Feature Oscar again.",
      challenge: "Operating at 82 with the same hand-drawn standards.",
      lesson: "Don't trust your own retirement announcements.",
    },
  ],
  skills: [
    {
      name: "Hand-Drawn Craft",
      description: "Insists on hand-drawn key animation; reviews every frame personally.",
      developed: "Decades of inbetweener and animator work before becoming a director.",
    },
    {
      name: "World-Building",
      description:
        "Builds ecosystems and cultures so detailed that fans map them like real places.",
      developed: "Lifelong reading in mythology, history, and ecology.",
    },
    {
      name: "Slow Pacing",
      description:
        "Allows long quiet scenes where 'nothing' happens — a deliberate counterweight to action.",
      developed: "Conscious decision to let audiences breathe inside his films.",
    },
    {
      name: "Ecological Imagination",
      description: "Treats nature as a character with its own agency in nearly every film.",
      developed: "Hiking and birdwatching that informs his concept design.",
    },
    {
      name: "Storyboarding",
      description:
        "Often skips a script and storyboards films directly, discovering the story as he draws.",
      developed: "Working with Takahata, who modeled rigorous pre-production.",
    },
    {
      name: "Mentorship Through Demand",
      description: "Trains young animators by raising the bar until they meet it.",
      developed: "Five decades of running a studio.",
    },
  ],
  failures: [
    {
      title: "Conflicts with Takahata",
      context: "Decades-long creative tension with his closest collaborator.",
      recovery:
        "Honored Takahata publicly at his funeral with one of the most-quoted eulogies in Japanese cinema.",
      lesson: "Long partnerships contain decades of disagreements you don't dissolve over.",
    },
    {
      title: "Multiple aborted retirements",
      context:
        "Announced retirement after Princess Mononoke, after Spirited Away, and after The Wind Rises.",
      recovery: "Came back each time with more ambitious work.",
      lesson: "Don't trust your own retirement; let the work decide.",
    },
    {
      title: "Public criticism from his son Goro",
      context: "Strained relationship as Goro entered animation under Ghibli's shadow.",
      recovery: "Eventually collaborated; relationship slowly repaired in public.",
      lesson: "Family inside the same craft is the hardest collaboration of all.",
    },
  ],
  books: [
    {
      title: "Earthsea cycle",
      author: "Ursula K. Le Guin",
      note: "Cited as a primary influence on his fantasy worldbuilding.",
    },
    {
      title: "Starting Point",
      author: "Hayao Miyazaki",
      note: "His own collected essays and interviews.",
    },
    {
      title: "Turning Point",
      author: "Hayao Miyazaki",
      note: "Second volume of his essays, covering the Spirited Away era.",
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      note: "Childhood favorite he has cited many times.",
    },
  ],
  influences: [
    { name: "Isao Takahata", note: "Co-founder of Ghibli; lifelong creative partner and rival." },
    { name: "Akira Kurosawa", note: "Modeled the moral weight of his storytelling." },
    { name: "Yasuji Mori", note: "Animator at Toei who taught him fundamentals." },
    { name: "Toshio Suzuki", note: "Ghibli's producer; managed the business so he could draw." },
    { name: "Osamu Tezuka", note: "Manga pioneer whose work he both admired and reacted against." },
  ],
  videoIds: [
    "miyazaki-10-years-documentary",
    "miyazaki-kingdom-of-dreams",
    "miyazaki-charlie-rose-1999",
    "miyazaki-never-ending-man-2016",
    "miyazaki-spirited-away-interview",
  ],
  decisions: [
    {
      title: "Co-found Studio Ghibli",
      why: "Wanted institutional protection for hand-drawn auteur animation.",
      risk: "Medium",
      outcome: "Created the most respected animation studio outside the US.",
      impact: "Saved hand-drawn feature animation as a global medium.",
    },
    {
      title: "Refuse to chase digital pipelines",
      why: "Believed the craft was the medium.",
      risk: "Medium",
      outcome: "Ghibli became a sanctuary for hand-drawn art.",
      impact: "Preserved the form for the next generation of animators.",
    },
    {
      title: "Come out of retirement at 82",
      why: "One more film he had to make.",
      risk: "Low",
      outcome: "Won a second Best Animated Feature Oscar.",
      impact: "Modeled late-career creative renewal.",
    },
    {
      title: "Skip the 2003 Oscars in protest",
      why: "Refused to attend during the Iraq War.",
      risk: "Medium",
      outcome: "Made a public statement bigger than the trophy.",
      impact: "Modeled values-first behavior at career peak.",
    },
  ],
  insights: [
    {
      audience: "Artists",
      lesson: "Pacing is meaning — give the audience time to feel a place.",
      takeaway: "Resist the algorithmic pressure to compress every beat.",
    },
    {
      audience: "Builders",
      lesson: "Build the institution that will protect the craft from the market.",
      takeaway: "If the market won't fund your standard, build a studio that will.",
    },
    {
      audience: "Creators",
      lesson: "Self-publish your manga while the studios say no.",
      takeaway: "The proof-of-concept you need is often something you have to make alone first.",
    },
    {
      audience: "Leaders",
      lesson: "Standards rise to meet what the leader notices.",
      takeaway: "Walk the floor; review the work in person.",
    },
    {
      audience: "Older creators",
      lesson: "Retirement is a decision the work should make, not the calendar.",
      takeaway: "Trust the next idea before you trust the goodbye.",
    },
  ],
  quotes: [
    { text: "I would like to make a film to tell children 'it's good to be alive.'" },
    { text: "The creation of a single world comes from a huge number of fragments and chaos." },
    { text: "You must see with eyes unclouded by hate." },
    {
      text: "I have become skeptical of the unwritten rule that just because a boy and a girl appear in the same feature, a romance must ensue.",
    },
    { text: "Anime is a craft. It is not made by individuals. It is made by groups." },
  ],
  sampleQuestions: [
    "Why have you never let Ghibli go fully digital?",
    "How did your father's wartime work shape your storytelling?",
    "What made Takahata such an important rival?",
    "Why did you come out of retirement?",
    "How do you train younger animators?",
  ],
  featured: false,
};

export default hayaoMiyazaki;
