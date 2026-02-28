"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

const photos = [
    { src: "/gallarypic/prem%20mandir.webp", label: "Prem Mandir, Vrindavan", span: "col-span-2 row-span-2" },
    { src: "/gallarypic/barsanaradharani.jpg", label: "Radha Rani Temple, Barsana", span: "" },
    { src: "/gallarypic/daanghati.jpg", label: "Daan Ghati Temple", span: "" },
    { src: "/gallarypic/Banke-bihari.webp", label: "Banke Bihari Temple", span: "" },
    { src: "/gallarypic/ISKCON-Temple-Vrindavan.webp", label: "ISKCON Vrindavan", span: "" },
    { src: "/gallarypic/radhakund.webp", label: "Radha Kund", span: "" },
];

export default function GalleryPreview() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{ background: "var(--bg)" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10"
                >
                    <div>
                        <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
                            ✦ Sacred Places ✦
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-serif font-bold mt-2"
                            style={{ color: "var(--text)" }}
                        >
                            Glimpses of Braj
                        </h2>
                    </div>
                    <Link
                        href="/gallary"
                        className="inline-flex items-center gap-2 text-sm font-bold text-saffron hover:text-gold transition-colors shrink-0 group"
                    >
                        <Camera size={16} />
                        View Full Gallery
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
                    {photos.map(({ src, label, span }, i) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.07, duration: 0.45 }}
                            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${span}`}
                        >
                            {/* Image */}
                            <motion.img
                                src={src}
                                alt={label}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                                style={{
                                    background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)",
                                }}
                            >
                                <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                            </div>

                            {/* Gold border on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ border: "2px solid rgba(255,215,0,0.5)" }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* CTA strip below grid */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center justify-center mt-8"
                >
                    <Link
                        href="/gallary"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold border-2 border-saffron text-saffron hover:bg-saffron hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30 text-sm"
                    >
                        <Camera size={15} />
                        See All Sacred Photos
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
