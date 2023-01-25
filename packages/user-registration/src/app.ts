import express, { Express } from 'express'
import { config } from '@knverse/shared'
import { userRegistrationRoutes } from './routes/user-registartion-routes'
import { connectToDb } from '@knverse/db'

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const userRegistrationConfig = config.services.userRegistration
const dbUri = config.db.uri

app.listen(userRegistrationConfig.port, () => {
  console.log(
    `⚡️[server]: Launching user registration service version ${userRegistrationConfig.ver}`
  )
  console.log(
    `⚡️[server]: Server listening at http://localhost:${userRegistrationConfig.port}`
  )
  connectToDb(dbUri)
})

userRegistrationRoutes(app)

export default app
