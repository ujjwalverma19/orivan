import type { PersonInput } from "@/content/schemas";
import portrait from "@/assets/journey-sachin-tendulkar.webp";

const sachinTendulkar: PersonInput = {
  slug: "sachin-tendulkar",
  name: "Sachin Tendulkar",
  title: "100 international centuries; record holder across both formats",
  summary:
    "A Mumbai schoolboy whose talent was so obvious by 14 that the country built its cricketing expectations around him — and who delivered them for 24 years.",
  portrait,
  birthYear: "1973",
  industry: "Professional Cricket",
  country: "India",
  era: "Modern Cricket (1989–2013)",
  companies: ["India National Team", "Mumbai Indians", "Mumbai Cricket Association"],
  roles: ["Athlete", "Captain", "Mentor"],
  tags: ["cricket", "batting", "india", "longevity", "consistency", "mumbai", "records", "icon"],
  keyAchievement: "First cricketer to score 100 international centuries; played 200 Test matches.",
  timeline: [
    {
      year: "1973",
      title: "Born in Mumbai",
      story: "Named after composer Sachin Dev Burman; raised in the Sahitya Sahawas colony.",
      challenge: "Working-class family in a crowded Mumbai colony.",
      lesson: "Where you start often shapes what you take for granted.",
    },
    {
      year: "1984",
      title: "Started training under Ramakant Achrekar",
      story: "Achrekar would drop coins at the stumps; if Sachin didn't get out, he kept the coin.",
      challenge: "Adjusting to professional coaching at 11.",
      lesson: "Reward structures designed by great coaches are tighter than any practice plan.",
    },
    {
      year: "1988",
      title: "664-run partnership with Vinod Kambli",
      story: "Set a world-record school partnership in a Mumbai inter-school tournament.",
      challenge: "Carrying school-level expectations into national attention.",
      lesson: "Early records mark you, but they also brand you.",
    },
    {
      year: "1989",
      title: "Test debut at 16 against Pakistan",
      story: "Faced Wasim Akram and Waqar Younis on a tour of Pakistan.",
      challenge: "Adjusting to international pace at 16.",
      lesson:
        "Talent reaches the international stage early; mastery requires the years that follow.",
    },
    {
      year: "1990",
      title: "First Test century at Old Trafford",
      story: "Saved a Test match against England with a 119* at 17.",
      challenge: "Coming of age in a foreign tour.",
      lesson: "Defining innings often happen far from home.",
    },
    {
      year: "1996",
      title: "Named India captain",
      story: "Took over the team at 23.",
      challenge: "Captaining a divided dressing room.",
      lesson: "Captaincy is a different sport from batting.",
    },
    {
      year: "1998",
      title: "'Desert Storm' against Australia",
      story: "Two iconic Sharjah innings against Shane Warne and the Australians.",
      challenge: "Performing under pressure in a desert sandstorm.",
      lesson: "The moments that brand a career are unscripted.",
    },
    {
      year: "2003",
      title: "World Cup final loss to Australia",
      story: "India lost final at Johannesburg despite Sachin's tournament-leading runs.",
      challenge: "Carrying disappointment after extraordinary individual play.",
      lesson: "Tournament finals reveal which collective elements you can't fix individually.",
    },
    {
      year: "2007",
      title: "Tennis-elbow injury",
      story: "Career-threatening tennis elbow forced a year of rehabilitation.",
      challenge: "Public speculation about retirement at 34.",
      lesson: "Career-threatening injuries are managed, not solved.",
    },
    {
      year: "2011",
      title: "Won the World Cup at Wankhede",
      story: "India lifted the ODI World Cup at Sachin's home ground in Mumbai.",
      challenge: "Carrying generation-defining expectation across six tournaments.",
      lesson: "Some titles are designed to take a 20-year arc to win.",
    },
    {
      year: "2012",
      title: "Reached 100 international centuries",
      story: "Scored his 100th international century against Bangladesh.",
      challenge: "Mental burden of a single statistical landmark.",
      lesson: "Round-number milestones can become heavier than they're worth.",
    },
    {
      year: "2013",
      title: "Played final Test at Wankhede",
      story: "Retired after 200th Test in Mumbai with a moving farewell speech.",
      challenge: "Choosing to end at the right moment.",
      lesson: "Endings done well become their own legacy.",
    },
  ],
  skills: [
    {
      name: "Technique",
      description: "Built one of the most copied batting techniques in cricket history.",
      developed: "Daily Achrekar-supervised practice from age 11.",
    },
    {
      name: "Adaptation",
      description: "Reinvented his game multiple times across formats and decades.",
      developed: "Adjusted post-2004 elbow injury, post-2008 captaincy, and across T20 era.",
    },
    {
      name: "Concentration",
      description: "Maintained focus through long innings on flat and difficult pitches.",
      developed: "Years of multi-day Test cricket against the world's best bowlers.",
    },
    {
      name: "Public Composure",
      description: "Carried billion-fan expectations without public meltdown.",
      developed: "From age 16 onward, lived under constant media scrutiny.",
    },
    {
      name: "Mentorship",
      description:
        "Tutored younger India players including Yuvraj, Sehwag, and Kohli's generation.",
      developed: "Senior-most player role through multiple cycles of the Indian team.",
    },
    {
      name: "Captaincy lessons",
      description: "Learned by losing what captaincy adds to a star player's mental load.",
      developed: "Two periods as India captain that he later concluded didn't fit him.",
    },
  ],
  failures: [
    {
      title: "Captaincy struggles (1996–2000)",
      context: "Two stints as captain didn't lift India's record.",
      recovery: "Stepped back; thrived under other captains like Ganguly and Dhoni.",
      lesson: "Not every great player is the right captain — know your edge.",
    },
    {
      title: "2003 World Cup final loss",
      context: "Lost final to Australia despite leading tournament in runs.",
      recovery: "Returned to win 2011 World Cup eight years later.",
      lesson: "Tournament victories often arrive after the longest patience cycles.",
    },
    {
      title: "Tennis elbow (2004–2006)",
      context: "Injury threatened his career and changed his stroke profile.",
      recovery: "Rebuilt technique to play through pain; lasted another 7 years.",
      lesson: "Long careers require technique resets when the body changes.",
    },
  ],
  books: [
    {
      title: "Playing It My Way",
      author: "Sachin Tendulkar",
      note: "His autobiography covering career and family life.",
    },
    {
      title: "Sachin: The Player in My Life",
      author: "Boria Majumdar",
      note: "Biography by a leading cricket historian.",
    },
    {
      title: "Coaching Beyond — Stories of Ramakant Achrekar",
      author: "Various",
      note: "Stories about the coach who shaped him.",
    },
    {
      title: "Beyond the Blues",
      author: "Aakash Chopra",
      note: "Inside view of cricket from his teammate.",
    },
  ],
  influences: [
    { name: "Ramakant Achrekar", note: "Childhood coach who codified his technique." },
    {
      name: "Ajit Tendulkar (his brother)",
      note: "Took him to Achrekar and managed his early career.",
    },
    { name: "Sir Donald Bradman", note: "Public reference point for batting standards." },
    { name: "Sourav Ganguly", note: "Captain and friend through the team's transitional years." },
    { name: "MS Dhoni", note: "Captain during the 2011 World Cup victory." },
  ],
  videoIds: [
    "sachin-documentary-trailer",
    "sachin-david-frost",
    "sachin-100s-compilation",
    "sachin-rajya-sabha-speech",
  ],
  decisions: [
    {
      title: "Step back from captaincy",
      why: "Realized the role distracted from his batting.",
      risk: "Low",
      outcome: "Returned to peak run-scoring form under Ganguly.",
      impact: "Modeled honest self-assessment for elite athletes.",
    },
    {
      title: "Play through the elbow injury",
      why: "Believed the career still had a World Cup left.",
      risk: "High",
      outcome: "Lasted 7 more years, won 2011 World Cup.",
      impact: "Demonstrated rehabilitation-based late careers.",
    },
    {
      title: "Retire at 200 Tests",
      why: "Wanted to end at home in Mumbai.",
      risk: "Low",
      outcome: "Iconic Wankhede farewell.",
      impact: "Set a template for dignified exits in cricket.",
    },
    {
      title: "Co-own a Pro Kabaddi League franchise post-retirement",
      why: "Wanted to invest in Indian sport beyond cricket.",
      risk: "Medium",
      outcome: "Tamil Thalaivas became a successful franchise.",
      impact: "Modeled athlete-led sports investment in India.",
    },
  ],
  insights: [
    {
      audience: "Athletes",
      lesson: "Technique adapts; ego doesn't.",
      takeaway: "Rebuild your craft every 5 years; the body forces it anyway.",
    },
    {
      audience: "Operators",
      lesson: "Know which roles fit you.",
      takeaway: "Saying no to a role you're bad at protects the one you're great at.",
    },
    {
      audience: "Leaders",
      lesson: "Carry the public weight quietly.",
      takeaway: "The institution needs your steadiness more than your reaction.",
    },
    {
      audience: "Builders",
      lesson: "Long careers compound institutional trust.",
      takeaway: "Be available decade after decade; the institution starts to plan around you.",
    },
    {
      audience: "Anyone",
      lesson: "Coaches calibrate your standards.",
      takeaway: "Pick the coach who raises your bar, not the one who confirms it.",
    },
  ],
  quotes: [
    { text: "I have played cricket as if I had no other choice." },
    { text: "Enjoy the game and chase your dreams. Dreams do come true." },
    { text: "Cricket is my first love; I would love to keep playing forever." },
    { text: "When 50,000 people are watching you, the body just doesn't have any feelings." },
    { text: "I am not thinking about anything else other than my next innings." },
  ],
  sampleQuestions: [
    "How did Achrekar shape Sachin's technique?",
    "What changed after his tennis elbow injury?",
    "Why did he step back from captaincy?",
    "How did he handle a billion fans' expectations?",
    "What can leaders learn from his quiet captaincy style?",
  ],
  featured: false,
};

export default sachinTendulkar;
