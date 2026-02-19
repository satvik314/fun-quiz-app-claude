export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Concept {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  quickie: string;
  example: string;
  keyInsight: string;
  quiz: QuizQuestion[];
}

export const centralTheme = {
  title: "Lateral Thinking",
  subtitle: "Edward de Bono",
  description:
    "You cannot dig a hole in a different place by digging the same hole deeper.",
};

export const concepts: Concept[] = [
  {
    id: "po",
    name: "PO",
    icon: "💥",
    tagline: "Provocative Operation",
    quickie:
      'PO is the magic word of lateral thinking. When you say "Po," you signal that the next statement is a deliberate provocation — not something to be judged as right or wrong, but a mental crowbar to pry open new ideas. Po: cars should have square wheels. Absurd? Yes. But it might lead you to think about adaptive suspension, terrain-adjusting tires, or entirely new movement mechanisms. De Bono says at least 40% of your provocations should be completely unusable — that\'s the point. The wilder the provocation, the further it throws you from established patterns.',
    example:
      '"Po: the factory should be downstream of itself." This absurd provocation led to real legislation requiring factories to take water input from a point downstream of their output — making them directly experience their own pollution.',
    keyInsight:
      "Provocation without movement is useless. PO gets you to an impossible place; then you use movement techniques to extract practical value.",
    quiz: [
      {
        question: "What does PO stand for in lateral thinking?",
        options: [
          "Positive Outcome",
          "Provocative Operation",
          "Pattern Override",
          "Preliminary Option",
        ],
        correctAnswer: 1,
        explanation:
          'PO stands for Provocative Operation — a signal that what follows is a deliberate provocation, not a judgment.',
      },
      {
        question:
          "According to de Bono, what percentage of provocations should be completely unusable?",
        options: ["10%", "25%", "At least 40%", "75%"],
        correctAnswer: 2,
        explanation:
          'De Bono says at least 40% of provocations should be unusable — "safe" provocations don\'t provide full value.',
      },
      {
        question: "What must follow a PO provocation for it to be useful?",
        options: [
          "Immediate judgment",
          "Movement — techniques to extract ideas",
          "Group voting",
          "Documentation",
        ],
        correctAnswer: 1,
        explanation:
          "Provocation without movement is useless. You need to actively work to extract practical ideas from the provocation.",
      },
    ],
  },
  {
    id: "random-stimulation",
    name: "Random Entry",
    icon: "🎲",
    tagline: "The unrelated unlock",
    quickie:
      "Open a dictionary to a random page. Pick a noun. Now force-connect it to your problem. Your brain will resist at first — then something magical happens. The brain is a self-organizing pattern system that naturally works to connect any two pieces of information held simultaneously. A random word is the ultimate pattern-breaker because it has absolutely no logical connection to your problem. De Bono insists: no word has ever been \"too random.\" The real danger is choosing words that aren't random enough.",
    example:
      'The randomly chosen word "nose" applied to a photocopier problem led to the idea that the copier could release a lavender scent when running low on paper — a sensory alert no one had considered.',
    keyInsight:
      "The input must be genuinely random and unconnected. Your brain does the heavy lifting of creating connections — that's the whole mechanism.",
    quiz: [
      {
        question: "Why must the random stimulus be truly unconnected to the problem?",
        options: [
          "To make the exercise harder",
          "Because connected words lead to obvious thinking",
          "Because the brain naturally connects any two things held simultaneously",
          "It doesn't matter — any word works the same",
        ],
        correctAnswer: 2,
        explanation:
          "The brain is a pattern-making system that naturally connects any two pieces of information held at once. An unconnected stimulus forces genuinely new patterns.",
      },
      {
        question: "What does de Bono say about a word being 'too random'?",
        options: [
          "Some words are too abstract to use",
          "Only concrete nouns work well",
          "No word has ever been too random",
          "Random words should be filtered first",
        ],
        correctAnswer: 2,
        explanation:
          "De Bono insists no word has ever been too random — the real danger is picking words that aren't random enough.",
      },
      {
        question: "What is the practical method de Bono suggests?",
        options: [
          "Meditate until a word comes to mind",
          "Open a dictionary to a random page and pick the nearest noun",
          "Ask a colleague for a word",
          "Use the first word you see on a billboard",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono suggests opening a dictionary to a random page and picking the nearest noun, or maintaining a pre-numbered list of random nouns.",
      },
    ],
  },
  {
    id: "challenge",
    name: "Challenge",
    icon: "⚡",
    tagline: "Question the unquestioned",
    quickie:
      "Why do we do it this way? Not because it's wrong — but because we've never asked. The Challenge technique targets assumptions so deeply embedded that they're invisible. You take something everyone accepts as obvious, write it down, and deliberately try to disprove it. The goal isn't to show the assumption is wrong — it's to free up information locked inside the assumption so it can be restructured. The hardest part? Seeing the assumptions in the first place. They're like water to a fish.",
    example:
      "Airbnb challenged the assumption that people would never welcome strangers into their homes. The assumption wasn't wrong per se — it was just an unquestioned boundary that, once questioned, opened a massive opportunity.",
    keyInsight:
      "Assumptions create invisible boundaries. You can't escape a prison you don't know you're in.",
    quiz: [
      {
        question: "What is the primary purpose of the Challenge technique?",
        options: [
          "To prove assumptions wrong",
          "To free up information locked in unexamined assumptions",
          "To criticize existing solutions",
          "To find logical errors",
        ],
        correctAnswer: 1,
        explanation:
          "The goal isn't to prove assumptions wrong but to free up information so it can be restructured into new patterns.",
      },
      {
        question: "Why is the Challenge technique difficult?",
        options: [
          "It requires advanced education",
          "Assumptions are invisible — we don't realize they exist",
          "People get emotionally defensive",
          "It takes too long",
        ],
        correctAnswer: 1,
        explanation:
          "The hardest part is seeing assumptions in the first place — they're so embedded in our thinking that we don't notice them.",
      },
      {
        question: "What is the recommended first step when applying Challenge?",
        options: [
          "Brainstorm with a group",
          "Write down all assumptions related to the situation",
          "Research competitor approaches",
          "Ask an expert",
        ],
        correctAnswer: 1,
        explanation:
          "The practical approach is to explicitly write down all assumptions, then deliberately challenge each one.",
      },
    ],
  },
  {
    id: "alternatives",
    name: "Alternatives",
    icon: "🔀",
    tagline: "Don't stop at good enough",
    quickie:
      "You found a solution. It works. In vertical thinking, you stop. In lateral thinking, you keep going. De Bono considers this the core of creative thinking — the deliberate, systematic search for different ways of looking at things, even when you already have a satisfactory answer. Set a quota: \"I need at least five different approaches.\" Then hunt. The key word is deliberate. You don't wait for alternatives to show up — you actively generate them. A much better arrangement of information might exist just beyond the adequate one you've settled on.",
    example:
      "Instead of stopping at 'we need faster horses,' continuing the search for alternatives leads to 'we need a different kind of transportation entirely' — which leads to automobiles.",
    keyInsight:
      "Being satisfied with an adequate solution is the biggest enemy of a brilliant one. Keep generating even after finding something that works.",
    quiz: [
      {
        question:
          "What distinguishes lateral thinking's approach to alternatives from vertical thinking?",
        options: [
          "Lateral thinking generates fewer but better alternatives",
          "Lateral thinking continues searching even after finding a good solution",
          "Vertical thinking doesn't use alternatives at all",
          "Lateral thinking only considers radical alternatives",
        ],
        correctAnswer: 1,
        explanation:
          "In vertical thinking, the search stops at a workable answer. In lateral thinking, you deliberately continue because something much better may exist.",
      },
      {
        question: "What practical technique does de Bono suggest?",
        options: [
          "Wait for inspiration",
          "Set a quota of alternatives to generate",
          "Only accept the third idea you find",
          "Eliminate ideas one by one",
        ],
        correctAnswer: 1,
        explanation:
          "Set a quota (e.g., 'I must find at least five ways') and actively search, rather than waiting for alternatives to appear.",
      },
      {
        question: "De Bono considers the generation of alternatives to be:",
        options: [
          "A minor supplementary technique",
          "Only useful in group settings",
          "The core of creative thinking",
          "Less important than judgment",
        ],
        correctAnswer: 2,
        explanation:
          "De Bono explicitly considers the deliberate generation of alternatives to be the core of creative thinking.",
      },
    ],
  },
  {
    id: "reversal",
    name: "Reversal",
    icon: "🔄",
    tagline: "Flip it. All of it.",
    quickie:
      "Take any one-way relationship and reverse its direction. Turn things inside out, upside down, back to front. The reversal doesn't need to be realistic — it's a provocative rearrangement of information. By forcing yourself to the opposite position, you see aspects of the problem that were completely invisible from the original direction. It's not about finding the answer in the reversal — it's about reaching a new vantage point from which different solutions become visible.",
    example:
      "Instead of 'How do we get customers to come to the store?' reverse it: 'How does the store go to the customers?' This leads to mobile retail, delivery services, pop-up shops, and e-commerce.",
    keyInsight:
      "The reversal is a vehicle, not a destination. It moves you to a place where new ideas become visible.",
    quiz: [
      {
        question: "What is the purpose of the Reversal technique?",
        options: [
          "To find the opposite answer",
          "To reach a new vantage point where different solutions are visible",
          "To disprove the original approach",
          "To simplify the problem",
        ],
        correctAnswer: 1,
        explanation:
          "The purpose is not to find the answer in the reversal itself, but to reach a position where entirely different solutions become visible.",
      },
      {
        question: "Does the reversal need to be realistic?",
        options: [
          "Yes, only realistic reversals are useful",
          "No — it serves as a provocative rearrangement",
          "Only partially realistic",
          "It depends on the problem",
        ],
        correctAnswer: 1,
        explanation:
          "The reversal doesn't need to be realistic — it's a deliberate provocation to escape the standard perspective.",
      },
      {
        question: "Reversal is best described as:",
        options: [
          "A destination — the reversed idea is the solution",
          "A vehicle — it moves you to where new ideas become visible",
          "A filter — it removes bad ideas",
          "A validator — it confirms the original approach",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono describes reversal as a vehicle, not a destination. It transports you to a new vantage point.",
      },
    ],
  },
  {
    id: "suspended-judgment",
    name: "Suspended Judgment",
    icon: "⏸️",
    tagline: "Don't kill ideas at birth",
    quickie:
      "Your brain wants to judge immediately. Good or bad. Right or wrong. Suspended Judgment says: not yet. During the generative phase of thinking, you deliberately delay evaluation. A \"wrong\" idea at an intermediate stage can be the stepping stone to a brilliant idea later. If you judge too early, you kill the chain. De Bono draws a crucial distinction: being right at every step is very different from being right at the end. The purpose of thinking isn't to be correct every second — it's to be effective when it matters.",
    example:
      "In a brainstorming session, someone suggests 'give the product away for free.' The instinct is to dismiss it immediately. But suspending judgment might lead to a freemium model, sponsored distribution, or loss-leader strategy.",
    keyInsight:
      "Being right at every step ≠ being right at the end. Allow intermediate wrongness to enable final rightness.",
    quiz: [
      {
        question: "When should judgment be applied in lateral thinking?",
        options: [
          "At every step",
          "Only at the end, during the selective stage",
          "Never — all ideas are equally valid",
          "Only by the team leader",
        ],
        correctAnswer: 1,
        explanation:
          "Judgment is delayed during the generative stage and applied later during the selective stage.",
      },
      {
        question:
          "What distinction does de Bono draw about being 'right'?",
        options: [
          "Right ideas always feel right immediately",
          "Being right at every step is the same as being right at the end",
          "Being right at every step is very different from being right at the end",
          "There is no right answer in lateral thinking",
        ],
        correctAnswer: 2,
        explanation:
          "De Bono argues these are fundamentally different — you can reach the right conclusion through intermediate \"wrong\" steps.",
      },
      {
        question: "Suspended judgment is NOT the same as:",
        options: [
          "Delaying evaluation",
          "Accepting every idea as valid",
          "Creating generative space",
          "Allowing intermediate wrongness",
        ],
        correctAnswer: 1,
        explanation:
          "Suspended judgment means deferring evaluation, not accepting every idea as valid. Judgment comes later, not never.",
      },
    ],
  },
  {
    id: "intermediate-impossible",
    name: "Intermediate Impossible",
    icon: "🌀",
    tagline: "Wrong can lead to right",
    quickie:
      "In vertical thinking, every step must be correct — you cannot pass through a wrong step. Lateral thinking breaks this rule deliberately. An impossible idea is used as a stepping stone, not a destination. You know it's wrong. That's the point. The impossible idea takes you to a position from which a correct, practical idea suddenly becomes visible. De Bono says the most valuable intermediate impossibles are often those that break taboos — ideas that are immoral, illegal, or socially unacceptable — precisely because they take thinking furthest from established patterns.",
    example:
      '"Po: the copy should not be readable." This impossible idea leads to thinking about braille systems, audio playback, purely pictorial communication, or content that reveals itself only with special tools.',
    keyInsight:
      "You cannot reach certain ideas by logical steps alone. Some destinations require passing through impossible territory.",
    quiz: [
      {
        question: "How does the Intermediate Impossible differ from vertical thinking?",
        options: [
          "It uses logic more carefully",
          "It allows passing through wrong/impossible steps",
          "It avoids intermediate steps entirely",
          "It requires group consensus",
        ],
        correctAnswer: 1,
        explanation:
          "In vertical thinking every step must be correct. The Intermediate Impossible deliberately passes through wrong steps to reach new territory.",
      },
      {
        question:
          "Why are taboo-breaking ideas often the most valuable intermediate impossibles?",
        options: [
          "Because they're controversial and get attention",
          "Because they take thinking furthest from established patterns",
          "Because they're easier to remember",
          "Because they're more logical",
        ],
        correctAnswer: 1,
        explanation:
          "Taboo-breaking ideas are valuable precisely because they push thinking the furthest from established patterns.",
      },
      {
        question: "The Intermediate Impossible is best used as:",
        options: [
          "A final solution",
          "A stepping stone to practical ideas",
          "A way to shock the audience",
          "A logical proof",
        ],
        correctAnswer: 1,
        explanation:
          "The impossible idea is a stepping stone — you know it's wrong, but it gets you to a place where practical ideas become visible.",
      },
    ],
  },
  {
    id: "fractionation",
    name: "Fractionation",
    icon: "🧩",
    tagline: "Break it apart, rebuild it different",
    quickie:
      "Take a situation and break it into parts — but not the \"correct\" parts. De Bono distinguishes fractionation from analysis: in analysis, you try to find the true components; in fractionation, you're trying to create parts. There's no single correct way to divide a situation. Different divisions yield different insights. The original pattern you see was built from smaller patterns that you've forgotten about. Fractionation cracks it back open, giving you raw material to reassemble in unexpected configurations.",
    example:
      "A 'meeting' could be fractionated as: information sharing + decision making + social bonding + status signaling + habit. Each component can then be addressed separately — maybe information sharing becomes async, freeing the meeting for pure decision-making.",
    keyInsight:
      "Analysis finds the 'true' parts. Fractionation creates parts. There is no single correct decomposition.",
    quiz: [
      {
        question: "How does fractionation differ from analysis?",
        options: [
          "Fractionation is more detailed",
          "Analysis finds 'true' parts; fractionation creates parts",
          "Fractionation only works with physical objects",
          "Analysis is a type of fractionation",
        ],
        correctAnswer: 1,
        explanation:
          "In analysis you seek the true components. In fractionation you deliberately create different divisions — there is no single correct one.",
      },
      {
        question: "Why are multiple different divisions useful?",
        options: [
          "One division is always wrong",
          "Different divisions yield different insights",
          "More divisions mean more work, which is always better",
          "Only the last division matters",
        ],
        correctAnswer: 1,
        explanation:
          "Each different way of breaking something apart reveals different aspects and enables different recombinations.",
      },
      {
        question: "What does fractionation provide?",
        options: [
          "The one correct solution",
          "Raw material for unexpected recombination",
          "Proof that the original is flawed",
          "A simplified version of the problem",
        ],
        correctAnswer: 1,
        explanation:
          "Fractionation provides raw material — smaller units that can be reassembled into entirely new configurations.",
      },
    ],
  },
  {
    id: "dominant-ideas",
    name: "Dominant Ideas",
    icon: "👁️",
    tagline: "See the invisible cage",
    quickie:
      "Every problem has a dominant idea — an overriding theme that organizes how you perceive the entire situation. Like a conspiracy theorist who explains away every contradicting fact, a dominant idea makes everything fit its narrative. The technique is simple but powerful: identify the dominant idea, write it down explicitly, then deliberately think outside it. As long as the dominant idea remains unexamined, it controls the direction of your thinking invisibly. De Bono lists this as one of the four critical factors of lateral thinking.",
    example:
      "A tech company's dominant idea might be 'we are a software company.' This invisible cage prevents them from seeing hardware opportunities, service models, or platform plays that don't fit the software identity.",
    keyInsight:
      "You cannot escape a cage you cannot see. The first step is always making the dominant idea explicit and visible.",
    quiz: [
      {
        question: "What is a 'dominant idea' in de Bono's framework?",
        options: [
          "The best idea in a brainstorming session",
          "The overriding theme that organizes how you perceive a situation",
          "The most popular opinion in a group",
          "The idea with the most evidence supporting it",
        ],
        correctAnswer: 1,
        explanation:
          "A dominant idea is the overriding theme that invisibly organizes how everything in a situation is perceived.",
      },
      {
        question: "What is the first step to escape a dominant idea?",
        options: [
          "Ignore it completely",
          "Make it explicit and write it down",
          "Find evidence against it",
          "Replace it immediately",
        ],
        correctAnswer: 1,
        explanation:
          "You must first make the dominant idea visible and explicit — you can't escape what you can't see.",
      },
      {
        question: "De Bono compares dominant ideas to:",
        options: [
          "Scientific theories",
          "Paranoid thinking — everything supports the fixed belief",
          "Democratic voting",
          "Mathematical proofs",
        ],
        correctAnswer: 1,
        explanation:
          "Like paranoia, a dominant idea makes everything appear to support it — contradictions are explained away or ignored.",
      },
    ],
  },
  {
    id: "analogy",
    name: "Analogy",
    icon: "🪞",
    tagline: "Borrow from the unlike",
    quickie:
      "Create a comparison between your problem and something completely unrelated, then map the insights back. But here's the twist: in lateral thinking, imperfect analogies are often more valuable than perfect ones. Why? Because the effort of connecting a loose analogy to your problem forces you into unfamiliar territory. De Bono distinguishes between analogy for argument (proving similarity) and analogy for lateral thinking (generating new perspectives). You're not trying to prove anything — you're trying to see differently.",
    example:
      "How is running a hospital like running a restaurant? Both manage flow, both have 'customers' in different states of urgency, both balance quality with speed. The imperfect mapping generates ideas: what if hospital patients could 'order' their care schedule?",
    keyInsight:
      "Use analogy to generate, not to prove. Imperfect analogies force harder thinking and yield more original insights.",
    quiz: [
      {
        question:
          "In lateral thinking, why are imperfect analogies often more valuable?",
        options: [
          "They're easier to think of",
          "The effort of connecting a loose analogy forces unfamiliar thinking",
          "Perfect analogies don't exist",
          "Imperfect analogies are more entertaining",
        ],
        correctAnswer: 1,
        explanation:
          "Imperfect analogies force you to stretch further into unfamiliar territory, generating more original insights.",
      },
      {
        question:
          "What's the difference between analogy for argument vs. for lateral thinking?",
        options: [
          "Argument analogies are longer",
          "Argument proves similarity; lateral thinking generates new perspectives",
          "Lateral thinking analogies must be perfect",
          "There is no difference",
        ],
        correctAnswer: 1,
        explanation:
          "In argument you prove similarity; in lateral thinking you use analogy purely to generate new perspectives.",
      },
      {
        question: "The purpose of analogy in lateral thinking is to:",
        options: [
          "Find the perfect comparison",
          "See the problem differently",
          "Simplify the problem",
          "Validate existing ideas",
        ],
        correctAnswer: 1,
        explanation:
          "Analogy in lateral thinking is about seeing differently, not proving or simplifying.",
      },
    ],
  },
];
