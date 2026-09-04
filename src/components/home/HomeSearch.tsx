"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/ai?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex items-center transition-shadow focus-within:shadow-md focus-within:border-gray-200"
    >
      <Search className="w-5 h-5 text-gray-400 ml-3" />
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索 AI 工具..." 
        className="w-full px-4 py-3 outline-none text-gray-700 bg-transparent"
      />
      <button 
        type="submit"
        className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors hidden sm:block"
      >
        搜索
      </button>
    </form>
  );
}
