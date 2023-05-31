import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { createUser } from './app/modules/users/users.service'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await createUser({
    id: '999',
    password: '111',
    role: 'student',
  })
  res.send('Hello World!')
})
export default app
