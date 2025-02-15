import { Complaint } from "../models/Complaint.js";
import { regularUserService } from "../services/regularUserService.js";

export const createComplaint = async (req, res) => {
  try {
    const { address, landmark, severity, urgency, damageDesc } = req.body;

    // Extract file paths from uploaded files
    const photos = req.files?.map((file) => file.path) || [];

    // Create payload
    const payload = {
      address,
      landmark,
      severity,
      urgency,
      damageDesc,
      photos,
    };

    // Save complaint to the database
    const result = await regularUserService.create(Complaint, payload);

    // Send success response
    res.status(201).json({ message: result.message, data: result.data });
  } catch (error) {
    console.error("Error in createComplaint:", error);

    // Send appropriate error response
    const status = error.name === "ValidationError" ? 400 : 500;
    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const result = await regularUserService.getAll(Complaint, req.body);
    res.status(201).json({
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "An error occurred while processing the request.",
    });
  }
};

export const getComplaintById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await regularUserService.getItemById(Complaint, id);
    res.status(201).json({
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "An error occurred while processing the request.",
    });
  }
};

export const deleteComplaint = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Fetch the complaint by its ID
    const complaint = await regularUserService.getItemById(Complaint, id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // Step 2: Delete the associated image files from the file system (if applicable)
    if (complaint.photos && complaint.photos.length > 0) {
      complaint.photos.forEach((photoPath) => {
        const fullPath = path.join(__dirname, "..", photoPath); // Construct the full file path
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath); // Delete the file
        }
      });
    }

    // Step 4: Return success response
    res.status(200).json({
      message: "Complaint deleted successfully",
      data: { id },
    });
  } catch (error) {
    console.error("Error deleting complaint:", error);

    // Step 5: Return error response
    res.status(500).json({
      message:
        error.message || "An error occurred while deleting the complaint.",
    });
  }
};
