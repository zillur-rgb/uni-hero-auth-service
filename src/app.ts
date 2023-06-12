import express, { Application } from 'express'
import cors from 'cors'
import { UserRoute } from './app/modules/user/user.routes'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Aplication route
app.use('/api/v1/users', UserRoute)

// app.get('/', async (req: Request, res: Response) => {
//   // res.send('Hello World!')
//   // next()
//   throw new ApiError(401, 'Forbidden')
// })

// Global error handler
app.use(globalErrorHandler)
export default app
