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
import ApiError from '../../../errors/ApiError'
import status from 'http-status'

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

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })

  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic semester is already exists!')
  }

  next()
})

export const AcademicSemester = model<IAcadmeicSemester, AcademicSemesterModel>(
  'AcadmeicSemester',
  academicSemesterSchema,
)
