import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerEmergencyResponder = async (req, res) => {
  try {
    const { fullName, email, password, phone, organization, category, certification, experience, availability } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password,
      phone,
      user_type: "emergency_responder",
      organization,
      category,
      certification,
      experience,
      availability
    });

    await newUser.save();

    res.status(201).json({ message: "Emergency responder registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log('password',password)
    console.log('user.password',user.password)

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('isMatch',isMatch)

    if (!isMatch) {
      console.log('isMatch',isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
