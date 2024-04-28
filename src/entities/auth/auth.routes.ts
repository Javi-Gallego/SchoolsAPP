import { Router } from 'express'
import { register } from './register.controller'
import { login } from './login.controller'
import { auth } from '../../middlewares/auth'
import { isAdmin } from '../../middlewares/isAdmin'

const router = Router()

router.post("/register", auth, isAdmin, register)
router.post("/login", login)

export default router