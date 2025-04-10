import React from "react";
import { BannerImg } from "../../constants/Images";
import Footer from "./Footer";

const LandingDesign = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Disaster Relief Platform
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
            Empowering communities to respond effectively to disasters through collaboration and support
          </p>
        
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How We Make a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-orange-100 text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-600">
                Rapid reporting and assessment of disaster situations to ensure timely assistance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-orange-100 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with volunteers and organizations ready to help in times of need.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-orange-100 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Easy Reporting</h3>
              <p className="text-gray-600">
                Simple and efficient way to report issues and track their resolution status.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Inspiring Words of Wisdom
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 p-6 bg-white shadow-xl rounded-2xl border border-orange-300 transform hover:scale-105 transition duration-300">
              <p className="text-xl font-semibold italic text-gray-800">
                "The best way to find yourself is to lose yourself in the service of others."
              </p>
              <span className="block mt-4 text-lg font-medium text-gray-500">
                — Mahatma Gandhi
              </span>
            </div>
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

      {/* Call to Action */}
      <div className="py-16 bg-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center text-black">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join our community of volunteers and help those in need during difficult times.
          </p>
          <button className="bg-white text-orange-100 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingDesign;
