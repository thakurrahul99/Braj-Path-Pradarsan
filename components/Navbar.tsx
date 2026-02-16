"use client";

import { useState, useEffect } from "react"; // useEffect add kiya
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Navbar show/hide state
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll Tracking Logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // Agar mobile menu open hai to navbar hide mat karo
        if (isOpen) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Niche scroll karne par hide
          setIsVisible(false);
        } else {
          // Upar scroll karne par show
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isOpen]);

  return (
    <motion.nav
      // Framer Motion for smooth slide animation
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#09637E] backdrop-blur-sm shadow-md border-b-2 border-gold/20"
    >
      <div className="max-w-full px-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="Braj Path Logo"
              className="h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="font-[family-name:var(--font-cursive)] text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
              Braj Path Pradarshak
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-deep-blue hover:bg-white/20 px-3 py-2 rounded-md text-lg font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/book"
                className="bg-peacock text-white hover:bg-deep-blue px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gold/50"
              >
                Book Yatra
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-deep-blue hover:bg-white/20 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-saffron border-t border-gold/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-deep-blue hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full text-center mt-4 block bg-peacock text-white hover:bg-deep-blue px-6 py-3 rounded-full font-bold shadow-lg transition-colors border-2 border-gold/50"
              >
                Book Yatra
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
