"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart, Clock, Download, BookOpen, Map } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Photo Gallery", href: "/gallary" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/share/1CVhTP1MKt/",
    label: "Facebook",
  },
  { Icon: Twitter, href: "#", label: "Twitter" },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/brajpathpradarshak?igsh=MWlzcGczZnVqMzdwaw==",
    label: "Instagram",
  },
];

const downloads = [
  {
    Icon: Clock,
    label: "Temple Timings",
    href: "/downloads/mandir-timings.pdf",
  },
  {
    Icon: BookOpen,
    label: "Brajdham Guide",
    href: "/downloads/guide-brajdham.pdf",
  },
  {
    Icon: Map,
    label: "Braj Tourist Map",
    href: "/downloads/braj-tourist-map.pdf",
  },
];

export default function Footer() {
  return (
    <footer
      className="text-white pt-14 pb-8 border-t-4 border-saffron"
      style={{ background: "var(--footer-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif font-bold text-saffron">
              Braj Path Pradarshak
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your spiritual guide to the holy land of Braj. Experience the
              divine love of Radha and Krishna through our curated yatra
              packages.
            </p>
            <div className="flex items-center gap-1 text-gold text-sm">
              <Heart className="h-4 w-4 fill-gold" />
              <span className="italic">Serving with devotion since 2026</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif font-bold text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-saffron transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/40 group-hover:bg-saffron transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Yatra Assistance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif font-bold text-gold">
              Yatra Assistance
            </h3>
            <ul className="space-y-3">
              {downloads.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-400 hover:text-saffron transition-colors duration-300 text-sm"
                  >
                    <Icon className="h-4 w-4 text-saffron shrink-0" />
                    <span>{label}</span>
                    <Download className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-serif font-bold text-gold">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: "Goverdhan, Mathura, UP, India" },
                { Icon: Phone, text: "+91 9639591697" },
                { Icon: Phone, text: "+91 7078117174" },
                { Icon: Mail, text: "brajpathpradarshak@gmail.com" },
              ].map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center space-x-3 text-gray-400 text-sm"
                >
                  <Icon className="h-4 w-4 text-saffron shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 p-2.5 rounded-full hover:bg-saffron hover:text-deep-blue transition-all duration-300 text-white"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="border-t border-white/10 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Braj Path Pradarshak. All rights
            reserved. <span className="text-gold">Jai Shri Krishna 🙏</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
