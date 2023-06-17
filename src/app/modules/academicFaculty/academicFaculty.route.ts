import express from 'express';
import validateRequests from '../../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicfaculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequests(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty,
);

router.get('/', AcademicFacultyController.getAllFaculties);
router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequests(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateAcademicFaculty,
);
router.delete('/:id', AcademicFacultyController.deleteSingleFaculty);

export const AcademicFacultyRoute = router;
