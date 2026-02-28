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
  title: "The Courage to Be Disliked",
  subtitle: "Ichiro Kishimi & Fumitake Koga",
  description: "A profound dialogue on Adlerian psychology that challenges how we understand happiness, relationships, and freedom.",
  quote: "You are the only one who can change yourself. No one can do it for you.",
  themeColor: "#f59e0b",
};

export const concepts: ConceptCard[] = [
  {
    id: "teleology",
    title: "Teleology",
    subtitle: "Not Causality",
    icon: "🎯",
    color: "#f59e0b",
    quickie: "Forget the past—it doesn't determine your future. Adlerian psychology rejects 'cause and effect' when it comes to human behavior. You're not anxious because of a traumatic event; you're anxious because being anxious serves a purpose right now. This is teleology: you create your symptoms to achieve a goal, even if unconsciously. The young man in the dialogue protests: 'But my anxiety is real!' The philosopher replies: 'Yes, but you created it to avoid leaving your house.' Uncomfortable? Yes. Liberating? Absolutely. If you created your current state, you can uncreate it.",
    insight: "Your past is a story you tell yourself to justify your present choices.",
    reflection: "What 'problem' in your life might actually be serving a purpose you're unaware of?",
    practice: "Instead of asking 'why did this happen to me?' ask 'what purpose does this serve for me right now?'",
  },
  {
    id: "tasks",
    title: "Task Separation",
    subtitle: "Whose task is it?",
    icon: "🎭",
    color: "#10b981",
    quickie: "The root of all interpersonal problems is boundary violation. Adler identifies three layers of tasks: your task, other people's tasks, and tasks of the universe. Knowing which is which is the beginning of freedom. Your boss's opinion of you? That's the boss's task. Whether you do your work with integrity? That's your task. The weather? Universe's task. Most people suffer because they obsess over others' tasks while neglecting their own. You cannot control others' evaluations, emotions, or choices—and trying to is the definition of unhappiness. The courage to be disliked is simply the courage to let others manage their own tasks.",
    insight: "All interpersonal troubles come from intruding on others' tasks or allowing others to intrude on yours.",
    reflection: "What task are you currently doing that actually belongs to someone else?",
    practice: "When anxious about others' opinions, ask: 'Whose task is this evaluation?' If it's theirs, let it go.",
  },
  {
    id: "inferiority",
    title: "Inferiority Complex",
    subtitle: "A convenient excuse",
    icon: "📉",
    color: "#8b5cf6",
    quickie: "Everyone feels inferior sometimes—it's a natural stimulus for growth. But an inferiority COMPLEX is different: it's using perceived inadequacy as an excuse to not try. 'I can't succeed because I'm not talented.' 'I can't be happy because of my childhood.' These aren't facts; they're convenient narratives that let you off the hook. The young man insists his height made him miserable. The philosopher points out: height has no inherent meaning—you assigned it one. Inferiority complex is a choice to interpret facts as limitations rather than raw material. It's not that you CAN'T; it's that you've decided not to, and your 'inferiority' provides noble cover.",
    insight: "Inferiority complex isn't about lacking ability—it's about lacking the courage to face your life tasks.",
    reflection: "What 'inferiority' are you using as a reason to avoid trying?",
    practice: "Replace 'I can't because...' with 'I choose not to because...' and feel the discomfort of agency.",
  },
  {
    id: "superiority",
    title: "Superiority Complex",
    subtitle: "The flip side",
    icon: "📈",
    color: "#ec4899",
    quickie: "The person who constantly brags, the know-it-all, the one-upper—they're not confident; they're compensating. Superiority complex is a reaction to deep inferiority feelings. Unable to overcome their challenges, they fabricate a sense of superiority instead. This takes many forms: outright boasting, but also 'attaching oneself to powerful people,' 'refusing to engage with those who might surpass you,' or 'constantly finding fault with others.' The person who says 'I could do that if I tried' but never tries? Superiority complex. The critic who never creates? Same. Both inferiority and superiority complexes share the same root: fleeing from the life tasks of personal growth and contribution.",
    insight: "Both inferiority and superiority complexes are strategies to avoid genuine engagement with life.",
    reflection: "Where might you be using superiority (even subtly) to avoid real growth?",
    practice: "Notice when you feel the urge to one-up, correct, or display status—then choose silence instead.",
  },
  {
    id: "life-lies",
    title: "Life Lies",
    subtitle: "Stories we tell",
    icon: "🎪",
    color: "#ef4444",
    quickie: "A 'life lie' is a narrative you construct to avoid your life tasks. 'I have social anxiety, so I can't make friends.' 'I'm too busy to exercise.' 'My parents ruined my life.' These aren't truths—they are choices dressed up as fate. The philosopher is brutal: you don't have social anxiety; you created it to avoid the possibility of rejection. You might object: but the anxiety feels real! Yes, because you've repeated the lie until it became embodied. Life lies always follow the same pattern: they position you as powerless victim of circumstance, circumstance as unchangeable, and your inaction as therefore justified. The courage to be disliked is first the courage to recognize your own lies.",
    insight: "Life lies feel like protection but are actually prisons you constructed yourself.",
    reflection: "What story do you tell most often about why you can't have what you want?",
    practice: "Write down your top 3 'I can't because...' statements. Then rewrite them as 'I choose not to because...'",
  },
  {
    id: "community",
    title: "Community Feeling",
    subtitle: "Horizontal relationships",
    icon: "🌐",
    color: "#06b6d4",
    quickie: "The ultimate goal of Adlerian psychology is community feeling—a sense of 'I am of use to someone.' Not superiority. Not being special. Being useful. This is the opposite of the self-centered pursuit of personal happiness. Paradoxically, you find happiness only when you stop seeking it directly and instead focus on contributing to others. But contribution doesn't mean self-sacrifice or people-pleasing. It means recognizing that you belong to multiple communities (family, work, humanity) and acting with their good in mind. The key shift: from 'what can I get?' to 'what can I give?' This isn't moralistic—it's practical. The person focused on getting is always anxious about not getting enough. The person focused on giving is already complete.",
    insight: "Happiness is not a destination you reach; it's a byproduct of feeling useful to others.",
    reflection: "When did you last feel genuinely useful to someone else? How did it feel?",
    practice: "Each day, do one small thing for someone else without expecting anything in return.",
  },
  {
    id: "encouragement",
    title: "Encouragement",
    subtitle: "Not praise or rebuke",
    icon: "💫",
    color: "#84cc16",
    quickie: "Praise ('You're so smart!') and rebuke ('You messed up!') are both vertical relationship behaviors—they establish hierarchy. The praised person learns to seek external validation; the rebuked person learns to avoid external punishment. Neither develops internal motivation. Encouragement is different: it addresses horizontal relationships. Instead of evaluating the person, it expresses gratitude or acknowledges effort. 'That helped me—thank you.' 'I can see you worked hard on this.' Encouragement trusts that people can assess themselves and don't need external judges. When your child does well, don't praise—express how their contribution helped. When your colleague succeeds, don't evaluate—acknowledge their effort. This builds people who act from internal worth, not external approval.",
    insight: "Praise creates dependency on external validation; encouragement builds internal worth.",
    reflection: "Do you more often praise/rebuke others, or encourage them?",
    practice: "Replace one evaluative statement today with gratitude: instead of 'Good job!' say 'That really helped me.'",
  },
  {
    id: "acceptance",
    title: "Self Acceptance",
    subtitle: "Not affirmation",
    icon: "🪞",
    color: "#a855f7",
    quickie: "'I am perfect just as I am!'—that's self-affirmation, and it's a lie. You have flaws. Lots of them. Self-acceptance is different: it's the clear-eyed recognition of your capabilities, with neither exaggeration nor denial, followed by the commitment to move forward anyway. 'I am this way, and that's okay—what matters is what I do from here.' Self-acceptance is active, not passive. It doesn't mean giving up on improvement; it means abandoning the fantasy of a perfect self that must be achieved before you can live. The young man wants to become confident before he can act. The philosopher says: act first; confidence comes later. Self-acceptance is having the courage to be imperfect while still engaging fully with life.",
    insight: "Self-acceptance is not 'I'm perfect' but 'I'm imperfect, and that's okay—now what?'",
    reflection: "What aspect of yourself are you waiting to 'fix' before you can fully live?",
    practice: "State one flaw aloud without justification or self-criticism, then take one action anyway.",
  },
  {
    id: "contribution",
    title: "Contribution",
    subtitle: "The meaning of life",
    icon: "🌱",
    color: "#22c55e",
    quickie: "If someone asked you point-blank 'What is the meaning of life?' you'd probably stammer. That's because meaning isn't something you discover—it's something you create through contribution. Adler's answer is simple and profound: the meaning of life is contribution to the community. Not because of moral duty, but because contribution is the only path to genuine belonging and self-worth. When you contribute, you feel 'I am needed here.' This feeling eliminates the need for recognition, status, or superiority. The person who has found their contribution doesn't need to boast, compare, or compete. They're too busy being useful. Your specific contribution might be small—making someone smile, doing your work well, being present for a friend. Size doesn't matter. What matters is the direction: toward others, not toward yourself.",
    insight: "Meaning isn't found; it's created through contribution to something larger than yourself.",
    reflection: "What is your unique way of contributing to the world, however small?",
    practice: "Identify one person whose life you improved today, even slightly, and feel that connection.",
  },
  {
    id: "present",
    title: "Live in the Now",
    subtitle: "Not in potential",
    icon: "⏳",
    color: "#f97316",
    quickie: "'Someday I'll...' is the anthem of the unhappy person. Adlerian psychology is radical about this: life is always complete at every moment. You are not a 'work in progress' waiting to become real. The student who says 'Real life will start when I graduate' is missing their actual life. The worker waiting for retirement is sacrificing decades for a fantasy. Even more subtle: 'If only I were more confident, I could...'—this too places life in an imaginary future. The philosopher says: dance. When you dance, you don't aim to arrive at a particular spot on the floor; the movement itself is the point. Life is the same: the process of living, right now, with what you have, where you are—this IS life. The destination is a mirage that keeps receding. Dance while the music plays.",
    insight: "You are not preparing for real life—you are living it right now, whether you realize it or not.",
    reflection: "What 'someday' are you waiting for before you can fully engage with life?",
    practice: "Do one thing today as if this moment were complete in itself, not a means to an end.",
  },
];

export const quizQuestions = [
  {
    question: "Your friend says 'I can't pursue my dream because my parents didn't support me growing up.' According to Adlerian psychology, what's the most helpful response?",
    options: [
      "Validate their feelings—childhood trauma is real",
      "Point out that many successful people had unsupportive parents",
      "Help them see they're using their past as a 'life lie' to avoid the risk of trying",
      "Recommend therapy to process their childhood",
    ],
    correctAnswer: 2,
    explanation: "Adlerian psychology is teleological, not causal. The friend isn't held back BY their past; they're USING their past narrative to avoid the discomfort of potential failure. This isn't dismissive—it's empowering, because what we create, we can uncreate.",
  },
  {
    question: "You constantly worry about what your colleagues think of you. According to task separation, whose task is their opinion?",
    options: [
      "Yours—you need to manage your reputation",
      "Theirs—how they evaluate you is entirely their task",
      "Shared—you influence their opinion through your behavior",
      "Nobody's—opinions don't matter",
    ],
    correctAnswer: 1,
    explanation: "In Adlerian psychology, others' evaluations are THEIR task, not yours. Your task is to do your work with integrity. The separation is absolute: you can offer your best, but you cannot control how others receive it. Worrying about their opinions means doing their task while neglecting yours.",
  },
  {
    question: "Someone at a party keeps name-dropping famous people they know and prestigious achievements. Adler would say this person likely has:",
    options: [
      "High self-esteem",
      "A superiority complex masking deep feelings of inferiority",
      "Narcissistic personality disorder",
      "Genuine confidence and social skill",
    ],
    correctAnswer: 1,
    explanation: "Adler identified superiority complex as a reaction to inferiority feelings. Unable to overcome real challenges, the person fabricates superiority through association, boasting, or one-upping. True confidence doesn't need to announce itself.",
  },
  {
    question: "Your child brings home a good grade. Which response aligns with Adlerian 'encouragement' rather than praise?",
    options: [
      "'You're so smart!'",
      "'I'm proud of you!'",
      "'You must have worked hard. That dedication will serve you well.'",
      "'Great job! What reward would you like?'",
    ],
    correctAnswer: 2,
    explanation: "Praise ('you're so smart') creates dependency on external validation and teaches the child to seek evaluation. Encouragement acknowledges effort and builds internal motivation: you see your own hard work, not my approval, as what matters.",
  },
  {
    question: "You keep telling yourself 'I can't start my business until I have more savings.' This is likely:",
    options: [
      "Prudent financial planning",
      "A life lie that lets you avoid the risk of failure",
      "A genuine constraint you need to work around",
      "Both B and C depending on the amount",
    ],
    correctAnswer: 1,
    explanation: "Adlerian psychology asks: what purpose does this belief serve? If it consistently prevents action while allowing you to maintain a fantasy of 'I would if I could,' it's a life lie. Real constraints exist, but they're navigated, not worshipped.",
  },
  {
    question: "According to Adler, what's the most reliable path to happiness?",
    options: [
      "Achieving your goals and dreams",
      "Developing self-confidence and high self-esteem",
      "Cultivating a feeling of community through contribution",
      "Resolving your past traumas through therapy",
    ],
    correctAnswer: 2,
    explanation: "Adler taught that happiness is not found directly but emerges as a byproduct of community feeling—the sense that 'I am of use to someone.' Paradoxically, focusing on contribution rather than personal happiness is the most reliable way to achieve it.",
  },
  {
    question: "You say 'I'm not living my real life yet—real life will start when I get promoted.' The philosopher would respond:",
    options: [
      "'Work hard and that promotion will come'",
      "'You're living your real life right now—this moment IS life'",
      "'Visualize your promotion and it will manifest'",
      "'Perhaps you need to find a new job'",
    ],
    correctAnswer: 1,
    explanation: "Adlerian psychology rejects the 'someday' mindset. Life is always complete at every moment. The promotion-focused person is like a dancer staring at a spot on the floor, missing that the dancing itself is the point.",
  },
];
