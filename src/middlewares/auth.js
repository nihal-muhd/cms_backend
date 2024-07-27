import Joi from "joi";
import bcrypt from "bcrypt";
import Auth from "../models/auth.js";

const authJoi = Joi.object().keys({
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
});

export const validate = (req, res, next) => {
  const result = authJoi.validate(req.body);
  if (result.error) {
    return res.status(400).send({ message: result.error.message, code: 1 });
  } else {
    next();
  }
};

export const verify = async (req, res, next) => {
  const auth = await Auth.findOne({
    username: req.body.username.toLowerCase().trim(),
    status: true,
  });
  if (!auth) {
    return res.status(404).send({ message: "Invalid Username.", code: 2 });
  } else {
    req.body.auth = auth;
    next();
  }
};

export const authenticate = async (req, res, next) => {
  const result = await bcrypt.compare(
    req.body.password,
    req.body.auth.password
  );
  if (result) {
    next();
  } else {
    return res.status(401).send({ message: "Invalid  Password.", code: 3 });
  }
};

export const createJwt = (req, res, next) => {
  const token = jwt.sign(
    { id: req.body.username, crypt: req.body.auth.password },
    process.env.JWT_KEY,
    { expressIn: "1d" }
  );
  if (token) {
    req.body.token = token;
    next();
  } else {
    return res
      .status(500)
      .send({ message: "Token generation failed.", code: 4 });
  }
};
