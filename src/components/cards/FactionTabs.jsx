"use client";

const TABS = ["All", "Blue", "Corn", "Sandy", "Nice", "Swamp", "Ice"];

export default function FactionTabs({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {TABS.map(tab => {
        const active = value === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={[
              "px-3 py-1.5 rounded-lg text-sm transition border",
              active
                ? "bg-white text-black border-white"
                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
            ].join(" ")}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
