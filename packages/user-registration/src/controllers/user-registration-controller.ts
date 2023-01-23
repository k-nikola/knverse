import { Request, Response } from 'express'
import { createUser } from '../service/user-registration-service'
import { omit } from 'lodash'

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body)
    return res.send(omit(user.toJSON(), 'password'))
  } catch (err) {
    return res.status(409).send({
      err: `Could not create user from data. ${err}`,
      data: req.body,
    })
  }
}