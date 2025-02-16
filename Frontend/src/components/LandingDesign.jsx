import React, { useState, useEffect } from 'react';
import BackgroundImage1 from "../assets/image1.png";
import BackgroundImage2 from "../assets/image2.png";
import BackgroundImage3 from "../assets/image3.png";
import BackgroundImage4 from "../assets/image4.png";
import BackgroundImage5 from "../assets/image5.png";
import MiddleImage from "../assets/middleImage.png";

const LandingDesign = () => {
  const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3, BackgroundImage4, BackgroundImage5]; 
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
            "The best way to find yourself is to lose yourself in the service of others."
            <span className="block mt-2 text-lg font-medium text-gray-500">— Mahatma Gandhi</span>
          </p>

       
        </div>

        {/* Second Quote */}
        <div className="w-1/2 sm:w-1/2 p-6 text-center bg-white shadow-lg">
          <p className="text-2xl font-semibold italic text-gray-700 bg-orange-300">
          "Volunteers don't get paid, not because they're worthless, but because they're priceless." 
          <span className="block mt-2 text-lg font-medium text-gray-500">— Sherry Anderson</span>
          </p>
         
        </div>
      </div>

      {/* Static Image */}
      <img 
        src={MiddleImage} 
        alt="Static Display" 
        className="w-full mt-4 shadow-md"
      />

       {/* Footer Section */}
       <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-lg font-semibold">
            Together, We Can Make a Difference
          </p>
          <p className="mt-4 text-base">
            Volunteer to help communities rebuild after disasters. Your contribution, no matter how small, can bring hope and relief to those in need.
          </p>
          <div className="mt-6">
            <a href="#volunteer" className="text-blue-400 hover:text-blue-500 text-lg font-medium">
              Join Us as a Volunteer
            </a>
          </div>
          <div className="mt-4">
          <p className="text-base">call us at <span className="text-blue-400">(123) 456-7890</span></p>
            <p className="text-sm">© 2025 Disaster Relief Organization. All rights reserved.</p>
            
          </div>

        </div>
      </footer>

    </div>
    
  );
};

export default LandingDesign;
