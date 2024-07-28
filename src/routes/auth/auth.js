import express from "express";
import loginRouter from "./api/login.js";

const authRouter = express.Router();

authRouter.use("/login", loginRouter);
authRouter.use("/logout", loginRouter);

export default authRouter;
