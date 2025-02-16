import express from "express";
import {
  createComplaint,
  deleteComplaint,
  getComplaintById,
  getComplaints,
} from "../controllers/regularController.js";
import upload from "../controllers/multerConfig.js";
const router = express.Router();

router.post("/raise-complaint", upload.array("photos"), createComplaint);
router.get("/complaints", getComplaints);
router.get("/complaints/:id", getComplaintById);
router.delete("/remove-complaints/:id", deleteComplaint);
// router.put("/update-complaints/:id", )

export default router;
