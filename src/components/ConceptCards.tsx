"use client";

import { useState } from "react";
import { ConceptCard } from "@/data/courageToBeDisliked";

interface ConceptCardsProps {
  concepts: ConceptCard[];
}

type CardState = "folded" | "unfolding" | "unfolded";

export default function ConceptCards({ concepts }: ConceptCardsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [cardState, setCardState] = useState<CardState>("folded");

  const activeConcept = concepts.find((c) => c.id === activeId);

  const handleCardClick = (id: string) => {
    if (activeId === id) {
      setCardState("folded");
      setTimeout(() => setActiveId(null), 300);
    } else {
      setActiveId(id);
      setCardState("unfolding");
      setTimeout(() => setCardState("unfolded"), 400);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {concepts.map((concept) => {
          const isActive = activeId === concept.id;
          
          return (
            <div
              key={concept.id}
              onClick={() => handleCardClick(concept.id)}
              className={`
                relative cursor-pointer rounded-xl overflow-hidden
                transition-all duration-500 ease-out
                ${isActive ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : 'aspect-square'}
              `}
              style={{
                background: isActive 
                  ? `linear-gradient(135deg, ${concept.color}20 0%, #1a1a2e 100%)`
                  : `linear-gradient(135deg, ${concept.color}15 0%, ${concept.color}05 100%)`,
                border: `1px solid ${isActive ? concept.color : concept.color + '30'}`,
                boxShadow: isActive 
                  ? `0 20px 60px ${concept.color}30, inset 0 1px 0 ${concept.color}40`
                  : `0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 ${concept.color}20`,
              }}
            >
              {/* Card Content */}
              <div className="h-full p-4 md:p-6 flex flex-col">
                {/* Icon */}
                <div 
                  className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-3
                    transition-all duration-500
                    ${isActive ? 'bg-white/10' : 'bg-white/5'}
                  `}
                  style={{ 
                    boxShadow: isActive ? `0 0 20px ${concept.color}50` : 'none' 
                  }}
                >
                  {concept.icon}
                </div>
                
                {/* Title */}
                <h3 
                  className={`
                    font-bold leading-tight mb-1 transition-all duration-300
                    ${isActive ? 'text-lg md:text-xl text-white' : 'text-sm md:text-base text-white/90'}
                  `}
                >
                  {concept.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-xs text-white/50 font-medium">{concept.subtitle}</p>
                
                {/* Expanded Content */}
                {isActive && cardState !== "folded" && (
                  <div 
                    className={`
                      mt-4 flex-1 flex flex-col gap-4
                      transition-all duration-500
                      ${cardState === "unfolding" ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                    `}
                  >
                    {/* Quickie */}
                    <div className="flex-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-2">The Core Idea</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{concept.quickie}</p>
                    </div>
                    
                    {/* Insight Box */}
                    <div 
                      className="p-3 rounded-lg"
                      style={{ background: `${concept.color}15`, border: `1px solid ${concept.color}30` }}
                    >
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Key Insight</p>
                      <p className="text-sm font-semibold" style={{ color: concept.color }}>
                        {concept.insight}
                      </p>
                    </div>
                    
                    {/* Reflection */}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Reflect</p>
                      <p className="text-sm text-gray-400 italic">{concept.reflection}</p>
                    </div>
                    
                    {/* Practice */}
                    <div className="p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Practice</p>
                      <p className="text-sm text-gray-300">{concept.practice}</p>
                    </div>
                  </div>
                )}
                
                {/* Click hint for non-active cards */}
                {!isActive && (
                  <div className="mt-auto pt-2">
                    <span className="text-[10px] text-white/30">Click to explore →</span>
                  </div>
                )}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div 
                  className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                  style={{ background: concept.color }}
                />
              )}
            </div>
          );
        })}
      </div>
      
      {/* Instructions */}
      {!activeId && (
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm font-mono">
            Click any concept to unfold its wisdom
          </p>
        </div>
      )}
    </div>
  );
}
