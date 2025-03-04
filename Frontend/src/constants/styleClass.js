export const commonClasses =
  "w-full p-1 pl-3 border border-gray-300 rounded-sm";

export const btnClass =
  "w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300";

  export const inputField = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"

export const colorPipeSeverity = (level) => {
  switch (level) {
    case "Moderate":
      return { backgroundColor: "#9E9E9E ", color: "white" };
    case "Minor":
      return { backgroundColor: "#BDBDBD  ", color: "white" };
    case "Critical":
      return { backgroundColor: "#757575 ", color: "white" };
    default:
      return {};
  }
};
export const colorPipeUrgency = (urgency) => {
  switch (urgency) {
    case "Low":
      return { backgroundColor: "green", color: "white" }; // Green for low urgency
    case "Medium":
      return { backgroundColor: "yellow", color: "black" }; // Yellow for medium urgency
    case "High":
      return { backgroundColor: "red", color: "white" }; // Red for high urgency
    default:
      return {}; // Default case
  }
};
