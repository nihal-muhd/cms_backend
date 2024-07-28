import express from "express";
import authRouter from "../auth/auth.js";
import userInfoRouter from "./user-info.js";
import dashboardRouter from "../dashboard/dashboard.js";
const admin = express.Router();

admin.use("/auth", authRouter);
admin.use("/user-info", userInfoRouter);
admin.use("/dashboard", dashboardRouter);

export default admin;
