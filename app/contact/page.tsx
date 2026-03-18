import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Braj Path Pradarshak | WhatsApp +91 7078117174",
  description:
    "Braj yatra booking ke liye contact karo. WhatsApp: +91 7078117174. Govardhan, Mathura. 9 AM - 8 PM.",
  openGraph: {
    title: "Contact Us | Braj Path Pradarshak | WhatsApp +91 7078117174",
    description:
      "Braj yatra booking ke liye contact karo. WhatsApp: +91 7078117174. Govardhan, Mathura. 9 AM - 8 PM.",
    url: "https://www.brajpathpradarshak.com/contact",
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

export default function ContactPage() {
  return <ContactClient />;
}
