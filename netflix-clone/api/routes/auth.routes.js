import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router()

router.post('/signup', AuthController.SignUp)
router.post('/signin', AuthController.SignIn)

export default router

