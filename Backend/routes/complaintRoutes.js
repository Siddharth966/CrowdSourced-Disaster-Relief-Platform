import express from "express";
import { getComplaintCounts, updateStatus } from "../controllers/complaintController.js";
import { getComplaints } from "../controllers/regularController.js";
const router = express.Router();

router.put("/complaint/status/:id", updateStatus);
router.get("/complaint/:id/", getComplaints);
router.get("/complaint-count/", getComplaintCounts);
export default router;
