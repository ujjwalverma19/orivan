import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-tim-berners-lee.webp";

const timBernersLee: PersonInput = {
  slug: "tim-berners-lee",
  name: "Tim Berners-Lee",
  title: "Inventor of the World Wide Web",
  summary:
    "The British physicist who quietly proposed a hypertext system at CERN — and then gave it away to humanity, refusing the patent that would have made him the richest engineer in history.",
  portrait,
  featured: false,
  birthYear: "1955",
  industry: "Computing & Open Standards",
  country: "United Kingdom",
  era: "Internet to Web (1980–present)",
  companies: ["CERN", "MIT", "W3C", "Inrupt", "Open Data Institute"],
  roles: ["Inventor", "Computer Scientist", "Director (W3C)", "Founder"],
  tags: [
    "web",
    "open-standards",
    "decentralization",
    "protocols",
    "privacy",
    "data-ownership",
    "computing",
  ],
  keyAchievement:
    "Invented the World Wide Web (HTML, HTTP, URL) at CERN in 1989–91 and released it royalty-free, defining the open architecture of the modern internet.",
  timeline: [
    {
      year: "1955",
      title: "Born in London to computer-scientist parents",
      story:
        "Both parents worked on the Ferranti Mark 1, one of the world's first commercial computers.",
      challenge: "Growing up in the long shadow of two pioneer computer scientists.",
      lesson: "Early exposure to a discipline normalizes ambition in it.",
    },
    {
      year: "1976",
      title: "Graduated Oxford in physics",
      story:
        "Was banned from using the university's computers after a hacking incident; built his own from spare parts and a soldering iron.",
      challenge: "Being denied access to the tools his work depended on.",
      lesson: "Make your own tools when the institutional ones are closed to you.",
    },
    {
      year: "1980",
      title: "First contract at CERN",
      story:
        "Spent six months consulting at the European particle physics lab; wrote 'Enquire,' a personal hypertext database to track people and projects.",
      challenge: "Modeling a complex organization in software that had to be useful immediately.",
      lesson: "Build for your own daily friction. The general solution comes later.",
    },
    {
      year: "1984",
      title: "Returned to CERN as a Fellow",
      story:
        "Joined CERN permanently and watched the lab struggle with documentation across thousands of researchers and machines.",
      challenge: "CERN's information was siloed across incompatible systems with no shared format.",
      lesson: "The most useful inventions solve real institutional problems first.",
    },
    {
      year: "1989",
      title: "Wrote 'Information Management: A Proposal'",
      story:
        "Submitted a memo to his boss Mike Sendall proposing a global hypertext system; Sendall's note read 'vague but exciting.'",
      challenge:
        "Pitching a speculative idea inside a physics lab whose mission had nothing to do with networked information.",
      lesson: "A skeptical but tolerant manager is the rarest resource in invention.",
    },
    {
      year: "1990",
      title: "Wrote the first web browser and server on a NeXT computer",
      story:
        "Built HTML, HTTP, the first browser/editor, and the first web server in roughly three months.",
      challenge: "Inventing four interlocking standards simultaneously while doing his day job.",
      lesson: "When the standards don't exist, build the minimum stack end-to-end yourself.",
    },
    {
      year: "1991",
      title: "Released the Web to the world",
      story:
        "First public web page went live at info.cern.ch in August 1991, describing the project and how to set up a server.",
      challenge:
        "Convincing other CERN labs and external universities to install web servers when nobody had heard of the technology.",
      lesson: "Releasing your invention is the start of the work, not the end.",
    },
    {
      year: "1993",
      title: "CERN made the Web royalty-free",
      story:
        "Berners-Lee convinced CERN to release all web technology to the public domain, foregoing patent revenue.",
      challenge: "Walking away from what could have been billions in licensing fees.",
      lesson: "Open standards win at scale. Proprietary standards die at scale.",
    },
    {
      year: "1994",
      title: "Founded the World Wide Web Consortium (W3C) at MIT",
      story: "Moved to MIT to start the standards body that would govern web evolution.",
      challenge:
        "Keeping the Web open against pressure from Microsoft, Netscape, and later Google.",
      lesson: "Open systems need institutional protectors, not just protocols.",
    },
    {
      year: "2004",
      title: "Knighted by Queen Elizabeth II",
      story: "Knighted for services to the global development of the internet.",
      challenge:
        "Accepting institutional recognition while continuing to fight institutional capture of the Web.",
      lesson: "Honors are useful as platform, not as destination.",
    },
    {
      year: "2016",
      title: "Awarded the Turing Award",
      story:
        "Received computing's highest honor for inventing the Web and the associated protocols.",
      challenge:
        "Accepting the prize while publicly worrying the Web had been broken by surveillance capitalism.",
      lesson: "Honor your invention by criticizing what it became.",
    },
    {
      year: "2018",
      title: "Launched Inrupt and Solid",
      story:
        "Started a company to commercialize Solid — a protocol for decentralized personal data 'pods' under user control.",
      challenge:
        "Convincing developers and enterprises to adopt a new identity layer 30 years after the Web's launch.",
      lesson: "If your first invention got captured, build the next one with a structural fix.",
    },
  ],
  skills: [
    {
      name: "Standards Design",
      description:
        "Designed HTML, HTTP, and URL as minimum-viable, extensible protocols that survived 30 years of adoption.",
      developed:
        "Years inside CERN watching what made protocols spread (or not) across thousands of nodes.",
    },
    {
      name: "End-to-End Building",
      description:
        "Built browser, server, and language together when no single piece existed alone.",
      developed:
        "Physicist's training of building the apparatus when the field has no off-the-shelf tools.",
    },
    {
      name: "Institutional Persuasion",
      description:
        "Convinced CERN's lawyers, MIT, and Queen Elizabeth's government that an open Web was worth preserving.",
      developed:
        "Decades of writing memos, briefing politicians, and quietly building consensus inside W3C.",
    },
    {
      name: "Long-Term Stewardship",
      description:
        "Spent 30+ years protecting the Web's architecture from capture by single companies.",
      developed:
        "Saw the failures of older networks (Minitel, AOL, CompuServe) and refused to repeat their structural mistakes.",
    },
    {
      name: "Plain Communication",
      description:
        "Explained 'how the Web works' to non-technical audiences without dumbing it down.",
      developed: "Years of public lectures and op-eds aimed at educated non-engineers.",
    },
    {
      name: "Principled Decision-Making",
      description:
        "Said no to patent revenue, no to closed standards, no to surveillance capitalism — repeatedly.",
      developed: "Quaker family ethics translated into engineering decisions.",
    },
  ],
  failures: [
    {
      title: "Failure to design strong identity into the original Web",
      context:
        "The original HTTP/HTML stack had no notion of user identity, which later led to ad-tech tracking and surveillance capitalism.",
      recovery:
        "Decades later, launched Solid and Inrupt to retrofit user-controlled identity onto the Web.",
      lesson:
        "The architectural decisions you defer become the next generation's structural problems.",
    },
    {
      title: "Underestimating ad-driven business models",
      context:
        "Did not anticipate how programmatic advertising would centralize the Web around a few platforms.",
      recovery:
        "Public campaigns for the 'Contract for the Web' and decentralization advocacy through W3C and Solid.",
      lesson:
        "Open protocols don't guarantee open ecosystems — economic incentives can re-centralize them.",
    },
    {
      title: "Slow adoption of Solid",
      context:
        "Solid has struggled to find mainstream adoption despite a decade of work and significant investment.",
      recovery:
        "Continuing to push enterprise pilots and government partnerships rather than chasing consumer adoption.",
      lesson: "Replacing infrastructure takes a generation. Stay patient and keep shipping.",
    },
    {
      title: "Browser Wars compromise (1990s)",
      context:
        "Could not prevent Microsoft and Netscape from forking HTML implementations and breaking interop.",
      recovery:
        "Built W3C as the formal arbiter; eventually browsers re-converged on shared standards after years of pain.",
      lesson: "Standards bodies are slow but they outlast monopolies.",
    },
  ],
  books: [
    {
      title: "Weaving the Web",
      author: "Tim Berners-Lee",
      note: "His own account of inventing the Web — the canonical primary source.",
    },
    {
      title: "Where Wizards Stay Up Late",
      author: "Katie Hafner & Matthew Lyon",
      note: "Pre-history of the internet that sets up Berners-Lee's contribution.",
    },
    {
      title: "The Cathedral and the Bazaar",
      author: "Eric Raymond",
      note: "Open-source manifesto that shares Berners-Lee's commitment to decentralized building.",
    },
    {
      title: "The Master Switch",
      author: "Tim Wu",
      note: "History of communication monopolies that explains why Berners-Lee fights centralization.",
    },
    {
      title: "Code: And Other Laws of Cyberspace",
      author: "Lawrence Lessig",
      note: "Companion intellectual framework for understanding the Web as architecture as politics.",
    },
  ],
  influences: [
    {
      name: "Vannevar Bush",
      note: "1945 'As We May Think' essay imagined the Memex — Berners-Lee's intellectual ancestor for hypertext.",
    },
    {
      name: "Ted Nelson",
      note: "Coined 'hypertext' in 1965 and inspired the linking model Berners-Lee later simplified for the Web.",
    },
    {
      name: "Doug Engelbart",
      note: "His 1968 'Mother of All Demos' showed networked collaboration decades before the Web existed.",
    },
    {
      name: "Mike Sendall (CERN supervisor)",
      note: "Boss who tolerated his vague-but-exciting proposal and approved the time to build it.",
    },
    {
      name: "Robert Cailliau",
      note: "Belgian engineer at CERN who co-promoted the Web internally and helped Berners-Lee navigate the lab's bureaucracy.",
    },
    {
      name: "Conway Berners-Lee (father)",
      note: "Computer scientist on the Ferranti Mark 1 who shaped his approach to information systems from childhood.",
    },
  ],
  videoIds: [
    "berners-lee-ted-2009-data",
    "berners-lee-ted-2010-linked-data",
    "berners-lee-cern-25th-anniversary",
    "berners-lee-acm-turing-lecture",
    "berners-lee-bbc-hardtalk",
  ],
  decisions: [
    {
      title: "Choosing decentralized hypertext (1989)",
      why: "Saw that CERN's diverse machines and operating systems demanded a network without a central server.",
      risk: "Low",
      outcome: "Built a protocol that could scale to billions of nodes without central authority.",
      impact: "Defined the architectural shape of the modern Web.",
    },
    {
      title: "Releasing the Web royalty-free (1993)",
      why: "Believed proprietary licensing would kill adoption and centralize control.",
      risk: "Extreme",
      outcome:
        "Walked away from billions in potential patent revenue; the Web exploded globally within five years.",
      impact: "Set the precedent that foundational internet protocols belong to humanity.",
    },
    {
      title: "Founding W3C at MIT (1994)",
      why: "Needed an institutional home that could mediate between browser vendors and protect the standards.",
      risk: "Medium",
      outcome: "W3C still governs HTML, CSS, and dozens of web standards 30 years later.",
      impact: "Created the model of an open standards body that outlasts any single platform.",
    },
    {
      title: "Launching Inrupt and Solid (2018)",
      why: "Saw that user data centralization in big platforms had broken the Web's original promise.",
      risk: "High",
      outcome: "Slow enterprise traction but maintained pressure on the centralization debate.",
      impact: "Reopened the architectural conversation about who owns personal data.",
    },
    {
      title: "Refusing to retire from advocacy",
      why: "Felt the Web's next 30 years needed his voice on privacy, decentralization, and AI.",
      risk: "Low",
      outcome: "Remains the most cited voice on Web governance issues into his 70s.",
      impact: "Models long stewardship as part of an inventor's responsibility.",
    },
  ],
  insights: [
    {
      audience: "Inventors",
      lesson: "Release your work royalty-free if you want it to scale.",
      takeaway: "Adoption beats revenue for foundational technology. Choose adoption.",
    },
    {
      audience: "Engineers",
      lesson: "Design the minimum protocol, then extend.",
      takeaway: "HTTP and HTML succeeded because they were small enough for anyone to implement.",
    },
    {
      audience: "Founders",
      lesson: "Solve your own institutional problem first.",
      takeaway:
        "CERN's documentation chaos was the Web's first use case. Yours is right in front of you too.",
    },
    {
      audience: "Builders",
      lesson: "Architectural decisions are political decisions.",
      takeaway: "What you defer becomes someone else's monopoly.",
    },
    {
      audience: "Long-term thinkers",
      lesson: "Stewardship is part of invention.",
      takeaway: "Build the institutions that protect what you invented.",
    },
    {
      audience: "Anyone",
      lesson: "Most powerful tools begin as personal scripts.",
      takeaway: "The first version is the one you write to make your own life easier.",
    },
    {
      audience: "Standards designers",
      lesson: "Convergence is fragile.",
      takeaway: "Even open standards can fork. Defend interoperability actively, not just legally.",
    },
  ],
  quotes: [
    { text: "This is for everyone.", context: "London 2012 Olympics opening ceremony" },
    {
      text: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
    },
    { text: "We need diversity of thought in the world to face the new challenges." },
    {
      text: "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.",
    },
    {
      text: "Anyone who has lost track of time when using a computer knows the propensity to dream, the urge to make dreams come true and the tendency to miss lunch.",
    },
    { text: "If you make a piece of technology, you have a responsibility for how it's used." },
    { text: "The Web does not just connect machines, it connects people." },
  ],
  sampleQuestions: [
    "How did Tim Berners-Lee invent the World Wide Web?",
    "Why did Berners-Lee give the Web away for free?",
    "What is the difference between the Internet and the World Wide Web?",
    "How does Berners-Lee's Solid project try to fix the Web?",
    "What did CERN have to do with the invention of the Web?",
    "What can engineers learn from how the Web was designed?",
    "Why is Berners-Lee worried about the future of the Web?",
  ],
};

export default timBernersLee;
