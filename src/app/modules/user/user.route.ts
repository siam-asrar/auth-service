import express from 'express'
import requestValidator from '../../middleware/requestValidator'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post('/create-user', requestValidator(UserValidation.createUserZodSchema), UserController.createUser)

export const UserRoutes = router