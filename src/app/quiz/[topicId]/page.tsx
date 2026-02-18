"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { topics } from "@/data/quizData";

const quirkySayings = [
  "Big brain energy!",
  "Your neurons are firing!",
  "Galaxy brain moment!",
  "Oops... that ain't it.",
  "The void stares back...",
  "Error 404: correct answer not found.",
  "Nailed it like a quantum physicist!",
  "Even a broken clock is right twice a day...",
  "Chef's kiss!",
  "Yikes on bikes!",
];

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const topicId = params.topicId as string;

  const topic = topics.find((t) => t.id === topicId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quirkySaying, setQuirkySaying] = useState("");
  const [answers, setAnswers] = useState<number[]>([]);

  const handleNext = useCallback(() => {
    if (!topic) return;
    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setQuirkySaying("");
    } else {
      const params = new URLSearchParams({
        score: score.toString(),
        total: topic.questions.length.toString(),
        answers: answers.join(","),
      });
      router.push(`/results/${topicId}?${params.toString()}`);
    }
  }, [topic, currentQuestion, score, answers, topicId, router]);

  useEffect(() => {
    if (!showFeedback) return;
    const timer = setTimeout(() => {
      handleNext();
    }, 1500);
    return () => clearTimeout(timer);
  }, [showFeedback, handleNext]);

  if (!topic) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl mb-4">💀</p>
          <h1 className="text-3xl font-bold text-techno-red mb-2">
            TOPIC NOT FOUND
          </h1>
          <p className="text-gray-400 font-mono text-sm mb-6">
            Error 404: This quiz has yeeted itself into the void
          </p>
          <Link
            href="/"
            className="bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Back to Safety
          </Link>
        </div>
      </main>
    );
  }

  const question = topic.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / topic.questions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    const isCorrect = answerIndex === question.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [...prev, answerIndex]);

    const correctSayings = quirkySayings.filter((_, i) => i < 4 || i === 6 || i === 8);
    const wrongSayings = quirkySayings.filter((_, i) => i >= 3 && i !== 6 && i !== 8);
    const pool = isCorrect ? correctSayings : wrongSayings;
    setQuirkySaying(pool[Math.floor(Math.random() * pool.length)]);
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return "border-techno-blue/20 hover:border-techno-blue/60 hover:bg-techno-blue/5";
    }
    if (index === question.correctAnswer) {
      return "border-neon-green bg-neon-green/10 correct-flash";
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "border-techno-red bg-techno-red/10 wrong-flash";
    }
    return "border-gray-700/50 opacity-40";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-techno-blue/60 hover:text-techno-blue font-mono text-sm transition-colors"
          >
            {"<"} ABORT
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{topic.icon}</span>
            <span className="font-bold text-white">{topic.name}</span>
          </div>
          <div className="font-mono text-sm text-techno-blue">
            {score}/{currentQuestion + (showFeedback ? 1 : 0)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-techno-card rounded-full mb-8 overflow-hidden border border-techno-blue/10">
          <div
            className="h-full bg-gradient-to-r from-techno-blue to-techno-red rounded-full progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question counter */}
        <div className="text-center mb-2">
          <span className="font-mono text-xs text-techno-blue/40 tracking-widest">
            QUESTION {currentQuestion + 1} OF {topic.questions.length}
          </span>
        </div>

        {/* Question */}
        <div className="bg-techno-card border border-techno-blue/20 rounded-xl p-8 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showFeedback}
              className={`option-btn w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${getOptionStyle(
                index
              )} ${!showFeedback ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                    showFeedback && index === question.correctAnswer
                      ? "bg-neon-green/20 text-neon-green"
                      : showFeedback &&
                          index === selectedAnswer &&
                          index !== question.correctAnswer
                        ? "bg-techno-red/20 text-techno-red"
                        : "bg-techno-blue/10 text-techno-blue"
                  }`}
                >
                  {optionLabels[index]}
                </span>
                <span className="text-white font-medium">{option}</span>
                {showFeedback && index === question.correctAnswer && (
                  <span className="ml-auto text-neon-green">&#10003;</span>
                )}
                {showFeedback &&
                  index === selectedAnswer &&
                  index !== question.correctAnswer && (
                    <span className="ml-auto text-techno-red">&#10007;</span>
                  )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="text-center">
            <p
              className={`font-mono text-sm font-semibold ${
                selectedAnswer === question.correctAnswer
                  ? "text-neon-green"
                  : "text-techno-red"
              }`}
            >
              {quirkySaying}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
