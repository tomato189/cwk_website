"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useOnlineStatus from "@/hooks/useOnlineStatus";
export default function StatusPage() {
    const { formattedOnlineShort , formattedOnlineFull  , serverStatus , loadingText } = useOnlineStatus();

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40"
        style={{
          backgroundImage: `url('/images/background_in_space.webp')`,
        }}
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <Navbar />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center text-white">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-8 shadow-2xl max-w-lg w-full">

          <h1 className="text-3xl font-extrabold tracking-wide">
            Revival Status Page
          </h1>

          <h2 className="text-xl font-semibold mt-4">
            Server Status
          </h2>

          <div className="mt-6 w-full bg-black/20 border border-white/10 rounded-xl py-4 px-5 flex justify-between items-center text-lg font-semibold">
            <span className="uppercase tracking-wider">Outrun</span>

            <span
              className={
                serverStatus.includes("Working")
                  ? "text-green-400"
                  : serverStatus.includes("Offline")
                  ? "text-red-400"
                  : "text-yellow-300"
              }
            >
              {serverStatus.includes("Loading") ? loadingText : serverStatus}
            </span>
          </div>

          <p className="mt-6 text-lg font-bold tracking-wide">
            <span className={formattedOnlineShort === "N/A" ? "text-red-400" : "text-green-300"}>
              {formattedOnlineFull}
            </span>{" "}
            players online
          </p>

        </div>
      </div>

      <Footer />
    </main>
  );
}
