import express from "express";

/* Controllers imports */
import { login } from "../controllers/auth";

const router = express.Router();

/* -------------------------------------------------- User auth -------------------------------------------------- */

/* Login an user */
router.post("/login", login);

export default router;
