import { NextFunction, Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";

import createHttpError from "http-errors";

import UserModel from "../models/user";

/* Creates an user */
export const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /* Find the user by the email and if found return the user, if not found return null */
    const findUser = await UserModel.findOne({ email: req.body.email });

    /* If the user exists returns an error */
    if (findUser) {
      throw createHttpError(401, "User already exist.");
    }

    /* Encrypts the password */
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new UserModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
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
    /* Find the user by the email and if found return the user, if not found return null */
    const findUser = await UserModel.findOne({ email: req.body.email });

    /* If the deleted user is null return an error */
    if (!findUser) {
      throw createHttpError(401, "User do not found.");
    }

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
    /* Encrypts the password */
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    /* Find the user by the id, updates the values given in the object and retur the updated user, if not user is found returns null */
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.body._id,
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
      },
      { new: true }
    );

    /* If the updated user is null return an error */
    if (!updatedUser) {
      throw createHttpError(401, "User do not found.");
    }

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
    /* Finds the user by id and deletes it, the return the deleted user, if not user is found returns null */
    const deletedUser = await UserModel.findByIdAndDelete(req.body._id);

    /* If the deleted user is null return an error */
    if (!deletedUser) {
      throw createHttpError(401, "User do not found.");
    }

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

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
