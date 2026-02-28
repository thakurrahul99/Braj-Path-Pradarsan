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
    <div className="hidden md:flex items-center flex-1 mx-4">
        <div
            className="h-0.5 w-full"
            style={{
                background: "linear-gradient(90deg, #ff9933, #ffd700)",
                opacity: 0.35,
            }}
        />
        <div
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: "#ffd700", opacity: 0.5 }}
        />
    </div>
);

export default function HowItWorks() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ background: "var(--bg)" }}
        >
            <div className="max-w-5xl mx-auto">
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
                        <>
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 28 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.55 }}
                                className="flex-1 flex flex-col items-center text-center p-8 rounded-2xl group relative"
                                style={{
                                    background: "var(--surface)",
                                    boxShadow: "var(--card-shadow)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                {/* Step number badge */}
                                <span
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-3 py-0.5 rounded-full"
                                    style={{
                                        background: `${color}22`,
                                        color,
                                        border: `1.5px solid ${color}55`,
                                    }}
                                >
                                    STEP {step}
                                </span>

                                {/* Icon */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mt-2"
                                    style={{ background: `${color}15` }}
                                    whileHover={{ scale: 1.1, rotate: 8 }}
                                    transition={{ type: "spring", stiffness: 280 }}
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
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
