import express from "express";
import { VerifyToken } from "../../middlewares/verifyToken.js";

const uiPreference = express.Router();


uiPreference.get('/:module', VerifyToken, async (req, res) => {
    try {
        console.log(req.params.module);
        const module = req.params.module
        let { getConfig } = await import(`../${module}/config/configData.js`)
        let config = await getConfig(module)
        console.log(config);
        res.status(200).send(config)
    } catch (error) {

    }
})


export default uiPreference