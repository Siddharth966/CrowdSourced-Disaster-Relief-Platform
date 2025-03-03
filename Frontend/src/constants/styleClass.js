export const commonClasses =
  "w-full p-1 pl-3 border border-gray-300 rounded-sm";

export const btnClass =
  "bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2";

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
