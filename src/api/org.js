import axios from './'
import { getUser } from '../helpers/handleUser'

export const getUserOrgs = () => axios.get('/org')

export const addNewMember = (id, data) => {
  // debugger
  // TODO
  // console.log(data)
  // data não deve enviar org_id, apenas { email: "user@email.com" }
  axios.put(`/org/${id}/add_member`, data)
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
    data: params,
  })
}
