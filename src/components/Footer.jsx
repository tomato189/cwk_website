export default function Footer() {
  return (
    <footer className="bg-[#0a0a0d] py-10 border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-6">

        {/* Logo */}
        <img
          src="/images/card-wars-kingdom-icon.png"
          alt="Card Wars Icon"
          className="w-16 h-16 drop-shadow-xl"
        />

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm font-semibold">
          <a href="/download" className="text-white/90 hover:text-white hover:underline">
            FREE DOWNLOAD
          </a>
          <a href="https://discord.gg/cwk" target="_blank" className="text-white/90 hover:text-white hover:underline">
            DISCORD SERVER
          </a>
          <a href="/status" className="text-white/90 hover:text-white hover:underline">
            STATUS PAGE
          </a>
        </div>

        {/* Company Logos */}
        <div className="flex items-center gap-8 opacity-70">
          <img
            src="https://static.wikia.nocookie.net/logopedia/images/e/ee/Cartoon_Network_2010.svg"
            className="h-6"
            alt="CN"
          />
          <img
            src="https://brand.wbd.com/wp-content/themes/wbd-brand-guide/img/warner-bros-discovery-logo-horizontal-white.svg"
            className="h-6"
            alt="WBD"
          />
        </div>

        {/* Rights note */}
        <p className="text-xs text-white/60 max-w-lg leading-relaxed">
          © 2025 Card Wars Kingdom Remake • Fan Project  
          <br />
          Cartoon Network™ & Warner Bros. Discovery own all original rights. No monetization involved.
        </p>

      </div>
    </footer>
  );
}
