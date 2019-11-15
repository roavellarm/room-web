import axios from './index'
import { retrieveData } from '../helpers/storage'

const base = '/auth'

// export const signUp = data => axios.post(base, data)

export const signUp = data => {
  return axios({
    method: 'post',
    url: base,
    headers: { ...retrieveData() },
    params: data,
  })
}

// export const signIn = data => axios.post(`${base}/sign_in`, data)

export const signIn = data => {
  const teste = axios({
    method: 'post',
    url: `${base}/sign_in`,
    headers: { ...retrieveData() },
    params: data,
  })
  return teste
}

// export const signOut = data => axios.delete(`${base}/sign_out`, data)

export const signOut = data => {
  return axios({
    method: 'delete',
    url: `${base}/sign_out`,
    headers: { ...retrieveData() },
    params: data,
  })
}
