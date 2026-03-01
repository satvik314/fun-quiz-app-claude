"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "dark", label: "Dark", icon: "🌙" },
    { id: "light", label: "Light", icon: "☀️" },
    { id: "warm", label: "Warm", icon: "📖" },
  ] as const;

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`
            relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            flex items-center gap-1.5
            ${theme === t.id 
              ? "bg-white/10 text-white shadow-lg" 
              : "text-white/50 hover:text-white/80 hover:bg-white/5"
            }
          `}
          title={`${t.label} theme`}
        >
          <span className="text-base">{t.icon}</span>
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
}
