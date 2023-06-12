import { NextFunction, Request, Response } from 'express'
import config from '../config'
import { IGenericErrorMessage } from '../types/error.type'
import handleValidationError from '../errors/handleValidationError'
import ApiError from '../errors/ApiError'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'Something went worng!'
  let errorMessages: IGenericErrorMessage[] = []

  // For validation error
  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ApiError) {
    ;(statusCode = err?.statusCode),
      (message = err?.message),
      (errorMessages = err?.message
        ? [{ path: '', message: err?.message }]
        : [])
  } else if (err instanceof Error) {
    ;(message = err?.message),
      (errorMessages = err?.message
        ? [{ path: '', message: err?.message }]
        : [])
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
