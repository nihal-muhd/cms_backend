import mongoose from "mongoose";

const mongoSchema = new mongoose.Schema(
    {
        module: {
            type: String,
            required: true,
        },
        sectionName: {
            type: String
        },
        data: {
        },
        order: {
            type: Number
        },
        pagination: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: { createdAt: "createdDate" },
    }
);

const Section = mongoose.model("Section", mongoSchema, "section");

export default Section;
