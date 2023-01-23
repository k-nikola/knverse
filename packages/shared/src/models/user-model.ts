import * as moongose from 'mongoose'
import * as bcrypt from 'bcrypt'

export interface UserDocument extends moongose.Document {
  email: string
  name: string
  password: string
  fullName: string
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new moongose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hashSync(this.password, salt)
    this.password = hashedPassword
  }
})

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument
  return bcrypt.compare(candidatePassword, user.password).catch((err) => false)
}

export const userModel = moongose.model<UserDocument>('User', UserSchema)
