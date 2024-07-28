import express from "express";
import { VerifyToken } from '../../../middlewares/verifyToken.js'

const dashboardCreate = express.Router();

dashboardCreate.get('/schema', VerifyToken, (req, res) => {
    try {
        const formSchema = [
            { name: "title", type: "text", label: "Title" },
            { name: "content", type: "text", label: "Content" },
            { name: "image", type: "text", label: "Image" },
            { name: "pagination", type: "checkbox", label: "Enable Pagination" }
        ]
        res.status(200).send(formSchema)
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' })
    }
})
dashboardCreate.post('/', VerifyToken, (req, res) => {
    try {

    } catch (error) {

    }
})

export default dashboardCreate;
