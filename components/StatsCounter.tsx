"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Package, MapPin, Star } from "lucide-react";

const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Happy Pilgrims", color: "#ff9933" },
    { icon: Package, value: 6, suffix: "", label: "Curated Packages", color: "#ffd700" },
    { icon: MapPin, value: 15, suffix: "+", label: "Sacred Destinations", color: "#7ab2b2" },
    { icon: Star, value: 4.9, suffix: "★", label: "Average Rating", color: "#16a34a", decimal: true },
];


function AnimatedNumber({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
    const [count, setCount] = useState(target);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {decimal ? count.toFixed(1) : Math.floor(count)}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{ background: "var(--section-dark)" }}
        >
            {/* Animated background rings */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="animate-spin-slow absolute -top-20 -left-20 w-72 h-72 rounded-full border-2 opacity-10"
                    style={{ borderColor: "#ffd700" }}
                />
                <div
                    className="animate-spin-reverse absolute -bottom-16 -right-16 w-56 h-56 rounded-full border-2 opacity-10"
                    style={{ borderColor: "#ff9933" }}
                />
                <div
                    className="animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border opacity-5"
                    style={{ borderColor: "#7ab2b2", animationDuration: "25s" }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto relative z-10"
            >
                {/* Section label */}
                <p className="text-center text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: "#ffd700" }}>
                    ✦ Trusted by Devotees Across India ✦
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(({ icon: Icon, value, suffix, label, color, decimal }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 30, rotateX: -15 }}
                            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                y: -8,
                                rotateY: 5,
                                scale: 1.05,
                                transition: { duration: 0.25 }
                            }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl group cursor-default card-3d glow-ring"
                            style={{
                                background: "rgba(255,255,255,0.07)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                            }}
                        >
                            <motion.div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 animate-icon-bounce"
                                style={{ background: `${color}22`, border: `1.5px solid ${color}44` }}
                                animate={{ rotateZ: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                            >
                                <Icon className="w-7 h-7" style={{ color }} />
                            </motion.div>

                            {/* Animated number */}
                            <span
                                className="text-4xl font-bold font-serif leading-none mb-1"
                                style={{ color }}
                            >
                                <AnimatedNumber target={value} suffix={suffix} decimal={decimal} />
                            </span>

                            <span
                                className="text-sm font-medium mt-1"
                                style={{ color: "rgba(255,255,255,0.75)" }}
                            >
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
