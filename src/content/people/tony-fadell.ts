import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-tony-fadell.webp";

const tonyFadell: PersonInput = {
  slug: "tony-fadell",
  name: "Tony Fadell",
  title: "Father of the iPod, founder of Nest",
  summary:
    "A hardware obsessive who built the iPod inside Apple, ran iPhone hardware engineering, and then walked away to reinvent the thermostat — proving the smart-home category in the process.",
  portrait,
  birthYear: "1969",
  industry: "Consumer Electronics & Smart Home",
  country: "United States",
  era: "Mobile & Smart Home (1991–present)",
  companies: ["General Magic", "Philips", "Apple", "Nest", "Future Shape"],
  roles: ["Engineer", "Product Lead", "Founder", "Investor"],
  tags: [
    "product",
    "design",
    "hardware",
    "iPod",
    "iPhone",
    "smart-home",
    "apple",
    "nest",
    "mentorship",
  ],
  keyAchievement:
    "Led the team that created the iPod and founded Nest, defining two consumer-electronics categories.",
  timeline: [
    {
      year: "1969",
      title: "Born in Detroit, Michigan",
      story:
        "His salesman father moved the family across the Midwest; he changed schools twelve times before graduating.",
      challenge: "Constantly being the new kid.",
      lesson: "Mobility forces you to learn how to find your people quickly.",
    },
    {
      year: "1991",
      title: "Joined General Magic",
      story:
        "Apple spinout building one of the first handheld communicators; worked alongside Andy Hertzfeld and Bill Atkinson.",
      challenge: "Building consumer hardware a decade before the market existed.",
      lesson: "Some of the most important work happens at companies that fail.",
    },
    {
      year: "1995",
      title: "Joined Philips",
      story: "Led the Nino and Velo handheld lines as VP of Business Development.",
      challenge: "Trying to ship handhelds inside a giant electronics company.",
      lesson: "Big-company hardware moves at big-company speed, no matter how hard you push.",
    },
    {
      year: "2001",
      title: "Joined Apple to build the iPod",
      story: "Recruited as a contractor to make 'a hard-disk MP3 player' in 9 months.",
      challenge: "Negotiating with Toshiba for tiny drives no one else thought practical.",
      lesson:
        "Category-creating products often hinge on a single component nobody else has spotted.",
    },
    {
      year: "2001",
      title: "Shipped the original iPod",
      story: "Released on October 23 with the line 'a thousand songs in your pocket.'",
      challenge: "Building software, hardware, and music-label deals in parallel.",
      lesson: "The product is the story; engineering exists to make the sentence true.",
    },
    {
      year: "2006",
      title: "Ran iPhone hardware engineering",
      story:
        "Promoted to SVP of the iPod and iPhone division; co-architected the original iPhone hardware.",
      challenge: "Building a phone with two competing internal teams in secret.",
      lesson:
        "Competition inside is faster than competition outside when the stakes are existential.",
    },
    {
      year: "2008",
      title: "Left Apple",
      story: "Resigned to spend time with his family and recover from the iPhone push.",
      challenge: "Leaving at the height of his Apple influence.",
      lesson: "Founders need recovery windows or the next chapter never starts.",
    },
    {
      year: "2010",
      title: "Founded Nest",
      story:
        "Started Nest with Matt Rogers to reinvent the thermostat after building his own off-grid home.",
      challenge: "Convincing investors that thermostats were a category.",
      lesson: "The opportunity is the thing everyone has stopped looking at.",
    },
    {
      year: "2014",
      title: "Sold Nest to Google for $3.2B",
      story: "One of the largest hardware acquisitions of the decade.",
      challenge: "Integrating a hardware startup into a search company.",
      lesson: "Acquisition culture is the second product you have to design.",
    },
    {
      year: "2016",
      title: "Left Google",
      story: "Departed Nest after culture clashes during the Alphabet transition.",
      challenge: "Walking away from his own company under public scrutiny.",
      lesson: "Sometimes the exit announces what the integration couldn't fix.",
    },
    {
      year: "2022",
      title: "Published Build",
      story:
        "Released a 'unorthodox guide to making things worth making' synthesizing 30 years of operator lessons.",
      challenge: "Turning an operator's intuition into transferable advice.",
      lesson: "Mentorship at scale requires writing the manual you wish you'd been handed.",
    },
  ],
  skills: [
    {
      name: "Story-First Product",
      description: "Forces teams to write the press release and customer story before specs.",
      developed: "Adopted at Apple; refined and codified at Nest.",
    },
    {
      name: "Hardware Systems Thinking",
      description: "Sees the whole stack — supply chain, firmware, packaging, retail.",
      developed: "30+ years shipping consumer electronics across three eras.",
    },
    {
      name: "Cross-Cultural Negotiation",
      description: "Built supplier relationships across Asia for iPod, iPhone, and Nest.",
      developed: "Multi-decade Tokyo, Shenzhen, and Taipei travel and dealmaking.",
    },
    {
      name: "Mentorship",
      description: "Trains 200+ founders through Future Shape after his book Build.",
      developed: "Modeled on his early apprenticeships at General Magic.",
    },
    {
      name: "Apprenticeship Hiring",
      description: "Pairs juniors with senior leaders to compress the learning loop.",
      developed: "Replicated the General Magic / Apple model at Nest.",
    },
    {
      name: "Customer Anthropology",
      description:
        "Visits real homes before launches; observes friction rather than asking about it.",
      developed: "Founded Nest after living with a bad thermostat in his own house.",
    },
  ],
  failures: [
    {
      title: "Philips handhelds (1995–1999)",
      context: "Multiple consumer handheld launches that underperformed at retail.",
      recovery: "Took the operator lessons into General Magic veterans and ultimately Apple.",
      lesson: "Big-company timing and supply discipline aren't optional in hardware.",
    },
    {
      title: "Nest Cam reception and software cycles",
      context: "Several product launches at Nest drew mixed press over reliability.",
      recovery: "Iterated firmware and product line; refocused team on thermostat franchise.",
      lesson: "Hardware reputations are built across multiple generations, not one launch.",
    },
    {
      title: "Nest's Google integration",
      context: "Culture clashes inside Alphabet eroded the startup team.",
      recovery: "Departed; Nest was later folded into the Google Home group.",
      lesson:
        "Acquisition outcomes are decided in the first 6 months of integration, not at signing.",
    },
  ],
  books: [
    {
      title: "Build: An Unorthodox Guide to Making Things Worth Making",
      author: "Tony Fadell",
      note: "His own operator manual for builders.",
    },
    {
      title: "Insanely Simple",
      author: "Ken Segall",
      note: "Apple's design and marketing discipline.",
    },
    {
      title: "Crossing the Chasm",
      author: "Geoffrey Moore",
      note: "Frame for taking hardware products mainstream.",
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      note: "Justified Nest's attack on incumbents like Honeywell.",
    },
    {
      title: "Designing Design",
      author: "Kenya Hara",
      note: "Influenced his Japanese-inflected industrial design instinct.",
    },
  ],
  influences: [
    { name: "Bill Atkinson", note: "General Magic mentor; modeled craft." },
    { name: "Steve Jobs", note: "Boss at Apple; framed product-as-story." },
    {
      name: "Andy Hertzfeld",
      note: "General Magic colleague who modeled the original Mac team's intensity.",
    },
    { name: "Bill Campbell", note: "Coach throughout the Apple and Nest years." },
  ],
  videoIds: [
    "fadell-ted-2015",
    "fadell-build-launch-2022",
    "fadell-tim-ferriss-2022",
    "fadell-stanford-etl-2015",
  ],
  decisions: [
    {
      title: "Join Apple as a contractor",
      why: "Saw the iPod opportunity as a once-a-decade chance.",
      risk: "Medium",
      outcome: "Shipped the iPod and rose to lead iPhone hardware.",
      impact: "Defined a decade of consumer electronics.",
    },
    {
      title: "Leave Apple in 2008",
      why: "Needed recovery and family time after the iPhone cycle.",
      risk: "Medium",
      outcome: "Started Nest two years later.",
      impact: "Reframed the smart-home category.",
    },
    {
      title: "Sell Nest to Google",
      why: "Wanted scale and global distribution.",
      risk: "High",
      outcome: "Closed the deal at $3.2B; later left over culture conflicts.",
      impact: "Cautionary template for hardware-into-software acquisitions.",
    },
    {
      title: "Write Build at age 50+",
      why: "Wanted to mentor at scale, not at retail.",
      risk: "Low",
      outcome: "Best-selling builder's manual and Future Shape advisory work.",
      impact: "Modeled how operators turn experience into compounding teaching.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Apprentice early, then build.",
      takeaway: "Pick your first two jobs for the people you'll learn from, not the title or pay.",
    },
    {
      audience: "Product Leaders",
      lesson: "Story before spec.",
      takeaway:
        "Write the press release and customer-day-in-the-life before the engineering kickoff.",
    },
    {
      audience: "Engineers",
      lesson: "Hardware loops are long.",
      takeaway: "Design for the second and third generation while shipping the first.",
    },
    {
      audience: "Operators",
      lesson: "Name the decision type out loud.",
      takeaway: "Distinguish data-driven and opinion-driven calls so the team uses the right tool.",
    },
    {
      audience: "Leaders",
      lesson: "Mentorship is your real legacy.",
      takeaway: "Turn the lessons into a written manual or they die with you.",
    },
  ],
  quotes: [
    { text: "You're not making a product. You're making a feeling." },
    { text: "The first secret of design is noticing." },
    { text: "Process is no substitute for understanding the customer." },
    { text: "You can't make a great product unless you have a great team." },
    { text: "Mentors aren't optional. They're the shortcut to the second decade." },
  ],
  sampleQuestions: [
    "How did Tony Fadell build the original iPod?",
    "What's his story-first product framework?",
    "Why did Nest's Google integration fall apart?",
    "How does he distinguish data-driven from opinion-driven decisions?",
    "What's his advice to a 25-year-old engineer?",
  ],
  featured: false,
};

export default tonyFadell;
