"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

interface Book {
  id: string;
  title: string;
  author: string;
  color: string;
  accentColor: string;
  secondaryColor: string;
  coverImage: string;
  description: string;
  year: string;
  concepts: string[];
  designType: "hub-spoke" | "zen-ripple";
}

const books: Book[] = [
  {
    id: "lateral-thinking",
    title: "Lateral Thinking",
    author: "Edward de Bono",
    color: "#e63946",
    accentColor: "#00d4ff",
    secondaryColor: "#1a1a2e",
    coverImage: "/lateral_thinking_book.jpeg",
    description: "Break free from logical constraints. Learn techniques to restructure your thinking and unlock creativity.",
    year: "1967",
    concepts: ["Creative Thinking", "Pattern Breaking", "Idea Generation", "Problem Solving"],
    designType: "hub-spoke",
  },
  {
    id: "courage-disliked",
    title: "The Courage to Be Disliked",
    author: "Kishimi & Koga",
    color: "#dc2626",
    accentColor: "#fbbf24",
    secondaryColor: "#7f1d1d",
    coverImage: "/courage_book.jpeg",
    description: "A dialogue on Adlerian psychology. Discover why being disliked might be the key to true freedom.",
    year: "2013",
    concepts: ["Adlerian Psychology", "Self-Acceptance", "Interpersonal Relations", "Life Tasks"],
    designType: "zen-ripple",
  },
  {
    id: "default-mode-network",
    title: "The Default Mode Network",
    author: "Neuroscience",
    color: "#7c3aed",
    accentColor: "#c084fc",
    secondaryColor: "#1e1b4b",
    coverImage: "/dmn_book.jpeg",
    description: "Your brain's most powerful network activates when you stop trying. Discover the hidden engine behind creativity, self-identity, and imagination.",
    year: "2001",
    concepts: ["Mind Wandering", "Creativity", "Self-Narrative", "Social Brain"],
    designType: "zen-ripple",
  },
];

// Hub and Spoke Design Component (for Lateral Thinking)
function HubSpokeDesign({ book, isHovered }: { book: Book; isHovered: boolean }) {
  return (
    <>
      {/* Hub Lines - Decorative spokes */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, ${book.color}10 31%, transparent 32%),
            radial-gradient(circle at center, transparent 50%, ${book.color}08 51%, transparent 52%),
            radial-gradient(circle at center, transparent 70%, ${book.color}05 71%, transparent 72%)
          `,
        }}
      />
      
      {/* Connection Lines */}
      <svg 
        className="absolute -inset-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        viewBox="0 0 300 400"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={angle}
            x1="150"
            y1="200"
            x2={150 + 120 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 120 * Math.sin((angle * Math.PI) / 180)}
            stroke={book.accentColor}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.3 + (i % 2) * 0.2}
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <circle
            key={`node-${angle}`}
            cx={150 + 120 * Math.cos((angle * Math.PI) / 180)}
            cy={200 + 120 * Math.sin((angle * Math.PI) / 180)}
            r="4"
            fill={book.accentColor}
            opacity={0.5}
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </svg>
    </>
  );
}

// Zen Ripple Design Component (for Courage to Be Disliked)
function ZenRippleDesign({ book, isHovered }: { book: Book; isHovered: boolean }) {
  return (
    <>
      {/* Zen Circle (Ensō) Background */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        {/* Concentric ripples - organic, brush-stroke style */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full border-2 transition-all duration-700"
            style={{
              width: `${140 + i * 40}px`,
              height: `${140 + i * 40}px`,
              borderColor: `${book.color}${20 + i * 10}`,
              transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.8})`,
              transitionDelay: `${i * 100}ms`,
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
              opacity: isHovered ? (6 - i) * 0.15 : 0,
            }}
          />
        ))}
        
        {/* Organic brush stroke circles - Ensō style */}
        <svg 
          className="absolute -inset-24 w-[calc(100%+12rem)] h-[calc(100%+12rem)] pointer-events-none"
          viewBox="0 0 400 400"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {/* Main Ensō circle - imperfect, brush stroke */}
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke={book.color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="800"
            strokeDashoffset={isHovered ? 0 : 800}
            style={{
              transition: 'stroke-dashoffset 1s ease-out',
              opacity: 0.6,
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Secondary imperfect circle */}
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke={book.accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset={isHovered ? 0 : 600}
            style={{
              transition: 'stroke-dashoffset 1.2s ease-out 0.2s',
              opacity: 0.4,
            }}
          />
          
          {/* Small zen dots */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <circle
              key={angle}
              cx={200 + 160 * Math.cos((angle * Math.PI) / 180)}
              cy={200 + 160 * Math.sin((angle * Math.PI) / 180)}
              r="5"
              fill={book.accentColor}
              opacity={0}
              style={{
                opacity: isHovered ? 0.6 : 0,
                transition: `opacity 0.3s ease ${0.5 + i * 0.1}s`,
              }}
            />
          ))}
        </svg>

        {/* Gentle glow pulses */}
        <div 
          className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full"
          style={{
            background: `radial-gradient(circle, ${book.color}20 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            animation: isHovered ? 'pulse-ring 3s ease-in-out infinite' : 'none',
          }}
        />
      </div>
    </>
  );
}

export default function BookShelfClient() {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleReadClick = () => {
    if (selectedBook) {
      router.push(`/book/${selectedBook.id}`);
    }
  };

  // Get theme-specific header gradient
  const getHeaderGradient = () => {
    const currentTheme = mounted ? theme : "dark";
    switch (currentTheme) {
      case "light":
        return "from-sky-500 via-blue-500 to-indigo-500";
      case "warm":
        return "from-amber-600 via-orange-500 to-amber-700";
      default:
        return "from-amber-200 via-yellow-400 to-amber-600";
    }
  };

  // Get theme-specific text color
  const getSubtitleColor = () => {
    const currentTheme = mounted ? theme : "dark";
    switch (currentTheme) {
      case "light":
        return "text-slate-600";
      case "warm":
        return "text-amber-800/70";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header with Theme Toggle */}
      <div className="flex flex-col items-center mb-16">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${(mounted ? theme : 'dark') === 'warm' ? 'font-serif' : ''}`}>
          <span className={`bg-gradient-to-r ${getHeaderGradient()} bg-clip-text text-transparent`}>
            Mind
          </span>
          <span style={{ color: 'var(--color-text-primary)' }}>Library</span>
        </h1>
        <p className={`${getSubtitleColor()} text-sm md:text-base max-w-lg mx-auto text-center`}>
          Interactive book summaries that transform complex ideas into 
          practical wisdom you can actually use.
        </p>
      </div>

      {/* Books Display */}
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: (mounted ? theme : 'dark') === 'warm' 
                ? 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)'
                : (mounted ? theme : 'dark') === 'light'
                ? 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Books Grid */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 min-h-[500px]">
          {books.map((book) => (
            <div
              key={book.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              onClick={() => handleBookClick(book)}
            >
              {/* Book-Specific Design */}
              {book.designType === "hub-spoke" ? (
                <HubSpokeDesign book={book} isHovered={hoveredBook === book.id} />
              ) : (
                <ZenRippleDesign book={book} isHovered={hoveredBook === book.id} />
              )}

              {/* Book Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${book.color}40 0%, transparent 70%)`,
                  }}
                />

                {/* Book Cover */}
                <div 
                  className="relative transition-all duration-500"
                  style={{
                    transform: hoveredBook === book.id 
                      ? 'translateY(-8px) scale(1.02)' 
                      : 'translateY(0) scale(1)',
                  }}
                >
                  {/* Book Shadow */}
                  <div 
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full transition-all duration-500"
                    style={{
                      background: hoveredBook === book.id 
                        ? `rgba(0,0,0,0.5)` 
                        : 'rgba(0,0,0,0.3)',
                      filter: hoveredBook === book.id ? 'blur(16px)' : 'blur(10px)',
                      transform: hoveredBook === book.id 
                        ? 'translateX(-50%) scale(1.1)' 
                        : 'translateX(-50%) scale(1)',
                    }}
                  />

                  {/* Cover Image Container */}
                  <div 
                    className="relative w-48 h-72 md:w-56 md:h-80 rounded-lg overflow-hidden shadow-2xl transition-all duration-500"
                    style={{
                      boxShadow: hoveredBook === book.id 
                        ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${book.color}30`
                        : `0 20px 40px rgba(0,0,0,0.4)`,
                    }}
                  >
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 192px, 224px"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Click Hint */}
                    <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span 
                        className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ 
                          background: book.accentColor,
                          color: book.secondaryColor,
                        }}
                      >
                        Click to Explore
                      </span>
                    </div>
                  </div>
                </div>

                {/* Book Info Below */}
                <div className="mt-6 text-center">
                  <h3 
                    className="text-lg font-bold mb-1 transition-colors duration-300"
                    style={{ 
                      color: hoveredBook === book.id ? book.accentColor : 'var(--color-text-primary)',
                    }}
                  >
                    {book.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-12">
        <p 
          className="text-sm font-mono"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span className="opacity-60">←</span> 
          Select a book to begin your journey 
          <span className="opacity-60">→</span>
        </p>
      </div>

      {/* Book Preview Modal */}
      {selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.8)' }}
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full transition-all z-10"
              style={{ 
                background: 'var(--color-bg-card)',
                color: 'var(--color-text-secondary)',
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Central Hub - Book Cover with Design */}
              <div className="relative flex-shrink-0">
                {/* Design based on book type */}
                {selectedBook.designType === "hub-spoke" ? (
                  /* Hub and Spoke for Lateral Thinking */
                  <svg 
                    className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] animate-spin"
                    style={{ animationDuration: '20s' }}
                    viewBox="0 0 400 500"
                  >
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                      <line
                        key={angle}
                        x1="200"
                        y1="250"
                        x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
                        y2={250 + 180 * Math.sin((angle * Math.PI) / 180)}
                        stroke={selectedBook.accentColor}
                        strokeWidth="1"
                        strokeDasharray="8 8"
                        opacity={0.3}
                      />
                    ))}
                    <circle
                      cx="200"
                      cy="250"
                      r="180"
                      fill="none"
                      stroke={selectedBook.color}
                      strokeWidth="2"
                      strokeDasharray="12 8"
                      opacity={0.4}
                    />
                  </svg>
                ) : (
                  /* Zen Ripples for Courage */
                  <svg 
                    className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)]"
                    viewBox="0 0 400 500"
                  >
                    {/* Ensō circle - imperfect */}
                    <circle
                      cx="200"
                      cy="250"
                      r="170"
                      fill="none"
                      stroke={selectedBook.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="900"
                      strokeDashoffset="100"
                      opacity={0.6}
                    />
                    {/* Inner circles */}
                    {[120, 140, 160].map((r, i) => (
                      <circle
                        key={r}
                        cx="200"
                        cy="250"
                        r={r}
                        fill="none"
                        stroke={selectedBook.accentColor}
                        strokeWidth="1"
                        strokeDasharray={i % 2 === 0 ? "8 4" : "4 8"}
                        opacity={0.3 - i * 0.05}
                      />
                    ))}
                  </svg>
                )}

                {/* Pulsing nodes for hub-spoke */}
                {selectedBook.designType === "hub-spoke" && (
                  <div className="absolute -inset-16 pointer-events-none">
                    {[0, 90, 180, 270].map((angle, i) => (
                      <div
                        key={angle}
                        className="absolute w-3 h-3 rounded-full animate-pulse"
                        style={{
                          background: selectedBook.accentColor,
                          top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                          left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: `0 0 20px ${selectedBook.accentColor}`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Book Cover */}
                <div 
                  className="relative w-40 h-56 md:w-48 md:h-72 rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: `0 25px 50px rgba(0,0,0,0.5), 0 0 60px ${selectedBook.color}40`,
                  }}
                >
                  <Image
                    src={selectedBook.coverImage}
                    alt={selectedBook.title}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>

              {/* Content Panel */}
              <div 
                className="flex-1 rounded-2xl p-6 md:p-8"
                style={{ 
                  background: 'var(--color-bg-card)',
                  borderColor: `${selectedBook.color}30`,
                  border: '1px solid',
                }}
              >
                {/* Title & Author */}
                <div className="mb-6">
                  <h2 
                    className="text-2xl md:text-3xl font-black mb-2"
                    style={{ color: selectedBook.accentColor }}
                  >
                    {selectedBook.title}
                  </h2>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{selectedBook.author}</p>
                  <p style={{ color: 'var(--color-text-muted)' }} className="text-sm">{selectedBook.year}</p>
                </div>

                {/* Description */}
                <p 
                  className="leading-relaxed mb-6"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {selectedBook.description}
                </p>

                {/* Key Concepts */}
                <div className="mb-8">
                  <h3 
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Key Concepts
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${selectedBook.color}20`,
                          color: selectedBook.accentColor,
                          border: `1px solid ${selectedBook.color}40`,
                        }}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleReadClick}
                  className="w-full py-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${selectedBook.color}, ${selectedBook.secondaryColor})`,
                    boxShadow: `0 10px 30px ${selectedBook.color}40`,
                  }}
                >
                  <span>Start Reading</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
