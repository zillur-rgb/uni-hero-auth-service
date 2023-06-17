import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/user/user.routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { AcademicSemesterRoute } from './app/modules/academicSemster/academicSemester.route';
import routes from './app/routes';
import httpStatus from 'http-status';
import { AcademicFacultyRoute } from './app/modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoute } from './app/modules/academicDepartment/academicDepartment.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Aplication route
app.use('/api/v1', routes);
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/academic-semesters', AcademicSemesterRoute);
app.use('/api/v1/academic-faculty', AcademicFacultyRoute);
app.use('/api/v1/academic-department', AcademicDepartmentRoute);

// app.get('/', async (req: Request, res: Response) => {
//   // res.send('Hello World!')
//   // next()
//   throw new ApiError(401, 'Forbidden')
// })

// Global error handler
app.use(globalErrorHandler);

// Handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Route not exists',
      },
    ],
  });
  next();
});
export default app;
