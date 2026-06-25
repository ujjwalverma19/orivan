import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jane-goodall.webp";

const janeGoodall: PersonInput = {
  slug: "jane-goodall",
  name: "Jane Goodall",
  title: "Primatologist; Conservationist; UN Messenger of Peace",
  summary:
    "Walked into Gombe at 26 with a notebook and a pair of binoculars, watched chimpanzees use tools, and rewrote what humans were allowed to claim as uniquely their own — then spent sixty years building the institutions to protect what she had seen.",
  portrait,
  featured: false,
  birthYear: "1934",
  industry: "Primatology & Conservation",
  country: "United Kingdom",
  era: "Post-War Science → Modern Conservation (1960–present)",
  companies: ["Gombe Stream Research Centre", "Jane Goodall Institute", "Roots & Shoots"],
  roles: ["Primatologist", "Ethologist", "Conservationist", "UN Messenger of Peace"],
  tags: [
    "primatology",
    "conservation",
    "ethology",
    "chimpanzees",
    "activism",
    "science-communication",
  ],
  keyAchievement:
    "Discovered chimpanzee tool use at Gombe in 1960, fundamentally redefining the boundary between humans and other animals — then founded the Jane Goodall Institute and Roots & Shoots to scale conservation worldwide.",
  timeline: [
    {
      year: "1934",
      title: "Born in London",
      story:
        "Father an engineer, mother a writer; received a stuffed chimp called Jubilee as a toddler, kept it her entire life.",
      challenge: "No money for the African expedition she dreamed of.",
      lesson: "Childhood obsessions, taken seriously, become careers.",
    },
    {
      year: "1957",
      title: "Travelled to Kenya at 23",
      story:
        "Saved waitressing tips to visit a friend's farm in Africa; introduced to anthropologist Louis Leakey.",
      challenge: "No degree, no scientific training — only the obsession.",
      lesson: "Show up where the people you want to learn from already are.",
    },
    {
      year: "1960",
      title: "Arrived at Gombe Stream",
      story:
        "Began field study of wild chimpanzees with her mother as required chaperone; British authorities would not let a young single woman live alone in the bush.",
      challenge: "Chimps fled from her for months.",
      lesson: "Field science begins with patience the academy doesn't measure.",
    },
    {
      year: "1960",
      title: "Observed David Greybeard using a tool",
      story:
        "Watched a chimpanzee strip leaves from a twig and use it to fish termites; the first documented non-human tool-making.",
      challenge: "Knew the finding would be dismissed as anthropomorphism.",
      lesson: "The right observation can rewrite a definition overnight.",
    },
    {
      year: "1962",
      title: "Admitted to Cambridge PhD without a BA",
      story: "Leakey arranged direct PhD entry at Newnham College, Cambridge.",
      challenge: "Faced academic hostility for naming chimps and ascribing emotion to them.",
      lesson: "Defend new methods; institutions update slowly.",
    },
    {
      year: "1965",
      title: "Completed PhD in ethology",
      story:
        "One of only a handful of people ever admitted to a Cambridge doctorate without an undergraduate degree.",
      challenge: "Convincing the committee that field observation was rigorous science.",
      lesson: "Pioneer methodologies need their own defenders inside the academy.",
    },
    {
      year: "1971",
      title: "Published 'In the Shadow of Man'",
      story:
        "First popular book on her Gombe work; introduced David Greybeard and chimp society to a global audience.",
      challenge: "Translating decade-long field observations into a single accessible narrative.",
      lesson: "A good book scales fieldwork to civilizational influence.",
    },
    {
      year: "1974",
      title: "Documented the Gombe chimpanzee war",
      story: "Four-year intergroup conflict that revealed organized violence among chimpanzees.",
      challenge: "Sharing findings that complicated the gentle image she had built.",
      lesson: "Honest science includes the inconvenient observations.",
    },
    {
      year: "1977",
      title: "Founded the Jane Goodall Institute",
      story:
        "Built the organization that would scale research, conservation, and community-led programs.",
      challenge: "Transitioning from field scientist to institutional founder.",
      lesson: "Discoveries need institutions to outlive the discoverer.",
    },
    {
      year: "1986",
      title: "Pivoted from research to advocacy",
      story:
        "After the Understanding Chimpanzees conference, dedicated her life to conservation activism.",
      challenge: "Leaving the field she loved to give 300 days of travel a year.",
      lesson: "Sometimes the work outgrows the original method.",
    },
    {
      year: "1991",
      title: "Founded Roots & Shoots",
      story:
        "Youth program for environmental and humanitarian action; now active in 60+ countries.",
      challenge: "Building a kids' program that could survive past founder dependence.",
      lesson: "Bet on the next generation explicitly — they outlast you.",
    },
    {
      year: "2002",
      title: "Named UN Messenger of Peace",
      story: "Continued global travel as a conservation diplomat into her 80s.",
      challenge:
        "Sustaining global influence through institutional rather than personal authority.",
      lesson: "Honors are platforms for the next decade of work.",
    },
    {
      year: "2025",
      title: "Working into her 90s",
      story:
        "Continued giving lectures, mentoring scientists, and running JGI programs across continents.",
      challenge: "Carrying decades of moral authority without coasting on it.",
      lesson: "Late-career work consolidates what the field taught you to defend.",
    },
  ],
  skills: [
    {
      name: "Patient Observation",
      description: "Sat motionless for months until chimpanzees accepted her presence.",
      developed: "Trained her temperament to fieldwork's timescale.",
    },
    {
      name: "Naming and Personhood",
      description:
        "Named chimpanzees instead of numbering them; documented individual personalities.",
      developed: "Refused to flatten subjects to match the academic conventions of the day.",
    },
    {
      name: "Long-horizon Fieldwork",
      description:
        "Built a 60+ year continuous research record at Gombe — one of the longest in any field.",
      developed: "Institutional commitment plus institutional infrastructure.",
    },
    {
      name: "Public Communication",
      description: "Made primatology comprehensible without sentimentalizing it.",
      developed: "National Geographic films, books, lectures, and TED talks over five decades.",
    },
    {
      name: "Institution Building",
      description: "Founded JGI and Roots & Shoots as durable organizations with global reach.",
      developed: "Late-1970s pivot from individual scientist to organizational founder.",
    },
    {
      name: "Diplomatic Travel",
      description: "Maintained 300 days of travel a year for decades to advocate for conservation.",
      developed: "Treated travel as the operating system of global influence.",
    },
    {
      name: "Mentorship",
      description: "Trained generations of female primatologists and African field scientists.",
      developed: "Deliberate pipeline building inside JGI.",
    },
  ],
  failures: [
    {
      title: "Academic dismissal of her early methods",
      context: "Cambridge ethologists criticized her for naming animals and ascribing emotions.",
      recovery: "Continued the methodology; eventually the field adopted her approach.",
      lesson: "Defend pioneering methods until institutions catch up.",
    },
    {
      title: "Gombe banana feeding policy",
      context:
        "Provisioning chimps with bananas later distorted natural behavior and triggered aggression.",
      recovery: "Phased out the practice and documented the lessons openly.",
      lesson: "Intervention has consequences; report them transparently.",
    },
    {
      title: "Pulling back from research personally",
      context: "Some criticized her shift from fieldwork to advocacy as abandoning science.",
      recovery: "Argued the science would only matter if forests survived to protect.",
      lesson: "Activism is the conclusion of any honest conservation science.",
    },
    {
      title: "Sustaining JGI through founder dependence",
      context: "Like many institutions, JGI struggled with the transition beyond its founder.",
      recovery: "Built distributed leadership and Roots & Shoots youth pipelines.",
      lesson: "Plan succession the same way you planned funding.",
    },
  ],
  books: [
    {
      title: "In the Shadow of Man",
      author: "Jane Goodall",
      note: "Her first popular book; the foundational text on Gombe research.",
    },
    {
      title: "Through a Window",
      author: "Jane Goodall",
      note: "Reflective sequel covering thirty years at Gombe.",
    },
    {
      title: "Reason for Hope",
      author: "Jane Goodall",
      note: "Spiritual autobiography that became the model for her later advocacy.",
    },
    {
      title: "The Book of Hope",
      author: "Jane Goodall & Douglas Abrams",
      note: "Late-career conversation on the case for hope in dark times.",
    },
    {
      title: "Seeds of Hope",
      author: "Jane Goodall",
      note: "Botanical companion to her conservation work.",
    },
    {
      title: "My Life with the Chimpanzees",
      author: "Jane Goodall",
      note: "Memoir written for younger readers; the gateway book for many future scientists.",
    },
  ],
  influences: [
    {
      name: "Louis Leakey",
      note: "Anthropologist who picked her for Gombe and arranged her Cambridge PhD.",
    },
    {
      name: "Hugo van Lawick",
      note: "Filmmaker, first husband, and the camera behind early National Geographic Gombe films.",
    },
    {
      name: "Vanne Morris-Goodall",
      note: "Her mother, who served as Gombe chaperone and lifelong supporter.",
    },
    {
      name: "Dian Fossey & Biruté Galdikas",
      note: "'Trimates' triad of women Leakey sent to study great apes.",
    },
    {
      name: "Hugh Lofting",
      note: "Author of Doctor Dolittle — childhood inspiration for talking to animals.",
    },
    { name: "Tarzan books", note: "Childhood reading that seeded her Africa obsession." },
  ],
  videoIds: [
    "goodall-ted-chimpanzees",
    "goodall-natgeo-inside-look",
    "goodall-reasons-for-hope",
    "goodall-60-minutes-archive",
    "goodall-mangelsen-wildlife",
  ],
  decisions: [
    {
      title: "Going to Kenya without a degree (1957)",
      why: "Believed presence with the people doing the work mattered more than credentials.",
      risk: "High",
      outcome: "Met Leakey, who would route her into Gombe and Cambridge.",
      impact: "Founded the most important primate study of the century.",
    },
    {
      title: "Naming chimpanzees instead of numbering them",
      why: "Believed individuality was a fact about chimps, not a projection.",
      risk: "Medium",
      outcome: "Method criticized then adopted across primatology.",
      impact: "Rewrote ethology's conventions about individual recognition.",
    },
    {
      title: "Pivoting from research to advocacy (1986)",
      why: "Believed habitat loss made future fieldwork moot without conservation.",
      risk: "High",
      outcome: "Built a global conservation network with reach far beyond research.",
      impact: "Created the modern model of scientist-as-public-advocate.",
    },
    {
      title: "Founding Roots & Shoots (1991)",
      why: "Believed long-term conservation depended on the next generation.",
      risk: "Medium",
      outcome: "Active in 60+ countries with hundreds of thousands of participants.",
      impact: "Built a global youth pipeline for environmental action.",
    },
    {
      title: "Continuing to travel and lecture into her 90s",
      why: "Believed personal presence still mobilized donors and audiences.",
      risk: "Low",
      outcome: "Sustained JGI relevance and funding into a fourth generation.",
      impact: "Modeled durable late-career impact in a movement field.",
    },
  ],
  insights: [
    {
      audience: "Scientists",
      lesson: "Long observation precedes theory.",
      takeaway: "Field time is non-negotiable; theory built without it is brittle.",
    },
    {
      audience: "Activists",
      lesson: "Hope is a verb.",
      takeaway: "Hope is what people do, not what they feel.",
    },
    {
      audience: "Founders",
      lesson: "Institutions outlive discoveries.",
      takeaway: "Build the org as deliberately as you publish the paper.",
    },
    {
      audience: "Anyone",
      lesson: "Every individual matters.",
      takeaway: "Every individual makes a difference and has a role to play.",
    },
    {
      audience: "Students",
      lesson: "Direct experience beats credentials.",
      takeaway: "Show up where the work happens; the degree follows.",
    },
    {
      audience: "Educators",
      lesson: "Bet on the next generation explicitly.",
      takeaway:
        "Roots & Shoots succeeded because it treated kids as the strategy, not the audience.",
    },
    {
      audience: "Leaders",
      lesson: "Travel is the operating system.",
      takeaway: "Presence in rooms across continents compounds influence.",
    },
  ],
  quotes: [
    {
      text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    },
    {
      text: "Only if we understand, will we care. Only if we care, will we help. Only if we help, shall all be saved.",
    },
    {
      text: "You cannot get through a single day without having an impact on the world around you.",
    },
    {
      text: "Every individual matters. Every individual has a role to play. Every individual makes a difference.",
    },
    {
      text: "It actually doesn't take much to be considered a difficult woman. That's why there are so many of us.",
    },
    { text: "The greatest danger to our future is apathy." },
    {
      text: "Change happens by listening and then starting a dialogue with the people who are doing something you don't believe is right.",
    },
  ],
  sampleQuestions: [
    "How did Jane Goodall discover chimpanzee tool use?",
    "Why did Louis Leakey send Jane Goodall to Gombe?",
    "Why did Goodall name the chimpanzees instead of numbering them?",
    "What is the Jane Goodall Institute and what does it do?",
    "What is Roots & Shoots and why did she start it?",
    "How did Goodall transition from researcher to activist?",
    "What can young scientists learn from Jane Goodall's career?",
  ],
};

export default janeGoodall;
