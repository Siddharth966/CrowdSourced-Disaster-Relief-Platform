import express from 'express';
import { createComplaint } from '../controllers/complaintController.js';



const router = express.Router();
router.post("/complaint",createComplaint);



export default router