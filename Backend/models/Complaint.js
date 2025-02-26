import mongoose from "mongoose";

// Define the Complaint Schema
const complaintSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: false,
    },
    long: {
      type: Number,
      required: false,
    },
    severity: {
      type: String,
      enum: ["Minor", "Moderate", "Critical"], // Ensure that severity is one of these values
      required: true,
    },
    urgency: {
      type: String,
      enum: ["Low", "Medium", "High"], // Ensure th\at urgency is one of these values
      required: true,
    },
    damageDesc: {
      type: String,
      required: false, // Optional field
    },
    photos: {
      type: [String], // Array of base64 strings (or paths to images if you save the files on disk)
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Done"], // Status options
      default: "Pending", // Default status when a complaint is created
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Create the model based on the schema
export const Complaint = mongoose.model("Complaint", complaintSchema);
