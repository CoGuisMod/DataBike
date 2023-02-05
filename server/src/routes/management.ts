import express from "express";

/* Controllers imports */
import {
  createUser,
  deleteUser,
  readAllUsers,
  readUser,
  updateUser,
} from "../controllers/management";

const router = express.Router();

/* -------------------------------------------------- User managment -------------------------------------------------- */

/* Creates an user */
router.post("/user", createUser);

/* Read an user */
router.get("/user", readUser);

/* Update an user */
router.put("/user", updateUser);

/* Delete an user */
router.delete("/user", deleteUser);

/* Read all users */
router.get("/users", readAllUsers);

export default router;
