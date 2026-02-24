"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageCard from "../../components/PackageCard";
import { motion } from "framer-motion";

const allPackages = [
  {
    title: "Vrindavan Parikrama",
    description:
      "Complete spiritual tour of Vrindavan including Banke Bihari, ISKCON, Prem Mandir, Nidhivan, and Yamuna Arti.",
    duration: "2 Days / 1 Night",
    price: 2500,
    locations: ["Vrindavan", "Raman Reti"],
    image: "/vrindavan.jpg",
  },
  {
    title: "Mathura Janmabhoomi",
    description:
      "Visit Shri Krishna Janmabhoomi, Dwarkadhish Temple, and Vishram Ghat. Experience the history of Mathura.",
    duration: "1 Day",
    price: 1200,
    locations: ["Mathura"],
    image: "/gallarypic/shri-krishna-janamsthan-1.jpg",
  },
  {
    title: "Barsana & Nandgaon",
    description:
      "Explore the playful lands of Radha and Krishna. Visit Radha Rani Temple, Nand Bhavan, and Prem Sarovar.",
    duration: "1 Day",
    price: 1500,
    locations: ["Barsana", "Nandgaon"],
    image: "/Barsana.jpg",
  },
  {
    title: "Govardhan Parikrama",
    description:
      "Perform the sacred 21km parikrama of Giriraj Govardhan. Visit Danghati, Kusum Sarovar, and Mansi Ganga.",
    duration: "1 Day",
    price: 1800,
    locations: ["Govardhan", "Radha Kund"],
    image: "/goverdhan-parikrama.jpg",
  },
  {
    title: "Complete Braj Yatra",
    description:
      "The ultimate spiritual journey covering Mathura, Vrindavan, Govardhan, Barsana, Nandgaon, and Gokul.",
    duration: "3 Days / 2 Nights",
    price: 5500,
    locations: ["All Major Braj Sites"],
    image: "/Vrajamandala.jpg",
  },
  {
    title: "Mystery of Nidhivan",
    description:
      "Special evening tour focusing on the mysteries of Nidhivan and Seva Kunj. (Daytime visit only).",
    duration: "Half Day",
    price: 800,
    locations: ["Vrindavan"],
    image: "/gallarypic/Nidhivan.png",
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--section-dark)]">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffd700, transparent)" }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ff9933, transparent)" }}
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4 backdrop-blur-sm"
          >
            ✦ SACRED ITINERARIES ✦
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Spiritual Packages
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover the divine essence of Braj with our thoughtfully designed
            yatra packages. Each journey is crafted for a deeply spiritual experience.
          </p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
