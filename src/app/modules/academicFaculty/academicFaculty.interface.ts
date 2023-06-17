import { Model } from 'mongoose';
import { AcademicSemesterModel } from '../academicSemster/academicSemester.interface';

export type IAcademicFaculty = {
  title: string;
};

export type IAcademicFacultyModel = Model<
  IAcademicFaculty,
  AcademicSemesterModel
>;

export type IAcademicFacultyFilters = {
  searchTerm: string;
  title: string;
};
