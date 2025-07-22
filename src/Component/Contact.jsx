// import React from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import contactImage from "./photos/villa34.jpg";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const ContactUs = () => {
//   return (
//     <>
//       {/* Section 1: Form */}
//       <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans bg-slate-50 text-slate-900">
//         {/* Left Image */}
//         <div
//           className="h-[50vh] md:h-auto bg-cover bg-center rounded-tr-[40px] rounded-br-[40px] overflow-hidden shadow-xl"
//           style={{ backgroundImage: `url(${contactImage})` }}
//         />

//         {/* Right Form Section */}
//         <motion.div
//           className="px-6 md:px-16 py-20 flex flex-col justify-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <motion.h2
//             className="text-4xl md:text-5xl font-serif font-bold text-indigo-700 mb-10"
//             variants={fadeUp}
//             custom={1}
//           >
//             Contact Us
//           </motion.h2>

//           <motion.form
//             className="bg-white p-8 rounded-3xl shadow-xl space-y-8 border border-slate-200"
//             variants={fadeUp}
//             custom={2}
//           >
//             {/* Row 1 */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-semibold mb-1 text-slate-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold mb-1 text-slate-700">
//                   Phone
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-xs font-semibold mb-1 text-slate-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold mb-1 text-slate-700">
//                   Subject
//                 </label>
//                 <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                   <option>Select</option>
//                   <option>General Inquiry</option>
//                   <option>Partnership</option>
//                   <option>Support</option>
//                 </select>
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-xs font-semibold mb-1 text-slate-700">
//                 Message
//               </label>
//               <textarea
//                 rows="5"
//                 className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-700 text-white py-3 rounded-md font-semibold tracking-wide hover:bg-indigo-800 transition"
//               >
//                 Submit
//               </button>
//             </div>
//           </motion.form>
//         </motion.div>
//       </section>

//       {/* Section 2: Get in Touch Info */}
//       <section className="bg-white py-24 font-sans text-slate-800">
//   <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeUp}
//       custom={1}
//     >
//       <h2 className="text-4xl md:text-5xl font-serif font-bold text-indigo-700 mb-6">
//         Get in Touch With Us
//       </h2>
//       <p className="text-lg leading-relaxed mb-12 text-slate-600 max-w-2xl mx-auto">
//         Whether you're exploring availability or just have a question, we're here
//         to help. Our team is ready to respond quickly and helpfully to guide your
//         journey with us.
//       </p>

//       <div className="grid sm:grid-cols-3 gap-10 text-left justify-center max-w-3xl mx-auto">
//         <div>
//           <FaPhoneAlt className="text-indigo-500 text-xl mb-2" />
//           <p className="font-semibold">Phone</p>
//           <p className="text-slate-600 mt-1">(503) 990-7368</p>
//         </div>
//         <div>
//           <FaMapMarkerAlt className="text-indigo-500 text-xl mb-2" />
//           <p className="font-semibold">Location</p>
//           <p className="text-slate-600 mt-1">
//             4704 Center Street NE<br />Salem, Oregon 97301
//           </p>
//         </div>
//         <div>
//           <FaEnvelope className="text-indigo-500 text-xl mb-2" />
//           <p className="font-semibold">Email</p>
//           <p className="text-slate-600 mt-1 break-all">
//             Leasing@Crossingsatcenter.com
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </section>
//     </>
//   );
// };

// export default ContactUs;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
// import contactImage from "./photos/villa34.jpg";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const ContactUs = () => {
//   const [activeForm, setActiveForm] = useState("contact");

//   return (
//     <>
//       {/* Section 1: Form With Toggle */}
//       <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans bg-slate-50 text-slate-900">
//         {/* Left Image */}
//         <div
//           className="h-[50vh] md:h-auto bg-cover bg-center rounded-tr-[40px] rounded-br-[40px] overflow-hidden shadow-xl"
//           style={{ backgroundImage: `url(${contactImage})` }}
//         />

//         {/* Right Form Section with Toggle */}
//         <div className="px-6 md:px-12 py-12 flex flex-col justify-center">
//           {/* Toggle */}
//           <div className="flex justify-center mb-8">
//             <div className="flex bg-white border border-indigo-700 rounded-full p-1 relative w-72">
//               <motion.div
//                 className="absolute top-1 left-1 w-1/2 h-[calc(100%-0.5rem)] bg-indigo-700 rounded-full z-0"
//                 animate={{ x: activeForm === "listing" ? "100%" : "0%" }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               />
//               <button
//                 onClick={() => setActiveForm("contact")}
//                 className={`relative z-10 w-1/2 text-sm font-semibold py-2 rounded-full transition ${
//                   activeForm === "contact" ? "text-white" : "text-indigo-700"
//                 }`}
//               >
//                 Contact
//               </button>
//               <button
//                 onClick={() => setActiveForm("listing")}
//                 className={`relative z-10 w-1/2 text-sm font-semibold py-2 rounded-full transition ${
//                   activeForm === "listing" ? "text-white" : "text-indigo-700"
//                 }`}
//               >
//                 Listing
//               </button>
//             </div>
//           </div>

//           {/* Animated Form Switch */}
//           <motion.div
//             key={activeForm}
//             initial={{ opacity: 0, x: activeForm === "contact" ? -50 : 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200"
//           >
//             {activeForm === "contact" ? <ContactForm /> : <PropertyListingForm />}
//           </motion.div>
//         </div>
//       </section>

//       {/* Section 2: Get in Touch Info */}
//       <section className="bg-white py-24 font-sans text-slate-800">
//         <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             custom={1}
//           >
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-indigo-700 mb-6">
//               Get in Touch With Us
//             </h2>
//             <p className="text-lg leading-relaxed mb-12 text-slate-600 max-w-2xl mx-auto">
//               Whether you're exploring availability or just have a question, we're here
//               to help. Our team is ready to respond quickly and helpfully to guide your
//               journey with us.
//             </p>

//             <div className="grid sm:grid-cols-3 gap-10 text-left justify-center max-w-3xl mx-auto">
//               <div>
//                 <FaPhoneAlt className="text-indigo-500 text-xl mb-2" />
//                 <p className="font-semibold">Phone</p>
//                 <p className="text-slate-600 mt-1">(503) 990-7368</p>
//               </div>
//               <div>
//                 <FaMapMarkerAlt className="text-indigo-500 text-xl mb-2" />
//                 <p className="font-semibold">Location</p>
//                 <p className="text-slate-600 mt-1">
//                   4704 Center Street NE<br />Salem, Oregon 97301
//                 </p>
//               </div>
//               <div>
//                 <FaEnvelope className="text-indigo-500 text-xl mb-2" />
//                 <p className="font-semibold">Email</p>
//                 <p className="text-slate-600 mt-1 break-all">
//                   Leasing@Crossingsatcenter.com
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// const ContactForm = () => (
//   <form className="space-y-6">
//     <div className="grid md:grid-cols-2 gap-6">
//       <input placeholder="Name" className="form-input" />
//       <input placeholder="Phone" className="form-input" />
//     </div>
//     <div className="grid md:grid-cols-2 gap-6">
//       <input placeholder="Email" type="email" className="form-input" />
//       <select className="form-input">
//         <option>Subject</option>
//         <option>General Inquiry</option>
//         <option>Partnership</option>
//         <option>Support</option>
//       </select>
//     </div>
//     <textarea rows="5" placeholder="Message" className="form-input resize-none" />
//     <button
//       type="submit"
//       className="w-full bg-indigo-700 text-white py-3 rounded-md font-semibold hover:bg-indigo-800 transition"
//     >
//       Submit
//     </button>
//   </form>
// );

// const PropertyListingForm = () => (
//   <form className="space-y-4 text-sm">
//     <input placeholder="Full Name" className="form-input" />
//     <input placeholder="Phone Number" className="form-input" />
//     <input placeholder="Email Address" className="form-input" />
//     <select className="form-input">
//       <option>Are you the:</option>
//       <option>Property Owner</option>
//       <option>Broker/Agent</option>
//       <option>Developer/Builder</option>
//     </select>
//     <input placeholder="Property Title (e.g., 4 BHK Villa in Sector 42, Gurgaon)" className="form-input" />
//     <select className="form-input">
//       <option>Property Type</option>
//       <option>Apartment/Flat</option>
//       <option>Villa</option>
//       <option>Bungalow</option>
//       <option>Commercial Space</option>
//       <option>Plot/Land</option>
//     </select>
//     <select className="form-input">
//       <option>Property Category</option>
//       <option>For Sale</option>
//       <option>For Rent</option>
//     </select>
//     <input placeholder="BHK/Configuration" className="form-input" />
//     <input placeholder="Total Area (sq. ft.)" className="form-input" />
//     <input placeholder="Carpet Area (if applicable)" className="form-input" />
//     <input placeholder="Number of Bathrooms" className="form-input" />
//     <input placeholder="Balconies" className="form-input" />
//     <select className="form-input">
//       <option>Furnishing Status</option>
//       <option>Fully Furnished</option>
//       <option>Semi Furnished</option>
//       <option>Unfurnished</option>
//     </select>
//     <input placeholder="Floor Number / Total Floors" className="form-input" />
//     <select className="form-input">
//       <option>Age of Property</option>
//       <option>New / Under Construction</option>
//       <option>0–1 Year</option>
//       <option>1–5 Years</option>
//       <option>5–10 Years</option>
//       <option>10+ Years</option>
//     </select>
//     <input placeholder="Full Address" className="form-input" />
//     <input placeholder="City" className="form-input" />
//     <input placeholder="State" className="form-input" />
//     <input placeholder="Pin Code" className="form-input" />
//     <input placeholder="Google Map Link (optional)" className="form-input" />
//     <input placeholder="Expected Price (₹)" className="form-input" />
//     <label className="block">
//       <input type="checkbox" className="mr-2" />
//       Price Negotiable?
//     </label>
//     <label className="block">
//       <input type="checkbox" className="mr-2" />
//       Include maintenance charges?
//     </label>
//     <button
//       type="submit"
//       className="w-full bg-indigo-700 text-white py-3 rounded-md font-semibold hover:bg-indigo-800 transition"
//     >
//       Submit Listing
//     </button>
//   </form>
// );

// // Tailwind utility class (optional)
// const style = `
//   .form-input {
//     @apply w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500;
//   }
// `;

// export default ContactUs;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import contactImage from "./photos/villa34.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ContactUs = () => {
  const [activeForm, setActiveForm] = useState("contact");

  return (
    <motion.div
      className="w-full min-h-screen bg-[#F8F8F8] font-sans overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="grid md:grid-cols-2 min-h-screen relative z-10">
        {/* Image Side */}
        <div
          className="bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url(${contactImage})`,
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
          }}
        ></div>

        {/* Form Side */}
        <div className="flex items-center justify-center px-6 md:px-16 py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/70 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl p-10 md:p-14 w-full max-w-2xl"
          >
            {/* Toggle */}
            <div className="mb-10 flex justify-center">
              <div className="flex bg-white border border-gray-300 rounded-full p-1 w-72 relative shadow-inner">
                <motion.div
                  className="absolute top-1 left-1 w-1/2 h-[calc(100%-0.5rem)] bg-indigo-700 rounded-full z-0"
                  animate={{ x: activeForm === "listing" ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button
                  onClick={() => setActiveForm("contact")}
                  className={`relative z-10 w-1/2 text-sm font-semibold py-2 transition rounded-full ${
                    activeForm === "contact" ? "text-white" : "text-indigo-700"
                  }`}
                >
                  Contact
                </button>
                <button
                  onClick={() => setActiveForm("listing")}
                  className={`relative z-10 w-1/2 text-sm font-semibold py-2 transition rounded-full ${
                    activeForm === "listing" ? "text-white" : "text-indigo-700"
                  }`}
                >
                  Listing
                </button>
              </div>
            </div>

            {/* Form Content */}
            <motion.div
              key={activeForm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {activeForm === "contact" ? <ContactForm /> : <ListingForm />}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <motion.section
        className="bg-white py-24 px-6 md:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={2}
      >
        <h2 className="text-5xl font-serif font-semibold text-indigo-700 mb-6">
          Get in Touch With Us
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Whether you’re exploring availability or have questions, we’re ready
          to help.
        </p>

        <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-left">
          <InfoCard icon={<FaPhoneAlt />} title="Phone" text="(503) 990-7368" />
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            text="4704 Center Street NE\nSalem, Oregon 97301"
          />
          <InfoCard
            icon={<FaEnvelope />}
            title="Email"
            text="Leasing@Crossingsatcenter.com"
          />
        </div>
      </motion.section>
    </motion.div>
  );
};

// Floating Input
const FloatingInput = ({ label, type = "text", name, value, onChange }) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="block py-3 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-700 peer"
      placeholder=" "
      required
    />
    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-2 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6">
      {label}
    </label>
  </div>
);

// Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
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
      formType: "ContactForm",
      name: formData.name,
      surname: "",
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
      subject: formData.subject,
      contactUsType: "Contact",
    };

    console.log("Data to send:", dataToSend);

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      alert("Message sent successfully!");
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <FloatingInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FloatingInput
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <FloatingInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FloatingInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-sm font-medium transition"
      >
        Send Message
      </button>
    </form>
  );
};

// Listing Form - Fully Designed
const ListingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    propertyTitle: "",
    city: "",
    state: "",
    pin: "",
    area: "",
    price: "",
    description: "",
    negotiable: false,
    maintenance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      formType: "ListingForm",
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      subject: formData.propertyTitle,
      message: formData.description,
      contactUsType: "Listing",
      surname: "",
    };

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEET_ID, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      alert("Listing submitted!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        propertyTitle: "",
        city: "",
        state: "",
        pin: "",
        area: "",
        price: "",
        description: "",
        negotiable: false,
        maintenance: false,
      });
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <FloatingInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FloatingInput
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <FloatingInput
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FloatingInput
        label="Property Title"
        name="propertyTitle"
        value={formData.propertyTitle}
        onChange={handleChange}
      />
      <FloatingInput
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <div className="grid md:grid-cols-2 gap-6">
        <FloatingInput
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        <FloatingInput
          label="Pin Code"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
        />
      </div>
      <FloatingInput
        label="Total Area (sq. ft.)"
        name="area"
        value={formData.area}
        onChange={handleChange}
      />
      <FloatingInput
        label="Expected Price (₹)"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <textarea
        rows="4"
        name="description"
        placeholder="Additional Notes or Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
      ></textarea>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="negotiable"
            checked={formData.negotiable}
            onChange={handleChange}
            className="accent-indigo-600 h-4 w-4"
          />
          <span className="text-slate-700">Price Negotiable?</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="maintenance"
            checked={formData.maintenance}
            onChange={handleChange}
            className="accent-indigo-600 h-4 w-4"
          />
          <span className="text-slate-700">Include Maintenance?</span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-sm font-semibold transition"
      >
        Submit Listing
      </button>
    </form>
  );
};

// Info Card Component
const InfoCard = ({ icon, title, text }) => (
  <div className="space-y-2">
    <div className="text-indigo-600 text-2xl">{icon}</div>
    <div className="font-semibold text-gray-800">{title}</div>
    <div className="text-gray-600 whitespace-pre-line text-sm">{text}</div>
  </div>
);

export default ContactUs;
