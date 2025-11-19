"use client";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import CardItem from "@/components/cards/CardItem";
import SkeletonCard from "@/components/cards/SkeletonCard";
import SearchBar from "@/components/cards/SearchBar";
import Footer from "@/components/Footer";

export default function CardsPage() {
  const [items, setItems] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      setLoadingList(true);
      const res = await fetch("/api/cards", { cache: "no-store" });
      const json = await res.json();
      if (!active) return;
      setItems(json.items || []);
      setLoadingList(false);
    })();
    return () => { active = false; };
  }, []);

  const names = useMemo(() => items.map(i => i.name), [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;
    return items.filter(i => i.name.toLowerCase().includes(query));
  }, [items, q]);

  return (
    <main className="min-h-screen w-full relative">
      <div className="absolute inset-0 bg-[url('/images/background_in_space.webp')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-black/70" />
       <Navbar />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
       

        {/* Search Centered Under Navbar */}
        <div className="w-full flex items-center justify-center mt-16 mb-4">
        <SearchBar
        value={q}
        onChange={setQ}
        names={names}
        onAcceptSuggestion={() => {}}
        />
        </div>


        {loadingList ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
            {Array.from({ length: 18 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
            {filtered.map((it) => (
              <CardItem key={it.id} item={it} />
            ))}
          </div>
        )}

        <p className="text-white/60 text-xs mt-6">
          Tip: hover or click any card to reveal details.
        </p>

        <Footer />
      </div>
    </main>
  );
}
