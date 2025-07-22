
import React from "react";
import FAQSection from "./FAQ";

import Scroll from "./Scroll"
import bg from "./photos/bg.jpg";
import logo from "./photos/design1.png";
import villa1 from "./photos/villa55.jpeg";
import villa2 from "./photos/villa2.avif";
import villa3 from "./photos/villa3.avif";
import { motion } from "framer-motion";
import flat1 from "./photos/villa2.avif";
import flat2 from "./photos/villa3.avif";
import flat3 from "./photos/villa1.avif";

import com1 from "./photos/villa3.avif";
import com2 from "./photos/villa2.avif";
import com3 from "./photos/villa1.avif";
import cover  from "./photos/videobg2.mp4"

const collections = [
  {
    title: "New Projects",
    image: villa1,
  },
  {
    title: "Ready to Move",
    image: flat1,
  },
  {
    title: "Luxury",
    image: flat3,
  },
  {
    title: "Budget Friendly",
    image: villa3,
  },
  {
    title: "Condominiums",
    image: com1,
  },
  {
    title: "Builder Floors",
    image: flat2,
  },
  {
    title: "For Bachelors",
    image: villa2,
  },
  {
    title: "Row Houses",
    image: com3,
  },
];


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white text-center font-serif relative overflow-hidden">
  <div className="w-full h-[90vh] relative overflow-hidden">
    {/* Background Video */}
    <video
      src={cover} // imported video path
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    {/* Lighter Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-0" />

    {/* Content over video */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      {/* Animated Logo */}
      <motion.img
        src={logo}
        alt="Roots & Roofs"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-44 md:w-52 shadow-lg mb-6"
      />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold font-[tinos] text-white px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      >
        Discover Your Dream Place With Us
      </motion.h1>
    </div>
  </div>
</section>


      <Scroll></Scroll>


      <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center px-6 md:px-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for subtle darkening */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT BLOCK */}
        <div>
          <h1 className="text-4xl md:text-5xl font-[tinos] font-bold text-black leading-tight mb-6">
            Designed to <br />
            Inspire, Built to Be <br />
            Remembered.
          </h1>
          <p className="text-gray-800 font-[tinos] text-lg max-w-md">
            With award-winning designs and a commitment to excellence, we craft
            spaces that stand the test of time.
          </p>
        </div>

        {/* RIGHT AWARDS BLOCK */}
        <div className="grid gap-6">
          {/* AWARD CARD 1 */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl text-gray-800 w-full max-w-md">
            <div className="flex flex-col items-start space-y-2">
              <div>
                <h4 className="text-sm font-bold uppercase text-gray-600 tracking-widest">
                  HYPER BEST
                </h4>
                <p className="text-xs text-gray-500">AWARD WINNING</p>
              </div>
              <div className="text-xl">★★★★★</div>
              <h3 className="text-lg font-semibold">
                HYPER BEST G2 – 2025 WINNER
              </h3>
              <p className="text-sm text-gray-700">
                Awarded for redefining modern architecture with a perfect blend
                of form, function, and innovation.
              </p>
            </div>
          </div>

          {/* AWARD CARD 2 */}
          <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl text-gray-800 w-full max-w-md">
            <div className="flex flex-col items-start space-y-2">
              <div>
                <h4 className="text-sm font-bold uppercase text-gray-600 tracking-widest">
                  ULTRA PRESTIGIOUS
                </h4>
                <p className="text-xs text-gray-500">WINNER</p>
              </div>
              <div className="text-xl">★★★★★</div>
              <h3 className="text-lg font-semibold">
                GLOBAL DESIGN AWARD 2024
              </h3>
              <p className="text-sm text-gray-700">
                Honoring architecture that blends visionary aesthetics with
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section className="bg-gray-100 py-16 px-6 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Curated Collections
        </h2>
        <p className="text-gray-600 mt-2">
          Explore prime properties based on your recommendation
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>


    <FAQSection></FAQSection>


    </>
  );
};

export default Home;







