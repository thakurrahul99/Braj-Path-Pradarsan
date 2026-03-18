"use client";

import { useState } from "react";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const inputClass = `
  w-full px-4 py-3 rounded-xl outline-none
  transition-all duration-300
  focus:ring-2 focus:ring-saffron
`;

const labelClass = `block text-sm font-semibold mb-1.5`;

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: 1,
    package: "Vrindavan Parikrama",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Booking Request for Braj Yatra*\n--------------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Date:* ${formData.date}\n*Travelers:* ${formData.travelers}\n*Package:* ${formData.package}\n*Message:* ${formData.message}\n--------------------------------\nPlease confirm availability. Jai Shri Krishna! 🙏`;
    window.open(
      `https://wa.me/917078117174?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* ── Page Header ── */}
      <section className="relative pt-12 pb-12 px-4 overflow-hidden bg-[var(--section-dark)] text-white text-center">
        <motion.div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #ffd700, transparent)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4">
            ✦ BEGIN THE JOURNEY ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Book Your Spiritual Journey
          </h1>
          <p className="text-white/70 mt-3">
            Fill in the details below and we will contact you shortly.
          </p>
        </motion.div>
      </section>

      {/* ── Form Card ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--surface)",
            boxShadow: "var(--card-shadow)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Gold gradient strip */}
          <div className="h-1.5 bg-gradient-to-r from-saffron via-gold to-saffron" />

          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-5 py-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2,
                    }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "var(--text)" }}
                  >
                    Booking Request Received!
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Jai Shri Krishna! 🙏 Our team will contact you within 24
                    hours to confirm your yatra.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-8 py-3 bg-saffron text-white rounded-full font-bold hover:bg-deep-blue transition-colors shadow-lg"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        label: "Full Name",
                        name: "name",
                        type: "text",
                        placeholder: "Enter your name",
                      },
                      {
                        label: "Email Address",
                        name: "email",
                        type: "email",
                        placeholder: "Enter your email",
                      },
                      {
                        label: "Phone Number",
                        name: "phone",
                        type: "tel",
                        placeholder: "+91 00000 0000",
                      },
                      {
                        label: "Travel Date",
                        name: "date",
                        type: "date",
                        placeholder: "",
                      },
                    ].map(({ label, name, type, placeholder }) => (
                      <div key={name}>
                        <label
                          className={labelClass}
                          style={{ color: "var(--text-muted)" }}
                        >
                          {label}
                        </label>
                        <input
                          type={type}
                          name={name}
                          required
                          value={
                            formData[name as keyof typeof formData] as string
                          }
                          onChange={handleChange}
                          placeholder={placeholder}
                          className={inputClass}
                          style={{
                            background: "var(--input-bg)",
                            border: "1.5px solid var(--input-border)",
                            color: "var(--text)",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Number of Travelers
                      </label>
                      <input
                        type="number"
                        name="travelers"
                        min="1"
                        required
                        value={formData.travelers}
                        onChange={handleChange}
                        className={inputClass}
                        style={{
                          background: "var(--input-bg)",
                          border: "1.5px solid var(--input-border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Select Package
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className={inputClass}
                        style={{
                          background: "var(--input-bg)",
                          border: "1.5px solid var(--input-border)",
                          color: "var(--text)",
                        }}
                      >
                        {[
                          "Select a Package",
                          "Mathura Vrindavan 1 Day Tour",
                          "Giriraj Braj Yatra — Govardhan Parikrama, Barsana, Nandgaon & Kokilavan",
                          "Govardhan Parikrama — Full Sacred Circumambulation of Giriraj Ji",
                          "Braj Panchkosi Yatra — Barsana, Nandgaon, Kokilavan & Kaman Char Dham",
                          "Sampurna Braj Mandal Yatra — The Complete Braj Pilgrimage",
                          "Divya Braj Darshan — Vrindavan, Mathura, Raval, Mahawan & Gokul",
                          "Radha Rani Ki Nagri — Barsana, Nandgaon & Kokilavan 1 Day Tour",
                          "Custom Package",
                        ].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--text-muted)" }}
                    >
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or group details?"
                      className={inputClass}
                      style={{
                        background: "var(--input-bg)",
                        border: "1.5px solid var(--input-border)",
                        color: "var(--text)",
                        resize: "none",
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-saffron/40 transition-shadow"
                  >
                    🙏 Confirm Booking via WhatsApp
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
