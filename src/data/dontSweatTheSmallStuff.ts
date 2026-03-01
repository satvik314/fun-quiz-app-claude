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
  title: "Don't Sweat the Small Stuff",
  subtitle: "Richard Carlson",
  description: "Simple ways to keep the little things from taking over your life. Practical wisdom for finding peace in everyday moments.",
  quote: "Don't sweat the small stuff... and it's all small stuff.",
  themeColor: "#059669",
};

export const concepts: ConceptCard[] = [
  {
    id: "small-stuff",
    title: "It's All Small Stuff",
    subtitle: "The central premise",
    icon: "🌊",
    color: "#059669",
    quickie: "The title says it all, but do you actually live it? Most of us intellectually agree that we shouldn't stress over minor things—yet we spend 90% of our mental energy doing exactly that. The traffic jam, the rude email, the slow barista, the imperfect presentation. Carlson's radical claim isn't just 'don't sweat the small stuff'—it's that EVERYTHING is small stuff when viewed from the right perspective. Even the big things—career setbacks, relationship struggles, health scares—become manageable when you stop catastrophizing and start seeing them as part of life's natural flow. This isn't denial; it's proportion. On your deathbed, will you wish you'd been angrier about traffic? The answer reframes everything.",
    insight: "The size of a problem is determined not by the problem itself but by how much mental energy you give it.",
    reflection: "What 'big' problem from five years ago turned out to be completely insignificant today?",
    practice: "When you feel stress rising, ask yourself: 'Will this matter in five years?' If not, let it go now.",
  },
  {
    id: "present-moment",
    title: "Be Present",
    subtitle: "Where peace lives",
    icon: "🧘",
    color: "#8b5cf6",
    quickie: "Anxiety lives in the future. Regret lives in the past. Peace lives only in the present moment. Carlson emphasizes this not as a spiritual platitude but as a practical reality: right now, in this exact moment, you're usually fine. You have air to breathe, a place to sit, something to read. The suffering comes from projecting into 'what if' or dwelling on 'if only.' The practice is absurdly simple but maddeningly difficult: when you notice your mind racing ahead or behind, gently bring it back to what's happening right now. Not to fix it. Not to optimize it. Just to be in it. Most people have never actually tried being fully present for even 60 seconds. Try it. You'll discover that the present moment is almost always more peaceful than your thoughts about it.",
    insight: "Your actual present moment is almost always okay—it's your thoughts about the past and future that create suffering.",
    reflection: "How much of your day do you spend mentally in the past or future rather than where you actually are?",
    practice: "Set three random alarms today. When each rings, stop and notice five things you can see, hear, and feel right now.",
  },
  {
    id: "let-go",
    title: "Let Go of the Need to Be Right",
    subtitle: "Freedom from arguments",
    icon: "🏳️",
    color: "#f59e0b",
    quickie: "How many arguments have you 'won' that actually made your life better? The need to be right is one of the most destructive habits in relationships. It turns conversations into competitions, partners into opponents, and small disagreements into wars. Carlson's advice is simple: let others be right. Not because they are, but because being right isn't worth the cost. When your spouse says the restaurant is on Main Street and you know it's on Oak Street—let it go. When a colleague misremembers a detail in a meeting—let it go. You won't lose anything of value, but you'll gain something priceless: peace. The irony is that people who let go of being right are often seen as wiser than those who insist on it. Wisdom isn't knowing the answer; it's knowing which answers matter.",
    insight: "Being right is rarely worth the relationship damage it causes. Choose peace over victory.",
    reflection: "Think of your last argument. Was the issue truly important, or were you just defending your ego?",
    practice: "Today, when someone says something you disagree with on a minor point, consciously choose not to correct them.",
  },
  {
    id: "mood-management",
    title: "Life Is a Test, Only a Test",
    subtitle: "Reframe everything",
    icon: "📝",
    color: "#ef4444",
    quickie: "Imagine if every frustrating situation came with a label: 'This is a test. This is only a test.' The traffic jam—a test of your patience. The critical boss—a test of your equanimity. The broken appliance—a test of your flexibility. Carlson suggests that treating life's annoyances as tests completely changes your relationship with them. Instead of 'Why is this happening TO me?' it becomes 'What can I learn FROM this?' Tests aren't punishments; they're opportunities to practice the person you want to be. And unlike school tests, these ones don't have permanent consequences. You can fail today's patience test and pass tomorrow's. The framing removes the victimhood and adds agency: you're not suffering; you're practicing.",
    insight: "Reframing annoyances as 'tests' transforms you from a victim of circumstance into a student of life.",
    reflection: "What recurring frustration might be a 'test' that you keep failing? What would passing look like?",
    practice: "The next time something frustrates you, silently say 'This is a test' and choose your response deliberately.",
  },
  {
    id: "compassion",
    title: "Practice Compassion",
    subtitle: "Including for yourself",
    icon: "💛",
    color: "#ec4899",
    quickie: "Compassion isn't about being nice—it's about recognizing that everyone, including you, is doing their best with what they have. The rude driver probably isn't evil; they're stressed, late, or scared. Your critical inner voice isn't protecting you; it's repeating old patterns. Carlson's approach to compassion is practical: when someone annoys you, imagine them as a small child learning to navigate a confusing world. Because that's what we all are—just taller. Self-compassion is even harder for most people. We hold ourselves to impossible standards and then beat ourselves up for falling short. Carlson suggests treating yourself with the same kindness you'd show a good friend. You wouldn't tell a friend 'You're such an idiot for making that mistake.' So why do you say it to yourself?",
    insight: "Everyone is fighting a battle you know nothing about. Compassion is simply remembering this.",
    reflection: "Would you speak to a friend the way you speak to yourself in your own head?",
    practice: "When someone irritates you today, pause and imagine what they might be going through that you can't see.",
  },
  {
    id: "gratitude",
    title: "Develop Gratitude",
    subtitle: "The antidote to wanting",
    icon: "🙏",
    color: "#06b6d4",
    quickie: "Gratitude isn't just a feel-good practice—it's a fundamental shift in orientation. Most people operate from a mindset of scarcity: 'I don't have enough money, time, love, success.' This creates a perpetual state of wanting that no achievement can satisfy. Gratitude reverses the equation: instead of focusing on what's missing, you focus on what's already here. And what's already here is usually extraordinary—clean water, people who care about you, the ability to read these words. Carlson doesn't suggest ignoring real problems. He suggests that gratitude provides a stable foundation from which to address them. A grateful person solving a problem is more effective than an anxious one because they're working from abundance, not desperation.",
    insight: "Gratitude doesn't ignore problems—it provides a stable foundation from which to solve them.",
    reflection: "What three things in your life would you desperately miss if they were suddenly gone?",
    practice: "Before getting out of bed each morning, name three specific things you're grateful for. Be concrete, not generic.",
  },
  {
    id: "lower-tolerance",
    title: "Lower Your Tolerance for Stress",
    subtitle: "Stop wearing it as a badge",
    icon: "📉",
    color: "#a855f7",
    quickie: "Our culture glorifies stress. 'I'm so busy' has become a humble-brag. High tolerance for stress is treated as a virtue, like endurance or toughness. Carlson flips this completely: a high tolerance for stress isn't strength—it's numbness. When you tolerate high stress, you stop noticing its effects on your health, relationships, and judgment. You make worse decisions, snap at people you love, and slowly burn out while congratulating yourself on being 'tough.' Lowering your tolerance means catching stress early, when it's still small and manageable. It means saying 'This is too much' before you reach the breaking point, not after. It means treating calm as the default state and stress as an alarm signal, not the other way around.",
    insight: "High stress tolerance isn't a strength—it's a warning sign that you've normalized something harmful.",
    reflection: "What level of stress have you normalized that would have shocked your younger self?",
    practice: "Set your 'stress alarm' lower today. At the first sign of tension, take three deep breaths instead of pushing through.",
  },
  {
    id: "listening",
    title: "Become a Better Listener",
    subtitle: "The rarest gift",
    icon: "👂",
    color: "#f97316",
    quickie: "Most people don't listen—they wait for their turn to speak. While the other person talks, they're mentally rehearsing their response, evaluating the speaker's points, or thinking about something else entirely. Carlson identifies this as one of the greatest sources of disconnection in modern life. True listening means giving someone your full attention without planning your response. It means being comfortable with the pause after they finish, rather than jumping in immediately. It means being curious about their experience rather than comparing it to yours. The paradox of listening is that it requires you to temporarily let go of your own perspective—which feels risky—but it's actually the fastest way to build trust, resolve conflicts, and deepen relationships. People don't remember what you said; they remember how you made them feel heard.",
    insight: "True listening isn't waiting to speak—it's temporarily setting aside your own perspective to fully receive someone else's.",
    reflection: "In your last conversation, how much time did you spend truly listening versus preparing your response?",
    practice: "In your next conversation, wait a full two seconds after the other person finishes before you respond.",
  },
  {
    id: "cheerful",
    title: "Choose Being Kind Over Being Right",
    subtitle: "A daily practice",
    icon: "🌟",
    color: "#22c55e",
    quickie: "This is related to letting go of the need to be right, but it goes deeper. It's not just about avoiding arguments—it's about actively choosing kindness as your default response to the world. When someone cuts you off in traffic, you have a choice: anger or compassion. When a coworker makes an error, you have a choice: criticism or support. When a stranger is rude, you have a choice: retaliation or grace. Carlson argues that kindness isn't weakness—it's the most powerful response available to you. It disrupts negative cycles, creates positive ones, and costs you nothing. The person who chooses kindness consistently isn't naive; they've simply realized that their inner peace is more valuable than being right, getting revenge, or teaching someone a lesson.",
    insight: "Kindness isn't a sacrifice—it's a strategy for protecting your own peace while uplifting others.",
    reflection: "When was the last time you chose to be kind when you could have been 'right'? How did it feel?",
    practice: "Perform one unexpected act of kindness today—hold a door, compliment a stranger, let someone go first.",
  },
  {
    id: "thinking",
    title: "Understand Separate Realities",
    subtitle: "Everyone lives in their own world",
    icon: "🌍",
    color: "#84cc16",
    quickie: "We assume everyone sees the world the way we do—and when they don't, we think they're wrong. But Carlson points out something profound: every person lives in a completely separate psychological reality shaped by their unique experiences, beliefs, fears, and hopes. Your colleague isn't being difficult; they literally see the situation differently than you do. Your parent isn't being unreasonable; their reality was shaped by experiences you never had. Understanding separate realities doesn't mean all views are equally valid—it means that disagreement doesn't require judgment. You can disagree with someone and still respect that their view makes perfect sense inside their reality. This understanding dissolves most interpersonal conflict because it replaces 'you're wrong' with 'we see this differently.'",
    insight: "Most conflicts arise not from bad intentions but from people operating in genuinely different realities.",
    reflection: "Think of someone you disagree with. Can you imagine how their life experiences make their view logical to them?",
    practice: "In your next disagreement, say 'I can see how you'd see it that way' before sharing your perspective.",
  },
];

export const quizQuestions = [
  {
    question: "You're stuck in traffic and feeling your blood pressure rise. According to Carlson's philosophy, the most helpful reframe is:",
    options: [
      "Honk your horn—expressing frustration prevents it from building up",
      "Remind yourself: 'Will this matter in five years? No. This is small stuff.'",
      "Call someone to vent about the traffic",
      "Find an alternate route as quickly as possible",
    ],
    correctAnswer: 1,
    explanation: "Carlson's core teaching is that perspective determines suffering. Traffic is the quintessential 'small stuff.' Asking 'Will this matter in five years?' instantly restores proportion and helps you choose peace over frustration.",
  },
  {
    question: "Your partner insists that a movie came out in 2018 when you know it was 2019. Carlson would advise you to:",
    options: [
      "Pull up Google to prove your point—accuracy matters",
      "Let it go. Being right isn't worth the relationship friction.",
      "Agree to disagree and change the subject",
      "Say 'You might be right' even though you know they're wrong",
    ],
    correctAnswer: 1,
    explanation: "Carlson repeatedly emphasizes that the need to be right destroys more relationships than almost anything else. The release date of a movie is the definition of small stuff. Let your partner 'win' and notice how much more peaceful the evening becomes.",
  },
  {
    question: "You're constantly stressed and proud of how much you handle. A friend says you need to relax more. According to Carlson, your high stress tolerance is:",
    options: [
      "A sign of strength and resilience",
      "A warning sign—you've normalized something harmful and stopped noticing its effects",
      "Necessary in today's demanding world",
      "Fine as long as you exercise and eat well",
    ],
    correctAnswer: 1,
    explanation: "Carlson argues that high stress tolerance isn't a virtue—it's numbness. When you glorify busyness and stress, you stop catching stress early when it's manageable. Lower your tolerance so you can respond to stress as an alarm signal, not a background hum.",
  },
  {
    question: "A colleague snaps at you during a meeting. Carlson's 'separate realities' concept suggests you should:",
    options: [
      "Confront them after the meeting—that behavior is unacceptable",
      "Recognize they're operating from a different reality shaped by stresses you can't see, and respond with compassion",
      "Report them to HR for unprofessional conduct",
      "Snap back to establish boundaries",
    ],
    correctAnswer: 1,
    explanation: "Understanding separate realities means recognizing that everyone's behavior makes sense inside their own reality. Your colleague's rudeness likely reflects their internal struggle, not malice toward you. Compassion—not confrontation—usually reveals the real issue.",
  },
  {
    question: "You catch yourself mentally rehearsing your response while a friend is sharing something important. According to Carlson, you should:",
    options: [
      "Continue—it's efficient to prepare your response in advance",
      "Stop planning and give them your full attention. True listening means setting aside your perspective temporarily.",
      "Wait for a natural pause and redirect the conversation",
      "Nod and say 'mm-hmm' to show you're engaged",
    ],
    correctAnswer: 1,
    explanation: "Carlson identifies 'listening to respond' (vs. listening to understand) as one of the greatest sources of disconnection. True listening requires temporarily letting go of your own thoughts and being fully present with the other person's experience.",
  },
  {
    question: "You wake up feeling anxious about a big presentation next week. Carlson would say your anxiety exists in:",
    options: [
      "The reality of your situation—presentations are stressful",
      "The future. Right now, in this present moment, you're safe in bed. The anxiety is about something that hasn't happened yet.",
      "Your personality—some people are just more anxious",
      "The importance of the presentation—high stakes create high stress",
    ],
    correctAnswer: 1,
    explanation: "Carlson emphasizes that anxiety lives in the future and regret in the past. Peace exists only in the present moment. Right now, lying in bed, nothing threatening is actually happening. The suffering comes from mentally projecting into 'what if' scenarios.",
  },
];
