import React from "react";

const ComplaintDetails = ({ isModalOpen, selectedComplaint, closeModal }) => {
  // If modal is not open, return null to prevent rendering
  if (!isModalOpen || !selectedComplaint) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-semibold">Complaint Details</h2>
        <div className="mt-4">
          <div className="mt-4">
            <h4 className="text-gray-500">Photos</h4>
            {selectedComplaint.photos && selectedComplaint.photos.length > 0 ? (
              <img
                src={selectedComplaint.photos[0]} // Assuming you want to show the first image
                alt="Complaint photo"
                className="w-full h-32 object-cover rounded-md"
              />
            ) : (
              <p>No photos available</p>
            )}
          </div>
          <p>
            <strong>Severity:</strong> {selectedComplaint.severity}
          </p>
          <p>
            <strong>Urgency:</strong> {selectedComplaint.urgency}
          </p>
          <p>
            <strong>Address:</strong> {selectedComplaint.address}
          </p>
          <p>
            <strong>Landmark:</strong> {selectedComplaint.landmark}
          </p>
          <p>
            <strong>Damage Description:</strong>{" "}
            {selectedComplaint.damageDesc || "NA"}
          </p>

          <div className="mt-4 flex justify-end">
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
