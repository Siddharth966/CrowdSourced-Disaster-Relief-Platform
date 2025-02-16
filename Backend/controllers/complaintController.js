import { ComplaintService } from "../services/ComplaintService.js";

export const createComplaint = async (req, res) => {
  try {
    const {
      complaint,
      locationDetails,
      severity,
      urgency,
      anyDamage,
      damage_desc,
      personalInformation,
      photos,
      createdAt
    } = req.body;
    const result = await ComplaintService.create(  {  complaint,
      locationDetails,
      severity,
      urgency,
      anyDamage,
      damage_desc,
      personalInformation,
      photos,
      createdAt
  });
    res
      .status(201)
      .json({
        message: result.message,
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

