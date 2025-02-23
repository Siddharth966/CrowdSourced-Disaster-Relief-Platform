import axios from "axios";
import { baseUrl } from "../constants/env";

export const getComplaints = async (status, limit) => {
  try {
    const response = await axios.get(`${baseUrl}/complaints`, {
      params: { status, limit }, // Pass status (array) and limit as query parameters
      paramsSerializer: (params) => {
        // Serialize the array of statuses into a query string
        return Object.keys(params)
          .map((key) => {
            if (Array.isArray(params[key])) {
              return params[key].map((value) => `${key}=${value}`).join("&");
            }
            return `${key}=${params[key]}`;
          })
          .join("&");
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return null;
  }
};
