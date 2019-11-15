import axios from './'

export const sendFeedback = data => axios.post(`/feedback`, data)

// export const update = (id, data) => axios.put(`/feedback/${id}`, data)
