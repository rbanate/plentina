import { useFormik } from 'formik'
import Router from 'next/router'

import { validationSchema } from '../../libs/user/types'

import { signup } from '../../libs/user'
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const info = await signup(values)
      if (info.isError) {
        console.log({ info })
      } else {
        formik.resetForm()
        Router.push('/leads')
      }
    },
  })

  return (
    <div className="mt-10">
      <h1 className="text-lg">Please fill out the form to Signup</h1>
      <form
        className="px-8 pt-6 pb-8 mt-4 mb-4 bg-white rounded shadow-md"
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
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="firstName"
          >
            First name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            id="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
            placeholder="First name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="lastName"
          >
            Last name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            id="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
            placeholder="Last name"
          />
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
            {...formik.getFieldProps('password')}
            placeholder="******************"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs italic text-red-500">
              Please provide a password.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className={`mb-3 w-full px-3 py-2 leading-tight ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500'
                : 'border'
            } focus:shadow-outline appearance-none  rounded border text-gray-700 shadow focus:outline-none`}
            id="confirmPassword"
            type="password"
            {...formik.getFieldProps('confirmPassword')}
            placeholder="******************"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-xs italic text-red-500">Passwords don't match</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Signup
          </button>

          <a
            className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
            href="/"
          >
            Already a member? Signin
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
