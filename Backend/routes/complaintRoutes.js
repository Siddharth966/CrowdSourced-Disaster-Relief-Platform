import express from "express";
import { updateStatus } from "../controllers/complaintController.js";
import { getComplaints } from "../controllers/regularController.js";
const router = express.Router();

router.put("/complaint/status/:id", updateStatus);
router.get("/complaint/:id/", getComplaints);
export default router;
