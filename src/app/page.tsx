import BookShelf from "@/components/BookShelf";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 relative z-10">
        <BookShelf />
      </div>
      
      {/* Footer */}
      <footer className="text-center py-6 relative z-10">
        <p className="font-mono text-xs text-gray-600">
          Interactive book summaries for curious minds
        </p>
      </footer>
    </main>
  );
}
