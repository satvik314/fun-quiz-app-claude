"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Book {
  id: string;
  title: string;
  author: string;
  color: string;
  spineColor: string;
  textColor: string;
  accentColor: string;
  icon: string;
  description: string;
  year: string;
}

const books: Book[] = [
  {
    id: "lateral-thinking",
    title: "LATERAL THINKING",
    author: "Edward de Bono",
    color: "#00d4ff",
    spineColor: "linear-gradient(180deg, #0a1628 0%, #0d1f38 50%, #0a1628 100%)",
    textColor: "#00d4ff",
    accentColor: "#ef0038",
    icon: "🧠",
    description: "Break free from logical constraints. Learn 12 techniques to restructure your thinking and unlock creativity.",
    year: "1967",
  },
  {
    id: "courage-disliked",
    title: "THE COURAGE TO BE DISLIKED",
    author: "Kishimi & Koga",
    color: "#f59e0b",
    spineColor: "linear-gradient(180deg, #2a1810 0%, #3d2416 50%, #2a1810 100%)",
    textColor: "#fbbf24",
    accentColor: "#f97316",
    icon: "🦋",
    description: "A dialogue on Adlerian psychology. Discover why being disliked might be the key to true freedom and happiness.",
    year: "2013",
  },
];

export default function BookShelf() {
  const router = useRouter();
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleReadClick = () => {
    if (selectedBook) {
      router.push(`/book/${selectedBook.id}`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Mind
          </span>
          <span className="text-white">Library</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          Interactive book summaries that transform complex ideas into 
          practical wisdom you can actually use.
        </p>
      </div>

      {/* Bookshelf Container */}
      <div className="relative">
        {/* Top Shelf Decoration */}
        <div className="h-4 bg-gradient-to-b from-amber-900/40 to-transparent rounded-t-lg mx-4" />
        
        {/* Shelf Surface */}
        <div className="relative bg-gradient-to-b from-amber-950/80 via-amber-900/60 to-amber-950/80 p-8 md:p-12 rounded-lg shadow-2xl">
          {/* Wood grain effect */}
          <div 
            className="absolute inset-0 opacity-20 rounded-lg"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(139, 90, 43, 0.1) 2px,
                rgba(139, 90, 43, 0.1) 4px
              )`,
            }}
          />
          
          {/* Books Container */}
          <div className="relative flex justify-center items-end gap-3 md:gap-6 min-h-[280px] md:min-h-[340px]">
            {books.map((book, index) => (
              <div
                key={book.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => handleBookClick(book)}
              >
                {/* Book Shadow */}
                <div 
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 rounded-full transition-all duration-500"
                  style={{
                    background: hoveredBook === book.id 
                      ? 'rgba(0,0,0,0.4)' 
                      : 'rgba(0,0,0,0.2)',
                    filter: hoveredBook === book.id ? 'blur(12px)' : 'blur(8px)',
                    transform: hoveredBook === book.id 
                      ? 'translateX(-50%) scale(1.1)' 
                      : 'translateX(-50%) scale(1)',
                  }}
                />
                
                {/* Book Spine */}
                <div
                  className="relative w-16 md:w-24 h-56 md:h-72 rounded-sm transition-all duration-500 origin-bottom"
                  style={{
                    background: book.spineColor,
                    transform: hoveredBook === book.id 
                      ? 'translateY(-12px) scale(1.02)' 
                      : 'translateY(0) scale(1)',
                    boxShadow: hoveredBook === book.id 
                      ? `0 20px 40px rgba(0,0,0,0.4), inset -2px 0 10px rgba(0,0,0,0.3), 0 0 30px ${book.color}30`
                      : `0 8px 20px rgba(0,0,0,0.3), inset -2px 0 10px rgba(0,0,0,0.3)`,
                  }}
                >
                  {/* Spine Texture */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="h-full w-full" style={{
                      background: `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(255,255,255,0.1) 10%, 
                        rgba(255,255,255,0.05) 20%, 
                        transparent 30%,
                        transparent 70%,
                        rgba(0,0,0,0.1) 80%,
                        rgba(0,0,0,0.2) 90%,
                        transparent 100%)`
                    }} />
                  </div>
                  
                  {/* Spine Top/Bottom Bands */}
                  <div 
                    className="absolute top-3 left-1 right-1 h-1 rounded-full opacity-60"
                    style={{ background: book.accentColor }}
                  />
                  <div 
                    className="absolute bottom-3 left-1 right-1 h-1 rounded-full opacity-60"
                    style={{ background: book.accentColor }}
                  />
                  
                  {/* Spine Center Decoration */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl border-2"
                      style={{ 
                        borderColor: book.accentColor,
                        background: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      {book.icon}
                    </div>
                  </div>
                  
                  {/* Title (Vertical) */}
                  <div 
                    className="absolute inset-x-0 top-20 md:top-24 flex items-center justify-center"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    <span 
                      className="text-[10px] md:text-xs font-bold tracking-widest rotate-180"
                      style={{ 
                        color: book.textColor,
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                        maxHeight: '140px',
                        overflow: 'hidden',
                      }}
                    >
                      {book.title}
                    </span>
                  </div>
                  
                  {/* Author */}
                  <div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    <span 
                      className="text-[8px] md:text-[10px] opacity-70 rotate-180"
                      style={{ color: book.textColor }}
                    >
                      {book.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Shelf Edge */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-6 rounded-b-lg"
            style={{
              background: 'linear-gradient(180deg, #5c3a1e 0%, #3d2416 50%, #2a1810 100%)',
              boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.3)',
            }}
          />
        </div>
        
        {/* Shelf Supports */}
        <div className="flex justify-between px-8 -mt-1">
          <div className="w-8 h-16 bg-gradient-to-b from-amber-900 to-amber-950 rounded-b-lg" />
          <div className="w-8 h-16 bg-gradient-to-b from-amber-900 to-amber-950 rounded-b-lg" />
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm font-mono">
          <span className="text-amber-500/60">←</span> 
          Click a book to explore 
          <span className="text-amber-500/60">→</span>
        </p>
      </div>

      {/* Book Preview Modal */}
      {selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedBook(null)}
        >
          <div 
            className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all"
            style={{
              boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px ${selectedBook.color}20`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              ×
            </button>
            
            {/* Book Cover Preview */}
            <div className="flex flex-col items-center text-center">
              <div 
                className="w-24 h-32 rounded-lg mb-6 flex items-center justify-center text-4xl"
                style={{ 
                  background: selectedBook.spineColor,
                  border: `2px solid ${selectedBook.accentColor}40`,
                  boxShadow: `0 10px 30px ${selectedBook.color}30`,
                }}
              >
                {selectedBook.icon}
              </div>
              
              <h2 
                className="text-2xl font-black mb-2"
                style={{ color: selectedBook.textColor }}
              >
                {selectedBook.title}
              </h2>
              
              <p className="text-gray-400 text-sm mb-1">{selectedBook.author}</p>
              <p className="text-gray-600 text-xs mb-6">{selectedBook.year}</p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {selectedBook.description}
              </p>
              
              <button
                onClick={handleReadClick}
                className="w-full py-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  background: `linear-gradient(135deg, ${selectedBook.accentColor}, ${selectedBook.color})`,
                  boxShadow: `0 10px 30px ${selectedBook.color}40`,
                }}
              >
                Open Book →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
