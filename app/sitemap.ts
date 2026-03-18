import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.brajpathpradarshak.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/packages`, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/packages/mathura-vrindavan-1-day-tour`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/packages/govardhan-parikrama`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/packages/giriraj-braj-yatra`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/packages/barsana-nandgaon-kokilavan-kaman`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/packages/sampurna-braj-mandal-yatra`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/packages/vrindavan-mathura-mahawan-gokul`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/packages/barsana-nandgaon-kokilavan-day-tour`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/custom-package`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/gallery`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
