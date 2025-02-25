import { motion } from "framer-motion";

const MotionCard = ({ icon, title, description, delay = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
    >
      <div className="text-blue-500 text-5xl">{icon ?? ""}</div>
      <h2 className="text-xl font-semibold mt-4">{title ?? ""}</h2>
      <p className="text-gray-600 mt-2">{description ?? ""}</p>
    </motion.div>
  );
};

export default MotionCard;
