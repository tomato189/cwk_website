"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadHero from "@/components/download/DownloadHero";
import Platforms from "@/components/download/Platforms";
import NewsCards from "@/components/download/NewsCards";
import InfoCTA from "@/components/download/InfoCTA";

export default function DownloadPage(){
  return(
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40" style={{backgroundImage:"url('/images/background_in_space.webp')"}}/>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
      <Navbar/>
      <div className="relative z-10 space-y-16 pb-20">
        <DownloadHero/>
        <Platforms/>
        <NewsCards/>
        <InfoCTA/>
      </div>
      <Footer/>
    </main>
  );
}
