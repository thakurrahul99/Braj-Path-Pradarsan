import React from "react";
import Navbar from "@/components/Navbar";
import {
  MapPin,
  Globe,
  Award,
  Users,
  Landmark,
  Heart,
  Compass,
  CloudRain,
} from "lucide-react";

const AboutUsPage = () => {
  const destinations = [
    {
      title: "Mathura",
      subtitle: "The Birthplace (Janmabhoomi)",
      spec: "Historical Heritage",
      desc: "The spiritual heart where Lord Krishna descended. Experience the ancient Janmasthan and the evening Aarti at Vishram Ghat.",
      icon: <Landmark className="text-amber-600" />,
    },
    {
      title: "Vrindavan",
      subtitle: "The City of Temples",
      spec: "5,000+ Sacred Shrines",
      desc: "Resonating with 'Radhe Radhe', this land of Bhakti features the Banke Bihari, Prem Mandir, and the mystical Nidhivan.",
      icon: <Heart className="text-red-500" />,
    },
    {
      title: "Govardhan",
      subtitle: "The Sacred Hill (Giriraj Ji)",
      spec: "21km Parikrama Path",
      desc: "The hill Krishna lifted to protect his devotees. A place of deep surrender through the holy circumambulation.",
      icon: <CloudRain className="text-blue-500" />,
    },
    {
      title: "Barsana",
      subtitle: "The Land of Radha Rani",
      spec: "Birthplace of Shri Radha",
      desc: "Home to the majestic Shriji Temple and the world-famous Lathmar Holi, celebrating the eternal love of Radha-Krishna.",
      icon: <Compass className="text-teal-600" />,
    },
  ];

  return (
    <div className="bg-orange-50/30 min-h-screen font-sans">
      <Navbar />
      {/* --- HERO SECTION --- */}
      <section className="relative h-125 flex items-center justify-center text-white overflow-hidden">
        {/* Background Overlay with Spiritual Theme */}
        <div className="absolute inset-0 z-0">
          <img
            src="/peacock feather.webp"
            alt="Peacock Feather Background"
            className="w-full h-full object-cover blur-[2px] opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-b from-blue-900/60 to-purple-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
            Braj Path Pradarshak
          </h1>
          <p className="text-xl md:text-2xl font-light italic tracking-wide max-w-2xl mx-auto">
            "Guiding Your Spiritual and Cultural Journey through the Sacred Land
            of Braj"
          </p>
        </div>
      </section>

      {/* --- OUR MISSION SECTION --- */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-blue-900">
              Our Story & Mission
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <b>Braj Path Pradarshak</b>, we believe travel is a pilgrimage of
              the soul. Based in the heart of Braj, we don't just provide
              tours—we act as your dedicated guides (<b>Pradarshak</b>) to the
              divine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between modern comfort and
              ancient spirituality, ensuring every traveler feels the vibration
              of this holy land.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                  <Award size={20} />
                </div>
                <span className="font-semibold text-gray-800">
                  Authentic Insight
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                  <Users size={20} />
                </div>
                <span className="font-semibold text-gray-800">
                  Local Expertise
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/kusumsarovar.jpg"
              alt="Temple Architecture"
              className="rounded-2xl shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 p-8 rounded-2xl hidden md:block">
              <p className="text-white font-bold text-2xl text-center">
                Since
                <br />
                2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DESTINATIONS SECTION --- */}
      <section className="py-20 bg-white/50 backdrop-blur-sm relative">
        {/* Subtle Mandala Background pattern could be added here */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4 text-center">
              Explore the Divine Braj
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 italic">
              "Vrindavan ka kan-kan bole, Radhe-Radhe"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((place, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-b-4 border-amber-500"
              >
                <div className="mb-4 bg-amber-50 w-12 h-12 flex items-center justify-center rounded-full">
                  {place.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">
                  {place.title}
                </h3>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-tighter mb-2">
                  {place.spec}
                </p>
                <p className="text-xs italic text-gray-500 mb-4">
                  {place.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {place.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="bg-blue-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Why Travel With Your 'Pradarshak'?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <MapPin className="mx-auto text-amber-400" size={40} />
              <h4 className="text-xl font-bold">Hidden Gems</h4>
              <p className="text-blue-100/80">
                We take you beyond the crowds to peaceful, lesser-known sacred
                spots.
              </p>
            </div>
            <div className="space-y-4">
              <Globe className="mx-auto text-amber-400" size={40} />
              <h4 className="text-xl font-bold">Hassle-Free</h4>
              <p className="text-blue-100/80">
                From transport to Darshan timing, we handle the logistics while
                you focus on devotion.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="mx-auto text-amber-400" size={40} />
              <h4 className="text-xl font-bold">Personalized</h4>
              <p className="text-blue-100/80">
                Every family has different needs; our tours are flexible and
                caring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">
          Begin Your Sacred Pilgrimage
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Connect with us to plan a journey that stays in your heart forever.
        </p>
        <a href="/packages" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 inline-block">
        {/* className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"> */}
          Plan My Braj Tour
        </a>
      </section>

      <footer className="py-8 bg-gray-100 text-center text-gray-500 text-sm border-t">
        © 2026 Braj Path Pradarshak. Radhe Radhe.
      </footer>
    </div>
  );
};

export default AboutUsPage;
