import axios from './'

export const sendFeedback = data => axios.post(`/feedback`, data)
