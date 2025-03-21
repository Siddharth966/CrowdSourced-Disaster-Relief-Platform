import ContactUs from "../models/ContactUs.js";

import { User } from "../models/User.js";
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the complaint exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the complaint
    const result = await commanService.deleteById(User, id);
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

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactUs.find(); // Fetch all contacts
    console.log(contacts)

    res.status(200).json({
     
      data: contacts, // Fixed incorrect reference (message.data → result.data)
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await ContactUs.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact details not found" });
    }


    const result = await commanService.deleteById(ContactUs, id);
    console.log("Delete Result:", result);

    return res.status(200).json({
      message: "Contact Details fetched successfully",
      data: result.data, // Fixed incorrect reference (message.data → result.data)
    });
  } catch (err) {
    console.error("Error deleting complaint:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
