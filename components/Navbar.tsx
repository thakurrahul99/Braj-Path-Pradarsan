"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Custom Package", href: "/custom-package", badge: "✦ New" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const obs = new MutationObserver(checkDark);
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (!isOpen) {
        setIsVisible(y < lastScrollY || y < 100);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: isDark
          ? scrolled
            ? "linear-gradient(135deg, #0f172a 0%, #1a1035 40%, #0f172a 100%)"
            : "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 100%)"
          : scrolled
            ? "rgba(255, 252, 245, 0.88)"
            : "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isDark
          ? scrolled
            ? "1px solid rgba(255, 215, 0, 0.25)"
            : "1px solid rgba(255,255,255,0.08)"
          : scrolled
            ? "1px solid rgba(255, 153, 51, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: scrolled
          ? isDark
            ? "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,215,0,0.15) inset"
            : "0 4px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(255,153,51,0.15) inset"
          : "none",
        transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Animated gold shimmer line at top */}
      {/* <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ff9933 25%, #ffd700 50%, #ff9933 75%, transparent 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% center", "-200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      /> */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18">

          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Braj Path Logo"
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                />
                {/* Glow ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, rgba(255,215,0,0.3), transparent 70%)",
                  }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-lg transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-cursive)",
                    color: isDark ? "#ffffff" : "#09637e",
                  }}
                >
                  Braj Path
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-saffron/80">
                  Pradarshak
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── Desktop Nav Links ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold tracking-wide group flex items-center gap-1"
                    style={{
                      color: isActive
                        ? isDark ? "#ffd700" : "#b84d00"
                        : isDark ? "rgba(255,255,255,0.85)" : "rgba(20,10,0,0.80)"
                    }}
                  >
                    {/* Hover background pill */}
                    <motion.span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                      layoutId={`hoverBg-${link.name}`}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Link text */}
                    <span
                      className="relative z-10 transition-colors duration-200"
                      style={{ color: "inherit" }}
                    >
                      {link.name}
                    </span>

                    {/* Optional badge (e.g. "New") */}
                    {"badge" in link && link.badge && (
                      <span
                        className="relative z-10 text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                        style={{ background: "rgba(255,153,51,0.25)", color: "#ff9933", border: "1px solid rgba(255,153,51,0.4)" }}
                      >
                        {link.badge}
                      </span>
                    )}

                    {/* Active / hover gold underline */}
                    <motion.span
                      className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #ff9933, #ffd700)" }}
                      initial={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Right Side: Book Button + Toggle ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            {/* Book Yatra CTA */}
            <Link href="/book" className="relative group">
              <motion.span
                className="relative z-10 flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ff9933 0%, #ffd700 50%, #ff9933 100%)",
                  backgroundSize: "200% 100%",
                  boxShadow: "0 0 20px rgba(255,153,51,0.4), 0 4px 15px rgba(0,0,0,0.3)",
                }}
                whileHover={{
                  backgroundPosition: "100% 0",
                  boxShadow: "0 0 30px rgba(255,215,0,0.6), 0 4px 20px rgba(0,0,0,0.4)",
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner shimmer */}
                <motion.span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["-200% center", "200% center"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <Sparkles className="h-3.5 w-3.5" />
                Book Yatra
              </motion.span>

              {/* Outer glow ring */}
              <motion.span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{ border: "2px solid rgba(255,215,0,0.5)", borderRadius: "9999px" }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </Link>

            <ThemeToggle />
          </motion.div>

          {/* ── Mobile: Toggle + Hamburger ── */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(26,16,53,0.98) 100%)",
              borderTop: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl group"
                      style={{
                        background: isActive
                          ? "rgba(255,153,51,0.12)"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(255,153,51,0.3)"
                          : "1px solid transparent",
                        color: isActive ? "#ffd700" : "rgba(255,255,255,0.8)",
                      }}
                    >
                      <span className="font-semibold group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="mobileActive"
                          className="w-2 h-2 rounded-full bg-saffron"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Book button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #ff9933, #ffd700, #ff9933)",
                    backgroundSize: "200% 100%",
                    boxShadow: "0 4px 20px rgba(255,153,51,0.4)",
                  }}
                >
                  <Sparkles className="h-4 w-4" />
                  Book Your Yatra
                </Link>
              </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div
              className="h-0.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ff9933, #ffd700, #ff9933, transparent)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Theme Toggle — sun/moon pill
// ─────────────────────────────────────────────────────────────────────────────
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldBeDark = saved === "dark";
    document.documentElement.classList.toggle("dark", shouldBeDark);
    setDark(shouldBeDark);

    const obs = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.88 }}
      className="relative flex items-center px-1 focus:outline-none cursor-pointer shrink-0"
      style={{
        width: 52,
        height: 28,
        borderRadius: 999,
        background: dark
          ? "linear-gradient(135deg, #1a237e, #0d47a1)"
          : "linear-gradient(135deg, #ff9933, #ffd700)",
        boxShadow: dark
          ? "0 0 12px rgba(100,120,255,0.4)"
          : "0 0 12px rgba(255,153,51,0.5)",
        border: "1.5px solid rgba(255,255,255,0.25)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <motion.span
        animate={{ x: dark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full flex items-center justify-center text-xs leading-none select-none"
        style={{
          background: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.span>
    </motion.button>
  );
}
