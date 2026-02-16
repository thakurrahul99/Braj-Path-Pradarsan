import React from "react";
import Navbar from "@/components/Navbar";
import { Camera, Heart, MapPin, Eye } from "lucide-react";

const GalleryPage = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1545105511-92330f81d855?q=80&w=800",
      title: "Evening Aarti",
      location: "Vishram Ghat, Mathura",
      category: "Spiritual",
    },
    {
      url: "https://images.unsplash.com/photo-1621210185317-099434863768?q=80&w=800",
      title: "Divine Entrance",
      location: "Prem Mandir, Vrindavan",
      category: "Architecture",
    },
    {
      url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800",
      title: "Peacock Grace",
      location: "Nidhivan",
      category: "Nature",
    },
    {
      url: "https://images.unsplash.com/photo-1626078299034-9694726084e6?q=80&w=800",
      title: "Sacred Hill",
      location: "Govardhan",
      category: "Pilgrimage",
    },
    {
      url: "https://images.unsplash.com/photo-1582230321303-3769c279477e?q=80&w=800",
      title: "Lathmar Holi",
      location: "Barsana",
      category: "Culture",
    },
    {
      url: "https://images.unsplash.com/photo-1616421045233-04980630b4da?q=80&w=800",
      title: "Temple Spires",
      location: "Vrindavan",
      category: "Architecture",
    },
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen">
        <Navbar />
      {/* --- Spiritual Header --- */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none w-full max-w-4xl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063909.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 px-6">
          <Camera className="mx-auto text-amber-600 mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
            Braj Darshan Gallery
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 italic max-w-2xl mx-auto text-lg">
            "Capturing the divine vibrations and eternal beauty of Shri
            Krishna's playground."
          </p>
        </div>
      </section>

      {/* --- Gallery Grid --- */}
      <section className="max-w-7xl mx-auto pb-24 px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 break-inside-avoid"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-serif font-bold mb-1 flex items-center gap-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm flex items-center gap-1">
                      <MapPin size={14} className="text-amber-500" />{" "}
                      {image.location}
                    </p>
                  </div>
                </div>

                {/* Quick View Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="text-white" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Experience Section --- */}
        <div className="mt-20 p-12 rounded-3xl bg-blue-900 text-center relative overflow-hidden">
          {/* Spiritual Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/mandala.png')]"></div>

          <div className="relative z-10">
            <Heart
              className="mx-auto text-red-400 mb-6 animate-pulse"
              size={48}
            />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              See It for Yourself
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Photos can only capture a fraction of the peace. Join us to
              experience the actual energy of these sacred lands.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-full transition-all shadow-lg transform hover:-translate-y-1">
              Book Your Tour Now
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-white text-center text-gray-400 text-sm border-t border-orange-50">
        "Braj Path Pradarshak — Guiding you home."
      </footer>
    </div>
  );
};

export default GalleryPage;
