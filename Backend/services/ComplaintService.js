import Complaint  from "../models/Complaint.js";

export const ComplaintService = {
  create: async (data) => {
    try {
      const { data } = data;
      let complaint =   await Complaint.save();
      return {
        success: true,
        message: "Complaint created successfully",
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
