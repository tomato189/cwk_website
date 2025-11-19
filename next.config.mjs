// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   assetPrefix: './',  // مهم عشان المسارات تصير نسبية
//   images: {
//     domains: ['cdn.discordapp.com','media.discordapp.net','i.postimg.cc'],
//   },
// };
// export default nextConfig;
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const nextConfig  = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "rgb(99 102 241)" // بنفسجي الزر
        }
      },
      keyframes: {
        // بديل bor-style (نبضة المؤشر الأخضر)
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" }
        },
        // لمعان للزر (Aceternity-style shimmer)
        shine: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" }
        }
      },
      animation: {
        pulseRing: "pulseRing 2s ease infinite",
        shine: "shine 1.2s linear infinite"
      }
    }
  },
  plugins: []
};
 export default nextConfig