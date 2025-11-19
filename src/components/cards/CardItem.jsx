"use client";
import { useEffect, useRef, useState } from "react";

export default function CardItem({ item }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetched = useRef(false);
function toHD(url = "") {
  return url.replace(/\/scale-to-width-down\/\d+/, "");
}

  const safeImg = (url) => {
    if (!url || typeof url !== "string" || url.trim() === "") return null;
    if (url.startsWith("/api/proxy-image")) return url;
    return `/api/proxy-image?url=${encodeURIComponent(url)}`;
  };

  const normalize = (d) => {
    const clone = { ...d };

    clone.image = safeImg(clone.image ?? item.image);

    clone.yields = Array.isArray(clone.yields)
      ? clone.yields.map((y) =>
          typeof y === "string"
            ? safeImg(y)
            : safeImg(y?.image) ?? null
        ).filter(Boolean)
      : [];

    clone.requirements = Array.isArray(clone.requirements)
      ? clone.requirements.map((rq) => ({
          level: rq.level,
          images: (rq.images || [])
            .map((img) => safeImg(img))
            .filter(Boolean),
        }))
      : [];

    clone.stats = clone.stats ?? {};

    return clone;
  };

  const loadDetails = async () => {
    if (fetched.current) return;
    fetched.current = true;
    setLoading(true);
    try {
      const res = await fetch(`/api/card?id=${encodeURIComponent(toHD(item.id))}`);
      const json = await res.json();
      setDetails(normalize(json));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="group [perspective:1000px] cursor-pointer"
      onMouseEnter={loadDetails}
      onClick={loadDetails}
    >
      <div className="relative w-full aspect-[3/4] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-black/40 border border-white/10 [backface-visibility:hidden]">
          {safeImg(item.image) && (
            <img
              src={safeImg(item.image)}
              alt={item.name}
              className="h-2/3 w-full object-contain bg-black/20"
            />
          )}
          <div className="p-3">
            <p className="text-white font-bold text-sm line-clamp-2">{item.name}</p>
            <p className="text-white/70 text-xs">{item.id.replace(/_/g, " ")}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-[#0b0b0b]/90 border border-white/10 px-3 py-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {loading || !details ? (
            <div className="h-full w-full animate-pulse space-y-3">
              <div className="h-28 w-full bg-white/10 rounded-md" />
              <div className="h-4 w-3/4 bg-white/10 rounded" />
              <div className="h-3 w-2/3 bg-white/10 rounded" />
            </div>
          ) : (
            <div className="h-full overflow-y-auto scrollbar-none space-y-2">

              {/* Header */}
              <div className="flex items-center gap-2">
                {details.image && (
                  <img
                    src={details.image}
                    alt={details.title || item.name}
                    className="h-16 w-16 object-contain rounded"
                  />
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{details.title || item.name}</p>
                  <p className="text-white/70 text-xs">
                    #{details.creatureNo || "—"} • {details.faction || "Unknown"} • {details.rarity || "—"}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-white/80">
                <div className="bg-white/5 rounded px-2 py-1">Cost: {details.stats.dragCost || "—"}</div>
                <div className="bg-white/5 rounded px-2 py-1">HP: {details.stats.hp || "—"}</div>
                <div className="bg-white/5 rounded px-2 py-1">ATK: {details.stats.atk || "—"}</div>
                <div className="bg-white/5 rounded px-2 py-1">MAG: {details.stats.mgc || "—"}</div>
                <div className="bg-white/5 rounded px-2 py-1 col-span-2">CRT: {details.stats.crt || "—"}</div>
              </div>

              {/* Yields */}
              {details.yields.length > 0 && (
                <div>
                  <p className="text-white text-xs mb-1">Yields</p>
                  <div className="flex flex-wrap gap-1">
                    {details.yields.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className="h-10 w-7 object-contain rounded bg-white/5"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {details.requirements.length > 0 && (
                <div>
                  <p className="text-white text-xs mb-1">Requirements</p>
                  <div className="space-y-1 max-h-20 overflow-y-auto pr-1">
                    {details.requirements.map((rq, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[11px] text-white/70">{rq.level}</span>
                        <div className="flex gap-0.5">
                          {rq.images.map((src, j) => (
                            <img key={j} src={src} className="h-5 w-5 rounded bg-white/10" alt="" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
