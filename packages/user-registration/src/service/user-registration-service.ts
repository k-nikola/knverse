import { UserDocument, userModel } from '@knverse/shared'
import { DocumentDefinition } from 'mongoose'

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await userModel.create(input)
  } catch (err) {
    throw err
  }
}
