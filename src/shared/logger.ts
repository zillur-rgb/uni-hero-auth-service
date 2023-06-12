/* eslint-disable no-undef */
import { createLogger, format, transports } from 'winston'
import path from 'path'
import DailyRotateFile from 'winston-daily-rotate-file'

const { combine, timestamp, label, printf } = format

// Adding customize logging message format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} [${label}] ${level}: ${message}`
})

const successLogger = createLogger({
  level: 'info',
  // And in here we are utilizing the function we created for formatting
  format: combine(label({ label: 'UH Success' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),

    new DailyRotateFile({
      level: 'info',
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'UH-%DATE%-success.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  // And in here we are utilizing the function we created for formatting
  format: combine(label({ label: 'UH Error' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      level: 'error',
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'UH-%DATE%-error.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { successLogger, errorLogger }
