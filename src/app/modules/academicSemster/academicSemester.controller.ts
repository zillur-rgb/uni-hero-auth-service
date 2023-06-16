import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pagination';
import { paginationFields } from '../../../constants/pagination';
import {
  IAcademicSemesterFilters,
  IAcadmeicSemester,
} from './academicSemester.interface';
import { academicSemesterFilterableFields } from './academicSemester.constant';

const createSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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

    next();
  },
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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

    sendResponse<IAcadmeicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Data successfully retrieved',
      meta: result.meta || null,
      data: result.data || null,
    });
    next();
  },
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcadmeicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved succesfully!',
      data: result,
    });

    next();
  },
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const payload = req.body;

    const result = await AcademicSemesterService.updateSemester(id, payload);

    sendResponse<IAcadmeicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester updated successfuly!',
      data: result,
    });

    next();
  },
);

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
};
