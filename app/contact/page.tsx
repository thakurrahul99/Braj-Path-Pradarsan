"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    place: "Complete Braj Tour",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Inquiry from Braj Path Pradarsan Website*\n--------------------------------\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested Places:* ${formData.place}\n*Message:* ${formData.message || "No specific message"}\n--------------------------------\nJai Shri Krishna! 🙏`;
    window.open(`https://wa.me/917300548523?text=${encodeURIComponent(msg)}`, "_blank");
    setIsSubmitted(true);
  };

  const inputStyle = {
    background: "var(--input-bg)",
    border: "1.5px solid var(--input-border)",
    color: "var(--text)",
  };

  const inputClass = "w-full p-3 rounded-xl outline-none focus:ring-2 focus:ring-saffron transition-all duration-300";
  const labelClass = "text-sm font-semibold mb-1.5 block";

  const contactItems = [
    {
      Icon: MapPin,
      label: "Location",
      text: "Braj Region, Uttar Pradesh, India",
      sub: "Serving Mathura, Vrindavan & Beyond",
      bg: "rgba(255,153,51,0.12)",
      color: "#ff9933",
    },
    {
      Icon: Phone,
      label: "Phone & WhatsApp",
      text: "+91 73005 48523",
      sub: "Available 9:00 AM - 8:00 PM IST",
      bg: "rgba(34,197,94,0.12)",
      color: "#16a34a",
    },
    {
      Icon: Mail,
      label: "Email",
      text: "contact@brajpath.com",
      sub: "We reply within 24 hours",
      bg: "rgba(20,184,166,0.12)",
      color: "#0d9488",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />

      {/* ── Header ── */}
      <section className="relative h-72 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/krishnahand.jpg"
            alt="Spiritual Background"
            className="w-full h-full object-cover opacity-40 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-[#09637E]/80 dark:bg-[#020810]/85" />
        </div>
        {/* Floating sparkle particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full pointer-events-none"
            style={{ left: `${i * 13}%`, top: `${(i * 17) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest mb-4">
            ✦ GET IN TOUCH ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Connect With Us
          </h1>
          <p className="text-amber-200 italic">
            "Your guide to the divine path is just a message away"
          </p>
        </motion.div>
      </section>

      {/* ── Content ── */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--border)",
              }}
            >
              <h2
                className="text-2xl font-serif font-bold mb-6"
                style={{ color: "var(--text)" }}
              >
                Our Office
              </h2>

              <div className="space-y-6">
                {contactItems.map(({ Icon, label, text, sub, bg, color }) => (
                  <motion.div
                    key={label}
                    className="flex items-start gap-4"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 rounded-full shrink-0"
                      style={{ background: bg }}
                    >
                      <Icon size={22} style={{ color }} />
                    </motion.div>
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: "var(--text)" }}
                      >
                        {label}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {text}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-subtle)" }}
                      >
                        {sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-4 rounded-xl italic text-sm"
                style={{
                  background: "rgba(255,153,51,0.08)",
                  border: "1px solid rgba(255,153,51,0.15)",
                  color: "var(--text-muted)",
                }}
              >
                "Atithidevo Bhava — The guest is equivalent to God. We look
                forward to serving you."
              </motion.div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl relative overflow-hidden"
              style={{
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron" />

              <h2
                className="text-3xl font-serif font-bold mb-8"
                style={{ color: "var(--text)" }}
              >
                Inquiry Form
              </h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
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
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                      style={{ background: "rgba(34,197,94,0.12)" }}
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ color: "var(--text-muted)" }}>
                      Jai Shri Krishna! 🙏 Your inquiry has been sent via
                      WhatsApp. We'll respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-saffron text-white rounded-full font-bold hover:bg-deep-blue transition-colors shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="flex flex-col gap-2">
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Rahul Singh"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00 000 00000"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Which places are you interested in?
                      </label>
                      <select
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        className={inputClass}
                        style={inputStyle}
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
                        ].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Message / Special Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your group size or travel dates..."
                        className={inputClass}
                        style={{ ...inputStyle, resize: "none" }}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-deep-blue to-[#09637E] hover:from-[#09637E] hover:to-saffron text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg"
                      >
                        <Send size={18} />
                        Send Inquiry via WhatsApp
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section
        className="h-96 w-full"
        style={{ borderTop: "4px solid var(--border)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full w-full"
        >
          <iframe
            title="Braj Region Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113425.295484558!2d77.59218684784656!3d27.4819266100516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711751333917%3A0x673416298533b3b4!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
