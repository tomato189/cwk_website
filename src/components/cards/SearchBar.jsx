"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SearchBar({ value, onChange }) {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!value.trim()) return;
    const corrected = value
      .replace(/[^a-zA-Z0-9\s]/g, "") 
      .replace(/\s+/g, " ");

    if (corrected !== value) onChange(corrected);
  }, [value, onChange]);

  return (
    <div className="w-full flex justify-center mt-6 mb-4 px-4">
      <div className="relative w-full max-w-xl">

        <FiSearch
          className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 text-white/50 transition-all duration-300
          ${focused ? "scale-110 text-white" : ""}`}
        />

        <input
          type="text"
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search cards..."
          className={`w-full px-12 pr-12 py-3 rounded-xl bg-white/10 text-white placeholder-white/50
            outline-none transition-all duration-300
            ${focused 
              ? "border-2 border-white shadow-[0_0_18px_rgba(255,255,255,0.35)] scale-[1.06]"
              : "border border-white/20"
            }`}
        />

        {value.length > 0 && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition"
          >
            <IoClose size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
