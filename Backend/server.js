import dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import connectDB from './db.js';
dotenv.config();
import volunteerRoutes from "./routes/volunteerRoutes.js"


const app = express();
app.use(express.json());
app.use(cors());

connectDB()

app.use("/api", volunteerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
