"use client";

export default function SkeletonCard() {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
      <div className="h-1/2 bg-white/10" />
      <div className="p-4 space-y-2">
        <div className="h-4 w-2/3 bg-white/10 rounded" />
        <div className="h-3 w-1/2 bg-white/10 rounded" />
      </div>
    </div>
  );
}
