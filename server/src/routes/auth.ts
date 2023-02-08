import express from "express";

/* Controllers imports */
import { login, logout } from "../controllers/auth";

const router = express.Router();

/* -------------------------------------------------- User auth -------------------------------------------------- */

/* Login an user */
router.post("/login", login);

/* Logout an user */
router.put("/logout", logout);

export default router;
