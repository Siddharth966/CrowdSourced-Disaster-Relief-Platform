import mongoose from "mongoose";
const ComplaintSchema = new mongoose.Schema({
  complaint: {
    type: String,
    required: true,
    trim: true,
  },
  locationDetails: {
    address: { type: String, required: true },
    landmark: { type: String, required: true },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  severity: {
    type: String,
    enum: ["Minor", "Moderate", "Severe"],
    required: true,
  },
  urgency: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  anyDamage: {
    type: Boolean,
    required: true,
  },
  damage_desc: {
    type: String,
  },
  personalInformation: {
    name: { type: String,trim: true },
    email: { type: String,trim: true },
  },
  photos: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.every((url) => typeof url === "string");
     // Array of image URLs or paths
  },
},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Complaint", ComplaintSchema); 
