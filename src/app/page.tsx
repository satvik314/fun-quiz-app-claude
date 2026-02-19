"use client";

import { useState } from "react";
import MindMap from "@/components/MindMap";
import ConceptPanel from "@/components/ConceptPanel";
import { concepts, centralTheme } from "@/data/lateralThinking";

export default function Home() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeConcept = concepts.find((c) => c.id === activeNode);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center pt-8 pb-2 px-4">
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
      {!activeConcept && (
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

      {/* Concept Panel (slides up when a node is selected) */}
      {activeConcept && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#00d4ff33 transparent" }}
          >
            <ConceptPanel
              concept={activeConcept}
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
