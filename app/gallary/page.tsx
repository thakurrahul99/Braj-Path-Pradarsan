import React from "react";
import Navbar from "@/components/Navbar";
import { Camera, Heart, MapPin, Eye } from "lucide-react";

const GalleryPage = () => {
  const images = [
    {
      url: "/gallarypic/prem%20mandir.webp",
      title: "Divine Entrance",
      location: "Prem Mandir, Vrindavan",
      category: "Architecture",
    },
    {
      url: "/gallarypic/Banke-bihari.webp",
      title: "Banke Bihari's Grace",
      location: "Vrindavan",
      category: "Faith & Devotion",
    },
    {
      url: "/gallarypic/lathmarholi.jpg",
      title: "Lathmar Holi Festival",
      location: "Barsana",
      category: "Culture",
    },
    {
      url: "/gallarypic/shri-krishna-janamsthan-1.jpg",
      title: "Sacred Birthplace",
      location: "Shri Krishna Janmasthan, Mathura",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/artipic.jpg",
      title: "Arti Celebration",
      location: "Sacred Temple",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/kirti-mandir.webp",
      title: "Finely Carved Kirti Mandir",
      location: "Barsana",
      category: "Architecture",
    },
    {
      url: "/gallarypic/Nidhivan.png",
      title: "Peacock Grace",
      location: "Nidhivan",
      category: "Nature",
    },
    {
      url: "/gallarypic/goverdhanparwat.webp",
      title: "Sacred Hill",
      location: "Govardhan",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/mansiganga.jpg",
      title: "Mansi Ganga Serenity",
      location: "Govardhan",
      category: "Nature",
    },
    {
      url: "/gallarypic/yamunaji.jpg",
      title: "Yamuna's Sacred Flow",
      location: "Yamunaji",
      category: "Nature",
    },
    {
      url: "/gallarypic/barsana-lathmar.jpg",
      title: "The Real Meaning Of Lathmar Holi",
      location: "Barsana",
      category: "Culture",
    },
    {
      url: "/gallarypic/barsanaradharani.jpg",
      title: "Radharani's Divine Grace",
      location: "Barsana",
      category: "Faith & Devotion",
    },
    {
      url: "/gallarypic/daanghati.jpg",
      title: "Danghati's Divine Aura",
      location: "Govardhan",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/chaardhaam-mahadev.png",
      title: "Mahadev's Chardham",
      location: "Chaardham",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/chaurasi-khamba.jpg",
      title: "84 Pillars of Glory",
      location: "Gokul",
      category: "Architecture",
    },
    {
      url: "/gallarypic/chintaharan.jpg",
      title: "Chinta Haran Temple",
      location: "Mahavan",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/Dwarkadheesh.png",
      title: "Dwarkadheesh Temple",
      location: "Mathura",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/holygate.jpg",
      title: "Sacred Gateway",
      location: "Holy Gate",
      category: "Architecture",
    },
    {
      url: "/gallarypic/iskcon-inside.jpg",
      title: "Radha Krishna's Abode",
      location: "Vrindavan",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/ISKCON-Temple-Vrindavan.webp",
      title: "ISKCON Temple Vrindavan",
      location: "Vrindavan",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/priyakantju-temple.jpg",
      title: "Priya Kant Ju Temple",
      location: "Vrindavan",
      category: "Architecture",
    },
    {
      url: "/gallarypic/radhakund.webp",
      title: "Radha Kund Divine Waters",
      location: "Radha Kund",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/Raman-Reti-deer.jpg",
      title: "Deer in Raman Reti",
      location: "Raman Reti",
      category: "Nature",
    },
    {
      url: "/gallarypic/ramanreti-animal.jpg",
      title: "Wildlife of Raman Reti",
      location: "Raman Reti",
      category: "Nature",
    },
    {
      url: "/gallarypic/shanidev-kokilavan.jpg",
      title: "Shani Dev Temple",
      location: "Kokilavan",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/shanidham.webp",
      title: "Shani Dham Sanctuary",
      location: "Chaardham",
      category: "Spiritual",
    },
    {
      url: "/gallarypic/vaishnodevi.jpg",
      title: "Vaishno Devi Temple",
      location: "Chhatikara",
      category: "Pilgrimage",
    },
    {
      url: "/gallarypic/Mukharvind.avif",
      title: "",
      location: "Jatipura",
      category: "Faith",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      {/* --- Spiritual Header --- */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/bansiforgallary.png"
            alt=""
            className="w-full h-90 object-cover blur-[2px] opacity-70"
          />
        </div>

        <div className="relative z-10 px-6">
          <Camera className="mx-auto mb-4" size={40} style={{ color: "#088395" }} />
          <h1
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: "#09637e" }}
          >
            Braj Darshan Gallery
          </h1>
          <div className="h-1 w-20 mx-auto rounded-full mb-6" style={{ background: "#ff9933" }} />
          <p className="italic max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
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
              className="relative group overflow-hidden rounded-2xl break-inside-avoid transition-all duration-500"
              style={{
                background: "var(--surface)",
                boxShadow: "var(--card-shadow)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(9,99,126,0.92) 0%, transparent 60%)",
                  }}
                >
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#ffd700" }}>
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-serif font-bold mb-1 flex items-center gap-2">
                      {image.title}
                    </h3>
                    <p className="text-sm flex items-center gap-1" style={{ color: "#7ab2b2" }}>
                      <MapPin size={14} style={{ color: "#ff9933" }} />{" "}
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
        <div
          className="mt-20 p-12 rounded-3xl text-center relative overflow-hidden"
          style={{ background: "#09637e" }}
        >
          {/* Spiritual Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/mandala.png')]" />

          <div className="relative z-10">
            <Heart
              className="mx-auto mb-6 animate-pulse"
              size={48}
              style={{ color: "#ffd700" }}
            />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              See It for Yourself
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "#ebf4f6" }}>
              Photos can only capture a fraction of the peace. Join us to
              experience the actual energy of these sacred lands.
            </p>
            <button
              className="font-bold py-3 px-10 rounded-full transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "#ff9933", color: "white" }}
            >
              <a href="/book" className="text-white no-underline">
                Book Your Tour Now
              </a>
            </button>
          </div>
        </div>
      </section>

      <footer
        className="py-8 text-center text-sm border-t"
        style={{
          background: "var(--footer-bg)",
          color: "var(--text-muted)",
          borderColor: "var(--border)",
        }}
      >
        "Braj Path Pradarshak — Guiding you home."
      </footer>
    </div>
  );
};

export default GalleryPage;
