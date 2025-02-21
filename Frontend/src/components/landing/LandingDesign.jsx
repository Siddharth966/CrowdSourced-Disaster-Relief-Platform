import React, { useState, useEffect } from "react";
import MiddleImage from "../../assets/middleImage.png";
import { images } from "../../constants/Images";
import Footer from "./Footer";

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

      {/* Quotes Section */}
      <div className="flex justify-center gap-6 mt-6">
        {/* First Quote */}
        <div className="w-1/2 sm:w-1/2 p-6 text-center bg-white shadow-lg ">
          <p className="text-2xl font-semibold italic text-gray-700  bg-orange-300">
            "The best way to find yourself is to lose yourself in the service of
            others."
            <span className="block mt-2 text-lg font-medium text-gray-500">
              — Mahatma Gandhi
            </span>
          </p>
        </div>

        {/* Second Quote */}
        <div className="w-1/2 sm:w-1/2 p-6 text-center bg-white shadow-lg">
          <p className="text-2xl font-semibold italic text-gray-700 bg-orange-300">
            "Volunteers don't get paid, not because they're worthless, but
            because they're priceless."
            <span className="block mt-2 text-lg font-medium text-gray-500">
              — Sherry Anderson
            </span>
          </p>
        </div>
      </div>

      {/* Static Image */}
      <img
        src={MiddleImage}
        alt="Static Display"
        className="w-full mt-4 shadow-md"
      />

      <Footer />
    </div>
  );
};

export default LandingDesign;
