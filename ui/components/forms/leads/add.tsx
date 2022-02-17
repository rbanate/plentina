import { useFormik } from 'formik'
import { validationSchema } from '../../../libs/leads/types'

import { addLead } from '../../../libs/leads'

const AddLeadForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      officeNumber: '',
      companyName: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const info = await addLead(values)
      if (info.isError) {
        console.log({ info })
      } else {
        console.log('submitted')
        formik.resetForm()
        onSuccess()
      }
    },
  })

  const handleSubmit = async () => {
    const valid = await formik.validateForm()
    if (valid) formik.submitForm()
  }

  return (
    <form autoComplete="off">
      <div className="mt-10">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-5 text-lg font-bold text-gray-900">
            Add New Lead
          </div>
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
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
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
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className={`mb-3 w-full px-3 py-2 leading-tight ${
                formik.touched.mobileNumber && formik.errors.mobileNumber
                  ? 'border-red-500'
                  : 'border'
              } focus:shadow-outline appearance-none  rounded border text-gray-700 shadow focus:outline-none`}
              id="mobileNumber"
              type="email"
              {...formik.getFieldProps('mobileNumber')}
              placeholder="917-235-2352"
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber && (
              <p className="text-xs italic text-left text-red-500">
                Please input a valid Mobile Number.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="officeNumber"
            >
              Office Number
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
              id="officeNumber"
              type="text"
              {...formik.getFieldProps('officeNumber')}
              placeholder="+63046-511-4748"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="officeNumber"
            >
              Company Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
              id="companyName"
              type="text"
              {...formik.getFieldProps('companyName')}
              placeholder="Company Name"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none"
              type="button"
              disabled={!formik.isValid || formik.isSubmitting}
              onClick={handleSubmit}
            >
              Add Lead
            </button>
          </div>
        </form>
      </div>
    </form>
  )
}

export default AddLeadForm
