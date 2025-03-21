import express from "express";

import { contactUsForm, getAllContacts, getAllUsers} from "../controllers/landingController.js";

const router = express.Router();

router.post("/contact-us", contactUsForm);
router.get("/users", getAllUsers);
router.get("/contacts", getAllContacts);

export default router;
