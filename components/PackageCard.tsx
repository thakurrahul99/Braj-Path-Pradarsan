"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, IndianRupee, ArrowRight } from "lucide-react";

interface PackageCardProps {
  slug: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  locations: string[];
  image: string;
  discountBadge: string;
  visualTag: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function PackageCard({
  slug,
  title,
  description,
  duration,
  price,
  locations,
  image,
  discountBadge,
  visualTag,
}: PackageCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -12,
        rotateY: 3,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full card-3d glow-ring"
      style={{
        background: "var(--surface)",
        boxShadow: "var(--card-shadow)",
        border: "1px solid var(--border)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated shimmer on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,215,0,0.07) 0%, rgba(255,153,51,0.04) 50%, transparent 100%)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Left accent glow line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: "linear-gradient(to bottom, #ff9933, #ffd700, transparent)" }}
      />

      {/* Image + Badges */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Discount Badge */}
        {discountBadge && (
          <motion.div
            className="absolute top-3 left-3 bg-linear-to-br from-yellow-700 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 border-2 border-white/70"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {discountBadge}
          </motion.div>
        )}
        {/* Visual Tag */}
        {visualTag && (
          <div className="absolute top-3 right-3 bg-white/90 text-saffron border-2 border-saffron text-xs font-bold px-3 py-1.5 rounded-full shadow z-20">
            {visualTag}
          </div>
        )}
        {/* Duration pill */}
        <div
          className="absolute top-12 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm"
          style={{
            background: "rgba(15,23,42,0.75)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Clock size={11} />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Locations */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <MapPin size={13} className="text-saffron shrink-0" />
          {locations.map((loc) => (
            <span key={loc} className="text-xs font-semibold text-saffron">
              {loc}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-serif font-bold text-xl leading-tight group-hover:text-saffron transition-colors duration-300"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 line-clamp-3"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "var(--border)" }} />

        {/* Price + Buttons row */}
        <div className="flex items-center justify-between gap-3">
          {/* Price */}
          <div className="flex items-center gap-0.5">
            <IndianRupee size={17} className="text-saffron" />
            <span className="text-2xl font-bold text-saffron">
              {price.toLocaleString("en-IN")}
            </span>
            <span
              className="text-xs ml-1 mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              / person
            </span>
          </div>

          {/* View Details button */}
          <Link
            href={`/packages/${slug}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shrink-0 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ff9933, #ffd700)",
              color: "white",
              boxShadow: "0 4px 12px rgba(255,153,51,0.35)",
            }}
          >
            View Details
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Secondary Book button */}
        <Link
          href="/book"
          className="w-full text-center py-2.5 rounded-xl text-sm font-bold border-2 border-saffron text-saffron hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-saffron/30"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
}
