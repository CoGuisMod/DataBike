/* Imports */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

/* Routes imports */
import inventoryRouter from "./routes/inventory";
import managementRouter from "./routes/management";

/* Configuration */
dotenv.config();

const app = express();
app.use(express.json());

/* Routes */
app.use("/api/inventory", inventoryRouter);
app.use("/api/management", managementRouter);

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
