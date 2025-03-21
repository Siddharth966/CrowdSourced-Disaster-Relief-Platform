import Donation from "../models/Donation.js";

//  Create a new donation
export const createDonation = async (req, res) => {
  console.log("donation data recevied:",req.data);
  
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json({ message: "Donation recorded successfully!", donation: newDonation });
  } catch (error) {
    res.status(500).json({ error: "Error saving donation", details: error.message });
  }
};

//  Get all donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching donations", details: error.message });
  }
};