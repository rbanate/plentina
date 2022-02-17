import * as yup from 'yup'

export type createLeadDto = {
  email: string
  firstName: string
  lastName: string
  mobileNumber: string
  officeNumber?: string
}

export type updateLeadDto = Partial<createLeadDto>

export type LeadData = {
  id: number
  email: string
  firstName: string
  lastName: string
  mobileNumber: string
  officeNumber?: string
  companyName?: string
}

export const validationSchema = yup.object({
  mobileNumber: yup
    .string()
    .min(10, 'Mobile number shoud be at least 10 characters long')
    .required('Mobile number is required'),
  email: yup.string().email('Enter a valid email').required(''),
})
