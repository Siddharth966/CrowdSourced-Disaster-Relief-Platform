import React from "react";
import { BannerImg } from "../../constants/Images";
import { Link } from "react-router-dom";

const AddComplaint = () => {
  return (
    <div className="h-60 bg-gray-100 flex justify-center items-center flex-col gap-4 p-4">
      {/* Banner Image */}
      <div className="h-36">
        <img src={BannerImg} alt="Banner" className="h-full object-cover rounded-lg shadow-md" />
      </div>

      {/* Add Complaint Button */}
      <Link to="/login">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300">
          ADD COMPLAINTS
        </button>
      </Link>
    </div>
  );
};

export default AddComplaint;
