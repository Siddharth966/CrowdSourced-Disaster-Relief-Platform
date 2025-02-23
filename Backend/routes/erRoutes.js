import express from 'express';
import { createEr, getUserDetails, loginEr } from '../controllers/erController.js';


const router = express.Router();
router.post("/register",createEr);
router.post("/login", loginEr);
router.get("/user-details/:id", getUserDetails);


export default router 
