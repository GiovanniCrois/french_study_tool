import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "French aide",
  description: "French practice tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-dvh bg-radial from-cyan-500  to-cyan-700 ">
          {children}
        </div>
      </body>
    </html>
  );
}
