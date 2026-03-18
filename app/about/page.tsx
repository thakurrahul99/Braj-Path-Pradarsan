import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title:
    "Hamare Baare Mein | Braj Path Pradarshak — Brajwasi Guides Govardhan Mathura",
  description:
    "Braj Path Pradarshak — Govardhan ke local Brajwasi guides. Authentic, affordable aur comfortable Braj yatra seva.",
  openGraph: {
    title:
      "Hamare Baare Mein | Braj Path Pradarshak — Brajwasi Guides Govardhan Mathura",
    description:
      "Braj Path Pradarshak — Govardhan ke local Brajwasi guides. Authentic, affordable aur comfortable Braj yatra seva.",
    url: "https://www.brajpathpradarshak.com/about",
    siteName: "Braj Path Pradarshak",
    images: [
      {
        url: "https://www.brajpathpradarshak.com/herobg.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.brajpathpradarshak.com/herobg.jpeg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
