import axios from "axios";
import { baseUrl } from "../constants/env";

export const getComplaints = async (status, limit) => {
  try {
    // Construct params object conditionally
    const params = {};
    if (status) params.status = status;
    if (limit) params.limit = limit;

    const response = await axios.get(`${baseUrl}/complaints`, {
      params: Object.keys(params).length ? params : undefined, // Only send params if they exist
      paramsSerializer: (params) => {
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
