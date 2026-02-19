import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lateral Thinking // Interactive Mind Map",
  description: "Learn Edward de Bono's lateral thinking techniques through an interactive mindmap with quickies and quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased grid-bg scanlines relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
