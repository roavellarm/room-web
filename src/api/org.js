import axios from './'
import { retrieveData } from '../helpers/storage'

export const getUserOrgs = () => {
  return axios({
    method: 'get',
    url: '/org',
    headers: { ...retrieveData() },
  })
}

export const createUserOrg = (id, data) => {
  return axios({
    method: 'post',
    url: `/org/${id}`,
    headers: { ...retrieveData() },
    params: data,
  })
}
