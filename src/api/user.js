import axios from './'

const base = '/user'

export const updateUserSessionTime = () =>
  axios.put(`${base}/update-user-session`, {})

export const enterInRoom = room_id => axios.put(`/room_access`, { room_id })

export const updateMood = mood => axios.put(`${base}/change_mood`, { mood })
