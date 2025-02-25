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
      <div
        className="w-full h-15/16 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      <div className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
            Inspiring Words of Wisdom
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-2xl border border-orange-300 transform hover:scale-105 transition duration-300">
              <p className="text-xl font-semibold italic text-gray-800">
                "The best way to find yourself is to lose yourself in the
                service of others."
              </p>
              <span className="block mt-4 text-lg font-medium text-gray-500">
                — Mahatma Gandhi
              </span>
            </div>

            <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-2xl border border-orange-300 transform hover:scale-105 transition duration-300">
              <p className="text-xl font-semibold italic text-gray-800">
                "Volunteers don't get paid, not because they're worthless, but
                because they're priceless."
              </p>
              <span className="block mt-4 text-lg font-medium text-gray-500">
                — Sherry Anderson
              </span>
            </div>
          </div>
        </div>
      </div>

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
