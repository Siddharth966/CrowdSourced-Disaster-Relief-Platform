import express from "express";

import { contactUsForm, getAllContacts, getAllUsers, deleteUser, deleteContact } from "../controllers/landingController.js";

const router = express.Router();

router.post("/contact-us", contactUsForm);
router.get("/users", getAllUsers);
router.get("/contacts", getAllContacts);
router.delete("/delete-user/:id", deleteUser);
router.delete("/delete-contact/:id", deleteContact);

export default router;