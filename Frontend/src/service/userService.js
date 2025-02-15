import axios from "axios";
import { baseUrl } from "../constants/env";

export const getDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/user-details/${id}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null; // Explicitly return null to avoid undefined issues
  }
};