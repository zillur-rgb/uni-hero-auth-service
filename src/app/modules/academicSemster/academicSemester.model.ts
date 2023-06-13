import { Schema, model } from 'mongoose'
import {
  IAcadmeicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface'
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant'

const academicSemesterSchema = new Schema<IAcadmeicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },

    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  },
)
export const AcademicSemester = model<IAcadmeicSemester, AcademicSemesterModel>(
  'AcadmeicSemester',
  academicSemesterSchema,
)
