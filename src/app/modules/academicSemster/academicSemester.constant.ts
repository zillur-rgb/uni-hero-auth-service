import {
  IAcademicSemesterCodes,
  IAcademicSemesterTitles,
  IAcademicSemesterMonths,
} from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'autumn',
  'fall',
  'summer',
];

export const academicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  autumn: '01',
  summer: '02',
  fall: '03',
};

export const academicSemesterSearchableFields = ['title', 'code', 'year'];
export const academicSemesterFilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];
