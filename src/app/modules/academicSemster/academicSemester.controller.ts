import { Request, Response, RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pagination';
import { paginationFields } from '../../../constants/pagination';
import {
  IAcademicSemesterFilters,
  IAcademicSemester,
} from './academicSemester.interface';
import { academicSemesterFilterableFields } from './academicSemester.constant';

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  },
);

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  // Getting the search term from query
  const filters: IAcademicSemesterFilters = pick(
    req.query,
    academicSemesterFilterableFields,
  ) as IAcademicSemesterFilters;
  // sending the queries from request and pagination fields(page, limit, sortBy, sortOrder)
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions,
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data successfully retrieved',
    meta: result.meta || null,
    data: result.data || null,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester retrieved succesfully!',
    data: result,
  });
});
const deleteSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.deleteSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester deleted succesfully!',
    data: result,
  });
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const payload = req.body;

  const result = await AcademicSemesterService.updateSemester(id, payload);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester updated successfuly!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSingleSemester,
};
