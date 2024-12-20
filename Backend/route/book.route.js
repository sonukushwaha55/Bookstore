import express from "express";
import { getBook } from "../controllers/book.controllers.js";

const router = express.Router();

// Route to get all books
router.get("/", getBook);

export default router;
