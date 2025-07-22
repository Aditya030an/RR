


// import React from "react";
// import { FaFilter, FaSearch, FaListUl } from "react-icons/fa";
// import { motion } from "framer-motion";

// const RentalProperties = () => {
//   return (
//     <div className="bg-white text-slate-900">
//       {/* ---------------- Header Section ---------------- */}
//       <section className="min-h-screen px-6 md:px-20 py-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-serif text-center font-semibold mb-16"
//         >
//           Rental Properties
//         </motion.h2>

//         {/* ---------------- Filter UI ---------------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-4 justify-center items-center mb-16"
//         >
//           {/* Location */}
//           <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
//             <FaListUl />
//             <input
//               type="text"
//               placeholder="Location"
//               className="bg-transparent outline-none placeholder:text-gray-500 w-28"
//             />
//             <FaSearch />
//           </div>

//           {/* Unit Dropdown */}
//           <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
//             <FaListUl />
//             <select className="bg-transparent outline-none text-gray-700">
//               <option>Unit</option>
//               <option>1 BHK</option>
//               <option>2 BHK</option>
//               <option>3 BHK</option>
//             </select>
//           </div>

//           {/* Budget Dropdown */}
//           <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
//             <FaListUl />
//             <select className="bg-transparent outline-none text-gray-700">
//               <option>Budget</option>
//               <option>₹5,000 - ₹10,000</option>
//               <option>₹10,000 - ₹20,000</option>
//               <option>₹20,000+</option>
//             </select>
//           </div>

//           {/* Filter Button */}
//           <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition text-sm shadow">
//             <FaFilter /> Filter
//           </button>
//         </motion.div>

//         {/* ---------------- Property Grid ---------------- */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >
//           {Array.from({ length: 6 }).map((_, i) => (
//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//               key={i}
//               className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
//             >
//               <div className="h-40 bg-slate-200 w-full"></div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-1">2 BHK Apartment</h3>
//                 <p className="text-sm text-slate-600">Mumbai, India</p>
//                 <p className="text-slate-800 font-bold mt-2">₹15,000/month</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------------- Contact Form Section ---------------- */}
//       <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-6xl font-serif font-semibold mb-10 text-center"
//         >
//           Contact Form
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="bg-white border rounded-xl shadow-lg max-w-3xl mx-auto p-8 space-y-6"
//         >
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
//             />
//           </div>

//           {/* Surname */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
//             <input
//               type="text"
//               placeholder="Enter your surname"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//             <textarea
//               placeholder="Write your message..."
//               rows={4}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-600"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700 transition text-sm"
//           >
//             Submit
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default RentalProperties;






import React, { useState } from "react";
import { FaFilter, FaSearch, FaListUl } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RentalProperties = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    formType: "RentalPropertiesContact", // Identify form source
    name: formData.name || "",
    surname: formData.surname || "",
    email: formData.email || "",
    message: formData.message || "",
    phone: "", // Optional keys for schema match
    subject: "",
    contactUsType: "",
  };

  console.log("dataToSend" , dataToSend);

  try {
    const res = await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const responseText = await res.text();
    console.log("Response from server:", responseText);

 
      setSubmitted(true); // still mark as submitted since sheet got data
      alert("Form submitted successfully!");

    setFormData({ name: "", surname: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error("Submission failed", error);
  }
};


  return (
    <div className="bg-white text-slate-900 relative overflow-hidden">
      {/* ---------------- Header Section ---------------- */}
      <section className="min-h-screen px-6 md:px-20 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center font-semibold mb-16"
        >
          Rental Properties
        </motion.h2>

        {/* ---------------- Filter UI ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center items-center mb-16"
        >
          <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
            <FaListUl />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent outline-none placeholder:text-gray-500 w-28"
            />
            <FaSearch />
          </div>

          <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
            <FaListUl />
            <select className="bg-transparent outline-none text-gray-700">
              <option>Unit</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-violet-100 rounded-full px-4 py-2 text-sm shadow">
            <FaListUl />
            <select className="bg-transparent outline-none text-gray-700">
              <option>Budget</option>
              <option>₹5,000 - ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000+</option>
            </select>
          </div>

          <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition text-sm shadow">
            <FaFilter /> Filter
          </button>
        </motion.div>

        {/* ---------------- Property Grid ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              key={i}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-slate-200 w-full"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">2 BHK Apartment</h3>
                <p className="text-sm text-slate-600">Mumbai, India</p>
                <p className="text-slate-800 font-bold mt-2">₹15,000/month</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- Contact Form Section ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-serif font-semibold mb-10 text-center"
        >
          Contact Form
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white border rounded-3xl shadow-xl max-w-3xl mx-auto p-10 md:p-14 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-800"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
              <input
                type="text"
                name="surname"
                placeholder="Your surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-800"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-800"
              required
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-md text-lg font-medium hover:bg-slate-800 transition-all duration-200"
          >
            Submit
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm md:text-base"
            >
              🎉 Form submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default RentalProperties;
