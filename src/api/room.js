import axios from './'

export const getRoomsByOrg = org_id => {
  return axios.get(`/org/${org_id}`)
}

export const createRoom = data => axios.post('/room', data)
