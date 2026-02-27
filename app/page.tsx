"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import { packages } from "@/data/packagesData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { Shield, Compass, Leaf } from "lucide-react";

// Show only 3 featured packages on the home page
const featuredPackages = packages.slice(0, 3);

const features = [
  {
    Icon: Shield,
    title: "Expert Guides",
    desc: "Locally experienced guides who know the stories and secrets of every temple.",
    color: "#ff9933",
  },
  {
    Icon: Compass,
    title: "Comfortable Travel",
    desc: "AC coaches and sanitized vehicles for a hassle-free journey.",
    color: "#1c39bb",
  },
  {
    Icon: Leaf,
    title: "Satvik Meals",
    desc: "Pure vegetarian prasadam arrangements included in premium packages.",
    color: "#16a34a",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <Hero />

      {/* ── Popular Packages ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
            ✦ Spiritual Journeys ✦
          </span>
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4"
            style={{ color: "var(--text)" }}
          >
            Our Popular Packages
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Choose from our carefully curated pilgrimage packages designed to
            give you the most authentic spiritual experience.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              slug={pkg.slug}
              title={pkg.title}
              description={pkg.description}
              duration={pkg.duration}
              price={pkg.price}
              locations={pkg.locations}
              image={pkg.image}
              discountBadge={pkg.discountBadge}
              visualTag={pkg.visualTag}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/packages"
            className="inline-block px-8 py-3 rounded-full font-bold border-2 border-saffron text-saffron hover:bg-saffron hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
          >
            View All Packages →
          </Link>
        </motion.div>
        {/* ── Custom Package Section ── */}
        <section className="relative mt-20 max-w-4xl mx-auto bg-linear-to-r from-[#188e4f] via-[#62b85c] to-[#b2c333] dark:from-[#000000] dark:via-[#0b0b0b] dark:to-[#0c0c0c] rounded-3xl shadow-lg border border-gold/20 p-8 md:p-14 text-center">
          <div className="absolute inset-0 opacity-35 dark:opacity-5 bg-[url('/custom.jpeg')] bg-cover bg-center rounded-3xl pointer-events-none z-0 " />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4">
              ✦ BUILD YOUR OWN YATRA ✦
            </span>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gold drop-shadow-lg"
              style={{ color: "#FFD700" }}
            >
              Custom Package
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg md:text-xl mb-6 text-deep-blue font-semibold drop-shadow-lg"
              style={{ color: "#fff" }}
            >
              Design your perfect Braj pilgrimage—choose your destinations,
              travel style, group size, and special requirements. Our team will
              craft a personalized spiritual journey just for you!
            </p>
            <ul
              className="max-w-xl mx-auto text-left text-base md:text-lg mb-8 text-deep-blue font-semibold drop-shadow-lg"
              style={{ color: "#fff" }}
            >
              <li>• Select from all major Braj destinations</li>
              <li>
                • Flexible pickup/drop (Mathura, Agra, Delhi, Jaipur, Bharatpur and
                more)
              </li>
              <li>• AC vehicles, expert guides, and custom itinerary</li>
              <li>• Add-ons: Satvik meals, night stay, special darshans</li>
              <li>• Quick booking via WhatsApp</li>
            </ul>
            <Link
              href="/custom-package"
              className="relative z-10 inline-block bg-saffron text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-deep-blue hover:scale-105 transition-all duration-300 shadow-lg shadow-saffron/30 text-lg focus:outline-none focus:ring-2 focus:ring-gold"
              style={{ position: "relative" }}
            >
              Create Your Custom Package →
            </Link>
          </motion.div>
        </section>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--surface-2)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
              ✦ Our Promise ✦
            </span>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mt-3"
              style={{ color: "var(--text)" }}
            >
              Why Choose Braj Path Pradarsan?
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map(({ Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 rounded-2xl text-center group cursor-default"
                style={{
                  background: "var(--surface)",
                  boxShadow: "var(--card-shadow)",
                  border: "1px solid var(--border)",
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${color}18` }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-8 w-8" style={{ color }} />
                </motion.div>
                <h3 className="text-lg font-bold mb-3" style={{ color }}>
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-4 relative overflow-hidden bg-(--section-dark)">
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffd700, transparent)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff9933, transparent)",
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Begin Your <span className="text-gold">Sacred Journey</span> Today
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Let us handle every detail while you immerse yourself in Bhakti.
          </p>
          <Link
            href="/book"
            className="inline-block bg-saffron text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-deep-blue hover:scale-105 transition-all duration-300 shadow-lg shadow-saffron/30"
          >
            Book Your Yatra 🙏
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
