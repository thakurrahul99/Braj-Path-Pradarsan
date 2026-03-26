"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// ⬇️ Apna Google Place ID yahan paste karo
// Google Maps par apna business dhundo → Share → "Copy link" mein place_id= ke baad wala ID
const GOOGLE_REVIEW_URL = "https://g.page/r/CSZMAA39DJ3iEBM/review";

const testimonials = [
  {
    name: "Ramesh Sharma",
    location: "Delhi",
    rating: 5,
    text: "Absolutely divine experience! The guide knew every story behind every stone of Govardhan Parikrama. I cried at Radha Kund — never felt closer to Radha Rani in my life. Booking was effortless over WhatsApp. Will do every year now.",
    avatar: "RS",
    color: "#ff9933",
    package: "Giriraj Braj Yatra",
  },
  {
    name: "Sunita Agarwal",
    location: "Jaipur",
    rating: 5,
    text: "We were a group of 8 ladies, all first-time Braj visitors. The team arranged everything — AC Tempo Traveller, a wonderful guide and even helped us at every temple. Prem Mandir light show was unforgettable. Highly recommend!",
    avatar: "SA",
    color: "#ffd700",
    package: "Sampurna Braj Mandal Yatra",
  },
  {
    name: "Vikram Mehta",
    location: "Ahmedabad",
    rating: 5,
    text: "I was skeptical booking through WhatsApp, but they were incredibly professional. Our guide explained the significance of each spot in such depth. Kaman Char Dham was a hidden gem I never knew existed. Truly blessed!",
    avatar: "VM",
    color: "#09637e",
    package: "Braj Panchkosi Yatra",
  },
  {
    name: "Priya & Family",
    location: "Mumbai",
    rating: 5,
    text: "We brought elderly parents along. The team was so caring — arranged doli at Barsana, vehicle support during Govardhan Parikrama, and all temples with minimal walking. My mother couldn't stop saying 'Jai Shri Krishna' the entire journey.",
    avatar: "PF",
    color: "#16a34a",
    package: "Giriraj Braj Yatra",
  },
  {
    name: "Anand Tiwari",
    location: "Lucknow",
    rating: 5,
    text: "Mathura Vrindavan 1 day tour with my wife on our anniversary. The guide took us to Nidhivan and told us stories about the eternal Raas Leela — we were in tears. The Yamuna aarti at sunset was breathtaking. Perfect trip!",
    avatar: "AT",
    color: "#ff9933",
    package: "Mathura Vrindavan 1 Day Tour",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          className="text-sm"
          style={{ color: "#ffd700", opacity: i < rating ? 1 : 0.3 }}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

function AvatarCircle({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <motion.div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 glow-ring"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}bb)`,
        border: `2px solid ${color}66`,
      }}
      whileHover={{ scale: 1.12, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {initials}
    </motion.div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative spinning Om in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div
          className="animate-spin-slow text-[22rem] font-serif opacity-[0.025] select-none"
          style={{ color: "var(--text-subtle)" }}
        >
          ॐ
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
            ✦ Pilgrim Stories ✦
          </span>
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mt-3"
            style={{ color: "var(--text)" }}
          >
            What Devotees Say
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden card-3d"
            style={{
              background: "var(--surface)",
              boxShadow: "var(--card-shadow)",
              border: "1px solid var(--border)",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background quote decoration */}
            <Quote
              className="absolute top-6 right-8"
              style={{ width: 120, height: 120, color: t.color, opacity: 0.06 }}
            />

            {/* Animated top accent line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background: `linear-gradient(90deg, ${t.color}, ${t.color}55, transparent)`,
              }}
              layoutId="accent-line"
              transition={{ duration: 0.4 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30, rotateY: -8 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -30, rotateY: 8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars + Package badge */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <StarRating rating={t.rating} />
                  <motion.span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: `${t.color}18`,
                      color: t.color,
                      border: `1px solid ${t.color}44`,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {t.package}
                  </motion.span>
                </div>

                {/* Review text */}
                <p
                  className="text-base md:text-lg leading-relaxed mb-7 font-serif italic"
                  style={{ color: "var(--text)" }}
                >
                  "{t.text}"
                </p>

                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <AvatarCircle initials={t.avatar} color={t.color} />
                  <div>
                    <p
                      className="font-bold text-base"
                      style={{ color: "var(--text)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      📍 {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 28 : 8,
                    height: 8,
                    background:
                      i === index
                        ? `linear-gradient(90deg, #ff9933, #ffd700)`
                        : "var(--border)",
                  }}
                  whileHover={{ scale: 1.3 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ff9933, #ffd700)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(255,153,51,0.4)",
                }}
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Google Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
            Jo Braj mein mehsoos kiya… kya wo share karna chahoge? ❤️
            <br />Rate Your Experience ⭐ It matters!
          </p>

          <motion.a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm text-white shadow-lg transition-all"
            style={{
              background: "linear-gradient(135deg, #4285F4, #34A853)",
              boxShadow: "0 4px 18px rgba(66,133,244,0.45)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9L37.5 9.5C34.1 6.5 29.3 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-2.9-.5-4.2-.1-.1-.2-.2-.4-.3z"
                fill="#FFC107"
              />
              <path
                d="M6.3 15.1l6.6 4.8C14.5 16.1 18.9 13 24 13c3.1 0 5.8 1.1 8 2.9L37.5 9.5C34.1 6.5 29.3 4.5 24 4.5c-7.4 0-13.8 4-17.7 10.6z"
                fill="#FF3D00"
              />
              <path
                d="M24 45.5c5.2 0 9.9-1.9 13.4-5.1l-6.2-5.2C29.2 37 26.7 38 24 38c-5.2 0-9.6-3.3-11.2-7.9L6.1 35c3.8 6.6 10.3 10.5 17.9 10.5z"
                fill="#4CAF50"
              />
              <path
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4-4.1 5.3l6.2 5.2C40 36 44.5 31 44.5 25c0-1.5-.2-2.9-.5-4.2-.1-.1-.2-.2-.4-.3z"
                fill="#1976D2"
              />
            </svg>
            <Star size={14} className="fill-yellow-300 text-yellow-300" />
            Braj vibes kaisi lagi? Batao na
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
