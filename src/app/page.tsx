import BookShelf from "@/components/BookShelf";

export default function Home() {
  return (
    <main 
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{
        background: 'linear-gradient(to bottom, var(--color-bg-primary), var(--color-bg-secondary))',
      }}
    >
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--color-glow)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'var(--color-glow)' }}
        />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 relative z-10">
        <BookShelf />
      </div>
      
      {/* Footer */}
      <footer className="text-center py-6 relative z-10">
        <p 
          className="font-mono text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Interactive book summaries for curious minds
        </p>
      </footer>
    </main>
  );
}
