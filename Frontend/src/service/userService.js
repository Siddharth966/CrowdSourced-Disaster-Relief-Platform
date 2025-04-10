import axios from "axios";
import { baseUrl } from "../constants/env";

export const getDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/user-details/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error; // Propagate error to component
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Propagate error to component
  }
};
