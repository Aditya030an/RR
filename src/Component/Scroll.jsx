
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import villa1 from "./photos/villa55.jpeg";
// import villa2 from "./photos/villa2.avif";
// import villa3 from "./photos/villa3.avif";
// import flat1 from "./photos/villa2.avif";
// import flat2 from "./photos/villa3.avif";
// import flat3 from "./photos/villa1.avif";
// import com1 from "./photos/villa3.avif";
// import com2 from "./photos/villa2.avif";
// import com3 from "./photos/villa1.avif";

// const Gallery = () => {
//   const [active, setActive] = useState("Villa's");

//   const filters = ["Villa's", "Commercial", "Flats", "Plot"];

//   const imageMap = {
//     "Villa's": [villa1, villa2, villa3],
//     "Flats": [flat1, flat2, flat3],
//     "Commercial": [com1, com2, com3],
//   };

//   const backgroundMap = {
//     "Villa's": "bg-black",
//     "Commercial": "bg-[#111122]",
//     "Flats": "bg-[#1a1111]",
//   };

//   const bgColor = backgroundMap[active];
//   const images = imageMap[active];

//   return (
//     <motion.section
//       key={active}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`relative min-h-screen px-6 md:px-20 py-20 overflow-hidden transition-colors duration-700 ${bgColor} text-white`}
//     >
//       {/* Glow Grid */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:40px_40px] opacity-10 z-0 pointer-events-none" />

//       {/* Background Noise Texture */}
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 z-0 pointer-events-none" />

//       {/* Search Input */}
//       <motion.div
//         initial={{ y: 60, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//         className="flex justify-center z-10 relative"
//       >
//         <div className="flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-4 w-full md:w-1/2 shadow-xl">
//           <input
//             type="text"
//             placeholder="Your preferable location"
//             className="flex-1 bg-transparent placeholder:text-gray-300 text-white focus:outline-none text-lg"
//           />
//           <FaSearch className="text-white/60" />
//         </div>
//       </motion.div>

//       {/* Filters */}
//       <div className="flex justify-center mt-14 gap-8 z-10 relative">
//         {filters.map((filter) => (
//           <motion.button
//             key={filter}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActive(filter)}
//             className={`relative px-6 py-2 rounded-lg border ${
//               active === filter
//                 ? "border-white text-white bg-white/10 shadow-md"
//                 : "border-white/30 text-gray-400 hover:text-white hover:border-white/70"
//             } transition duration-300 backdrop-blur-md`}
//           >
//             {filter}
//             {active === filter && (
//               <motion.div
//                 layoutId="underline"
//                 className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
//               />
//             )}
//           </motion.button>
//         ))}
//       </div>

//       {/* Image Grid */}
//       <div className="relative mt-20 z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.7 }}
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
//           >
//             {images.map((src, i) => (
//               <motion.div
//                 key={i}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-transform duration-700"
//                 whileHover={{ scale: 1.03, rotate: 0.3 }}
//               >
//                 <div className="relative w-full h-80">
//                   <motion.img
//                     src={src}
//                     alt={`property-${i}`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none rounded-3xl" />
//                 </div>
//                 <div className="absolute top-4 right-4 bg-white/10 text-white text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-md">
//                   {active}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// };

// export default Gallery;



import React, { useState } from "react";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import villa1 from "./photos/villa55.jpeg";
import villa2 from "./photos/villa2.avif";
import villa3 from "./photos/villa3.avif";
import flat1 from "./photos/villa2.avif";
import flat2 from "./photos/villa3.avif";
import flat3 from "./photos/villa1.avif";
import com1 from "./photos/villa3.avif";
import com2 from "./photos/villa2.avif";
import com3 from "./photos/villa1.avif";

// Central Image Preview Assets
import villaIcon from "./photos/villa55.jpeg"; // Add the icon shown in your screenshot

const Gallery = () => {
  const [active, setActive] = useState("Villa's");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filters = ["Villa's", "Commercial", "Flats"];
  const icons = {
    "Villa's": villaIcon,
    Commercial: com1,
    Flats: flat1,
  };

  const imageMap = {
    "Villa's": [villa1, villa2, villa3],
    Commercial: [com1, com2, com3],
    Flats: [flat1, flat2, flat3],
  };

  const backgroundMap = {
    "Villa's": "bg-black",
    Commercial: "bg-[#111122]",
    Flats: "bg-[#1a1111]",
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + filters.length) % filters.length);
    setActive(filters[(carouselIndex - 1 + filters.length) % filters.length]);
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % filters.length);
    setActive(filters[(carouselIndex + 1) % filters.length]);
  };

  const bgColor = backgroundMap[active];
  const images = imageMap[active];

  return (
    <motion.section
      key={active}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`relative min-h-screen px-6 md:px-20 py-20 overflow-hidden transition-colors duration-700 ${bgColor} text-white`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:40px_40px] opacity-10 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 z-0 pointer-events-none" />

      {/* Search Input */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center z-10 relative"
      >
        <div className="flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-4 w-full md:w-1/2 shadow-xl">
          <input
            type="text"
            placeholder="Your preferable location"
            className="flex-1 bg-transparent placeholder:text-gray-300 text-white focus:outline-none text-lg"
          />
          <FaSearch className="text-white/60" />
        </div>
      </motion.div>

      {/* Category Carousel Preview */}
      <div className="relative flex items-center justify-center mt-20 gap-10 z-10">
        <button
          onClick={handlePrev}
          className="text-white hover:scale-110 transition text-2xl"
        >
          <FaArrowLeft />
        </button>

        <div className="text-center">
          <img
            src={icons[active]}
            alt={active}
            className="w-52 h-52 object-contain mx-auto drop-shadow-xl"
          />
          <p className="text-xl mt-4 font-medium">{active}</p>
        </div>

        <button
          onClick={handleNext}
          className="text-white hover:scale-110 transition text-2xl"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-center mt-14 gap-8 z-10 relative">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActive(filter);
              setCarouselIndex(filters.indexOf(filter));
            }}
            className={`relative px-6 py-2 rounded-lg border ${
              active === filter
                ? "border-white text-white bg-white/10 shadow-md"
                : "border-white/30 text-gray-400 hover:text-white hover:border-white/70"
            } transition duration-300 backdrop-blur-md`}
          >
            {filter}
            {active === filter && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="relative mt-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-transform duration-700"
                whileHover={{ scale: 1.03, rotate: 0.3 }}
              >
                <div className="relative w-full h-80">
                  <motion.img
                    src={src}
                    alt={`property-${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none rounded-3xl" />
                </div>
                <div className="absolute top-4 right-4 bg-white/10 text-white text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                  {active}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
