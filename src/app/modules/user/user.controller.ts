import { Request, Response } from 'express'
import userServices from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userServices.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User created succesfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
      error,
    })
  }
}

export default {
  createUser,
}
