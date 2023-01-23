import { Express, request, Request, response, Response } from 'express'
import { config } from '@knverse/shared'
import { createUserSchema } from '../schemas/user-registration-schema'
import { validateRegistrationRequest } from '../validators/validate-registration-request'
import { createUserHandler } from '../controllers/user-registration-controller'

const userRegistrationConfig = config.services.userRegistration

export function userRegistrationRoutes(app: Express) {
  app.post(
    '/api/users',
    validateRegistrationRequest(createUserSchema),
    createUserHandler
  )
  app.get('/api/health', (req: Request, res: Response) => {
    res
      .status(200)
      .send({
        userRegistration: { health: 'OK', version: userRegistrationConfig.ver },
      })
  })
}
