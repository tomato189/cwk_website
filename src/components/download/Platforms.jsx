"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Platforms() {
  const [platform, setPlatform] = useState("pc");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) setPlatform("android");
    else if (/iphone|ipad|ipod/.test(ua)) setPlatform("ios");
  }, []);

  const links = {
    pc: "/download/pc",
    android: "/download/android",
    ios: "/download/ios"
  };

  // ✅ ستايل أندرويد القديم
  const androidStyle =
    "border border-lime-400/30 bg-lime-500/10 hover:bg-lime-500/20 " +
    "group-hover:translate-x-1 transition shadow-[0_0_10px_rgba(100,255,100,0.3)]";

  // ✨ الستايل العادي للباقين (بدون تغيير Hover)
  const normalStyle =
    "border border-white/10 bg-white/5 hover:bg-white/10 transition";

  const item = (name, os, icon) => (
    <Link
      href={links[os]}
      className={`group flex items-center justify-between rounded-xl p-4 ${
        platform === os ? androidStyle : normalStyle
      }`}
    >
      <div className="flex items-center gap-2">
        <p className="text-white font-semibold uppercase">{name}</p>
        {icon && <img src={icon} className="h-5 w-5 opacity-90" />}
      </div>

      {/* سهم المتحرك فقط للزر الصحيح ✅ */}
      <svg
        className={`h-5 w-5 text-white/80 transition ${
          platform === os ? "group-hover:translate-x-1" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Link>
  );

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10 p-6 sm:p-8">
          <h3 className="text-center text-2xl font-extrabold text-white">PLAY NOW</h3>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {item("PC", "pc", null)}
            {item("ANDROID", "android", "/images/android-svgrepo-com.svg")}
            {item("IOS / IPAD", "ios", "/images/apple-logo-svgrepo-com.svg")}
          </div>
        </div>
      </div>
    </section>
  );
}
