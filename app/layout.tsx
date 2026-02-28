import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Caveat,
  Rubik,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

import WhatsAppFloating from "../components/WhatsAppFloating";

const cursiveFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive", // CSS variable banayein
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braj Path Pradarshak - Spiritual Journey to Vrindavan",
  description:
    "Book your spiritual tour packages for Vrindavan, Mathura, and Barsana. Experience the land of Lord Krishna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${caveat.variable} ${rubik.variable} ${cursiveFont.variable} antialiased bg-cream text-gray-900 font-sans`}
      >
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
