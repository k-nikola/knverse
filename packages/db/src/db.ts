import mongoose from 'mongoose'

export async function connectToDb(dbUri: string) {
  console.log('⚡️[server]: Trying to establish DB connection...')
  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('⚡️[server]: Database connection established ✅')
    })
    .catch((err) => {
      console.log(
        '⚡️[server]: Could not establish connection to the DB ⭕',
        err
      )
      process.exit(1)
    })
}
