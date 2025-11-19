"use client";
export default function InfoCTA(){
  return(
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-extrabold">LOOKING FOR MORE INFORMATION?</h3>
              <p className="text-white/70">Check out our <a className="underline underline-offset-4 text-white" href="https://discord.gg/cwk" target="_blank">Discord</a> to learn more about the game.</p>
            </div>
            <div className="flex gap-3">
              <a href="https://discord.gg/cwk" target="_blank" className="rounded-xl px-4 py-2 bg-indigo-500/80 hover:bg-indigo-500 text-white font-semibold transition">Discord</a>
              <a href="https://discord.com/channels/1227932764117143642/1250781080618012775" target="_blank" className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold transition">Support</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition" href="#top">
                <img src="/images/up-svgrepo-com.svg" className="h-5 w-5" alt="up"/>
              </a>
              <span className="text-white/80 text-sm">BACK TO TOP</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <span>We thank <b>PAVEL COOL</b> for graphics support.</span>
              <a className="rounded-xl px-4 py-2 bg-red-500/80 hover:bg-red-500 text-white font-semibold transition" href="https://youtube.com/@pcapavelcool2110?si=p0NF8NzFuhI74ujj" target="_blank">YOUTUBE LINK</a>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}
