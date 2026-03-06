"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, MessageCircle, Palmtree } from "lucide-react";

const steps = [
    {
        icon: Search,
        step: "01",
        title: "Choose Your Package",
        desc: "Browse our curated Braj yatra packages or tell us your dream pilgrimage and we'll design it for you.",
        color: "#ff9933",
    },
    {
        icon: MessageCircle,
        step: "02",
        title: "Connect on WhatsApp",
        desc: "Message us directly on WhatsApp. We confirm your booking, answer all queries, and handle every detail.",
        color: "#ffd700",
    },
    {
        icon: Palmtree,
        step: "03",
        title: "Enjoy Your Yatra",
        desc: "Show up and surrender. Our expert Brajwasi guide and AC vehicle take care of everything from pickup to drop.",
        color: "#16a34a",
    },
];

const connector = (
    <motion.div
        className="hidden md:flex items-center flex-1 mx-4"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ originX: 0 }}
    >
        <div
            className="h-0.5 w-full"
            style={{
                background: "linear-gradient(90deg, #ff9933, #ffd700)",
                opacity: 0.5,
            }}
        />
        <motion.div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: "#ffd700" }}
            animate={{ scale: [1, 1.4, 1], boxShadow: ["0 0 0 0 rgba(255,215,0,0)", "0 0 0 6px rgba(255,215,0,0.3)", "0 0 0 0 rgba(255,215,0,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </motion.div>
);

export default function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{ background: "var(--bg)" }}
        >
            {/* Background decorative lotuses */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="animate-spin-slow absolute top-10 right-10 w-40 h-40 rounded-full border-2 opacity-10"
                    style={{ borderColor: "#ff9933" }}
                />
                <div
                    className="animate-spin-reverse absolute bottom-10 left-10 w-28 h-28 rounded-full border-2 opacity-10"
                    style={{ borderColor: "#ffd700" }}
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
                        ✦ Simple Process ✦
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-serif font-bold mt-3"
                        style={{ color: "var(--text)" }}
                    >
                        How to Book Your Yatra
                    </h2>
                    <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
                        We've made booking your sacred journey as simple and stress-free as possible.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="flex flex-col md:flex-row items-stretch">
                    {steps.map(({ icon: Icon, step, title, desc, color }, i) => (
                        <div key={step} className="contents">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                                transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
                                whileHover={{
                                    y: -10,
                                    rotateY: 4,
                                    scale: 1.03,
                                    transition: { duration: 0.3 }
                                }}
                                className="flex-1 flex flex-col items-center text-center p-8 rounded-2xl group relative card-3d glow-ring"
                                style={{
                                    background: "var(--surface)",
                                    boxShadow: "var(--card-shadow)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                {/* Glowing bg blob on hover */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse at center, ${color}0f 0%, transparent 70%)`,
                                    }}
                                />

                                {/* Step number badge */}
                                <motion.span
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-3 py-0.5 rounded-full"
                                    style={{
                                        background: `${color}22`,
                                        color,
                                        border: `1.5px solid ${color}55`,
                                    }}
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                                >
                                    STEP {step}
                                </motion.span>

                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mt-2"
                                    style={{ background: `${color}15`, border: `1.5px solid ${color}33` }}
                                    animate={{
                                        rotateZ: [0, 6, -6, 0],
                                        scale: [1, 1.08, 1],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                                >
                                    <Icon className="w-8 h-8" style={{ color }} />
                                </motion.div>

                                <h3 className="text-lg font-bold mb-3" style={{ color }}>
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                    {desc}
                                </p>
                            </motion.div>
                            {i < steps.length - 1 && connector}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
