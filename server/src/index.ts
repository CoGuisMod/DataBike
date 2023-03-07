/* Imports */
import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import createHttpError, { isHttpError } from "http-errors";
import { JsonWebTokenError } from "jsonwebtoken";
import { ZodError } from "zod";

import mongoose from "mongoose";

/* Routes imports */
import authRouter from "./routes/auth";
import inventoryRouter from "./routes/inventory";
import managementRouter from "./routes/management";

/* Configuration */
dotenv.config();

const app = express();
app.use(express.json());

/* Routes */
app.use("/api/auth", authRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/management", managementRouter);

/* Unkown route handler */
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

/* Error handling */
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  if (error instanceof JsonWebTokenError) {
    if (error.message === "invalid signature") {
      statusCode = 401;
      errorMessage = "Access denied, invalid token.";
    }
  }

  if (error instanceof ZodError) {
    statusCode = 401;
    errorMessage = error.errors[0].message;
  }

  res.status(statusCode).json({ error: errorMessage });
});

/* Server port */
const SERVER_PORT = process.env.SERVER_PORT || 9000;

/* Mongoose */
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_CONNECTION_URL!)
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server on port: ${SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
