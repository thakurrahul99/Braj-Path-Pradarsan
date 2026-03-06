import type { Metadata } from "next";
import Script from "next/script";
import {
  Playfair_Display,
  Inter,
  Caveat,
  Rubik,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

import WhatsAppFloating from "../components/WhatsAppFloating";
import Navbar from "../components/Navbar";

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
  other: {
    "facebook-domain-verification": "e8a9dusm9r9keog93k0gibiqjfgicx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${caveat.variable} ${rubik.variable} ${cursiveFont.variable} antialiased font-sans`}
      >
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1654904602090484');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1654904602090484&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Global animated background blobs */}
        <div className="bg-blobs" aria-hidden="true">
          <div className="blob blob-teal" />
          <div className="blob blob-saffron" />
          <div className="blob blob-gold" />
        </div>

        {/* Global Navbar — fixed at top */}
        <Navbar />
        {/* Spacer equal to navbar height so page content starts below it */}
        <div aria-hidden="true" style={{ height: "72px" }} />

        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
