import React from "react";
import { Link } from "react-router-dom"; // For routing

const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="w-1/2">
          <Link className="text-white text-2xl font-bold transform rotate-[-10]">
            ReliefConnect
          </Link>
        </div>

        {/* Navigation Links */}

        <ul className="flex space-x-6 w-3/5">
          <li>
            <Link className="text-white hover:text-blue-200">Home</Link>
          </li>
          
          <li>
            <Link className="text-white hover:text-blue-200">Volunteer</Link>
          </li>
          <li>
            <Link to="/donation" className="text-white hover:text-blue-200">Donate</Link>
          </li>
          <li>
            <Link to ="/about" className="text-white hover:text-blue-200">About Us</Link>
          </li>
          <li>
            <Link to ="/contact" className="text-white hover:text-blue-200">Contact</Link>
          </li>
        </ul>

        {/* Register Button */}
        <div className="flex space-x-5 w-1/3 justify-end">
          <Link
            to="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Login
          </Link>
         
          <Link
            to="/admin-login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Admin
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
