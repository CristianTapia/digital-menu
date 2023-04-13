import { Router } from "express";
import { getWaiter, createWaiter } from "../controllers/waiters.controller.js";

const router = Router();

router.get('/waiters', getWaiter)
router.post('/waiters', createWaiter)
router.put('/waiters/:id')
router.delete('/waiters/:id')
router.get('/waiters/:id')

export { router as waitersRoutes };