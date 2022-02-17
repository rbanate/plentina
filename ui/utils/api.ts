import axios from 'axios'
import Cookie from 'js-cookie'
export const api = axios.create({
  baseURL: process.env.API_URL,
})

api.interceptors.request.use(
  (config) => {
    const user = Cookie.get('user')
    const data = user ? JSON.parse(user) : ''
    const token = data?.access_token
    config.headers = {
      Authorization: `Bearer ${token}`,
      'Content-MD5': 'application/json',
      Accept: 'application/json',
    }
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Do something with response error
    if (!error.response) return error

    switch (error.response.status) {
      case 401: {
        const payload = error.response
          ? {
              status: 401,
              data: error.response.messsage || error.response,
            }
          : {
              status: 401,
              data: 'User not Authorized',
            }

        return payload
      }
      case 403: {
        const payload = error.response
          ? {
              status: 403,
              message: error.response.data.messsage || error.response,
            }
          : {
              status: 403,
              message: 'User not Authorized',
            }
        return payload
      }
      case 422:
      case 404:
        return error.response
      case 400: {
        const payload = error.response
          ? {
              status: 400,
              message: error.response.data || error.response,
            }
          : {
              status: 400,
              message: 'Bad Request',
            }
        return payload
      }
      case 409:
        return { status: 409, message: error.response.data }
      default:
        return error
    }
  }
)

export const axiosFetcher = async (url: string, serializedParams?: any) => {
  if (serializedParams) {
    const params = JSON.parse(serializedParams)
    const response = await api.get(url, {
      params: params,
    })
    return response.data
  } else {
    const response = await api.get(url)
    return response.data
  }
}
