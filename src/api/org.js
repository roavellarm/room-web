import axios from './'
import { retrieveData } from '../helpers/storage'

export const getUserOrgs = () => {
  return axios({
    method: 'get',
    url: '/org',
    headers: { ...retrieveData() },
  })
}
