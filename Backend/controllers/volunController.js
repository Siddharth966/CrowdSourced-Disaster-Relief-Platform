import authService from "../services/registerService.js";
import { userService } from "../services/userService.js";

const createVolunteer = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      gender,
      phone,
      address,
      pincode,
      user_type,
    } = req.body;
    const result = await authService.register({
      fullName,
      email,
      password,
      gender,
      phone,
      address,
      pincode,
      user_type,
    });
    res.status(result.status).json({ message: result.message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginVolunteer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getDetails(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createVolunteer, loginVolunteer, getUserDetails };
