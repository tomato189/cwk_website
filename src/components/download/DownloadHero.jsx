"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DownloadHero() {
  const [platform, setPlatform] = useState("pc");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) setPlatform("android");
    else if (/iphone|ipad|ipod/.test(ua)) setPlatform("ios");
  }, []);

  const links = {
    pc: "/download/pc",
    android: "/download/android",
    ios: "/download/soon"
  };

  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="text-center lg:text-left space-y-2">
              <p className="text-sm tracking-wider text-white/80">PLAY CARD WARS KINGDOM</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Available on Android & PC</h2>
              <p className="text-white/70">
                Get the latest version <span className="font-semibold text-white">2.0.0</span>
              </p>

              <div className="mt-4">
                <Link
                  href={links[platform]}
                  className="group relative inline-flex items-center gap-3 rounded-xl px-6 py-3 text-white font-semibold"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-80 blur transition group-hover:blur-md" />
                  <span className="relative z-10 flex items-center gap-2">
                    <img src="/images/card-wars-kingdom-icon.png" alt="icon" className="h-7 w-7 rounded-md" />
                    <span className="uppercase tracking-widest">
                      {platform === "android"
                        ? "Download Now"
                        : platform === "pc"
                        ? "Download Now"
                        : "Coming Soon"}
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full max-w-sm">
              <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                <video
                  className="rounded-xl w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/videos/home-hero.mp4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl bg-[#111111]/60 border border-white/10 px-4 py-3">
          <p className="text-xs sm:text-sm text-white/80">
            The rights to the game are fully owned by Cartoon Network and Warner Bros. Discovery.
          </p>
          <Link
            href="/learn-more"
            className="text-xs sm:text-sm font-semibold text-white hover:text-white/80 underline underline-offset-4"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
