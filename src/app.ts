import cors from 'cors'
import express, { Application, NextFunction, Request, Response, urlencoded } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/route/index'

const app: Application = express()

app.use(cors())

app.use(express.json())

app.use(urlencoded({ extended: true }))

app.use('/api/v1/', routes)

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [{
      path: req.originalUrl,
      message: 'API not found'
    }]
  })
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.send('Connected to 🔐 Service')
})

export default app
