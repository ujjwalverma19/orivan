import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-rahul-dravid.webp";

const rahulDravid: PersonInput = {
  slug: "rahul-dravid",
  name: "Rahul Dravid",
  title: "Indian Cricket Legend; The Wall",
  summary:
    "The classical batsman who turned patience into a national virtue — and then quietly built India's next generation of cricketers as a coach who refused the credit.",
  portrait,
  featured: false,
  birthYear: "1973",
  industry: "Sport — Cricket",
  country: "India",
  era: "Modern Cricket Era (1996–present)",
  companies: [
    "India National Cricket Team",
    "Rajasthan Royals",
    "National Cricket Academy",
    "India U-19 / India A",
  ],
  roles: ["Batsman", "Captain", "Coach", "Mentor"],
  tags: ["cricket", "patience", "discipline", "leadership", "team", "india", "mentorship"],
  keyAchievement:
    "Scored 13,288 Test runs at an average of 52.31 across 164 Tests, captained India to historic away wins, and coached India to the 2024 T20 World Cup title.",
  timeline: [
    {
      year: "1973",
      title: "Born in Indore, Madhya Pradesh",
      story:
        "Family moved to Bengaluru when he was an infant; his father worked for a jam company — earning him the childhood nickname 'Jammy'.",
      challenge: "A middle-class south Indian household with no cricketing pedigree.",
      lesson: "Pedigree is a head start, not a finish line.",
    },
    {
      year: "1991",
      title: "First-class debut for Karnataka",
      story:
        "Made his Ranji Trophy debut at 18 against Maharashtra; scored a patient 82 in his second match.",
      challenge: "Breaking into a Karnataka batting order full of established Test players.",
      lesson: "Patience at the crease starts as patience for the chance.",
    },
    {
      year: "1996",
      title: "Test debut at Lord's",
      story:
        "Made 95 on debut against England at the home of cricket; the innings that defined his classical technique.",
      challenge: "Five runs short of a debut hundred in the most pressurised venue in the sport.",
      lesson: "Get out at 95 once and you become the man who comes back for the 100.",
    },
    {
      year: "1999",
      title: "First Test century in South Africa",
      story:
        "Scored 148 in Johannesburg under hostile conditions, announcing himself as India's premier away-batsman.",
      challenge:
        "Indian batsmen were historically poor in seaming conditions; he had to rewrite the script.",
      lesson: "Reputation away from home is the hardest reputation to build.",
    },
    {
      year: "2001",
      title: "180 with Laxman at Eden Gardens",
      story:
        "His 180, alongside V.V.S. Laxman's 281, helped India follow-on and beat Australia in one of cricket's greatest Tests.",
      challenge: "Batting for nearly two days against a Steve Waugh-led Australian attack.",
      lesson: "The biggest victories are won by the man who refuses to let go of his end.",
    },
    {
      year: "2003",
      title: "Wicket-kept in ODIs to balance the team",
      story:
        "Took up wicket-keeping in ODIs so India could play an extra batsman — a personal sacrifice for team balance.",
      challenge: "Adding a demanding new discipline at peak career risk.",
      lesson: "Star players who do the unglamorous work create space for others to shine.",
    },
    {
      year: "2005",
      title: "Appointed India Test captain",
      story:
        "Took over from Sourav Ganguly; led India to a Test series win in West Indies after 35 years.",
      challenge: "Captaining a side in transition during the messy Greg Chappell era.",
      lesson: "Inheriting a difficult role is sometimes more useful than waiting for a clean one.",
    },
    {
      year: "2007",
      title: "Stepped down as captain after World Cup exit",
      story: "Resigned the captaincy following India's group-stage exit at the 2007 ODI World Cup.",
      challenge: "Owning a national failure publicly.",
      lesson: "Step down before you're pushed; the institution remembers.",
    },
    {
      year: "2011",
      title: "Delivered the Bradman Oration in Canberra",
      story:
        "Became the first non-Australian to deliver the prestigious oration — a clinical, generous speech about the spirit of the game.",
      challenge: "Speaking with authority about a country and tradition not his own.",
      lesson: "Cross-cultural respect is built by reading more than you talk.",
    },
    {
      year: "2012",
      title: "Retired from international cricket",
      story:
        "Announced retirement after a tough Australia tour; finished with 13,288 Test runs at 52.31.",
      challenge: "Walking away while still being asked to play.",
      lesson: "Leave at a moment of your choosing, not theirs.",
    },
    {
      year: "2015",
      title: "Appointed coach of India A and India U-19",
      story:
        "Took the lower-paid, lower-glamour coaching jobs over the senior team — to shape the pipeline.",
      challenge: "Choosing impact over visibility at the start of his coaching career.",
      lesson: "The most leveraged coaching jobs are upstream of the spotlight.",
    },
    {
      year: "2021",
      title: "Became head coach of the Indian senior team",
      story: "Took over from Ravi Shastri; emphasised process over results in public.",
      challenge:
        "Coaching the most-scrutinised cricket team on earth while protecting young players from the noise.",
      lesson: "The coach's job is to absorb scrutiny so the players don't have to.",
    },
    {
      year: "2024",
      title: "Coached India to the T20 World Cup",
      story:
        "Beat South Africa in the final in Barbados — India's first ICC trophy in 11 years; he handed his medal to Rohit Sharma.",
      challenge: "Delivering a global title with a generation of pressure on the team.",
      lesson: "Hand back the trophy. The team will remember who handed it back.",
    },
  ],
  skills: [
    {
      name: "Concentration",
      description:
        "Could occupy the crease for entire sessions through extraordinary mental discipline.",
      developed:
        "Years of net practice that focused on staying patient against the same delivery a thousand times.",
    },
    {
      name: "Technical Orthodoxy",
      description:
        "Soft hands, late play, perfect balance — a textbook technique built for hostile foreign conditions.",
      developed: "Coach Keki Tarapore drilled the basics from age 12; he never abandoned them.",
    },
    {
      name: "Adaptability",
      description: "Wicket-kept, opened, batted at 3 or 6 — whatever the team needed at the time.",
      developed: "Forged in the team-first culture of the early-2000s Indian dressing room.",
    },
    {
      name: "Emotional Steadiness",
      description:
        "Almost never lost his composure on the field; rarely sledged, never abused officials.",
      developed: "Cultivated as a deliberate counter-image to the era's combative captains.",
    },
    {
      name: "Mentorship",
      description:
        "Builds players one conversation at a time; protects them publicly even when they fail.",
      developed:
        "Decades of being mentored by Anil Kumble, John Wright, and Greg Chappell taught him what worked and what didn't.",
    },
    {
      name: "Quiet Public Speaking",
      description: "Speaks rarely but precisely; the Bradman Oration is studied as a masterclass.",
      developed:
        "Reads widely, writes drafts long before he speaks, and refuses to be quoted without preparation.",
    },
  ],
  failures: [
    {
      title: "2007 ODI World Cup group-stage exit",
      context: "Captained India to a humiliating early exit; lost to Bangladesh and Sri Lanka.",
      recovery:
        "Took responsibility publicly, resigned the captaincy, returned to focus on his batting.",
      lesson:
        "Captaincy is the cricket equivalent of a public CEO role. Take the loss, exit cleanly, keep contributing.",
    },
    {
      title: "Greg Chappell era as captain (2005–07)",
      context:
        "Caught between a divisive coach and a fractured dressing room; relationships frayed.",
      recovery: "Worked with the next coach Gary Kirsten to rebuild trust within the squad.",
      lesson:
        "You can't fix a dysfunctional system from inside it as captain. Sometimes you have to wait for the next regime.",
    },
    {
      title: "Dropped from the ODI side (2009)",
      context: "Selectors dropped him from the limited-overs format mid-career.",
      recovery:
        "Channelled the rejection into the longer format; returned to ODI cricket briefly in 2011.",
      lesson: "Format demotion is not career demotion. Refocus on what you still do best.",
    },
    {
      title: "Australia 2011–12 series whitewash",
      context:
        "India lost 0–4; Dravid's own form suffered; the series accelerated his retirement decision.",
      recovery: "Retired with grace and pivoted to coaching India's pipeline.",
      lesson: "Retirement after a bad series is honest. Retirement after a good one is theatre.",
    },
  ],
  books: [
    {
      title: "Rahul Dravid: Timeless Steel",
      author: "ESPNcricinfo editors",
      note: "An anthology of writing on Dravid by cricket's best writers — the closest thing to a definitive portrait.",
    },
    {
      title: "Rahul Dravid: A Biography",
      author: "Vedam Jaishankar",
      note: "The most thorough biographical treatment, with deep family and team interviews.",
    },
    {
      title: "The Test of My Life",
      author: "Yuvraj Singh",
      note: "Yuvraj's memoir contains the most candid teammate-perspective passages on Dravid's mentorship.",
    },
    {
      title: "John Wright's Indian Summers",
      author: "John Wright",
      note: "The former India coach's memoir — essential context for Dravid's evolution into a captain.",
    },
    {
      title: "Pundits from Pakistan",
      author: "Rahul Bhattacharya",
      note: "Bhattacharya's tour book includes some of the best on-the-ground writing about Dravid's craft at his peak.",
    },
  ],
  influences: [
    {
      name: "Keki Tarapore",
      note: "His first coach in Bangalore who built his technique from the age of 12.",
    },
    {
      name: "Sunil Gavaskar",
      note: "His batting idol — model for technique and temperament against fast bowling.",
    },
    {
      name: "Anil Kumble",
      note: "Long-time Karnataka teammate; partner in defining a quietly competitive Indian cricket culture.",
    },
    {
      name: "John Wright",
      note: "India coach who first formalised the team-first ethos Dravid embodied.",
    },
    {
      name: "Steve Waugh",
      note: "Australian captain whose mental toughness Dravid openly studied and emulated.",
    },
  ],
  videoIds: [
    "dravid-bradman-oration-2011",
    "dravid-mak-pataudi-lecture",
    "dravid-breakfast-with-champions",
    "dravid-180-eden-gardens",
    "dravid-bcci-coaching-talk",
  ],
  decisions: [
    {
      title: "Taking up wicket-keeping in ODIs (2003)",
      why: "Believed the team needed balance more than he needed glamour.",
      risk: "Medium",
      outcome: "Enabled India to play seven specialist batsmen; freed up tactical options.",
      impact:
        "Set the precedent that India's best players carry the team's structural problems, not avoid them.",
    },
    {
      title: "Stepping down as captain after 2007 World Cup",
      why: "Took personal responsibility for a national failure.",
      risk: "Low",
      outcome: "Returned to focus on batting; remained a respected senior player.",
      impact: "Modelled a clean exit from leadership in a culture that often clings to position.",
    },
    {
      title: "Coaching India A and U-19 instead of the senior team (2015)",
      why: "Believed the pipeline was where India's next generation would be made or broken.",
      risk: "Low",
      outcome:
        "Produced players like Rishabh Pant, Shubman Gill, Prithvi Shaw, and Washington Sundar.",
      impact: "Rebuilt India's bench strength to a level no other team could match.",
    },
    {
      title: "Handing his T20 World Cup medal to Rohit Sharma (2024)",
      why: "Wanted the players to own the victory; saw the coach's role as background.",
      risk: "Low",
      outcome: "Cemented his reputation as the most player-first coach of his era.",
      impact: "Reset the public model of what an Indian head coach should look like.",
    },
    {
      title: "Retiring after the 2012 Australia tour",
      why: "Recognised his own reactions had slowed and refused to overstay.",
      risk: "Low",
      outcome: "Walked away with dignity at 39 with the bat still in his hand.",
      impact: "Demonstrated that timing a retirement is a skill in itself.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Process over outcome.",
      takeaway: "You control the preparation. The scoreboard is a downstream report on it.",
    },
    {
      audience: "Leaders",
      lesson: "Take the credit only after you've taken the blame.",
      takeaway:
        "He took every loss publicly and handed every win away. The credibility compounded.",
    },
    {
      audience: "Mentors",
      lesson: "Protect young people from the noise.",
      takeaway: "A senior player or coach absorbs scrutiny so juniors can focus on their craft.",
    },
    {
      audience: "Professionals",
      lesson: "Do the unglamorous job.",
      takeaway:
        "Wicket-keeping, batting at six, opening — he took every uncomfortable role that helped the team.",
    },
    {
      audience: "Anyone",
      lesson: "Patience is a competitive advantage.",
      takeaway: "In a hurried world, the person willing to wait an hour longer wins.",
    },
    {
      audience: "Founders",
      lesson: "Hire upstream of the spotlight.",
      takeaway: "The best people often want quiet, important work. Find them there.",
    },
  ],
  quotes: [
    {
      text: "I have always believed that you don't have to be number one to be a great cricketer. You just have to be a good cricketer.",
    },
    {
      text: "The game changes very fast. One day you're a hero, the next you're forgotten. Don't take either too seriously.",
    },
    { text: "The captaincy of a cricket team is more than tactics. It is about people." },
    {
      text: "You're never going to please everybody. You learn to play for the team you're in, not the audience watching.",
    },
    {
      text: "I would rather be remembered as someone who got the best out of others than as someone who only got the best out of himself.",
    },
    { text: "Performance pressure is a privilege. Most people will never feel it." },
  ],
  sampleQuestions: [
    "What made Rahul Dravid 'The Wall' of Indian cricket?",
    "Why did Dravid take up wicket-keeping in ODIs?",
    "What did Dravid say in the Bradman Oration?",
    "How did Dravid coach India to the 2024 T20 World Cup?",
    "Why did Dravid resign as India captain in 2007?",
    "What can young athletes learn from Dravid's discipline?",
    "How did Dravid handle the Greg Chappell era?",
    "What is Dravid's philosophy as a mentor?",
  ],
};

export default rahulDravid;
