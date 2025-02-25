import { FaHandsHelping, FaGlobeAsia, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
      >
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-700 mt-4 max-w-2xl">
          Our Crowdsourced Disaster Relief Platform is dedicated to helping communities
          in times of crisis by connecting victims, volunteers, and donors in real-time.
          By leveraging technology and community-driven efforts, we aim to provide fast,
          transparent, and effective disaster response.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaHandsHelping className="text-blue-500 text-5xl" />
          <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To bridge the gap between disaster victims and relief efforts, ensuring timely
            assistance reaches those in need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaGlobeAsia className="text-blue-500 text-5xl" />
          <h2 className="text-xl font-semibold mt-4">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            A world where disaster response is fast, organized, and accessible to everyone
            through technology and community support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
        >
          <FaUsers className="text-blue-500 text-5xl" />
          <h2 className="text-xl font-semibold mt-4">Community Driven</h2>
          <p className="text-gray-600 mt-2">
            By crowdsourcing help, resources, and expertise, we empower communities to take
            charge in times of disaster.
          </p>
          
        </motion.div>
        
        
      </div>
      
    </div>
  );
}
