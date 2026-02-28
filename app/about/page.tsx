"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    desc: "The sacred village where Lord Krishna spent his infancy. Experience the divine serenity of Raman Reti.",
    icon: <Heart className="text-pink-500" />,
  },
  {
    title: "Nandgaon",
    subtitle: "The Fortress of Nand Baba",
    spec: "Nandishwar Temple",
    desc: "Perched atop the Nandishwar hill, this was the home of Krishna's foster father.",
    icon: <Landmark className="text-orange-600" />,
  },
  {
    title: "Chhatikara",
    subtitle: "The Divine Gateway",
    spec: "Garuda Govind Temple",
    desc: "A significant entrance point to the Braj region with the ancient Garuda Govind Ji temple.",
    icon: <Compass className="text-indigo-600" />,
  },
  {
    title: "Char Dham",
    subtitle: "The Universal Confluence",
    spec: "Srimad Bhagwat Dham",
    desc: "A unique spiritual complex in Braj that replicates the four major pilgrimages of India.",
    icon: <Globe className="text-blue-600" />,
  },
];

const hiddenTreasures = [
  {
    title: "Nidhivan",
    tag: "Deep Mystery",
    desc: "The mysterious grove where Krishna performs Raas Leela every night. It is closed after sunset as the divine energy takes over.",
    icon: <Moon className="text-indigo-400" />,
  },
  {
    title: "Raman Reti",
    tag: "Divine Play",
    desc: "The soft sands of Gokul where Krishna rolled and played. Devotees roll in this sacred dust to seek blessings.",
    icon: <Sparkles className="text-gold" />,
  },
  {
    title: "Seva Kunj",
    tag: "Sacred Grove",
    desc: "The place of eternal service (Seva) where trees are believed to be Gopis witnessing the divine pastimes.",
    icon: <Eye className="text-emerald-500" />,
  },
  {
    title: "Radha Kund",
    tag: "Holiest Kund of Braj",
    desc: "Considered the most sacred spot in the universe by devotees. It was created by Shri Radha herself.",
    icon: <Heart className="text-pink-600" />,
  },
  {
    title: "Ravala",
    tag: "Original Home of Radha Rani",
    desc: "While Barsana is her playground, Ravala is where Shri Radha appeared.",
    icon: <Flower className="text-red-400" />,
  },
  {
    title: "Lohavan",
    tag: "Ancient Pasture Lands",
    desc: "One of the 12 sacred forests (Van) of Braj. Famous for the spot where Krishna used to graze his cows.",
    icon: <Trees className="text-green-600" />,
  },
  {
    title: "Bhandirvan",
    tag: "Radha-Krishna Wedding place",
    desc: "The forest where Lord Brahma himself performed the wedding ceremony of Radha and Krishna.",
    icon: <Users className="text-purple-600" />,
  },
  {
    title: "Dwarkadhish",
    tag: "The King of Mathura",
    desc: "Located near Vishram Ghat, this temple showcases stunning Rajasthani architecture.",
    icon: <Landmark className="text-blue-600" />,
  },
  {
    title: "Kokilavan",
    tag: "Ancient Shani Dev Dham",
    desc: "Where Krishna sang like a Cuckoo to meet Radha Rani. It now houses a powerful Shani Dev temple.",
    icon: <Bird className="text-amber-700" />,
  },
];

const AboutUsPage = () => {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-deep-blue dark:bg-[#020810]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-deep-blue/60 to-transparent z-10" />
          <div className="absolute inset-0 opacity-30 bg-[url('/peacock%20feather.webp')] bg-cover bg-center" />
        </div>
        {/* Floating orbs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none opacity-15"
            style={{
              width: 260 + i * 60,
              height: 260 + i * 60,
              left: `${i * 35}%`,
              top: i === 1 ? "60%" : "10%",
              background: `radial-gradient(circle, ${["#ff9933", "#ffd700", "#1c39bb"][i]}, transparent 70%)`,
            }}
            animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-gold text-xs font-semibold tracking-widest mb-5 backdrop-blur-md">
            DISCOVER THE DIVINE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white">
            Braj Path Pradarshak
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
            "Guiding your soul through the sacred lanes of Braj, where every
            particle vibrates with devotion."
          </p>
        </motion.div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <span className="text-saffron font-semibold tracking-widest uppercase text-xs">
                ✦ Our Purpose ✦
              </span>
              <h2
                className="text-4xl font-serif font-bold mt-2 mb-3"
                style={{ color: "var(--text)" }}
              >
                Our Sacred Mission
              </h2>
              <div className="h-1.5 w-24 bg-saffron rounded-full" />
            </div>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              At <b className="text-saffron">Braj Path Pradarsak</b>,
              our mission is not just to organize tours — it is
              to connect hearts with the divine land of Braj. We believe that
              every journey to Vrindavan and Mathura is a spiritual calling, not
              just a trip. Our purpose is to provide safe, comfortable, and
              affordable travel so that families can experience the peace,
              devotion, and blessings of<b className="text-white"> Shri Krishna</b> without worry. We are
              committed to honesty, transparency, and heartfelt service —
              because for us, this is not business, it is seva. 🙏
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: Award,
                  title: "Authentic Insight",
                  sub: "Real stories & history",
                  bg: "rgba(28,57,187,0.08)",
                  color: "#1c39bb",
                },
                {
                  Icon: Users,
                  title: "Local Expertise",
                  sub: "Native Brajwasi guides",
                  bg: "rgba(255,153,51,0.08)",
                  color: "#ff9933",
                },
              ].map(({ Icon, title, sub, bg, color }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--card-shadow)",
                  }}
                >
                  <div className="p-3 rounded-full" style={{ background: bg }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: "var(--text)" }}>
                      {title}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: `4px solid var(--surface)` }}
            >
              <img
                src="/kusumsarovar.jpg"
                alt="Kusum Sarovar"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl hidden md:block border-t-4 border-saffron"
              style={{ background: "var(--footer-bg)", color: "white" }}
            >
              <p className="font-serif text-3xl font-bold">5000+</p>
              <p className="text-xs opacity-70 uppercase tracking-widest">
                Years of Heritage
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Destinations Grid ── */}
      <section
        className="py-24 max-w-7xl mx-auto px-6"
        style={{ background: "var(--bg)" }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="text-saffron font-bold tracking-widest uppercase text-xs">
            ✦ Sacred Geography ✦
          </span>
          <h2
            className="text-4xl font-serif font-bold mt-2"
            style={{ color: "var(--text)" }}
          >
            Explore the Divine Dham
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border-b-4 border-saffron hover:shadow-2xl transition-all cursor-default"
              style={{
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="mb-4 w-12 h-12 flex items-center justify-center rounded-full"
                style={{ background: "rgba(255,153,51,0.1)" }}
              >
                {place.icon}
              </div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "var(--text)" }}
              >
                {place.title}
              </h3>
              <p className="text-[10px] font-bold text-saffron uppercase tracking-widest mb-3">
                {place.spec}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {place.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Hidden Treasures ── */}
      <section className="py-20 bg-[var(--section-dark)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Sparkles size={14} className="text-gold" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                Secret Spots
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Hidden Treasures of Braj
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#c8e8ed" }}>
              Beyond the bustling temples lie the silent groves and mystical
              corners known only to true seekers.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {hiddenTreasures.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default"
              >
                <motion.div
                  className="mb-5 bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  <span className="text-xs font-bold px-2 py-1 bg-saffron rounded-full text-white ml-2 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-[var(--section-dark)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <Heart size={14} style={{ color: "#7ab2b2" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7ab2b2" }}>
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our Pilgrims Say
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#c8e8ed" }}>
              Real experiences from devotees who journeyed with us in Braj.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Example testimonials */}
            {[
              {
                name: "Sanjay Agarwal",
                location: "Delhi",
                text: "The guides were so knowledgeable and made every temple visit meaningful. The arrangements were flawless! Highly recommended for a spiritual journey.",
                image: "/gallarypic/Mukharvind.avif",
              },
              {
                name: "Meera Sharma",
                location: "Mumbai",
                text: "Braj Path Pradarsan made our yatra so comfortable. The custom package was perfect for our family. We felt truly blessed!",
                image: "/gallarypic/iskcon-inside.jpg",
              },
              {
                name: "Ravi Joshi",
                location: "Ahmedabad",
                text: "Hidden treasures section was a highlight! The team ensured we experienced the real Braj beyond the usual spots.",
                image: "/Krishna pic_.jpg",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default flex flex-col items-center text-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-gold object-cover"
                />
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#c8e8ed" }}>
                  "{t.text}"
                </p>
                <div className="font-bold text-lg text-gold mb-1">{t.name}</div>
                <div className="text-xs" style={{ color: "#7ab2b2" }}>{t.location}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 text-center px-6"
        style={{ background: "var(--surface-2)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Ready for your Pilgrimage?
          </h2>
          <p
            className="mb-10 max-w-xl mx-auto text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Let us handle the arrangements while you immerse yourself in Bhakti.
          </p>
          <a
            href="/packages"
            className="inline-block bg-saffron hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:shadow-saffron/40"
          >
            Browse Packages 🙏
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
