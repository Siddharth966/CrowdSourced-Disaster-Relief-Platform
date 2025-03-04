import express from "express";

import { contactUsForm } from "../controllers/landingController.js";
const router = express.Router();

router.post("/contact-us", contactUsForm);
export default router;
