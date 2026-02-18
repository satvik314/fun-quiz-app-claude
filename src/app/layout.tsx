import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizGlitch // The Weird Quiz App",
  description: "Test your brain with the quirkiest quiz on the internet",
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
