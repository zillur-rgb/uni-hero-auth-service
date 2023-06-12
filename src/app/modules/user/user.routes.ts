import express from 'express'
import { UserController } from './user.controller'
import validateRequests from '../../../middlewares/validateRequest'
import { userValidation } from './user.validation'
const router = express.Router()
router.post(
  '/create-user',
  validateRequests(userValidation.createUserZodSchema),
  UserController.createUser,
)
export const UserRoute = router
