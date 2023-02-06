import mongoose from 'mongoose'
import { log } from '@knverse/shared'

export async function connectToDb(dbUri: string) {
  log.info('⚡️Trying to establish DB connection...')
  return mongoose
    .connect(dbUri, {
      authSource: 'admin',
    })
    .then(() => {
      log.info('⚡️Database connection established ✅')
    })
    .catch((err) => {
      log.error('⚡️Could not establish connection to the DB ⭕', err)
      process.exit(1)
    })
}
