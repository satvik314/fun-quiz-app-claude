"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import MindMap from "@/components/MindMap";
import ConceptPanel from "@/components/ConceptPanel";
import ConceptCards from "@/components/ConceptCards";
import DialogueQuiz from "@/components/DialogueQuiz";
import { concepts as lateralConcepts, centralTheme } from "@/data/lateralThinking";
import { concepts as courageConcepts, bookInfo as courageInfo, quizQuestions } from "@/data/courageToBeDisliked";
import { concepts as hookedConcepts, bookInfo as hookedInfo, quizQuestions as hookedQuizQuestions } from "@/data/hooked";
import { concepts as dontSweatConcepts, bookInfo as dontSweatInfo, quizQuestions as dontSweatQuizQuestions } from "@/data/dontSweatTheSmallStuff";

export default function BookPage() {
  const params = useParams();
  const router = useRouter();
  const bookId = params.id as string;
  
  // Lateral Thinking State
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Courage State
  const [activeTab, setActiveTab] = useState<"concepts" | "quiz">("concepts");

  const activeLateralConcept = lateralConcepts.find((c) => c.id === activeNode);

  if (bookId === "lateral-thinking") {
    return (
      <main className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between border-b border-cyan-900/30">
          <button 
            onClick={() => router.push("/")}
            className="text-cyan-500/60 hover:text-cyan-400 font-mono text-sm flex items-center gap-2 transition-colors"
          >
            ← Back to Library
          </button>
          <span className="text-cyan-500/40 font-mono text-xs">LATERAL THINKING</span>
        </nav>

        {/* Header */}
        <header className="text-center pt-6 pb-2 px-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-1 glitch-text">
            <span className="text-techno-blue">Lateral</span>{" "}
            <span className="text-techno-red">Thinking</span>
          </h1>
          <p className="font-mono text-xs text-techno-blue/50 tracking-widest uppercase">
            {"// "}Edward de Bono &mdash; Interactive Mind Map
          </p>
          <div className="mt-3 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-techno-blue to-transparent" />
        </header>

        {/* Quote */}
        <div className="text-center px-4 py-3">
          <p className="text-gray-500 italic text-sm max-w-lg mx-auto">
            &ldquo;{centralTheme.description}&rdquo;
          </p>
        </div>

        {/* Instruction hint */}
        {!activeLateralConcept && (
          <div className="text-center px-4">
            <p className="font-mono text-xs text-techno-blue/30 animate-pulse">
              click any node to explore a technique
            </p>
          </div>
        )}

        {/* Mind Map */}
        <div className="flex-1 flex flex-col items-center px-4">
          <MindMap activeNode={activeNode} onNodeClick={setActiveNode} />
        </div>

        {/* Concept Panel */}
        {activeLateralConcept && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#00d4ff33 transparent" }}
            >
              <ConceptPanel
                concept={activeLateralConcept}
                onClose={() => setActiveNode(null)}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-4 px-4">
          <p className="font-mono text-xs text-gray-700">
            {"<"} dig a hole in a different place {"/>"}
          </p>
        </footer>
      </main>
    );
  }

  if (bookId === "courage-disliked") {
    return (
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between border-b border-amber-900/30">
          <button 
            onClick={() => router.push("/")}
            className="text-amber-500/60 hover:text-amber-400 font-mono text-sm flex items-center gap-2 transition-colors"
          >
            ← Back to Library
          </button>
          <span className="text-amber-500/40 font-mono text-xs">THE COURAGE TO BE DISLIKED</span>
        </nav>

        {/* Header */}
        <header className="text-center pt-8 pb-4 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4 text-3xl">
            🦋
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              The Courage
            </span>
            <br />
            <span className="text-white">to Be Disliked</span>
          </h1>
          <p className="font-mono text-xs text-amber-500/50 tracking-widest uppercase mb-3">
            Ichiro Kishimi & Fumitake Koga
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto italic">
            &ldquo;{courageInfo.quote}&rdquo;
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 px-4 mb-6">
          <button
            onClick={() => setActiveTab("concepts")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "concepts"
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            📚 Concepts
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "quiz"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            🎭 Dialogue
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-8">
          {activeTab === "concepts" ? (
            <ConceptCards concepts={courageConcepts} />
          ) : (
            <DialogueQuiz questions={quizQuestions} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-6 px-4 border-t border-gray-800/50">
          <p className="font-mono text-xs text-gray-600">
            All problems are interpersonal relationship problems
          </p>
        </footer>
      </main>
    );
  }

  if (bookId === "hooked") {
    return (
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-indigo-950/30 to-gray-950">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between border-b border-indigo-900/30">
          <button
            onClick={() => router.push("/")}
            className="text-indigo-400/60 hover:text-indigo-300 font-mono text-sm flex items-center gap-2 transition-colors"
          >
            ← Back to Library
          </button>
          <span className="text-indigo-400/40 font-mono text-xs">HOOKED</span>
        </nav>

        {/* Header */}
        <header className="text-center pt-8 pb-4 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 mb-4 text-3xl">
            🪝
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            <span className="bg-gradient-to-r from-indigo-300 via-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Hooked
            </span>
          </h1>
          <p className="font-mono text-xs text-indigo-400/50 tracking-widest uppercase mb-3">
            Nir Eyal
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-4" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto italic">
            &ldquo;{hookedInfo.quote}&rdquo;
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 px-4 mb-6">
          <button
            onClick={() => setActiveTab("concepts")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "concepts"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            📚 Concepts
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "quiz"
                ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            🧪 Quiz
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-8">
          {activeTab === "concepts" ? (
            <ConceptCards concepts={hookedConcepts} />
          ) : (
            <DialogueQuiz questions={hookedQuizQuestions} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-6 px-4 border-t border-gray-800/50">
          <p className="font-mono text-xs text-gray-600">
            Trigger → Action → Variable Reward → Investment
          </p>
        </footer>
      </main>
    );
  }

  if (bookId === "dont-sweat") {
    return (
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-emerald-950/30 to-gray-950">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between border-b border-emerald-900/30">
          <button
            onClick={() => router.push("/")}
            className="text-emerald-400/60 hover:text-emerald-300 font-mono text-sm flex items-center gap-2 transition-colors"
          >
            ← Back to Library
          </button>
          <span className="text-emerald-400/40 font-mono text-xs">DON&apos;T SWEAT THE SMALL STUFF</span>
        </nav>

        {/* Header */}
        <header className="text-center pt-8 pb-4 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-4 text-3xl">
            🌊
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Don&apos;t Sweat
            </span>
            <br />
            <span className="text-white">the Small Stuff</span>
          </h1>
          <p className="font-mono text-xs text-emerald-400/50 tracking-widest uppercase mb-3">
            Richard Carlson
          </p>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-4" />
          <p className="text-gray-400 text-sm max-w-xl mx-auto italic">
            &ldquo;{dontSweatInfo.quote}&rdquo;
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 px-4 mb-6">
          <button
            onClick={() => setActiveTab("concepts")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "concepts"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            📚 Concepts
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-2 rounded-full font-mono text-sm font-bold transition-all ${
              activeTab === "quiz"
                ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            🧪 Quiz
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pb-8">
          {activeTab === "concepts" ? (
            <ConceptCards concepts={dontSweatConcepts} />
          ) : (
            <DialogueQuiz questions={dontSweatQuizQuestions} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-6 px-4 border-t border-gray-800/50">
          <p className="font-mono text-xs text-gray-600">
            Don&apos;t sweat the small stuff... and it&apos;s all small stuff
          </p>
        </footer>
      </main>
    );
  }

  // Book not found
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-4">Book not found</p>
        <button 
          onClick={() => router.push("/")}
          className="text-cyan-500 hover:text-cyan-400"
        >
          Return to Library
        </button>
      </div>
    </main>
  );
}
