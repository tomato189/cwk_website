"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShimmerButton from "@/components/ui/ShimmerButton";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* HERO (الفيديو) */}
      <section className="relative">
        <div className="relative flex items-center justify-center overflow-hidden">
          <video
            className="w-full opacity-70 bg-[#0f1923] object-cover max-h-[640px]"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/home-hero.mp4" /* ضع الفيديو: Card Wars Kingdom  Adventure Time  Cartoon Network Asia.mp4 */
          />
          {/* Overlay النص */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center grid gap-4 px-4">
              <p className="text-white/90">A Cards game for Adventure Time</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold" style={{fontFamily:'"Rubik Doodle Shadow",system-ui'}}>
                Card Wars Kingdom
              </h1>
              <div className="mt-2">
                <ShimmerButton onClick={() => (window.location.href = '/download')}>
                  PLAY IT NOW
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-white text-black bg-[url('https://i.postimg.cc/J0TRZ6md/Design-sans-titre1.png')] bg-cover">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* نص العنوان الكبير */}
            <div className="lg:max-w-[60%]">
              <h1 className="mb-4 text-[42px] leading-[46px] sm:text-[60px] sm:leading-[62px] lg:text-[100px] lg:leading-[100px] font-extrabold tracking-tight">
                WELCOME TO <br/> ADVENTURE TIME:<span className="text-black">CARD WARS</span> <span className="text-black">KINGDOM!</span>
              </h1>
              <p className="text-[15px] leading-7 sm:text-base">
                <span className="font-bold">Dive into the fantastical world</span> of Adventure Time with Card Wars Kingdom, where you can battle your way to the top as a champion of the Card Wars! Join your favorite characters from the Land of Ooo in this epic card game, filled with strategic battles, powerful creatures, and exciting adventures.
                <br /><br />
                Build your ultimate deck, summon unique creatures, and challenge players worldwide in this thrilling, fast-paced card battler. Master your strategy, discover powerful combos, and unleash devastating moves to crush your opponents. Whether you’re battling in epic PvP duels or embarking on quests with Finn, Jake, and other iconic heroes, there’s always an adventure waiting.
                <br /><br />
                Are you ready to become the ultimate Card Wars champion? Let the battles begin
              </p>
            </div>

            {/* فيديو + صور الخرائط الصغيرة */}
            <div className="lg:max-w-[40%] grid gap-4 place-items-center">
              <video
                className="w-full h-auto object-cover rounded-md"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/trailer.mp4" /* ضع: Card Wars Kingdom (Available Now!)  Adventure Time  Cartoon Network Asia.mp4 */
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img src="/images/map-ice.png" className="w-full" alt="map ice" />
                <img src="/images/map-candy2.png" className="w-full" alt="map candy 2" />
                <img src="/images/map-candy.png" className="w-full" alt="map candy" />
                <img src="/images/map-badlands.png" className="w-full" alt="map badlands" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEROES */}
      <section className="bg-brand-500">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <div className="hidden lg:block lg:max-w-[50%]">
              <img src="/images/main-characters.png" alt="Main characters" className="w-full min-h-full" />
            </div>

            <div className="lg:max-w-[50%] grid gap-4">
              <h1 className="text-[64px] leading-[64px] font-extrabold">YOUR <br/><span>HEROES</span></h1>
              <h2 className="text-sm font-bold tracking-wide">IMAGINATION IS YOUR STRONGEST SPELL.</h2>
              <p className="text-sm leading-6">
                In Card Wars Kingdom, you’ll summon an army of powerful creatures, each with unique abilities and skills that give you the edge in battle. From fiery spells to strategic gameplay, your heroes wield an array of magic that no other deck can match. No two creatures fight alike, and no two battles ever play out the same way.
              </p>
              <a href="/Agents" className="w-max px-5 py-3 bg-black text-[#ECE8E1] hover:bg-white hover:text-brand-500 transition rounded-md">
                VIEW ALL AGENTS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="bg-[#ECE8E1] text-black" id="museum-teleporte">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="grid gap-4 lg:max-w-[60%]">
              <h1 className="text-5xl font-extrabold">YOUR MAPS</h1>
              <h2 className="text-sm font-extrabold tracking-wide">FIGHT AROUND THE ADVEUNTUE TIME WORLDS</h2>
              <p className="text-sm leading-7">
                Embark on a thrilling journey through the Adventure Time universe in Card Wars Kingdom! Battle your way through iconic locations like the Grasslands, Ice Kingdom, and the Fire Kingdom. Assemble your team of powerful creatures, unleash magical spells, and take on epic challenges across diverse maps. Discover hidden secrets, collect rare cards, and conquer every battlefield in your quest to become the ultimate Card Wars champion!
              </p>
              <a href="/MAPS" className="w-max px-5 py-3 bg-brand-500 text-[#ECE8E1] hover:bg-[#0F1923] hover:text-[#ECE8E1] transition rounded-md">
                VIEW ALL AGENTS
              </a>
            </div>

            <div className="lg:max-w-[40%]">
              <img
                src="/images/main-map.png"
                alt="Main Map"
                className="w-[420px] max-w-full mx-auto rounded-full border-4 border-brand-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GAME INFO (خلفية صورة + Overlay) */}
      <section className="relative bg-[url('/images/bananas-on-ship.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-6 py-28 text-center text-white">
          <div className="stroke-mask text-[72px] sm:text-[96px] leading-none select-none pointer-events-none mb-4">
            ADVENTURE
          </div>
          <h3 className="text-lg">Get your</h3>
          <h2 className="text-3xl sm:text-4xl font-bold">Game and rest assured</h2>
          <p className="mt-4 text-sm sm:text-base text-white/90">
            Our game is open source, meaning anyone can access, review, and contribute to its code. This transparency
            ensures that the software is secure and free from hidden threats. By allowing the community to inspect and
            improve the code, we enhance its safety and reliability for all users.
          </p>
          <div className="mt-8 flex justify-center">
            <ShimmerButton as="a" onClick={() => window.open('https://github.com/shishkabob27/CardWarsKingdom','_blank')}>
              VIEW SOURCE CODE
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* DISCORD SECTION */}
      <section className="bg-[#292929]">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="flex flex-wrap items-center justify-center gap-3 text-white text-center">
<h1 className="text-base sm:text-lg">Join our community on</h1>
<a href="https://discord.gg/cwk" target="_blank" className="flex items-center justify-center">
<img src="/images/discord-white.png" alt="Discord" className="h-8 w-8 sm:h-12 sm:w-12 object-contain transition-transform hover:scale-110"/>
</a>
</div>
</div>
</section>


      <Footer />
    </main>
  );
}
