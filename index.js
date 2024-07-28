import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import admin from './src/routes/admin/admin.js'



const app = express();
connectDB();
const PORT = 5000;
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin", admin);

app.get("/", (req, res) => {
  res.send("Version 1.0");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
