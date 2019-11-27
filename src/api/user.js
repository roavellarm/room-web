import axios from './'

const base = '/user'

export const updateUserSessionTime = () =>
  axios.put(`${base}/update-user-session`, {})

export const enterInRoom = room_id => axios.put(`/room_access`, { room_id })

export const updateUserInfo = (userId, data) =>
  axios.put(`${base}/${userId}`, data)
