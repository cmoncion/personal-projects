import { Router } from "express";
import userController from "../controllers/user.controller.js";


const router = Router();


router.get('/users', userController.getUsers)

export default router;
