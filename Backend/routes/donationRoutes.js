import express from "express";
import {
  createDonation,
  getAllDonations,
} from "../controllers/donationController.js";

const router = express.Router();

router.post("/donation", createDonation);
router.get("/donations", getAllDonations);
export default router;
