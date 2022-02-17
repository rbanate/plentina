import { KeyedMutator } from 'swr'

export type BaseResponse<T> = {
  isLoading: boolean
  error: boolean
  mutate: KeyedMutator<any>
  data: T
  status: number
}
