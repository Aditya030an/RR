import React from "react";
import logo from "./photos/logo.jpeg"; // replace with your actual logo

const Navbar = () => {
  return (
    <header className="w-full bg-[#0e2338] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Roots & Roofs" className="w-20 h-auto object-contain" />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-white text-xl font-light tracking-wide">
        <a href="/" className="hover:text-orange-400 transition">Home</a>
        <a href="/Services" className="hover:text-orange-400 transition">Services</a>
        <a href="/RentalProperties" className="hover:text-orange-400 transition">Rental Properties</a>
          <a href="/About" className="hover:text-orange-400 transition">About Us</a>
          <a href="/Contact" className="hover:text-orange-400 transition">Contact us</a>
          <a href="#contact" className="hover:text-orange-400 transition">Career</a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;