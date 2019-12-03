import axios from './'

const base = '/user'

export const updateUserSessionTime = () =>
  axios.put(`${base}/update-user-session`, {})

export const enterInRoom = id => axios.put(`/room_access`, { id })

export const leaveRooms = id => axios.put(`user/${id}/leave_rooms`)

export const updateUserInfo = (userId, { id, mood, ...data }) => {
  const dataToSend = { ...data, mood: mood }
  return axios.put(`${base}/${userId}`, dataToSend)
}
