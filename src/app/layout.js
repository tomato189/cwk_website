export const metadata = {
  title: "Welcome Card Wars Kingdom",
  description: "Card Wars Kingdom – Free to Play Online Card Game based on Cartoon Network's Adventure Time.",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* أيقونة */}
        <link rel="icon" href="https://i.postimg.cc/522JrMVz/AT-Card-Wars2-Logo-Eng-1.png" />
        {/* Google Fonts + Material Icons */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        {/* Core Sans (اختياري) */}
        <link href="https://db.onlinewebfonts.com/c/f71277d823fc51b3aec6b4ce0ad76286?family=Core+Sans+E+W01+55+Medium" rel="stylesheet" />
      </head>
      <body className="font-[Poppins] antialiased">{children}</body>
    </html>
  );
}
