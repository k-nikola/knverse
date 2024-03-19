import { Express, Request, Response } from 'express'
import { log } from '@knverse/shared'
import { createUserSchema } from '../schemas/user-registration-schema'
import { validateRegistrationRequest } from '../validators/validate-registration-request'
import { createUserHandler } from '../controllers/user-registration-controller'

export function userRegistrationRoutes(app: Express) {
  app.post(
    '/api/users',
    validateRegistrationRequest(createUserSchema),
    createUserHandler
  )
  app.get('/api/status', (req: Request, res: Response) => {
    log.info(`⚡️ ${req.method} ${req.url} source ${req.ip}(${req.hostname})`)
    res.status(200).send({
      userRegistration: {
        health: 'OK',
        version: process.env.npm_package_version,
      },
    })
  })
}
