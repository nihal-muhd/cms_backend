import express from "express";
import { VerifyToken } from "../../middlewares/verifyToken.js";
import User from "../../models/user.js";

const userInfoRouter = express.Router();


userInfoRouter.get('', VerifyToken, async (req, res) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email })
        console.log(userInfo);
        res.status(200).send(userInfo)
    } catch (error) {
        res.status(500).status({ message: 'Internal server error' })
    }

})

export default userInfoRouter