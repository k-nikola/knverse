import { object, string, ref } from 'yup'

export const createUserSchema = object({
  body: object({
    name: string().required(
      'Missing required field name: Please provide a name.'
    ),
    password: string()
      .required('Missing required field password: Please provide a password')
      .min(6, 'Password should be at least 6 characters long'),
    email: string().email('Please provide a valid email.').required(),
  }),
})
