import { Router } from "express";
import { getCategory, createCategory } from "../controllers/categories.controller.js";

const router = Router();

router.get('/categories', getCategory);
router.post('/categories', createCategory);
router.put('/categories/:id');
router.delete('/categories/:id');
router.get('/categories/:id');

export { router as categoriesRoutes };