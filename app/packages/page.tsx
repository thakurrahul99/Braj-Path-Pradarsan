"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageCard from "../../components/PackageCard";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

export default function PackagesPage() {
    const allPackages = [
      {
        title: "Vrindavan Parikrama",
        description:
          "Complete spiritual tour of Vrindavan including Banke Bihari, ISKCON, Prem Mandir, Nidhivan, and Yamuna Arti.",
        duration: "2 Days / 1 Night",
        price: 2500,
        locations: ["Vrindavan", "Raman Reti"],
        image: "/vrindavan.jpg",
      },
      {
        title: "Mathura Janmabhoomi",
        description:
          "Visit Shri Krishna Janmabhoomi, Dwarkadhish Temple, and Vishram Ghat. Experience the history of Mathura.",
        duration: "1 Day",
        price: 1200,
        locations: ["Mathura"],
        image: "/gallarypic/shri-krishna-janamsthan-1.jpg",
      },
      {
        title: "Barsana & Nandgaon",
        description:
          "Explore the playful lands of Radha and Krishna. Visit Radha Rani Temple, Nand Bhavan, and Prem Sarovar.",
        duration: "1 Day",
        price: 1500,
        locations: ["Barsana", "Nandgaon"],
        image: "/Barsana.jpg",
      },
      {
        title: "Govardhan Parikrama",
        description:
          "Perform the sacred 21km parikrama of Giriraj Govardhan. Visit Danghati, Kusum Sarovar, and Mansi Ganga.",
        duration: "1 Day",
        price: 1800,
        locations: ["Govardhan", "Radha Kund"],
      },
      {
        title: "Complete Braj Yatra",
        description:
          "The ultimate spiritual journey covering Mathura, Vrindavan, Govardhan, Barsana, Nandgaon, and Gokul.",
        duration: "3 Days / 2 Nights",
        price: 5500,
        locations: ["All Major Braj Sites"],
      },
      {
        title: "Mystery of Nidhivan",
        description:
          "Special evening tour focusing on the mysteries of Nidhivan and Seva Kunj. (Daytime visit only).",
        duration: "Half Day",
        price: 800,
        locations: ["Vrindavan"],
      },
    ];

    return (
        <main className="min-h-screen bg-neutral-50">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-4">
                        Our Spiritual Packages
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the divine essence of Braj with our thoughtfully designed yatra packages. Each journey is crafted to provide you with a deeply spiritual and comfortable experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPackages.map((pkg, index) => (
                        <PackageCard key={index} {...pkg} />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
