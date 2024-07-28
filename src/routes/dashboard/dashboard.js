import express from "express";
import dashboardCreate from "./api/dashboard.create.js";

const dashboardRouter = express.Router();

dashboardRouter.use('/create', dashboardCreate)

export default dashboardRouter