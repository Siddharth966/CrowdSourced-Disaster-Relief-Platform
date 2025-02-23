import { Complaint } from "../models/Complaint.js";
import { commanService } from "../services/commanService.js";

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Correct: Get status from the request body

    // Fetch the complaint to check its current status
    const complaint = await commanService.getItemById(Complaint, id);

    // Check if the complaint exists
    if (!complaint.data) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    // Optional: Restrict updates to only "Pending" complaints
    if (complaint.data.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "Complaint is in Progress or Done and cannot be updated",
      });
    }

    // Update the complaint status
    const updatedResult = await commanService.update(Complaint, id, { status });

    // Send a success response
    res.status(200).json({
      success: true,
      message: updatedResult.message,
      data: updatedResult.data,
    });
  } catch (error) {
    console.error("Error updating complaint status:", error);

    // Send an error response
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
