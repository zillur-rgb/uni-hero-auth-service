import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, successLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      successLogger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('error from server: ', error)
  }
}

main()
