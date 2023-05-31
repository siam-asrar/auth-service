import express, { Application, Request, Response, urlencoded } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

app.use(urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response): void => {
  res.send('Connected to the University Management Auth Service')
})

export default app
