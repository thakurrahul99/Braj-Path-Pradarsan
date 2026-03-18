import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Braj Path Pradarshak | Mathura Vrindavan Yatra Packages",
  description:
    "Mathura, Vrindavan, Govardhan aur Barsana ke liye curated pilgrimage packages. Expert Brajwasi guides, AC vehicles, ₹999 se shuru.",
  openGraph: {
    title: "Braj Path Pradarshak | Mathura Vrindavan Yatra Packages",
    description:
      "Mathura, Vrindavan, Govardhan aur Barsana ke liye curated pilgrimage packages. Expert Brajwasi guides, AC vehicles, ₹999 se shuru.",
    url: "https://www.brajpathpradarshak.com",
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

export default function Home() {
  return <HomeClient />;
}
