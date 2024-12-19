import express from 'express';
import { login, register, logout, home } from "../controllers/auth.controller.js";
import { protectedRoute } from '../middlewares/protectedRoute.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/home", protectedRoute, home);

export default router;
