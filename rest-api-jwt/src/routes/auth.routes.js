import { Router } from "express";
import AuthController from '../controllers/auth.controller.js'


const router = Router()


router.post('/signup', AuthController.singUp)
router.post('/signin', AuthController.signIn)

export default router