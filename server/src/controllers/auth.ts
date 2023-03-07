import { NextFunction, Request, RequestHandler, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { loginSchema } from "../validators/authValidator";
import UserModel from "../models/user";

/* Login */
export const login: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = loginSchema.parse(req.body);

    /* Find the user by the username and if found return the user, if not found return null */
    const user = await UserModel.findOne({ username });

    /* If there is no user return an error */
    if (!user) {
      throw createHttpError(401, "User not found");
    }

    /* Compares the passwords */
    const doPasswordsMatch = await bcrypt.compare(password, user.password);

    /* If the passwords do not match return an error */
    if (!doPasswordsMatch) {
      throw createHttpError(401, "Password do not match");
    }

    /* Creates the json token */
    const authToken = jwt.sign(
      { userId: user._id },
      process.env.TOKEN_PRIVATE_KEY || ""
    );

    /* Sends back the created token */
    res.status(200).header("Authorization", authToken).json(authToken);
  } catch (error) {
    next(error);
  }
};
