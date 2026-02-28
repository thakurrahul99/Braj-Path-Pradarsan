"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const floatingOrbs = [
  { size: 320, x: "-10%", y: "-10%", delay: 0, color: "#ff9933" },
  { size: 280, x: "70%", y: "60%", delay: 1.5, color: "#ffd700" },
  { size: 200, x: "40%", y: "-20%", delay: 3, color: "#1c39bb" },
];

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a7fa0] via-[#1a6b7e] to-[#1a3a5c] dark:from-[#041826] dark:via-[#041826] dark:to-[#020810]">

      {/* Animated floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 dark:opacity-10 pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-gold rounded-full pointer-events-none"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13.7) % 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/40 text-gold text-sm font-semibold tracking-widest mb-6 backdrop-blur-sm"
          >
            ✨ JAI SHRI KRISHNA ✨
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-gold to-saffron animate-pulse">
              Land of Braj
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the divine vibes of Vrindavan, Mathura, and Barsana.
            Let us guide you on a spiritual journey through the sacred leela
            sthalis of Lord Krishna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/packages"
              className="group px-8 py-4 bg-saffron text-white rounded-full font-bold text-lg shadow-lg shadow-saffron/30 hover:shadow-saffron/60 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-transparent hover:border-gold"
            >
              Explore Packages
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/25 transition-all duration-300 border border-white/30 hover:border-white"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <p className="text-xs mt-2 tracking-widest opacity-60">SCROLL</p>
      </motion.div>
    </div>
  );
}
