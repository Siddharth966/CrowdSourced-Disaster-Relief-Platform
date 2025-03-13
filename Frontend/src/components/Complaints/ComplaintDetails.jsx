import React from "react";
import { getPhotoUrl } from "../../service/imageService.js";
import axios from "axios";
import { baseUrl } from "./../../constants/env";
import { toast, ToastContainer } from "react-toastify";

const ComplaintDetails = ({ isModalOpen, item, closeModal }) => {
  if (!isModalOpen || !item) return null;

  const handleSubmit = async () => {
    try {
      const id = item._id; // Assuming the complaint ID is stored in item._id
      const response = await axios.put(`${baseUrl}/complaint/status/${id}`, {
        status: "In Progress", // Example status update
      });

      if (response.status === 200) {
        toast.success("Complaint Accepted Successfully"); // Show success message
        closeModal(); // Close the modal after successful submission
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const onPhotoClick = (photoUrl) => {
    window.open(photoUrl, "_blank");
  };
  

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-semibold">Complaint Details</h2>
        <div className="mt-4">
          <div className="mt-4">
            <h4 className="text-gray-500">Photos</h4>
            <div className="space-y-2">
              {item.photos.map((photo, index) => (
                <img
                  key={index}
                  src={getPhotoUrl(photo)} // Use the service to get the photo URL
                  alt={`Complaint photo ${index + 1}`}
                  onClick={()=>onPhotoClick(getPhotoUrl(photo))}
                  className="w-full h-32 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
          <p>
            <strong>Severity:</strong> {item.severity}
          </p>

          <p>
            <strong>Address:</strong> {item.address}
          </p>
          <p>
            <strong>Landmark:</strong> {item.landmark}
          </p>
          <p>
            <strong>Damage Description:</strong> {item.damageDesc || "NA"}
          </p>

          <div className="mt-4 flex justify-endA">
           
            <button
              onClick={closeModal} // Close the modal when clicked
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
