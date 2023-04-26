import { Router } from "express";
import { getUser, userRegister, userLogin } from "../controllers/auth.controller.js";

const router = Router();

router.get('/users', getUser);
router.post('/', userRegister);
router.post('/login', userLogin);
router.put('/users/:id');
router.delete('/users/:id');
router.get('/users/:id');

export { router as usersRoutes };