import mongoose, { CastError } from 'mongoose'
import { IGenericErrorMessage } from '../types/error.type'
import { IGenericErrorResponse } from '../types/common.types'

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    },
  )

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
