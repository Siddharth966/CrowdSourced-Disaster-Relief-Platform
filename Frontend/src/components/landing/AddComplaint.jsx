import React from "react";
import { BannerImg1 } from "../../constants/Images";
import { Link } from "react-router-dom";

const AddComplaint = () => {
  return (
    <div className="fixed right-4 top-3/5 transform -translate-y-1/2 z-50">
      {/* Banner Image */}
      <div className="h-18 mb-4">
        <img
          src={BannerImg1}
          alt="Banner"
          className="h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Add Complaint Button */}
      <Link to="/login">
      
      <button className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
        Add Complaint
      </button>
   
      </Link>
    </div>
  );
};

export default AddComplaint;