"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
      <div className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden bg-linear-to-b from-[#088395] to-deep-blue">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-saffron rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-gold/30 text-gold text-sm font-semibold tracking-wider mb-6">
              JAI SHRI KRISHNA
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Welcome to the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-saffron to-gold">
                Land of Braj
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the divine vibes of Vrindavan, Mathura, and Barsana.
              Let us guide you on a spiritual journey through the sacred leela
              sthalis of Lord Krishna.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/packages"
                className="px-8 py-4 bg-saffron text-white rounded-full font-bold text-lg shadow-lg hover:shadow-saffron/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group border-2 border-transparent hover:border-gold"
              >
                Explore Packages
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    );
}
