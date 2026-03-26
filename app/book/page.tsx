"use client";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import RazorpayBookingForm from "../../components/RazorpayBookingForm";

export default function BookPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── Page Header ── */}
      <section className="relative pt-12 pb-12 px-4 overflow-hidden bg-[var(--section-dark)] text-white text-center">
        <motion.div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffd700, transparent)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4">
            ✦ BEGIN THE JOURNEY ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Book Your Braj Yatra
          </h1>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Fill your details below. Pay a small advance online to confirm your
            booking — pay the rest to your guide on arrival.
          </p>
        </motion.div>
      </section>

      {/* ── Booking Form ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <RazorpayBookingForm />
      </section>

      <Footer />
    </main>
  );
}
