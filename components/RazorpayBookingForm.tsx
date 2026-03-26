"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { packages } from "@/data/packagesData";
import { getDepositAmount } from "@/lib/getDepositAmount";
import {
  CheckCircle2,
  IndianRupee,
  Users,
  CalendarDays,
  Phone,
  Mail,
  User,
  Loader2,
  ShieldCheck,
  MessageCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  packageSlug: string;
  travelers: number;
  specialRequests: string;
}

type Stage = "form" | "processing" | "success" | "error";

interface DepositInfo {
  depositPerPerson: number;
  totalDeposit: number;
  totalPackagePrice: number;
  balanceDue: number;
  pricePerPerson: number;
}

// ── Razorpay script loader ─────────────────────────────────────────────────
function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if ((window as unknown as Record<string, unknown>).Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// ── Utilities ──────────────────────────────────────────────────────────────
function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

const OWNER_WHATSAPP = "917300548523";

function buildOwnerWhatsApp(
  form: FormData,
  deposit: DepositInfo,
  bookingId: string,
  packageTitle: string,
  paymentId: string
) {
  return encodeURIComponent(
    `🎉 *New Booking Confirmed — Braj Path Pradarshak*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `*Booking ID:* ${bookingId}\n` +
    `*Payment ID:* ${paymentId}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `👤 *Customer Details*\n` +
    `Name: ${form.name}\n` +
    `Phone: ${form.phone}\n` +
    `Email: ${form.email}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `🗺️ *Tour Details*\n` +
    `Package: ${packageTitle}\n` +
    `Date: ${new Date(form.date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}\n` +
    `Travelers: ${form.travelers} person(s)\n` +
    (form.specialRequests ? `Special Requests: ${form.specialRequests}\n` : "") +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Payment Summary*\n` +
    `Total Package: ${formatINR(deposit.totalPackagePrice)}\n` +
    `Deposit Paid ✅: ${formatINR(deposit.totalDeposit)}\n` +
    `Balance Due: ${formatINR(deposit.balanceDue)}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Jai Shri Krishna 🙏`
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  background: "var(--input-bg, var(--surface))",
  border: "1.5px solid var(--input-border, var(--border))",
  borderRadius: "10px",
  color: "var(--text)",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

function Field({ label, icon, error, children }: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
        <span style={{ color: "#ff9933" }}>{icon}</span>
        {label} <span style={{ color: "#ef4444" }}>*</span>
      </label>
      {children}
      {error && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{error}</p>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function RazorpayBookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", date: "",
    packageSlug: "", travelers: 2, specialRequests: "",
  });
  const [stage, setStage] = useState<Stage>("form");
  const [deposit, setDeposit] = useState<DepositInfo | null>(null);
  const [bookingId, setBookingId] = useState("");
  const [completedBooking, setCompletedBooking] = useState<{ deposit: DepositInfo; packageTitle: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const paymentIdRef = { current: "" }; // simple mutable ref, no re-render needed

  const selectedPackage = packages.find((p) => p.slug === form.packageSlug);

  // ── Recalculate deposit ──────────────────────────────────────────────────
  useEffect(() => {
    if (!selectedPackage || form.travelers < 1) { setDeposit(null); return; }
    const t = Number(form.travelers);
    let price = selectedPackage.price;
    for (const tier of selectedPackage.pricingTiers) {
      if (tier.persons === "1 (Private)" && t === 1) { price = tier.pricePerPerson; break; }
      if (tier.persons.includes("+") && t >= parseInt(tier.persons)) { price = tier.pricePerPerson; break; }
      if (tier.persons.includes("-")) {
        const [min, max] = tier.persons.split("-").map(Number);
        if (t >= min && t <= max) { price = tier.pricePerPerson; break; }
      }
    }
    setDeposit({ ...getDepositAmount(price, t), pricePerPerson: price });
  }, [selectedPackage, form.travelers]);

  // ── Validation ───────────────────────────────────────────────────────────
  function validate(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    const cleanPhone = form.phone.replace(/[\s\-+]/g, "").replace(/^91/, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) errs.phone = "Enter a valid 10-digit mobile number.";
    if (!form.date) {
      errs.date = "Please select a travel date.";
    } else if (new Date(form.date) < new Date(new Date().toDateString())) {
      errs.date = "Travel date cannot be in the past.";
    }
    if (!form.packageSlug) errs.packageSlug = "Please select a package.";
    if (!form.travelers || form.travelers < 1) errs.travelers = "At least 1 traveler required.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ── Submit / Payment flow ────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || !selectedPackage || !deposit) return;
    setStage("processing");
    setErrorMsg("");

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Could not load payment gateway. Please try again.");

      // 1. Create order
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          date: form.date, packageTitle: selectedPackage.title,
          packageSlug: form.packageSlug, travelers: form.travelers,
          pricePerPerson: deposit.pricePerPerson,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || "Failed to create order.");

      const { orderId, bookingId: bId, depositAmount, razorpayKeyId } = orderData;

      // 2. Open Razorpay — ⚠️ FIX: success state ONLY set inside handler, not after the promise
      await new Promise<void>((resolve, reject) => {
        const RzpCtor = (window as unknown as { Razorpay: new (o: unknown) => { open(): void } }).Razorpay;

        const rzp = new RzpCtor({
          key: razorpayKeyId, // ← comes from server, never undefined
          amount: depositAmount * 100,
          currency: "INR",
          order_id: orderId,
          name: "Braj Path Pradarshak",
          description: `Advance Deposit — ${selectedPackage.title}`,
          image: "/logo.png",
          prefill: { name: form.name, email: form.email, contact: form.phone },
          theme: { color: "#FF9933" },

          handler: async (response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }) => {
            try {
              // 3. Verify payment server-side
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  bookingId: bId,
                  specialRequests: form.specialRequests,
                }),
              });
              const verifyData = await verifyRes.json();
              if (!verifyRes.ok) throw new Error(verifyData.error || "Verification failed.");

              // ✅ Only here do we mark success
              paymentIdRef.current = response.razorpay_payment_id;
              setBookingId(bId);
              setCompletedBooking({ deposit, packageTitle: selectedPackage.title });
              setStage("success");

              // 4. Auto-notify owner via WhatsApp (opens in background)
              const waMsg = buildOwnerWhatsApp(form, deposit, bId, selectedPackage.title, response.razorpay_payment_id);
              window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${waMsg}`, "_blank", "noopener,noreferrer,width=1,height=1");

              resolve();
            } catch (err: unknown) {
              reject(err instanceof Error ? err : new Error("Verification failed."));
            }
          },

          modal: {
            // ⚠️ FIX: user dismissed the modal WITHOUT paying — go back to form
            ondismiss: () => {
              setStage("form");
              resolve(); // resolve cleanly, stage is "form" so no success shown
            },
          },
        });

        rzp.open();
      });

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(msg);
      setStage("error");
    }
  }

  // ── WhatsApp fallback (customer books via WA) ─────────────────────────────
  function handleWhatsApp() {
    if (!validate() || !selectedPackage || !deposit) return;
    const msg =
      `*Booking Request — Braj Path Pradarshak*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email}\n` +
      `*Package:* ${selectedPackage.title}\n*Date:* ${form.date}\n*Travelers:* ${form.travelers}\n` +
      (form.specialRequests ? `*Special Requests:* ${form.specialRequests}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Estimated Total:* ${formatINR(deposit.totalPackagePrice)}\nJai Shri Krishna 🙏`;
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}
      >
        {/* Gold top bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg, #ff9933, #ffd700, #ff9933)" }} />

        <div className="p-5 md:p-9">
          <AnimatePresence mode="wait">

            {/* ── FORM ─────────────────────────────────────────────────── */}
            {stage === "form" && (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" icon={<User size={11} />} error={fieldErrors.name}>
                    <input required type="text" value={form.name} placeholder="Your full name"
                      onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                  </Field>
                  <Field label="Phone" icon={<Phone size={11} />} error={fieldErrors.phone}>
                    <input required type="tel" value={form.phone} placeholder="10-digit mobile number"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                  </Field>
                </div>

                {/* Email + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" icon={<Mail size={11} />} error={fieldErrors.email}>
                    <input required type="email" value={form.email} placeholder="you@example.com"
                      onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                  </Field>
                  <Field label="Travel Date" icon={<CalendarDays size={11} />} error={fieldErrors.date}>
                    <input required type="date" value={form.date} min={today}
                      onChange={(e) => setForm({ ...form, date: e.target.value })} style={inputStyle} />
                  </Field>
                </div>

                {/* Package + Travelers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Select Package" icon={<FileText size={11} />} error={fieldErrors.packageSlug}>
                    <select required value={form.packageSlug}
                      onChange={(e) => setForm({ ...form, packageSlug: e.target.value })} style={inputStyle}>
                      <option value="">— Choose a package —</option>
                      {packages.map((p) => (
                        <option key={p.slug} value={p.slug}>{p.title}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="No. of Travelers" icon={<Users size={11} />} error={fieldErrors.travelers}>
                    <input required type="number" value={form.travelers} min={1} max={30}
                      onChange={(e) => setForm({ ...form, travelers: Math.max(1, parseInt(e.target.value) || 1) })}
                      style={inputStyle} />
                  </Field>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}>
                    <span style={{ color: "#ff9933" }}><FileText size={11} /></span>
                    Special Requests (Optional)
                  </label>
                  <textarea rows={3} value={form.specialRequests}
                    placeholder="Wheelchair needed, dietary requirements, group details…"
                    onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }} />
                </div>

                {/* ── Live Deposit Breakdown ────────────────────────────── */}
                <AnimatePresence>
                  {deposit && selectedPackage && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }} className="overflow-hidden rounded-xl"
                      style={{ background: "#1a1a2e", border: "1px solid rgba(255,215,0,0.25)" }}>
                      <div className="p-4">
                        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#ffd700" }}>
                          💰 Payment Breakdown
                        </p>
                        {[
                          { label: `Rate (${form.travelers} person${form.travelers > 1 ? "s" : ""})`, value: `${formatINR(deposit.pricePerPerson)} × ${form.travelers}` },
                          { label: "Total Package Price", value: formatINR(deposit.totalPackagePrice) },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex justify-between mb-2">
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                            <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>{value}</span>
                          </div>
                        ))}
                        <div className="my-2" style={{ height: 1, background: "rgba(255,215,0,0.2)" }} />
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-bold" style={{ color: "#ffd700" }}>✓ Advance Deposit (pay now)</span>
                          <span className="text-sm font-bold" style={{ color: "#ffd700" }}>{formatINR(deposit.totalDeposit)}</span>
                        </div>
                        <div className="flex justify-between items-center px-3 py-2 rounded-lg"
                          style={{ background: "rgba(255,153,51,0.15)" }}>
                          <span className="text-xs font-bold" style={{ color: "#ff9933" }}>Balance — Pay Guide on Arrival</span>
                          <span className="text-xs font-bold" style={{ color: "#ff9933" }}>{formatINR(deposit.balanceDue)}</span>
                        </div>
                      </div>
                      <div className="px-4 py-2.5 text-xs" style={{ background: "rgba(255,215,0,0.05)", borderTop: "1px solid rgba(255,215,0,0.12)", color: "rgba(255,255,255,0.45)" }}>
                        🔒 Only <strong style={{ color: "rgba(255,255,255,0.7)" }}>{formatINR(deposit.totalDeposit)}</strong> is charged now. Pay remaining <strong style={{ color: "rgba(255,255,255,0.7)" }}>{formatINR(deposit.balanceDue)}</strong> to guide on tour day.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── CTAs ─────────────────────────────────────────────── */}
                <div className="space-y-3 pt-1">
                  {/* Primary: Razorpay */}
                  <motion.button type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-bold text-base text-white flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #ff9933 0%, #ffd700 60%, #ff9933 100%)", backgroundSize: "200%", boxShadow: "0 4px 24px rgba(255,153,51,0.4)", border: "none", cursor: "pointer" }}>
                    <IndianRupee size={17} />
                    {deposit ? `Pay ${formatINR(deposit.totalDeposit)} & Confirm Booking` : "Pay Advance & Confirm Booking"}
                  </motion.button>

                  {/* Secondary: WhatsApp */}
                  <motion.button type="button" onClick={handleWhatsApp}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                    style={{ border: "2px solid #25D366", color: "#25D366", background: "rgba(37,211,102,0.05)", cursor: "pointer" }}>
                    <MessageCircle size={16} />
                    Book via WhatsApp Instead
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                  <ShieldCheck size={12} style={{ color: "#22c55e" }} />
                  Secured by Razorpay · UPI · Cards · Net Banking
                </div>
              </motion.form>
            )}

            {/* ── PROCESSING ───────────────────────────────────────────── */}
            {stage === "processing" && (
              <motion.div key="proc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-16 space-y-4">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="inline-block">
                  <Loader2 size={44} style={{ color: "#ff9933" }} />
                </motion.div>
                <p className="font-semibold text-lg" style={{ color: "var(--text)" }}>Opening Payment Gateway…</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Complete the payment in the Razorpay window. Do not close this tab.</p>
              </motion.div>
            )}

            {/* ── SUCCESS ──────────────────────────────────────────────── */}
            {stage === "success" && completedBooking && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }} className="text-center space-y-5 py-8">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "rgba(34,197,94,0.1)", border: "2px solid #22c55e" }}>
                  <CheckCircle2 size={40} style={{ color: "#22c55e" }} />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold font-serif" style={{ color: "var(--text)" }}>Booking Confirmed! 🙏</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>Jai Shri Krishna! Deposit received. Our team has been notified.</p>
                </div>

                <div className="rounded-xl p-4 inline-block"
                  style={{ background: "rgba(255,153,51,0.1)", border: "2px solid rgba(255,153,51,0.4)" }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#ff9933" }}>Booking ID</p>
                  <p className="text-2xl font-bold" style={{ color: "#ff9933", letterSpacing: 3 }}>{bookingId}</p>
                </div>

                <div className="rounded-xl p-4 text-sm space-y-2" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  {[
                    { label: "Package", value: completedBooking.packageTitle },
                    { label: "Deposit Paid ✅", value: formatINR(completedBooking.deposit.totalDeposit), green: true },
                    { label: "Balance Due on Arrival", value: formatINR(completedBooking.deposit.balanceDue), saffron: true },
                  ].map(({ label, value, green, saffron }) => (
                    <div key={label} className="flex justify-between">
                      <span style={{ color: "var(--text-muted)" }}>{label}</span>
                      <span className="font-bold" style={{ color: green ? "#22c55e" : saffron ? "#ff9933" : "var(--text)" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  📧 Booking receipt with PDF invoice sent to <strong>{form.email}</strong>
                </p>

                <button onClick={() => { setStage("form"); setForm({ name: "", email: "", phone: "", date: "", packageSlug: "", travelers: 2, specialRequests: "" }); setDeposit(null); setBookingId(""); setCompletedBooking(null); }}
                  className="px-8 py-3 rounded-full font-bold text-sm"
                  style={{ background: "linear-gradient(135deg,#ff9933,#ffd700)", color: "#fff", border: "none", cursor: "pointer" }}>
                  Book Another Trip
                </button>
              </motion.div>
            )}

            {/* ── ERROR ─────────────────────────────────────────────────── */}
            {stage === "error" && (
              <motion.div key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-12 space-y-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "rgba(239,68,68,0.1)", border: "2px solid rgba(239,68,68,0.4)" }}>
                  <AlertCircle size={36} style={{ color: "#ef4444" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>Payment Failed</h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{errorMsg}</p>
                </div>
                <button onClick={() => setStage("form")} className="px-8 py-3 rounded-full font-bold text-sm"
                  style={{ background: "linear-gradient(135deg,#ff9933,#ffd700)", color: "#fff", border: "none", cursor: "pointer" }}>
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
