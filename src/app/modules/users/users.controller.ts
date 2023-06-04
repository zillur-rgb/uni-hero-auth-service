import { NextFunction, Request, Response } from 'express'
import userServices from './users.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await userServices.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User created succesfully',
      data: result,
    })
  } catch (error) {
    next('Cannot create user')
  }
}

export default {
  createUser,
}
