import { Router } from "express";
import {
  getProduct,
  createProduct,
  joinProductsCategories,
  deleteProduct,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProduct);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id");
router.get("/products/categories", joinProductsCategories);

export { router as productsRoutes };
