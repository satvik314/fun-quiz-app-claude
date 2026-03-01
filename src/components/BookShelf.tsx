"use client";

import dynamic from "next/dynamic";

const BookShelfClient = dynamic(() => import("./BookShelfClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-6xl mx-auto px-4 min-h-[500px] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-48 h-72 bg-gray-800/50 rounded-lg mb-4" />
        <div className="w-32 h-4 bg-gray-800/50 rounded" />
      </div>
    </div>
  ),
});

export default function BookShelf() {
  return <BookShelfClient />;
}
