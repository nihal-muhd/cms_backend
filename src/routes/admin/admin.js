import express from "express";
import authRouter from "../auth/auth.js";
import userInfoRouter from "./user-info.js";
import uiPreference from "../ui-preference/ui-prefrence.js";
const admin = express.Router();

admin.use("/auth", authRouter);
admin.use("/user-info", userInfoRouter);
admin.use("/ui-preference", uiPreference);

export default admin;
