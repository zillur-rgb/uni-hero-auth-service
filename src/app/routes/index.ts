import express from 'express'
import { UserRoute } from '../modules/user/user.routes'
import { AcademicSemesterRoute } from '../modules/academicSemster/academicSemester.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
