"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Pilgrims" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: MapPin, value: "15+", label: "Sacred Places" },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5.3 + 2) % 98}%`,
  top: `${(i * 7.9 + 5) % 90}%`,
  duration: 3 + (i % 4),
  delay: i * 0.3,
  size: i % 3 === 0 ? "w-1.5 h-1.5" : "w-1 h-1",
}));

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden mt-18 "
    >
      {/* ── Parallax Background Image ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="/herobg.jpeg"
          alt="Sacred Vrindavan"
          className=" absolute w-[130%] md:w-[110%] lg:w-full h-full object-cover blur-[3px] object-[34%_center] md:object-[38%_center] lg:object-center"
        />
      </motion.div>

      {/* ── Cinematic Gradient Overlays ── */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,20,38,0.72) 0%, rgba(4,20,38,0.45) 40%, rgba(4,20,38,0.88) 100%)",
        }}
      />
      {/* Left vignette */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(9,99,126,0.35) 0%, transparent 60%)",
        }}
      />
      {/* Right warm glow */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background:
            "radial-gradient(ellipse at 100% 30%, rgba(255,153,51,0.2) 0%, transparent 55%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-2"
        style={{
          background:
            "linear-gradient(to top, rgba(4,20,38,0.95), transparent)",
        }}
      />

      {/* ── Animated Gold Particles ── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.size} rounded-full pointer-events-none z-3`}
          style={{
            left: p.left,
            top: p.top,
            background: p.id % 2 === 0 ? "#ffd700" : "#ff9933",
            boxShadow: `0 0 4px ${p.id % 2 === 0 ? "#ffd700" : "#ff9933"}`,
          }}
          animate={{
            y: [0, -70, 0],
            opacity: [0, 0.9, 0],
            scale: [0, 1.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: textY, opacity }}
      >
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-linear-to-r from-transparent to-gold/70" />
          <span
            className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md"
            style={{
              background: "rgba(255,215,0,0.12)",
              border: "1px solid rgba(255,215,0,0.35)",
              color: "#ffd700",
            }}
          >
            ✨ Jai Shri Krishna ✨
          </span>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-gold/70" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="font-serif font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          Welcome to the Sacred
          <br />
          <span
            className="relative inline-block"
            style={{
              background:
                "linear-gradient(135deg, #ff9933 0%, #ffd700 40%, #ff9933 70%, #ffd700 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            Land of Braj
          </span>
        </motion.h1>

        {/* Sanskrit line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="text-base font-semibold tracking-[0.18em] mb-4 italic"
          style={{ color: "#7ab2b2" }}
        >
          — Vrindavan · Mathura · Govardhan · Barsana —
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Embark on a divine journey through the sacred leela sthalis of Lord
          Krishna. Curated yatra packages crafted for a deeply spiritual
          experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary */}
          <Link
            href="/packages"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-base overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #ff9933 0%, #ffd700 50%, #ff9933 100%)",
              backgroundSize: "200% auto",
              boxShadow:
                "0 8px 30px rgba(255,153,51,0.45), 0 0 0 0 rgba(255,153,51,0)",
            }}
          >
            <span className="relative z-10">Explore Packages</span>
            <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            {/* shimmer overlay */}
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["-200% center", "200% center"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </Link>

          {/* Secondary */}
          <Link
            href="/book"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.28)",
              color: "white",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,215,0,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.28)";
            }}
          >
            Book Yatra
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7 }}
          className="flex items-center justify-center flex-wrap"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className="flex items-center">
              <div
                className="flex flex-col items-center px-6 sm:px-10 py-2"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className="h-4 w-4" style={{ color: "#ffd700" }} />
                  <span className="text-xl font-bold text-white">{value}</span>
                </div>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <motion.p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.4)" }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
        <motion.div
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-0.5 h-2 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #ffd700, transparent)",
            }}
            animate={{ opacity: [0.5, 1, 0.5], scaleY: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
