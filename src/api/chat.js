import axios from './'

const base = '/chat'

export const getMessages = (userId, roomId) =>
  axios.get(`${base}/getMessages/${userId}/${roomId}`)
