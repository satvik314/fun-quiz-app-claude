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
        question:
          "Your team is brainstorming how to reduce customer churn. Someone says 'Po: we should charge customers MORE when they try to leave.' Your manager frowns. What's the right move?",
        options: [
          "Apologize — the idea is offensive to customers",
          "Defend the idea logically by citing exit fees",
          "Use movement: what does 'charging more at exit' make you think of? — loyalty bonuses, sunk-cost incentives, exit interviews as value-adds",
          "Vote on whether the provocation is useful",
        ],
        correctAnswer: 2,
        explanation:
          "A PO provocation is not meant to be defended or judged — it's meant to be moved from. The right response is to use movement techniques to extract practical ideas from the absurd starting point.",
      },
      {
        question:
          "You're applying PO to your morning routine. Which provocation is MOST likely to generate a genuine breakthrough?",
        options: [
          "Po: I should wake up 15 minutes earlier",
          "Po: I should sleep at my office desk",
          "Po: I should do my morning routine in reverse order",
          "Po: I should skip breakfast sometimes",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono says at least 40% of provocations should be completely unusable — 'safe' provocations don't throw you far enough from existing patterns. Sleeping at your desk is absurd enough to provoke genuinely new thinking (co-living spaces, micro-naps, eliminating commutes). The others are too reasonable.",
      },
      {
        question:
          "A colleague in a meeting blurts out 'What if we just gave our product away for free?' and everyone laughs. How does this differ from a proper PO?",
        options: [
          "It doesn't differ — any wild idea is a PO",
          "A PO is signaled intentionally and followed by deliberate movement techniques; a random outburst gets judged and dies",
          "The difference is that PO ideas must be more extreme",
          "PO requires written documentation first",
        ],
        correctAnswer: 1,
        explanation:
          "The 'Po' signal tells everyone: don't judge this, use it as a springboard. Without the intentional framing and follow-up movement techniques, a wild idea just gets laughed at and killed. PO is a system, not a lucky accident.",
      },
      {
        question:
          "You've been using PO for a month, and you notice all your provocations end up being somewhat practical and feasible. What's wrong?",
        options: [
          "Nothing — practical provocations are the most useful",
          "You should alternate between practical and wild ones",
          "Your provocations aren't wild enough — you're unconsciously self-censoring to stay 'reasonable'",
          "You need to involve more people to get wilder ideas",
        ],
        correctAnswer: 2,
        explanation:
          "If your provocations are consistently feasible, you're not provoking hard enough. De Bono insists at least 40% should be completely unusable. You're unconsciously filtering for safety, which defeats the entire purpose of PO.",
      },
      {
        question:
          "You say 'Po: meetings should last exactly 2 seconds.' After movement, which outcome demonstrates you used PO correctly?",
        options: [
          "You conclude that 2-second meetings are impractical and discard the provocation",
          "You arrive at: 'What if every meeting started with a 2-second summary of the decision needed, and only continued if someone objected?'",
          "You implement literal 2-second meetings as an experiment",
          "You use it to argue that all meetings are too long",
        ],
        correctAnswer: 1,
        explanation:
          "Correct PO usage means arriving at a practical, novel idea that you could NOT have reached through logical steps from the original problem. Discarding the provocation means you judged instead of moved. Implementing it literally means you confused the vehicle with the destination.",
      },
      {
        question:
          "You're stuck on how to make a boring compliance training engaging. You generate: 'Po: the training should be illegal.' What's the FIRST thing you do with this provocation?",
        options: [
          "Check if there are any legal implications",
          "Extract the movement: What aspects of 'illegal' things make them engaging? Forbidden knowledge, secrecy, risk, adrenaline — how can you bring those feelings to training?",
          "Refine the provocation to be more specific",
          "Share it with your team to see if they find it funny",
        ],
        correctAnswer: 1,
        explanation:
          "Movement is the critical step after PO. You extract what's interesting about the provocation — 'illegal' suggests forbidden, secretive, thrilling. This could lead to gamified training with secret missions, unlockable content, or competitive risk-reward dynamics.",
      },
      {
        question:
          "In your daily life, you're trying to eat healthier but keep failing. You try PO. Which approach shows the deepest understanding of the technique?",
        options: [
          "Po: I should eat only desserts — movement: what if I redesigned healthy food to trigger the same reward as desserts? Leads to: investing in making healthy meals genuinely delicious rather than forcing willpower",
          "Po: I should hire a personal chef — movement: what if someone else controlled my food? Leads to: meal delivery services",
          "Po: I should eat less — leads to: smaller portions",
          "Po: I should stop buying junk food — leads to: not keeping snacks at home",
        ],
        correctAnswer: 0,
        explanation:
          "Option A shows the full PO cycle: an absurd provocation ('only desserts'), genuine movement (why are desserts appealing?), and a practical insight that breaks from the willpower-based pattern everyone is stuck in. Options C and D are logical thinking disguised as PO — they don't actually provoke.",
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
        question:
          "You're trying to improve employee retention. You open a dictionary and land on 'glacier.' Your brain goes blank. What should you do?",
        options: [
          "Pick a different word that's more relevant to HR",
          "Stay with 'glacier' and force connections: slow movement, massive hidden mass, erosion over time, ice cores preserving history — any of these could spark an insight",
          "The word is too abstract — try again with a concrete noun",
          "Ask a colleague what 'glacier' means to them",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono insists no word has ever been 'too random.' The discomfort of a blank mind is the technique working — your brain is being forced out of its established patterns. 'Glacier' could lead to: slow-building loyalty programs, uncovering hidden dissatisfaction, preserving institutional knowledge.",
      },
      {
        question:
          "You use Random Entry daily for a week. You notice you keep getting useful results from nouns related to nature (tree, river, mountain). What's the danger here?",
        options: [
          "No danger — nature words are the most effective",
          "You're unconsciously selecting words that feel comfortable, which means they're not random enough",
          "You should switch to verbs instead",
          "Nature words only work for environmental problems",
        ],
        correctAnswer: 1,
        explanation:
          "The real danger isn't words being too random — it's words not being random enough. If you're gravitating toward a category, your brain is pattern-matching before the exercise even starts, which undermines the entire mechanism.",
      },
      {
        question:
          "Your team is stuck on a packaging design problem. Someone suggests using 'elephant' as the random word. A team member says 'That's perfect — elephants are known for their memory, and we want memorable packaging!' Why is this response problematic?",
        options: [
          "Elephants are too common a stimulus",
          "They jumped to the most obvious association instead of exploring unexpected connections — trunk (dispensing mechanism), herd behavior (group packaging), thick skin (durability), graveyard (end-of-life design)",
          "Random Entry should only be done alone, not in groups",
          "The connection is fine — it shows the technique working",
        ],
        correctAnswer: 1,
        explanation:
          "The value of Random Entry comes from forced, unexpected connections. Jumping to the most obvious association ('elephants = memory = memorable') is barely lateral thinking — it's just word association. The technique works best when you explore the word's less obvious attributes.",
      },
      {
        question:
          "You're trying to decide what to cook for dinner tonight. Is Random Entry appropriate here?",
        options: [
          "No — Random Entry is only for professional/business problems",
          "Yes — open a dictionary, get 'telescope,' and force-connect it: distant cuisines you've never tried, focusing/zooming in on one ingredient, exploring something far outside your comfort zone",
          "No — cooking is too simple for lateral thinking techniques",
          "Yes, but only if you're a professional chef",
        ],
        correctAnswer: 1,
        explanation:
          "Random Entry works on ANY problem where you're stuck in a pattern. If you always cook the same things, a random word can break that loop. The technique is about your brain's pattern-making ability, which works regardless of the problem's 'importance.'",
      },
      {
        question:
          "A coworker says 'I tried Random Entry but it didn't work — I got the word \"sock\" and couldn't connect it to our supply chain problem.' What most likely went wrong?",
        options: [
          "The word 'sock' genuinely doesn't work for supply chain — they should try again",
          "They probably spent 30 seconds trying and gave up — the technique requires sustained effort to force connections through the discomfort",
          "Random Entry doesn't work for logistics problems",
          "They should have used a verb instead of a noun",
        ],
        correctAnswer: 1,
        explanation:
          "The brain resists at first — that's normal and expected. Most people give up during the discomfort phase. 'Sock' for supply chain could yield: pairs (redundant suppliers), inside-out (reverse logistics), stretching (flexible capacity), drawer organization (warehouse layout). The connections exist; you have to push through.",
      },
      {
        question:
          "You're journaling about a career decision. You decide to use Random Entry. You close your eyes, point at a page, and get 'volcano.' Which response shows the deepest application?",
        options: [
          "'Volcano = explosive = I should make a bold career move'",
          "'Volcano = hot = I should pursue a hot industry'",
          "'Volcano: dormant periods before eruption (am I in a dormant phase?), creates new land from destruction (what could I build from leaving?), magma flows along the path of least resistance (where am I taking easy paths?), ash fertilizes soil (how could a failure enrich what comes next?)'",
          "'Volcano doesn't relate to careers — I'll pick another word'",
        ],
        correctAnswer: 2,
        explanation:
          "Deep application means exploring MULTIPLE attributes of the random word, not just the most obvious one. A volcano has dozens of characteristics — dormancy, eruption, creation through destruction, path of least resistance, fertilization. Each one opens a different line of thinking about your career.",
      },
      {
        question:
          "You want to use Random Entry but don't have a dictionary. Which alternative preserves the technique's integrity?",
        options: [
          "Think of the first word that comes to mind",
          "Use the 3rd noun on a random Wikipedia page, the label of the nearest product, or a random word generator — anything where YOU don't choose the word",
          "Ask a friend to give you a word related to your problem",
          "Use the last word someone said to you",
        ],
        correctAnswer: 1,
        explanation:
          "The critical requirement is that the word is genuinely random — not chosen by you or influenced by your problem. Thinking of a word yourself lets your brain's patterns infiltrate the process. The source doesn't matter as long as you have no control over the selection.",
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
        question:
          "You've been job-hunting for months with no luck. You sit down to apply the Challenge technique. Which is the most powerful assumption to surface and challenge?",
        options: [
          "'I need a better resume' — challenge: maybe resumes don't matter as much as I think",
          "'I need to find a job' — challenge: what if I created a role instead of finding one?",
          "'I should apply to more companies' — challenge: maybe quantity isn't the issue",
          "'The job market is tough right now' — challenge: maybe it's tough in my narrow view of it",
        ],
        correctAnswer: 1,
        explanation:
          "The deepest assumption is the one you don't even realize you're making. 'I need to find a job' is the water you're swimming in — every other assumption (resume, applications, market) lives inside it. Challenging the most foundational assumption opens the most territory.",
      },
      {
        question:
          "Your team redesigns the onboarding process every year but it never improves significantly. You suspect a hidden assumption. Which of these is most likely the 'water the fish can't see'?",
        options: [
          "'New hires need training' — this feels too obvious to be the hidden one",
          "'Onboarding is something the company does TO new employees' — what if new employees onboarded the company to themselves?",
          "'We should use better training software' — this is a solution, not an assumption",
          "'Onboarding takes about two weeks' — the timeline is arbitrary but not foundational",
        ],
        correctAnswer: 1,
        explanation:
          "The invisible assumption is the direction of the relationship: company onboards employee. This organizes every decision — content, schedule, evaluation. Reversing who is active and who is passive restructures the entire problem. The other options are visible, surface-level assumptions.",
      },
      {
        question:
          "You challenge the assumption 'customers want lower prices' and discover it's actually wrong — they want more predictable prices. Your colleague says 'Great, Challenge technique worked — the assumption was false!' What's missing from their understanding?",
        options: [
          "Nothing — finding a false assumption is the goal of Challenge",
          "The technique's value isn't in proving assumptions false, but in freeing up the information locked inside them for restructuring — even TRUE assumptions benefit from being challenged",
          "They should have challenged more assumptions before stopping",
          "They need to validate the finding with customer research",
        ],
        correctAnswer: 1,
        explanation:
          "Challenge isn't about proving things wrong — it's about freeing information. Even a TRUE assumption, once surfaced and examined, releases locked information that can be rearranged. Your colleague thinks Challenge is a truth-detector; it's actually a pattern-breaker.",
      },
      {
        question:
          "You want to apply Challenge to your daily routine. You write down: 'I check email first thing in the morning.' You then ask 'Why?' and answer 'Because important messages might be waiting.' What's the next step that most people skip?",
        options: [
          "Decide whether to stop checking email",
          "Ask 'Why do I assume important messages can't wait 2 hours?' — keep digging until you find the assumption you didn't know you had",
          "Try checking email at noon for a week as an experiment",
          "Ask colleagues when they check email",
        ],
        correctAnswer: 1,
        explanation:
          "Most people stop at the first layer of 'why.' The real power of Challenge is digging deeper: Why can't they wait? (assumption: urgency). Why urgency? (assumption: if I don't respond fast, bad things happen). Is that true? Usually the deepest assumption is several layers down and invisible until you dig.",
      },
      {
        question:
          "A startup founder says 'We need to raise venture capital to grow.' You apply Challenge. Which response demonstrates the technique most precisely?",
        options: [
          "'Have you considered bootstrapping?' — this is advice, not Challenge",
          "'Why do you assume growth requires capital? What if growth required removing something rather than adding something? What information is locked inside the equation growth=money?'",
          "'VC funding is actually bad for most startups' — this is argument, not Challenge",
          "'What if you raised money from customers instead?' — this is an alternative, not Challenge",
        ],
        correctAnswer: 1,
        explanation:
          "Challenge isn't advice, argument, or alternatives — it's surfacing and examining the assumption to free locked information. The assumption 'growth requires capital' locks up thinking about growth-through-subtraction, organic growth, or redefining what 'growth' means entirely.",
      },
      {
        question:
          "You're trying to Challenge assumptions about your relationship with your phone. You write: 'I need my phone with me at all times.' You notice this feels obviously true and hard to challenge. What does that feeling indicate?",
        options: [
          "The assumption is correct and shouldn't be challenged",
          "This is a particularly deeply embedded assumption — the resistance you feel is exactly why it needs challenging",
          "You should pick an easier assumption to start with",
          "The Challenge technique doesn't apply to personal technology habits",
        ],
        correctAnswer: 1,
        explanation:
          "The harder an assumption is to challenge, the more deeply embedded it is, and the more invisible boundaries it creates. The feeling of 'this is obviously true' is the hallmark of an assumption acting like water to a fish. That resistance IS the signal that you've found something worth examining.",
      },
      {
        question:
          "Your company has always sold through distributors. You apply Challenge and surface this assumption. After examination, you realize the distributor model is actually the best approach for your business. Was the Challenge technique wasted?",
        options: [
          "Yes — if the assumption turned out to be correct, you wasted time",
          "No — you now hold the assumption consciously instead of unconsciously, which means you'll notice faster when conditions change and the assumption no longer holds",
          "Partially — you should only challenge assumptions you suspect are wrong",
          "No, but only because the exercise might have revealed adjacent insights",
        ],
        correctAnswer: 1,
        explanation:
          "A challenged assumption that survives examination is now held consciously rather than invisibly. This is enormously valuable — you've gone from 'this is just how things are' to 'we choose this because X, and if X changes, we'll notice.' Challenge transforms unconscious constraints into conscious choices.",
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
          "You find a great apartment — good price, nice area, reasonable commute. You're ready to sign the lease. A lateral thinker would:",
        options: [
          "Sign immediately before someone else takes it",
          "Set a quota: 'I must consider at least 5 fundamentally different living arrangements before deciding' — co-living, house-hacking, remote-and-relocate, van-dwelling, negotiating remote work to live anywhere",
          "Compare it to 2-3 similar apartments in the same area",
          "Sleep on it for a night and see how you feel",
        ],
        correctAnswer: 1,
        explanation:
          "Comparing similar apartments is vertical thinking — refining within the same category. A lateral thinker deliberately generates fundamentally different alternatives, even after finding something adequate. The quota forces you past the comfortable stopping point.",
      },
      {
        question:
          "Your team found a solution to a bug: add input validation. It works. Everyone's ready to move on. You say 'Wait — let's generate 4 more alternatives.' A teammate responds: 'Why waste time? We have a fix.' What's the strongest counter-argument?",
        options: [
          "'Because the boss said we should explore more options'",
          "'Because the first adequate solution is rarely the best restructuring of the information — there may be a solution that prevents the entire category of bug, not just this instance'",
          "'Because more options means less risk'",
          "'Because brainstorming is good for team morale'",
        ],
        correctAnswer: 1,
        explanation:
          "The key insight from de Bono: being satisfied with an adequate solution is the biggest enemy of a brilliant one. Input validation fixes THIS bug; but continuing might reveal an architectural change that eliminates the entire class of bugs. The adequate answer blocks the better one.",
      },
      {
        question:
          "You're planning your career development for next year. You write down: '1. Take an online course.' Then you stop. What just happened?",
        options: [
          "You identified the most logical first step — good work",
          "Your brain found the first adequate-sounding answer and stopped searching — the hallmark of vertical thinking. You haven't actually generated alternatives.",
          "One good plan is better than many mediocre ones",
          "You should research which course before generating alternatives",
        ],
        correctAnswer: 1,
        explanation:
          "This is the trap de Bono warns about: the brain's natural tendency to stop at the first workable answer. 'Take a course' is the obvious, safe answer. You haven't considered: build a project, find a mentor, teach others, switch roles temporarily, contribute to open source, write publicly. The first idea isn't wrong — it's just blocking better ones.",
      },
      {
        question:
          "You set a quota of 5 alternatives for how to exercise more. You generate: 1) Gym, 2) Running, 3) Swimming, 4) Cycling, 5) Yoga. Have you truly applied the Alternatives technique?",
        options: [
          "Yes — you generated 5 different options",
          "No — these are 5 variations within the same frame ('scheduled exercise sessions'). True alternatives would include restructuring: walk to work, standing desk, active commute, gamified movement, exercise-integrated socializing",
          "Yes, but you should add a 6th for safety",
          "No — you should have evaluated each one before generating more",
        ],
        correctAnswer: 1,
        explanation:
          "Five flavors of the same approach isn't generating alternatives — it's varying within a fixed frame. De Bono's technique demands fundamentally different ways of looking at the situation. 'Gym vs. running' is like choosing between similar apartments. 'Scheduled exercise vs. restructuring life so movement is built in' is a genuine alternative.",
      },
      {
        question:
          "You notice that whenever you face a decision, you instinctively Google 'best X for Y' and go with the top recommendation. What does the Alternatives technique reveal about this habit?",
        options: [
          "Nothing wrong — leveraging expert opinions is efficient",
          "You're consistently outsourcing the generation phase to someone else's adequate answer, which means you're never finding solutions that are specifically brilliant for YOUR unique situation",
          "You should Google more sources for a better answer",
          "This only matters for big decisions, not small ones",
        ],
        correctAnswer: 1,
        explanation:
          "Google gives you the most popular adequate answer — which is the exact opposite of generating alternatives. For important decisions, this habit guarantees you'll always land on the same solution everyone else has, never discovering the arrangement that's uniquely perfect for your specific circumstances.",
      },
      {
        question:
          "De Bono says the Alternatives technique is 'the core of creative thinking.' In your DAILY life, which scenario most reveals its absence?",
        options: [
          "Eating at the same 3 restaurants every week — your brain found adequate options and stopped searching",
          "Wearing the same style of clothes — personal preference, not a lateral thinking problem",
          "Using the same route to work — you've already optimized the commute",
          "Watching the same genre of shows — entertainment doesn't require lateral thinking",
        ],
        correctAnswer: 0,
        explanation:
          "All four could be examples, but eating at the same restaurants is the purest case: you found adequate options, stopped generating, and now live inside that tiny solution space. The Alternatives technique applied here wouldn't just find more restaurants — it would ask: what are fundamentally different ways to eat? Cook, meal-swap with neighbors, food adventures, themed weekly experiments.",
      },
      {
        question:
          "A friend asks for advice on their failing business. You immediately think of 3 things they should do. Before offering your advice, the Alternatives technique would have you:",
        options: [
          "Keep your advice to yourself until they ask",
          "Recognize that your 3 ideas came from YOUR patterns, set a quota of 10 fundamentally different framings of their situation, and only then discuss — because your instinctive answers may be blocking a framing that fits THEIR reality",
          "Research what successful businesses in their industry do",
          "Ask them what they've already tried so you don't repeat ideas",
        ],
        correctAnswer: 1,
        explanation:
          "Your instant advice comes from YOUR established patterns, not theirs. The Alternatives technique demands you push past your first adequate framings. Maybe they don't need to 'fix' the business — maybe they need to pivot, merge, open-source it, turn it into a nonprofit, or let it fail gracefully. Your 3 ideas might be 3 flavors of the same assumption.",
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
        question:
          "You're frustrated with how slow your team's code reviews are. You apply Reversal: 'Instead of reviewers checking the author's code, the author checks the reviewers' understanding.' This leads you to think of:",
        options: [
          "Eliminating code reviews entirely",
          "Having authors write comprehension tests for their PR — if a reviewer can't pass them, the code isn't clear enough. This shifts responsibility for clarity to the author.",
          "Making code reviews optional",
          "Rotating who does reviews",
        ],
        correctAnswer: 1,
        explanation:
          "The reversal ('author tests reviewers') is a vehicle that takes you to a new place: what if clarity was the author's responsibility, not the reviewer's effort? This leads to a practical idea — authors writing comprehension checks — that you'd never reach by thinking 'how do we speed up reviews.'",
      },
      {
        question:
          "You reverse 'students learn from teachers' to 'teachers learn from students.' Someone says 'That's actually how it should be — student-centered learning!' Why is this response missing the point of Reversal?",
        options: [
          "Because student-centered learning is a bad idea",
          "Because they treated the reversal as a destination (a correct philosophy to adopt) rather than a vehicle to reach new ideas — the reversal should trigger movement to practical insights, not become the final answer",
          "Because the reversal wasn't extreme enough",
          "Because Reversal doesn't work for education",
        ],
        correctAnswer: 1,
        explanation:
          "Reversal is a vehicle, not a destination. Adopting the reversed statement as your new belief misses the point entirely. You should use 'teachers learn from students' to MOVE: what would a school look like if teaching ability was measured by what teachers learned? What systems would need to change? The movement generates ideas; the reversal itself is just the starting position.",
      },
      {
        question:
          "You're trying to save money. You reverse it: 'I should spend MORE money.' This feels absurd. What's the correct next step?",
        options: [
          "Discard the reversal — spending more is clearly wrong",
          "Actually spend more money as an experiment",
          "Use it as a vehicle: spending more on WHAT would actually save money long-term? Better food (fewer medical bills), quality tools (fewer replacements), education (higher earning). The reversal reveals that some spending IS saving.",
          "Reverse it again to get back to saving",
        ],
        correctAnswer: 2,
        explanation:
          "The reversal doesn't need to be realistic — it's a provocative rearrangement. 'Spend more' as a vehicle reveals the category error in treating all spending as the enemy of saving. Some spending is investment. You can't reach this insight by thinking harder about cutting costs.",
      },
      {
        question:
          "In your relationship, you feel like you're always the one initiating plans. You apply Reversal: 'My partner always initiates, and I never do.' What insight does this vehicle potentially carry you to?",
        options: [
          "You should stop initiating to force your partner to start",
          "The reversal is a vehicle: what would need to be true for your partner to WANT to initiate? Maybe they need different types of activities, less pressure, more lead time, or smaller commitments. The reversal shifts your focus from 'they should do more' to 'what conditions enable their initiative?'",
          "You should tell your partner about the Reversal technique",
          "Relationships can't be analyzed with lateral thinking",
        ],
        correctAnswer: 1,
        explanation:
          "The reversal takes you from the complaint ('I always initiate') to a constructive new vantage point ('what conditions would make initiation natural for them?'). This is a fundamentally different question that leads to different solutions — and you couldn't have reached it by brooding on the original framing.",
      },
      {
        question:
          "Your company's customer support is overwhelmed with tickets. You reverse: 'Customers should solve OUR problems.' This leads to which genuinely practical insight?",
        options: [
          "Customers should pay for support",
          "Community forums where customers help each other, beta testing programs where customers find bugs for you, customer advisory boards — making customers active participants rather than passive complainants",
          "The reversal doesn't work here — support is always company-to-customer",
          "Hire more support staff",
        ],
        correctAnswer: 1,
        explanation:
          "The reversal 'customers solve our problems' is a vehicle to: community-driven support, customer-as-tester programs, and advisory boards. These are practical, proven strategies that you're unlikely to discover by thinking 'how do we handle more tickets faster' — because that question keeps you in the same direction.",
      },
      {
        question:
          "You apply Reversal to 'I read books to gain knowledge' → 'Books read me to gain knowledge.' This feels nonsensical. A friend says 'That doesn't even make sense.' What's your response?",
        options: [
          "They're right — some reversals are too absurd to be useful",
          "'It doesn't need to make sense — it's a vehicle. Books reading ME suggests: what if I chose books based on what they reveal about my reactions, biases, and blind spots? Reading becomes self-diagnosis, not just information intake.'",
          "Try a different, more sensible reversal",
          "Agree and move on to a different technique",
        ],
        correctAnswer: 1,
        explanation:
          "The reversal doesn't need to be realistic. 'Books read me' as a vehicle leads to: choosing books to test your reactions, using reading as a mirror for self-knowledge, tracking which ideas trigger resistance (those are your hidden assumptions). This reframes reading from consumption to self-examination.",
      },
      {
        question:
          "You notice you apply Reversal easily at work but never in your personal life. When you try reversing 'I should exercise to be healthy,' you feel resistance. Why?",
        options: [
          "Reversal works better for professional problems",
          "Personal beliefs are more deeply held, making them harder to reverse even temporarily — the resistance itself signals where Reversal would be most valuable, because those are your most rigid patterns",
          "You need more practice with the technique first",
          "Some statements are simply true and shouldn't be reversed",
        ],
        correctAnswer: 1,
        explanation:
          "The resistance to reversing personal beliefs is exactly what makes them the most valuable targets. Work beliefs are somewhat detached; personal beliefs are deeply embedded patterns. 'Exercise should be healthy for me' (reversed) could reveal: what if your exercise routine is actually harming you through stress, injury, or guilt cycles? The rigidity of the pattern is the signal.",
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
        question:
          "During a brainstorm, a junior developer suggests 'What if we just deleted the database and started fresh?' You immediately think 'That's idiotic — we'd lose everything.' What does Suspended Judgment say about your reaction?",
        options: [
          "Your reaction is correct — some ideas are too dangerous to entertain",
          "You just killed a potential chain: 'delete and start fresh' → what if we migrated to a completely different data model? What if we archived everything and rebuilt with only what's actively used? Your instant judgment cut off these paths.",
          "You should pretend to consider it out of politeness",
          "You should implement the suggestion to show respect",
        ],
        correctAnswer: 1,
        explanation:
          "Your snap judgment ('that's idiotic') killed the intermediate step before it could lead anywhere. The idea isn't meant to be the final answer — it's a stepping stone. 'Delete and start fresh' could lead to legitimate insights about data architecture, archival strategies, or schema migration that your judgment blocked.",
      },
      {
        question:
          "You're planning a vacation and your partner says 'Let's go to Antarctica.' You think 'That's impractical and expensive.' You then catch yourself. What does practicing Suspended Judgment look like here?",
        options: [
          "Agree to go to Antarctica to avoid conflict",
          "Say 'Tell me more' and explore: what about Antarctica appeals? Isolation, extreme nature, adventure, unique wildlife? These desires might lead to a trip you'd never have considered — a remote cabin, a wildlife expedition, a sailing trip — that satisfies the underlying want.",
          "Research Antarctica costs to prove it's too expensive",
          "Suggest a compromise destination",
        ],
        correctAnswer: 1,
        explanation:
          "Suspended Judgment doesn't mean accepting the idea — it means delaying evaluation long enough to extract value. 'Antarctica' might be impractical as a literal destination, but the REASONS behind it (isolation, adventure, wildlife) are genuine desires that could lead to a brilliant trip you'd never have planned otherwise.",
      },
      {
        question:
          "You're at a conference and a speaker makes a claim that contradicts everything you know. Your body physically tenses with the urge to argue. A practitioner of Suspended Judgment would:",
        options: [
          "Keep their objection to themselves permanently",
          "Raise their hand and challenge the speaker immediately",
          "Notice the tension as a signal that they're encountering something outside their patterns, and deliberately hold the contradictory idea alongside their current knowledge to see what new connections form — THEN evaluate",
          "Assume the speaker is probably right since they're the expert",
        ],
        correctAnswer: 2,
        explanation:
          "The physical tension is a signal: your pattern system is resisting new information. Suspended Judgment means holding the contradictory idea WITHOUT resolving it yet. This is uncomfortable but productive — the discomfort IS the brain being forced to form new connections. You evaluate later, not never.",
      },
      {
        question:
          "De Bono says 'being right at every step is very different from being right at the end.' In your daily life, which scenario best illustrates this?",
        options: [
          "Taking a 'wrong' career detour that gives you skills leading to your dream job — each individual step looked wrong, but the path was right",
          "Following a recipe exactly and getting a perfect result",
          "Making a plan and executing it without changes",
          "Getting good grades in every class leading to a degree",
        ],
        correctAnswer: 0,
        explanation:
          "A career path that looks 'wrong' at each step but leads somewhere brilliant is exactly de Bono's point. Vertical thinking demands each step be justifiable. Lateral thinking allows 'wrong' intermediate positions because the final destination matters more than the path's logic at every point.",
      },
      {
        question:
          "You're writing an essay and you type a paragraph that feels 'off' — not quite right, maybe even wrong. Your instinct is to delete it immediately. Suspended Judgment would suggest:",
        options: [
          "Delete it — bad writing leads to more bad writing",
          "Keep it, finish the draft, then evaluate — that 'wrong' paragraph might be the seed of your best insight, or it might reveal what you're actually trying to say, which you can only see after the full draft exists",
          "Rewrite it immediately until it's perfect",
          "Save it in a separate document for later",
        ],
        correctAnswer: 1,
        explanation:
          "Deleting 'wrong' paragraphs during the generative phase is premature judgment. That uncomfortable, 'off' paragraph might contain an intermediate step toward your real argument. Many writers discover their thesis in paragraph 4 — but only if they didn't delete the 'wrong' paragraphs 1-3 that led there.",
      },
      {
        question:
          "A friend says 'I practice Suspended Judgment — I never criticize anyone's ideas.' What's wrong with their interpretation?",
        options: [
          "Nothing — that's exactly what it means",
          "Suspended Judgment means DEFERRING evaluation, not ELIMINATING it. Ideas absolutely get judged — just during the selective phase, not the generative phase. Never judging is as dysfunctional as always judging.",
          "They should only avoid criticizing in meetings",
          "They should criticize ideas privately instead of publicly",
        ],
        correctAnswer: 1,
        explanation:
          "Suspended Judgment is NOT 'all ideas are valid.' It's a timing technique: generate first, evaluate later. Your friend has confused deferring judgment with abolishing it. De Bono explicitly warns against this — judgment is essential, just not during idea generation.",
      },
      {
        question:
          "You hear an idea at work that you're 90% sure won't work. You apply Suspended Judgment and explore it. After 10 minutes, you're 95% sure it won't work. Was the technique worthwhile?",
        options: [
          "No — you wasted 10 minutes confirming what you already knew",
          "Only if you found something useful in those 10 minutes",
          "Yes — even confirming an idea won't work through exploration gives you information you didn't have before: WHY it won't work, which boundaries it reveals, and which adjacent ideas it connects to. Plus that 5% of the time, you'd have killed a breakthrough.",
          "It depends on the idea's potential upside",
        ],
        correctAnswer: 2,
        explanation:
          "The 10 minutes aren't wasted even when the idea fails. You now know WHY it fails, which reveals problem boundaries you didn't see before. You may have discovered adjacent ideas. And critically: your 90% confidence means 1 in 10 times, you would have killed a viable idea with premature judgment. That's a terrible batting average for a habit.",
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
        question:
          "You're trying to reduce meeting times. You use the Intermediate Impossible: 'Meetings should have no speaking.' You know this is wrong. What do you do with it?",
        options: [
          "Discard it — meetings require speaking by definition",
          "Use it as a stepping stone: what if the FIRST 10 minutes were silent (everyone reads the doc)? What if decisions were made via written votes? What if the meeting was async text first, with only unresolved items discussed live? The impossible idea reveals how much of meetings is unnecessary speech.",
          "Implement silent meetings as an experiment",
          "Moderate the idea to 'meetings should have less speaking'",
        ],
        correctAnswer: 1,
        explanation:
          "The impossible idea is a stepping stone, not a destination. 'No speaking in meetings' is obviously wrong, but it forces you to question which parts of meetings ACTUALLY require speech. Amazon's 'silent start' (reading a memo before discussion) is a real-world idea that lives near this impossible one.",
      },
      {
        question:
          "You're stuck on a personal finance problem. You think: 'What if I had NEGATIVE money — what if spending increased my wealth?' You know this is impossible. Why is this BETTER than thinking 'What if I earned 10% more?'",
        options: [
          "It isn't — earning 10% more is a practical goal",
          "Because the impossible idea takes you to territory that logical thinking can't reach: cashback systems, tax-deductible spending, spending on appreciating assets, business expense write-offs. 'Earn 10% more' keeps you in the same pattern; 'spending = earning' breaks it.",
          "Because impossible ideas are always better than practical ones",
          "Because it's more creative and creativity is always good",
        ],
        correctAnswer: 1,
        explanation:
          "In vertical thinking, every step must be correct, so you think in safe increments ('earn more'). The Intermediate Impossible deliberately passes through a wrong step ('spending increases wealth') to reach ideas that are both practical AND unreachable by logic: strategic spending, tax optimization, investment-as-expense.",
      },
      {
        question:
          "De Bono says the MOST valuable intermediate impossibles often break taboos — ideas that are immoral, illegal, or socially unacceptable. In a work context, why is this uncomfortable but important?",
        options: [
          "Because shocking people gets their attention",
          "Because taboo ideas push thinking the furthest from established patterns — if an idea is comfortable, it's probably not far enough from your existing thinking to generate truly new connections",
          "Because taboo ideas are usually the right answer in disguise",
          "Because breaking taboos builds team courage",
        ],
        correctAnswer: 1,
        explanation:
          "The distance from established patterns is what matters. Comfortable impossibles ('what if we had unlimited budget') barely move you. Taboo impossibles ('what if we helped our competitors succeed') throw you so far from normal thinking that genuinely new ideas become visible from that distant vantage point.",
      },
      {
        question:
          "You're trying to write more consistently. You use the Intermediate Impossible: 'What if I had to write something SO BAD that no one would ever read it?' What practical insight might this stepping stone lead to?",
        options: [
          "You should write poorly on purpose — bad writing is better than no writing",
          "The impossible idea reveals that perfectionism is the real blocker. If the goal is deliberately terrible writing, there's no performance anxiety — and once you start, the actual writing is rarely as bad as the fear. This could lead to: permission-to-be-bad first drafts, timed freewriting, separating generation from editing.",
          "You should lower your writing standards permanently",
          "This doesn't apply — writing quality matters",
        ],
        correctAnswer: 1,
        explanation:
          "The impossible idea ('write something no one would read') is a stepping stone that illuminates the REAL problem: performance anxiety and perfectionism. You'd never reach this insight by thinking 'how do I write more' because that question reinforces the same pressure that's blocking you.",
      },
      {
        question:
          "A coworker uses Intermediate Impossible: 'What if our product was invisible?' After some movement, they arrive at 'What if our product seamlessly integrated into existing workflows so users barely noticed it?' Another coworker says 'You could've just said that directly.' What's wrong with this criticism?",
        options: [
          "They're right — you should skip to the practical idea",
          "They couldn't have 'just said that directly' — the practical idea was INVISIBLE from the starting position. It only became visible from the vantage point of the impossible idea. You cannot reach certain ideas by logical steps alone.",
          "The coworker is just being rude",
          "The intermediate impossible was too tame in this case",
        ],
        correctAnswer: 1,
        explanation:
          "This is the core principle: some destinations require passing through impossible territory. 'Seamless integration' seems obvious AFTER you've heard it, but it was unreachable from the starting point of 'how do we improve our product.' The impossible idea ('invisible product') was the only path to that particular vantage point. Hindsight makes lateral jumps look like logical ones.",
      },
      {
        question:
          "You're feeling stuck in your social life — same routines, same conversations. You try Intermediate Impossible: 'What if I could only communicate through questions for an entire week?' This is impractical, but as a stepping stone it leads you to realize:",
        options: [
          "Questions are annoying and you should make more statements",
          "Most of your conversations are you waiting to talk rather than genuinely exploring others' thinking — the impossible constraint reveals your default pattern of declarative, transactional communication",
          "You should actually try this experiment literally",
          "Social life doesn't require lateral thinking techniques",
        ],
        correctAnswer: 1,
        explanation:
          "The impossible constraint ('only questions') is a stepping stone that reveals an invisible pattern: your conversations might be mostly declarative exchanges rather than genuine exploration. You'd never discover this by thinking 'how do I improve my social life' — that question leaves the communication pattern itself unexamined.",
      },
      {
        question:
          "You're in a heated argument with someone and you're certain you're right. You remember the Intermediate Impossible technique. How could you apply it IN THE MOMENT?",
        options: [
          "You can't — lateral thinking techniques are for brainstorming, not arguments",
          "Tell the other person about de Bono to win the argument with a better framework",
          "Deliberately think: 'What if I'm completely wrong and they're completely right?' — not because it's true, but because this impossible (to your brain) stepping stone might reveal what they're seeing that you literally cannot see from your current position",
          "Walk away and think about it later using the technique",
        ],
        correctAnswer: 2,
        explanation:
          "Deliberately assuming you're wrong (when you 'know' you're right) is an Intermediate Impossible applied in real-time. It's a stepping stone that forces you to see from their position — and from that vantage point, you often discover legitimate aspects of their view that were completely invisible while you were defending your position.",
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
        question:
          "You're unhappy with your job. You try to analyze WHY: salary, management, commute. A lateral thinker would say you're doing analysis, not Fractionation. What's the difference?",
        options: [
          "There is no difference — both break things into parts",
          "Analysis tries to find the TRUE components of your unhappiness; Fractionation deliberately CREATES different divisions — emotional vs. practical, what-you-do vs. who-you-do-it-with, controllable vs. uncontrollable — and each division reveals different insights",
          "Fractionation would look at your job from others' perspectives",
          "Fractionation would focus on the smallest details",
        ],
        correctAnswer: 1,
        explanation:
          "Analysis asks 'what are the real reasons?' Fractionation asks 'what are DIFFERENT WAYS to divide this?' There's no single correct decomposition. Salary/management/commute is ONE way to slice it. Energy-giving vs. energy-draining, chosen vs. inherited, growth vs. maintenance — each cut creates different raw material for recombination.",
      },
      {
        question:
          "You fractionate 'a conversation' into: words + tone + timing + silence + body language + context + power dynamics + shared history. Then you fractionate it DIFFERENTLY as: information exchange + relationship maintenance + status negotiation + entertainment + thinking-out-loud. Why do BOTH fractionations?",
        options: [
          "To find which one is correct",
          "Because different divisions yield different insights — the first reveals the MECHANICS of conversation, the second reveals the FUNCTIONS. Recombining across both creates possibilities neither division alone could generate.",
          "The second one is better — always use functional fractionation",
          "To be thorough — more analysis is always better",
        ],
        correctAnswer: 1,
        explanation:
          "Multiple different divisions are the entire point of Fractionation. Each slicing reveals different aspects. Crossing mechanics with functions creates questions like: 'How does silence serve status negotiation?' or 'What would a conversation look like if we separated thinking-out-loud from information exchange?' These are unreachable from either division alone.",
      },
      {
        question:
          "Your morning routine feels inefficient. You fractionate it as: hygiene, fuel (eating), preparation (dressing/packing), transition (commute), and activation (getting mentally ready). A colleague says 'You forgot checking your phone.' What should you do?",
        options: [
          "Add 'phone check' to the list — the fractionation was incomplete",
          "Don't add it — recognize that 'checking phone' is analysis (finding what you actually do). Instead, notice that phone checking CUTS ACROSS your fractionation: it's fuel (information), it's activation (mental ramp-up), it's hygiene (social maintenance). This cross-cutting reveals why it's so hard to eliminate.",
          "Phone checking should be its own separate activity",
          "Redo the fractionation from scratch",
        ],
        correctAnswer: 1,
        explanation:
          "Your fractionation CREATED categories (hygiene, fuel, preparation, transition, activation). Phone checking is an analytical observation that doesn't fit neatly — which is the insight! It reveals that phone checking serves multiple functions simultaneously, which is why 'just stop checking your phone' never works. You have to replace each FUNCTION it serves.",
      },
      {
        question:
          "You want to improve 'how you learn new things.' You create one fractionation: input (reading, watching) + processing (note-taking, reflecting) + output (teaching, building) + feedback (testing, peer review). How do you extract maximum value from this?",
        options: [
          "Optimize each component individually",
          "Recombine the parts in unexpected ways: What if feedback came BEFORE input? (Pre-test to identify gaps before studying.) What if output WAS processing? (Build something immediately instead of taking notes.) The raw material from fractionation enables rearrangements that the original pattern prevents.",
          "Add more components until the list is complete",
          "Rank the components by importance and focus on the top one",
        ],
        correctAnswer: 1,
        explanation:
          "Fractionation provides raw material for unexpected recombination. Optimizing each part individually is just analysis. The real power is rearranging: what if you reversed the order? Combined two parts? Eliminated one? Each recombination creates a different learning approach that's invisible from the original pattern.",
      },
      {
        question:
          "A manager says 'Our team has a communication problem.' You want to apply Fractionation but they want analysis. How do you explain the difference in terms they'd understand?",
        options: [
          "'Analysis will tell you what's broken — fractionation won't'",
          "'Analysis asks: what are the real causes of our communication problem? Fractionation asks: what are 5 completely different ways to slice communication in our team? Each slice gives us different material to work with — and different solutions that the analytical slice can't reveal.'",
          "'Fractionation is just a fancy word for brainstorming'",
          "'They're basically the same — use whichever term you prefer'",
        ],
        correctAnswer: 1,
        explanation:
          "The manager needs to understand that analysis seeks truth ('what's really wrong?') while fractionation seeks different divisions ('what are all the ways we COULD slice this?'). Analysis might find 'poor email etiquette.' Fractionation might reveal that communication serves different functions (alignment, bonding, accountability) and the team only optimizes for one.",
      },
      {
        question:
          "You fractionate 'a friendship' into these parts: shared experiences + mutual vulnerability + consistent contact + shared values + enjoyment. You notice that one friendship feels hollow despite having all components. What does Fractionation reveal?",
        options: [
          "Your fractionation was wrong — try a different one",
          "This IS the insight: your current fractionation doesn't capture what's missing. Try a different division: challenge + growth + acceptance + authenticity + reciprocity. The hollow friendship might be missing 'challenge' or 'authenticity' — components invisible in your first fractionation.",
          "Some friendships are just hollow and can't be fixed",
          "You need to invest more time in the friendship",
        ],
        correctAnswer: 1,
        explanation:
          "When one fractionation doesn't explain what you're experiencing, that's a signal to create a DIFFERENT division. There's no single correct decomposition. The second fractionation might reveal the missing element (like 'challenge' or 'authenticity') that was completely invisible in the first. This is why multiple divisions matter.",
      },
      {
        question:
          "You're redesigning your workspace. Instead of analyzing 'what's wrong with the current setup,' you fractionate 'a workspace' three different ways. Which set of fractionations shows the deepest understanding of the technique?",
        options: [
          "By furniture type: desk, chair, shelves, lighting — this is just an inventory",
          "Three cuts: (1) By energy: zones for focus, collaboration, and rest. (2) By sense: visual environment, acoustic environment, tactile environment, olfactory environment. (3) By time: morning workspace needs, afternoon needs, evening needs. Then recombine across all three.",
          "By room: living room, kitchen, bedroom — this is just spatial division",
          "By cost: expensive items, cheap items, free items — this is just budgeting",
        ],
        correctAnswer: 1,
        explanation:
          "Option B creates three genuinely different divisions (energy, sense, time) and recombines across them. 'What does a high-focus zone sound like in the morning vs. evening?' generates insights that no single division could produce. Options A, C, and D are analysis (finding 'true' categories), not Fractionation (creating categories).",
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
        question:
          "Every time you think about getting healthier, you think about diet and exercise. You've been thinking this way for years. A practitioner of the Dominant Ideas technique would say:",
        options: [
          "'Diet and exercise are the proven foundations of health — there's nothing wrong with this focus'",
          "'The dominant idea that health = diet + exercise is acting as an invisible cage. It prevents you from seeing: sleep optimization, stress reduction, social connection, environmental design, hormonal health, mental health — entire domains of health that are invisible while the dominant idea controls your perception.'",
          "'You should try a different diet or exercise program'",
          "'Health is subjective — don't worry about it'",
        ],
        correctAnswer: 1,
        explanation:
          "The dominant idea 'health = diet + exercise' isn't wrong — it's INVISIBLE. It organizes all your thinking about health without you noticing, making other important factors (sleep, stress, social connection, environment) invisible. You can't escape a cage you can't see.",
      },
      {
        question:
          "Your company's dominant idea is 'we need to grow.' Every decision is filtered through this lens: hire more, sell more, expand. You suggest examining this dominant idea. A board member says 'Of course we need to grow — that's just how business works.' What does their response reveal?",
        options: [
          "They're right — growth is a fundamental business requirement",
          "Their inability to even QUESTION the idea proves how deeply it's embedded — like a conspiracy theory, the dominant idea explains away all challenges and makes alternatives unthinkable. Companies that optimize for sustainability, profitability-per-employee, or strategic contraction are invisible to this board.",
          "You should back down — this isn't the right audience for lateral thinking",
          "Growth is too important to question right now",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono compares dominant ideas to paranoid thinking — everything supports the fixed belief, and contradictions are explained away. 'That's just how business works' is the dominant idea defending itself. The board literally cannot see alternatives (sustainable steady-state, strategic shrinking, lifestyle business models) because the growth narrative makes them invisible.",
      },
      {
        question:
          "You're trying to identify the dominant idea in how you approach relationships. You write down several candidates: 'relationships require effort,' 'communication is key,' 'you have to compromise.' Which is most likely the dominant idea and why?",
        options: [
          "'Communication is key' — because it's the most commonly repeated advice",
          "The most likely dominant idea is the one you CAN'T write down — it's so fundamental you don't even see it. Something like 'a relationship is between exactly two people,' 'love should be unconditional,' or 'a good relationship feels happy.' The ones you listed are VISIBLE beliefs, not the invisible cage.",
          "'You have to compromise' — because it creates the most friction",
          "All three are equally dominant",
        ],
        correctAnswer: 1,
        explanation:
          "If you can easily write an idea down, it's probably not the dominant one — dominant ideas are invisible precisely because they're so foundational you don't notice them. They're like 'relationships should make you happy' — try questioning THAT and notice how your brain resists. The visible beliefs you listed live INSIDE the invisible cage.",
      },
      {
        question:
          "You notice that every time your team discusses product strategy, the conversation inevitably loops back to 'what do competitors do?' You suspect this is a dominant idea at work. How do you test this?",
        options: [
          "Ask the team to stop looking at competitors for a month",
          "Write down 'our strategy is defined relative to competitors' and propose a meeting where you explicitly try to discuss strategy WITHOUT referencing any competitor. The difficulty the team has in doing this reveals how strongly the dominant idea controls their thinking.",
          "Research what competitors are doing more thoroughly",
          "Suggest the team do a SWOT analysis instead",
        ],
        correctAnswer: 1,
        explanation:
          "Making the dominant idea explicit ('our strategy is competitor-relative') and then trying to think outside it is the technique. If the team can't discuss strategy without saying 'but what about [competitor],' the dominant idea is confirmed. The inability to think without it is the proof of its power.",
      },
      {
        question:
          "In your personal finance thinking, which of these is MOST likely an invisible dominant idea that's caging your financial decisions?",
        options: [
          "'I should save more money' — you're aware of this, so it's not invisible",
          "'Financial success means accumulating wealth' — this organizes ALL your financial decisions (earning, saving, investing) without you noticing, and makes alternative framings invisible: financial success as optionality, as time-freedom, as resilience, as generosity capacity",
          "'Investing is risky' — this is a visible fear, not an invisible cage",
          "'I don't earn enough' — this is a conscious complaint, not an invisible frame",
        ],
        correctAnswer: 1,
        explanation:
          "The dominant idea is the one you don't realize is organizing your thinking. 'Saving more' and 'earning more' are conscious thoughts that live INSIDE the dominant frame of 'wealth accumulation = success.' If you made that frame visible, you might discover your real goal is time-freedom — and the wealth-accumulation strategy might not even be the best path to it.",
      },
      {
        question:
          "Your friend is stuck in a cycle of toxic relationships. They keep trying to 'find a better partner.' From the Dominant Ideas perspective, what might be happening?",
        options: [
          "They have bad luck with partners",
          "The dominant idea 'the problem is finding the right person' acts as an invisible cage — it makes them unable to see that the pattern might be about their own attachment style, their selection criteria, or their behavior within relationships. Every new relationship 'confirms' the dominant idea: 'this person wasn't right either.'",
          "They need to try different dating approaches",
          "They should take a break from dating",
        ],
        correctAnswer: 1,
        explanation:
          "Like paranoid thinking, the dominant idea 'I just need to find the right person' explains away every failure ('they weren't right') and makes self-examination invisible. Every bad relationship CONFIRMS the belief rather than challenging it. The first step is making this dominant idea visible — then your friend can see the other factors that were invisible inside the cage.",
      },
      {
        question:
          "You've successfully identified a dominant idea in your thinking: 'Productivity = doing more things.' You write it down. Now what?",
        options: [
          "Replace it with a better idea: 'Productivity = doing fewer things better'",
          "Simply making it visible is the first step — but don't rush to REPLACE it. Instead, deliberately think OUTSIDE it: what would 'productive' mean if it wasn't about quantity? Explore: productivity as energy management, as impact-per-action, as elimination, as recovery. Let the exploration generate possibilities before committing to a new frame.",
          "Delete the idea and try not to think about quantity anymore",
          "Read books about productivity to find the 'right' definition",
        ],
        correctAnswer: 1,
        explanation:
          "The technique isn't 'find and replace' — swapping one dominant idea for another just builds a new cage. The goal is to make the dominant idea VISIBLE and then explore the space OUTSIDE it. Exploring multiple alternative frames before committing ensures you're not just trading one invisible cage for another.",
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
          "You're struggling with work-life balance. Someone says 'Think of it like a seesaw — when one side goes up, the other goes down.' This analogy feels right but a lateral thinker would say:",
        options: [
          "The seesaw analogy is perfect and you should use it to guide decisions",
          "The seesaw analogy is actually HARMFUL here — it locks you into zero-sum thinking (more work = less life). An imperfect analogy like 'work-life balance is like composting' forces harder thinking: what if work and life could feed each other, decompose into something richer, require the right mix rather than equal weight?",
          "All analogies about work-life balance are equally useful",
          "You should find a more accurate analogy that perfectly captures the relationship",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono warns that 'perfect' analogies can be dangerous because they feel so right that you stop thinking. The seesaw analogy embeds zero-sum thinking. An imperfect analogy ('composting') forces you to stretch — and in that stretching, you discover insights (work and life can enrich each other) that the 'perfect' analogy actively hides.",
      },
      {
        question:
          "You need to restructure your team. You use the analogy 'a team is like a jazz band.' A colleague says 'No, a team is like an orchestra — there's a conductor and everyone plays their part.' How do you use BOTH analogies laterally?",
        options: [
          "Pick whichever analogy fits better and discard the other",
          "Debate which analogy is more accurate",
          "Map BOTH onto your team: the jazz analogy reveals what's missing (improvisation, taking turns leading, listening as a skill). The orchestra analogy reveals what works (structure, coordination, a shared score). The TENSION between the two analogies generates the richest insights.",
          "Neither analogy is useful — teams aren't musical",
        ],
        correctAnswer: 2,
        explanation:
          "In lateral thinking, you don't use analogy to prove which comparison is 'right' — you use it to generate perspectives. Two different analogies applied to the same problem create tension, and that tension is where the best insights live. Where does your team need jazz? Where does it need orchestration? That's the real question.",
      },
      {
        question:
          "You apply the analogy 'my career is like a river' and generate insights: go with the flow, find the path of least resistance, eventually reach the ocean. A lateral thinker would critique this approach because:",
        options: [
          "Rivers are too simple to model careers",
          "You only explored the OBVIOUS attributes of a river. What about: rivers erode their banks over time (career burnout), rivers have underground tributaries (hidden influences on your career), rivers can be dammed (what's blocking your flow?), rivers flood when they can't be contained (what happens when you suppress career desires?). You stayed on the surface of the analogy.",
          "Career analogies should use human examples, not nature",
          "You should have used a more relevant analogy",
        ],
        correctAnswer: 1,
        explanation:
          "Just like Random Entry, the power of analogy comes from exploring MULTIPLE attributes, not just the obvious ones. 'Go with the flow' is the surface-level, comfortable mapping. The deeper, less obvious attributes (erosion, underground tributaries, damming, flooding) force genuinely unfamiliar thinking about your career.",
      },
      {
        question:
          "You're trying to improve your eating habits. You create an analogy: 'My relationship with food is like my relationship with social media.' Where does this imperfect analogy generate the most value?",
        options: [
          "In proving that food and social media are similar addictions",
          "In the IMPERFECTIONS: food is physically necessary but social media isn't — so why do I treat both as compulsive? Social media has algorithmic manipulation — does the food industry use similar tactics? I can quit social media cold-turkey but not food — so what strategies work for things you can't quit entirely? The gaps between the analogy force the hardest, most useful thinking.",
          "In finding a 12-step program that works for both",
          "The analogy doesn't work — food and social media are too different",
        ],
        correctAnswer: 1,
        explanation:
          "De Bono says imperfect analogies are often MORE valuable because the effort of connecting a loose analogy forces unfamiliar thinking. The places where 'food' and 'social media' DON'T match are exactly where the insights hide. The gaps and mismatches force you to think about food in ways that a 'perfect' food analogy never would.",
      },
      {
        question:
          "In a meeting, you say 'Managing this project is like herding cats.' Everyone laughs and nods. From a lateral thinking perspective, what just happened?",
        options: [
          "You made a good analogy that captures the situation perfectly",
          "You used a cliche analogy that CONFIRMS existing perception rather than generating new thinking. Everyone nodded because it matched their existing view. An analogy that makes people uncomfortable or confused ('managing this project is like fermenting kimchi') would be far more generative.",
          "Humor is a valid lateral thinking technique",
          "The analogy worked because it built team rapport",
        ],
        correctAnswer: 1,
        explanation:
          "When everyone nods at an analogy, it means it confirmed existing patterns rather than breaking them. De Bono distinguishes analogy for argument (proving similarity — 'see, it IS like herding cats') from analogy for lateral thinking (generating new perspectives). A comfortable, familiar analogy generates zero new thinking.",
      },
      {
        question:
          "You want to rethink how you structure your day. You choose the analogy 'my day is like a meal.' How do you apply this for MAXIMUM lateral thinking value?",
        options: [
          "Breakfast = morning work, lunch = midday break, dinner = evening wind-down — this is just relabeling",
          "Map MULTIPLE attributes of a meal: appetizer (small warm-up tasks), main course (deep work), palette cleanser (context switches), dessert (rewarding activities), courses are SEQUENCED for experience not just nutrition (arrange tasks for energy flow, not just priority), you wouldn't eat dessert first every day (stop doing email first). Then note where the analogy BREAKS and explore those gaps.",
          "Eat at regular intervals to maintain energy through the day",
          "The analogy proves you should have three focused work blocks like three meals",
        ],
        correctAnswer: 1,
        explanation:
          "Maximum value comes from exploring multiple attributes AND the places where the analogy breaks. 'Courses are sequenced for experience' is a deep insight — what if you sequenced tasks for ENERGY FLOW rather than priority? Where the analogy breaks (you can't 'save leftovers' of unfinished work the same way) reveals other insights about work's perishability.",
      },
      {
        question:
          "You read that 'the brain is like a computer.' You then read that 'the brain is like a garden.' Then: 'the brain is like a committee.' Which approach to these analogies shows the deepest understanding of lateral thinking?",
        options: [
          "Determine which analogy is most scientifically accurate and use that one",
          "Each analogy makes different aspects of the brain visible: 'computer' reveals processing and memory but hides emotion; 'garden' reveals growth and cultivation but hides speed; 'committee' reveals conflict and consensus but hides neuroplasticity. Using ALL THREE while noting what each one HIDES is the lateral thinking approach.",
          "Combine all three into one super-analogy",
          "None are accurate enough to be useful",
        ],
        correctAnswer: 1,
        explanation:
          "Every analogy simultaneously reveals AND hides. The lateral thinker's skill is noting what each analogy makes visible AND invisible, then using the gaps as sources of insight. 'The brain is a computer' hides emotion — that hiding itself is an insight about how computational thinking might be missing something about how you actually make decisions.",
      },
    ],
  },
];
