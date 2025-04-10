import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Invalid phone number"],
    },
    user_type: {
      type: String,
      enum: ["volunteer", "emergency_responder", "regular_user"],
      required: true,
    },

    // Emergency Responder Specific Fields
    organization: {
      type: String,
      required: function () {
        return this.user_type === "emergency_responder";
      },
    },
    category: {
      type: String,
      enum: [
        "firefighter",
        "police",
        "ambulance",
        "ngo",
        "rescue_team",
        "disaster_management",
        "other",
      ],
      required: function () {
        return this.user_type === "emergency_responder";
      },
    },
    certification: {
      type: String,
      required: function () {
        return this.user_type === "emergency_responder";
      },
    },
    experience: {
      type: Number,
      required: function () {
        return this.user_type === "emergency_responder";
      },
    },
    availability: {
      type: String,
      enum: ["full_time", "part_time", "on_call"],
      required: function () {
        return this.user_type === "emergency_responder";
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
