import express from "express";
import { registerEmergencyResponder, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register/emergency-responder", registerEmergencyResponder);
router.post("/login/emergency-responder", loginUser);

export default router;
