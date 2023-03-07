import { NextFunction, Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";

import createHttpError from "http-errors";

import {
  createUserSchema,
  deleteUserSchema,
  readUserSchema,
  updateUserSchema,
} from "../validators/management.validator";
import UserModel from "../models/user";

/* Creates an user */
export const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Gets and validates the user inputs */
    const { first_name, last_name, username, password, role } =
      createUserSchema.parse(req.body);

    /* Find the user by the username and if found return the user, if not found return null */
    const findUser = await UserModel.findOne({ username });

    /* If the user exists returns an error */
    if (findUser) {
      throw createHttpError(401, "User already exist.");
    }

    /* Encrypts the password */
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      first_name,
      last_name,
      username,
      password: hashedPassword,
      role,
    });

    /* Saves the user in the database */
    await newUser.save();

    /* Sends back the created user */
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

/* Reads an user */
export const readUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Gets and validates the user inputs */
    const { _id } = readUserSchema.parse(req.body);

    /* Find the user by the id and if found return the user, if not found return null */
    const findUser = await UserModel.findById(_id);

    /* If there is no user returns an error */
    if (!findUser) {
      throw createHttpError(401, "User do not found.");
    }

    /* Sends back the find user */
    res.status(200).json(findUser);
  } catch (error) {
    next(error);
  }
};

/* Updates an user */
export const updateUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Gets and validates the user inputs */
    const { _id, first_name, last_name, username, password, role } =
      updateUserSchema.parse(req.body);

    let updatedUser = null;

    /* When the user typed a new password */
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      /* Find the user by the id, updates the values given in the object and retur the updated user, if not user is found returns null */
      updatedUser = await UserModel.findByIdAndUpdate(
        _id,
        {
          first_name,
          last_name,
          username,
          password: hashedPassword,
          role,
        },
        { new: true }
      );
    }

    /* When the user didn't typed a new password */
    if (!password) {
      /* Find the user by the id, updates the values given in the object and retur the updated user, if not user is found returns null */
      updatedUser = await UserModel.findByIdAndUpdate(
        _id,
        {
          first_name,
          last_name,
          username,
          role,
        },
        { new: true }
      );
    }

    /* If the updated user is null return an error */
    if (!updatedUser) {
      throw createHttpError(401, "User do not found.");
    }

    /* Sends back the updated user */
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

/* Deletes an user */
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Gets and validates the user inputs */
    const { _id } = deleteUserSchema.parse(req.body);

    /* Finds the user by id and deletes it, the return the deleted user, if not user is found returns null */
    const deletedUser = await UserModel.findByIdAndDelete(_id);

    /* If the deleted user is null return an error */
    if (!deletedUser) {
      throw createHttpError(401, "User do not found.");
    }

    /* Sends back the deleted user */
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

/* Reads all users */
export const readAllUsers: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Finds all the users */
    const users = await UserModel.find();

    /* Sends back the find users */
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
