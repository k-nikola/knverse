import { log, UserDocument, userModel } from '@knverse/shared'
import { DocumentDefinition } from 'mongoose'

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await userModel.create(input)
  } catch (err) {
    log.error(`⭕ Could not create user model from data provided. ${err}`)
    throw err
  }
}
