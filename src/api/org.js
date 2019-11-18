import axios from './'
import { retrieveData } from '../helpers/storage'
import { getUser } from '../helpers/handleUser'

export const getUserOrgs = () => {
  return axios({
    method: 'get',
    url: '/org',
    headers: { ...retrieveData() },
  })
}

export const createUserOrg = data => {
  const params = {
    user_id: getUser().id,
    name: data.name,
    description: data.description,
    image: data.image,
  }
  return axios({
    method: 'post',
    url: '/org',
    headers: { ...retrieveData() },
    data: params,
  })
}
