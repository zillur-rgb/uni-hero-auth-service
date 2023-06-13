import { Model } from 'mongoose'

export type IAcadmeicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemesterTitles = 'autumn' | 'summer' | 'fall'

export type IAcademicSemesterCodes = '01' | '02' | '03'

export type IAcadmeicSemester = {
  title: IAcademicSemesterTitles
  year: number
  code: IAcademicSemesterCodes
  startMonth: IAcadmeicSemesterMonths
  endMonth: IAcadmeicSemesterMonths
}

export type AcademicSemesterModel = Model<
  IAcadmeicSemester,
  AcademicSemesterModel
>
