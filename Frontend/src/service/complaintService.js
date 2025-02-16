import axios from "axios";
import { baseUrl } from "../constants/env";

export const getComplaints = async () => {
  try {
    const response = await axios.get(`${baseUrl}/complaints`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null; // Explicitly return null to avoid undefined issues
  }
};
