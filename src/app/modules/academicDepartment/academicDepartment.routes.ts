import express from 'express';
import validateRequests from '../../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validations';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequests(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.createDepartment,
);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);
router.patch(
  '/:id',
  validateRequests(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.updateDepartment,
);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);
router.get('/', AcademicDepartmentController.getAllDepartments);

export const AcademicDepartmentRoute = router;
