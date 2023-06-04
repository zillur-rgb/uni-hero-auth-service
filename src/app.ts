import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './middleware/globalErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Aplication route
app.use('/api/v1/users', usersRouter)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Hello World!')
//   // next()
//   throw new ApiError(401, 'Forbidden')
// })

// Global error handler
app.use(globalErrorHandler)
export default app
