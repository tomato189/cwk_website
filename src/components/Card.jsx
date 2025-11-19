"use client";
import Image from "next/image";

export default function Card({ card }) {
  const { title, image, description, stats } = card;

  return (
    <div className="group perspective">
      <div className="card-inner relative w-full h-64 rounded-2xl shadow-xl transition-transform duration-700" >
        {/* FRONT */}
        <div className="card-face card-front absolute inset-0 rounded-2xl overflow-hidden flex flex-col">
          <div className="h-36 w-full relative">
            {image ? (
              // use img tag for external urls (next/image needs domains config)
              <img src={image} alt={title} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-lg font-bold">{title}</span>
              </div>
            )}
          </div>
          <div className="p-4 bg-black/60 flex-1">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm text-white/80 mt-2 line-clamp-3">
              {description || "No description."}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="card-face card-back absolute inset-0 rounded-2xl overflow-auto p-4 bg-gradient-to-b from-black/80 to-neutral-900 text-sm text-white/90 transform rotate-y-180">
          <h4 className="font-bold mb-2">Properties</h4>
          <div className="space-y-1">
            {Object.keys(stats || {}).length === 0 ? (
              <p className="text-white/70">No stats available.</p>
            ) : (
              Object.entries(stats).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-white/70">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
