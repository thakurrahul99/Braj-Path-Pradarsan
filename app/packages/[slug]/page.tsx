"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPackageBySlug } from "@/data/packagesData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    MapPin, Clock, Users, IndianRupee, CheckCircle2,
    XCircle, ChevronDown, Star, ArrowLeft, MessageCircle,
    CalendarDays, Camera, Car,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

export default function PackageDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const pkg = getPackageBySlug(slug);
    if (!pkg) notFound();

    const [activeGallery, setActiveGallery] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [openDay, setOpenDay] = useState<number>(0);

    const whatsappMsg = `*Booking Inquiry — ${pkg.title}*\n-----------------------------\n*Package:* ${pkg.title}\n*Duration:* ${pkg.duration}\n*Price:* ₹${pkg.price.toLocaleString("en-IN")} per person\n\nI am interested in booking this package. Kindly share availability and details.\n\nJai Shri Krishna 🙏`;

    return (
        <main className="min-h-screen" style={{ background: "var(--bg)" }}>
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
                <motion.img
                    src={pkg.gallery[activeGallery] || pkg.image}
                    alt={pkg.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    key={activeGallery}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {pkg.gallery.length > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20"
                    >
                        {pkg.gallery.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveGallery(i)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: i === activeGallery ? 20 : 8,
                                    height: 8,
                                    background: i === activeGallery ? "#ffd700" : "rgba(255,255,255,0.4)",
                                }}
                            />
                        ))}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-24 left-6 z-20"
                >
                    <Link
                        href="/packages"
                        className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all hover:bg-black/50"
                    >
                        <ArrowLeft size={15} />
                        All Packages
                    </Link>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-saffron text-white text-xs font-bold tracking-widest uppercase mb-3">
                            {pkg.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-2">
                            {pkg.title}
                        </h1>
                        <p className="text-white/80 text-lg max-w-2xl italic">{pkg.tagline}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {[
                                { Icon: Clock, text: pkg.duration },
                                { Icon: Users, text: pkg.groupSize },
                                { Icon: MapPin, text: pkg.locations.join(", ") },
                            ].map(({ Icon, text }) => (
                                <span
                                    key={text}
                                    className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15"
                                >
                                    <Icon size={12} />
                                    {text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Main Content ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* ─ Left Column ─ */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <SectionTitle>Overview</SectionTitle>
                            <p className="text-lg leading-relaxed mt-4" style={{ color: "var(--text-muted)" }}>
                                {pkg.description}
                            </p>
                        </motion.section>

                        {/* Pricing Grid */}
                        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <SectionTitle icon={<Car size={18} />}>Pricing Tiers</SectionTitle>
                            <p className="text-xs mt-1 mb-4" style={{ color: "var(--text-muted)" }}>
                                ✦ All prices are <strong>per person</strong> · Prices vary by group size
                            </p>
                            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                {/* Header */}
                                <div
                                    className="grid grid-cols-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: "linear-gradient(90deg, #ff9933 0%, #ffd700 100%)" }}
                                >
                                    <span className="flex items-center gap-1.5"><Users size={12} /> Persons</span>
                                    <span className="flex items-center gap-1.5"><IndianRupee size={12} /> Per Person</span>
                                </div>
                                {/* Rows */}
                                {pkg.pricingTiers.map((tier, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        whileHover={{ scale: 1.01 }}
                                        className="grid grid-cols-2 px-5 py-3.5 items-center transition-colors"
                                        style={{
                                            background: i % 2 === 0 ? "var(--surface)" : "var(--bg)",
                                            borderTop: "1px solid var(--border)",
                                        }}
                                    >
                                        {/* Persons */}
                                        <span className="font-bold text-sm" style={{ color: "var(--text)" }}>
                                            {tier.persons === "1 (Private)" ? (
                                                <span className="inline-flex items-center gap-1">
                                                    <span className="px-1.5 py-0.5 rounded text-white text-[10px] font-bold uppercase" style={{ background: "#ff9933" }}>Private</span>
                                                    <span>1</span>
                                                </span>
                                            ) : (
                                                tier.persons + " persons"
                                            )}
                                        </span>
                                        {/* Price */}
                                        <span className="font-bold text-base" style={{ color: "#ff9933" }}>
                                            ₹{tier.pricePerPerson.toLocaleString("en-IN")}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Highlights */}
                        <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <SectionTitle icon={<Star size={18} />}>Tour Highlights</SectionTitle>
                            <div className="grid sm:grid-cols-2 gap-3 mt-4">
                                {pkg.highlights.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                        className="flex items-start gap-3 p-4 rounded-xl"
                                        style={{
                                            background: "var(--surface)",
                                            border: "1px solid var(--border)",
                                            boxShadow: "var(--card-shadow)",
                                        }}
                                    >
                                        <span className="mt-0.5 shrink-0" style={{ color: "#ff9933" }}>✦</span>
                                        <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{h}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Itinerary */}
                        <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <SectionTitle icon={<CalendarDays size={18} />}>Day-by-Day Itinerary</SectionTitle>
                            <div className="mt-4 space-y-3">
                                {pkg.itinerary.map((day, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl overflow-hidden"
                                        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                                    >
                                        <button
                                            onClick={() => setOpenDay(openDay === i ? -1 : i)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-left"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span
                                                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                                                    style={{ background: "linear-gradient(135deg, #ff9933, #ffd700)" }}
                                                >
                                                    {day.day}
                                                </span>
                                                <div>
                                                    <p className="text-xs text-saffron font-bold uppercase tracking-widest">Day {day.day}</p>
                                                    <p className="font-bold text-base" style={{ color: "var(--text)" }}>{day.title}</p>
                                                </div>
                                            </div>
                                            <motion.div animate={{ rotate: openDay === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                                <ChevronDown size={20} style={{ color: "var(--text-muted)" }} />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {openDay === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="px-6 pb-5 space-y-2.5 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                                                        {day.activities.map((act, j) => (
                                                            <li key={j} className="flex items-start gap-3">
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                                                                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{act}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Inclusions / Exclusions */}
                        <motion.section
                            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="grid sm:grid-cols-2 gap-6"
                        >
                            <motion.div
                                variants={fadeUp}
                                className="p-6 rounded-2xl"
                                style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)" }}
                            >
                                <h3 className="flex items-center gap-2 font-bold text-green-600 dark:text-green-400 mb-4">
                                    <CheckCircle2 size={18} /> What&apos;s Included
                                </h3>
                                <ul className="space-y-2.5">
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text)" }}>
                                            <CheckCircle2 size={14} className="mt-0.5 text-green-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="p-6 rounded-2xl"
                                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
                            >
                                <h3 className="flex items-center gap-2 font-bold text-red-500 dark:text-red-400 mb-4">
                                    <XCircle size={18} /> Not Included
                                </h3>
                                <ul className="space-y-2.5">
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text)" }}>
                                            <XCircle size={14} className="mt-0.5 text-red-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>

                        {/* Gallery thumbnails */}
                        {pkg.gallery.length > 1 && (
                            <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                                <SectionTitle icon={<Camera size={18} />}>Photo Gallery</SectionTitle>
                                <div className="grid grid-cols-3 gap-3 mt-4">
                                    {pkg.gallery.map((img, i) => (
                                        <motion.button
                                            key={i}
                                            whileHover={{ scale: 1.03 }}
                                            onClick={() => setActiveGallery(i)}
                                            className="relative rounded-xl overflow-hidden aspect-video group"
                                            style={{
                                                border: i === activeGallery ? "2.5px solid #ffd700" : "2.5px solid transparent",
                                            }}
                                        >
                                            <img
                                                src={img} alt=""
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {i === activeGallery && <div className="absolute inset-0 bg-gold/20" />}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* FAQs */}
                        <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                            <SectionTitle>Frequently Asked Questions</SectionTitle>
                            <div className="mt-4 space-y-3">
                                {pkg.faqs.map((faq, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="rounded-xl overflow-hidden"
                                        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full flex items-center justify-between px-5 py-4 text-left"
                                        >
                                            <span className="font-semibold text-sm pr-4" style={{ color: "var(--text)" }}>
                                                {faq.q}
                                            </span>
                                            <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                                <ChevronDown size={18} style={{ color: "var(--text-muted)" }} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p
                                                        className="px-5 pb-4 text-sm leading-relaxed border-t pt-3"
                                                        style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                                                    >
                                                        {faq.a}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* ─ Right: Sticky Booking Card ─ */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="sticky top-24 rounded-2xl overflow-hidden"
                            style={{
                                background: "var(--surface)",
                                boxShadow: "var(--card-shadow)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <div className="h-1" style={{ background: "linear-gradient(90deg, #ff9933, #ffd700, #ff9933)" }} />

                            <div className="p-6 space-y-5">
                                <div>
                                    <p className="text-xs text-saffron font-bold tracking-widest uppercase">Starting From</p>
                                    <div className="flex items-end gap-1 mt-1">
                                        <IndianRupee size={26} className="text-saffron mb-0.5" />
                                        <span className="text-4xl font-bold text-saffron">
                                            {pkg.price.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>/ person</span>
                                    </div>
                                </div>

                                <div className="space-y-4" style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                    {[
                                        { Icon: Clock, label: "Duration", value: pkg.duration },
                                        { Icon: Users, label: "Group Size", value: pkg.groupSize },
                                        { Icon: MapPin, label: "Meeting Point", value: pkg.meetingPoint },
                                    ].map(({ Icon, label, value }) => (
                                        <div key={label} className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-saffron/10 shrink-0">
                                                <Icon size={14} className="text-saffron" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                                                    {label}
                                                </p>
                                                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-1">
                                    <motion.a
                                        href={`https://wa.me/917300548523?text=${encodeURIComponent(whatsappMsg)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-bold text-base"
                                        style={{
                                            background: "linear-gradient(135deg, #ff9933 0%, #ffd700 60%, #ff9933 100%)",
                                            backgroundSize: "200%",
                                            boxShadow: "0 4px 20px rgba(255,153,51,0.4)",
                                        }}
                                    >
                                        <MessageCircle size={18} />
                                        Book via WhatsApp 🙏
                                    </motion.a>

                                    <Link
                                        href="/book"
                                        className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm border-2 border-saffron text-saffron hover:bg-saffron hover:text-white transition-all duration-300"
                                    >
                                        Fill Booking Form
                                    </Link>
                                </div>

                                <p className="text-center text-xs" style={{ color: "var(--text-subtle)" }}>
                                    🔒 Free cancellation · No hidden charges
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function SectionTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2.5">
            {icon && <span className="text-saffron">{icon}</span>}
            <h2 className="text-2xl font-serif font-bold" style={{ color: "var(--text)" }}>
                {children}
            </h2>
            <div className="flex-1 h-px ml-2" style={{ background: "var(--border)" }} />
        </div>
    );
}
