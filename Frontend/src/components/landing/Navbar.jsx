import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="/about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="/services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-gray-700 focus:outline-none">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <a href="/" className="block text-gray-600 hover:text-indigo-600">Home</a>
          <a href="/about" className="block text-gray-600 hover:text-indigo-600">About</a>
          <a href="/services" className="block text-gray-600 hover:text-indigo-600">Services</a>
          <a href="/contact" className="block text-gray-600 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
