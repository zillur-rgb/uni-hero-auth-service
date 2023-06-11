/* eslint-disable no-undef */
import { createLogger, format, transports } from 'winston'
import path from 'path'

const { combine, timestamp, label, printf, prettyPrint } = format

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
  format: combine(
    label({ label: 'UH Success' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  // And in here we are utilizing the function we created for formatting
  format: combine(
    label({ label: 'UH Success' }),
    timestamp(),
    myFormat,
    prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { successLogger, errorLogger }
