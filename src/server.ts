import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    console.log('🛢  - Successfully Connected to DB')
    app.listen(config.port, () => {
      console.log(`App is listening to port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect to DB:', err)
  }
}
main()
