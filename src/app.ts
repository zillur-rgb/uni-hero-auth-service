import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Aplication route
app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
export default app
