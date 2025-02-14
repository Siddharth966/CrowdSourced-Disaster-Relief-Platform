import React from 'react';
import { Link } from 'react-router-dom'; // For routing

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className='w-1/2'>
        <Link className="text-white text-2xl font-bold">
          ReliefConnect
        </Link>
        </div>

        {/* Navigation Links */}

        <ul className="flex space-x-6 w-3/5">
          <li>
            <Link className="text-white hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link  className="text-white hover:text-blue-200">
              Request Help
            </Link>
          </li>
          <li>
            <Link  className="text-white hover:text-blue-200">
              Volunteer
            </Link>
          </li>
          <li>
            <Link  className="text-white hover:text-blue-200">
              Donate
            </Link>
          </li>
        </ul>

        {/* Register Button */}
        <div class="flex space-x-5 w-1/3">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;