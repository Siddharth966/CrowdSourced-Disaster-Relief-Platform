import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./db.js";
dotenv.config();
import volunteerRoutes from "./routes/volunteerRoutes.js";
import regularRoutes from "./routes/regularRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import landingRoutes from "./routes/landingRoutes.js"
import donationRoutes from "./routes/donationRoutes.js"

const app = express();
app.use(express.json({ limit: "10mb" })); // Example: 10 MB
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(cors());

connectDB();

app.use("/api", volunteerRoutes);
app.use("/api", regularRoutes);
app.use("/api", complaintRoutes);
app.use("/api", landingRoutes);
app.use("/api", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
