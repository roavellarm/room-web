import axios from './index'

const base = '/auth'

export const signUp = data => axios.post(base, data)
export const signIn = data => axios.post(`${base}/sign_in`, data)
export const signOut = data => axios.delete(`${base}/sign_out`, data)
