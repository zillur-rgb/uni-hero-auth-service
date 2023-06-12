import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Aplication route
app.use('/api/v1/users', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!')
  // next()
  //   throw new ApiError(401, 'Forbidden')
})

// Global error handler
app.use(globalErrorHandler)
export default app
