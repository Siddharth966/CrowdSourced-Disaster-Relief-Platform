import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <p className="text-lg font-semibold">
          Together, We Can Make a Difference
        </p>
        <p className="mt-4 text-base">
          Volunteer to help communities rebuild after disasters. Your
          contribution, no matter how small, can bring hope and relief to those
          in need.
        </p>
        <div className="mt-6">
          <a
            href="#volunteer"
            className="text-blue-400 hover:text-blue-500 text-lg font-medium"
          >
            Join Us as a Volunteer
          </a>
        </div>
        <div className="mt-4">
          <p className="text-base">
            call us at <span className="text-blue-400">(123) 456-7890</span>
          </p>
          <p className="text-sm">
            © 2025 Disaster Relief Organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
