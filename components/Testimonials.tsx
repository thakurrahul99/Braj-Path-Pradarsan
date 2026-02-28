"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
        color: "#1c39bb",
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
                <span key={i} className="text-gold text-sm" style={{ opacity: i < rating ? 1 : 0.3 }}>
                    ★
                </span>
            ))}
        </div>
    );
}

function AvatarCircle({ initials, color }: { initials: string; color: string }) {
    return (
        <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}
        >
            {initials}
        </div>
    );
}

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setIndex((i) => (i + 1) % testimonials.length);

    const t = testimonials[index];

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ background: "var(--surface-2)" }}
        >
            <div className="max-w-4xl mx-auto">
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
                    <div
                        className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
                        style={{
                            background: "var(--surface)",
                            boxShadow: "var(--card-shadow)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        {/* Background quote decoration */}
                        <Quote
                            className="absolute top-6 right-8 opacity-5"
                            style={{ width: 120, height: 120, color: t.color }}
                        />

                        {/* Top accent line */}
                        <div
                            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                            style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}55, transparent)` }}
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35 }}
                            >
                                {/* Stars + Package badge */}
                                <div className="flex flex-wrap items-center gap-3 mb-5">
                                    <StarRating rating={t.rating} />
                                    <span
                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                        style={{
                                            background: `${t.color}18`,
                                            color: t.color,
                                            border: `1px solid ${t.color}44`,
                                        }}
                                    >
                                        {t.package}
                                    </span>
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
                                        <p className="font-bold text-base" style={{ color: "var(--text)" }}>
                                            {t.name}
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                                            📍 {t.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Nav buttons */}
                    <div className="flex items-center justify-between mt-6">
                        {/* Dot indicators */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === index ? 24 : 8,
                                        height: 8,
                                        background: i === index ? "#ff9933" : "var(--border)",
                                    }}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={prev}
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
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
                                whileTap={{ scale: 0.9 }}
                                onClick={next}
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #ff9933, #ffd700)",
                                    color: "white",
                                }}
                                aria-label="Next review"
                            >
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
