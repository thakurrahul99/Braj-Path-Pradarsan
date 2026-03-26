"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// ⬇️ Apna Google Place ID yahan paste karo
const GOOGLE_REVIEW_URL = "https://g.page/r/CSZMAA39DJ3iEBM/review";

export default function GoogleReviewFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Rate us on Google"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: "6.5rem", // WhatsApp button ke upar
        right: "2rem",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        textDecoration: "none",
        overflow: "hidden",
        borderRadius: "9999px",
        boxShadow: "0 4px 20px rgba(66,133,244,0.45)",
        cursor: "pointer",
        width: isHovered ? "auto" : "45px",
        height: "45px",
        padding: isHovered ? "0 1.1rem 0 0.75rem" : "0",
        justifyContent: isHovered ? "flex-start" : "center",
        background: "linear-gradient(135deg, #4285F4 0%, #34A853 100%)",
        transition: "width 0.3s ease, padding 0.3s ease, box-shadow 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {/* Google G SVG icon */}
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "36px", minHeight: "36px" }}>
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9L37.5 9.5C34.1 6.5 29.3 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-2.9-.5-4.2-.1-.1-.2-.2-.4-.3z" fill="#FFC107"/>
          <path d="M6.3 15.1l6.6 4.8C14.5 16.1 18.9 13 24 13c3.1 0 5.8 1.1 8 2.9L37.5 9.5C34.1 6.5 29.3 4.5 24 4.5c-7.4 0-13.8 4-17.7 10.6z" fill="#FF3D00"/>
          <path d="M24 45.5c5.2 0 9.9-1.9 13.4-5.1l-6.2-5.2C29.2 37 26.7 38 24 38c-5.2 0-9.6-3.3-11.2-7.9L6.1 35c3.8 6.6 10.3 10.5 17.9 10.5z" fill="#4CAF50"/>
          <path d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4-4.1 5.3l6.2 5.2C40 36 44.5 31 44.5 25c0-1.5-.2-2.9-.5-4.2-.1-.1-.2-.2-.4-.3z" fill="#1976D2"/>
        </svg>
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              overflow: "hidden",
            }}
          >
            <Star size={12} className="fill-yellow-300 text-yellow-300" />
            Review Us
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
