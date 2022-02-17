import useSWR from 'swr'

import { createLeadDto, updateLeadDto, LeadData } from './types'

import { api, axiosFetcher } from '../../utils/api'
import { BaseResponse } from '../common'

export const addLead = async (payload: createLeadDto) => {
  const result = await api.post(
    `${process.env.NEXT_PUBLIC_API_URL}/leads`,
    payload
  )
  const { data, status } = result

  return { data, status, isLoading: false, isError: status !== 201 }
}

export const updatedLead = async (id: number, payload: updateLeadDto) => {
  try {
    const result = await api.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/leads/${id}`,
      payload
    )
    const { data, status } = result

    return { data, status, isLoading: false, isError: status !== 200 }
  } catch (error) {
    return {
      status: 400,
      isLoading: false,
      isError: true,
      error,
    }
  }
}

export const deleteLead = async (id: number) => {
  try {
    const result = await api.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/leads/${id}`
    )
    const { data, status } = result

    return { data, status, isLoading: false, isError: status !== 200 }
  } catch (error) {
    return {
      status: 400,
      isLoading: false,
      isError: true,
      error,
    }
  }
}

export const useLeads = (): BaseResponse<LeadData[]> => {
  const result = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/leads`, api)
  const { data, error, mutate } = result
  return {
    data: data?.data || [],
    isLoading: !error && !data,
    error: data?.status !== 200,
    status: data?.status || 400,
    mutate,
  }
}
