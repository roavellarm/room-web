import axios from './'

const base = '/user'

export const updateUserSessionTime = () =>
  axios.put(`${base}/update-user-session`, {})

export const enterInRoom = id => axios.put(`/room_access`, { id })

export const updateUserInfo = (userId, data) =>
  axios.put(`${base}/${userId}`, data)
