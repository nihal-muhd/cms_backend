import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "createdDate" },
  }
);

const Auth = mongoose.model("Auth", mongoSchema, "auth");

export default Auth;
