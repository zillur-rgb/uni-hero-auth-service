/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express'
import config from '../config'
import { IGenericErrorMessage } from '../types/error.type'
import handleValidationError from '../errors/handleValidationError'
import ApiError from '../errors/ApiError'
import { errorLogger } from '../shared/logger'
import { ZodError } from 'zod'
import handleZodError from '../errors/handleZodError'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // console is enough for us to see the logs in development mode but
  // it is not enough in pproduction mode
  config.env === 'development'
    ? console.log('Global error handler: ', error)
    : errorLogger.error('Global error handler: ', error)

  let statusCode = 500
  let message = 'Something went worng!'
  let errorMessages: IGenericErrorMessage[] = []

  // For validation error
  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    ;(statusCode = error?.statusCode),
      (message = error?.message),
      (errorMessages = error?.message
        ? [{ path: '', message: error?.message }]
        : [])
  } else if (error instanceof Error) {
    ;(message = error?.message),
      (errorMessages = error?.message
        ? [{ path: '', message: error?.message }]
        : [])
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandler
