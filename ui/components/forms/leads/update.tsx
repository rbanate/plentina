import { useState, FC } from 'react'
import { useFormik } from 'formik'
import { LeadData, validationSchema } from '../../../libs/leads/types'

import { updatedLead } from '../../../libs/leads'

type Props = {
  data?: LeadData
  onCancel: () => void | void
  onError: () => void | void
  onSuccess: () => void | void
}
const UpdateLeadForm: FC<Props> = ({ data, onSuccess, onError, onCancel }) => {
  const formik = useFormik({
    initialValues: {
      email: data?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      mobileNumber: data?.mobileNumber,
      officeNumber: data?.officeNumber,
      companyName: data?.companyName,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const info = await updatedLead(data?.id || 0, values)
      if (info.isError) {
        onError()
      } else {
        onSuccess()
        formik.resetForm()
      }
    },
  })

  const handleSubmit = async () => {
    const valid = await formik.validateForm()
    if (valid) formik.submitForm()
  }

  return (
    <form autoComplete="off" className="w-full lg:w-1/4">
      <div className="w-full mt-10">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <div className="mb-5 text-lg font-bold text-gray-900">
            Update Lead
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
              } focus:shadow-outline appearance-none  rounded border text-gray-700  focus:outline-none`}
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
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
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
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
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
              } focus:shadow-outline appearance-none  rounded border text-gray-700  focus:outline-none`}
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
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
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
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:shadow-outline focus:outline-none"
              id="companyName"
              type="text"
              {...formik.getFieldProps('companyName')}
              placeholder="Company Name"
            />
          </div>

          <div className="flex items-center justify-between mt-3">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none"
              type="button"
              disabled={!formik.isValid || formik.isSubmitting}
              onClick={handleSubmit}
            >
              Update Lead
            </button>
            <button
              className="py-2 ml-2 font-semibold text-white bg-red-500 rounded-md text-md px-7"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </form>
  )
}

export default UpdateLeadForm
