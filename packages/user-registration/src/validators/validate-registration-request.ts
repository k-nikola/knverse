import { AnySchema } from 'yup'
import { Request, Response, NextFunction } from 'express'

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
      return res.status(409).send(err)
    }
  }
