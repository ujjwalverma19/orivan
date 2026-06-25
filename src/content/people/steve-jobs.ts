import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-jobs.webp";

const steveJobs: PersonInput = {
  slug: "steve-jobs",
  name: "Steve Jobs",
  title: "Co-founder of Apple",
  summary:
    "One of the most influential product visionaries in history — a relentless editor of ideas who insisted technology should feel human.",
  portrait,
  featured: true,
  featuredOrder: 1,
  birthYear: "1955",
  industry: "Technology & Design",
  country: "United States",
  era: "Personal Computing & Mobile (1976–2011)",
  companies: ["Apple", "NeXT", "Pixar"],
  roles: ["Co-founder", "CEO", "Product Visionary", "Designer", "Storyteller"],
  tags: [
    "design",
    "product",
    "focus",
    "storytelling",
    "leadership",
    "craft",
    "minimalism",
    "branding",
    "taste",
  ],
  keyAchievement: "Reinvented six industries: PCs, music, phones, tablets, animation, retail.",
  timeline: [
    {
      year: "1955",
      title: "Born in San Francisco",
      story:
        "Adopted by Paul and Clara Jobs and raised in the orchards that would later become Silicon Valley.",
      challenge: "Grew up knowing he was adopted and carried a lifelong search for identity.",
      lesson: "Your origin story is not your ceiling — it's raw material.",
    },
    {
      year: "1968",
      title: "First call to Bill Hewlett",
      story:
        "At 12, cold-called the HP co-founder for spare parts. Got the parts and a summer internship.",
      challenge: "Had no credentials, no introduction, and no plan B.",
      lesson: "Most people never ask. The world rewards the people who do.",
    },
    {
      year: "1972",
      title: "Dropped out of Reed College",
      story:
        "Left after one semester but stayed on campus auditing calligraphy, dance, and Eastern philosophy.",
      challenge: "No money, sleeping on friends' floors, returning Coke bottles for food.",
      lesson: "Curiosity compounds. The dots only connect looking backwards.",
    },
    {
      year: "1976",
      title: "Founded Apple in a garage",
      story: "With Wozniak and Wayne, sold the Apple I from the Jobs family garage in Los Altos.",
      challenge: "Two engineers with no business experience trying to invent a market.",
      lesson: "Pair a visionary with a builder. Neither succeeds alone.",
    },
    {
      year: "1985",
      title: "Fired from Apple",
      story:
        "After a power struggle with CEO John Sculley, the board sided against him and he resigned.",
      challenge: "Publicly humiliated at 30, watching the company he started move on without him.",
      lesson: "Getting fired traded the weight of success for the lightness of being a beginner.",
    },
    {
      year: "1986",
      title: "Bought Pixar from Lucasfilm",
      story:
        "Spent $5M on a graphics hardware company nobody wanted and turned it into a storytelling studio.",
      challenge: "Burned through ~$50M of personal capital before Toy Story shipped.",
      lesson: "Conviction is paying for the gap between what you see and what others see.",
    },
    {
      year: "1997",
      title: "Returned to Apple",
      story:
        "Came back as interim CEO with Apple 90 days from bankruptcy. Killed 70% of the product line in a week.",
      challenge: "Saving a dying brand with a demoralized team and confused product strategy.",
      lesson: "Focus is saying no to the hundred other good ideas.",
    },
    {
      year: "2001",
      title: "Launched the iPod & iTunes",
      story:
        "Re-entered consumer electronics with a music player and a store that legalized digital music.",
      challenge:
        "The music industry hated the internet and Apple had never shipped a category like this.",
      lesson: "Solve a problem the incumbents are too afraid to name.",
    },
    {
      year: "2007",
      title: "Introduced the iPhone",
      story:
        "Combined a phone, an iPod, and an internet communicator into one device on stage at Macworld.",
      challenge:
        "Building hardware, OS, and carrier deals simultaneously while keeping it a secret.",
      lesson: "The biggest leaps come from collapsing categories, not extending them.",
    },
    {
      year: "2011",
      title: "Final keynote and passing",
      story:
        "Resigned as CEO in August, handed the company to Tim Cook, and died of pancreatic cancer in October.",
      challenge: "Building a company designed to outlive him.",
      lesson: "Real legacy is the culture that keeps shipping after you're gone.",
    },
  ],
  skills: [
    {
      name: "Product Vision",
      description:
        "An obsession with imagining what the customer would want before they could articulate it.",
      developed: "Sharpened by 1,000 product reviews — pushing back, reframing, simplifying.",
    },
    {
      name: "Storytelling",
      description:
        "Turned product launches into theater that taught the audience why something mattered.",
      developed:
        "Rehearsed keynotes for weeks, rewriting opening lines until they felt inevitable.",
    },
    {
      name: "Design Thinking",
      description:
        "Treated industrial design, software, and packaging as one continuous experience.",
      developed: "Studied Bauhaus, Braun's Dieter Rams, and Japanese craft.",
    },
    {
      name: "Leadership Through Standards",
      description: "Set a bar so high that team pride pulled them past their own limits.",
      developed:
        "Years of being told ideas were impossible — then watching teams ship them anyway.",
    },
    {
      name: "Negotiation",
      description:
        "Closed deals with record labels, carriers, and publishers that no one thought possible.",
      developed: "Practiced by walking away — using scarcity and conviction as leverage.",
    },
    {
      name: "Recruiting",
      description:
        "Believed A-players hire A-players and one great hire was worth fifty average ones.",
      developed: "Personally interviewed every candidate at NeXT and the early Apple revival.",
    },
  ],
  failures: [
    {
      title: "The Apple Lisa (1983)",
      context:
        "Pushed a high-end machine that shipped late, cost $9,995, and was beaten by the cheaper Mac.",
      recovery: "Moved to the Mac team and channeled the Lisa's GUI ideas into a winning product.",
      lesson: "Price and timing are part of design.",
    },
    {
      title: "Fired from Apple (1985)",
      context:
        "Lost a board fight with CEO John Sculley after the Mac underperformed against expectations.",
      recovery: "Founded NeXT and bought Pixar — both eventually carried him back to Apple.",
      lesson: "The bottom of one chapter is often the foundation of the next.",
    },
    {
      title: "NeXT Hardware (1988–1993)",
      context: "Beautiful black cube workstation that sold fewer than 50,000 units in five years.",
      recovery: "Pivoted NeXT to software, which Apple acquired in 1996 and rebuilt macOS on.",
      lesson: "If the hardware fails, the ideas inside it can still win.",
    },
    {
      title: "The Power Mac G4 Cube (2000)",
      context:
        "Stunning machine that died at retail because customers wouldn't pay for industrial art.",
      recovery: "Killed it within a year and folded its philosophy into the iMac and Mac mini.",
      lesson: "Beauty alone doesn't sell — utility has to come along for the ride.",
    },
  ],
  books: [
    {
      title: "Zen Mind, Beginner's Mind",
      author: "Shunryu Suzuki",
      note: "Shaped his views on focus and presence.",
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      note: "Re-read every year. The only book downloaded to his iPad 2.",
    },
    {
      title: "The Innovator's Dilemma",
      author: "Clayton Christensen",
      note: "Justified his willingness to cannibalize Apple's own products.",
    },
    {
      title: "Atlas Shrugged",
      author: "Ayn Rand",
      note: "Early reading that fueled his belief in individual conviction.",
    },
    {
      title: "Be Here Now",
      author: "Ram Dass",
      note: "Carried into his India trip in 1974. Shaped his minimalism.",
    },
  ],
  influences: [
    {
      name: "Dieter Rams",
      note: "Ten principles of good design — directly visible in iPod and iPhone hardware.",
    },
    {
      name: "Edwin Land (Polaroid)",
      note: "Showed that one founder could fuse art, science, and commerce.",
    },
    { name: "Bob Dylan", note: "The standard for reinvention and refusing to repeat yourself." },
    {
      name: "Akio Morita (Sony)",
      note: "Proved consumer electronics could be a craft brand, not a commodity.",
    },
  ],
  videoIds: [
    "jobs-stanford-2005",
    "jobs-lost-interview-1995",
    "jobs-iphone-keynote-2007",
    "jobs-mit-sloan-1992",
    "jobs-lost-1984-mac",
    "jobs-secrets-of-life",
  ],
  decisions: [
    {
      title: "Buying Pixar from Lucasfilm",
      why: "Saw potential in computer animation when it was a research toy.",
      risk: "High",
      outcome: "Sold to Disney in 2006 for $7.4B.",
      impact: "Built the credibility and capital for his Apple comeback.",
    },
    {
      title: "Killing the Newton on day one back",
      why: "Refused to keep products that didn't fit Apple's revived focus.",
      risk: "Medium",
      outcome: "Lost a category but freed the team to build the iPod.",
      impact: "Established 'focus by deletion' as Apple's operating model.",
    },
    {
      title: "Opening Apple Retail Stores (2001)",
      why: "Believed customers needed to touch the product without a big-box reseller in the way.",
      risk: "Extreme",
      outcome: "Highest-grossing retail per square foot in the world.",
      impact: "Turned Apple from a tech vendor into a cultural brand.",
    },
    {
      title: "Building the iPhone in secret",
      why: "Two competing internal teams (P1, P2) forced the best architecture to win.",
      risk: "High",
      outcome: "Shipped on time and redefined the smartphone industry overnight.",
      impact: "Created the modern app economy.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Focus is your superpower.",
      takeaway: "Say no to a hundred good things to ship one great thing.",
    },
    {
      audience: "Product Managers",
      lesson: "Start from the experience, work backward to the tech.",
      takeaway: "If you can't tell the story of the product, the product isn't done.",
    },
    {
      audience: "Creators",
      lesson: "Taste is a practice.",
      takeaway: "Surround yourself with the best work in every adjacent field.",
    },
    {
      audience: "Students",
      lesson: "Curiosity compounds.",
      takeaway: "Take the class no one tells you to take — the dots connect later.",
    },
    {
      audience: "Designers",
      lesson: "Simplicity is the final stage, not the first.",
      takeaway: "It takes more iterations to remove than to add.",
    },
    {
      audience: "Leaders",
      lesson: "Hire people who are better than you.",
      takeaway: "A-players want to work with A-players. Protect that standard.",
    },
  ],
  sampleQuestions: [
    "How did Steve Jobs learn product design?",
    "What were his biggest mistakes?",
    "Which books influenced him the most?",
    "How did he rebuild Apple in 1997?",
    "What can a founder learn from his comeback?",
  ],
};

export default steveJobs;
