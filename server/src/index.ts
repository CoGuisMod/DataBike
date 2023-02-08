/* Imports */
import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import helmet from "helmet";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";

import mongoose from "mongoose";

/* Routes imports */
import authRouter from "./routes/auth";
import inventoryRouter from "./routes/inventory";
import managementRouter from "./routes/management";

/* Configuration */
dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(cors());

/* Routes */
app.use("/api/auth", authRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/management", managementRouter);

/* Http error handler */
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
  res.status(statusCode).json({ error: errorMessage });
});

/* Server port */
const PORT = process.env.PORT || 9000;

/* Mongoose */
mongoose
  .connect(process.env.MONGO_CONNECTION_URL!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
