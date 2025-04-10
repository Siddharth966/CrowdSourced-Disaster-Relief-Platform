import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"], // Ensure fullName is provided
    trim: true, // Remove extra spaces
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Ensure email is unique
    trim: true,
    lowercase: true, // Convert email to lowercase
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ], // Validate email format
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"], // Enforce minimum password length
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Other"], // Restrict gender to specific values
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Validate phone number format
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
  pincode: {
    type: String,
    required: [true, "Pin code is required"],
    match: [/^\d{6}$/, "Please enter a valid 6-digit pin code"], // Validate pin code format
  },
  user_type: {
    type: String,
    default: "volunteer", // Always defaults to "volunteer"
    immutable: true, // Prevents updates after creation
    enum: ["volunteer"], // Restricts values to "volunteer" only
    required: true,
  }
});

const Volunteer = mongoose.model("volunteer", volunteerSchema);
export default Volunteer;
