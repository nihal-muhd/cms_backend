import express from "express";
import {
  authenticate,
  createJwt,
  validate,
  verify,
} from "../../../middlewares/auth.js";

const loginRouter = express.Router();

loginRouter.post(
  "/",
  validate,
  verify,
  authenticate,
  createJwt,
  async (req, res) => {
    try {
      res.status(200).send({
        message: "Login Sucess",
        token: req.body.token,
      });
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  }
);

export default loginRouter;
