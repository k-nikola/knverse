import express, { Express } from 'express'
import { config, log } from '@knverse/shared'
import { userRegistrationRoutes } from './routes/user-registartion-routes'
import { connectToDb } from '@knverse/db'

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const userRegistrationConfig = config.services.userRegistration
const dbUri = process.env.DB_URI || config.db.uri

app.listen(userRegistrationConfig.port, () => {
  log.info(
    `⚡️Launching user registration service version ${userRegistrationConfig.ver}`
  )
  log.info(
    `⚡️Server listening at http://localhost:${userRegistrationConfig.port}`
  )
  connectToDb(dbUri)
})

userRegistrationRoutes(app)

export default app
