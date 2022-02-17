import { FormikErrors, FormikValues, useFormik } from 'formik'
import * as yup from 'yup'
import Router from 'next/router'
import { signin } from '../../libs/user'

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      notfound: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const info = await signin(values)
      console.log({ info })
      if (info.isError) {
        const errors: FormikErrors<FormikValues> = {
          notfound: 'user not found',
        }
        formik.setErrors(errors)
        return errors
      }
      Router.push('/leads')
    },
  })

  return (
    <form
      className="px-8 pt-6 pb-8 mb-4 text-left bg-white rounded shadow-md"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className={`mb-3 w-full px-3 py-2 leading-tight ${
            formik.touched.email && formik.errors.email
              ? 'border-red-500'
              : 'border'
          } focus:shadow-outline appearance-none  rounded border text-gray-700 shadow focus:outline-none`}
          id="email"
          type="text"
          {...formik.getFieldProps('email')}
          placeholder="Email Address"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-xs italic text-left text-red-500">
            Please input a valid email.
          </p>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className={`mb-3 w-full px-3 py-2 leading-tight ${
            formik.touched.password && formik.errors.password
              ? 'border-red-500'
              : 'border'
          } focus:shadow-outline appearance-none  rounded border text-gray-700 shadow focus:outline-none`}
          id="password"
          type="password"
          placeholder="******************"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-xs italic text-red-500">
            Please input a password.
          </p>
        )}
      </div>
      <div className="flex flex-col ">
        {formik.errors?.notfound && (
          <p className="mb-6 text-xs italic text-red-500 ">
            Invalid Email or Password
          </p>
        )}
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>

          <a
            className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            href="/signup"
          >
            Not yet a member? Signup
          </a>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
