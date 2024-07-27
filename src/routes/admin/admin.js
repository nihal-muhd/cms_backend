import express from "express";
import authRouter from "../auth/auth.js";
const admin = express.Router();

admin.use("/auth", authRouter);

export default admin;
