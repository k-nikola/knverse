import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'
import { log } from '@knverse/shared'

export const validateRegistrationRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (err) {
      log.error(`⭕ Unable validate registration request.`, err)
      return res.status(409).send(err)
    }
  }
