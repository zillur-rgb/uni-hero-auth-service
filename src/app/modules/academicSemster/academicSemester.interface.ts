import { Model } from 'mongoose';

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
  | 'December';

export type IAcademicSemesterTitles = 'autumn' | 'summer' | 'fall';

export type IAcademicSemesterCodes = '01' | '02' | '03';

export type IAcadmeicSemester = {
  title: IAcademicSemesterTitles;
  year: string;
  code: IAcademicSemesterCodes;
  startMonth: IAcadmeicSemesterMonths;
  endMonth: IAcadmeicSemesterMonths;
};

export type AcademicSemesterModel = Model<
  IAcadmeicSemester,
  AcademicSemesterModel
>;

export type IAcademicSemesterFilters = {
  searchTerm: string;
  title: string;
  code: string;
  year: string;
};
