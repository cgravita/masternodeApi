import express from "express";
import { startWT, stopWT, getInfoWT, getInfoWT_data } from "../controllers/infoWT.js";

const router = express.Router();

//info stato MN
router.get("/start", startWT);
router.get("/stop", stopWT);
router.get("/getInfo", getInfoWT);
router.get("/getInfo/:data", getInfoWT_data);

export default router;
