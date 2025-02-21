import React, { useState, useEffect } from "react";

import MiddleImage from "../assets/middleImage.png";
import { images } from "../constants/Images";

const LandingDesign = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen ">
      {/* Image Slider */}
      <div
        className="w-full h-3/4 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      

<div className="py-16 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
      Inspiring Words of Wisdom
    </h2>

    <div className="flex flex-col md:flex-row gap-6 items-center">
      {/* First Quote */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-2xl border border-orange-300 transform hover:scale-105 transition duration-300">
        <p className="text-xl font-semibold italic text-gray-800">
          "The best way to find yourself is to lose yourself in the service of others."
        </p>
        <span className="block mt-4 text-lg font-medium text-gray-500">
          — Mahatma Gandhi
        </span>
      </div>

      {/* Second Quote */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-2xl border border-orange-300 transform hover:scale-105 transition duration-300">
        <p className="text-xl font-semibold italic text-gray-800">
          "Volunteers don't get paid, not because they're worthless, but because they're priceless."
        </p>
        <span className="block mt-4 text-lg font-medium text-gray-500">
          — Sherry Anderson
        </span>
      </div>
    </div>
  </div>
</div>


      {/* Static Image */}
      <img
        src={MiddleImage}
        alt="Static Display"
        className="w-full mt-4 shadow-md"
      />

      
      {/* How It Works Section */}
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
                Browse through various volunteering opportunities and choose
                the one that suits you best.
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
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-lg font-semibold">
            Together, We Can Make a Difference
          </p>
          <p className="mt-4 text-base">
            Volunteer to help communities rebuild after disasters. Your
            contribution, no matter how small, can bring hope and relief to
            those in need.
          </p>
         
          <div className="mt-4">
          <hr/>
          <br/>
            <p className="text-sm">
              © 2025 Disaster Relief Organization. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingDesign;
