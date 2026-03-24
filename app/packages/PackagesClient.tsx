"use client";

import Footer from "../../components/Footer";
import PackageCard from "../../components/PackageCard";
import { packages } from "@/data/packagesData";
import { motion } from "framer-motion";

export default function PackagesClient() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero Banner */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--section-dark)]">
        <div className="absolute inset-0">
          <img
            src="/Krishnaeyes.jpg"
            alt="Spiritual Background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
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
            yatra packages. Each journey is crafted for a deeply spiritual
            experience.
          </p>
        </motion.div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
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
      </section>

      <Footer />
    </main>
  );
}
