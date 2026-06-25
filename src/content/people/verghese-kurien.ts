import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-verghese-kurien.webp";

const vergheseKurien: PersonInput = {
  slug: "verghese-kurien",
  name: "Verghese Kurien",
  title: "Father of the White Revolution; Founder, Amul",
  summary:
    "The engineer who turned India from a milk-deficient country into the world's largest milk producer — by handing the dairy back to the farmers who actually milked the cows.",
  portrait,
  featured: false,
  birthYear: "1921",
  industry: "Cooperatives & Agriculture",
  country: "India",
  era: "Post-independence India (1949–2012)",
  companies: [
    "Amul (Kaira District Co-operative Milk Producers' Union)",
    "National Dairy Development Board",
    "GCMMF",
    "IRMA",
  ],
  roles: ["Engineer", "Founder", "Institution Builder", "Cooperative Leader"],
  tags: [
    "cooperatives",
    "rural-development",
    "supply-chain",
    "institution-building",
    "leadership",
    "india",
    "agriculture",
  ],
  keyAchievement:
    "Architected Operation Flood — the world's largest dairy development programme — making India the largest milk producer on earth and lifting millions of rural families out of poverty.",
  timeline: [
    {
      year: "1921",
      title: "Born in Kozhikode, Kerala",
      story:
        "Son of a civil surgeon; grew up in a Syrian Christian family that valued education above all else.",
      challenge: "Expected to follow his father into medicine, a path he had no taste for.",
      lesson: "An obvious career is not always your career.",
    },
    {
      year: "1946",
      title: "Sent to Michigan State on a government scholarship",
      story:
        "Studied metallurgical and nuclear engineering — chosen because the scholarship demanded it, not because he wanted dairy.",
      challenge:
        "Had to swap his dream of nuclear engineering for dairy engineering when the scholarship dictated.",
      lesson: "Sometimes a forced detour becomes the work of your life.",
    },
    {
      year: "1949",
      title: "Posted to Anand, Gujarat",
      story:
        "The government sent him to a dusty creamery in Anand to repay his scholarship bond — he hated it from day one.",
      challenge:
        "Marooned in a small town doing work he did not choose, in an industry he did not care about.",
      lesson: "Where you start does not have to be where you stay — but pay your dues first.",
    },
    {
      year: "1950",
      title: "Met Tribhuvandas Patel and the Kaira farmers",
      story:
        "A local farmers' cooperative asked him to stay on and help them fight the exploitative Polson dairy. He agreed for six months. He stayed 60 years.",
      challenge: "Choosing a tiny farmer cooperative over a clear government engineering career.",
      lesson: "Some problems pick you. Recognize them when they do.",
    },
    {
      year: "1955",
      title: "Invented buffalo-milk powder",
      story:
        "Western dairy science said milk powder could only be made from cow's milk. He and H.M. Dalaya proved it could be made from buffalo milk — unlocking India's actual supply.",
      challenge: "The world's dairy experts said it was scientifically impossible.",
      lesson:
        "Foreign expertise often encodes foreign constraints. Re-derive from first principles.",
    },
    {
      year: "1965",
      title: "Founded the National Dairy Development Board",
      story:
        "Prime Minister Lal Bahadur Shastri visited Anand, spent a night in a farmer's home, and asked Kurien to replicate the Anand model across India.",
      challenge: "Scaling a single-district cooperative to a nation of 500 million.",
      lesson: "Spend a night with the people you serve before designing for them.",
    },
    {
      year: "1970",
      title: "Launched Operation Flood",
      story:
        "Used surplus European milk powder as seed capital to build village dairy cooperatives across India — a 26-year programme.",
      challenge:
        "Aid-funded programmes usually create dependence; he had to design for the opposite.",
      lesson: "Aid is acceptable only if it builds the institution that will end the need for aid.",
    },
    {
      year: "1973",
      title: "Founded GCMMF and the Amul brand",
      story:
        "Federated the village cooperatives into a marketing body that owned the brand and the surplus — the farmers, not middlemen.",
      challenge:
        "Convincing 700,000 illiterate farmers to trust a marketing federation they did not understand.",
      lesson: "If the producer doesn't own the brand, someone else will own the producer.",
    },
    {
      year: "1979",
      title: "Founded the Institute of Rural Management Anand (IRMA)",
      story:
        "Built a graduate school to produce managers who would actually live and work in villages.",
      challenge: "India's best graduates wanted Bombay and Delhi, not Anand.",
      lesson: "If the talent won't come to the problem, build a school that grows it locally.",
    },
    {
      year: "1989",
      title: "Awarded the World Food Prize",
      story:
        "Recognised internationally as the architect of the world's largest agricultural development programme.",
      challenge: "Staying focused on Indian farmers despite the pull of global consulting roles.",
      lesson:
        "International recognition is a distraction unless it serves the people you started with.",
    },
    {
      year: "1998",
      title: "India became the world's largest milk producer",
      story:
        "Overtook the United States — entirely through smallholder cooperatives, not industrial farms.",
      challenge:
        "Defending the cooperative model against waves of privatization pressure from the 1990s onward.",
      lesson: "Scale built on dignity outlasts scale built on extraction.",
    },
    {
      year: "2006",
      title: "Forced out of GCMMF chairmanship",
      story:
        "Political and internal pressures pushed him out of the federation he had built; he resigned in protest.",
      challenge: "Watching institutional politics take over an institution built on trust.",
      lesson:
        "Institutions outlive their founders only if the founders let them — and even then, sometimes painfully.",
    },
    {
      year: "2012",
      title: "Died at 90 in Nadiad, Gujarat",
      story:
        "Buried in the town he had refused to leave for six decades; Amul revenues had crossed ₹13,000 crore.",
      challenge: "Building something designed to outlast a single charismatic leader.",
      lesson: "A life's work is measured by what continues after you stop.",
    },
  ],
  skills: [
    {
      name: "Cooperative Design",
      description:
        "Engineered a three-tier village–district–state structure that gave farmers ownership, voice, and a share of every rupee.",
      developed:
        "Decades of arguing with bureaucrats, donors, and middlemen for one principle: producer ownership.",
    },
    {
      name: "Institution Building",
      description:
        "Founded NDDB, GCMMF, IRMA — bodies designed to function long after he was gone.",
      developed:
        "Watched colonial institutions hollow out at Independence and resolved to build replacements with deeper roots.",
    },
    {
      name: "Negotiation with the State",
      description:
        "Extracted aid, autonomy, and protection from a regulation-heavy government — without becoming an arm of it.",
      developed:
        "Cultivated direct relationships with prime ministers from Nehru to Vajpayee while refusing political office.",
    },
    {
      name: "First-Principles Engineering",
      description:
        "Solved the buffalo-milk-powder problem that Western dairy science said was impossible.",
      developed:
        "Brought metallurgical training to dairy: assume nothing about materials until you test them yourself.",
    },
    {
      name: "Brand Building",
      description:
        "Turned Amul from a regional cooperative into one of India's most loved consumer brands through the Amul Girl campaign.",
      developed:
        "Hired ad agency ASP in 1966 and protected the campaign's editorial freedom for 60 years.",
    },
    {
      name: "Farmer Trust",
      description:
        "Could walk into any village in Gujarat and be received as one of their own — earned, not inherited.",
      developed:
        "Lived in Anand his entire career, attended cooperative meetings personally, ate in farmer homes.",
    },
  ],
  failures: [
    {
      title: "Failed to prevent his own ouster (2006)",
      context:
        "Internal politics and the rise of professional managers pushed him out of GCMMF after 33 years as chairman.",
      recovery:
        "Resigned publicly, refused to fight in court, focused his final years on writing and IRMA.",
      lesson:
        "Even institution builders eventually become the institution's old guard. Plan succession before they plan it for you.",
    },
    {
      title: "Tabreed and oilseed mission underperformed",
      context:
        "Tried to replicate the Amul model in edible oils through Dhara — never reached comparable scale or trust.",
      recovery:
        "Acknowledged that the cooperative model worked best where the producer had a perishable product and no alternative buyer.",
      lesson:
        "A successful template doesn't transfer — the underlying conditions have to be the same.",
    },
    {
      title: "Struggled to globalise Amul",
      context:
        "Despite enormous domestic scale, Amul never became a major global brand in his lifetime.",
      recovery:
        "Prioritised farmer prices and domestic depth over export glamour — a deliberate trade-off.",
      lesson: "Choose the trade-off, then stop apologising for what you traded away.",
    },
  ],
  books: [
    {
      title: "I Too Had a Dream",
      author: "Verghese Kurien (with Gouri Salvi)",
      note: "His autobiography — the canonical account of Operation Flood told in his voice.",
    },
    {
      title: "An Unfinished Dream",
      author: "Verghese Kurien",
      note: "Earlier memoir focused on the institutional fights behind Amul's growth.",
    },
    {
      title: "The Man Who Made the Elephant Dance",
      author: "M.V. Kamath",
      note: "The most thorough Kurien biography, with rich detail on the political battles.",
    },
    {
      title: "Operation Flood: The Story of India's Dairy Industry",
      author: "Shanti George",
      note: "Academic account of the policy and economics behind the programme.",
    },
    {
      title: "Anand Pattern: A Socio-Economic Miracle",
      author: "B.M. Vyas",
      note: "Insider analysis from a long-serving GCMMF managing director.",
    },
  ],
  influences: [
    {
      name: "Tribhuvandas Patel",
      note: "The farmer-leader who convinced him to stay in Anand and gave him institutional cover for 30 years.",
    },
    {
      name: "Lal Bahadur Shastri",
      note: "Prime Minister whose night in a farmer's home set Operation Flood in motion.",
    },
    {
      name: "Sardar Vallabhbhai Patel",
      note: "Patron of the original Kaira cooperative; political godfather of the Anand model.",
    },
    {
      name: "H.M. Dalaya",
      note: "Fellow engineer who co-developed the buffalo-milk-powder technology that made it all possible.",
    },
    {
      name: "Sylvester DaCunha",
      note: "Ad-man who created the Amul Girl — proof that producer cooperatives can speak with wit, not just earnestness.",
    },
  ],
  videoIds: [
    "kurien-amul-story",
    "kurien-rendezvous-shekhar-gupta",
    "kurien-anand-pattern-doc",
    "kurien-iim-lecture",
    "kurien-bbc-interview",
  ],
  decisions: [
    {
      title: "Staying in Anand instead of taking the government engineering posting (1950)",
      why: "Saw that the Kaira farmers needed someone with technical skill and would never get one if he left.",
      risk: "High",
      outcome: "Built the institution that defined Indian dairy for 60 years.",
      impact: "Showed that the most leveraged engineering problems sit in villages, not factories.",
    },
    {
      title: "Refusing to nationalise the cooperatives",
      why: "Believed government ownership would kill farmer initiative and trust.",
      risk: "High",
      outcome:
        "Cooperatives remained farmer-owned through every wave of socialist and liberal policy.",
      impact: "Created a durable model that scaled to 100,000+ villages without state takeover.",
    },
    {
      title: "Accepting World Bank funding for Operation Flood",
      why: "Knew India needed seed capital and was willing to take aid if the conditions preserved farmer ownership.",
      risk: "Medium",
      outcome: "Operation Flood became the world's largest dairy development programme.",
      impact: "Demonstrated how to use foreign capital without surrendering institutional control.",
    },
    {
      title: "Hiring ASP and giving them total creative freedom for the Amul Girl (1966)",
      why: "Wanted the brand to speak with the wit of urban India, not the earnestness of state campaigns.",
      risk: "Medium",
      outcome: "Longest-running ad campaign in advertising history; a cultural institution.",
      impact: "Proved cooperatives can produce world-class consumer brands.",
    },
    {
      title: "Founding IRMA to grow rural managers (1979)",
      why: "Realised that Operation Flood would die without a steady supply of managers who chose villages over cities.",
      risk: "Medium",
      outcome:
        "IRMA has trained thousands of rural management graduates working across cooperatives and NGOs.",
      impact: "Institutionalised the talent pipeline for the cooperative movement.",
    },
  ],
  insights: [
    {
      audience: "Founders",
      lesson: "Producer ownership is the longest-lasting moat.",
      takeaway:
        "If the people who make the product also own the brand, no middleman can dismantle it.",
    },
    {
      audience: "Policy makers",
      lesson: "Subsidy without institution-building creates dependence.",
      takeaway: "Spend aid on capacity, not consumption — or stop spending it.",
    },
    {
      audience: "Engineers",
      lesson: "The hardest engineering problems are organisational, not technical.",
      takeaway: "Buffalo-milk powder was solved in two years; cooperative trust took thirty.",
    },
    {
      audience: "Leaders",
      lesson: "Live where the work is.",
      takeaway: "Sixty years in Anand bought him credibility no consultant could rent.",
    },
    {
      audience: "Young Indians",
      lesson: "The villages are not a charity case.",
      takeaway: "They are a market, a workforce, and a school of management — if you let them be.",
    },
    {
      audience: "Anyone",
      lesson: "Recognise the problem that picks you.",
      takeaway:
        "He wanted to be a nuclear engineer. He became the father of the white revolution. He let it happen.",
    },
  ],
  quotes: [
    { text: "The most important asset is not the cow, it is the farmer." },
    { text: "If India is to live, its villages must live." },
    { text: "I am not in the milk business. I am in the people business." },
    { text: "Our job is to lift the farmer's head, not just his income." },
    { text: "Anand is not a place. It is a way of working with people." },
    { text: "Foreign aid must build the institution that will end the need for foreign aid." },
  ],
  sampleQuestions: [
    "How did Verghese Kurien turn India into the world's largest milk producer?",
    "What is the Anand pattern of cooperatives?",
    "Why did Kurien stay in Anand for sixty years?",
    "What was Operation Flood and how did it work?",
    "How did Amul invent buffalo-milk powder against global expert opinion?",
    "What lessons does Kurien offer modern founders?",
    "Why was Kurien forced out of GCMMF in 2006?",
    "How did the Amul Girl campaign happen?",
  ],
};

export default vergheseKurien;
