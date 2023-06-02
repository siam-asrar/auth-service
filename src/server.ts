import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    logger.info('🛢  - Successfully Connected to DB')
    app.listen(config.port, () => {
      logger.info(`App is listening to port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect to DB:', err)
  }
}
main()
