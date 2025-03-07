import React from "react";
import AddComplaint from "./AddComplaint";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="bg-gray-100 py-8 mt-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            How Our Website Works
          </h2>
          <p className="text-lg text-gray-600">
            Our website is designed to connect volunteers with communities in
            need. Here's how it works:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Sign Up
              </h3>
              <p className="text-gray-600">
                Create an account to join our network of volunteers. It's quick
                and easy!
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Find Opportunities
              </h3>
              <p className="text-gray-600">
                Browse through various volunteering opportunities and choose the
                one that suits you best.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Make an Impact
              </h3>
              <p className="text-gray-600">
                Get involved, contribute your time and skills, and make a real
                difference in people's lives.
              </p>
            </div>
            
      <AddComplaint/>

          </div>
        </div>
      </div>
       {/* Copyright Section */}
       <div className="text-center border-t border-gray-700 py-4 mt-8">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Volunteer Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
