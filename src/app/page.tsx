import Link from "next/link";
import { topics } from "@/data/quizData";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2 glitch-text">
          <span className="text-techno-blue">Quiz</span>
          <span className="text-techno-red">Glitch</span>
        </h1>
        <p className="font-mono text-sm text-techno-blue/60 tracking-widest uppercase">
          {"// "}Pick a topic. Answer 7 questions. Try not to panic.
        </p>
        <div className="mt-4 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-techno-blue to-transparent" />
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {topics.map((topic, index) => (
          <Link
            key={topic.id}
            href={`/quiz/${topic.id}`}
            className="group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-techno-card border border-techno-blue/20 rounded-xl p-6 hover:border-techno-blue/60 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] h-full">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-techno-blue/40 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-techno-blue/40 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-techno-blue/40 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-techno-blue/40 rounded-br-xl" />

              {/* Icon */}
              <div className="text-5xl mb-4 hover-shake inline-block">
                {topic.icon}
              </div>

              {/* Topic info */}
              <h2 className="text-xl font-bold text-white mb-1 group-hover:text-techno-blue transition-colors">
                {topic.name}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{topic.description}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-techno-red font-mono text-sm font-semibold group-hover:gap-3 transition-all">
                <span>START</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  {">>"}
                </span>
              </div>

              {/* Question count badge */}
              <div className="absolute top-4 right-4 bg-techno-blue/10 text-techno-blue text-xs font-mono px-2 py-1 rounded-md border border-techno-blue/20">
                7 Q&apos;s
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="font-mono text-xs text-gray-600">
          {"<"} built with mass confusion &amp; questionable trivia {"/>"}
        </p>
      </div>
    </main>
  );
}
