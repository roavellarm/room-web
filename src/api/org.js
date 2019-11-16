import axios from './'
import { retrieveData } from '../helpers/storage'

export const getUserOrgs = () => {
  return axios({
    method: 'get',
    url: '/org',
    headers: { ...retrieveData() },
  })
}

export const createUserOrg = data => {
  return axios({
    method: 'post',
    url: '/org',
    headers: { ...retrieveData() },
    data: data,
  })
}

// export const sendFeedback = data => axios.post(`/feedback`, data)
