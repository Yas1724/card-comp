import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cardRoutes from "./routes/cardRoutes.js";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
  

app.use("/cards", cardRoutes);

app.listen(5000, () => console.log("Server running: http://localhost:5000"));
