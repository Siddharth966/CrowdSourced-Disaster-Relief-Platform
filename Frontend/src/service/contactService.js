import axios from "axios";
import { baseUrl } from "../constants/env.js";

export const getContact = async () => {
  try {
    const response = await axios.get(`${baseUrl}/contacts`)
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching c:", error);
    return null;
  }
};
