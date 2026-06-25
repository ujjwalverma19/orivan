import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-carl-sagan.webp";

const carlSagan: PersonInput = {
  slug: "carl-sagan",
  name: "Carl Sagan",
  title: "Astronomer; Science Communicator",
  summary:
    "Built the most-watched science series in television history, talked to a planet about the Pale Blue Dot, and proved that rigorous astronomy and lyrical prose could share the same sentence — and the same career.",
  portrait,
  featured: false,
  birthYear: "1934",
  industry: "Astronomy & Science Communication",
  country: "United States",
  era: "Space Age (1957–1996)",
  companies: ["Cornell University", "NASA Voyager/Viking missions", "Planetary Society"],
  roles: ["Astronomer", "Author", "Television Host", "Public Intellectual"],
  tags: ["astronomy", "science-communication", "skepticism", "cosmos", "writing", "education"],
  keyAchievement:
    "Hosted 'Cosmos: A Personal Voyage' (seen by 500M+ people across 60 countries) and wrote the definitive case for scientific skepticism in 'The Demon-Haunted World' — while leading planetary science on multiple NASA missions.",
  timeline: [
    {
      year: "1934",
      title: "Born in Brooklyn, New York",
      story:
        "Son of a Ukrainian-Jewish immigrant garment worker; the 1939 World's Fair sparked a lifelong love of the future.",
      challenge: "Working-class background with no scientific role models.",
      lesson: "Awe is contagious; one fair, one book can ignite a life.",
    },
    {
      year: "1954",
      title: "Earned BA in Physics, University of Chicago",
      story: "Studied under Harold Urey and Subrahmanyan Chandrasekhar.",
      challenge: "Choosing science when career paths in astronomy were narrow.",
      lesson: "Train with the best minds you can reach — proximity compounds.",
    },
    {
      year: "1960",
      title: "PhD in Astronomy at Chicago",
      story: "Dissertation on the physics of planetary atmospheres, especially Venus.",
      challenge: "Convincing thesis committees that planetary science was serious astronomy.",
      lesson: "Pioneer fields look unserious until they're indispensable.",
    },
    {
      year: "1962",
      title: "Worked on Mariner 2 Venus mission",
      story: "Helped interpret data confirming the runaway greenhouse effect on Venus.",
      challenge: "Mainstream astronomy considered planetary science a backwater.",
      lesson: "Bet your early career on the field everyone underrates.",
    },
    {
      year: "1968",
      title: "Joined Cornell faculty",
      story:
        "Settled into the Laboratory for Planetary Studies and stayed for the rest of his career.",
      challenge: "Harvard had denied him tenure; rebuilt momentum elsewhere.",
      lesson: "Rejection routes you to your real institution.",
    },
    {
      year: "1972",
      title: "Designed the Pioneer plaque",
      story:
        "With Frank Drake and Linda Salzman Sagan, created humanity's first interstellar message.",
      challenge: "Compressing humanity into a 9x6-inch gold-anodized plaque.",
      lesson: "Constraints clarify the message.",
    },
    {
      year: "1977",
      title: "Curated the Voyager Golden Record",
      story: "Led the team selecting the music, sounds, and images for Voyager 1 and 2.",
      challenge: "Picking what to send to the stars on behalf of Earth.",
      lesson: "Sometimes the most consequential editorial choice gets only one shot.",
    },
    {
      year: "1980",
      title: "'Cosmos: A Personal Voyage' premiered",
      story:
        "13-part PBS series watched by 500M+ people; companion book became the best-selling science book ever in English.",
      challenge: "Convincing PBS that prime-time science could draw an audience.",
      lesson: "Wonder, well-staged, beats spectacle.",
    },
    {
      year: "1983",
      title: "Co-authored the nuclear winter paper",
      story:
        "TTAPS study modeled the climate consequences of nuclear war and changed Cold War strategy.",
      challenge: "Crossing from astronomy into geopolitics drew academic backlash.",
      lesson: "Scientists have duties beyond their fields when the stakes are extinction.",
    },
    {
      year: "1990",
      title: "Convinced NASA to turn Voyager 1 around",
      story: "Argued for the 'Pale Blue Dot' photograph of Earth from 3.7B miles away.",
      challenge: "NASA initially saw no scientific value in the image.",
      lesson: "Sometimes the most important data point is perspective.",
    },
    {
      year: "1994",
      title: "Published 'Pale Blue Dot'",
      story:
        "Book-length meditation on humanity's place in the cosmos opens with one of the most-quoted passages in modern science writing.",
      challenge: "Translating astronomical scale into emotional reality.",
      lesson: "Numbers without metaphor don't reach the heart.",
    },
    {
      year: "1995",
      title: "Published 'The Demon-Haunted World'",
      story: "Definitive case for scientific skepticism and the baloney detection kit.",
      challenge: "Defending science as a culture against rising pseudoscience.",
      lesson: "Skepticism is a civic discipline, not an attitude.",
    },
    {
      year: "1996",
      title: "Died at 62 from pneumonia after myelodysplasia",
      story:
        "Continued writing through his illness; final book 'Billions and Billions' published posthumously.",
      challenge: "Compressing remaining work as time ran short.",
      lesson: "Communicators are rare; the work matters even more at the end.",
    },
  ],
  skills: [
    {
      name: "Science Communication",
      description: "Made cutting-edge astronomy comprehensible without dumbing it down.",
      developed: "Twenty years of teaching at Cornell and writing for general audiences.",
    },
    {
      name: "Lyrical Prose",
      description: "Wrote sentences that read like poetry while staying scientifically rigorous.",
      developed: "Obsessive rewriting; Cosmos reportedly took 30 drafts per chapter.",
    },
    {
      name: "Cross-disciplinary Synthesis",
      description:
        "Connected astronomy, biology, geology, anthropology, and history into single arguments.",
      developed: "Lifelong reading across every scientific field.",
    },
    {
      name: "Skepticism",
      description:
        "Codified the 'baloney detection kit' as a citizen's toolkit for evaluating claims.",
      developed: "Decades debunking UFO claims, astrology, and pseudoscience publicly.",
    },
    {
      name: "Television Presence",
      description:
        "Calibrated tone, pacing, and wonder for the camera better than any scientist of his era.",
      developed: "Refined across hundreds of Carson appearances before Cosmos.",
    },
    {
      name: "Scientific Leadership",
      description: "Led teams on Mariner, Viking, Pioneer, Voyager, and Galileo missions.",
      developed: "Decades of institutional planetary science work.",
    },
    {
      name: "Civic Courage",
      description:
        "Spoke publicly on nuclear winter, the arms race, and pseudoscience despite professional cost.",
      developed: "Treated science as a duty to society, not just a profession.",
    },
  ],
  failures: [
    {
      title: "Harvard tenure rejection (1968)",
      context: "Denied tenure at Harvard despite a strong publication record.",
      recovery: "Moved to Cornell, where he had the autonomy to do Cosmos.",
      lesson: "The rejection is often the routing.",
    },
    {
      title: "Cosmos network skepticism",
      context: "Networks resisted prime-time science as ratings risk.",
      recovery: "Partnered with PBS; series became the most-watched in PBS history.",
      lesson: "If gatekeepers say no, find the channel that says yes.",
    },
    {
      title: "Marijuana essay revelation backlash",
      context:
        "His 1969 pseudonymous essay on cannabis use surfaced posthumously and drew controversy.",
      recovery: "Posthumous discussion reframed it as part of his honesty about thinking.",
      lesson:
        "Honesty about your own mind costs reputation in the short run, builds it in the long.",
    },
    {
      title: "Nuclear winter critics",
      context: "TTAPS paper was attacked methodologically and politically through the 1980s.",
      recovery: "Core findings held up under later modeling and shaped policy.",
      lesson:
        "Politically inconvenient science attracts professional pushback; document carefully.",
    },
  ],
  books: [
    {
      title: "Cosmos",
      author: "Carl Sagan",
      note: "Companion to the TV series; best-selling science book ever in English.",
    },
    {
      title: "Pale Blue Dot",
      author: "Carl Sagan",
      note: "Meditation on humanity's place in the universe after the famous Voyager photograph.",
    },
    {
      title: "The Demon-Haunted World",
      author: "Carl Sagan",
      note: "His case for scientific skepticism and the baloney detection kit.",
    },
    {
      title: "Contact",
      author: "Carl Sagan",
      note: "Novel that became the 1997 Jodie Foster film.",
    },
    {
      title: "The Dragons of Eden",
      author: "Carl Sagan",
      note: "Pulitzer-winning exploration of the evolution of human intelligence.",
    },
    {
      title: "Billions and Billions",
      author: "Carl Sagan",
      note: "Posthumous collection of essays written during his final illness.",
    },
  ],
  influences: [
    { name: "Harold Urey", note: "Nobel chemist and Chicago mentor who modeled scientific rigor." },
    {
      name: "Frank Drake",
      note: "SETI pioneer and lifelong collaborator on interstellar messaging.",
    },
    {
      name: "Ann Druyan",
      note: "Wife and creative partner on Cosmos, Contact, and the Voyager record.",
    },
    {
      name: "Arthur C. Clarke",
      note: "Friend and intellectual peer in science and science fiction.",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      note: "Astrophysicist whose elegance shaped Sagan's sense of scientific beauty.",
    },
    { name: "Linus Pauling", note: "Modeled the scientist-as-public-citizen archetype." },
  ],
  videoIds: [
    "sagan-pale-blue-dot",
    "sagan-pale-blue-dot-official",
    "sagan-charlie-rose-1996",
    "sagan-charlie-rose-demon",
    "sagan-cosmos-intro",
  ],
  decisions: [
    {
      title: "Choosing planetary science (1960s)",
      why: "Believed planetary atmospheres and biology were the next frontier despite low academic status.",
      risk: "High",
      outcome:
        "Became the lead scientific voice on every major US planetary mission for two decades.",
      impact: "Helped legitimize planetary science as a discipline.",
    },
    {
      title: "Hosting Cosmos (1980)",
      why: "Believed television could reach more minds than a thousand textbooks.",
      risk: "Medium",
      outcome: "Cosmos became the most-watched science series in history.",
      impact: "Created a template for serious popular science television.",
    },
    {
      title: "Turning Voyager 1 around for the Pale Blue Dot",
      why: "Saw the perspective shift as more valuable than additional planetary data.",
      risk: "Low",
      outcome: "Produced one of the most influential photographs ever taken.",
      impact: "Gave humanity a literal image of its scale and fragility.",
    },
    {
      title: "Publishing nuclear winter (1983)",
      why: "Believed scientists had a duty to model the consequences of policy.",
      risk: "High",
      outcome: "Influenced arms-reduction discussions on both sides of the Iron Curtain.",
      impact: "Established science's role in policy modeling at civilizational scale.",
    },
    {
      title: "Writing 'The Demon-Haunted World' (1995)",
      why: "Saw pseudoscience as a structural threat to a democratic society.",
      risk: "Medium",
      outcome: "Created the canonical reference for scientific skepticism.",
      impact: "Equipped two generations of educators with concrete debunking tools.",
    },
  ],
  insights: [
    {
      audience: "Communicators",
      lesson: "Wonder, well-staged, beats spectacle.",
      takeaway: "Lower your voice and the audience leans in.",
    },
    {
      audience: "Scientists",
      lesson: "Public science is part of the job.",
      takeaway: "If you don't explain it, someone wrong will.",
    },
    {
      audience: "Students",
      lesson: "Skepticism is a civic discipline.",
      takeaway: "The baloney detection kit travels everywhere; pack it.",
    },
    {
      audience: "Writers",
      lesson: "Rewrite until it reads like poetry.",
      takeaway: "Cosmos chapters took 30 drafts; aim higher.",
    },
    {
      audience: "Citizens",
      lesson: "Extraordinary claims require extraordinary evidence.",
      takeaway: "The phrase itself is a complete epistemic toolkit.",
    },
    {
      audience: "Anyone",
      lesson: "Perspective is the most important data point.",
      takeaway: "The Pale Blue Dot is what scale education looks like.",
    },
    {
      audience: "Educators",
      lesson: "Reach the heart through the head.",
      takeaway: "Lyrical accuracy beats accurate dryness, every time.",
    },
  ],
  quotes: [
    { text: "Somewhere, something incredible is waiting to be known." },
    { text: "Extraordinary claims require extraordinary evidence." },
    { text: "We are made of star-stuff." },
    { text: "For small creatures such as we the vastness is bearable only through love." },
    {
      text: "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.",
    },
    {
      text: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    },
    {
      text: "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, were made in the interiors of collapsing stars.",
    },
  ],
  sampleQuestions: [
    "How did Carl Sagan make Cosmos?",
    "What is the 'Pale Blue Dot' and why does it matter?",
    "What is Carl Sagan's baloney detection kit?",
    "How did Sagan contribute to NASA's planetary missions?",
    "What did Carl Sagan say about nuclear winter?",
    "Why is 'The Demon-Haunted World' considered the canonical skepticism book?",
    "What can communicators learn from Carl Sagan?",
  ],
};

export default carlSagan;
