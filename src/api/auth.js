import axios from './index'
import { retrieveData } from '../helpers/storage'

const base = '/auth'

export const signUp = data => {
  return axios({
    method: 'post',
    url: base,
    data,
  })
}

export const signIn = data => {
  const teste = axios({
    method: 'post',
    url: `${base}/sign_in`,
    headers: { ...retrieveData() },
    data,
  })
  return teste
}

export const signOut = data => {
  return axios({
    method: 'delete',
    url: `${base}/sign_out`,
    headers: { ...retrieveData() },
    data,
  })
}
