import express from 'express';
import { createVolunteer, getUserDetails, loginVolunteer } from '../controllers/volunController.js';


const router = express.Router();
router.post("/register",createVolunteer);
router.post("/login", loginVolunteer);
router.get("/user-details/:id", getUserDetails);


export default router