import React from "react";

const ComplaintCard = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {items &&
        items.map((item) => (
          <div
            key={item._id}
            className="rounded-xl shadow-lg p-3 bg-white text-gray-600 max-w-xs h-64 flex-shrink-0"
          >
            <div className="p-5 pt-10 bg-blue-50 rounded-lg relative h-60 ">
              {/* Status */}
              <div className="absolute top-0 right-0 bg-blue-200 rounded-full px-3 py-2 text-sm font-semibold text-blue-800 mt-3 text center">
                <p>Urgency: {item.urgency}</p>
                <p>Severity: {item.severity}</p>
              </div>

              {/* Description */}
              <p className="text-sm mt-16 ">
                <strong className="font-semibold text-blue-800">
                  Address:
                </strong>{" "}
                {item.address}
                <br />
                <strong className="font-semibold text-blue-800">
                  Landmark:
                </strong>{" "}
                {item.landmark}
                <br />
                <strong className="font-semibold text-blue-800">
                  Damage Description:
                </strong>{" "}
                {item.damageDesc}
              </p>

              {/* Action Button */}
              <div className="mt-4 flex justify-end">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComplaintCard;
