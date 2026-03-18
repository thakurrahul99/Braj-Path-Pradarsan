import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title:
    "Braj Yatra Packages | Mathura Vrindavan Govardhan Tour | Braj Path Pradarshak",
  description:
    "7 curated Braj pilgrimage packages — 1 day tours ₹999 se, 4 day Sampurna Braj Mandal Yatra tak. Senior citizen friendly.",
  openGraph: {
    title:
      "Braj Yatra Packages | Mathura Vrindavan Govardhan Tour | Braj Path Pradarshak",
    description:
      "7 curated Braj pilgrimage packages — 1 day tours ₹999 se, 4 day Sampurna Braj Mandal Yatra tak. Senior citizen friendly.",
    url: "https://www.brajpathpradarshak.com/packages",
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

export default function PackagesPage() {
  return <PackagesClient />;
}
