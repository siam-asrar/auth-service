import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

let server: Server

errorLogger.on('uncaughtException', err => {
  errorLogger.error('Uncaught exception detected, closing server', err)
  process.exit(1)
})

async function dbConnect() {
  try {
    await mongoose.connect(config.db_url as string)
    logger.info('Successfully Connected to 🛢')
    server = app.listen(config.port, () => {
      logger.info(`App is listening to port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect to DB:', err)
  }

  process.on('unhandledRejection', err => {
    errorLogger.error(
      'App is closed on port ${config.port} due to an unhandled promise rejection'
    )
    if (server) {
      server.close(() => {
        errorLogger.error(err)
      })
    } else {
      process.exit(1)
    }
  })
}

dbConnect()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});

