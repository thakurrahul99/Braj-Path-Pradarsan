import type { Metadata } from "next";
import { getPackageBySlug } from "@/data/packagesData";
import PackageDetailClient from "./PackageDetailClient";
import { notFound } from "next/navigation";

// Per-slug SEO metadata as specified in the SEO prompt
const slugMeta: Record<string, { title: string; description: string }> = {
  "mathura-vrindavan-1-day-tour": {
    title:
      "Mathura Vrindavan 1 Day Tour ₹999 | Krishna Janmabhoomi + Prem Mandir | Braj Path",
    description:
      "1 din mein Mathura aur Vrindavan. Krishna Janmabhoomi, Prem Mandir, Banke Bihari, ISKCON, Yamuna Aarti. ₹999/person. AC vehicle + guide.",
  },
  "govardhan-parikrama": {
    title:
      "Govardhan Parikrama Tour ₹999 | 21km Giriraj Parikrama | Braj Path Pradarshak",
    description:
      "Govardhan Parikrama — 21 km Giriraj Ji ki parikrama. Radha Kund, Kusum Sarovar, Mansi Ganga. Elders ke liye vehicle support. ₹999/person.",
  },
  "giriraj-braj-yatra": {
    title:
      "Giriraj Braj Yatra 2 Days ₹2199 | Govardhan + Barsana + Nandgaon | Braj Path",
    description:
      "2 din 1 raat — Govardhan Parikrama, Barsana Shriji Temple, Nandgaon aur Kokilavan. ₹2199/person. All inclusive.",
  },
  "barsana-nandgaon-kokilavan-kaman": {
    title:
      "Braj Panchkosi Yatra ₹2199 | Barsana Nandgaon Kokilavan Kaman | Braj Path",
    description:
      "2 din 1 raat — Barsana, Nandgaon, Kokilavan aur Kaman Char Dham. Hidden gems of Braj. ₹2199/person.",
  },
  "sampurna-braj-mandal-yatra": {
    title:
      "Sampurna Braj Mandal Yatra 4 Days ₹5999 | Complete Braj Pilgrimage | Braj Path",
    description:
      "4 din 3 raat mein poora Braj Mandal — Mathura, Vrindavan, Gokul, Govardhan, Barsana, Nandgaon, Kaman. ₹5999/person.",
  },
  "vrindavan-mathura-mahawan-gokul": {
    title:
      "Divya Braj Darshan 1 Day ₹1099 | Vrindavan Mathura Gokul Mahawan | Braj Path",
    description:
      "1 din mein 5 sacred cities — Vrindavan, Mathura, Raval, Mahawan aur Gokul. ₹1099/person. Family special.",
  },
  "barsana-nandgaon-kokilavan-day-tour": {
    title:
      "Barsana Nandgaon Kokilavan 1 Day Tour ₹999 | Radha Rani Ki Nagri | Braj Path",
    description:
      "1 din mein Barsana Shriji Temple, Nandgaon aur Kokilavan. Radha bhakton ke liye perfect yatra. ₹999/person.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  const meta = slugMeta[slug] ?? {
    title: `${pkg.title} | Braj Path Pradarshak`,
    description: pkg.description.slice(0, 160),
  };

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.brajpathpradarshak.com/packages/${slug}`,
      siteName: "Braj Path Pradarshak",
      images: [
        {
          url: `https://www.brajpathpradarshak.com${pkg.image.startsWith("/") ? pkg.image : "/" + pkg.image}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [
        `https://www.brajpathpradarshak.com${pkg.image.startsWith("/") ? pkg.image : "/" + pkg.image}`,
      ],
    },
  };
}

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <PackageDetailClient params={params} />;
}
