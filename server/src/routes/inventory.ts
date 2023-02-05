import express from "express";

const router = express.Router();

/* Creates a product */
router.post("/product", (req, res) => {
  res.send("Product created.");
});

/* Reads a product */
router.get("/product", (req, res) => {
  res.send("Product fetched.");
});

export default router;
