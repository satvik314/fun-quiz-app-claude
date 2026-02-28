"use client";

import { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface DialogueQuizProps {
  questions: QuizQuestion[];
}

export default function DialogueQuiz({ questions }: DialogueQuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const question = questions[currentQ];
  const optionLabels = ["A", "B", "C", "D"];

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleSelect = (index: number) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setQuizDone(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setQuizDone(false);
    setHasStarted(false);
  };

  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-700/30 rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">🎭</div>
          <h3 className="text-xl font-bold text-amber-200 mb-3">The Dialogue Test</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            The book unfolds as a conversation between a philosopher and a young man. 
            Test your understanding of Adlerian psychology through 7 challenging scenarios.
          </p>
          <button
            onClick={handleStart}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Begin the Dialogue →
          </button>
        </div>
      </div>
    );
  }

  if (quizDone) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">
            {score === questions.length ? "🦋" : score >= 5 ? "🌱" : "📖"}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {score === questions.length 
              ? "The Courage is Yours" 
              : score >= 5 
                ? "Growing Understanding" 
                : "Keep Reading"}
          </h3>
          <p className="text-3xl font-black mb-2">
            <span className="text-amber-400">{score}</span>
            <span className="text-gray-600">/{questions.length}</span>
          </p>
          <p className="text-gray-400 mb-8">
            {score === questions.length
              ? "You understand that happiness is a choice, not a destination."
              : score >= 5
                ? "You're grasping the core ideas. Revisit the concepts that challenged you."
                : "The book rewards re-reading. These ideas take time to sink in."}
          </p>
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-xl transition-all"
          >
            Try Again ↺
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <span className="text-xs font-mono text-amber-500/60">
            DIALOGUE {currentQ + 1} OF {questions.length}
          </span>
          <span className="text-xs font-mono text-green-500/60">
            {score} correct
          </span>
        </div>
        
        {/* Progress */}
        <div className="h-1 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
            style={{ width: `${((currentQ + (showAnswer ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Question */}
          <p className="text-white text-lg font-medium leading-relaxed mb-6">
            {question.question}
          </p>
          
          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              let style = "border-gray-700 hover:border-amber-500/50 hover:bg-amber-500/5";
              if (showAnswer) {
                if (i === question.correctAnswer) {
                  style = "border-green-500/50 bg-green-500/10";
                } else if (i === selected) {
                  style = "border-red-500/50 bg-red-500/10";
                } else {
                  style = "border-gray-800 opacity-50";
                }
              }
              
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${style}`}
                >
                  <div className="flex items-start gap-3">
                    <span 
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm flex-shrink-0
                        ${showAnswer && i === question.correctAnswer 
                          ? "bg-green-500/20 text-green-400" 
                          : showAnswer && i === selected 
                            ? "bg-red-500/20 text-red-400"
                            : "bg-gray-800 text-gray-400"
                        }
                      `}
                    >
                      {optionLabels[i]}
                    </span>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Explanation */}
          {showAnswer && (
            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-amber-200/80 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}
          
          {/* Next Button */}
          {showAnswer && (
            <button
              onClick={handleNext}
              className="w-full mt-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold rounded-xl transition-all"
            >
              {currentQ < questions.length - 1 ? "Continue →" : "See Results"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
