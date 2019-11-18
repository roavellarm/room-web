import axios from './'

const base = '/room'

export const getRoomsByOrg = orgId => {
  return axios.get(`${base}/${orgId}`)
}

export const createRoom = data => {
  console.log(data)
  return axios.post(base, data)
}
