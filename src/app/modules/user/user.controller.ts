import { Request, RequestHandler, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { UserTypes } from './user.type'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body
    const result = await UserService.createUser(user)

    sendResponse<UserTypes>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created succesfully',
      data: result,
    })

    // res.status(200).json({
    //   success: true,
    //   message: 'user created successfully!',
    //   data: result,
    // })
  },
)

export const UserController = {
  createUser,
}
