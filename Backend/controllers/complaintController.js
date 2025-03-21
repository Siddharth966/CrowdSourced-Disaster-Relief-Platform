import { Complaint } from "../models/Complaint.js";
import { commanService } from "../services/commanService.js";

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; 
    

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
   if(status==='In Progress'){
    if (complaint.data.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "Complaint is in Progress or Done and cannot be updated",
      });
    }
   }else{
    if (complaint.data.status !== "In Progress") {
      return res.status(400).json({
        success: false,
        message: "Complaint is pending or Done and cannot be updated",
      });
    }
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


export const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the complaint exists
    const complaint = await Complaint.findById(id);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // Delete the complaint
    const result = await commanService.deleteById(Complaint, id);
    console.log("Delete Result:", result);

    return res.status(200).json({
      message: result.message,
      data: result.data, // Fixed incorrect reference (message.data → result.data)
    });

  } catch (err) {
    console.error("Error deleting complaint:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get count of complaints based on statuses
export const getComplaintCounts = async (req, res) => {
  try {
      const pendingCount = await Complaint.countDocuments({ status: 'Pending' });
      const inProgressCount = await Complaint.countDocuments({ status: 'In Progress' });
      const doneCount = await Complaint.countDocuments({ status: 'D one' });
      const totalCount = await Complaint.countDocuments(); // Count all complaints

      res.json({
          pending: pendingCount,
          in_progress: inProgressCount,
          done: doneCount,
          total: totalCount
      });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};
