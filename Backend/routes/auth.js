import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Emergency Responder Registration
router.post("/register/emergency-responder", async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      gender,
      phone,
      address,
      pincode,
      organization,
      category,
      certification,
      experience,
      availability,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      phone,
      address,
      pincode,
      user_type: "emergency_responder",
      organization,
      category,
      certification,
      experience,
      availability,
    });

    await user.save();

    res.status(201).json({ message: "Emergency Responder registered successfully" });
  } catch (error) {
    console.error("Error in emergency responder registration:", error);
    res.status(500).json({ message: "Error registering emergency responder" });
  }
});

export default router; 