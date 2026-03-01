export interface ConceptCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  quickie: string;
  insight: string;
  reflection: string;
  practice: string;
}

export const bookInfo = {
  title: "Hooked",
  subtitle: "Nir Eyal",
  description: "How to build habit-forming products by understanding the psychology of user engagement and the four-step Hook Model.",
  quote: "The technologies we use have turned into compulsions, if not full-fledged addictions. It's the impulse to check a message notification. It's the pull to visit YouTube, Facebook, or Twitter for just a few minutes, only to find yourself still tapping and scrolling an hour later.",
  themeColor: "#6366f1",
};

export const concepts: ConceptCard[] = [
  {
    id: "hook-model",
    title: "The Hook Model",
    subtitle: "The four-step cycle",
    icon: "🪝",
    color: "#6366f1",
    quickie: "The Hook Model is a four-step process that companies use to build habit-forming products: Trigger → Action → Variable Reward → Investment. These four steps, repeated over successive cycles, create powerful habits that keep users coming back without requiring expensive advertising or aggressive messaging. Think about how you instinctively open certain apps without even thinking about it—that's the Hook Model at work. The genius is that each pass through the cycle strengthens the connection, making the next pass more likely. It's not manipulation if you're building something genuinely useful; it's understanding human psychology to deliver value more effectively.",
    insight: "Habits are built through repeated cycles of trigger, action, reward, and investment—not through willpower or advertising.",
    reflection: "What product do you use habitually without thinking? Can you identify the four steps of its hook?",
    practice: "Map out the Hook cycle for one product you use daily. Identify each of the four phases.",
  },
  {
    id: "triggers",
    title: "Triggers",
    subtitle: "The spark that starts behavior",
    icon: "⚡",
    color: "#f59e0b",
    quickie: "Triggers come in two flavors: external and internal. External triggers are the obvious ones—push notifications, emails, app icons on your home screen, a friend's recommendation. They tell you what to do next. But the real magic happens with internal triggers. These are emotions, situations, or routines that automatically prompt you to use a product. Boredom? Open Instagram. Loneliness? Check Facebook. Uncertainty? Google it. The most successful products attach themselves to internal triggers so deeply that users don't even realize they're being prompted. The goal for any habit-forming product is to graduate from external triggers (which cost money) to internal triggers (which are free and automatic).",
    insight: "The most powerful triggers are internal emotions—boredom, anxiety, uncertainty—not push notifications.",
    reflection: "What emotion most frequently triggers you to pick up your phone? What are you really seeking?",
    practice: "Track your phone pickups for one day. Each time, note the emotion or situation that triggered it.",
  },
  {
    id: "action",
    title: "Action",
    subtitle: "The simplest behavior",
    icon: "👆",
    color: "#10b981",
    quickie: "For a behavior to occur, three things must converge: motivation, ability, and a trigger. But here's the counterintuitive insight—increasing ability (making things easier) is almost always more effective than increasing motivation. This is Fogg's Behavior Model in action. Twitter's genius was reducing the action to its simplest form: just type 140 characters. Google reduced search to a single text box. Instagram made sharing a photo a one-tap process. The action phase is about removing friction ruthlessly. Every extra step, every additional field, every moment of confusion is a leak in your funnel. The question isn't 'how do we motivate users more?' but 'how do we make this so easy that even unmotivated users will do it?'",
    insight: "Make the desired action so easy that users can do it even with minimal motivation. Simplicity changes behavior.",
    reflection: "What habit have you been trying to build? How could you make the first step absurdly easy?",
    practice: "Take one task you've been procrastinating on and reduce it to a 2-minute version. Then do it.",
  },
  {
    id: "variable-reward",
    title: "Variable Reward",
    subtitle: "The craving engine",
    icon: "🎰",
    color: "#ec4899",
    quickie: "The brain's reward system is activated not by the reward itself, but by the anticipation of reward—especially when that reward is unpredictable. This is why slot machines are addictive: it's not the winning, it's the not knowing whether you'll win. Eyal identifies three types of variable rewards: Rewards of the Tribe (social validation—likes, comments, followers), Rewards of the Hunt (the search for resources and information—scrolling a feed, searching for deals), and Rewards of the Self (personal mastery and completion—leveling up, clearing an inbox, finishing a task). The variability is key. A predictable reward quickly becomes boring. An unpredictable one creates a craving loop that keeps users engaged.",
    insight: "It's the unpredictability of rewards—not the rewards themselves—that creates craving and engagement.",
    reflection: "Which type of variable reward (tribe, hunt, or self) are you most susceptible to?",
    practice: "Next time you feel compelled to check an app, pause and identify which type of variable reward you're seeking.",
  },
  {
    id: "investment",
    title: "Investment",
    subtitle: "Loading the next trigger",
    icon: "🏗️",
    color: "#8b5cf6",
    quickie: "The investment phase is what separates a one-time experience from a habit. After receiving a reward, users are asked to put something back into the product: time, data, effort, social capital, or money. Every playlist you create on Spotify, every connection you make on LinkedIn, every preference you set makes the product more valuable TO YOU and harder to leave. But investment serves another crucial purpose: it loads the next trigger. When you send a message (investment), you'll get a reply (the next trigger). When you follow someone (investment), their content appears in your feed (the next trigger). The investment phase closes the loop and ensures the cycle begins again.",
    insight: "Users who invest in a product—with data, content, followers, or reputation—are far less likely to leave.",
    reflection: "What product would be hardest for you to leave? What have you invested in it that makes switching costly?",
    practice: "Identify one digital 'investment' you've made (playlist, profile, history) and consider how it keeps you locked in.",
  },
  {
    id: "internal-triggers",
    title: "Internal Triggers",
    subtitle: "Emotions as autopilot",
    icon: "🧠",
    color: "#06b6d4",
    quickie: "Internal triggers are the holy grail of habit-forming design. When a product becomes tightly associated with an emotion or routine, users return automatically—no reminder needed. Negative emotions are the most powerful internal triggers: loneliness drives you to Facebook, boredom to YouTube, insecurity to email (checking for validation). But positive triggers exist too: the desire to capture a memory triggers Instagram, the wish to learn triggers Wikipedia. The key insight is that habit-forming products don't create new motivations—they attach to existing ones. To find your product's internal trigger, ask 'why?' five times. 'Why does she use email?' → 'To receive messages.' → 'Why?' → 'To know what's happening.' → 'Why?' → 'She fears being out of the loop.' There it is: fear.",
    insight: "Habit-forming products latch onto pre-existing emotions and routines, they don't create new desires.",
    reflection: "What negative emotion most frequently drives your technology use? What would happen if you sat with it instead?",
    practice: "Next time you feel an urge to check your phone, wait 10 seconds and name the emotion driving the impulse.",
  },
  {
    id: "habit-zone",
    title: "The Habit Zone",
    subtitle: "Frequency meets utility",
    icon: "📊",
    color: "#f97316",
    quickie: "Not every product needs to be habit-forming, and not every product CAN be. The Habit Zone is a framework for understanding when habit-formation matters. Two axes: frequency of use and perceived utility. Products used frequently with high perceived utility (like search engines) are in the Habit Zone. Products used infrequently but with high utility (like real estate apps) can succeed without habits—they just need good marketing. The danger zone is low frequency AND low utility. The insight is strategic: if your product is used infrequently, don't try to force habits. Instead, focus on being excellent when needed. But if your product COULD be used frequently, investing in the Hook Model pays enormous dividends because habits create unpaid engagement.",
    insight: "Only products with high frequency potential should invest heavily in habit-forming design.",
    reflection: "Is there a product you use out of habit that you'd abandon if you really thought about its utility?",
    practice: "List your five most-used apps. Rate each on actual utility (1-10) versus habitual pull (1-10). Notice the gap.",
  },
  {
    id: "manipulation-matrix",
    title: "The Manipulation Matrix",
    subtitle: "Ethics of engagement",
    icon: "⚖️",
    color: "#22c55e",
    quickie: "Eyal doesn't shy away from the ethical dimensions: building habit-forming products IS a form of manipulation. But not all manipulation is harmful. The Manipulation Matrix has two axes: 'Does the maker use the product?' and 'Does it materially improve the user's life?' This creates four quadrants. Facilitators (yes to both) build products they use themselves and that genuinely help users—think fitness apps by fitness enthusiasts. Peddlers (improves life but maker doesn't use it) often fail because they lack empathy. Entertainers (maker uses it but doesn't improve life) create guilty pleasures. Dealers (neither) exploit users without care. The ethical imperative: be a Facilitator. Use your own product, and ensure it genuinely improves lives. If you wouldn't put your own family on your product, don't ship it.",
    insight: "The most ethical habit-forming products are built by people who use them and genuinely believe they improve lives.",
    reflection: "If you build products, would you want your family using them? If you use products, are they truly helping you?",
    practice: "Evaluate one habit-forming product you use: does it genuinely improve your life, or just consume your attention?",
  },
];

export const quizQuestions = [
  {
    question: "You notice you check Twitter every time you're waiting in line. According to the Hook Model, what phase is 'boredom while waiting' an example of?",
    options: [
      "Action—you're performing a behavior",
      "Internal trigger—an emotion prompting automatic behavior",
      "Variable reward—you're seeking unpredictable content",
      "Investment—you're putting time into the platform",
    ],
    correctAnswer: 1,
    explanation: "Boredom is an internal trigger—a negative emotion that automatically prompts you to use a product without any external prompt. The most powerful hooks attach to internal triggers like boredom, loneliness, or anxiety.",
  },
  {
    question: "A startup is struggling with user retention. Their onboarding requires filling out a 15-field profile form. What should they focus on?",
    options: [
      "Better marketing to increase motivation",
      "Reducing the action to its simplest form—fewer fields, less friction",
      "Adding more variable rewards after signup",
      "Sending more push notifications (external triggers)",
    ],
    correctAnswer: 1,
    explanation: "According to Fogg's Behavior Model, increasing ability (reducing friction) is almost always more effective than increasing motivation. Every extra field is a leak in the funnel. Make the action so simple that even unmotivated users complete it.",
  },
  {
    question: "Why is a social media 'like' count an example of variable reward rather than fixed reward?",
    options: [
      "Because likes come from different people each time",
      "Because you never know exactly how many likes you'll get—the unpredictability creates craving",
      "Because likes aren't real rewards",
      "Because the reward changes form over time",
    ],
    correctAnswer: 1,
    explanation: "The power of variable rewards lies in unpredictability. You might get 5 likes or 500. This uncertainty activates the brain's reward system more strongly than a predictable outcome would, creating a craving loop.",
  },
  {
    question: "You've built a massive playlist on Spotify with 2,000+ songs. According to the Hook Model, this playlist represents:",
    options: [
      "A variable reward (music discovery)",
      "An external trigger (Spotify reminds you to listen)",
      "An investment that increases switching costs and loads future triggers",
      "An action (the behavior of listening)",
    ],
    correctAnswer: 2,
    explanation: "Your curated playlist is an investment—stored value that makes the product better for you over time and increases the cost of switching to a competitor. It also loads the next trigger: personalized recommendations based on your taste.",
  },
  {
    question: "A company builds a gambling app that they know causes financial harm to users. According to the Manipulation Matrix, they are:",
    options: [
      "Facilitators—they're building an engaging product",
      "Entertainers—they provide fun and excitement",
      "Dealers—they exploit users without improving their lives or using the product themselves",
      "Peddlers—they sell something they wouldn't use",
    ],
    correctAnswer: 2,
    explanation: "Dealers create products they don't use themselves and that don't materially improve users' lives. This is the most ethically problematic quadrant of the Manipulation Matrix. The ethical imperative is to be a Facilitator: use your own product and ensure it genuinely helps.",
  },
  {
    question: "You're designing a productivity app. Which approach best follows the Hook Model?",
    options: [
      "Add gamification with points and badges for every action",
      "Attach to an internal trigger (anxiety about forgetting tasks), make capture dead-simple, vary the satisfaction of completion, and let stored tasks load future reminders",
      "Send frequent push notifications to remind users",
      "Make the app visually beautiful to increase motivation",
    ],
    correctAnswer: 1,
    explanation: "This answer walks through all four phases: internal trigger (anxiety about forgetting), action (simple task capture), variable reward (varying satisfaction of completion), and investment (stored tasks that load future triggers/reminders).",
  },
];
