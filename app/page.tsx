"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";

export default function Home() {
  const featuredPackages = [
    {
      title: "Vrindavan Parikrama",
      description:
        "Complete spiritual tour of Vrindavan including Banke Bihari, ISKCON, Prem Mandir, and Nidhivan.",
      duration: "2 Days / 1 Night",
      price: 2500,
      locations: ["Vrindavan", "Raman Reti"],
      // image:
        // "https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=500&h=300&fit=crop",
    },
    {
      title: "Mathura & Barsana Yatra",
      description:
        "Visit the birthplace of Lord Krishna in Mathura and Radha Rani's palace in Barsana.",
      duration: "1 Day",
      price: 1500,
      locations: ["Mathura", "Barsana", "Gokul"],
      // image:
        // "https://images.unsplash.com/photo-1548599821-8f94e9b34795?w=500&h=300&fit=crop",
    },
    {
      title: "Complete Braj Yatra",
      description:
        "An immersive 3-day journey covering all major leela sthalis of Braj Bhoomi.",
      duration: "3 Days / 2 Nights",
      price: 4500,
      locations: ["Mathura", "Vrindavan", "Govardhan", "Barsana", "Nandgaon"],
      // image:
        // "https://images.unsplash.com/photo-1532619675605-1ede6c2e7b94?w=500&h=300&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-saffron font-semibold tracking-wider uppercase text-sm">
            Spiritual Journeys
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-blue mt-2 mb-4">
            Our Popular Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated pilgrimage packages designed to
            give you the most authentic spiritual experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </section>

      {/* Testimonials or Info Section could go here */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-peacock mb-6">
            Why Choose Braj Path Pradarsan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-saffron mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600 text-sm">
                Locally experienced guides who know the stories and secrets of
                every temple.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-saffron mb-2">
                Comfortable Travel
              </h3>
              <p className="text-gray-600 text-sm">
                AC coaches and sanitized vehicles for a hassle-free journey.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-saffron mb-2">
                Satvik Meals
              </h3>
              <p className="text-gray-600 text-sm">
                Pure vegetarian prasadam arrangements included in premium
                packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
