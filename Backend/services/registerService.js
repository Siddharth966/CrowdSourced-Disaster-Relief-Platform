import { User } from "../models/User.js"; // Import your
import jwt from "jsonwebtoken";

export const authService = {
  register: async (payload) => {
    try {
      const { email } = payload;
      let user = await User.findOne({ email });
      if (user) {
        return { status: 400, message: "Email already registered" };
      }

      // Save user based on type
      let newUser = new User(payload);
      await newUser.save();
      return { status: 201, message: "User registered successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  login: async (email, password) => {
    console.log("inside login");
    // Input validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Find user by email
    const user = await User.findOne({ email });
    console.log("user", user);
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
