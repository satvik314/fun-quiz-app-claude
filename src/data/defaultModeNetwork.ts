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
  title: "The Default Mode Network",
  subtitle: "Neuroscience of the Wandering Mind",
  description: "Your brain's most powerful network activates when you stop trying. The Default Mode Network is the hidden engine behind creativity, self-identity, and your ability to imagine the future — and it only turns on when you zone out.",
  quote: "The brain does not rest when the mind wanders. It ignites.",
  themeColor: "#7c3aed",
};

export const concepts: ConceptCard[] = [
  {
    id: "the-discovery",
    title: "The Accidental Discovery",
    subtitle: "The noise that changed neuroscience",
    icon: "🔬",
    color: "#7c3aed",
    quickie: "In the late 1990s, neuroscientist Marcus Raichle noticed something bizarre: when research subjects were told to 'do nothing' inside a brain scanner, their brains didn't go quiet — specific regions INCREASED in activity. For decades, scientists had treated this as background noise and subtracted it out of their data. Raichle realized the noise WAS the signal. He had stumbled onto an entire network that the brain activates specifically when you're not focused on the outside world. It was like discovering that a city's most important infrastructure runs only at night, invisible to everyone who only looks during the day. This network, which he named the Default Mode Network (DMN), consumes 20% of your body's total energy — more than any other brain network — and it had been hiding in plain sight for decades.",
    insight: "The brain's most energy-hungry network was hidden in 'junk data' for decades because scientists only looked at what happens when you TRY. The breakthroughs were in the silence.",
    reflection: "How much of your life have you dismissed as 'doing nothing' that might actually be your brain's most important work?",
    practice: "Set a timer for 5 minutes and do absolutely nothing — no phone, no reading, no music. Notice what your mind does when you stop directing it. That's your DMN coming online.",
  },
  {
    id: "mental-time-travel",
    title: "Mental Time Travel",
    subtitle: "Your brain's time machine",
    icon: "⏳",
    color: "#ec4899",
    quickie: "The DMN's most staggering ability is mental time travel — the capacity to detach from the present moment and project yourself into the past or future. When you reminisce about a childhood birthday or imagine yourself giving a speech next week, you're using the exact same neural machinery. Here's what's mind-blowing: the hippocampus — long thought to be purely a 'memory organ' — is equally active when constructing future scenarios. Your brain doesn't distinguish between remembering and imagining; it uses the same building blocks (people, places, emotions, sensory details) to construct both. This means memory is not a recording. It's a construction kit. And the future you imagine is built from reassembled fragments of your past. Patients with hippocampal damage can't remember yesterday AND can't imagine tomorrow — they're trapped in an eternal, featureless present.",
    insight: "Memory and imagination use the same neural hardware. You literally build your future from fragments of your past. People who lose memory also lose the ability to envision the future.",
    reflection: "When you imagine your future, whose memories are you remixing? Can you trace the building blocks back to real experiences?",
    practice: "Pick a future event you're anticipating. Now deliberately identify which past memories your brain is using as raw material to construct that mental image.",
  },
  {
    id: "self-narrative",
    title: "The Self-Narrative Engine",
    subtitle: "The story you tell yourself about you",
    icon: "🪞",
    color: "#f59e0b",
    quickie: "The medial prefrontal cortex — a key DMN hub sitting right behind your forehead — is the brain's 'self-referential processor.' It activates whenever you think about yourself: your traits, your values, your autobiography. This is where your brain weaves the continuous narrative that you experience as 'I.' Without the DMN, you'd have sensations and reactions but no sense of being a continuous person with a past and a future. Here's the vertigo-inducing part: the self isn't found in any single moment of brain activity. It's an EMERGENT PROPERTY of the DMN running its narrative loop thousands of times per day, stitching together fragments into the illusion of a coherent protagonist. Meditation practitioners who quiet the DMN report exactly this — the sense of 'self' dissolving, not because something is added, but because the story-generating machine briefly stops.",
    insight: "Your sense of being a continuous 'self' is a story your DMN constructs in real-time, thousands of times daily. Pause the network and the self fades — which is exactly what happens in deep meditation.",
    reflection: "If your sense of self is a narrative your brain generates, who is the narrator? And who is listening?",
    practice: "During a quiet moment, try to catch the exact instant your brain shifts from sensory experience ('I see a tree') to self-referential thinking ('I remember when...'). That transition is the DMN activating.",
  },
  {
    id: "creativity-engine",
    title: "The Creativity Engine",
    subtitle: "Why your best ideas come in the shower",
    icon: "💡",
    color: "#10b981",
    quickie: "Your best ideas don't come when you're grinding at your desk. They come in the shower, on a walk, or at 3 AM — and now we know why. When the task-positive network (the one you use for focused work) deactivates and the DMN takes over, something remarkable happens: brain regions that normally don't communicate start cross-talking. The DMN connects the medial prefrontal cortex (self-relevance), the posterior cingulate cortex (autobiographical memory), and the temporal lobes (semantic knowledge) into a single, freewheeling conversation. This is neural brainstorming. The DMN doesn't respect the boundaries between categories, time periods, or domains. It mashes together a childhood memory, a physics equation, and a song lyric and asks 'what if?' Research shows that highly creative people have STRONGER connectivity within their DMN and — critically — better coupling between their DMN and executive control networks. Creativity isn't about one network; it's about the dance between focused attention and unconstrained wandering.",
    insight: "Creativity requires two networks dancing together: the DMN generates wild associations, and the executive network evaluates them. You need both — and you need to alternate.",
    reflection: "When was the last time a breakthrough idea came to you during unfocused time? What were you doing — or not doing?",
    practice: "After your next focused work session, deliberately take a 15-minute 'DMN break' — walk, shower, stare out a window. Keep a notepad nearby to capture whatever surfaces.",
  },
  {
    id: "social-brain",
    title: "The Social Brain Hypothesis",
    subtitle: "Wired for other minds",
    icon: "🤝",
    color: "#06b6d4",
    quickie: "Here's a fact that should stop you in your tracks: the DMN and the brain's 'social cognition' network overlap almost entirely. The same regions that activate when you daydream also activate when you think about other people's thoughts, feelings, and intentions (theory of mind). This isn't a coincidence — it's evolution's signature. Matthew Lieberman's research shows that the DMN comes online within milliseconds of finishing any task, and its DEFAULT activity is social simulation. Your brain, when given nothing else to do, automatically starts modeling other people's minds. We evolved in groups where survival depended on predicting what others would do. The DMN is your brain's always-on social simulator, constantly running 'what would they think?' scenarios. This explains why isolation is so devastating to mental health — you're starving the brain's most fundamental network of its primary input.",
    insight: "Your brain's 'resting state' is actually social rehearsal. When you zone out, you're automatically simulating other people's minds. We are social to our neural core.",
    reflection: "Next time you catch yourself daydreaming, notice: is there another person in your daydream? Almost certainly yes. Your DMN defaults to social simulation.",
    practice: "For one hour, notice every time your mind wanders. Tally how many of those wanderings involve other people. You'll likely find it's the vast majority.",
  },
  {
    id: "anti-correlation",
    title: "The Seesaw Effect",
    subtitle: "Focus vs. wandering — the neural tug-of-war",
    icon: "⚖️",
    color: "#ef4444",
    quickie: "The DMN and the Task-Positive Network (TPN) exist in a strict anti-correlated relationship — when one is up, the other is down. It's a neural seesaw. Try to focus on a math problem and your DMN suppresses. Let your mind wander and your TPN goes quiet. This isn't just correlation; they actively inhibit each other. This is why you can't effectively focus AND daydream simultaneously. But here's the twist: the transition BETWEEN these states is where the magic lives. People who can fluidly shift between DMN and TPN — entering focused states quickly and releasing into mind-wandering smoothly — show higher cognitive flexibility, better problem-solving, and greater emotional resilience. The problem with modern life isn't too much focus OR too much wandering. It's that we've lost the ability to transition cleanly between them. We half-focus while half-scrolling, engaging neither network fully. The result: cognitive mud.",
    insight: "The brain's most powerful mode isn't focus OR wandering — it's the ability to switch cleanly between them. Most people are stuck in a muddy middle, engaging neither network fully.",
    reflection: "How often are you truly in ONE mode — fully focused or fully unfocused? Or are you usually in the cognitive mud of half-attention?",
    practice: "Practice 'clean switching': work with full focus for 25 minutes (phone away, notifications off), then deliberately unfocus for 5 minutes (no screens). Notice how different this feels from your usual half-and-half.",
  },
  {
    id: "dmn-disorders",
    title: "When the DMN Breaks",
    subtitle: "The dark side of the wandering mind",
    icon: "🌀",
    color: "#f97316",
    quickie: "The DMN is a double-edged sword. When it functions well, it gives you creativity, self-awareness, empathy, and foresight. When it malfunctions, it's implicated in an astonishing range of mental health conditions. In depression, the DMN becomes hyperactive and 'sticky' — it won't deactivate when it should, trapping you in repetitive self-referential rumination. The depressed brain's DMN is essentially a story-generating machine stuck on the same painful chapter, replaying it on loop. In anxiety disorders, the DMN's future-simulation capacity goes into overdrive, generating catastrophic scenarios. In ADHD, the DMN intrudes during tasks that require sustained focus, which is why your mind wanders when you're trying to concentrate. In schizophrenia, the boundary between DMN-generated internal narratives and external reality becomes blurred. Even Alzheimer's disease preferentially attacks DMN hubs first — the self-narrative crumbles before motor skills or sensory processing.",
    insight: "Depression is a DMN stuck on replay. Anxiety is a DMN stuck on fast-forward. Understanding this reframes mental illness from 'character flaw' to 'network dysfunction.'",
    reflection: "Have you experienced rumination (replaying the past) or catastrophizing (dreading the future)? Knowing these are DMN patterns, does that change how you relate to them?",
    practice: "Next time you catch yourself in a rumination loop, label it: 'That's my DMN stuck in replay mode.' This simple reframing creates distance between you and the pattern.",
  },
  {
    id: "meditation-rewiring",
    title: "Rewiring the Default",
    subtitle: "Meditation as DMN training",
    icon: "🧘",
    color: "#8b5cf6",
    quickie: "Experienced meditators don't have a weaker DMN — they have a more FLEXIBLE one. Thousands of hours of meditation practice fundamentally restructure how the DMN operates. Novice meditators suppress the DMN during meditation (which is exhausting). Expert meditators show something radically different: their DMN still activates, but its coupling with the salience network (which detects when you've drifted) is dramatically strengthened. They catch mind-wandering faster and redirect more smoothly. The posterior cingulate cortex — the DMN's central hub — shows reduced activity at rest in long-term meditators, meaning their baseline 'self-referential chatter' is quieter. But when they deliberately engage in compassion meditation, their DMN lights up MORE intensely than non-meditators. They haven't destroyed the network; they've gained a volume knob. This is arguably the most important neuroscience finding of the century: the brain's default patterns are not fixed. They can be trained.",
    insight: "Meditation doesn't silence the DMN — it gives you a volume knob. Expert meditators can engage or disengage their self-narrative at will. Your defaults are trainable.",
    reflection: "What would change in your life if you could turn your inner narrator up or down at will? When would you want it louder? When quieter?",
    practice: "Try a 10-minute meditation where you simply notice when your mind wanders (DMN activating) and gently return to the breath (reactivating the TPN). Each 'catch and return' is a rep that strengthens the switch.",
  },
];

export const quizQuestions = [
  {
    question: "You're staring out the window during a meeting and suddenly solve a problem you've been stuck on for days. According to DMN research, what just happened?",
    options: [
      "You got lucky — your brain randomly stumbled on the answer",
      "Your DMN connected distant brain regions that don't communicate during focused work, generating a novel association",
      "You were actually subconsciously focused the whole time",
      "Your brain was resting and recovered enough energy to solve the problem",
    ],
    correctAnswer: 1,
    explanation: "The DMN connects regions across the brain that are normally siloed during focused work — prefrontal cortex, temporal lobes, hippocampus. This cross-talk generates associations impossible during directed thinking. It's not luck; it's a different computational mode.",
  },
  {
    question: "A patient with severe hippocampal damage is asked: 'What will you do this weekend?' They stare blankly and say, 'I don't know... it's just... blank.' Why?",
    options: [
      "They're depressed and lack motivation",
      "Their memory loss prevents them from remembering plans they made",
      "The hippocampus builds future scenarios from past memory fragments — with no memory, there's no imagination",
      "They have damage to their planning and executive function areas",
    ],
    correctAnswer: 2,
    explanation: "Mental time travel uses the hippocampus to assemble future scenarios from fragments of past experience. This is the DMN's most stunning revelation: memory and imagination share identical neural hardware. No past = no future.",
  },
  {
    question: "Your friend says they do their best thinking while multitasking — checking email while brainstorming, scrolling while reflecting. What does the seesaw effect predict?",
    options: [
      "They're probably right — stimulation helps creativity",
      "They're in 'cognitive mud' — neither the DMN nor the TPN is fully engaged, producing shallow processing in both modes",
      "The DMN can operate alongside focused attention in some people",
      "Multitasking strengthens the connection between DMN and TPN",
    ],
    correctAnswer: 1,
    explanation: "The DMN and TPN are anti-correlated — they inhibit each other. Half-focusing while half-wandering engages neither network fully. The result is 'cognitive mud' — degraded performance in both modes. Clean switching between states is far more productive.",
  },
  {
    question: "A depressed person reports that they can't stop replaying embarrassing memories and imagining future failures. In DMN terms, what's happening?",
    options: [
      "Their DMN is underactive and needs stimulation",
      "They need to engage their DMN more through meditation",
      "Their DMN is hyperactive and 'sticky' — it won't deactivate, trapping them in self-referential rumination loops",
      "Their TPN is overactive and needs to be suppressed",
    ],
    correctAnswer: 2,
    explanation: "In depression, the DMN becomes hyperactive and fails to deactivate appropriately. The self-referential narrative engine gets stuck on painful chapters, replaying and catastrophizing. This reframes depression from a 'character flaw' to a measurable network dysfunction.",
  },
  {
    question: "An experienced meditator and a novice both meditate for 20 minutes. Brain scans would likely show:",
    options: [
      "Both suppress their DMN equally — meditation is meditation",
      "The expert's DMN is completely silent while the novice's is active",
      "The expert catches DMN wandering faster and redirects more smoothly; the novice exhausts themselves trying to suppress it",
      "The novice performs better because they're trying harder",
    ],
    correctAnswer: 2,
    explanation: "Expert meditators don't suppress the DMN — they develop stronger coupling between the DMN and salience network, catching mind-wandering faster and redirecting more fluidly. They've built a 'volume knob' rather than an 'off switch.' The novice burns energy fighting the DMN instead of training it.",
  },
  {
    question: "You finish a focused exam and immediately your mind starts thinking about what your friend said yesterday and what you'll eat for dinner. This happens because:",
    options: [
      "You're easily distracted and lack discipline",
      "The DMN activates within milliseconds of task completion — its default activity is social simulation and future planning",
      "You're stressed and your brain is seeking comfort in familiar thoughts",
      "Your brain is processing the exam in the background",
    ],
    correctAnswer: 1,
    explanation: "The DMN comes online within milliseconds of finishing any task. Its default activity is social cognition (thinking about others) and mental time travel (planning, reminiscing). This isn't distraction — it's your brain's most fundamental operating mode reasserting itself.",
  },
  {
    question: "Alzheimer's disease preferentially attacks DMN hubs before other brain regions. What does this predict about early symptoms?",
    options: [
      "Motor skills deteriorate first",
      "Vision and hearing decline first",
      "The sense of self, autobiographical memory, and social cognition erode before basic sensory or motor functions",
      "Language ability is the first thing to go",
    ],
    correctAnswer: 2,
    explanation: "Since Alzheimer's targets DMN regions first — medial prefrontal cortex, posterior cingulate, hippocampus — the earliest symptoms involve the DMN's core functions: losing the thread of one's life story, forgetting personal memories, and struggling with social cognition. The self crumbles before the body.",
  },
];
