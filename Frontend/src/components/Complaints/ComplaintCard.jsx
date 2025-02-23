import React, { useState } from "react";
import { colorPipeSeverity } from "../../constants/styleClass";
import ComplaintDetails from "./ComplaintDetails";

const ComplaintCard = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedComplaint, setSelectedComplaint] = useState(null); // State to store the selected complaint

  // Function to open the modal with the selected complaint
  const modalAction = (item) => {
    setSelectedComplaint(item); // Set the selected complaint
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null); // Clear selected complaint when modal is closed
  };

  return (
    <div className="flex flex-wrap gap-4 p-2 justify-center">
      {items &&
        items.map((item) => (
          <div
            key={item._id}
            className="w-64 bg-blue-900 text-white rounded-md  pl-2 pr-2 flex flex-col justify-between"
            // Set a minimum height for uniform cards
          >
            <div className="space-y-2 mt-2">
              <div
                className="uppercase p-2"
                style={colorPipeSeverity(item.severity)}
              >
                {item.severity}
              </div>
            </div>

            <div className="">
              <div className="">
                <h4 className="text-gray-400">Address</h4>
                <p>{item.address}</p>
                <p>{item.landmark || "NA"}</p>
              </div>

              <div>
                <h4 className="text-gray-400">Damage</h4>
                <p>{item.damageDesc || "NA"}</p>
                <button
                  onClick={() => modalAction(item)} // Pass the current item to the modalAction
                  className="bg-green-500 text-white mb-3 px-4 py-2 w-full hover:bg-green-600 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}

      {/* ComplaintDetails modal */}
      <ComplaintDetails
        isModalOpen={isModalOpen}
        item={selectedComplaint}
        closeModal={closeModal} // Function to close the modal
      />
    </div>
  );
};

export default ComplaintCard;
