import React, { useState } from "react";
import { donationFields } from "../../constants/forms";
import axios from "axios";
import { baseUrl } from "../../constants/env";
import { toast } from "react-toastify";

const DonationForm = () => {
  const [formData, setFormData] = useState(
    donationFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
          e.preventDefault();
      try {
        const response = await axios.post(
          `${baseUrl}/donation`, formData, {
          headers: { "Content-Type": "application/json" 

          },
        }
      );
       if (response.status === 201) {
              toast.success("Donation send successfully!");
              setFormData({}); 
            }
      }
     catch (error) {
           toast.error(
             error.response?.data?.message || "Error submitting donation form."
           );
           console.error("Error submitting donation form. ", error);
         }
       };
      
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Make a Difference Today!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Your small act of kindness can bring a huge impact. Join us in helping those in need.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {donationFields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 font-medium mb-1">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a category</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
