"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { packages } from "../../data/packagesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Users,
  Moon,
  Utensils,
  MessageSquare,
  User,
  Phone,
  Mail,
  Package,
  Send,
  Star,
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "917078117174";

// tiers: total transport cost for that vehicle capacity bracket.
// Per-person = totalCost / people.
type SurchargeTier = { maxPeople: number; totalCost: number };

const PICKUP_LOCATIONS = [
  {
    id: "mathura",
    label: "Mathura / Vrindavan",
    icon: "🕌",
    tiers: [
      { maxPeople: 99, totalCost: 0 }, // always free
    ] as SurchargeTier[],
  },
  {
    id: "agra",
    label: "Agra",
    icon: "🏰",
    tiers: [
      { maxPeople: 2, totalCost: 4500 },
      { maxPeople: 4, totalCost: 5000 },
      { maxPeople: 6, totalCost: 5600 },
      { maxPeople: 12, totalCost: 6500 },
      { maxPeople: 99, totalCost: 8000 },
    ] as SurchargeTier[],
  },
  {
    id: "delhi",
    label: "Delhi",
    icon: "🌆",
    tiers: [
      { maxPeople: 2, totalCost: 5500 },
      { maxPeople: 4, totalCost: 6900 },
      { maxPeople: 6, totalCost: 8000 },
      { maxPeople: 12, totalCost: 9000 },
      { maxPeople: 99, totalCost: 15000 },
    ] as SurchargeTier[],
  },
  {
    id: "jaipur",
    label: "Jaipur",
    icon: "🏯",
    tiers: [
      { maxPeople: 2, totalCost: 6000 },
      { maxPeople: 4, totalCost: 8000 },
      { maxPeople: 6, totalCost: 9000 },
      { maxPeople: 12, totalCost: 10000 },
      { maxPeople: 99, totalCost: 8000 },
    ] as SurchargeTier[],
  },
  {
    id: "bharatpur",
    label: "Bharatpur",
    icon: "🏙️",
    tiers: [
      { maxPeople: 2, totalCost: 2200 },
      { maxPeople: 4, totalCost: 2600 },
      { maxPeople: 6, totalCost: 3000 },
      { maxPeople: 12, totalCost: 3500 },
      { maxPeople: 99, totalCost: 4800 },
    ] as SurchargeTier[],
  },
  {
    id: "tudla",
    label: "Tudla",
    icon: "🏛️",
    tiers: [
      { maxPeople: 2, totalCost: 4500 },
      { maxPeople: 4, totalCost: 5000 },
      { maxPeople: 6, totalCost: 5600 },
      { maxPeople: 12, totalCost: 6500 },
      { maxPeople: 99, totalCost: 8000 },
    ] as SurchargeTier[],
  },
];

const STEPS = [
  { id: 1, title: "Choose Package", icon: Package },
  { id: 2, title: "Pickup Location", icon: MapPin },
  { id: 3, title: "Drop Location", icon: MapPin },
  { id: 4, title: "Requirements", icon: Star },
  { id: 5, title: "Contact Info", icon: User },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns the PER-PERSON surcharge for a given location and group size */
function getLocationSurchargePerPerson(
  locationId: string,
  people: number,
): number {
  const loc = PICKUP_LOCATIONS.find((l) => l.id === locationId);
  if (!loc) return 0;
  const tier = loc.tiers.find((t) => people <= t.maxPeople);
  const totalCost = tier
    ? tier.totalCost
    : loc.tiers[loc.tiers.length - 1].totalCost;
  return Math.ceil(totalCost / people); // per-person share
}

function getPriceForPersonCount(pkg: (typeof packages)[0], count: number) {
  // Find the best matching pricing tier
  const tiers = pkg.pricingTiers;
  for (const tier of tiers) {
    const p = tier.persons;
    if (p === "1 (Private)" && count === 1) return tier.pricePerPerson;
    if (p === "2" && count === 2) return tier.pricePerPerson;
    if (p === "2-3" && count >= 2 && count <= 3) return tier.pricePerPerson;
    if (p === "4+" && count >= 4 && count <= 5) return tier.pricePerPerson;
    if (p === "4-6" && count >= 4 && count <= 6) return tier.pricePerPerson;
    if ((p === "6+" || p === "6+") && count >= 6) return tier.pricePerPerson;
  }
  // Fallback: last tier
  return tiers[tiers.length - 1].pricePerPerson;
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CustomPackagePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [selectedPackageSlug, setSelectedPackageSlug] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [needDrop, setNeedDrop] = useState(false);
  const [dropLocation, setDropLocation] = useState("");
  const [nightStay, setNightStay] = useState(false);
  const [food, setFood] = useState(false);
  const [people, setPeople] = useState(2);
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Selected package object
  const selectedPackage = useMemo(
    () => packages.find((p) => p.slug === selectedPackageSlug),
    [selectedPackageSlug],
  );

  // ── Price Calculation ──────────────────────────────────────────────────────
  const priceBreakdown = useMemo(() => {
    if (!selectedPackage) return null;

    const basePerPerson = getPriceForPersonCount(selectedPackage, people);
    const pickupSurcharge = pickupLocation
      ? getLocationSurchargePerPerson(pickupLocation, people)
      : 0;
    const dropSurcharge =
      needDrop && dropLocation
        ? getLocationSurchargePerPerson(dropLocation, people)
        : 0;

    // Extract number of nights from duration string
    const durationText = selectedPackage.duration;
    const nightsMatch = durationText.match(/(\d+)\s*Night/i);
    const nights = nightsMatch ? parseInt(nightsMatch[1]) : 1;

    const nightStayCost = nightStay ? 1000 * nights : 0;
    const foodCost = food ? 499 * nights : 0;

    const perPersonTotal =
      basePerPerson +
      pickupSurcharge +
      dropSurcharge +
      nightStayCost +
      foodCost;
    const grandTotal = perPersonTotal * people;

    return {
      basePerPerson,
      pickupSurcharge,
      dropSurcharge,
      nightStayCost,
      foodCost,
      perPersonTotal,
      grandTotal,
      nights,
    };
  }, [
    selectedPackage,
    people,
    pickupLocation,
    needDrop,
    dropLocation,
    nightStay,
    food,
  ]);

  // ── Navigation ─────────────────────────────────────────────────────────────
  const canGoNext = () => {
    if (step === 1) return !!selectedPackageSlug;
    if (step === 2) return !!pickupLocation;
    if (step === 3) return true; // drop is optional
    if (step === 4) return people >= 1;
    if (step === 5) return !!name && !!phone;
    return false;
  };

  const handleSubmit = () => {
    if (!selectedPackage || !priceBreakdown) return;

    const pickupLabel =
      PICKUP_LOCATIONS.find((l) => l.id === pickupLocation)?.label ??
      pickupLocation;
    const dropLabel =
      needDrop && dropLocation
        ? (PICKUP_LOCATIONS.find((l) => l.id === dropLocation)?.label ??
          dropLocation)
        : "Not Required";

    const msg = [
      "🙏 *New Custom Package Request*",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      `📦 *Package:* ${selectedPackage.title}`,
      `⏱️ *Duration:* ${selectedPackage.duration}`,
      "",
      `🚌 *Pickup:* ${pickupLabel}`,
      `🏠 *Drop:* ${dropLabel}`,
      `👥 *People:* ${people}`,
      `🌙 *Night Stay:* ${nightStay ? "Yes ✅" : "No ❌"}`,
      `🍽️ *Food Included:* ${food ? "Yes ✅" : "No ❌"}`,
      specialRequirements
        ? `📝 *Special Requirements:* ${specialRequirements}`
        : "",
      "",
      "💰 *Price Breakdown (Per Person)*",
      `   • Base Package: ₹${priceBreakdown.basePerPerson.toLocaleString("en-IN")}`,
      priceBreakdown.pickupSurcharge > 0
        ? `   • Pickup Surcharge: ₹${priceBreakdown.pickupSurcharge.toLocaleString("en-IN")}`
        : "",
      priceBreakdown.dropSurcharge > 0
        ? `   • Drop Surcharge: ₹${priceBreakdown.dropSurcharge.toLocaleString("en-IN")}`
        : "",
      priceBreakdown.nightStayCost > 0
        ? `   • Night Stay: ₹${priceBreakdown.nightStayCost.toLocaleString("en-IN")}`
        : "",
      priceBreakdown.foodCost > 0
        ? `   • Food: ₹${priceBreakdown.foodCost.toLocaleString("en-IN")}`
        : "",
      `   • Per Person Total: ₹${priceBreakdown.perPersonTotal.toLocaleString("en-IN")}`,
      `💎 *Grand Total (${people} persons):* ₹${priceBreakdown.grandTotal.toLocaleString("en-IN")}`,
      "",
      "👤 *Contact Details*",
      `   Name: ${name}`,
      `   Phone: ${phone}`,
      email ? `   Email: ${email}` : "",
      "━━━━━━━━━━━━━━━━━━━━━━━━",
      "Jai Shri Krishna! 🙏",
    ]
      .filter((line) => line !== "")
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  // ── Shared Styles ─────────────────────────────────────────────────────────
  const inputStyle = {
    background: "var(--input-bg)",
    border: "1.5px solid var(--input-border)",
    color: "var(--text)",
  };

  const inputClass =
    "w-full p-3 rounded-xl outline-none focus:ring-2 focus:ring-saffron transition-all duration-300 font-sans";
  const labelClass = "text-sm font-semibold mb-1.5 block";

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      {/* ── Hero Header ── */}
      <section className="relative h-72 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallarypic/prem%20mandir.webp"
            alt="Custom Package"
            className="w-full h-full object-cover opacity-35 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-[#09637E]/85 dark:bg-[#020810]/90" />
        </div>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full pointer-events-none"
            style={{ left: `${i * 10 + 2}%`, top: `${(i * 19) % 90}%` }}
            animate={{ y: [0, -35, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4">
            ✦ BUILD YOUR OWN YATRA ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Custom Package
          </h1>
          <p className="text-amber-200 italic">
            "Design your perfect Braj pilgrimage and we'll bring it to life"
          </p>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ── Left: Form ── */}
          <div className="flex-1 min-w-0">
            {/* Step Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2">
                {STEPS.map((s, i) => {
                  const StepIcon = s.icon;
                  const isCompleted = step > s.id;
                  const isCurrent = step === s.id;
                  return (
                    <React.Fragment key={s.id}>
                      <motion.div
                        className="flex flex-col items-center gap-1.5 min-w-15"
                        animate={{
                          opacity: isCurrent || isCompleted ? 1 : 0.45,
                        }}
                      >
                        <motion.div
                          animate={{
                            background: isCompleted
                              ? "linear-gradient(135deg, #22c55e, #16a34a)"
                              : isCurrent
                                ? "linear-gradient(135deg, #ff9933, #ffd700)"
                                : "var(--surface)",
                            scale: isCurrent ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.35 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center shadow-md border"
                          style={{
                            borderColor: isCompleted
                              ? "#22c55e"
                              : isCurrent
                                ? "#ff9933"
                                : "var(--border)",
                          }}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          ) : (
                            <StepIcon
                              className="w-4 h-4"
                              style={{
                                color: isCurrent
                                  ? "white"
                                  : "var(--text-muted)",
                              }}
                            />
                          )}
                        </motion.div>
                        <span
                          className="text-[10px] font-semibold text-center leading-tight"
                          style={{
                            color: isCurrent
                              ? "#ff9933"
                              : isCompleted
                                ? "#16a34a"
                                : "var(--text-muted)",
                          }}
                        >
                          {s.title}
                        </span>
                      </motion.div>
                      {i < STEPS.length - 1 && (
                        <div
                          className="flex-1 h-0.5 mx-1 rounded-full mt-[-18px]"
                          style={{
                            background:
                              step > s.id
                                ? "linear-gradient(90deg, #22c55e, #16a34a)"
                                : "var(--border)",
                          }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Step Card */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl p-10 text-center space-y-5"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron rounded-t-2xl" />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.15 }}
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
                    style={{ background: "rgba(34,197,94,0.12)" }}
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h2
                    className="text-3xl font-serif font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Request Sent! 🙏
                  </h2>
                  <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                    Jai Shri Krishna! Your custom package request has been sent
                    via WhatsApp. We'll confirm your booking within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setSelectedPackageSlug("");
                    }}
                    className="mt-4 px-8 py-3 rounded-full font-bold text-white text-sm"
                    style={{
                      background: "linear-gradient(135deg, #ff9933, #ffd700)",
                    }}
                  >
                    Create Another Package
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-saffron via-gold to-saffron" />

                  <div className="p-6 md:p-8">
                    {/* ── Step 1: Package Selection ── */}
                    {step === 1 && (
                      <div>
                        <h2
                          className="text-2xl font-serif font-bold mb-2"
                          style={{ color: "var(--text)" }}
                        >
                          Select a Base Package
                        </h2>
                        <p
                          className="text-sm mb-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Choose one of our existing packages as your starting
                          point. You'll customise it in the next steps.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {packages.map((pkg) => {
                            const isSelected = selectedPackageSlug === pkg.slug;
                            return (
                              <motion.button
                                key={pkg.slug}
                                onClick={() => setSelectedPackageSlug(pkg.slug)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="text-left p-4 rounded-xl border-2 transition-all duration-200 w-full"
                                style={{
                                  borderColor: isSelected
                                    ? "#ff9933"
                                    : "var(--border)",
                                  background: isSelected
                                    ? "rgba(255,153,51,0.08)"
                                    : "var(--surface-2)",
                                  boxShadow: isSelected
                                    ? "0 0 0 3px rgba(255,153,51,0.2)"
                                    : "none",
                                }}
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <span
                                      className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                                      style={{
                                        background: "rgba(255,153,51,0.15)",
                                        color: "#ff9933",
                                      }}
                                    >
                                      {pkg.category}
                                    </span>
                                    <h3
                                      className="font-bold text-sm leading-snug mb-1"
                                      style={{ color: "var(--text)" }}
                                    >
                                      {pkg.title}
                                    </h3>
                                    <div
                                      className="flex items-center gap-3 text-xs"
                                      style={{ color: "var(--text-muted)" }}
                                    >
                                      <span>⏱️ {pkg.duration}</span>
                                      <span>|</span>
                                      <span>
                                        from ₹
                                        {pkg.price.toLocaleString("en-IN")}
                                        /person
                                      </span>
                                    </div>
                                  </div>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="shrink-0 w-6 h-6 rounded-full bg-saffron flex items-center justify-center"
                                    >
                                      <CheckCircle2 className="w-4 h-4 text-white" />
                                    </motion.div>
                                  )}
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ── Step 2: Pickup Location ── */}
                    {step === 2 && (
                      <div>
                        <h2
                          className="text-2xl font-serif font-bold mb-2"
                          style={{ color: "var(--text)" }}
                        >
                          Pickup Location
                        </h2>
                        <p
                          className="text-sm mb-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Where should we pick you up from? A surcharge applies
                          for locations outside Mathura area.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {PICKUP_LOCATIONS.map((loc) => {
                            const isSelected = pickupLocation === loc.id;
                            return (
                              <motion.button
                                key={loc.id}
                                onClick={() => setPickupLocation(loc.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="p-4 rounded-xl border-2 text-left transition-all duration-200"
                                style={{
                                  borderColor: isSelected
                                    ? "#ff9933"
                                    : "var(--border)",
                                  background: isSelected
                                    ? "rgba(255,153,51,0.08)"
                                    : "var(--surface-2)",
                                  boxShadow: isSelected
                                    ? "0 0 0 3px rgba(255,153,51,0.2)"
                                    : "none",
                                }}
                              >
                                <div className="text-2xl mb-1">{loc.icon}</div>
                                <div
                                  className="font-bold text-sm"
                                  style={{ color: "var(--text)" }}
                                >
                                  {loc.label}
                                </div>
                                {(() => {
                                  const pp = getLocationSurchargePerPerson(
                                    loc.id,
                                    people,
                                  );
                                  return (
                                    <div
                                      className="text-xs mt-1"
                                      style={{
                                        color: pp === 0 ? "#22c55e" : "#ff9933",
                                      }}
                                    >
                                      {pp === 0
                                        ? "No extra charge"
                                        : `+₹${pp.toLocaleString("en-IN")}/person`}
                                      {pp > 0 && (
                                        <span className="block opacity-60">
                                          for {people}{" "}
                                          {people === 1 ? "person" : "people"}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })()}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ── Step 3: Drop Location ── */}
                    {step === 3 && (
                      <div>
                        <h2
                          className="text-2xl font-serif font-bold mb-2"
                          style={{ color: "var(--text)" }}
                        >
                          Drop Location
                        </h2>
                        <p
                          className="text-sm mb-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Do you need a drop service at the end of your tour?
                        </p>

                        {/* Yes/No Toggle */}
                        <div className="flex gap-4 mb-6">
                          {[
                            { val: false, label: "No, not required" },
                            { val: true, label: "Yes, I need a drop" },
                          ].map(({ val, label }) => (
                            <motion.button
                              key={String(val)}
                              onClick={() => setNeedDrop(val)}
                              whileTap={{ scale: 0.97 }}
                              className="flex-1 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all duration-200"
                              style={{
                                borderColor:
                                  needDrop === val
                                    ? "#ff9933"
                                    : "var(--border)",
                                background:
                                  needDrop === val
                                    ? "rgba(255,153,51,0.1)"
                                    : "var(--surface-2)",
                                color:
                                  needDrop === val
                                    ? "#ff9933"
                                    : "var(--text-muted)",
                              }}
                            >
                              {needDrop === val ? "✓ " : ""}
                              {label}
                            </motion.button>
                          ))}
                        </div>

                        <AnimatePresence>
                          {needDrop && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p
                                className="text-sm font-semibold mb-3"
                                style={{ color: "var(--text-muted)" }}
                              >
                                Select drop city:
                              </p>
                              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {PICKUP_LOCATIONS.map((loc) => {
                                  const isSelected = dropLocation === loc.id;
                                  return (
                                    <motion.button
                                      key={loc.id}
                                      onClick={() => setDropLocation(loc.id)}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="p-4 rounded-xl border-2 text-left transition-all duration-200"
                                      style={{
                                        borderColor: isSelected
                                          ? "#ff9933"
                                          : "var(--border)",
                                        background: isSelected
                                          ? "rgba(255,153,51,0.08)"
                                          : "var(--surface-2)",
                                        boxShadow: isSelected
                                          ? "0 0 0 3px rgba(255,153,51,0.2)"
                                          : "none",
                                      }}
                                    >
                                      <div className="text-2xl mb-1">
                                        {loc.icon}
                                      </div>
                                      <div
                                        className="font-bold text-sm"
                                        style={{ color: "var(--text)" }}
                                      >
                                        {loc.label}
                                      </div>
                                      {(() => {
                                        const pp =
                                          getLocationSurchargePerPerson(
                                            loc.id,
                                            people,
                                          );
                                        return (
                                          <div
                                            className="text-xs mt-1"
                                            style={{
                                              color:
                                                pp === 0
                                                  ? "#22c55e"
                                                  : "#ff9933",
                                            }}
                                          >
                                            {pp === 0
                                              ? "No extra charge"
                                              : `+₹${pp.toLocaleString("en-IN")}/person`}
                                            {pp > 0 && (
                                              <span className="block opacity-60">
                                                for {people}{" "}
                                                {people === 1
                                                  ? "person"
                                                  : "people"}
                                              </span>
                                            )}
                                          </div>
                                        );
                                      })()}
                                    </motion.button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* ── Step 4: Other Requirements ── */}
                    {step === 4 && (
                      <div>
                        <h2
                          className="text-2xl font-serif font-bold mb-2"
                          style={{ color: "var(--text)" }}
                        >
                          Other Requirements
                        </h2>
                        <p
                          className="text-sm mb-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Customise your package further with these add-ons.
                        </p>

                        <div className="space-y-5">
                          {/* Number of People */}
                          <div
                            className="p-5 rounded-xl"
                            style={{
                              background: "var(--surface-2)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <Users className="w-5 h-5 text-saffron" />
                              <span
                                className="font-bold"
                                style={{ color: "var(--text)" }}
                              >
                                Number of People
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() =>
                                  setPeople((p) => Math.max(1, p - 1))
                                }
                                className="w-10 h-10 rounded-full border-2 font-bold text-lg flex items-center justify-center transition-all duration-200 hover:border-saffron hover:text-saffron"
                                style={{
                                  borderColor: "var(--border)",
                                  color: "var(--text)",
                                }}
                              >
                                −
                              </button>
                              <span
                                className="text-3xl font-bold w-12 text-center"
                                style={{ color: "var(--text)" }}
                              >
                                {people}
                              </span>
                              <button
                                onClick={() =>
                                  setPeople((p) => Math.min(20, p + 1))
                                }
                                className="w-10 h-10 rounded-full border-2 font-bold text-lg flex items-center justify-center transition-all duration-200 hover:border-saffron hover:text-saffron"
                                style={{
                                  borderColor: "var(--border)",
                                  color: "var(--text)",
                                }}
                              >
                                +
                              </button>
                              <span
                                className="text-sm ml-2"
                                style={{ color: "var(--text-muted)" }}
                              >
                                person{people !== 1 ? "s" : ""}
                              </span>
                            </div>
                          </div>

                          {/* Night Stay */}
                          <div
                            className="p-5 rounded-xl flex items-center justify-between cursor-pointer"
                            style={{
                              background: "var(--surface-2)",
                              border: `1px solid ${nightStay ? "#ff9933" : "var(--border)"}`,
                            }}
                            onClick={() => setNightStay((v) => !v)}
                          >
                            <div className="flex items-center gap-3">
                              <Moon
                                className={`w-5 h-5 ${nightStay ? "text-saffron" : "text-gray-400"}`}
                              />
                              <div>
                                <span
                                  className="font-bold"
                                  style={{ color: "var(--text)" }}
                                >
                                  Night Stay
                                </span>
                                <p
                                  className="text-xs"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  +₹1000/person(min-2)/night
                                </p>
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                background: nightStay
                                  ? "linear-gradient(135deg, #ff9933, #ffd700)"
                                  : "var(--border)",
                              }}
                              className="w-12 h-6 rounded-full flex items-center px-1"
                            >
                              <motion.div
                                animate={{ x: nightStay ? 24 : 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                                className="w-4 h-4 rounded-full bg-white shadow-md"
                              />
                            </motion.div>
                          </div>

                          {/* Food */}
                          <div
                            className="p-5 rounded-xl flex items-center justify-between cursor-pointer"
                            style={{
                              background: "var(--surface-2)",
                              border: `1px solid ${food ? "#ff9933" : "var(--border)"}`,
                            }}
                            onClick={() => setFood((v) => !v)}
                          >
                            <div className="flex items-center gap-3">
                              <Utensils
                                className={`w-5 h-5 ${food ? "text-saffron" : "text-gray-400"}`}
                              />
                              <div>
                                <span
                                  className="font-bold"
                                  style={{ color: "var(--text)" }}
                                >
                                  Food Included
                                </span>
                                <p
                                  className="text-xs"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  +₹499/person/day (vegetarian meals)
                                </p>
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                background: food
                                  ? "linear-gradient(135deg, #ff9933, #ffd700)"
                                  : "var(--border)",
                              }}
                              className="w-12 h-6 rounded-full flex items-center px-1"
                            >
                              <motion.div
                                animate={{ x: food ? 24 : 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                                className="w-4 h-4 rounded-full bg-white shadow-md"
                              />
                            </motion.div>
                          </div>

                          {/* Special Requirements */}
                          <div>
                            <label
                              className="flex items-center gap-2 text-sm font-bold mb-2"
                              style={{ color: "var(--text)" }}
                            >
                              <MessageSquare className="w-4 h-4 text-saffron" />
                              Any Special Requirements (optional)
                            </label>
                            <textarea
                              rows={4}
                              value={specialRequirements}
                              onChange={(e) =>
                                setSpecialRequirements(e.target.value)
                              }
                              placeholder="e.g. Wheelchair access needed, specific temple timings, allergies, festival dates to visit..."
                              className={inputClass}
                              style={{ ...inputStyle, resize: "none" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Step 5: Contact Info ── */}
                    {step === 5 && (
                      <div>
                        <h2
                          className="text-2xl font-serif font-bold mb-2"
                          style={{ color: "var(--text)" }}
                        >
                          Your Contact Details
                        </h2>
                        <p
                          className="text-sm mb-6"
                          style={{ color: "var(--text-muted)" }}
                        >
                          We'll use these to confirm your booking via WhatsApp.
                        </p>
                        <div className="space-y-5">
                          <div>
                            <label
                              className={`${labelClass} flex items-center gap-2`}
                              style={{ color: "var(--text-muted)" }}
                            >
                              <User className="w-4 h-4" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Rahul Sharma"
                              className={inputClass}
                              style={inputStyle}
                              required
                            />
                          </div>
                          <div>
                            <label
                              className={`${labelClass} flex items-center gap-2`}
                              style={{ color: "var(--text-muted)" }}
                            >
                              <Phone className="w-4 h-4" />
                              WhatsApp / Mobile Number *
                            </label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className={inputClass}
                              style={inputStyle}
                              required
                            />
                          </div>
                          <div>
                            <label
                              className={`${labelClass} flex items-center gap-2`}
                              style={{ color: "var(--text-muted)" }}
                            >
                              <Mail className="w-4 h-4" />
                              Email Address (optional)
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className={inputClass}
                              style={inputStyle}
                            />
                          </div>

                          {/* Consent note */}
                          <div
                            className="p-4 rounded-xl text-sm italic"
                            style={{
                              background: "rgba(255,153,51,0.07)",
                              border: "1px solid rgba(255,153,51,0.2)",
                              color: "var(--text-muted)",
                            }}
                          >
                            By submitting, your enquiry will be sent as a
                            WhatsApp message to our team at +91 7078117174.
                            We'll confirm your custom package within a few
                            hours. 🙏
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Navigation Buttons ── */}
                    <div className="flex items-center justify-between mt-8 gap-4">
                      {step > 1 ? (
                        <motion.button
                          onClick={() => setStep((s) => s - 1)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all duration-200"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text-muted)",
                          }}
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {step < 5 ? (
                        <motion.button
                          onClick={() => canGoNext() && setStep((s) => s + 1)}
                          whileHover={canGoNext() ? { scale: 1.03 } : {}}
                          whileTap={canGoNext() ? { scale: 0.97 } : {}}
                          className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white ml-auto"
                          style={{
                            background: canGoNext()
                              ? "linear-gradient(135deg, #ff9933, #ffd700)"
                              : "rgba(0,0,0,0.2)",
                            cursor: canGoNext() ? "pointer" : "not-allowed",
                            boxShadow: canGoNext()
                              ? "0 4px 15px rgba(255,153,51,0.4)"
                              : "none",
                          }}
                        >
                          {step === 3
                            ? needDrop
                              ? "Choose Drop City →"
                              : "Skip Drop →"
                            : "Next"}
                          <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      ) : (
                        <motion.button
                          onClick={() => canGoNext() && handleSubmit()}
                          whileHover={canGoNext() ? { scale: 1.03, y: -2 } : {}}
                          whileTap={canGoNext() ? { scale: 0.97 } : {}}
                          className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white ml-auto text-sm"
                          style={{
                            background: canGoNext()
                              ? "linear-gradient(135deg, #25d366, #128c7e)"
                              : "rgba(0,0,0,0.2)",
                            cursor: canGoNext() ? "pointer" : "not-allowed",
                            boxShadow: canGoNext()
                              ? "0 4px 20px rgba(37,211,102,0.4)"
                              : "none",
                          }}
                        >
                          <Send className="w-4 h-4" />
                          Send via WhatsApp
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right: Price Summary (sticky) ── */}
          <div className="lg:w-80 shrink-0">
            <div
              className="rounded-2xl overflow-hidden sticky top-24"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <div className="h-1 bg-gradient-to-r from-saffron via-gold to-saffron" />
              <div className="p-6">
                <h3
                  className="font-serif font-bold text-lg mb-4 flex items-center gap-2"
                  style={{ color: "var(--text)" }}
                >
                  <span className="text-gold text-xl">💰</span>
                  Price Summary
                </h3>

                {!selectedPackage ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">🛕</div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Select a package in Step 1 to see pricing
                    </p>
                  </div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      key={`${selectedPackageSlug}-${people}-${pickupLocation}-${dropLocation}-${nightStay}-${food}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {/* Package */}
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          background: "rgba(255,153,51,0.07)",
                          border: "1px solid rgba(255,153,51,0.15)",
                        }}
                      >
                        <div className="text-xs font-semibold text-saffron mb-0.5">
                          Selected Package
                        </div>
                        <div
                          className="text-sm font-bold"
                          style={{ color: "var(--text)" }}
                        >
                          {selectedPackage.title}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {selectedPackage.duration}
                        </div>
                      </div>

                      {/* Breakdown */}
                      {priceBreakdown && (
                        <div className="space-y-2 text-sm">
                          <div
                            className="flex justify-between"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span>Base price/person</span>
                            <span
                              className="font-semibold"
                              style={{ color: "var(--text)" }}
                            >
                              ₹
                              {priceBreakdown.basePerPerson.toLocaleString(
                                "en-IN",
                              )}
                            </span>
                          </div>
                          {priceBreakdown.pickupSurcharge > 0 && (
                            <div
                              className="flex justify-between"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span>Pickup surcharge</span>
                              <span className="font-semibold text-amber-500">
                                +₹
                                {priceBreakdown.pickupSurcharge.toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                          )}
                          {priceBreakdown.dropSurcharge > 0 && (
                            <div
                              className="flex justify-between"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span>Drop surcharge</span>
                              <span className="font-semibold text-amber-500">
                                +₹
                                {priceBreakdown.dropSurcharge.toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                          )}
                          {priceBreakdown.nightStayCost > 0 && (
                            <div
                              className="flex justify-between"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span>Night stay ({priceBreakdown.nights}N)</span>
                              <span className="font-semibold text-amber-500">
                                +₹
                                {priceBreakdown.nightStayCost.toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                          )}
                          {priceBreakdown.foodCost > 0 && (
                            <div
                              className="flex justify-between"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span>Food ({priceBreakdown.nights} day)</span>
                              <span className="font-semibold text-amber-500">
                                +₹
                                {priceBreakdown.foodCost.toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                          )}

                          <div
                            className="border-t pt-2"
                            style={{ borderColor: "var(--border)" }}
                          >
                            <div
                              className="flex justify-between text-sm"
                              style={{ color: "var(--text-muted)" }}
                            >
                              <span>Per person</span>
                              <span
                                className="font-bold"
                                style={{ color: "var(--text)" }}
                              >
                                ₹
                                {priceBreakdown.perPersonTotal.toLocaleString(
                                  "en-IN",
                                )}
                              </span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <span
                                className="text-xs"
                                style={{ color: "var(--text-muted)" }}
                              >
                                × {people} person{people !== 1 ? "s" : ""}
                              </span>
                            </div>
                          </div>

                          {/* Grand Total */}
                          <motion.div
                            key={priceBreakdown.grandTotal}
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="p-4 rounded-xl text-center"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,153,51,0.15), rgba(255,215,0,0.1))",
                              border: "1.5px solid rgba(255,153,51,0.3)",
                            }}
                          >
                            <div
                              className="text-xs font-semibold mb-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Estimated Total
                            </div>
                            <div
                              className="text-3xl font-bold font-serif"
                              style={{ color: "#ff9933" }}
                            >
                              ₹
                              {priceBreakdown.grandTotal.toLocaleString(
                                "en-IN",
                              )}
                            </div>
                            <div
                              className="text-xs mt-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              for {people} person{people !== 1 ? "s" : ""} ·{" "}
                              {selectedPackage.duration}
                            </div>
                          </motion.div>

                          <p
                            className="text-[11px] italic text-center"
                            style={{ color: "var(--text-subtle)" }}
                          >
                            * Final price confirmed by our team on WhatsApp
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
