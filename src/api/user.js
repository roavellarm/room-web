import axios from './'

const base = '/user'

export const updateUserSessionTime = userId =>
  axios.put(`${base}/updateUserSessionTime/${userId}`, {})

export const enterInRoom = (userId, roomId) =>
  axios.put(`${base}/onEnterInRoom/${userId}`, { room_id: roomId })
