import * as yup from 'yup'

export type signupDto = {
  email: string
  firstName?: string
  lastName?: string
  password?: string
  confirmPassword?: string
}

export type loginDto = {
  email: string
  password: string
}

export type UserData = {
  id: number
  firstName: string
  lastName: string
}

export const validationSchema = yup.object({
  password: yup.string().required('Please input your Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match!")
    .required('Please confirm your Password'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
})
