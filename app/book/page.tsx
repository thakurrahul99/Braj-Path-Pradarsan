"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

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

        // Construct WhatsApp message
        const message = `*New Booking Request for Braj Yatra*
--------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Date:* ${formData.date}
*Travelers:* ${formData.travelers}
*Package:* ${formData.package}
*Message:* ${formData.message}
--------------------------------
Please confirm availability. Jai Shri Krishna! 🙏`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Your WhatsApp number (Replace with actual number)
        const whatsappNumber = "917300548523";

        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="bg-linear-to-r from-saffron to-gold p-8 text-center">
                        <h1 className="text-3xl font-serif font-bold text-deep-blue">Book Your Spiritual Journey</h1>
                        <p className="text-white/90 mt-2">Fill in the details below and we will contact you shortly.</p>
                    </div>

                    <div className="p-8">
                        {isSubmitted ? (
                            <div className="text-center space-y-4 py-12">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Booking Request Received!</h3>
                                <p className="text-gray-600">
                                    Create Jai Shri Krishna! We have received your query. Our team will contact you within 24 hours to confirm your yatra.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 px-6 py-2 bg-saffron text-white rounded-full font-bold hover:bg-deep-blue transition-colors"
                                >
                                    Book Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                            placeholder="+91 73005 48523"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                                        <input
                                            type="number"
                                            name="travelers"
                                            min="1"
                                            required
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Package</label>
                                        <select
                                            name="package"
                                            value={formData.package}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                        >
                                            <option>Vrindavan Parikrama</option>
                                            <option>Mathura Janmabhoomi</option>
                                            <option>Barsana & Nandgaon</option>
                                            <option>Govardhan Parikrama</option>
                                            <option>Complete Braj Yatra</option>
                                            <option>Mystery of Nidhivan</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-saffron focus:border-saffron outline-none transition-colors"
                                        placeholder="Any specific requirements?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-peacock text-white py-3 rounded-md font-bold text-lg hover:bg-deep-blue shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Confirm Booking
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
