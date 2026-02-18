"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    place: "Complete Braj Tour",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `*Inquiry from Braj Path Pradarsan Website*
--------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Interested Places:* ${formData.place}
*Message:* ${formData.message || "No specific message"}
--------------------------------
Jai Shri Krishna! 🙏`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Your WhatsApp number
    const whatsappNumber = "917300548523";

    // Open WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );

    setIsSubmitted(true);
  };

  return (
    <div className="bg-orange-50/30 min-h-screen">
      <Navbar />

      {/* --- Header Section --- */}
      <section className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/krishnahand.jpg"
            alt="Spiritual Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#09637E]/90"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Connect With Us
          </h1>
          <p className="text-amber-200 italic font-medium">
            "Your guide to the divine path is just a message away"
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* --- Contact Information Cards --- */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-amber-500"
            >
              <h2 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                Our Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Location</h4>
                    <p className="text-gray-600">
                      Braj Region, Uttar Pradesh, India
                    </p>
                    <p className="text-sm text-blue-600 italic">
                      Serving Mathura, Vrindavan & Beyond
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Phone & WhatsApp
                    </h4>
                    <p className="text-gray-600">+91 73005 48523</p>
                    <p className="text-xs text-gray-400">
                      Available 9:00 AM - 8:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@brajpath.com</p>
                  </div>
                </div>
              </div>

              {/* Spiritual Quote */}
              <div className="mt-10 p-4 bg-orange-50 rounded-xl border border-orange-100 italic text-gray-600 text-sm">
                "Atithidevo Bhava — The guest is equivalent to God. We look
                forward to serving you."
              </div>
            </motion.div>
          </div>

          {/* --- Contact Form --- */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden"
            >
              {/* Subtle Peacock Background Decoration */}
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <img
                  // src="https://cdn-icons-png.flaticon.com/512/3063/3063909.png"
                  alt=""
                  className="w-64 h-64 rotate-12"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
                Inquiry Form
              </h2>

              {isSubmitted ? (
                <div className="text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Jai Shri Krishna! Your inquiry has been sent to our team via
                    WhatsApp. We will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-saffron text-white rounded-full font-bold hover:bg-deep-blue transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Singh"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 0000000000"
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">
                      Which places are you interested in?
                    </label>
                    <select
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    >
                      <option>Complete Braj Tour</option>
                      <option>Mathura & Vrindavan</option>
                      <option>Govardhan Parikrama</option>
                      <option>Barsana & Nandgaon Heritage</option>
                      <option>Custom Itinerary</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">
                      Message / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your group size or travel dates..."
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95"
                    >
                      <Send size={20} />
                      Send Inquiry via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="h-100 w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Braj Region Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113425.295484558!2d77.59218684784656!3d27.4819266100516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711751333917%3A0x673416298533b3b4!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "5px solid #09637E" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
