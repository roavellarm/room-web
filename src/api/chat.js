import axios from './'

const base = '/chat'

export const sendMessage = (room_id, message) =>
  axios.post(`${base}`, { message, room_id })

export const getMessages = roomId => axios.get(`${base}/${roomId}`)
