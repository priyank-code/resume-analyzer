import express from "express";
import upload from "../utils/multer.js";
import { analyzeResume, getHistory } from "../controllers/resume.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/analyze", protect, upload.single("resume"), analyzeResume);
router.get("/history", protect, getHistory);

export default router;