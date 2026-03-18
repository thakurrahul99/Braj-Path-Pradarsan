import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Aksar Pooche Jaane Wale Sawaal | Braj Path Pradarshak",
  description:
    "Mathura Vrindavan yatra ke baare mein frequently asked questions — packages, pickup, cancellation, senior citizens, timing aur bahut kuch.",
  openGraph: {
    title: "FAQ | Braj Path Pradarshak",
    description:
      "Mathura Vrindavan yatra ke baare mein frequently asked questions. Packages, pickup, cancellation, senior citizens.",
    url: "https://www.brajpathpradarshak.com/faq",
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

const faqs = [
  {
    q: "Mathura se Vrindavan kitni door hai?",
    a: "12-15 km, lagbhag 20-25 minute ki drive.",
  },
  {
    q: "Govardhan Parikrama kitne kilometer ki hai?",
    a: "21 kilometer. Elders ke liye vehicle support available hai.",
  },
  {
    q: "Kya Delhi se pickup milti hai?",
    a: "Haan — Delhi, Agra, Jaipur aur Bharatpur se pickup available hai.",
  },
  {
    q: "Booking kaise karein?",
    a: "WhatsApp pe +91 7078117174 pe message karo ya Book Yatra form fill karo.",
  },
  {
    q: "Package mein kya include hai?",
    a: "AC vehicle, expert Brajwasi guide, darshan coordination. Premium packages mein breakfast bhi.",
  },
  {
    q: "Senior citizens ke liye kya arrangements hain?",
    a: "Vehicle support during Govardhan Parikrama, specially designed packages available hain.",
  },
  {
    q: "Cancellation policy kya hai?",
    a: "Free cancellation. Details WhatsApp pe le lo booking ke time.",
  },
  {
    q: "Best time to visit kab hai?",
    a: "October se March. Janmashtami, Holi aur Radhashtami pe special packages.",
  },
  {
    q: "Kya khana include hai?",
    a: "Basic packages mein nahi. Custom/premium packages mein satvik meals arrange ho sakti hain.",
  },
  {
    q: "Group discount milta hai?",
    a: "Haan — 6+ persons pe group pricing available hai.",
  },
];

// Schema.org FAQPage for rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Header ── */}
      <section
        className="relative py-20 text-center overflow-hidden"
        style={{ background: "var(--section-dark)" }}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,153,51,0.3), transparent 70%)",
          }}
        />
        <div className="relative z-10 px-6">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-5">
            ✦ FREQUENTLY ASKED QUESTIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Aksar Pooche Jaane Wale Sawaal
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            Braj yatra ke baare mein aapke sawaalon ke jawab yahan hain.
            Koi aur sawaal ho to WhatsApp karo — hum 24 ghante mein jawab denge. 🙏
          </p>
        </div>
      </section>

      {/* ── FAQ List ── */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none"
                style={{ color: "var(--text)" }}
              >
                <span className="font-semibold text-base pr-4 flex items-center gap-3">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff9933, #ffd700)",
                    }}
                  >
                    {i + 1}
                  </span>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                  style={{ color: "var(--text-muted)" }}
                />
              </summary>
              <div
                className="px-6 pb-5 pt-1 text-sm leading-relaxed border-t"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="pl-10">{faq.a}</div>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-2xl text-center"
          style={{
            background: "rgba(255,153,51,0.07)",
            border: "1px solid rgba(255,153,51,0.2)",
          }}
        >
          <p
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--text)" }}
          >
            🙏 Aur koi sawaal hai?
          </p>
          <p className="mb-5 text-sm" style={{ color: "var(--text-muted)" }}>
            Humse seedha WhatsApp pe baat karo — expert team 9 AM se 8 PM
            available hai.
          </p>
          <a
            href="https://wa.me/917078117174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-saffron text-white font-bold px-8 py-3 rounded-full hover:bg-gold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            WhatsApp pe Poochho →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
