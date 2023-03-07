import express from "express";

/* Controllers imports */
import {
  createUser,
  deleteUser,
  readAllUsers,
  readUser,
  updateUser,
} from "../controllers/management";

import { authToken } from "../middlewares/authToken";

const router = express.Router();

/* -------------------------------------------------- User managment -------------------------------------------------- */

/* Creates an user */
router.post("/user", authToken, createUser);

/* Read an user */
router.get("/user", authToken, readUser);

/* Update an user */
router.patch("/user", authToken, updateUser);

/* Delete an user */
router.delete("/user", authToken, deleteUser);

/* Read all users */
router.get("/users", authToken, readAllUsers);

export default router;
