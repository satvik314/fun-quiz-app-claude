"use client";

import { useState } from "react";
import { Concept } from "@/data/lateralThinking";

interface ConceptPanelProps {
  concept: Concept;
  onClose: () => void;
}

type Tab = "quickie" | "quiz";

export default function ConceptPanel({ concept, onClose }: ConceptPanelProps) {
  const [tab, setTab] = useState<Tab>("quickie");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const question = concept.quiz[currentQ];

  const handleSelect = (index: number) => {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < concept.quiz.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setQuizDone(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setQuizDone(false);
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="bg-techno-card border border-techno-blue/20 rounded-2xl overflow-hidden max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="border-b border-techno-blue/10 p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{concept.icon}</span>
          <div>
            <h2 className="text-xl font-black text-white">{concept.name}</h2>
            <p className="text-xs font-mono text-techno-blue/60">
              {concept.tagline}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white transition-colors text-xl font-mono w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5"
        >
          &times;
        </button>
      </div>

      {/* Tab switcher */}
      <div className="flex border-b border-techno-blue/10">
        <button
          onClick={() => setTab("quickie")}
          className={`flex-1 py-3 font-mono text-sm font-bold tracking-wider transition-colors ${
            tab === "quickie"
              ? "text-techno-blue border-b-2 border-techno-blue bg-techno-blue/5"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          QUICKIE
        </button>
        <button
          onClick={() => setTab("quiz")}
          className={`flex-1 py-3 font-mono text-sm font-bold tracking-wider transition-colors ${
            tab === "quiz"
              ? "text-techno-red border-b-2 border-techno-red bg-techno-red/5"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          QUIZ
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {tab === "quickie" ? (
          <div className="space-y-6">
            {/* Main explanation */}
            <div>
              <p className="text-gray-300 leading-relaxed text-sm">
                {concept.quickie}
              </p>
            </div>

            {/* Example box */}
            <div className="bg-techno-blue/5 border border-techno-blue/15 rounded-xl p-4">
              <p className="font-mono text-xs text-techno-blue/50 uppercase tracking-widest mb-2">
                Example
              </p>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                {concept.example}
              </p>
            </div>

            {/* Key insight */}
            <div className="bg-techno-red/5 border border-techno-red/15 rounded-xl p-4">
              <p className="font-mono text-xs text-techno-red/50 uppercase tracking-widest mb-2">
                Key Insight
              </p>
              <p className="text-white text-sm font-semibold leading-relaxed">
                {concept.keyInsight}
              </p>
            </div>

            {/* CTA to quiz */}
            <button
              onClick={() => {
                setTab("quiz");
                resetQuiz();
              }}
              className="w-full bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 rounded-xl transition-colors font-mono text-sm tracking-wider"
            >
              TEST YOUR UNDERSTANDING &rarr;
            </button>
          </div>
        ) : quizDone ? (
          /* Quiz results */
          <div className="text-center py-6 space-y-5">
            <div className="text-5xl">
              {score === concept.quiz.length
                ? "🏆"
                : score >= Math.ceil(concept.quiz.length * 0.7)
                  ? "🧠"
                  : "💀"}
            </div>
            <div>
              <p className="text-3xl font-black text-white mb-1">
                {score}
                <span className="text-techno-blue/40">
                  /{concept.quiz.length}
                </span>
              </p>
              <p className="font-mono text-xs text-gray-400">
                {score === concept.quiz.length
                  ? "Perfect — you can apply this technique in the wild."
                  : score >= Math.ceil(concept.quiz.length * 0.7)
                    ? "Strong instincts. Re-read the quickie to sharpen the edges."
                    : "These questions demand application, not recall. Re-read the quickie, then think about how YOU would use each technique in your own life."}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 rounded-xl transition-colors font-mono text-sm tracking-wider"
              >
                RETRY
              </button>
              <button
                onClick={() => setTab("quickie")}
                className="flex-1 border-2 border-techno-blue/30 hover:border-techno-blue/60 text-techno-blue font-bold py-3 rounded-xl transition-colors font-mono text-sm tracking-wider"
              >
                RE-READ
              </button>
            </div>
          </div>
        ) : (
          /* Quiz questions */
          <div className="space-y-5">
            {/* Progress */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-techno-blue/40">
                Q{currentQ + 1} of {concept.quiz.length}
              </span>
              <span className="font-mono text-xs text-neon-green/60">
                {score} correct
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-techno-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-techno-blue to-techno-red rounded-full progress-fill"
                style={{
                  width: `${((currentQ + (showAnswer ? 1 : 0)) / concept.quiz.length) * 100}%`,
                }}
              />
            </div>

            {/* Question */}
            <p className="text-white font-semibold text-lg leading-snug">
              {question.question}
            </p>

            {/* Options */}
            <div className="space-y-2">
              {question.options.map((opt, i) => {
                let style =
                  "border-techno-blue/15 hover:border-techno-blue/40 hover:bg-techno-blue/5";
                if (showAnswer) {
                  if (i === question.correctAnswer) {
                    style = "border-neon-green/60 bg-neon-green/10";
                  } else if (i === selected) {
                    style = "border-techno-red/60 bg-techno-red/10";
                  } else {
                    style = "border-gray-800 opacity-40";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={showAnswer}
                    className={`option-btn w-full text-left p-3.5 rounded-xl border-2 transition-all ${style} ${
                      !showAnswer ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
                          showAnswer && i === question.correctAnswer
                            ? "bg-neon-green/20 text-neon-green"
                            : showAnswer && i === selected
                              ? "bg-techno-red/20 text-techno-red"
                              : "bg-techno-blue/10 text-techno-blue"
                        }`}
                      >
                        {optionLabels[i]}
                      </span>
                      <span className="text-white text-sm">{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showAnswer && (
              <div className="bg-techno-dark/50 border border-techno-blue/10 rounded-xl p-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next button */}
            {showAnswer && (
              <button
                onClick={handleNext}
                className="w-full bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 rounded-xl transition-colors font-mono text-sm tracking-wider"
              >
                {currentQ < concept.quiz.length - 1
                  ? "NEXT QUESTION"
                  : "SEE RESULTS"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
