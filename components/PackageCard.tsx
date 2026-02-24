"use client";

import { Clock, MapPin, IndianRupee, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  locations: string[];
  image?: string;
}

export default function PackageCard({
  title,
  description,
  duration,
  price,
  locations,
  image,
}: PackageCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 60, damping: 18 },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: "var(--surface)",
        boxShadow: "var(--card-shadow)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Shimmer on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,215,0,0.06) 0%, transparent 60%)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/20 to-peacock/20">
            <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              Spiritual Journey
            </span>
          </div>
        )}
        {/* Gradient overlay at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md backdrop-blur-sm"
          style={{ background: "var(--surface)", color: "#1c39bb" }}
          whileHover={{ scale: 1.05 }}
        >
          ⭐ Best Seller
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3
          className="text-xl font-serif font-bold mb-2 group-hover:text-saffron transition-colors duration-300"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h3>

        <p className="text-sm mb-4 line-clamp-3 grow" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex items-center text-sm gap-2" style={{ color: "var(--text-muted)" }}>
            <Clock className="h-4 w-4 text-saffron shrink-0" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm gap-2" style={{ color: "var(--text-muted)" }}>
            <MapPin className="h-4 w-4 text-saffron shrink-0" />
            <span className="line-clamp-1">{locations.join(", ")}</span>
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--text-subtle)" }}>
              Per person
            </span>
            <div className="flex items-center text-xl font-bold text-peacock dark:text-gold">
              <IndianRupee className="h-4 w-4" />
              <span>{price.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/book"
            aria-label={`Book ${title}`}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-saffron text-white hover:bg-deep-blue hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-saffron/40"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
