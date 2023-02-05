import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";

import UserModel from "../models/user";

/* Create an user */
export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const newUser = new UserModel({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    await newUser.save();

    /* Sends back the created user */
    res.status(201).json(newUser);
  } catch (error) {
    /* Handles if an error occurs */
    let errorMessage = "An unknown error has ocurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
};

/* Read an user */
export const readUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find({ email: req.body.email });
    res.status(200).json(user);
  } catch (error) {
    /* Handles if an error occurs */
    let errorMessage = "An unknown error has ocurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
};

/* Update an user */
export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
  } catch (error) {
    /* Handles if an error occurs */
    let errorMessage = "An unknown error has ocurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
};

/* Delete an user */
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
  } catch (error) {
    /* Handles if an error occurs */
    let errorMessage = "An unknown error has ocurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
};

/* Read all users */
export const readAllUsers: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await UserModel.find().exec();
    res.status(200).json(users);
  } catch (error) {
    let errorMessage = "An unknown error has ocurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
      res.status(500).json({ error: errorMessage });
    }
  }
};
