import { Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { UserTypes } from './user.type';

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;
    const result = await UserService.createStudent(student, userData);

    sendResponse<UserTypes>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created succesfully',
      data: result,
    });
  },
);

export const UserController = {
  createStudent,
};
