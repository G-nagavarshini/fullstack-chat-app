import express from "express";
import { limiter } from "../middleware/rateLimiter.js";
import { loginController, resetPasswordController } from "../controllers/authController.js";

const router = express.Router();

// Apply rate limiter to sensitive endpoints
router.post("/login", limiter, loginController);
router.post("/reset-password", limiter, resetPasswordController);

export default router;
