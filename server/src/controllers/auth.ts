import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

import UserModel from "../models/user";

/* Login */
export const login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Validates if the email is empty */
    if (!req.body.email) {
      throw createHttpError(401, "Email is required.");
    }

    /* Validates if the password is empty */
    if (!req.body.password) {
      throw createHttpError(401, "Password is required.");
    }

    /* Find the user by the email and if found return the user, if not found return null */
    const user = await UserModel.findOne({ email: req.body.email });

    /* If there is no user return an error */
    if (!user) {
      throw createHttpError(401, "User not found");
    }

    /* Compares the passwords */
    const doPasswordsMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    /* If the passwords do not match return an error */
    if (!doPasswordsMatch) {
      throw createHttpError(401, "Password do not match");
    }

    /* Sends back the created user */
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/* Logout */
export const logout: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
