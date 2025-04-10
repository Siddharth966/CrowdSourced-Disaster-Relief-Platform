import React from "react";
import AddComplaint from "./AddComplaint";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-orange-200 mb-2">Disaster Relief Platform</h3>
            <p className="text-gray-400 text-sm">
              Connecting volunteers with communities in need
            </p>
          </div>

        
        </div>

       
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 space-y-4">
        <AddComplaint />
        {/* <WhatsAppSupport /> */}
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-3">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Disaster Relief Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
