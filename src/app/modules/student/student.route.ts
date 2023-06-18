import express from 'express';
import { StudentValidation } from './student.validation';
import validateRequests from '../../../middlewares/validateRequest';
import { StudentController } from './student.controller';
const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);

router.patch(
  '/:id',
  validateRequests(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteStudent);

export const StudentRoute = router;
