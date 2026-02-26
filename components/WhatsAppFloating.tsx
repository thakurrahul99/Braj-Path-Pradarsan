"use client";

import React, { useState } from "react";

// WhatsApp number and pre-filled message
const whatsappNumber = "7078117174"; // Change to your number
const message = encodeURIComponent("Radhe Radhe! Mujhe enquiry karni hai.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

export default function WhatsAppFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 1000,
        // background: "var(--wa-float-btn)",
        border: "none", // ensure no border
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        boxShadow: "none", // remove any shadow if present
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 0.2s",
        padding: 0,
        transform: isHovered ? "scale(1.2)" : "scale(1)",
      }}
      //   onMouseOver={(e) =>
      // (e.currentTarget.style.background = "var(--wa-float-btn-hover)")
      //   }
      //   onMouseOut={(e) =>
      // (e.currentTarget.style.background = "var(--wa-float-btn)")
      //   }
    >
      <img
        src="/icons8-whatsapp.gif"
        alt="WhatsApp"
        style={{ width: 36, height: 36, borderRadius: "50%" }}
      />
    </a>
  );
}
