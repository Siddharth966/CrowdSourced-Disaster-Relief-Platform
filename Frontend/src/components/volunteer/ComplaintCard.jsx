import React, { useState } from "react";
import {
  btnClass,
  colorPipeSeverity,
  colorPipeUrgency,
} from "../../constants/styleClass";
import ComplaintDetails from "./ComplaintDetails";

const ComplaintCard = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const modalAction = (item) => {
    setSelectedComplaint(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {items &&
        items.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg overflow-hidden cursor-pointer p-4 flex flex-col justify-between border border-gray-200"
          >
            <div className="space-y-2">
              <div className="uppercase font-semibold" style={colorPipeSeverity(item.severity)}>
                {item.severity}
              </div>
              <div className="uppercase font-semibold" style={colorPipeUrgency(item.urgency)}>
                {item.urgency}
              </div>
            </div>

            <div className="mt-2">
              <h4 className="text-gray-500 font-medium">Address</h4>
              <p className="font-semibold text-gray-700">{item.address}</p>
              <p className="text-sm text-gray-600">{item.landmark || "NA"}</p>
            </div>

            <div className="mt-2">
              <h4 className="text-gray-500 font-medium">Damage</h4>
              <p className="text-gray-700">{item.damageDesc || "NA"}</p>
              <button
                onClick={() => modalAction(item)}
                className="bg-green-500 text-white font-semibold mt-3 px-4 py-2 rounded-md w-full transition-all hover:bg-green-600 active:scale-95"
              >
                View Details
              </button>
            </div>
          </div>
        ))}

      {/* ComplaintDetails modal */}
      <ComplaintDetails
        isModalOpen={isModalOpen}
        selectedComplaint={selectedComplaint}
        closeModal={closeModal}
      />
    </div>
  );
};

export default ComplaintCard;
