import express from "express";
import {
  startMN,
  stopMN,
  getInfoMN,
  getStatusMN,
} from "../controllers/infoMN.js";

const router = express.Router();

//info stato MN

router.get("/start", startMN);
router.get("/stop", stopMN);
router.get("/getinfo", getInfoMN);
router.get("/getinfo", getStatusMN);

export default router;
