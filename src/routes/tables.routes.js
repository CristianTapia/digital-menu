import { Router } from "express";
import { getTable, createTable, updateTable, deleteTable } from "../controllers/tables.controller.js";

const router = Router();

router.get('/tables', getTable);
router.post('/tables', createTable);
router.put('/tables/:id', updateTable);
router.delete('/tables/:id', deleteTable);
router.get('/tables/:id');

export { router as tablesRoutes };