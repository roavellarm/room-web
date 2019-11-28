import axios from './'
import { getUser } from '../helpers/handleUser'

export const getUserOrgs = () => axios.get('/org')

export const addNewMember = (id, { email }) =>
  axios.put(`/org/${id}/add_member`, { email })

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
    data: params,
  })
}
