import { Router } from 'express'
import { register } from './register.controller'
import { login } from './login.controller'

const router = Router()

router.post("/register", register)
router.post("/login", login)

export default router