"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Package, MapPin, Star } from "lucide-react";

const stats = [
    { icon: Users, value: 500, suffix: "+", label: "Happy Pilgrims", color: "#ff9933" },
    { icon: Package, value: 6, suffix: "", label: "Curated Packages", color: "#ffd700" },
    { icon: MapPin, value: 15, suffix: "+", label: "Sacred Destinations", color: "#1c39bb" },
    { icon: Star, value: 4.9, suffix: "★", label: "Average Rating", color: "#16a34a", decimal: true },
];

function AnimatedNumber({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
    const [count, setCount] = useState(0);
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
            className="py-14 px-4 sm:px-6 lg:px-8"
            style={{ background: "var(--surface-2)" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                {/* Section label */}
                <p className="text-center text-xs font-semibold tracking-widest uppercase text-saffron mb-8">
                    ✦ Trusted by Devotees Across India ✦
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map(({ icon: Icon, value, suffix, label, color, decimal }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl group cursor-default"
                            style={{
                                background: "var(--surface)",
                                boxShadow: "var(--card-shadow)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <motion.div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                style={{ background: `${color}18` }}
                                whileHover={{ scale: 1.12, rotate: 6 }}
                                transition={{ type: "spring", stiffness: 300 }}
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
                                style={{ color: "var(--text-muted)" }}
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
