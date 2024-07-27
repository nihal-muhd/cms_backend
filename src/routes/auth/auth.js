import express from "express";
import loginRouter from "./api/login.js";

const authRouter = express.Router();

authRouter.use("/login", loginRouter);

export default authRouter;
