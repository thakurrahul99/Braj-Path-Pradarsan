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
  image?: string; // Optional image URL
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
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#7AB2B2] rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:border-saffron/30"
    >
      {/* Image Placeholder or Actual Image */}
      <div className="h-48 bg-gray-200 relative overflow-hidden group">
        {image ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-saffron/20 to-peacock/20 text-gray-500">
            <span className="text-sm font-medium">Spiritual Journey</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-peacock shadow-sm">
          Best Seller
        </div>
      </div>

      <div className="p-6 grow flex flex-col">
        <h3 className="text-xl font-serif font-bold text-deep-blue mb-2 group-hover:text-saffron transition-colors">
          {title}
        </h3>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3 grow">
          {description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-saffron" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-saffron" />
            <span>{locations.join(", ")}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase font-semibold">
              Price per person
            </span>
            <div className="flex items-center text-lg font-bold text-peacock">
              <IndianRupee className="h-4 w-4" />
              <span>{price.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href="/book"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-saffron text-white hover:bg-deep-blue transition-colors shadow-md hover:shadow-lg"
            aria-label={`Book ${title}`}
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
