import express from 'express'
import validateRequests from '../../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterController } from './academicSemester.controller'
const router = express.Router()
router.post(
  '/create-semester',
  validateRequests(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester,
)
export const AcademicSemesterRoute = router
