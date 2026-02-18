"use client";

import { useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import { topics } from "@/data/quizData";
import { Suspense } from "react";

function getVerdict(score: number, total: number) {
  const pct = (score / total) * 100;
  if (pct === 100)
    return {
      emoji: "🏆",
      title: "PERFECT SCORE",
      subtitle: "You absolute legend. The internet bows before you.",
      color: "text-neon-green",
    };
  if (pct >= 70)
    return {
      emoji: "🔥",
      title: "BIG BRAIN",
      subtitle: "Impressive! You clearly have too much free time.",
      color: "text-techno-blue",
    };
  if (pct >= 40)
    return {
      emoji: "🤷",
      title: "MEH... COULD BE WORSE",
      subtitle: "You're giving 'I Googled half of these' energy.",
      color: "text-yellow-400",
    };
  return {
    emoji: "💀",
    title: "TOTAL WIPEOUT",
    subtitle: "The questions won this round. Time for a rematch?",
    color: "text-techno-red",
  };
}

function ResultsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = params.topicId as string;

  const topic = topics.find((t) => t.id === topicId);
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "7");
  const answersParam = searchParams.get("answers") || "";
  const userAnswers = answersParam.split(",").map(Number);

  if (!topic) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <p className="text-6xl mb-4">💀</p>
        <h1 className="text-3xl font-bold text-techno-red mb-2">
          RESULTS NOT FOUND
        </h1>
        <Link
          href="/"
          className="bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 px-8 rounded-lg transition-colors mt-4"
        >
          Go Home
        </Link>
      </main>
    );
  }

  const verdict = getVerdict(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Verdict */}
        <div className="text-center mb-10">
          <div className="text-7xl mb-4 float-animation">{verdict.emoji}</div>
          <h1
            className={`text-4xl md:text-5xl font-black tracking-tight mb-2 ${verdict.color}`}
          >
            {verdict.title}
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">
            {verdict.subtitle}
          </p>
        </div>

        {/* Score display */}
        <div className="bg-techno-card border border-techno-blue/20 rounded-xl p-8 mb-8 text-center">
          <div className="flex items-center justify-center gap-8">
            <div>
              <p className="font-mono text-xs text-techno-blue/60 uppercase tracking-widest mb-1">
                Score
              </p>
              <p className="text-5xl font-black text-white">
                {score}
                <span className="text-techno-blue/40">/{total}</span>
              </p>
            </div>
            <div className="h-16 w-px bg-techno-blue/20" />
            <div>
              <p className="font-mono text-xs text-techno-blue/60 uppercase tracking-widest mb-1">
                Accuracy
              </p>
              <p className={`text-5xl font-black ${verdict.color}`}>{pct}%</p>
            </div>
          </div>

          {/* Score bar */}
          <div className="mt-6 w-full h-3 bg-techno-dark rounded-full overflow-hidden border border-techno-blue/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-techno-red via-yellow-400 to-neon-green progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Answer review */}
        <div className="mb-8">
          <h2 className="font-mono text-sm text-techno-blue/60 uppercase tracking-widest mb-4">
            {"// "}Answer Breakdown
          </h2>
          <div className="space-y-3">
            {topic.questions.map((q, i) => {
              const userAnswer = userAnswers[i];
              const isCorrect = userAnswer === q.correctAnswer;
              return (
                <div
                  key={i}
                  className={`bg-techno-card border rounded-lg p-4 ${
                    isCorrect
                      ? "border-neon-green/30"
                      : "border-techno-red/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isCorrect
                          ? "bg-neon-green/20 text-neon-green"
                          : "bg-techno-red/20 text-techno-red"
                      }`}
                    >
                      {isCorrect ? "\u2713" : "\u2717"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium mb-1">
                        {q.question}
                      </p>
                      {!isCorrect && (
                        <p className="text-xs text-gray-500">
                          Your answer:{" "}
                          <span className="text-techno-red">
                            {q.options[userAnswer]}
                          </span>{" "}
                          &bull; Correct:{" "}
                          <span className="text-neon-green">
                            {q.options[q.correctAnswer]}
                          </span>
                        </p>
                      )}
                      {isCorrect && (
                        <p className="text-xs text-neon-green/60">
                          {q.options[q.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/quiz/${topicId}`}
            className="bg-techno-red hover:bg-techno-red-hover text-white font-bold py-3 px-8 rounded-lg transition-colors text-center font-mono uppercase tracking-wider"
          >
            Try Again
          </Link>
          <Link
            href="/"
            className="border-2 border-techno-blue/30 hover:border-techno-blue/60 text-techno-blue font-bold py-3 px-8 rounded-lg transition-colors text-center font-mono uppercase tracking-wider"
          >
            Pick New Topic
          </Link>
        </div>

        {/* Footer quip */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-gray-600">
            {score === total
              ? "// WARNING: Dangerously high IQ detected"
              : score === 0
                ? "// SYSTEM ERROR: Knowledge module not found"
                : `// ${score} neurons successfully activated`}
          </p>
        </div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <p className="font-mono text-techno-blue animate-pulse">
            Calculating your fate...
          </p>
        </main>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
