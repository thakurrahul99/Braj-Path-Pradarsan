"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Using shared Footer
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Landmark,
  Heart,
  Compass,
  CloudRain,
  Sparkles,
  Eye,
  Moon,
  Flower,
  Trees,
  Globe,
  Bird,
} from "lucide-react";

const AboutUsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const destinations = [
    {
      title: "Mathura",
      subtitle: "The Birthplace",
      spec: "Janmabhoomi",
      desc: "The spiritual heart where Lord Krishna descended. Experience the ancient Janmasthan and the evening Aarti at Vishram Ghat.",
      icon: <Landmark className="text-saffron" />,
    },
    {
      title: "Vrindavan",
      subtitle: "City of Temples",
      spec: "5,000+ Shrines",
      desc: "Resonating with 'Radhe Radhe', this land features Banke Bihari, Prem Mandir, and the mystical Nidhivan.",
      icon: <Heart className="text-red-500" />,
    },
    {
      title: "Govardhan",
      subtitle: "Sacred Hill",
      spec: "Giriraj Ji",
      desc: "The hill Krishna lifted. A place of deep surrender through the holy 21km circumambulation (Parikrama).",
      icon: <CloudRain className="text-blue-500" />,
    },
    {
      title: "Barsana",
      subtitle: "Radha Rani's Abode",
      spec: "Prem Mandir",
      desc: "Home to the majestic Shriji Temple and the world-famous Lathmar Holi, celebrating eternal love.",
      icon: <Compass className="text-peacock" />,
    },
    {
      title: "Gokul",
      subtitle: "The Childhood Abode",
      spec: "Raman Reti & Nand Bhawan",
      desc: "The sacred village where Lord Krishna spent his infancy. Experience the divine serenity of Raman Reti, where the Lord played in the sands, and visit the historic Chaurasi Khamba.",
      icon: <Heart className="text-pink-500" />,
    },
    {
      title: "Nandgaon",
      subtitle: "The Fortress of Nand Baba",
      spec: "Nandishwar Temple",
      desc: "Perched atop the Nandishwar hill, this was the home of Krishna’s foster father. It remains a symbol of fatherly love and is the center of the famous Samaj celebration during Holi.",
      icon: <Landmark className="text-orange-600" />,
    },
    {
      title: "Chhatikara",
      subtitle: "The Divine Gateway",
      spec: "Garuda Govind Temple",
      desc: "A significant entrance point to the Braj region. It is home to the ancient Garuda Govind Ji temple and the magnificent Vaishno Devi Mandir, a modern architectural marvel.",
      icon: <Compass className="text-indigo-600" />,
    },
    {
      title: "Char Dham",
      subtitle: "The Universal Confluence",
      spec: "Srimad Bhagwat Dham",
      desc: "A unique spiritual complex in Braj that replicates the four major pilgrimages of India. It allows devotees to experience the essence of Badrinath, Dwarka, Puri, and Rameshwaram in one sacred spot.",
      icon: <Globe className="text-blue-600" />,
    },
    // ... kept key destinations
  ];

  const hiddenTreasures = [
    {
      title: "Nidhivan",
      desc: "The mysterious grove where Krishna performs Raas Leela every night. It is closed after sunset as the divine energy takes over.",
      icon: <Moon className="text-indigo-400" />,
      tag: "Deep Mystery",
    },
    {
      title: "Raman Reti",
      desc: "The soft sands of Gokul where Krishna rolled and played. Devotees roll in this sacred dust to seek blessings.",
      icon: <Sparkles className="text-gold" />,
      tag: "Divine Play",
    },
    {
      title: "Seva Kunj",
      desc: "The place of eternal service (Seva) where trees are believed to be Gopis witnessing the divine pastimes.",
      icon: <Eye className="text-emerald-500" />,
      tag: "Sacred Grove",
    },
    {
      title: "Radha Kund",
      desc: "Considered the most sacred spot in the universe by devotees. It was created by Shri Radha herself. A midnight dip during Ahoi Ashtami is believed to be exceptionally auspicious.",
      icon: <Heart className="text-pink-600" />,
      tag: "Holiest Kund of Braj",
    },
    {
      title: "Ravala",
      desc: "While Barsana is her playground, Ravala is where Shri Radha appeared. This peaceful village offers a deep spiritual connection away from the main city crowds.",
      icon: <Flower className="text-red-400" />,
      tag: "Original Home of Radha Rani",
    },
    {
      title: "Lohavan",
      desc: "One of the 12 sacred forests (Van) of Braj. It is famous for the spot where Krishna used to graze his cows and the ancient temple dedicated to Lohasura's liberation.",
      icon: <Trees className="text-green-600" />,
      tag: "Ancient Pasture Lands",
    },
    {
      title: "Bhandirvan",
      desc: "The forest where, according to the Garga Samhita, Lord Brahma himself performed the wedding ceremony of Radha and Krishna under a prehistoric Banyan tree.",
      icon: <Users className="text-purple-600" />,
      tag: "Radha-Krishna Wedding place",
    },
    {
      title: "Dwarkadhish",
      desc: "Located near Vishram Ghat, this temple showcases stunning Rajasthani architecture and vibrant paintings depicting the life of the King of Dwarka.",
      icon: <Landmark className="text-blue-600" />,
      tag: "The King of Mathura",
    },
    {
      title: "Kokilavan",
      desc: "Where Krishna sang like a Cuckoo to meet Radha Rani. It now houses a powerful Shani Dev temple where devotees perform Parikrama for peace.",
      icon: <Bird className="text-amber-700" />,
      tag: "Ancient Shani Dev Dham",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 font-sans selection:bg-saffron/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] min-h-100 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-deep-blue">
          {/* Fallback/Layer if image fails or for tint */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-deep-blue/60 to-neutral-50/10 z-10"></div>
          {/* Replace with actual image via 'src' if available, currently using CSS pattern equivalent */}
          <div className="absolute inset-0 opacity-30 bg-[url('/peacock%20feather.webp')] bg-cover bg-center"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-gold text-sm font-semibold tracking-wider mb-4 backdrop-blur-md">
            DISCOVER THE DIVINE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg text-transparent bg-clip-text bg-linear-to-r from-white via-gold to-white">
            Braj Path Pradarshak
          </h1>
          <p className="text-lg md:text-2xl font-light text-gray-100 max-w-2xl mx-auto leading-relaxed">
            "Guiding your soul through the sacred lanes of Braj, where every
            particle vibrates with devotion."
          </p>
        </motion.div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-deep-blue mb-2">
                Our Sacred Mission
              </h2>
              <div className="h-1.5 w-24 bg-saffron rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At <b>Braj Path Pradarsak</b>, we believe that a visit to Braj is
              not just a tour, but a homecoming for the soul. Based in the heart
              of this holy land, we act as your <b>Pradarshak</b> (Guide),
              bridging the gap between comfort and rigorous spirituality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-blue-50 p-3 rounded-full text-deep-blue">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Authentic Insight</h4>
                  <p className="text-xs text-gray-500">
                    Real stories & history
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="bg-saffron/10 p-3 rounded-full text-saffron">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Local Expertise</h4>
                  <p className="text-xs text-gray-500">
                    Native Brajwasi guides
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
              <img
                src="/kusumsarovar.jpg"
                alt="Kusum Sarovar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-deep-blue text-white p-6 rounded-2xl shadow-xl hidden md:block border-t-4 border-saffron">
              <p className="font-serif text-3xl font-bold">5000+</p>
              <p className="text-sm opacity-80 uppercase tracking-widest">
                Years of Heritage
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DESTINATIONS GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm">
            Sacred Geography
          </span>
          <h2 className="text-4xl font-serif font-bold text-deep-blue mt-2">
            Explore the Divine Dham
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-saffron hover:shadow-2xl transition-all"
            >
              <div className="mb-4 bg-amber-50 w-12 h-12 flex items-center justify-center rounded-full">
                {place.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-1">
                {place.title}
              </h3>
              <p className="text-[10px] font-bold text-saffron uppercase tracking-widest mb-3">
                {place.spec}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {place.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HIDDEN TREASURES SECTION (NEW) --- */}
      <section className="py-20 bg-[#09637E] text-white" >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Sparkles size={16} className="text-gold" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Secret Spots
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Hidden Treasures of Braj
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Beyond the bustling temples lie the silent groves and mystical
              corners known only to the true seekers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {hiddenTreasures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="mb-6 bg-white/10 w-14 h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform text-gold">
                  {item.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 bg-saffron rounded text-white">
                    {item.tag}
                  </span>
                </div>
                <p className="text-blue-100 leading-relaxed opacity-90">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center px-6 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-blue mb-6">
            Ready for your Pilgrimage?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
            Let us handle the arrangements while you immerse yourself in Bhakti.
          </p>
          <a
            href="/packages"
            className="inline-block bg-saffron hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Browse Packages
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
