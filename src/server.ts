import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, successLogger } from './shared/logger'
import { Server } from 'http'

let server: Server
process.on('uncaughtException', (error) => {
  errorLogger.error('Uncaught exception is detected...', error)
  process.exit(1)
})

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    server = app.listen(config.port, () => {
      successLogger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('error from server: ', error)
  }

  process.on('unhandledRejection', (error) => {
    errorLogger.error(
      'Unhandled rejection is detected, we are closing our server',
    )

    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    }
  })
}

main()

process.on('SIGTERM', () => {
  successLogger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
