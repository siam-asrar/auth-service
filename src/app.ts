import cors from 'cors'
import express, { Application, Request, Response, urlencoded } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import router from './app/routes'
import notFound from './errors/notFoundError'
<<<<<<< HEAD

=======
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922

const app: Application = express()

app.use(cors())

app.use(express.json())

app.use(urlencoded({ extended: true }))

app.use('/api/v1/', router)

app.use(globalErrorHandler)

app.get('/', (req: Request, res: Response): void => {
  res.send('Connected to 🔐 Service')
})

app.use(notFound)

<<<<<<< HEAD
// userTest.testFacultyId()
// userTest.testStudentId()
// userTest.testAdminId()

=======
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922
export default app
