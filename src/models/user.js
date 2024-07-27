import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    basicDetails: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      jobRole: {
        type: String,
        trim: true,
      },
    },
    admin: {
      type: Boolean,
      default: false,
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

const User = mongoose.model("User", mongoSchema, "user");

export default User;
