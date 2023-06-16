import express from 'express';
import validateRequests from '../../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();
router.post(
  '/create-semester',
  validateRequests(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
);

router.get('/:id', AcademicSemesterController.getSingleSemester);
router.delete('/:id', AcademicSemesterController.deleteSingleSemester);
router.patch(
  '/:id',
  validateRequests(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester,
);
router.get('/', AcademicSemesterController.getAllSemesters);
export const AcademicSemesterRoute = router;
