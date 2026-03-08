"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera } from "lucide-react";

const photos = [
  {
    src: "/gallarypic/prem%20mandir.webp",
    label: "Prem Mandir, Vrindavan",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallarypic/barsanaradharani.jpg",
    label: "Radha Rani Temple, Barsana",
    span: "",
  },
  { src: "/gallarypic/daanghati.jpg", label: "Daan Ghati Temple", span: "" },
  {
    src: "/gallarypic/Banke-bihari.webp",
    label: "Banke Bihari Temple",
    span: "",
  },
  {
    src: "/gallarypic/ISKCON-Temple-Vrindavan.webp",
    label: "ISKCON Vrindavan",
    span: "",
  },
  { src: "/gallarypic/radhakund.webp", label: "Radha Kund", span: "" },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="animate-spin-slow absolute -top-16 -right-16 w-64 h-64 rounded-full border-2 opacity-[0.07]"
          style={{ borderColor: "#ffd700" }}
        />
        <div
          className="animate-spin-reverse absolute bottom-10 left-10 w-48 h-48 rounded-full border opacity-[0.07]"
          style={{ borderColor: "#ff9933" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
              ✦ Sacred Places ✦
            </span>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mt-2"
              style={{ color: "var(--text)" }}
            >
              Glimpses of Braj
            </h2>
          </div>
          <Link
            href="/gallary"
            className="inline-flex items-center gap-2 text-sm font-bold text-saffron group-hover:text-white hover:bg-gold transition-colors shrink-0 group"
          >
            <Camera size={16} />
            View Full Gallery
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {photos.map(({ src, label, span }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.04,
                rotateZ: i % 2 === 0 ? 1 : -1,
                y: -6,
                transition: { duration: 0.3 },
              }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${span}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Cinematic hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,20,38,0.88) 0%, rgba(4,20,38,0.2) 50%, transparent 80%)",
                }}
              >
                <motion.p
                  className="text-white text-sm font-semibold leading-tight"
                  initial={{ y: 8, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.p>
              </div>

              {/* Animated gold border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: "2px solid rgba(255,215,0,0.6)",
                  boxShadow: "inset 0 0 20px rgba(255,153,51,0.1)",
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-tl-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top-left, rgba(255,215,0,0.4), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA strip below grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center mt-8"
        >
          <Link
            href="/gallary"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold border-2 border-gold text-gold transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-lg hover:shadow-gold/30 text-sm hover:scale-105"
          >
            <Camera size={15} />
            See All Sacred Photos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
