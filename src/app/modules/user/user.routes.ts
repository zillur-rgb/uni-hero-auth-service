import { UserValidation } from './user.validation';
import express from 'express';
import { UserController } from './user.controller';
import validateRequests from '../../../middlewares/validateRequest';

const router = express.Router();
router.post(
  '/create-student',
  validateRequests(UserValidation.createUserZodSchema),
  UserController.createStudent,
);
export const UserRoute = router;
