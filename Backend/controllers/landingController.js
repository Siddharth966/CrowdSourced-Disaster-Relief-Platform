import ContactUs from "../models/Contact.js";
import { commanService } from "../services/commanService.js";


export const contactUsForm = async (req, res) => {
  try {
    // Save complaint to the database
    const result = await commanService.create(ContactUs, req.body);

    // Send success response
    res.status(201).json({ message: result.message, data: result.data });
  } catch (error) {
    console.error("Error in contact Admin:", error);

    // Send appropriate error response
    const status = error.name === "ValidationError" ? 400 : 500;
    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};