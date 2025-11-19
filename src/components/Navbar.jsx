"use client";
import { useState } from "react";
import Link from "next/link";
import ShimmerButton from "@/components/ui/ShimmerButton";
import useOnlineStatus from "@/hooks/useOnlineStatus";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { formattedOnlineShort } = useOnlineStatus();

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-xl bg-[#00000080] border-b border-white/10 shadow-[0_2px_30px_-8px_rgba(165,50,255,0.4)]">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/rmFcXggw/Main-Logo.webp"
            alt="CWK"
            className="h-8 w-auto drop-shadow-lg"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 font-medium tracking-wide ">
          <Link className="text-white/80 hover:text-white transition" href="/">
            Home
          </Link>
          <Link className="text-white/80 hover:text-white transition" href="/cards" >
            Cards
          </Link>
          <Link className="text-white/80 hover:text-white transition" href="/status">
            Status
          </Link>
          <Link className="text-white/80 hover:text-white transition"  href="https://discord.gg/cwk">
            Support
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden sm:flex items-center gap-4">

          <ShimmerButton
            onClick={() => (window.location.href = '/download')}
            aria-label="Download"
          >
            <span className="material-symbols-outlined">download</span>
            Download
          </ShimmerButton>

          {/* Online dot */}
          <div className="relative group cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-pulseRing"></span>
            <span className="relative block h-3.5 w-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.9)]"></span>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-2 transition shadow-xl whitespace-nowrap z-[100]">
              {formattedOnlineShort} Online
            </div>
          </div>
        </div>

        {/* Burger Menu */}
        <button
          aria-label="Open menu"
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10 transition"
          onClick={() => setOpen(v => !v)}
        >
          <span className="material-symbols-outlined text-xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div className={`sm:hidden bg-[#0a0a0af0] backdrop-blur-xl transition-all duration-300 overflow-hidden ${open ? "max-h-[300px]" : "max-h-0"}`}>
        <div className="px-4 py-3 space-y-3 text-center font-semibold">
          <Link href="https://discord.gg/cwk" target="_blank" className="block text-white/90 hover:text-white py-2">News</Link>
          <a href="#museum-teleporte" className="block text-white/90 hover:text-white py-2">Museum</a>
          <Link href="https://discord.gg/cwk" target="_blank" className="block text-white/90 hover:text-white py-2">Support</Link>
          <Link href="/status" className="block text-white/90 hover:text-white py-2">Status</Link>

          <ShimmerButton className="w-full mt-2" onClick={() => (window.location.href = '/download')}>
            <span className="material-symbols-outlined">download</span>
            Download
          </ShimmerButton>
        </div>
      </div>
    </nav>
  );
}
