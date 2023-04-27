import { Router } from "express";
import {
  createCategory,
  getCategoryProducts,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers/categories.controller.js";

const router = Router();

router.get("/categories", getAllCategories);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
router.get("/categories/:id", getCategoryById);
router.get("/categories/:id/products", getCategoryProducts);

export { router as categoriesRoutes };