import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
import APIError from './errors/ApiError'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/users/', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Connected to 🔐 Service')
})

app.get('/validationError', () => {
  throw new APIError(400, 'There was an Error, please try again later')
})

app.get('/unhandledRejectionError', async () => {
  Promise.reject(new Error('Unhandled rejection error'))
})

app.use(globalErrorHandler);

export default app
