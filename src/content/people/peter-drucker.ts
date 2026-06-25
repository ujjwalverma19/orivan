import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-peter-drucker.webp";

const peterDrucker: PersonInput = {
  slug: "peter-drucker",
  name: "Peter Drucker",
  title: "Father of Modern Management",
  summary:
    "The Austrian-born consultant who invented management as a discipline — and spent 60 years teaching executives that the purpose of a business is to create a customer.",
  portrait,
  featured: false,
  birthYear: "1909",
  industry: "Management & Organizational Theory",
  country: "United States (born Austria)",
  era: "Post-war Corporate Management (1939–2005)",
  companies: [
    "Bennington College",
    "NYU Stern",
    "Claremont Graduate University",
    "General Motors (consultant)",
    "Drucker Institute",
  ],
  roles: ["Author", "Professor", "Management Consultant"],
  tags: [
    "management",
    "leadership",
    "strategy",
    "knowledge-work",
    "organizations",
    "self-management",
    "innovation",
  ],
  keyAchievement:
    "Defined management as a discipline through 39 books over 65 years, coining 'knowledge worker,' 'management by objectives,' and shaping how every modern corporation runs.",
  timeline: [
    {
      year: "1909",
      title: "Born in Vienna",
      story:
        "Raised in a household of Viennese intellectuals; Freud was a family acquaintance and Schumpeter a family friend.",
      challenge: "Growing up in the collapsing world of Habsburg Vienna between two wars.",
      lesson: "Witnessing institutions die shapes a lifelong question of what makes them work.",
    },
    {
      year: "1933",
      title: "Fled Nazi Germany for London",
      story:
        "Published a paper critical of the Nazis that was burned by the regime; left for London the same year.",
      challenge: "Starting over at 24 with no money, no language, and no professional standing.",
      lesson: "Take the early signal seriously. Don't wait for things to get worse.",
    },
    {
      year: "1937",
      title: "Emigrated to the United States",
      story:
        "Married Doris Schmitz and moved to New York to write 'The End of Economic Man' on the rise of totalitarianism.",
      challenge: "Building a writing career in his second language.",
      lesson: "The outsider's eye is an analytical asset — keep it sharp.",
    },
    {
      year: "1943",
      title: "Invited inside General Motors",
      story:
        "Alfred Sloan gave him unprecedented access to study GM for two years — the basis for 'Concept of the Corporation.'",
      challenge: "GM's leadership rejected most of his findings and refused to implement them.",
      lesson:
        "Tell the truth even when the client doesn't want to hear it. It becomes your reputation.",
    },
    {
      year: "1946",
      title: "Published 'Concept of the Corporation'",
      story:
        "The first serious book treating a business as an organization worth analyzing, not just a profit machine.",
      challenge: "Inventing a field — management studies — that did not yet exist as a discipline.",
      lesson: "If the discipline you need doesn't exist, write the founding text yourself.",
    },
    {
      year: "1954",
      title: "Published 'The Practice of Management'",
      story:
        "Defined what managers actually do: set objectives, organize, motivate, measure, develop people.",
      challenge:
        "Convincing executives that 'management' was a learnable skill, not innate talent.",
      lesson: "Naming a practice precisely makes it teachable.",
    },
    {
      year: "1959",
      title: "Coined 'knowledge worker'",
      story:
        "Predicted that the most valuable employees would be those who think for a living, not move things.",
      challenge: "Most economists in 1959 still measured productivity by manual output.",
      lesson: "Look at where value is moving, not where it currently sits.",
    },
    {
      year: "1971",
      title: "Founded the Drucker School at Claremont",
      story:
        "Left NYU to start a graduate school of management at Claremont, where he taught for over three decades.",
      challenge: "Building a serious institution in his 60s while still producing major books.",
      lesson: "A long career compounds when each phase opens a new venue.",
    },
    {
      year: "1985",
      title: "Published 'Innovation and Entrepreneurship'",
      story:
        "Recast entrepreneurship as a systematic discipline with seven sources of innovation, not a personality trait.",
      challenge: "Pulling entrepreneurship out of the heroic-founder narrative.",
      lesson: "What looks like inspiration is usually pattern-recognition you can teach.",
    },
    {
      year: "1999",
      title: "Published 'Managing Oneself' in HBR",
      story:
        "At 90, wrote the most-read HBR article ever — a personal manual for managing your own career.",
      challenge: "Distilling 70 years of executive coaching into 7,000 words.",
      lesson: "The hardest person to manage is yourself. Start there.",
    },
    {
      year: "2002",
      title: "Awarded the Presidential Medal of Freedom",
      story:
        "Honored by President George W. Bush for foundational contributions to management thought.",
      challenge: "Accepting institutional honors while staying intellectually independent.",
      lesson: "Honors arrive late. Keep working as if they hadn't.",
    },
    {
      year: "2005",
      title: "Died in Claremont at 95",
      story:
        "Worked nearly to the end; his final book 'The Effective Executive in Action' was published in his last year.",
      challenge: "Building a body of work designed to outlive him by a century.",
      lesson: "Real legacy is the practitioners who can't remember a time before your ideas.",
    },
  ],
  skills: [
    {
      name: "Observation",
      description:
        "Could enter an organization, talk to a few dozen people, and surface its real operating logic in weeks.",
      developed:
        "Two-year embed at General Motors taught him how to listen across hierarchical levels.",
    },
    {
      name: "Pattern Synthesis",
      description:
        "Connected economics, history, sociology, and political theory into one unified view of organizations.",
      developed:
        "A Viennese liberal-arts education followed by 60 years of cross-disciplinary reading.",
    },
    {
      name: "Plain Writing",
      description:
        "Wrote management ideas in clear prose a working executive could apply Monday morning.",
      developed: "Years as a journalist before academia trained him to write for non-specialists.",
    },
    {
      name: "Asking Questions",
      description:
        "Famous for asking 'What does your business actually do for the customer?' until executives genuinely answered.",
      developed: "Decades of consulting where the right question mattered more than any framework.",
    },
    {
      name: "Teaching by Case",
      description:
        "Built his pedagogy around real organizational dilemmas, not abstract principles.",
      developed:
        "Pioneered the executive seminar format that later spread through every business school.",
    },
    {
      name: "Intellectual Honesty",
      description: "Publicly admitted when his predictions were wrong and updated his frameworks.",
      developed: "Modeled on Schumpeter's habit of revising his own theories openly.",
    },
  ],
  failures: [
    {
      title: "Concept of the Corporation rejected by GM (1946)",
      context:
        "Wrote a candid book on GM that founder Alfred Sloan and the leadership team disliked enough to ignore his recommendations.",
      recovery:
        "The book became a foundational management text and shaped Toyota's post-war operations even as GM stayed the same.",
      lesson: "The right audience is rarely the one who hired you.",
    },
    {
      title: "Early prediction the Soviet Union was stable (1960s)",
      context:
        "Underestimated the structural fragility of centrally planned economies in some early writing.",
      recovery:
        "Updated his views and wrote sharply about the USSR's coming collapse a decade before it happened.",
      lesson: "Reputations survive being wrong. They don't survive refusing to update.",
    },
    {
      title: "Distance from quantitative methods",
      context:
        "His resistance to quantitative organizational research left him sidelined from much of academic management in the 1970s.",
      recovery:
        "Outlasted the fashion; his qualitative case-based approach is again dominant in executive education.",
      lesson: "Don't chase methodological trends. Bet on what executives actually need.",
    },
    {
      title: "Slow embrace of the digital economy",
      context:
        "Wrote less about software's organizational implications than the moment demanded in the 1990s.",
      recovery:
        "Made up for it with 'Management Challenges for the 21st Century,' which directly addressed knowledge networks and self-management.",
      lesson: "It's never too late to update the canon. Write the missing chapter yourself.",
    },
  ],
  books: [
    {
      title: "The Effective Executive",
      author: "Peter Drucker",
      note: "The single most practical Drucker title — read by every serious executive coach.",
    },
    {
      title: "Managing Oneself",
      author: "Peter Drucker",
      note: "Originally an HBR article; the highest-leverage 50 pages he ever wrote.",
    },
    {
      title: "Innovation and Entrepreneurship",
      author: "Peter Drucker",
      note: "Systematized what most people treat as a personality trait.",
    },
    {
      title: "The Practice of Management",
      author: "Peter Drucker",
      note: "The 1954 founding text that defined what a manager does.",
    },
    {
      title: "Concept of the Corporation",
      author: "Peter Drucker",
      note: "The two-year GM study that started the field.",
    },
    {
      title: "Drucker: A Political Life",
      author: "Timothy Devinney & Christopher Holt",
      note: "A serious biographical reassessment placing him in 20th-century intellectual history.",
    },
  ],
  influences: [
    {
      name: "Joseph Schumpeter",
      note: "Family friend who modeled what economic thinking grounded in real businesses looked like.",
    },
    {
      name: "Alfred Sloan",
      note: "GM's architect; gave Drucker the access that produced his first major book.",
    },
    {
      name: "Søren Kierkegaard",
      note: "Shaped his view that the individual, not the system, is the unit of moral analysis.",
    },
    {
      name: "Mary Parker Follett",
      note: "Early management thinker whose work on participative leadership prefigured his own.",
    },
    {
      name: "Marshall McLuhan",
      note: "Helped him think about how communications technology reshapes organizations.",
    },
    {
      name: "Konosuke Matsushita",
      note: "Japanese industrialist who proved Drucker's ideas about management as service to society in practice.",
    },
  ],
  videoIds: [
    "drucker-claremont-lecture-1993",
    "drucker-cspan-booknotes-1993",
    "drucker-mckinsey-quarterly-interview",
    "drucker-essence-of-management",
    "drucker-effective-executive-overview",
  ],
  decisions: [
    {
      title: "Leaving Europe in 1933",
      why: "Saw the political logic of Nazism early and refused to bet his life on staying.",
      risk: "High",
      outcome: "Built a 65-year intellectual career in the United States.",
      impact:
        "Modeled taking early signals seriously, a recurring theme in his management writing.",
    },
    {
      title: "Embedding inside GM for two years",
      why: "Believed the only honest management theory came from watching one company in full detail.",
      risk: "Medium",
      outcome: "Produced 'Concept of the Corporation,' the founding text of management studies.",
      impact: "Created the embedded-case-study method that still defines executive education.",
    },
    {
      title: "Founding the Drucker School in his 60s",
      why: "Wanted an institutional home dedicated to management as a serious discipline.",
      risk: "Medium",
      outcome: "Created a school that still trains executives 50 years later.",
      impact: "Proved late-career institution-building can outlast the founder by generations.",
    },
    {
      title: "Coining 'knowledge worker' in 1959",
      why: "Saw that the most valuable economic input was shifting from muscle to mind.",
      risk: "Low",
      outcome: "Reframed labor economics and gave the next half-century its dominant category.",
      impact: "Every modern HR, learning, and talent function inherits this framing.",
    },
    {
      title: "Writing 'Managing Oneself' at 90",
      why: "Believed the next great management problem was managing the self, not the organization.",
      risk: "Low",
      outcome:
        "Became the most popular HBR article ever and a foundational text for personal career strategy.",
      impact: "Pulled management thought into the territory of individual development.",
    },
  ],
  insights: [
    {
      audience: "Executives",
      lesson: "The purpose of a business is to create a customer.",
      takeaway: "Profit is the test of validity, not the purpose. Start from the customer.",
    },
    {
      audience: "Managers",
      lesson: "Effectiveness can be learned.",
      takeaway:
        "Manage time first, contribution second, strengths third, priorities fourth, decisions last.",
    },
    {
      audience: "Knowledge workers",
      lesson: "You are responsible for managing yourself.",
      takeaway:
        "Know your strengths, your work style, your values. Place yourself where you contribute most.",
    },
    {
      audience: "Founders",
      lesson: "Innovation is a discipline.",
      takeaway:
        "Seven sources of innovation — work them systematically, don't wait for inspiration.",
    },
    {
      audience: "Leaders",
      lesson: "Build on strengths, not on weaknesses.",
      takeaway: "Weaknesses are constraints to design around, not flaws to fix.",
    },
    {
      audience: "Board members",
      lesson:
        "The question is not 'are we doing things right?' but 'are we doing the right things?'",
      takeaway: "Strategy is mostly about what to stop doing.",
    },
    {
      audience: "Anyone",
      lesson: "What gets measured gets managed.",
      takeaway:
        "Pick metrics carefully — they will become the actual goals, whether you intended that or not.",
    },
  ],
  quotes: [
    { text: "The best way to predict the future is to create it." },
    {
      text: "There is nothing so useless as doing efficiently that which should not be done at all.",
    },
    { text: "Management is doing things right; leadership is doing the right things." },
    { text: "The purpose of business is to create and keep a customer." },
    {
      text: "Culture eats strategy for breakfast.",
      context: "Widely attributed; popularized via Drucker",
    },
    { text: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes." },
    { text: "Plans are only good intentions unless they immediately degenerate into hard work." },
  ],
  sampleQuestions: [
    "Why is Peter Drucker called the father of modern management?",
    "What did Drucker mean by 'the purpose of a business is to create a customer'?",
    "How did Drucker define a knowledge worker?",
    "What can managers learn from 'The Effective Executive'?",
    "How does Drucker's 'Managing Oneself' apply to a career today?",
    "What did Drucker get wrong, and how did he update his thinking?",
    "Why did Drucker call innovation a discipline rather than a talent?",
  ],
};

export default peterDrucker;
