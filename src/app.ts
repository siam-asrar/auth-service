import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import notFound from './app/errors/notFoundError'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/route/index'

const app: Application = express()

app.use(cors())

app.use(express.json())

app.use(urlencoded({ extended: true }))

app.use('/api/v1/', routes)

app.use(globalErrorHandler);

app.use(notFound)

app.get('/', (req: Request, res: Response) => {
  res.send('Connected to 🔐 Service')
})

export default app
