import useSWR from 'swr'
import axios from 'axios'
import { signupDto, loginDto } from './types'
import Cookie from 'js-cookie'

import { api } from '../../utils/api'

export const signup = async (payload: signupDto) => {
  const result = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/signup`,
    payload,
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  )
  const { data, status } = result
  Cookie.set('user', JSON.stringify(data))

  return { data, status, isLoading: false, isError: status !== 201 }
}

export const signin = async (payload: loginDto) => {
  try {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/signin`,
      payload,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    const { data, status } = result
    Cookie.set('user', JSON.stringify(data))

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

export const useUser = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
    api
  )
  return {
    data: data?.data,
    isLoading: !error && !data,
    error,
  }
}
