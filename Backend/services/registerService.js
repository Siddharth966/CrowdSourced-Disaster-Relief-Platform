import { User } from "../models/User.js"; // Import your
import jwt from "jsonwebtoken";
import { Volunteer } from "../models/Volunteer.js";
import { RegularUser } from "../models/RegularUser.js";
import { EmergencyResponder } from "../models/EmergencyResponder.js";

export const authService = {
  register: async (payload) => {
    try {
      const { email, user_type } = payload;
  
      // Check if email is already registered
      let user = await User.findOne({ email });
      if (user) {
        return { status: 400, message: "Email already registered" };
      }
  
      // Save user in global User table
      let newUser = new User(payload);
      await newUser.save();
  
      // Save user in the respective user type collection
      let userModel;
      switch (user_type) {
        case "volunteer":
          userModel = Volunteer;
          break;
        case "emergency_responder":
          userModel = EmergencyResponder;
          break;
        case "regular_user":
          userModel = RegularUser;
          break;
        default:
          return { status: 400, message: "Invalid user type" };
      }
  
      let specificUser = new userModel(payload);
      await specificUser.save();
  
      return { status: 201, message: "User registered successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  
  login: async (email, password) => {

    // Input validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Check if the password matches (plain text comparison)
    if (password !== user.password) {
      throw new Error("Invalid password");
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        user_type: user.user_type,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    return {
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        user_type: user.user_type,
      },
    };
  },

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!user) {
        throw new Error("User not found");
      }

      return decoded;
    } catch (error) {
      throw new Error("Invalid token");
    }
  },
};

export default authService;
