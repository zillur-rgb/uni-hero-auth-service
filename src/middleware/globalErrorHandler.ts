import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'Something went wrong' })
  }
  next()
}

export default globalErrorHandler
