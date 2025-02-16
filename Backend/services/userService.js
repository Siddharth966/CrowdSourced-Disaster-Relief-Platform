import { User } from "../models/User.js";

export const userService = {
  getDetails:async (id)=>{
    try {
      const details = await User.findById(id).select("-password");
          if (!details) {
            return null; // or return {};
          }
          return details;
        } catch (error) {
          throw new Error(`Failed to fetch user details: ${error.message}`);
        }
  }
}
