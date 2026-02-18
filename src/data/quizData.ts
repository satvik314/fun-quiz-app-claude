export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: "space",
    name: "Cosmic Chaos",
    icon: "🚀",
    description: "Blast off into the weird & wonderful universe",
    questions: [
      {
        question: "What planet rains diamonds?",
        options: ["Mars", "Neptune", "Venus", "Mercury"],
        correctAnswer: 1,
      },
      {
        question: "How long is one day on Venus?",
        options: [
          "24 hours",
          "Longer than its year",
          "12 hours",
          "Exactly 7 Earth days",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the Sun's core temperature reach?",
        options: [
          "1 million °C",
          "15 million °C",
          "100 million °C",
          "500,000 °C",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which moon in our solar system has active volcanoes?",
        options: ["Europa", "Titan", "Io", "Ganymede"],
        correctAnswer: 2,
      },
      {
        question: "What is a 'neutron star' made of?",
        options: [
          "Pure iron",
          "Compressed neutrons",
          "Dark matter",
          "Helium gas",
        ],
        correctAnswer: 1,
      },
      {
        question: "How many Earths could fit inside the Sun?",
        options: ["100", "1,300", "1,300,000", "13,000"],
        correctAnswer: 2,
      },
      {
        question: "What colour is a sunset on Mars?",
        options: ["Red", "Orange", "Blue", "Green"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "animals",
    name: "Creature Feature",
    icon: "🦑",
    description: "The animal kingdom's strangest facts",
    questions: [
      {
        question: "Which animal can survive in the vacuum of space?",
        options: ["Cockroach", "Tardigrade", "Jellyfish", "Scorpion"],
        correctAnswer: 1,
      },
      {
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "What animal sleeps with one eye open?",
        options: ["Cat", "Dolphin", "Owl", "Snake"],
        correctAnswer: 1,
      },
      {
        question: "Which bird can fly backwards?",
        options: ["Eagle", "Parrot", "Hummingbird", "Penguin"],
        correctAnswer: 2,
      },
      {
        question: "What is a group of flamingos called?",
        options: ["A flock", "A flamboyance", "A flutter", "A parade"],
        correctAnswer: 1,
      },
      {
        question: "Which animal has the strongest bite force?",
        options: ["Great White Shark", "Crocodile", "Hippo", "Lion"],
        correctAnswer: 1,
      },
      {
        question: "How long can a snail sleep without waking?",
        options: ["1 week", "1 month", "3 years", "10 years"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "tech",
    name: "Glitch in the Matrix",
    icon: "🤖",
    description: "Mind-bending tech & internet trivia",
    questions: [
      {
        question: "What was the first message sent over the internet?",
        options: ["Hello World", "LO", "Test", "Hi"],
        correctAnswer: 1,
      },
      {
        question: "How much of the internet is accessible via regular browsers?",
        options: ["90%", "50%", "About 5%", "75%"],
        correctAnswer: 2,
      },
      {
        question: "What was the original name of Windows?",
        options: [
          "Interface Manager",
          "Desktop Pro",
          "Visual Shell",
          "Screen OS",
        ],
        correctAnswer: 0,
      },
      {
        question: "What programming language was written in just 10 days?",
        options: ["Python", "Ruby", "JavaScript", "PHP"],
        correctAnswer: 2,
      },
      {
        question: "What does the '__(www)__' in a URL stand for?",
        options: [
          "Wide Web Worldwide",
          "World Wide Web",
          "Wired Web World",
          "Western Web Works",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which company created the first computer mouse?",
        options: ["IBM", "Apple", "Xerox", "Microsoft"],
        correctAnswer: 2,
      },
      {
        question: "How many lines of code does the average car have?",
        options: [
          "1 million",
          "10 million",
          "100 million",
          "500 million",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "food",
    name: "Bizarre Bites",
    icon: "🍕",
    description: "Deliciously weird food facts",
    questions: [
      {
        question: "What food never expires?",
        options: ["Rice", "Honey", "Salt", "Sugar"],
        correctAnswer: 1,
      },
      {
        question: "What fruit is technically a berry?",
        options: ["Strawberry", "Raspberry", "Banana", "Cherry"],
        correctAnswer: 2,
      },
      {
        question: "Which country invented ice cream?",
        options: ["Italy", "USA", "China", "France"],
        correctAnswer: 2,
      },
      {
        question: "What was ketchup originally sold as?",
        options: ["A sauce", "Medicine", "A drink", "Soup"],
        correctAnswer: 1,
      },
      {
        question: "How many grapes does it take to make one bottle of wine?",
        options: ["About 100", "About 400", "About 700", "About 1,200"],
        correctAnswer: 2,
      },
      {
        question: "What is the most stolen food in the world?",
        options: ["Chocolate", "Cheese", "Bread", "Meat"],
        correctAnswer: 1,
      },
      {
        question: "Arachibutyrophobia is the fear of what?",
        options: [
          "Spicy food",
          "Peanut butter sticking to the roof of your mouth",
          "Eating in public",
          "Raw fish",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "popculture",
    name: "Meme Machine",
    icon: "🎮",
    description: "Pop culture, movies & memes galore",
    questions: [
      {
        question: "What year was the first ever meme created?",
        options: ["1996", "2001", "1921", "2005"],
        correctAnswer: 2,
      },
      {
        question: "Which movie has the most sequels ever?",
        options: ["Friday the 13th", "Godzilla", "James Bond", "Star Wars"],
        correctAnswer: 1,
      },
      {
        question: "What was Mario's original name?",
        options: ["Jumpman", "Plumber Pete", "Luigi", "Mr. Video"],
        correctAnswer: 0,
      },
      {
        question: "What is the best-selling video game of all time?",
        options: ["Tetris", "Minecraft", "GTA V", "Wii Sports"],
        correctAnswer: 1,
      },
      {
        question: "Which social media platform launched first?",
        options: ["Facebook", "MySpace", "Twitter", "YouTube"],
        correctAnswer: 1,
      },
      {
        question: "What does 'GIF' stand for?",
        options: [
          "Graphics Interchange Format",
          "General Image File",
          "Graphic Internet Format",
          "Generated Image Frame",
        ],
        correctAnswer: 0,
      },
      {
        question: "How many episodes of The Simpsons have been made (approx)?",
        options: ["300+", "500+", "700+", "900+"],
        correctAnswer: 2,
      },
    ],
  },
];
